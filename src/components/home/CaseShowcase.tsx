import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, TrendingDown, Percent } from 'lucide-react';
import { getFeaturedCases } from '@/data/cases';

const CaseShowcase = () => {
  const featuredCases = getFeaturedCases();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-industrial-orange-500 text-sm font-semibold tracking-wider uppercase">
              应用案例
            </span>
            <h2 className="section-title mt-3">真实产线改造案例</h2>
            <p className="text-steel-500 max-w-xl mt-4">
              来自各行业的真实案例，见证自动化改造带来的效率提升和成本优化
            </p>
          </div>
          <Link
            to="/cases"
            className="inline-flex items-center text-industrial-orange-500 font-medium hover:text-industrial-orange-600 mt-4 md:mt-0"
          >
            查看全部案例
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCases.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={`/cases/${caseItem.id}`}
              className="group bg-white border border-steel-200 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-industrial-orange-500 text-white text-xs font-medium rounded-full">
                    {caseItem.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white line-clamp-2">
                    {caseItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-steel-500 text-sm mb-5 line-clamp-2">
                  {caseItem.problem.slice(0, 60)}...
                </p>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-steel-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-lg font-bold">
                        {Math.round(
                          ((caseItem.results.after.efficiency - caseItem.results.before.efficiency) /
                            caseItem.results.before.efficiency) *
                            100
                        )}%
                      </span>
                    </div>
                    <p className="text-xs text-steel-500">效率提升</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-rose-600 mb-1">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-lg font-bold">
                        {Math.round(
                          ((caseItem.results.before.cost - caseItem.results.after.cost) /
                            caseItem.results.before.cost) *
                            100
                        )}%
                      </span>
                    </div>
                    <p className="text-xs text-steel-500">成本降低</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-space-blue-600 mb-1">
                      <Percent className="w-4 h-4" />
                      <span className="text-lg font-bold">
                        {caseItem.results.after.yieldRate}%
                      </span>
                    </div>
                    <p className="text-xs text-steel-500">良品率</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-steel-400">{caseItem.client}</span>
                  <span className="text-sm font-medium text-industrial-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                    查看详情
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseShowcase;
