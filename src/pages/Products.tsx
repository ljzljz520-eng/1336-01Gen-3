import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Phone, Check } from 'lucide-react';
import { products, categories, getProductsByCategory, getCategoryInfo } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import SpecTable from '@/components/products/SpecTable';

const ProductPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const product = products.find(p => p.id === id);
    if (!product) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>产品不存在</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-steel-50 pt-20">
        <div className="bg-space-blue-900 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-white">首页</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white">产品中心</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/products/${product.category}`} className="hover:text-white">{product.categoryName}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{product.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-steel-400 mt-2">型号：{product.model}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-steel-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-industrial-orange-100 text-industrial-orange-600 text-sm font-medium rounded-full mb-4">
                  {product.categoryName}
                </span>
                <h2 className="text-3xl font-bold text-steel-900 mb-2">{product.name}</h2>
                <p className="text-lg text-steel-500">型号：{product.model}</p>
              </div>

              <p className="text-steel-600 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-steel-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-space-blue-900 font-mono">
                    {product.specifications.payload}
                  </div>
                  <div className="text-sm text-steel-500 mt-1">负载能力</div>
                </div>
                <div className="bg-steel-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-space-blue-900 font-mono">
                    {product.specifications.reach}
                  </div>
                  <div className="text-sm text-steel-500 mt-1">工作半径</div>
                </div>
                <div className="bg-steel-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-space-blue-900 font-mono">
                    {product.specifications.repeatability}
                  </div>
                  <div className="text-sm text-steel-500 mt-1">重复精度</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-steel-900 mb-4">核心特点</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-steel-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <Link to="/consult" className="btn-primary flex-1 justify-center">
                  获取报价方案
                </Link>
                <a href="tel:400-888-9999" className="btn-secondary flex-1 justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  电话咨询
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-steel-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-industrial-orange-500 rounded-full" />
              详细技术参数
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-steel-200 overflow-hidden">
              <div className="p-4 bg-steel-50 border-b border-steel-200">
                <p className="text-sm text-steel-500">
                  <span className="inline-block w-2 h-2 bg-industrial-orange-500 rounded-full mr-2" />
                  标注为核心参数，更多详细参数请联系我们获取完整规格书
                </p>
              </div>
              <div className="p-6">
                <SpecTable specifications={product.specifications} />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-steel-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-industrial-orange-500 rounded-full" />
              应用场景
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {product.applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white border border-steel-200 rounded-lg p-4 text-center hover:border-industrial-orange-300 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-industrial-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <p className="text-sm font-medium text-steel-700">{app}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-steel-600 hover:text-industrial-orange-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回产品列表
            </button>
          </div>
        </div>
      </div>
    );
  }

  const categoryInfo = type ? getCategoryInfo(type) : null;
  const filteredProducts = type ? getProductsByCategory(type) : products;

  return (
    <div className="min-h-screen bg-steel-50 pt-20">
      <div className="bg-space-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-orange-500/10 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">产品中心</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryInfo ? categoryInfo.name : '产品中心'}
          </h1>
          <p className="text-xl text-steel-400 max-w-2xl">
            {categoryInfo ? categoryInfo.description : '全系列工业机器人产品，满足不同行业、不同工况的自动化需求'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            to="/products"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              !type
                ? 'bg-industrial-orange-500 text-white shadow-lg shadow-industrial-orange-500/30'
                : 'bg-white text-steel-600 border border-steel-200 hover:border-industrial-orange-300 hover:text-industrial-orange-500'
            }`}
          >
            全部产品
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products/${cat.id}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                type === cat.id
                  ? 'bg-industrial-orange-500 text-white shadow-lg shadow-industrial-orange-500/30'
                  : 'bg-white text-steel-600 border border-steel-200 hover:border-industrial-orange-300 hover:text-industrial-orange-500'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {categoryInfo && (
          <div className="bg-white rounded-xl p-6 mb-10 border border-steel-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-industrial-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-steel-900 mb-2">{categoryInfo.name}</h3>
                <p className="text-steel-600">{categoryInfo.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showFullSpec />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-steel-500">暂无该分类产品</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
