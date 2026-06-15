import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    { icon: Phone, text: '1对1专属顾问' },
    { icon: Clock, text: '24小时内响应' },
    { icon: Shield, text: '方案免费评估' },
  ];

  return (
    <section className="py-20 md:py-28 bg-space-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-orange-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-industrial-orange-500/10 text-industrial-orange-400 text-sm font-medium rounded-full mb-6">
            免费方案评估
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            不确定哪款机器人适合您？
            <br />
            <span className="text-industrial-orange-400">让专业工程师为您定制方案</span>
          </h2>
          
          <p className="text-lg text-steel-400 mb-10 max-w-2xl mx-auto">
            我们的自动化专家团队将根据您的产线需求和工艺要求，
            为您提供最适合的机器人选型和整体解决方案，全程免费咨询。
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-industrial-orange-500/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-industrial-orange-400" />
                </div>
                <span className="text-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consult" className="btn-primary !py-4 !px-8 text-lg">
              立即预约评估
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:400-888-9999"
              className="btn-secondary !border-white/20 !text-white hover:!border-industrial-orange-400 hover:!text-industrial-orange-400 !py-4 !px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              400-888-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
