import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const isLightBg = isScrolled || location.pathname !== '/';

  const navLinks = [
    { label: 'SERVIÇOS', id: 'services' },
    { label: 'CONTATO', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isLightBg 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          
          <Link to="/" className="flex items-center space-x-4 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Logo Everton Sousa Contabilidade" className="h-full w-auto object-contain" />
            </div>
            <div>
              <span className={`text-xl font-light tracking-wide transition-colors duration-300 ${isLightBg ? 'text-slate-900' : 'text-white'}`}>
                EVERTON SOUSA
              </span>
              {/* ===== VALOR DO TRACKING AUMENTADO AQUI ===== */}
              <div className={`text-xs font-medium tracking-[0.52em] uppercase transition-colors duration-300 ${isLightBg ? 'text-slate-600' : 'text-white/80'}`}>
                CONTABILIDADE
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>INÍCIO</button>
            {navLinks.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>{item.label}</button>
            ))}
            <Link to="/blog" className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>BLOG</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 transition-colors duration-300 ${isLightBg ? 'text-slate-900' : 'text-white'}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="px-6 py-8 space-y-6">
                <button onClick={() => scrollToSection('hero')} className="block text-left w-full text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">INÍCIO</button>
                {navLinks.map((item) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className="block text-left w-full text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">{item.label}</button>
                ))}
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">BLOG</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
