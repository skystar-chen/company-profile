import { Button } from 'antd'
import {
  RocketOutlined,
  TeamOutlined,
  GlobalOutlined,
  TrophyOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'

const stats = [
  { icon: <TrophyOutlined />, value: '10+', label: '年行业经验' },
  { icon: <TeamOutlined />, value: '200+', label: '服务客户' },
  { icon: <RocketOutlined />, value: '500+', label: '完成项目' },
  { icon: <GlobalOutlined />, value: '50+', label: '团队成员' },
]

const Hero = () => (
  <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-blue-600 font-medium">领先的数字化转型服务商</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          用技术创新
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> 驱动商业未来</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          专注于数字化转型的科技公司，为企业提供全方位的技术解决方案，
          帮助客户在数字化浪潮中保持竞争优势。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button type="primary" size="large" className="!h-12 !px-8 !text-base !font-medium !rounded-xl">
            立即咨询 <ArrowRightOutlined />
          </Button>
          <Button
            size="large"
            className="!h-12 !px-8 !text-base !font-medium !rounded-xl !text-slate-600 !border-slate-200 hover:!border-blue-300 hover:!text-blue-600"
          >
            了解更多
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 border-t border-slate-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl text-blue-600 text-lg mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Hero
