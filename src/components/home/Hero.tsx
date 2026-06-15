import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-industrial-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-space-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="w-2 h-2 bg-industrial-orange-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">专注工业自动化 15 年</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              智能工业机器人
              <br />
              <span className="text-industrial-orange-400">驱动制造未来</span>
            </h1>

            <p className="text-lg text-steel-300 max-w-xl leading-relaxed">
              提供焊接、码垛、喷涂、检测全系列工业机器人及整体解决方案，
              帮助制造企业提升效率、降低成本、保障品质，实现智能化转型升级。
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/consult" className="btn-primary !py-4 !px-8 text-base">
                预约方案评估
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-secondary !border-white/20 !text-white hover:!border-industrial-orange-400 hover:!text-industrial-orange-400 !py-4 !px-6">
                <Play className="w-5 h-5 mr-2" />
                观看产品视频
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">500<span className="text-industrial-orange-400">+</span></div>
                <div className="text-sm text-steel-400 mt-1">服务客户</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1200<span className="text-industrial-orange-400">+</span></div>
                <div className="text-sm text-steel-400 mt-1">交付产线</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">300<span className="text-industrial-orange-400">%</span></div>
                <div className="text-sm text-steel-400 mt-1">平均效率提升</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20industrial%20robotic%20arm%20in%20smart%20factory%20dark%20blue%20lighting%20orange%20accents%20cinematic&image_size=landscape_4_3"
                alt="工业机器人"
                className="rounded-lg shadow-2xl shadow-black/50"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-500">在线运行设备</div>
                    <div className="text-2xl font-bold text-steel-900">8,526 台</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-space-blue-800 border border-space-blue-700 rounded-lg p-4 shadow-xl">
                <div className="text-xs text-steel-400 mb-1">今日运行时长</div>
                <div className="text-xl font-bold text-white">18.5<span className="text-sm font-normal text-steel-400 ml-1">小时</span></div>
                <div className="w-full bg-space-blue-900 rounded-full h-1.5 mt-2">
                  <div className="bg-industrial-orange-500 h-1.5 rounded-full w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
