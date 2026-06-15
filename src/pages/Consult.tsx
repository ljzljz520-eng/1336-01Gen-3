import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, Users, Lightbulb, Wrench } from 'lucide-react';
import ContactForm from '@/components/consult/ContactForm';

const Consult = () => {
  const services = [
    {
      icon: Lightbulb,
      title: '免费方案设计',
      description: '根据您的产线需求，提供专业的自动化方案设计和选型建议'
    },
    {
      icon: Users,
      title: '专家一对一咨询',
      description: '资深自动化工程师为您解答技术疑问，评估项目可行性'
    },
    {
      icon: Wrench,
      title: '上门勘测服务',
      description: '预约工程师上门勘测，获取更精准的方案和报价'
    },
  ];

  const steps = [
    { step: '01', title: '提交需求', desc: '填写表单，告诉我们您的产线情况和需求' },
    { step: '02', title: '需求分析', desc: '专业工程师分析需求，初步制定方案' },
    { step: '03', title: '方案沟通', desc: '一对一沟通方案细节，确认技术路线' },
    { step: '04', title: '方案交付', desc: '提供详细方案书和报价，安排下一步工作' },
  ];

  return (
    <div className="min-h-screen bg-steel-50 pt-20">
      <div className="bg-space-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-orange-500/10 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">预约方案评估</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            预约方案评估
          </h1>
          <p className="text-xl text-steel-400 max-w-2xl">
            提交您的需求，我们的专业团队将为您提供量身定制的自动化解决方案
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-steel-200">
              <h3 className="text-lg font-bold text-steel-900 mb-4">联系我们</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-industrial-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-500">服务热线</div>
                    <div className="text-lg font-semibold text-steel-900">400-888-9999</div>
                    <div className="text-xs text-steel-400">周一至周五 9:00-18:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-industrial-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-500">商务邮箱</div>
                    <div className="text-lg font-semibold text-steel-900">sales@zhiqing-robot.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-industrial-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-500">公司地址</div>
                    <div className="text-base font-semibold text-steel-900">上海市浦东新区</div>
                    <div className="text-sm text-steel-500">张江高科技园区</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-space-blue-900 to-space-blue-800 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">为什么选择我们？</h3>
              <div className="space-y-3">
                {[
                  '15年行业经验，500+客户服务经验',
                  '自主研发核心技术，产品性能稳定',
                  '7×24小时技术支持，快速响应',
                  '全国服务网络，本地化服务',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-steel-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-steel-900 mb-8 text-center">我们提供的服务</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-steel-200 hover:shadow-lg hover:border-industrial-orange-200 transition-all"
              >
                <div className="w-14 h-14 bg-industrial-orange-100 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-industrial-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-steel-900 mb-2">{service.title}</h3>
                <p className="text-steel-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border border-steel-200">
          <h2 className="text-2xl font-bold text-steel-900 mb-10 text-center">服务流程</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-industrial-orange-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-steel-900 mb-2">{item.title}</h3>
                <p className="text-sm text-steel-500">{item.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-2/3 w-1/2 h-0.5 bg-steel-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 text-steel-600">
              <Clock className="w-5 h-5" />
              <span>预计响应时间：24小时内</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
