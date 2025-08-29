import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  ShieldCheck,
  PiggyBank,
  Users,
  Briefcase,
  Lightbulb,
  Building,
  ArrowRightLeft,
  SearchCheck,
  Wallet // <--- ÍCONE ADICIONADO AQUI
} from 'lucide-react';

const MedicalServices = () => {
  // 1. Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState('pessoaFisica');

  // 2. Novos dados para os serviços de Pessoa Física
  const pessoaFisicaServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'IRPF para Profissionais da Saúde',
      description: 'Pague só o necessário e reduza o risco de malha fina. Uso regras específicas da saúde e reviso tudo com cuidado.',
      features: ['Lançamento correto de despesas dedutíveis', 'Conferência de informes de hospitais e convênios', 'Integração de rendimentos de plantões', 'Revisão final para segurança']
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Carnê-Leão Digital',
      description: 'Organização mensal para quem atende como autônomo. Eu cuido da apuração e do DARF.',
      features: ['Livro-caixa com receitas e despesas', 'Cálculo do IR mensal e emissão de DARF', 'Regularização de atrasos', 'Relatórios simples ao longo do ano']
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Receita Saúde',
      description: 'Apuração e gestão da Receita Saúde, garantindo conformidade e menor risco de inconsistência com a Receita Federal.',
      features: ['Orientação sobre obrigatoriedade', 'Organização dos dados de atendimentos', 'Envio correto e no prazo', 'Benefício: mais segurança e tranquilidade']
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: 'Consultoria Previdenciária (INSS)',
      description: 'Análise e planejamento da contribuição ao INSS, com foco na recuperação de contribuições excedentes.',
      features: ['Mapeamento de vínculos e competências', 'Identificação de recolhimentos em duplicidade', 'Estratégia para compensação ou restituição', 'Benefício: otimização das contribuições']
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: 'Planejamento para migrar de PF para PJ',
      description: 'Descubra quando abrir CNPJ passa a valer a pena. Simulo cenários e mostro o impacto real.',
      features: ['Comparativo PF x PJ por faturamento', 'Estudo de viabilidade e economia', 'Orientação sobre regime e natureza', 'Checklist do antes e depois']
    },
    {
      icon: <SearchCheck className="w-8 h-8" />,
      title: 'Revisão e Retificação',
      description: 'Corrijo erros e reduzo riscos. Faço a retificação se for o melhor caminho.',
      features: ['Auditoria de anos anteriores', 'Orientação sobre comprovação', 'Acompanhamento de notificações', 'Plano para evitar novas inconsistências']
    }
  ];

  // 3. Novos dados para os serviços de Pessoa Jurídica
  const pessoaJuridicaServices = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Abertura de Empresa',
      description: 'Comece certo, com segurança jurídica e foco em economia.',
      features: ['Definição do regime ideal', 'Registro em conselhos de classe', 'CNPJ, CNES, contratos e alvarás', 'Acompanhamento até iniciar a operação']
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: 'Planejamento Tributário',
      description: 'Pague menos dentro da lei.',
      features: ['Comparativo PF x PJ e simulações', 'Planejamento fiscal e distribuição de lucros', 'Aproveitamento de benefícios fiscais', 'Revisões recorrentes']
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Gestão Fiscal e Contábil',
      description: 'Rotina em dia e tranquilidade com o fisco.',
      features: ['Escrituração completa', 'Apuração de tributos e obrigações', 'Pró-labore e distribuição de lucros', 'Relatórios mensais claros']
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'BPO Financeiro',
      description: 'Terceirize o financeiro e ganhe tempo.',
      features: ['Contas a pagar e a receber', 'Conciliação bancária', 'Fluxo de caixa e indicadores', 'Emissão de notas fiscais']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Gestão de Equipe e eSocial',
      description: 'Conformidade trabalhista sem dor de cabeça.',
      features: ['Folha de pagamento e encargos', 'Admissões e desligamentos', 'Rotinas do eSocial e guias', 'Documentação e controles']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'DMED',
      description: 'Envio correto da Declaração de Serviços Médicos.',
      features: ['Organização e validação dos dados', 'Preenchimento e transmissão', 'Conferências para evitar inconsistências', 'Suporte a notificações da Receita']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Consultoria Estratégica para Clínicas',
      description: 'Decisões melhores e resultados mais previsíveis.',
      features: ['Precificação de serviços e custos', 'Planejamento societário e sucessório', 'Metas, orçamento e indicadores', 'Painéis de desempenho']
    }
  ];

  const servicesToDisplay = activeTab === 'pessoaFisica' ? pessoaFisicaServices : pessoaJuridicaServices;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg-px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            SOLUÇÕES PARA A ÁREA DA SAÚDE
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Contabilidade Médica
            <span className="block font-normal">Especializada</span>
          </h2>
        </div>

        <div className="flex justify-center border-b border-gray-200 mb-12">
          <button
            onClick={() => setActiveTab('pessoaFisica')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'pessoaFisica'
                ? 'border-b-2 border-slate-900 text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Pessoa Física
          </button>
          <button
            onClick={() => setActiveTab('pessoaJuridica')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'pessoaJuridica'
                ? 'border-b-2 border-slate-900 text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Pessoa Jurídica
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-slate-500 flex-shrink-0 mt-1">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                        <ShieldCheck className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
