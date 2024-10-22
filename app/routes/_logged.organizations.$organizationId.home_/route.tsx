import React from 'react'
import { Typography, Card, Row, Col, Progress, List, Tag, Button } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: enrollments, isLoading: isLoadingEnrollments } =
    Api.enrollment.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: { include: { learningPlatform: true } } },
    })

  const { data: recommendations, isLoading: isLoadingRecommendations } =
    Api.course.findMany.useQuery({
      take: 3,
      orderBy: { createdAt: 'desc' },
      include: { learningPlatform: true },
    })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Learning Dashboard</Title>
      <Paragraph>
        Welcome to your personalized learning dashboard. Track your progress and
        discover new courses.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <Card title={<Title level={4}>Enrolled Courses</Title>}>
            {isLoadingEnrollments ? (
              <Text>Loading enrolled courses...</Text>
            ) : (
              <List
                dataSource={enrollments}
                renderItem={enrollment => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <i
                          className="las la-book"
                          style={{ fontSize: '24px' }}
                        ></i>
                      }
                      title={
                        <>
                          {enrollment.course?.title}{' '}
                          <Tag color="blue">{enrollment.course?.learningPlatform?.name}</Tag>
                        </>
                      }
                      description={
                        <Progress
                          percent={Number(enrollment.progressPercentage)}
                          status="active"
                          style={{ marginBottom: 0 }}
                        />
                      }
                    />
                    <Text>{enrollment.completionStatus}</Text>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title={<Title level={4}>Quick Links</Title>}>
            {isLoadingEnrollments ? (
              <Text>Loading quick links...</Text>
            ) : (
              <List
                dataSource={enrollments?.slice(0, 3)}
                renderItem={enrollment => (
                  <List.Item>
                    <Button
                      type="link"
                      onClick={() =>
                        navigate(
                          `/organizations/${enrollment.course?.organizationId}/courses/${enrollment.courseId}`,
                        )
                      }
                    >
                      <i className="las la-play-circle"></i> Continue{' '}
                      {enrollment.course?.title}
                    </Button>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row>

      <Card
        title={<Title level={4}>Recommended Courses</Title>}
        style={{ marginTop: '16px' }}
      >
        {isLoadingRecommendations ? (
          <Text>Loading recommendations...</Text>
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
            dataSource={recommendations}
            renderItem={course => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() =>
                    navigate(
                      `/organizations/${course.organizationId}/courses/${course.id}`,
                    )
                  }
                >
                  <Card.Meta
                    avatar={
                      <i
                        className="las la-graduation-cap"
                        style={{ fontSize: '24px' }}
                      ></i>
                    }
                    title={
                      <>
                        {course.title} <Tag color="blue">{course.learningPlatform?.name}</Tag>
                      </>
                    }
                    description={
                      <>
                        <Paragraph ellipsis={{ rows: 2 }}>
                          {course.description}
                        </Paragraph>
                        <Text type="secondary">
                          Added {dayjs(course.createdAt).format('MMM D, YYYY')}
                        </Text>
                      </>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </Card>
    </PageLayout>
  )
}
