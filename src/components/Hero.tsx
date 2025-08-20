import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Elegant badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-12">
            <span className="text-white/90 text-sm font-medium tracking-wide">
              EXCELÊNCIA CONTÁBIL DESDE 2015
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            CONTABILIDADE
            <span className="block font-thin text-4xl lg:text-6xl text-white/80 mt-2">
              DE PRESTÍGIO
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Soluções contábeis e tributárias estratégicas para empresas e indivíduos que 
            exigem o mais alto padrão de excelência profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-slate-900 px-10 py-4 rounded-sm font-medium text-lg transition-all duration-300 hover:bg-white/90 flex items-center space-x-3"
            >
              <span>CONSULTORIA ESPECIALIZADA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white px-10 py-4 font-medium text-lg transition-colors duration-300 border-b border-transparent hover:border-white/30"
            >
              CONHEÇA A EMPRESA
            </button>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full mx-auto mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;