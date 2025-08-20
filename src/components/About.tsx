import React from 'react';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'INTEGRIDADE',
      description: 'Conduta ética irrepreensível em todas as nossas atividades contábeis e fiscais.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'EXCELÊNCIA',
      description: 'Padrão superior de qualidade técnica contábil e atendimento personalizado.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'DISCRIÇÃO',
      description: 'Confidencialidade absoluta e tratamento reservado de todas as informações fiscais.'
    }
  ];

  const achievements = [
    { number: '10+', label: 'ANOS DE TRADIÇÃO' },
    { number: '50+', label: 'EMPRESAS ATENDIDAS' },
    { number: '99%', label: 'SATISFAÇÃO DOS CLIENTES' },
    { number: '24H', label: 'SUPORTE FISCAL' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
                TRADIÇÃO & TECNOLOGIA
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 leading-tight">
                Um Legado de
                <span className="block font-normal">Excelência Contábil</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               Nossa empresa representa o que há de mais refinado 
              na contabilidade brasileira, combinando tradição familiar, expertise técnica e 
              uma abordagem estratégica única para cada cliente.
            </p>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Atendemos exclusivamente uma clientela selecionada, oferecendo soluções 
              contábeis e tributárias sob medida com o mais alto nível de confidencialidade e eficiência.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-slate-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xs font-medium tracking-[0.15em] text-slate-500 uppercase">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Principles */}
            <div className="bg-slate-50 p-12 rounded-sm">
              <h3 className="text-2xl font-light text-slate-900 mb-10 text-center">
                NOSSOS PRINCÍPIOS
              </h3>
              <div className="space-y-10">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="text-slate-400 flex-shrink-0 mt-1">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-900 mb-3 tracking-wide">
                        {principle.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="bg-slate-900 text-white p-12 rounded-sm">
              <h3 className="text-xl font-light mb-8 text-center tracking-wide">
                RECONHECIMENTOS
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Award className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">CRC/PB - Certificação de Excelência</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">IBRACON - Membro Institucional</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">CFC - Registro Nacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;