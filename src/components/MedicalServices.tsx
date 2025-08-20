import React from 'react';
import {
  Stethoscope,   // Ícone para PJ Médica
  HeartPulse,     // Ícone para Planejamento Tributário
  ShieldCheck,    // Ícone para Gestão de Impostos
  FileText,       // Ícone para DMED e Carnê-Leão
  Wallet,         // Ícone para BPO Financeiro
  Landmark        // Ícone para Holding Patrimonial
} from 'lucide-react';

const MedicalServices = () => {
  const medicalServicesData = [
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: 'ABERTURA DE PJ MÉDICA',
      subtitle: 'Estruturação Societária',
      description: 'Cuidamos de todo o processo de abertura da sua empresa médica, garantindo o melhor enquadramento jurídico e tributário.',
      features: [
        'Análise de viabilidade',
        'Definição do regime tributário',
        'Registro nos conselhos',
        'Emissão de alvarás'
      ]
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: 'PLANEJAMENTO TRIBUTÁRIO',
      subtitle: 'Redução de Impostos',
      description: 'Análise detalhada para otimizar sua carga tributária, seja como pessoa física ou jurídica, dentro da legalidade.',
      features: [
        'Elisão fiscal estratégica',
        'Comparativo PF vs. PJ',
        'Distribuição de lucros',
        'Benefícios fiscais'
      ]
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'GESTÃO FISCAL E CONTÁBIL',
      subtitle: 'Conformidade e Rotinas',
      description: 'Executamos toda a rotina contábil e fiscal da sua clínica ou consultório, garantindo conformidade e tranquilidade.',
      features: [
        'Escrituração contábil',
        'Apuração de impostos',
        'Gestão de pró-labore',
        'Obrigações acessórias'
      ]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'DMED E CARNÊ-LEÃO',
      subtitle: 'Declarações Obrigatórias',
      description: 'Assessoria completa para o preenchimento e entrega de declarações essenciais para profissionais da saúde.',
      features: [
        'Declaração de Serviços Médicos',
        'Apuração mensal do IR',
        'Controle de livro-caixa',
        'Evitar malha fina'
      ]
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: 'BPO FINANCEIRO',
      subtitle: 'Terceirização Financeira',
      description: 'Assumimos a gestão financeira da sua clínica para que você possa focar exclusivamente nos seus pacientes.',
      features: [
        'Contas a pagar e receber',
        'Conciliação bancária',
        'Gestão de glosas',
        'Relatórios de fluxo de caixa'
      ]
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: 'HOLDING PATRIMONIAL',
      subtitle: 'Proteção de Bens',
      description: 'Estruturamos uma holding para proteger seu patrimônio pessoal e otimizar a sucessão de bens.',
      features: [
        'Blindagem patrimonial',
        'Planejamento sucessório',
        'Redução de carga tributária',
        'Organização de ativos'
      ]
    }
  ];

  return (
    // Adicionamos o id "medical-services" para a navegação funcionar
    <section id="medical-services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            SOLUÇÕES PARA A ÁREA DA SAÚDE
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Contabilidade Médica
            <span className="block font-normal">Especializada</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Assessoria completa para médicos, dentistas, clínicas e hospitais que buscam excelência na gestão financeira e fiscal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {medicalServicesData.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-10 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group"
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
      </div>
    </section>
  );
};

export default MedicalServices;