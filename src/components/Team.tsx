import React from 'react';
import { Award, BookOpen, Calculator } from 'lucide-react';

const Team = () => {
  const partners = [
    {
      name: 'Contador Eduardo Mendes Silva',
      position: 'Sócio Fundador',
      specialization: 'Contabilidade Empresarial e Tributária',
      education: 'MBA FGV, Especialização USP',
      experience: '28 anos de experiência',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Contadora Beatriz Carvalho Rocha',
      position: 'Sócia',
      specialization: 'Auditoria e Controladoria',
      education: 'Doutorado USP, MBA INSPER',
      experience: '22 anos de experiência',
      image: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Contador Ricardo Almeida Santos',
      position: 'Sócio',
      specialization: 'Consultoria Tributária Internacional',
      education: 'Mestrado PUC-SP, CPA Certification',
      experience: '25 anos de experiência',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            LIDERANÇA CONTÁBIL
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Sócios
            <span className="block font-normal">Fundadores</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais de reconhecida excelência técnica e vasta experiência 
            em suas respectivas áreas de especialização contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="aspect-w-3 aspect-h-4 mb-8 overflow-hidden rounded-sm">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-medium text-slate-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 tracking-[0.1em] uppercase mb-4">
                  {partner.position}
                </p>
                <p className="text-slate-600 mb-3">
                  <strong>Especialização:</strong> {partner.specialization}
                </p>
                <p className="text-slate-600 text-sm mb-2">
                  {partner.education}
                </p>
                <p className="text-slate-500 text-sm">
                  {partner.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="bg-slate-900 rounded-sm p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Calculator className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">TRADIÇÃO</h3>
              <p className="text-white/80 leading-relaxed">
                Mais de 25 anos de atuação no mercado contábil brasileiro, 
                construindo um legado de excelência e confiança.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">ACADEMIA</h3>
              <p className="text-white/80 leading-relaxed">
                Formação acadêmica de elite nas melhores universidades 
                nacionais e internacionais.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">RECONHECIMENTO</h3>
              <p className="text-white/80 leading-relaxed">
                Consistentemente ranqueados entre as melhores empresas contábeis 
                do país pelos principais órgãos de classe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;