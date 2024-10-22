import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from '@remix-run/react'
import { Typography, Card, Row, Col, Button, Spin, Modal, List, Table } from 'antd'
const { Title, Text, Paragraph } = Typography
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { motion } from 'framer-motion'
import { Prisma } from '@prisma/client'

export default function CourseComparisonPage() {
  const { organizationId } = useParams()
  const [searchParams] = useSearchParams()
  const courseIds = searchParams.get('ids')?.split(',').filter(Boolean) || []

  const [isAiModalVisible, setIsAiModalVisible] = useState(false)
  const [aiComparison, setAiComparison] = useState('')
  const [error, setError] = useState<string | null>(null)

  const { data: courses, isLoading } = Api.course.findMany.useQuery({
    where: { id: { in: courseIds } },
    include: {
      learningPlatform: true,
      reviews: { include: { user: true } },
      instructor: true,
      curriculum: true,
    },
  })

  type CourseWithRelations = Prisma.CourseGetPayload<{
    include: {
      learningPlatform: true;
      reviews: { include: { user: true } };
      instructor: true;
      curriculum: true;
    }
  }>

  const generateText = Api.ai.generateText.useMutation()

  const handleAiComparison = async () => {
    if (courses && courses.length >= 2) {
      try {
        const prompt = `Compare the following courses:\n${courses.map(course => `- ${course.title}`).join('\n')}\n\nProvide a detailed comparison of these courses, including their content, difficulty, duration, and any other relevant factors.`
        const result = await generateText.mutateAsync({ prompt })
        setAiComparison(result.answer)
        setIsAiModalVisible(true)
      } catch (error) {
        console.error('Error generating AI comparison:', error)
        setError('Failed to generate AI comparison. Please try again.')
      }
    }
  }

  useEffect(() => {
    if (courseIds.length < 2) {
      setError('Please select at least two courses to compare')
    } else {
      setError(null)
    }
  }, [courseIds])

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (error) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>{error}</Title>
      </PageLayout>
    )
  }

  if (!courses || courses.length < 2) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Unable to load selected courses. Please try again.</Title>
      </PageLayout>
    )
  }

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    ...courses.map((course) => ({
      title: course.title,
      dataIndex: course.id,
      key: course.id,
    })),
  ]

  const dataSource = [
    {
      key: 'difficulty',
      feature: 'Difficulty',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: course.difficultyLevel }), {}),
    },
    {
      key: 'duration',
      feature: 'Duration',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: `${course.duration} hours` }), {}),
    },
    {
      key: 'platform',
      feature: 'Platform',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: course.learningPlatform?.name }), {}),
    },
    {
      key: 'instructor',
      feature: 'Instructor',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: course.instructor?.name }), {}),
    },
    {
      key: 'curriculum',
      feature: 'Curriculum',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: course.curriculum?.length || 0 }), {}),
    },
    {
      key: 'reviews',
      feature: 'Reviews',
      ...courses.reduce((acc, course) => ({ ...acc, [course.id]: course.reviews?.length || 0 }), {}),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={2}>Course Comparison</Title>
        <Button onClick={handleAiComparison} style={{ marginBottom: 16 }}>
          AI Comparison
        </Button>

        <Table dataSource={dataSource} columns={columns} pagination={false} />

        <Title level={3} style={{ marginTop: 24 }}>Detailed Comparison</Title>
        <Row gutter={16}>
          {courses.map((course: CourseWithRelations) => (
            <Col span={24 / courses.length} key={course.id}>
              <Card title={course.title}>
                <Paragraph>{course.description}</Paragraph>
                <Text strong>Difficulty: </Text>
                <Text>{course.difficultyLevel}</Text>
                <br />
                <Text strong>Duration: </Text>
                <Text>{course.duration} hours</Text>
                <br />
                <Text strong>Platform: </Text>
                <Text>{course.learningPlatform?.name}</Text>

                <Title level={4} style={{ marginTop: 16 }}>Curriculum</Title>
                {course.curriculum && course.curriculum.length > 0 ? (
                  <List
                    dataSource={course.curriculum}
                    renderItem={(item, index) => (
                      <List.Item>
                        <Text>{`${index + 1}. ${item.title}`}</Text>
                      </List.Item>
                    )}
                  />
                ) : (
                  <Text>No curriculum available</Text>
                )}

                <Title level={4} style={{ marginTop: 16 }}>Instructor</Title>
                {course.instructor ? (
                  <>
                    <Paragraph>{course.instructor.name}</Paragraph>
                    <Paragraph>{course.instructor.bio}</Paragraph>
                  </>
                ) : (
                  <Text>No instructor information available</Text>
                )}

                <Title level={4} style={{ marginTop: 16 }}>Reviews</Title>
                {course.reviews && course.reviews.length > 0 ? (
                  <List
                    dataSource={course.reviews}
                    renderItem={review => (
                      <List.Item>
                        <Text>{review.user?.name}: {review.comment}</Text>
                      </List.Item>
                    )}
                  />
                ) : (
                  <Text>No reviews available</Text>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title="AI Comparison Analysis"
          visible={isAiModalVisible}
          onOk={() => setIsAiModalVisible(false)}
          onCancel={() => setIsAiModalVisible(false)}
          width={800}
        >
          <Paragraph>{aiComparison}</Paragraph>
        </Modal>
      </motion.div>
    </PageLayout>
  )
}
