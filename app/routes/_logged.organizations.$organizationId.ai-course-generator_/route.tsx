import React, { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Select,
  InputNumber,
  Button,
  Form,
  Spin,
  message,
  Slider,
  Switch,
} from 'antd'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AICourseGeneratorPage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [loading, setLoading] = useState(false)
  const { user } = useUserContext()

  const generateCourse = Api.ai.generateText.useMutation()
  const createCourse = Api.course.create.useMutation()
  const updateCourse = Api.course.update.useMutation()

  const [userProgress, setUserProgress] = useState(0)
  const [learningStyle, setLearningStyle] = useState('visual')

  useEffect(() => {
    // Fetch user progress and learning style
    const fetchUserData = async () => {
      const progress = await Api.user.getProgress.useQuery({ userId: user?.id })
      const style = await Api.user.getLearningStyle.useQuery({ userId: user?.id })
      setUserProgress(progress)
      setLearningStyle(style)
    }
    fetchUserData()
  }, [user])

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const prompt = `Generate a personalized learning path for the topic: ${values.topic}. 
        Initial difficulty level: ${values.difficultyLevel}. 
        Time commitment: ${values.timeCommitment} hours.
        User progress: ${userProgress}%.
        Learning style preference: ${learningStyle}.
        Include content from various reputable sources.
        Structure the curriculum with clear milestones and assessments.`

      const { answer } = await generateCourse.mutateAsync({ prompt })

      const newCourse = await createCourse.mutateAsync({
        data: {
          title: values.topic,
          description: answer,
          duration: values.timeCommitment,
          difficultyLevel: values.difficultyLevel,
          organizationId,
          learningPlatformId: 'default-platform-id',
          contentSources: values.contentSources,
          lastUpdated: new Date(),
        },
      })

      message.success('Course generated and saved successfully!')
      navigate(`/organizations/${organizationId}/courses/${newCourse.id}`)

      // Schedule periodic content updates
      scheduleContentUpdate(newCourse.id)
    } catch (error) {
      console.error('Error generating course:', error)
      message.error('Failed to generate course. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const scheduleContentUpdate = (courseId: string) => {
    setInterval(async () => {
      const updatedContent = await Api.ai.updateCourseContent.mutateAsync({ courseId })
      await updateCourse.mutateAsync({
        where: { id: courseId },
        data: { description: updatedContent, lastUpdated: new Date() },
      })
    }, 24 * 60 * 60 * 1000) // Update every 24 hours
  }

  const adjustDifficulty = (progress: number) => {
    const currentDifficulty = form.getFieldValue('difficultyLevel')
    if (progress > 80 && currentDifficulty !== 'Advanced') {
      form.setFieldsValue({ difficultyLevel: 'Advanced' })
    } else if (progress > 40 && progress <= 80 && currentDifficulty !== 'Intermediate') {
      form.setFieldsValue({ difficultyLevel: 'Intermediate' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>AI Course Generator</Title>
        <Paragraph>
          Generate a personalized learning path curated from various sources using
          AI, tailored to your progress and learning style.
        </Paragraph>

        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="topic"
            label="Topic"
            rules={[{ required: true, message: 'Please input the topic!' }]}
          >
            <Input
              prefix={<i className="las la-book"></i>}
              placeholder="Enter the course topic"
            />
          </Form.Item>

          <Form.Item
            name="difficultyLevel"
            label="Initial Difficulty Level"
            rules={[
              {
                required: true,
                message: 'Please select the difficulty level!',
              },
            ]}
          >
            <Select>
              <Select.Option value="Beginner">Beginner</Select.Option>
              <Select.Option value="Intermediate">Intermediate</Select.Option>
              <Select.Option value="Advanced">Advanced</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="timeCommitment"
            label="Time Commitment (hours)"
            rules={[
              { required: true, message: 'Please input the time commitment!' },
            ]}
          >
            <InputNumber
              min={1}
              max={100}
              prefix={<i className="las la-clock"></i>}
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item
            name="contentSources"
            label="Content Sources"
            rules={[
              { required: true, message: 'Please select at least one content source!' },
            ]}
          >
            <Select mode="multiple">
              <Select.Option value="academic">Academic Papers</Select.Option>
              <Select.Option value="industry">Industry Reports</Select.Option>
              <Select.Option value="mooc">MOOC Platforms</Select.Option>
              <Select.Option value="blogs">Expert Blogs</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="adaptiveLearning"
            label="Enable Adaptive Learning"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="learningStylePreference"
            label="Learning Style Preference"
          >
            <Slider
              marks={{
                0: 'Visual',
                50: 'Auditory',
                100: 'Kinesthetic',
              }}
              step={null}
              defaultValue={0}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Generate Personalized Course
            </Button>
          </Form.Item>
        </Form>

        {loading && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Spin size="large" />
            <Text style={{ display: 'block', marginTop: 10 }}>
              Generating your personalized learning path...
            </Text>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
