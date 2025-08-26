import React from 'react';
import { Award, BookOpen, Calculator } from 'lucide-react';

// A importação da sua foto continua a mesma
import profilePhoto from '../assets/images/foto.png';

const Team = () => {
  // Removemos a estrutura de dados 'partners', pois agora o texto é fixo.

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            LIDERANÇA CONTÁBIL
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Fundador
          </h2>
        </div>

        <div className="flex justify-center mb-20">
          <div className="group lg:w-1/3 md:w-1/2 w-full">
            <div className="aspect-w-3 aspect-h-4 mb-8 overflow-hidden rounded-sm">
              <img
                src={profilePhoto} // Usamos a foto importada diretamente
                alt="Everton Sousa Contador"
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* ===== BLOCO DE TEXTO ALTERADO ===== */}
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
            {/* ===== FIM DA ALTERAÇÃO ===== */}

          </div>
        </div>

        <div className="bg-slate-900 rounded-sm p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Calculator className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">TRADIÇÃO</h3>
              <p className="text-white/80 leading-relaxed">
                Mais de 10 anos de atuação no mercado contábil brasileiro, 
                construindo um legado de excelência e confiança.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">ACADEMIA</h3>
              <p className="text-white/80 leading-relaxed">
                Formação acadêmica de elite e constante atualização
                nas legislações nacionais.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-white/60 mb-6" />
              <h3 className="text-2xl font-light mb-4">RECONHECIMENTO</h3>
              <p className="text-white/80 leading-relaxed">
                Reconhecido pela excelência técnica e pela satisfação
                dos clientes atendidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
