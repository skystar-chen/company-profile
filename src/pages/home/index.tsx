import { Button, Card, Space, Tag, Divider } from 'antd'
import {
  GithubOutlined,
  SmileOutlined,
  RocketOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { useCounter } from '@/store/useCounter'
import { useLatest } from 'ahooks'
import { useEffect } from 'react'
import { chunk } from 'lodash-es'

const techStack = [
  { name: 'React 19', color: 'blue' },
  { name: 'TypeScript 6', color: 'geekblue' },
  { name: 'Vite 8', color: 'purple' },
  { name: 'Ant Design 6', color: 'cyan' },
  { name: 'UnoCSS 66', color: 'green' },
  { name: 'Zustand 5', color: 'orange' },
  { name: 'ahooks 3', color: 'red' },
  { name: 'lodash-es 4', color: 'gold' },
]

const Home = () => {
  const { count, increment, decrement } = useCounter()
  const latestCount = useLatest(count)

  useEffect(() => {
    const grouped = chunk(techStack, 4)
    console.log('tech stack grouped:', grouped)
    console.log('latest count ref:', latestCount.current)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 h-14 sm:h-16 flex-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1677ff] rounded-lg flex-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">CP</span>
            </div>
            <span className="text-base sm:text-lg font-semibold text-[#1a1a2e]">Company Profile</span>
          </div>
          <Space size="small" className="hidden sm:flex">
            <Button type="text" icon={<GithubOutlined />} />
            <Button type="primary" size="small">Get Started</Button>
          </Space>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white mt-3 sm:mt-4 mx-3 sm:mx-6 rounded-xl p-6 sm:p-12 text-center shadow-sm">
        <RocketOutlined className="text-3xl sm:text-5xl text-[#1677ff] mb-4 sm:mb-6" />
        <h1 className="text-xl sm:text-3xl font-bold text-[#1a1a2e] m-0">
          Welcome to Company Profile
        </h1>
        <p className="text-sm sm:text-base text-[#666] mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-600px mx-auto px-2 sm:px-0">
          A modern frontend project scaffold built with React, TypeScript, Vite,
          Ant Design, and more. Ready to kickstart your next application.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Button type="primary" size="large" icon={<ThunderboltOutlined />} className="w-full sm:w-auto">
            Quick Start
          </Button>
          <Button size="large" className="w-full sm:w-auto">Learn More</Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-3 sm:mx-6 mt-3 sm:mt-4">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1a1a2e] mb-3 sm:mb-4 pl-1">
          <SmileOutlined className="mr-2 text-[#1677ff]" />
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {techStack.map((tech) => (
            <Tag key={tech.name} color={tech.color} className="text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 m-0">
              {tech.name}
            </Tag>
          ))}
        </div>
      </section>

      {/* Demo: Zustand + ahooks */}
      <section className="mx-3 sm:mx-6 mt-3 sm:mt-6 mb-6 sm:mb-8">
        <Card title="State Management Demo" className="shadow-sm">
          <div className="text-center">
            <p className="text-sm sm:text-base text-[#666] mb-4">
              Counter powered by <Tag color="orange">Zustand</Tag> +{' '}
              <Tag color="red">ahooks useLatest</Tag>
            </p>
            <div className="text-3xl sm:text-4xl font-bold text-[#1677ff] mb-6">{count}</div>
            <Space size="middle">
              <Button onClick={decrement} size="large">
                -
              </Button>
              <Button type="primary" onClick={increment} size="large">
                +
              </Button>
            </Space>
          </div>
        </Card>
      </section>

      <div className="flex-1" />

      <Divider className="mx-3 sm:mx-6" />

      <footer className="text-center text-[#999] text-xs sm:text-sm pb-6 px-4">
        Built with ❤️ using pnpm + React 19 + TypeScript 6 + Vite 8 + Ant Design 6
      </footer>
    </div>
  )
}

export default Home
