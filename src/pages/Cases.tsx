import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Check, Clock, Settings, Zap, DollarSign, TrendingUp } from 'lucide-react';
import { cases, getCaseById } from '@/data/cases';
import DataCompare from '@/components/cases/DataCompare';

const CasePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const caseItem = getCaseById(id);
    if (!caseItem) {
      return (
        <div className="min-h-screen flex items-center justify-center pt-20">
          <p>案例不存在</p>
        </div>
      );
    }

    const dataLabels = {
      efficiency: '日产能',
      cost: '人力配置',
      yieldRate: '良品率',
    };

    const dataUnits = {
      efficiency: '件/天',
      cost: '人/班',
      yieldRate: '%',
    };

    return (
      <div className="min-h-screen bg-steel-50 pt-20">
        <div className="relative h-80 overflow-hidden">
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-blue-900 via-space-blue-900/70 to-transparent" />
          <div className="absolute inset-0 bg-grid-dark opacity-20" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 lg:px-8 pb-10">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-white">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/cases" className="hover:text-white">应用案例</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{caseItem.title}</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-industrial-orange-500 text-white text-sm font-medium rounded-full">
                {caseItem.industry}
              </span>
              <span className="text-white/70 text-sm">{caseItem.client}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white max-w-4xl">
              {caseItem.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <section className="bg-white rounded-xl p-8 border border-steel-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-rose-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-steel-900">产线问题</h2>
                </div>
                <p className="text-steel-600 leading-relaxed mb-6">
                  {caseItem.problem}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseItem.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg">
                      <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-steel-700 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl p-8 border border-steel-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-space-blue-100 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-space-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-steel-900">解决方案</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-steel-800 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-industrial-orange-500 rounded-full" />
                      采用设备
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.solution.robots.map((robot, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-space-blue-50 text-space-blue-700 rounded-lg text-sm font-medium"
                        >
                          {robot}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-steel-800 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-industrial-orange-500 rounded-full" />
                      系统方案
                    </h3>
                    <p className="text-steel-600 leading-relaxed">
                      {caseItem.solution.system}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-steel-800 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-industrial-orange-500" />
                      实施周期
                    </h3>
                    <p className="text-steel-600">
                      {caseItem.solution.implementation}
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-xl p-8 border border-steel-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-steel-900">改造效果</h2>
                </div>

                <DataCompare
                  before={caseItem.results.before}
                  after={caseItem.results.after}
                  labels={dataLabels}
                  units={dataUnits}
                />

                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                      <DollarSign className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-700 font-medium">投资回报周期</div>
                      <div className="text-3xl font-bold text-emerald-800">
                        {caseItem.results.roi}
                      </div>
                      <div className="text-sm text-emerald-600">
                        快速回本，持续创造效益
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-space-blue-900 rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-lg font-bold mb-2">想了解类似方案？</h3>
                <p className="text-steel-400 text-sm mb-6">
                  我们的专业工程师将为您提供免费的产线评估和方案设计
                </p>
                <Link to="/consult" className="btn-primary w-full justify-center mb-3">
                  免费获取方案
                </Link>
                <a href="tel:400-888-9999" className="btn-secondary w-full justify-center !border-white/20 !text-white hover:!border-industrial-orange-400 hover:!text-industrial-orange-400">
                  400-888-9999
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-steel-200">
                <h4 className="font-semibold text-steel-900 mb-4">项目亮点</h4>
                <ul className="space-y-3">
                  {[
                    '量身定制的自动化方案',
                    '专业团队全程服务',
                    '快速部署，快速见效',
                    '完善的售后支持体系',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-steel-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-steel-600 hover:text-industrial-orange-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回案例列表
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-50 pt-20">
      <div className="bg-space-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-orange-500/10 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">应用案例</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            应用案例
          </h1>
          <p className="text-xl text-steel-400 max-w-2xl">
            真实产线改造案例，见证自动化升级带来的效率提升与成本优化
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={`/cases/${caseItem.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-steel-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-industrial-orange-500 text-white text-xs font-medium rounded-full">
                    {caseItem.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-industrial-orange-300 transition-colors">
                    {caseItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-steel-500 mb-3">
                  客户：{caseItem.client}
                </div>
                <p className="text-steel-600 text-sm mb-5 line-clamp-2">
                  {caseItem.problem}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-steel-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-600">
                      +{Math.round(
                        ((caseItem.results.after.efficiency - caseItem.results.before.efficiency) /
                          caseItem.results.before.efficiency) * 100
                      )}%
                    </div>
                    <p className="text-xs text-steel-500">效率提升</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-rose-600">
                      -{Math.round(
                        ((caseItem.results.before.cost - caseItem.results.after.cost) /
                          caseItem.results.before.cost) * 100
                      )}%
                    </div>
                    <p className="text-xs text-steel-500">成本降低</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-space-blue-600">
                      {caseItem.results.roi}
                    </div>
                    <p className="text-xs text-steel-500">ROI周期</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-2xl border border-steel-200 shadow-lg">
            <Zap className="w-12 h-12 text-industrial-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-steel-900 mb-2">
              想要了解更多行业案例？
            </h3>
            <p className="text-steel-500 mb-6 max-w-md">
              我们服务过众多行业客户，联系我们获取与您行业匹配的完整案例资料
            </p>
            <Link to="/consult" className="btn-primary">
              咨询获取案例
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasePage;
