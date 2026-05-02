import { Button } from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

const CtaBanner = () => (
  <section id="contact" className="section-py bg-gradient-to-br from-blue-600 to-blue-700 text-white">
    <div className="container text-center">
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        准备好开启数字化转型之旅了吗？
      </h2>
      <p className="text-sm sm:text-base text-blue-100 mb-8 max-w-xl mx-auto">
        立即联系我们，专家团队将为您提供免费的技术咨询服务
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <Button
          type="primary"
          size="large"
          className="!h-12 !px-8 !text-base !font-medium !rounded-xl !bg-white !text-blue-600 !border-white hover:!bg-blue-50"
        >
          <MailOutlined /> 立即联系
        </Button>
        <Button
          size="large"
          className="!h-12 !px-8 !text-base !font-medium !rounded-xl !text-white !border-white/40 !bg-transparent hover:!bg-white/10"
        >
          <PhoneOutlined /> 预约演示
        </Button>
      </div>
    </div>
  </section>
)

export default CtaBanner
