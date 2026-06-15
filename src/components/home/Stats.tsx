import { useEffect, useState, useRef } from 'react';
import { Users, Factory, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: '服务客户',
    description: '覆盖汽车、电子、食品等20+行业'
  },
  {
    icon: Factory,
    value: 1200,
    suffix: '+',
    label: '交付产线',
    description: '累计安装调试机器人超3000台'
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: '%',
    label: '平均效率提升',
    description: '帮助客户实现产能翻倍增长'
  },
  {
    icon: Award,
    value: 15,
    suffix: '年',
    label: '行业经验',
    description: '专注工业自动化领域深耕'
  }
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="relative bg-white rounded-xl p-8 shadow-lg border border-steel-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-industrial-orange-400 to-industrial-orange-600 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="w-14 h-14 bg-industrial-orange-100 text-industrial-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-orange-500 group-hover:text-white transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>

      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold text-space-blue-900">
          {count}
          <span className="text-industrial-orange-500">{stat.suffix}</span>
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-steel-900 mb-2">
        {stat.label}
      </h3>
      
      <p className="text-sm text-steel-500">
        {stat.description}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 md:py-28 bg-steel-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-industrial-orange-500 text-sm font-semibold tracking-wider uppercase">
            实力数据
          </span>
          <h2 className="section-title mt-3">用数据说话</h2>
          <p className="section-subtitle">
            深耕工业自动化领域多年，以真实数据展现我们的专业实力和客户价值
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
