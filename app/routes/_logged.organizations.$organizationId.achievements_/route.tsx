import React from 'react'
import { Typography, Card, Progress, List, Avatar, Row, Col, Spin } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AchievementsandRewardsPage() {
  const { user } = useUserContext()
  const { organizationId } = useParams()

  const { data: achievements, isLoading: achievementsLoading } =
    Api.achievement.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: true },
    })

  const { data: enrollments, isLoading: enrollmentsLoading } =
    Api.enrollment.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: true },
    })

  const { data: leaderboard, isLoading: leaderboardLoading } =
    Api.achievement.findMany.useQuery({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

  if (achievementsLoading || enrollmentsLoading || leaderboardLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const totalXP = achievements?.reduce((sum, achievement) => sum + 100, 0) || 0

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Achievements and Rewards</Title>
      <Paragraph>
        Track your progress, view your achievements, and compare with other
        learners.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-trophy"></i> Experience Points
              </>
            }
          >
            <Title level={3}>{totalXP} XP</Title>
            <Progress percent={(totalXP / 1000) * 100} status="active" />
            <Text>Keep learning to earn more XP!</Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <i className="las la-medal"></i> Skill Badges
              </>
            }
          >
            <List
              dataSource={achievements}
              renderItem={achievement => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={achievement.badgeUrl}
                        icon={<i className="las la-certificate"></i>}
                      />
                    }
                    title={achievement.name}
                    description={`Earned on ${dayjs(
                      achievement.earnedAt,
                    ).format('MMMM D, YYYY')}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <>
            <i className="las la-chart-line"></i> Progress Towards Upcoming
            Achievements
          </>
        }
        style={{ marginTop: 16 }}
      >
        <List
          dataSource={enrollments}
          renderItem={enrollment => (
            <List.Item>
              <List.Item.Meta
                title={enrollment.course?.title}
                description={
                  <>
                    <Progress
                      percent={parseInt(enrollment.progressPercentage || '0')}
                      status="active"
                    />
                    <Text>{enrollment.completionStatus}</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <Card
        title={
          <>
            <i className="las la-crown"></i> Leaderboard
          </>
        }
        style={{ marginTop: 16 }}
      >
        <List
          dataSource={leaderboard}
          renderItem={(achievement, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={achievement.user?.pictureUrl}
                    icon={<i className="las la-user"></i>}
                  />
                }
                title={`${index + 1}. ${achievement.user?.name}`}
                description={`${achievement.name} - Earned on ${dayjs(
                  achievement.earnedAt,
                ).format('MMMM D, YYYY')}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
