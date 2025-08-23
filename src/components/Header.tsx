import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importar o hook de autenticação

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // Pegar o status de autenticação

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
    { label: 'EMPRESA', id: 'about' },
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
            <div className={`p-2 rounded-lg transition-all duration-300 ${isLightBg ? 'bg-slate-900' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Calculator className={`w-8 h-8 transition-colors duration-300 ${isLightBg ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <span className={`text-xl font-light tracking-wide transition-colors duration-300 ${isLightBg ? 'text-slate-900' : 'text-white'}`}>
                CONTADOR
              </span>
              <div className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${isLightBg ? 'text-slate-600' : 'text-white/80'}`}>
                EVERTON SOUSA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>INÍCIO</button>
            {navLinks.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>{item.label}</button>
            ))}
            <Link to="/contabilidade-medica" className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>CONTABILIDADE MÉDICA</Link>
            <Link to="/blog" className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>BLOG</Link>
            
            {/* Link Condicional */}
            {isAuthenticated ? (
              <Link to="/admin" className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-indigo-600' : 'text-white'}`}>ADMIN</Link>
            ) : (
              <Link to="/login" className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${isLightBg ? 'text-slate-700' : 'text-white'}`}>LOGIN</Link>
            )}
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
                <Link to="/contabilidade-medica" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">CONTABILIDADE MÉDICA</Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">BLOG</Link>

                {/* Link Condicional Mobile */}
                {isAuthenticated ? (
                  <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium tracking-wide text-indigo-600 hover:text-indigo-800 transition-colors duration-300">ADMIN</Link>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300">LOGIN</Link>
                )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
