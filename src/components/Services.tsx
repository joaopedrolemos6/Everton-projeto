import React from 'react';
import { 
  FileCheck,      // Ícone para Legalização
  Users,          // Ícone para Departamento Pessoal
  Receipt,        // Ícone para Fiscal e Tributário
  BookOpen,       // Ícone para Contabilidade
  TrendingUp,     // Ícone para Gestão Financeira
  Lightbulb       // Ícone para Consultoria
} from 'lucide-react';

const Services = () => {
  // A estrutura de dados foi mantida, apenas o conteúdo foi substituído.
  const services = [
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: 'LEGALIZAÇÃO E REGULARIZAÇÃO',
      subtitle: 'Conformidade e Processos',
      description: 'Garantimos a conformidade legal da sua empresa desde a abertura até a gestão contínua de alvarás e certidões.',
      features: [
        'Abertura, alteração e encerramento', 
        'Alterações contratuais e cadastrais', 
        'Regularização fiscal e trabalhista', 
        'Obtenção de alvarás e licenças'
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'DEPARTAMENTO PESSOAL',
      subtitle: 'Gestão de Capital Humano',
      description: 'Cuidamos de toda a rotina de pessoal, desde a admissão até o cumprimento de todas as obrigações legais.',
      features: [
        'Admissão e demissão de funcionários', 
        'Cálculo de folha de pagamento', 
        'Geração de guias (FGTS, INSS, IRRF)', 
        'Elaboração e envio do eSocial'
      ]
    },
    {
      icon: <Receipt className="w-10 h-10" />,
      title: 'FISCAL E TRIBUTÁRIO',
      subtitle: 'Otimização de Impostos',
      description: 'Realizamos a apuração de impostos e o planejamento tributário para reduzir legalmente a carga fiscal da sua empresa.',
      features: [
        'Apuração de impostos (todos regimes)', 
        'Controle de guias e parcelamentos', 
        'Planejamento tributário estratégico', 
        'Envio de obrigações (SPED, ECF)'
      ]
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'CONTABILIDADE',
      subtitle: 'Relatórios e Demonstrativos',
      description: 'Fornecemos uma visão clara da saúde financeira do seu negócio através de relatórios e demonstrativos precisos.',
      features: [
        'Escrituração contábil completa', 
        'Apuração de resultados (DRE, Balanço)', 
        'Relatórios gerenciais personalizados', 
        'Classificação e conciliação'
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'GESTÃO FINANCEIRA',
      subtitle: 'Controle e Planejamento',
      description: 'Auxiliamos no controle financeiro, desde o fluxo de caixa diário até o planejamento orçamentário estratégico.',
      features: [
        'Contas a pagar e receber', 
        'Conciliação bancária', 
        'Fluxo de caixa e dashboards', 
        'Diagnóstico da saúde financeira'
      ]
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'CONSULTORIA ESTRATÉGICA',
      subtitle: 'Suporte para Decisões',
      description: 'Oferecemos assessoria personalizada para apoiar o crescimento e a viabilidade do seu negócio.',
      features: [
        'Análise de viabilidade de negócios', 
        'Planejamento societário', 
        'Análise de custos e preços', 
        'Acompanhamento de metas'
      ]
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
            Oferecemos um portfólio completo de serviços para garantir a saúde fiscal, 
            financeira e legal da sua empresa, com a máxima eficiência e precisão.
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