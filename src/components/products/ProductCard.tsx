import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { RobotProduct } from '@/types';

interface ProductCardProps {
  product: RobotProduct;
  showFullSpec?: boolean;
}

const ProductCard = ({ product, showFullSpec = false }: ProductCardProps) => {
  return (
    <div className="bg-white border border-steel-200 rounded-xl overflow-hidden card-industrial group">
      <div className="relative h-56 overflow-hidden bg-steel-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-space-blue-900/90 text-white text-xs font-medium rounded-full">
            {product.categoryName}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-industrial-orange-500 text-white text-xs font-bold rounded">
            {product.model}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-steel-900 mb-2 group-hover:text-industrial-orange-500 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-steel-500 text-sm mb-5 line-clamp-2">
          {product.description}
        </p>

        <div className="grid grid-cols-3 gap-3 mb-5 p-4 bg-steel-50 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-space-blue-900 font-mono">
              {product.specifications.payload}
            </div>
            <div className="text-xs text-steel-500 mt-1">负载</div>
          </div>
          <div className="text-center border-x border-steel-200">
            <div className="text-lg font-bold text-space-blue-900 font-mono">
              {product.specifications.reach}
            </div>
            <div className="text-xs text-steel-500 mt-1">臂展</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-space-blue-900 font-mono">
              {product.specifications.repeatability}
            </div>
            <div className="text-xs text-steel-500 mt-1">重复精度</div>
          </div>
        </div>

        {showFullSpec && (
          <div className="mb-5 space-y-2">
            <h4 className="text-sm font-semibold text-steel-700">核心特点：</h4>
            <ul className="space-y-1.5">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-steel-600">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to={`/products/${product.category}/${product.id}`}
          className="inline-flex items-center text-industrial-orange-500 font-medium text-sm hover:text-industrial-orange-600 group/link"
        >
          查看详细参数
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
