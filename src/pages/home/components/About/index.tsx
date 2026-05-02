import { CheckCircleOutlined } from '@ant-design/icons'

const highlights = [
  '10+ 年行业深耕经验',
  '200+ 家企业信赖之选',
  '98% 客户满意度',
  '7×24 小时技术支持',
]

const numbers = [
  { value: '10+', label: '年经验' },
  { value: '200+', label: '客户' },
  { value: '500+', label: '项目' },
  { value: '50+', label: '专家' },
]

const About = () => (
  <section id="about" className="section-py bg-white">
    <div className="container">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">关于我们</h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          成立于 2014 年，深耕数字化转型领域十余年，积累了丰富的行业经验与技术实力
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            以技术为核心，以创新为驱动
          </h3>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-4">
            汇聚来自全球顶尖科技公司的技术专家，凭借深厚的行业洞察与前沿技术能力，
            为企业提供从战略规划到落地实施的全链条数字化服务。
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
            无论是传统企业的数字化转型，还是初创公司的技术架构搭建，
            我们都能提供最适合的解决方案，帮助客户快速实现业务目标。
          </p>
          <div className="space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircleOutlined className="text-blue-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-blue-100">
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {numbers.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-heading mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
