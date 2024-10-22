import { Typography, Card, Button, List, Spin, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SubscriptionManagementPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: subscriptions, isLoading: isLoadingSubscriptions } =
    Api.subscription.findMany.useQuery({
      where: { userId: user?.id, organizationId },
      orderBy: { startDate: 'desc' },
    })

  const { data: products, isLoading: isLoadingProducts } =
    Api.billing.findManyProducts.useQuery({})

  const { data: payments, isLoading: isLoadingPayments } =
    Api.billing.findManyPayments.useQuery({})

  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation<{ url: string }>()

  const handleUpgrade = async (productId: string) => {
    try {
      const { url } = await createPaymentLink({ productId, organizationId })
      window.location.href = url
    } catch (error) {
      message.error('Failed to create payment link. Please try again.')
    }
  }

  if (isLoadingSubscriptions || isLoadingProducts || isLoadingPayments) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const currentSubscription = subscriptions?.[0]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Subscription Management</Title>
      <Paragraph>
        Manage your subscription, upgrade your plan, and view your billing
        history.
      </Paragraph>

      <Card title="Current Subscription" style={{ marginBottom: '2rem' }}>
        {currentSubscription ? (
          <>
            <Text strong>Type: </Text>
            <Text>{currentSubscription.subscriptionType}</Text>
            <br />
            <Text strong>Status: </Text>
            <Text>{currentSubscription.status}</Text>
            <br />
            <Text strong>Start Date: </Text>
            <Text>
              {dayjs(currentSubscription.startDate).format('MMMM D, YYYY')}
            </Text>
            <br />
            <Text strong>End Date: </Text>
            <Text>
              {currentSubscription.endDate
                ? dayjs(currentSubscription.endDate).format('MMMM D, YYYY')
                : 'Ongoing'}
            </Text>
          </>
        ) : (
          <Text>No active subscription found.</Text>
        )}
      </Card>

      <Card title="Available Plans" style={{ marginBottom: '2rem' }}>
        <List
          dataSource={products}
          renderItem={product => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  onClick={() => handleUpgrade(product.id)}
                  disabled={
                    currentSubscription?.subscriptionType === product.name
                  }
                >
                  {currentSubscription?.subscriptionType === product.name
                    ? 'Current Plan'
                    : 'Upgrade'}
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={product.name}
                description={
                  <>
                    <Text>{product.description}</Text>
                    <br />
                    <Text strong>Price: </Text>
                    <Text>${(product.price / 100).toFixed(2)} / month</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <Card title="Billing History">
        <List
          dataSource={payments}
          renderItem={payment => (
            <List.Item>
              <List.Item.Meta
                title={`Payment on ${dayjs(payment.date).format(
                  'MMMM D, YYYY',
                )}`}
                description={
                  <>
                    <Text>Amount: ${(payment.amount / 100).toFixed(2)}</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
