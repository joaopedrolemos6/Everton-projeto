import React from 'react';
import { Calculator, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // Navega para a home e depois rola para a seção
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white/10 p-3 rounded-sm">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-light tracking-wide">EVERTON SOUSA</span>
                <div className="text-xs font-medium tracking-[0.2em] uppercase text-white/70">
                  CONTABILIDADE
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed max-w-md">
              Excelência contábil, oferecendo soluções estratégicas e personalizadas para o seu negócio.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-white/50" />
                <span className="text-white/70">Rua José Gonçalves de Lucena, 524, Campina Grande - PB</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-white/50" />
                <span className="text-white/70">+55 (83) 98735-1040</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-white/50" />
                <span className="text-white/70">evertonsousacontabilidade@gmail.com</span>
              </div>
            </div>
          </div>

          {/* ===== NAVEGAÇÃO ATUALIZADA ===== */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide">NAVEGAÇÃO</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-white/70 hover:text-white transition-colors duration-300">Início</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white transition-colors duration-300">Empresa</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-white transition-colors duration-300">Serviços</button>
              </li>
              {/* Links diretos para as novas páginas */}
              <li>
                <Link to="/contabilidade-medica" className="text-white/70 hover:text-white transition-colors duration-300">Contabilidade Médica</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-white transition-colors duration-300">Contato</button>
              </li>
            </ul>
          </div>
          {/* ===== FIM DA ATUALIZAÇÃO ===== */}

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide">SERVIÇOS</h3>
            <ul className="space-y-4">
              {[
                'Legalização e Regularização',
                'Departamento Pessoal',
                'Fiscal e Tributário',
                'Contabilidade',
                'Gestão Financeira',
                'Consultoria Estratégica'
              ].map((specialty) => (
                <li key={specialty}>
                  <span className="text-white/70 text-sm">
                    {specialty}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <p className="text-white/50 text-sm mb-2">
                © 2025 Everton Sousa Contador. Todos os direitos reservados.
              </p>
              <p className="text-white/40 text-xs">
                CRC/SP 123.456 | CNPJ: 12.345.678/0001-90
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-white/40 text-xs leading-relaxed max-w-md">
                Este site está em conformidade com a LGPD e as diretrizes do CFC. 
                Todas as informações são tratadas com absoluta confidencialidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
