import { Card } from 'antd'
import {
  GlobalOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  RocketOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import type { ReactNode } from 'react'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <GlobalOutlined />,
    title: '数字化转型',
    description: '为企业提供全方位的数字化转型解决方案，助力业务升级与创新发展。',
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: '云计算服务',
    description: '提供安全可靠的云架构设计、迁移与运维服务，保障业务连续性。',
  },
  {
    icon: <ThunderboltOutlined />,
    title: '软件开发',
    description: '基于最新技术栈的定制化软件开发，快速响应业务需求变化。',
  },
  {
    icon: <TeamOutlined />,
    title: '技术咨询',
    description: '资深专家团队提供技术架构咨询，帮助企业做出最优技术决策。',
  },
  {
    icon: <RocketOutlined />,
    title: '产品设计',
    description: '以用户为中心的产品设计理念，打造优秀的产品体验与交互。',
  },
  {
    icon: <TrophyOutlined />,
    title: '质量保障',
    description: '完善的测试体系与质量保障流程，确保产品稳定可靠交付。',
  },
]

const Services = () => (
  <section id="services" className="section-py bg-slate-50/80">
    <div className="container">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">Services</span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">核心服务</h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          提供全方位、一站式的数字化解决方案，覆盖从咨询到交付的全流程服务
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.title}
            className="!rounded-2xl !border-gray-100 hover:!shadow-lg hover:!border-blue-200 transition-all duration-300 cursor-pointer group"
          >
            <div className="p-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex-center text-blue-600 text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Services
