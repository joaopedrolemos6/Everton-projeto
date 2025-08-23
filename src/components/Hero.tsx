import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '5583987351040'; // Confirme se o número está correto
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20mais%20informações.`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Pattern de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Badge "EXCELÊNCIA CONTÁBIL" foi removido daqui */}

          {/* 2. Título principal alterado */}
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            CONTABILIDADE
            <span className="block font-normal text-4xl lg:text-6xl text-white/90 mt-2">
              Especializada na Área da Saúde
            </span>
          </h1>
          
          {/* 3. Parágrafo de descrição alterado */}
          <p className="text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Soluções contábeis personalizadas para sua clínica ou consultório, com foco na economia e segurança do seu negócio.
          </p>
          
          {/* 4. Botões invertidos e textos/estilos alterados */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 text-white px-10 py-4 rounded-sm font-medium text-lg transition-all duration-300 hover:bg-green-600 flex items-center justify-center space-x-3"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Atendimento via WhatsApp</span>
            </a>

            <button
              onClick={() => scrollToSection('services')}
              className="group text-white/90 hover:text-white px-10 py-4 font-medium text-lg transition-colors duration-300 flex items-center space-x-3"
            >
              <span>Conheça nossos serviços</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full mx-auto mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
