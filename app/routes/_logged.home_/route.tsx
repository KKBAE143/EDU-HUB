import { Typography, Card, Space, Button, Modal, Form, Input, Select } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    // Here you would handle the LMS integration
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Title level={1}>
              Welcome to Our Learning Platform{' '}
              <i className="las la-graduation-cap"></i>
            </Title>
          </motion.div>
          <Paragraph>
            Discover a world of knowledge and enhance your skills with our
            comprehensive learning platform.
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card>
              <Space direction="vertical" size="middle">
                <Title level={3}>How It Works</Title>
                <Space
                  direction="vertical"
                  align="start"
                  style={{ textAlign: 'left' }}
                >
                  <Paragraph>
                    <i className="las la-search"></i> Browse Courses: Explore our
                    wide range of courses from various learning platforms.
                  </Paragraph>
                  <Paragraph>
                    <i className="las la-user-graduate"></i> Enroll: Choose the
                    courses that interest you and start your learning journey.
                  </Paragraph>
                  <Paragraph>
                    <i className="las la-chart-line"></i> Track Progress: Monitor
                    your progress and achievements as you advance through your
                    courses.
                  </Paragraph>
                  <Paragraph>
                    <i className="las la-trophy"></i> Earn Achievements: Gain
                    recognition for your accomplishments with badges and
                    certificates.
                  </Paragraph>
                  <Paragraph>
                    <i className="las la-robot"></i> AI Course Generator: Get
                    personalized course recommendations based on your interests and
                    goals.
                  </Paragraph>
                </Space>
              </Space>
            </Card>
          </motion.div>
          <Space>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card
                hoverable
                onClick={() => navigate('/organizations/:organizationId/courses')}
                style={{ cursor: 'pointer' }}
              >
                <Space direction="vertical">
                  <Title level={4}>
                    <i className="las la-rocket"></i> Get Started
                  </Title>
                  <Paragraph>
                    Click here to explore our course catalog and begin your learning
                    adventure!
                  </Paragraph>
                </Space>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card>
                <Space direction="vertical">
                  <Title level={4}>
                    <i className="las la-plug"></i> LMS Integration
                  </Title>
                  <Paragraph>
                    Connect your existing Learning Management System to enhance your
                    learning experience.
                  </Paragraph>
                  <Button type="primary" onClick={showModal}>
                    Integrate LMS
                  </Button>
                </Space>
              </Card>
            </motion.div>
          </Space>
        </Space>
      </motion.div>
      <Modal
        title="LMS Integration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item name="lmsType" label="LMS Type">
            <Select>
              <Select.Option value="moodle">Moodle</Select.Option>
              <Select.Option value="canvas">Canvas</Select.Option>
              <Select.Option value="blackboard">Blackboard</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="apiKey" label="API Key">
            <Input />
          </Form.Item>
          <Form.Item name="lmsUrl" label="LMS URL">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
