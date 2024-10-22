import React, { useState, useEffect } from 'react'
import { Typography, Card, Row, Col, Progress, List, Spin, Slider } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useSocket } from '@/plugins/socket/client/useSocket'

export default function LearningAnalyticsPage() {
  const { user } = useUserContext()
  const { organizationId } = useParams()
  const socket = useSocket()
  const [attentionSpan, setAttentionSpan] = useState(0)
  const [comprehensionLevel, setComprehensionLevel] = useState(0)
  const [engagementMetric, setEngagementMetric] = useState(0)
  const [frustrationLevel, setFrustrationLevel] = useState(0)

  const { data: enrollments, isLoading: isLoadingEnrollments } =
    Api.enrollment.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: true },
    })

  const { data: achievements, isLoading: isLoadingAchievements } =
    Api.achievement.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: true },
    })

  useEffect(() => {
    if (socket) {
      socket.on('userMetrics', (data) => {
        setAttentionSpan(data.attentionSpan)
        setComprehensionLevel(data.comprehensionLevel)
        setEngagementMetric(data.engagementMetric)
        setFrustrationLevel(data.frustrationLevel)
      })
    }
    return () => {
      if (socket) {
        socket.off('userMetrics')
      }
    }
  }, [socket])

  useEffect(() => {
    if (frustrationLevel > 70) {
      // Adjust learning experience
      Api.course.adjustDifficulty.mutate({ userId: user?.id, decrease: true })
    }
  }, [frustrationLevel, user?.id])

  if (isLoadingEnrollments || isLoadingAchievements) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const calculateOverallProgress = () => {
    if (!enrollments || enrollments.length === 0) return 0
    const totalProgress = enrollments.reduce(
      (sum, enrollment) =>
        sum + parseInt(enrollment.progressPercentage || '0') / 100,
      0,
    )
    return Math.round((totalProgress / enrollments.length) * 100)
  }

  const getStrengths = () => {
    if (!enrollments) return []
    const courseProgress = enrollments.map(e => ({
      course: e.course?.title || '',
      progress: parseInt(e.progressPercentage || '0'),
    }))
    return courseProgress.sort((a, b) => b.progress - a.progress).slice(0, 3)
  }

  const getAreasForImprovement = () => {
    if (!enrollments) return []
    const courseProgress = enrollments.map(e => ({
      course: e.course?.title || '',
      progress: parseInt(e.progressPercentage || '0'),
    }))
    return courseProgress.sort((a, b) => a.progress - b.progress).slice(0, 3)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Learning Analytics</Title>
      <Paragraph>
        Track your progress and gain insights to optimize your learning journey.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Overall Progress">
            <Progress type="circle" percent={calculateOverallProgress()} />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Recent Achievements">
            <List
              dataSource={achievements?.slice(0, 3)}
              renderItem={achievement => (
                <List.Item>
                  <Text>
                    <i className="las la-trophy"></i> {achievement.name} -{' '}
                    {achievement.course?.title}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} md={6}>
          <Card title="Attention Span">
            <Progress type="dashboard" percent={attentionSpan} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card title="Comprehension Level">
            <Progress type="dashboard" percent={comprehensionLevel} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card title="Engagement Metric">
            <Progress type="dashboard" percent={engagementMetric} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card title="Frustration Level">
            <Slider
              value={frustrationLevel}
              disabled
              marks={{
                0: 'Low',
                50: 'Medium',
                100: 'High',
              }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} md={12}>
          <Card title="Your Strengths">
            <List
              dataSource={getStrengths()}
              renderItem={item => (
                <List.Item>
                  <Text>
                    <i className="las la-star"></i> {item.course}:{' '}
                    {item.progress}% complete
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Areas for Improvement">
            <List
              dataSource={getAreasForImprovement()}
              renderItem={item => (
                <List.Item>
                  <Text>
                    <i className="las la-exclamation-circle"></i> {item.course}:{' '}
                    {item.progress}% complete
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Enrolled Courses" style={{ marginTop: '16px' }}>
        <List
          dataSource={enrollments}
          renderItem={enrollment => (
            <List.Item>
              <List.Item.Meta
                title={enrollment.course?.title}
                description={`Enrolled on: ${dayjs(
                  enrollment.enrollmentDate,
                ).format('MMMM D, YYYY')}`}
              />
              <Progress
                percent={parseInt(enrollment.progressPercentage || '0')}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
