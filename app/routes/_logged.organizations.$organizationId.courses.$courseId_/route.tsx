import React, { useState, useEffect } from 'react'
import {
  Typography,
  Button,
  Card,
  Row,
  Col,
  Rate,
  List,
  Spin,
  message,
  Tabs,
  Progress,
  Switch,
} from 'antd'
const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { motion } from 'framer-motion'
import { useSocket } from '@/plugins/socket/client/useSocket'

const mockCourseData = {
  id: '1',
  title: 'Introduction to React',
  description: 'Learn the basics of React and build modern web applications.',
  difficultyLevel: 'Intermediate',
  duration: 20,
  learningPlatform: { name: 'Coursera' },
  instructor: {
    name: 'Jane Smith',
    bio: 'Senior React Developer with 8 years of experience. Has taught over 50,000 students worldwide.',
  },
  curriculum: [
    { title: 'Getting Started with React', description: 'Learn React basics and setup your development environment.' },
    { title: 'Components and Props', description: 'Understand the core concepts of React components and props.' },
    { title: 'State and Lifecycle', description: 'Master React state management and component lifecycle.' },
    { title: 'Hooks and Custom Hooks', description: 'Explore React Hooks and create custom hooks for your applications.' },
  ],
  reviews: [
    { id: '1', user: { name: 'Alice Johnson' }, rating: 5, comment: 'Excellent course! Very informative and well-structured.' },
    { id: '2', user: { name: 'Bob Williams' }, rating: 4, comment: 'Great content, but could use more practical exercises.' },
  ],
}

