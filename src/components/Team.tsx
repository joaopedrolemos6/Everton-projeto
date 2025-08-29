import React from 'react';
import { Award, BookOpen, Calculator } from 'lucide-react';

import profilePhoto from '../assets/images/foto.png';

const Team = () => {
  return (
    <section id="team" className="pt-24 bg-white"> {/* Alterado de py-24 para pt-24 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12"> {/* Reduzido de mb-20 para mb-12, ou pode ser removido dependendo do espaço desejado */}
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Fundador
          </h2>
        </div>

        <div className="flex justify-center"> {/* Removido mb-20 aqui, ou ajustado conforme necessário */}
          <div className="group lg:w-1/3 md:w-1/2 w-full">
            <div className="aspect-w-3 aspect-h-4 mb-8 overflow-hidden rounded-sm">
              <img
                src={profilePhoto} 
                alt="Everton Sousa Contador"
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">
                Everton Sousa
              </h3>
              <p className="text-md font-medium text-slate-600 tracking-wider">
                Contador
              </p>
              <p className="text-slate-700 pt-2">
                Especialista Tributário para Área da Saúde
              </p>
              <p className="text-slate-500 text-sm">
                CRC: PB-013847/O-6
              </p>
              <p className="text-slate-500 text-sm">
                10 anos de experiência
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
