import React, { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Select,
  Slider,
  Card,
  Row,
  Col,
  Button,
  Space,
  Table,
  Tooltip,
  Progress,
  message,
} from 'antd'
const { Title, Text, Paragraph } = Typography
const { Search } = Input
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout, LanguageSelector } from '@/designSystem'
import { motion } from 'framer-motion'
import { useAudioToText } from '@/plugins/ai/client'

const mockCourses = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React and build modern web applications.',
    duration: 20,
    difficultyLevel: 'Beginner',
    rating: 4.5,
    language: 'English',
    learningPlatform: { name: 'Coursera' },
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into advanced JavaScript concepts and patterns.',
    duration: 30,
    difficultyLevel: 'Advanced',
    rating: 4.8,
    language: 'English',
    learningPlatform: { name: 'Udemy' },
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis and visualization.',
    duration: 40,
    difficultyLevel: 'Intermediate',
    rating: 4.6,
    language: 'English',
    learningPlatform: { name: 'edX' },
  },
  {
    id: '4',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning algorithms and techniques.',
    duration: 50,
    difficultyLevel: 'Intermediate',
    rating: 4.7,
    language: 'English',
    learningPlatform: { name: 'Coursera' },
  },
  {
    id: '5',
    title: 'Web Design Fundamentals',
    description: 'Learn the basics of web design and user experience.',
    duration: 15,
    difficultyLevel: 'Beginner',
    rating: 4.3,
    language: 'Spanish',
    learningPlatform: { name: 'Udacity' },
  },
  {
    id: '6',
    title: 'iOS App Development with Swift',
    description: 'Build iOS applications using Swift programming language.',
    duration: 35,
    difficultyLevel: 'Intermediate',
    rating: 4.5,
    language: 'English',
    learningPlatform: { name: 'Apple Developer' },
  },
  {
    id: '7',
    title: 'Blockchain Fundamentals',
    description: 'Understanding blockchain technology and its applications.',
    duration: 25,
    difficultyLevel: 'Beginner',
    rating: 4.2,
    language: 'English',
    learningPlatform: { name: 'Udemy' },
  },
  {
    id: '8',
    title: 'Digital Marketing Strategies',
    description: 'Learn effective digital marketing techniques and strategies.',
    duration: 30,
    difficultyLevel: 'Intermediate',
    rating: 4.4,
    language: 'French',
    learningPlatform: { name: 'Google Digital Garage' },
  },
  {
    id: '9',
    title: 'Cloud Computing with AWS',
    description: 'Master cloud computing concepts using Amazon Web Services.',
    duration: 45,
    difficultyLevel: 'Advanced',
    rating: 4.7,
    language: 'English',
    learningPlatform: { name: 'AWS Training' },
  },
  {
    id: '10',
    title: 'Artificial Intelligence Ethics',
    description: 'Explore ethical considerations in AI development and deployment.',
    duration: 20,
    difficultyLevel: 'Intermediate',
    rating: 4.6,
    language: 'English',
    learningPlatform: { name: 'edX' },
  },
  {
    id: '11',
    title: 'Graphic Design Principles',
    description: 'Learn fundamental principles of graphic design and visual communication.',
    duration: 25,
    difficultyLevel: 'Beginner',
    rating: 4.3,
    language: 'German',
    learningPlatform: { name: 'Skillshare' },
  },
  {
    id: '12',
    title: 'Cybersecurity Fundamentals',
    description: 'Introduction to cybersecurity concepts and best practices.',
    duration: 30,
    difficultyLevel: 'Beginner',
    rating: 4.5,
    language: 'English',
    learningPlatform: { name: 'Coursera' },
  },
  {
    id: '13',
    title: 'Data Visualization with D3.js',
    description: 'Create interactive data visualizations using D3.js library.',
    duration: 35,
    difficultyLevel: 'Intermediate',
    rating: 4.6,
    language: 'English',
    learningPlatform: { name: 'FreeCodeCamp' },
  },
  {
    id: '14',
    title: 'Agile Project Management',
    description: 'Learn agile methodologies for effective project management.',
    duration: 20,
    difficultyLevel: 'Intermediate',
    rating: 4.4,
    language: 'English',
    learningPlatform: { name: 'LinkedIn Learning' },
  },
  {
    id: '15',
    title: 'Introduction to Quantum Computing',
    description: 'Explore the basics of quantum computing and its potential applications.',
    duration: 40,
    difficultyLevel: 'Advanced',
    rating: 4.8,
    language: 'English',
    learningPlatform: { name: 'MIT OpenCourseWare' },
  },
  {
    id: '16',
    title: 'UX Research Methods',
    description: 'Learn various user experience research techniques and methodologies.',
    duration: 25,
    difficultyLevel: 'Intermediate',
    rating: 4.5,
    language: 'English',
    learningPlatform: { name: 'Interaction Design Foundation' },
  },
  {
    id: '17',
    title: 'Natural Language Processing',
    description: 'Introduction to NLP techniques for text analysis and language understanding.',
    duration: 35,
    difficultyLevel: 'Advanced',
    rating: 4.7,
    language: 'English',
    learningPlatform: { name: 'Coursera' },
  },
  {
    id: '18',
    title: 'Sustainable Energy Solutions',
    description: 'Explore renewable energy technologies and sustainability practices.',
    duration: 30,
    difficultyLevel: 'Intermediate',
    rating: 4.4,
    language: 'Spanish',
    learningPlatform: { name: 'edX' },
  },
  {
    id: '19',
    title: 'Financial Planning and Analysis',
    description: 'Learn financial planning techniques and business analysis methods.',
    duration: 25,
    difficultyLevel: 'Intermediate',
    rating: 4.3,
    language: 'English',
    learningPlatform: { name: 'Udemy' },
  },
  {
    id: '20',
    title: 'Game Development with Unity',
    description: 'Create 2D and 3D games using Unity game engine and C# programming.',
    duration: 45,
    difficultyLevel: 'Intermediate',
    rating: 4.6,
    language: 'English',
    learningPlatform: { name: 'Unity Learn' },
  },
];

