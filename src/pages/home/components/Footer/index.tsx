import { Divider } from 'antd'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import policeLogo from '@/assets/police_logo.png'

const quickLinks = [
  { href: '#about', label: '关于我们' },
  { href: '#services', label: '核心服务' },
  { href: '#values', label: '企业价值观' },
  { href: '#contact', label: '联系我们' },
]

const serviceLinks = ['数字化转型', '云计算服务', '软件开发', '技术咨询']

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 pt-12 sm:pt-16 pb-6">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <a href="#" className="flex items-center gap-2.5 mb-4 no-underline" aria-label="Company Profile Home">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex-center">
              <span className="text-white font-bold text-sm font-heading">CP</span>
            </div>
            <span className="text-lg font-bold text-white font-heading">Company Profile</span>
          </a>
          <p className="text-sm leading-relaxed">
            专注于数字化转型的科技公司，为企业提供全方位的技术解决方案。
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 font-heading">快速链接</h4>
          <nav className="space-y-2.5" aria-label="Footer quick links">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-400 hover:text-white transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 font-heading">核心服务</h4>
          <div className="space-y-2.5">
            {serviceLinks.map((s) => (
              <div key={s} className="text-sm">{s}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 font-heading">联系方式</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-sm">
              <EnvironmentOutlined className="text-slate-500" />
              <span>北京市朝阳区科技园</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <MailOutlined className="text-slate-500" />
              <span>18296712438@163.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <PhoneOutlined className="text-slate-500" />
              <span>xxx-xxxx-xxxx</span>
            </div>
          </div>
        </div>
      </div>

      <Divider className="!border-slate-800" />

      <div className="text-center text-sm text-slate-500">
        Copyright &copy; 2026 - 2027 Company Profile. All rights reserved.
      </div>

      <div className="text-center text-sm text-slate-500 mt-2">
        星星之火{' '}
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors duration-200">
          赣ICP备2026009725号-1
        </a>
        {' '}
        <img src={policeLogo} alt="公安备案" className="inline-block h-4 align-middle" />
        {' '}
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=36073202360998" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors duration-200">
          赣公网安备36073202360998号
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
