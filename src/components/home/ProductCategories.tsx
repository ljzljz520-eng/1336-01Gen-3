import { Link } from 'react-router-dom';
import { Wand2, Package, Paintbrush, Search, ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const iconMap: Record<string, React.ReactNode> = {
  Wand2: <Wand2 className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
  Paintbrush: <Paintbrush className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
};

const ProductCategories = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-industrial-orange-500 text-sm font-semibold tracking-wider uppercase">
            产品中心
          </span>
          <h2 className="section-title mt-3">四大系列工业机器人</h2>
          <p className="section-subtitle">
            覆盖焊接、码垛、喷涂、检测四大应用领域，满足不同行业、不同工况的自动化需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative bg-steel-50 rounded-xl p-8 transition-all duration-300 hover:bg-space-blue-900 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-industrial-orange-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-industrial-orange-100 text-industrial-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-orange-500 group-hover:text-white transition-all duration-300">
                  {iconMap[category.icon]}
                </div>

                <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-industrial-orange-500 font-medium mb-3 group-hover:text-industrial-orange-400">
                  {category.shortDesc}
                </p>

                <p className="text-steel-500 text-sm leading-relaxed mb-6 group-hover:text-steel-400 line-clamp-3">
                  {category.description}
                </p>

                <div className="flex items-center text-sm font-medium text-industrial-orange-500 group-hover:text-industrial-orange-400">
                  查看详情
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">
            查看全部产品
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