export default function CourseSearchandComparisonPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [duration, setDuration] = useState('')
  const [provider, setProvider] = useState('')
  const [language, setLanguage] = useState('')
  const [difficultyLevel, setDifficultyLevel] = useState('')
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({})
  const { mutateAsync: uploadPublic } = useUploadPublic()
  const { mutateAsync: audioToText } = useAudioToText()

  const { data: apiCourses, isLoading } = Api.course.findMany.useQuery({
    include: { learningPlatform: true },
    where: {
      title: { contains: searchTerm, mode: 'insensitive' },
      duration: duration ? { lte: parseFloat(duration) } : undefined,
      learningPlatform: provider ? { name: provider } : undefined,
      difficultyLevel: difficultyLevel ? { equals: difficultyLevel } : undefined,
      language: language ? { equals: language } : undefined,
    },
    take: pageSize,
    skip: (currentPage - 1) * pageSize,
  })

  const courses = apiCourses && apiCourses.length > 0 ? apiCourses : mockCourses

  const { data: learningPlatforms } = Api.learningPlatform.findMany.useQuery({})

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleCompare = () => {
    if (selectedCourses.length > 1) {
      navigate(`/organizations/${useParams().organizationId}/course-comparison?ids=${selectedCourses.join(',')}`)
    }
  }

  const handleDownload = async (courseId: string) => {
    try {
      setDownloadProgress(prev => ({ ...prev, [courseId]: 0 }))
      // Simulating download and compression
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500))
        setDownloadProgress(prev => ({ ...prev, [courseId]: i }))
      }
      const file = new File(['course content'], 'course_materials.zip', { type: 'application/zip' })
      const { url } = await uploadPublic({ file })
      message.success('Course materials downloaded successfully')
      window.open(url, '_blank')
    } catch (error) {
      message.error('Failed to download course materials')
    } finally {
      setDownloadProgress(prev => ({ ...prev, [courseId]: undefined }))
    }
  }

  const handleVoiceCommand = async () => {
    try {
      const audioBlob = await navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => new Promise<Blob>(resolve => {
          const mediaRecorder = new MediaRecorder(stream)
          mediaRecorder.start()
          setTimeout(() => {
            mediaRecorder.stop()
            mediaRecorder.ondataavailable = event => resolve(event.data)
          }, 5000)
        }))
      const audioFile = new File([audioBlob], 'voice_command.wav', { type: 'audio/wav' })
      const { url } = await uploadPublic({ file: audioFile })
      const { translation } = await audioToText({ url })
      handleSearch(translation)
    } catch (error) {
      message.error('Failed to process voice command')
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <Tooltip title={<CoursePreview course={record} />}>
          <span>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Provider',
      dataIndex: ['learningPlatform', 'name'],
      key: 'provider',
    },
    {
      title: 'Duration (hours)',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration: number) => duration?.toString() || 'N/A',
    },
    {
      title: 'Difficulty',
      dataIndex: 'difficultyLevel',
      key: 'difficultyLevel',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Voice-over',
      dataIndex: 'hasVoiceOver',
      key: 'hasVoiceOver',
      render: (hasVoiceOver: boolean) => hasVoiceOver ? 'Yes' : 'No',
    },
    {
      title: 'Subtitles',
      dataIndex: 'hasSubtitles',
      key: 'hasSubtitles',
      render: (hasSubtitles: boolean) => hasSubtitles ? 'Yes' : 'No',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space>
          <Button
            onClick={() =>
              navigate(
                `/organizations/${record.organizationId}/courses/${record.id}`,
              )
            }
          >
            View Details
          </Button>
          <Button onClick={() => handleDownload(record.id)}>
            Download for Offline
          </Button>
          {downloadProgress[record.id] !== undefined && (
            <Progress percent={downloadProgress[record.id]} size="small" />
          )}
        </Space>
      ),
    },
  ]

  const CoursePreview = ({ course }: { course: any }) => (
    <div>
      <h4>{course.title}</h4>
      <p>{course.description}</p>
      <p>Provider: {course.learningPlatform.name}</p>
      <p>Duration: {course.duration} hours</p>
      <p>Difficulty: {course.difficultyLevel}</p>
    </div>
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Course Search and Comparison</Title>
      <Text>
        Search for courses across multiple learning platforms and compare them
        side by side.
      </Text>

      <Card style={{ marginTop: 24, marginBottom: 24 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={16} align="middle">
            <Col span={20}>
              <Search
                placeholder="Search for courses"
                onSearch={handleSearch}
                style={{ width: '100%' }}
                size="large"
              />
            </Col>
            <Col span={4}>
              <Button onClick={handleVoiceCommand} icon={<i className="las la-microphone"></i>}>
                Voice Search
              </Button>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <Text>Price Range</Text>
              <Slider
                range
                min={0}
                max={1000}
                value={priceRange}
                onChange={value => setPriceRange(value as [number, number])}
              />
            </Col>
            <Col span={6}>
              <Text>Duration (hours)</Text>
              <Select
                style={{ width: '100%' }}
                value={duration}
                onChange={value => setDuration(value)}
              >
                <Option value="">Any</Option>
                <Option value="10">Up to 10</Option>
                <Option value="20">Up to 20</Option>
                <Option value="50">Up to 50</Option>
                <Option value="100">Up to 100</Option>
              </Select>
            </Col>
            <Col span={6}>
              <Text>Provider</Text>
              <Select
                style={{ width: '100%' }}
                value={provider}
                onChange={value => setProvider(value)}
              >
                <Option value="">Any</Option>
                {learningPlatforms?.map(platform => (
                  <Option key={platform.id} value={platform.name}>
                    {platform.name}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={6}>
              <Text>Language</Text>
              <LanguageSelector
                value={language}
                onChange={value => setLanguage(value)}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Text>Difficulty Level</Text>
              <Select
                style={{ width: '100%' }}
                value={difficultyLevel}
                onChange={value => setDifficultyLevel(value)}
              >
                <Option value="">Any</Option>
                <Option value="Beginner">Beginner</Option>
                <Option value="Intermediate">Intermediate</Option>
                <Option value="Advanced">Advanced</Option>
              </Select>
            </Col>
          </Row>
        </Space>
      </Card>

      <Title level={3} style={{ marginTop: 24 }}>Search Results</Title>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Table
          dataSource={courses}
          columns={columns}
          loading={isLoading}
          rowKey="id"
          rowSelection={{
            type: 'checkbox',
            onChange: selectedRowKeys =>
              setSelectedCourses(selectedRowKeys as string[]),
          }}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: courses?.length,
            onChange: (page) => setCurrentPage(page),
          }}
          expandable={{
            expandedRowRender: (record) => (
              <Paragraph>{record.description}</Paragraph>
            ),
          }}
        />
      </motion.div>

      <Button
        type="primary"
        onClick={handleCompare}
        disabled={selectedCourses.length < 2}
        style={{ marginTop: 16 }}
      >
        Compare Selected Courses
      </Button>
    </PageLayout>
  )
}
