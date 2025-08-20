import React from 'react';
import { Award, BookOpen, Calculator } from 'lucide-react';

import profilePhoto from '../assets/images/foto.png';

const Team = () => {
  const partners = [
    {
      name: 'Contador Everton Sousa',
      position: 'Sócio Fundador',
      specialization: 'Especialista Contabilidade Empresarial e Tributaria Contabilidade para Área da Saúde
      education: 'CRC: PB-013847/O-6 ',
      experience: '10 anos de experiência',
      image: profilePhoto 
    },
  ];

  const singlePartner = partners[0];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Bloco de título re-adicionado, sem o parágrafo de descrição */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            LIDERANÇA CONTÁBIL
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Fundador
          </h2>
          {/* O parágrafo de descrição que estava aqui foi removido. */}
        </div>

        <div className="flex justify-center mb-20">
          <div className="group lg:w-1/3 md:w-1/2 w-full">
            <div className="aspect-w-3 aspect-h-4 mb-8 overflow-hidden rounded-sm">
              <img
                src={singlePartner.image}
                alt={singlePartner.name}
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-900 mb-2">
                {singlePartner.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 tracking-[0.1em] uppercase mb-4">
                {singlePartner.position}
              </p>
              <p className="text-slate-600 mb-3">
                <strong>Especialização:</strong> {singlePartner.specialization}
              </p>
              <p className="text-slate-600 text-sm mb-2">
                {singlePartner.education}
              </p>
              <p className="text-slate-500 text-sm">
                {singlePartner.experience}
              </p>
            </div>
          </div>
        </div>

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