export default function CourseDetailsPage() {
  const { organizationId, courseId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [activeTab, setActiveTab] = useState('1')
  const [isOffline, setIsOffline] = useState(false)
  const [offlineContent, setOfflineContent] = useState(null)
  const [localProgress, setLocalProgress] = useState(0)
  const { isLive } = useSocket()

  const { data: course, isLoading: isCourseLoading } = Api.course.findUnique.useQuery({
    where: { id: courseId },
    include: {
      learningPlatform: true,
      reviews: { include: { user: true } },
      enrollments: true,
    },
  })

  const { data: userEnrollment } = Api.enrollment.findFirst.useQuery({
    where: { userId: user?.id, courseId },
  })

  const { mutateAsync: enrollInCourse } = Api.enrollment.create.useMutation()
  const { mutateAsync: textToAudio } = Api.ai.textToAudio.useMutation()
  const { mutateAsync: audioToText } = Api.ai.audioToText.useMutation()

  useEffect(() => {
    setIsOffline(!navigator.onLine)
    window.addEventListener('online', () => setIsOffline(false))
    window.addEventListener('offline', () => setIsOffline(true))

    const storedContent = localStorage.getItem(`offlineContent-${courseId}`)
    if (storedContent) {
      setOfflineContent(JSON.parse(storedContent))
    }

    const storedProgress = localStorage.getItem(`localProgress-${courseId}`)
    if (storedProgress) {
      setLocalProgress(parseInt(storedProgress, 10))
    }

    return () => {
      window.removeEventListener('online', () => setIsOffline(false))
      window.removeEventListener('offline', () => setIsOffline(true))
    }
  }, [courseId])

  useEffect(() => {
    if (isLive && localProgress > 0) {
      // Sync local progress with server
      Api.enrollment.update.mutate({
        where: { userId_courseId: { userId: user?.id, courseId } },
        data: { progressPercentage: localProgress.toString() },
      })
    }
  }, [isLive, localProgress, user?.id, courseId])

  const handleEnroll = async () => {
    try {
      await enrollInCourse({
        data: {
          enrollmentDate: dayjs().format('YYYY-MM-DD'),
          userId: user?.id,
          courseId: courseId,
        },
      })
      message.success('Successfully enrolled in the course!')
    } catch (error) {
      message.error('Failed to enroll in the course. Please try again.')
    }
  }

  const handleTextToSpeech = async (text) => {
    try {
      const { url } = await textToAudio({ text })
      const audio = new Audio(url)
      audio.play()
    } catch (error) {
      message.error('Failed to convert text to speech.')
    }
  }

  const handleVoiceCommand = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      const audioChunks = []

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data)
      })

      mediaRecorder.addEventListener('stop', async () => {
        const audioBlob = new Blob(audioChunks)
        const audioFile = new File([audioBlob], 'audio.wav', { type: 'audio/wav' })
        const { url } = await Api.upload.uploadPublic.mutateAsync({ file: audioFile })
        const { translation } = await audioToText({ url })
        
        // Process the voice command
        if (translation.toLowerCase().includes('help')) {
          message.info('Help is on the way! What can I assist you with?')
        } else if (translation.toLowerCase().includes('next module')) {
          setActiveTab((prevTab) => (parseInt(prevTab, 10) + 1).toString())
        } else {
          message.info(`I heard: ${translation}. How can I help you with that?`)
        }
      })

      mediaRecorder.start()
      setTimeout(() => mediaRecorder.stop(), 5000) // Record for 5 seconds
    } catch (error) {
      message.error('Failed to process voice command.')
    }
  }

  const updateProgress = (newProgress) => {
    setLocalProgress(newProgress)
    localStorage.setItem(`localProgress-${courseId}`, newProgress.toString())
  }

  if (isCourseLoading) {
    return (
      <PageLayout layout="narrow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Spin size="large" />
        </motion.div>
      </PageLayout>
    )
  }

  if (!course) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Course not found</Title>
      </PageLayout>
    )
  }

  // Use mock data for demonstration
  const courseData = { ...mockCourseData, ...course }

  return (
    <PageLayout layout="narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={2}>{courseData.title}</Title>
        <Paragraph>Detailed information about the course</Paragraph>

        <Card>
          <Row gutter={[16, 16]}>
            <Col span={16}>
              <Paragraph>{courseData.description}</Paragraph>
              <Text strong>Difficulty Level: </Text>
              <Text>{courseData.difficultyLevel}</Text>
              <br />
              <Text strong>Duration: </Text>
              <Text>{courseData.duration} hours</Text>
              <br />
              <Text strong>Learning Platform: </Text>
              <Text>{courseData.learningPlatform?.name}</Text>
            </Col>
            <Col span={8}>
              {!userEnrollment ? (
                <Button
                  type="primary"
                  onClick={handleEnroll}
                  icon={<i className="las la-sign-in-alt"></i>}
                >
                  Enroll in Course
                </Button>
              ) : (
                <Text type="success">
                  <i className="las la-check-circle"></i> You are enrolled in this
                  course
                </Text>
              )}
              <br />
              <br />
              <Switch
                checkedChildren="Online"
                unCheckedChildren="Offline"
                checked={!isOffline}
                disabled
              />
              <br />
              <br />
              <Button onClick={handleVoiceCommand} icon={<i className="las la-microphone"></i>}>
                Voice Command
              </Button>
            </Col>
          </Row>
        </Card>

        <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginTop: '24px' }}>
          <TabPane tab="Curriculum" key="1">
            <Card>
              <List
                itemLayout="horizontal"
                dataSource={isOffline ? offlineContent?.curriculum : courseData.curriculum}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<i className="las la-book"></i>}
                      title={`Module ${index + 1}: ${item.title}`}
                      description={item.description}
                    />
                    <Button onClick={() => handleTextToSpeech(item.description)}>
                      <i className="las la-volume-up"></i>
                    </Button>
                  </List.Item>
                )}
              />
            </Card>
          </TabPane>
          <TabPane tab="Instructor" key="2">
            <Card>
              <Row gutter={[16, 16]}>
                <Col span={4}>
                  <i className="las la-user-tie" style={{ fontSize: '48px' }}></i>
                </Col>
                <Col span={20}>
                  <Text strong>{courseData.instructor.name}</Text>
                  <Paragraph>{courseData.instructor.bio}</Paragraph>
                </Col>
              </Row>
            </Card>
          </TabPane>
          <TabPane tab="Reviews" key="3">
            <List
              itemLayout="vertical"
              dataSource={isOffline ? offlineContent?.reviews : courseData.reviews}
              renderItem={review => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<i className="las la-user-circle"></i>}
                    title={review.user?.name}
                    description={<Rate disabled defaultValue={review.rating || 0} />}
                  />
                  {review.comment}
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>

        <Title level={3} style={{ marginTop: '24px' }}>
          Your Progress
        </Title>
        <Card>
          <Progress percent={localProgress} status="active" />
          <Paragraph>
            You've completed {localProgress}% of the course. Keep up the good work!
          </Paragraph>
          <Button
            type="link"
            onClick={() => {
              updateProgress(Math.min(localProgress + 10, 100));
              navigate(`/organizations/${organizationId}/analytics`);
            }}
            icon={<i className="las la-chart-line"></i>}
          >
            Update Progress and View Detailed Analytics
          </Button>
        </Card>
      </motion.div>
    </PageLayout>
  )
}
