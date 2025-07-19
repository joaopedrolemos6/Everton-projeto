import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-slate-900' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Calculator className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <div>
              <span className={`text-xl font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                CONTABILIDADE
              </span>
              <div className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-white/80'
              }`}>
                & CONSULTORIA TRIBUTÁRIA
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {[
              { label: 'INÍCIO', id: 'hero' },
              { label: 'EMPRESA', id: 'about' },
              { label: 'SERVIÇOS', id: 'services' },
              { label: 'EQUIPE', id: 'team' },
              { label: 'CONTATO', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="px-6 py-8 space-y-6">
              {[
                { label: 'INÍCIO', id: 'hero' },
                { label: 'EMPRESA', id: 'about' },
                { label: 'SERVIÇOS', id: 'services' },
                { label: 'EQUIPE', id: 'team' },
                { label: 'CONTATO', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;