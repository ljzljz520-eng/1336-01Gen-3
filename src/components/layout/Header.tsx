import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: '首页', path: '/' },
    { label: '产品中心', path: '/products' },
    { label: '应用案例', path: '/cases' },
    { label: '关于我们', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-industrial-orange-500 rounded flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-space-blue-900' : 'text-white'
              }`}
            >
              智擎机器人
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'text-industrial-orange-500'
                      : 'text-industrial-orange-400'
                    : isScrolled
                    ? 'text-steel-700 hover:text-industrial-orange-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-industrial-orange-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/consult"
              className="btn-primary !py-2 !px-5 text-sm"
            >
              预约方案评估
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="菜单"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-steel-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-steel-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-steel-200 shadow-lg">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-industrial-orange-500 bg-industrial-orange-50'
                    : 'text-steel-700 hover:bg-steel-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link to="/consult" className="btn-primary w-full">
                预约方案评估
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
