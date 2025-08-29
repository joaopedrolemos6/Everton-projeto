import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* Company Info (ocupa 2 colunas) */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              {/* ===== ÍCONE ALTERADO AQUI ===== */}
              {/* Classes de fundo e padding removidas para um visual limpo */}
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Logo Everton Sousa Contabilidade" className="h-full w-auto object-contain" />
              </div>
              {/* ===== FIM DA ALTERAÇÃO ===== */}
              <div>
                <span className="text-xl font-light tracking-wide">EVERTON SOUSA</span>
                <div className="text-xs font-medium tracking-[0.52em] uppercase text-white/70">
                  CONTABILIDADE
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed max-w-md">
              Excelência contábil, oferecendo soluções estratégicas e personalizadas para o seu negócio.
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

          {/* Navegação (ocupa 1 coluna) */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide">NAVEGAÇÃO</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-white/70 hover:text-white transition-colors duration-300">Início</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-white transition-colors duration-300">Serviços</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-white/70 hover:text-white transition-colors duration-300">Equipe</button>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-white transition-colors duration-300">Contato</button>
              </li>
            </ul>
          </div>

          {/* Serviços Pessoa Física (ocupa 1 coluna) */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide">PESSOA FÍSICA</h3>
            <ul className="space-y-3">
              {[
                'IRPF para Profissionais da Saúde',
                'Carnê-Leão Digital',
                'Receita Saúde',
                'Consultoria Previdenciária',
                'Migração PF para PJ',
                'Revisão e Retificação',
              ].map((specialty) => (
                <li key={specialty}>
                  <span className="text-white/70 text-sm">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços Pessoa Jurídica (ocupa 1 coluna) */}
          <div>
            <h3 className="text-lg font-medium mb-8 tracking-wide">PESSOA JURÍDICA</h3>
            <ul className="space-y-3">
              {[
                'Abertura de Empresa',
                'Planejamento Tributário',
                'Gestão Fiscal e Contábil',
                'BPO Financeiro',
                'Gestão de Equipe e eSocial',
                'DMED',
                'Consultoria Estratégica',
              ].map((specialty) => (
                <li key={specialty}>
                  <span className="text-white/70 text-sm">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12">
            {/* ... (código do bottom bar continua o mesmo) ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
