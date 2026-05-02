interface Value {
  title: string
  description: string
}

const values: Value[] = [
  { title: '创新驱动', description: '持续探索前沿技术，以创新引领行业发展' },
  { title: '客户至上', description: '深入理解客户需求，提供超越期望的服务' },
  { title: '品质卓越', description: '严格把控每个环节，追求卓越的交付品质' },
  { title: '协作共赢', description: '与客户和伙伴紧密协作，共创长期价值' },
]

const Values = () => (
  <section id="values" className="section-py bg-white">
    <div className="container">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">Values</span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-4">企业价值观</h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          核心价值观指引着每一位团队成员的行动与决策
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value) => (
          <div
            key={value.title}
            className="text-center p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer bg-white"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-center mx-auto mb-4">
              <span className="text-white font-bold text-lg font-heading">{value.title[0]}</span>
            </div>
            <h3 className="font-heading text-base font-semibold text-slate-900 mb-2">{value.title}</h3>
            <p className="text-sm text-slate-500">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Values
