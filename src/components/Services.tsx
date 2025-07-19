import React from 'react';
import { 
  Calculator, 
  Building, 
  FileText, 
  Shield,
  TrendingUp,
  PieChart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="w-10 h-10" />,
      title: 'CONTABILIDADE EMPRESARIAL',
      subtitle: 'Gestão Corporativa',
      description: 'Assessoria contábil integral para grandes corporações, incluindo consolidações, reestruturações e compliance fiscal.',
      features: ['Consolidação de Balanços', 'Governança Fiscal', 'Compliance Tributário', 'Relatórios Gerenciais']
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'CONSULTORIA TRIBUTÁRIA',
      subtitle: 'Planejamento Fiscal',
      description: 'Consultoria especializada em questões tributárias complexas, com estratégia personalizada para cada cliente.',
      features: ['Planejamento Tributário', 'Consultoria Fiscal', 'Transfer Pricing', 'Reorganizações Societárias']
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'AUDITORIA INDEPENDENTE',
      subtitle: 'Certificação Contábil',
      description: 'Auditoria independente de alto nível para demonstrações financeiras e processos internos.',
      features: ['Auditoria Externa', 'Due Diligence', 'Auditoria Interna', 'Certificação SOX']
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'CONTROLADORIA',
      subtitle: 'Gestão Financeira',
      description: 'Estruturação de controladoria e gestão financeira para empresas de grande porte.',
      features: ['Controles Internos', 'Orçamento Empresarial', 'Análise de Custos', 'KPIs Financeiros']
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: 'GESTÃO PATRIMONIAL',
      subtitle: 'Planejamento Sucessório',
      description: 'Estruturação contábil e tributária para famílias e indivíduos de alto patrimônio.',
      features: ['Sucessão Empresarial', 'Holdings Familiares', 'Planejamento Sucessório', 'Family Office']
    },
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'CONTABILIDADE INTERNACIONAL',
      subtitle: 'Normas Globais',
      description: 'Assessoria em normas contábeis internacionais, IFRS e operações multinacionais.',
      features: ['Conversão IFRS', 'Consolidação Global', 'Transfer Pricing', 'Compliance Internacional']
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            SERVIÇOS ESPECIALIZADOS
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Expertise Contábil
            <span className="block font-normal">de Excelência</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos assessoria contábil especializada nas mais diversas áreas da contabilidade, 
            sempre com foco na estratégia e nos resultados excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-2 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 tracking-[0.1em] uppercase">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white p-12 rounded-sm shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-slate-900 mb-6">
              Consultoria Personalizada
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Cada cliente recebe atenção exclusiva e soluções contábeis sob medida 
              para suas necessidades específicas.
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-sm font-medium transition-colors duration-300">
              AGENDAR CONSULTORIA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;