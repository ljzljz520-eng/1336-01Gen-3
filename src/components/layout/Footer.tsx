import { Link } from 'react-router-dom';
import { Bot, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-blue-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-industrial-orange-500 rounded flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">智擎机器人</span>
            </Link>
            <p className="text-steel-400 text-sm leading-relaxed">
              专注工业机器人研发与应用，为制造业提供智能化、自动化的整体解决方案，助力企业实现产业升级。
            </p>
            <div className="flex gap-3 pt-2">
              {['微信', '抖音', 'B站'].map((platform) => (
                <div
                  key={platform}
                  className="w-9 h-9 bg-space-blue-800 rounded flex items-center justify-center text-xs text-steel-400 hover:bg-industrial-orange-500 hover:text-white transition-colors cursor-pointer"
                >
                  {platform.charAt(0)}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">产品中心</h4>
            <ul className="space-y-3">
              {[
                { label: '焊接机器人', path: '/products/welding' },
                { label: '码垛机器人', path: '/products/palletizing' },
                { label: '喷涂机器人', path: '/products/spraying' },
                { label: '检测机器人', path: '/products/inspection' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-steel-400 text-sm hover:text-industrial-orange-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">快速链接</h4>
            <ul className="space-y-3">
              {[
                { label: '应用案例', path: '/cases' },
                { label: '关于我们', path: '/about' },
                { label: '新闻动态', path: '/news' },
                { label: '技术支持', path: '/support' },
                { label: '预约评估', path: '/consult' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-steel-400 text-sm hover:text-industrial-orange-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-industrial-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-steel-400 text-xs">全国服务热线</p>
                  <p className="text-white font-medium">400-888-9999</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-industrial-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-steel-400 text-xs">商务邮箱</p>
                  <p className="text-white text-sm">sales@zhiqing-robot.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-industrial-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-steel-400 text-xs">公司地址</p>
                  <p className="text-white text-sm">上海市浦东新区张江高科技园区</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-industrial-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-steel-400 text-xs">工作时间</p>
                  <p className="text-white text-sm">周一至周五 9:00-18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-space-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            © 2024 智擎机器人科技有限公司 版权所有
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-steel-500 hover:text-steel-300 transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-steel-500 hover:text-steel-300 transition-colors">
              服务条款
            </a>
            <a href="#" className="text-steel-500 hover:text-steel-300 transition-colors">
              沪ICP备xxxxxxxx号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
