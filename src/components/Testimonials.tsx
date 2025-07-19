import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: 'A expertise técnica e a abordagem estratégica da empresa foram fundamentais para o sucesso da nossa reestruturação societária. Profissionalismo exemplar.',
      author: 'CEO, Multinacional do Setor Financeiro',
      company: 'Confidencial'
    },
    {
      content: 'Em uma auditoria de alta complexidade, a equipe demonstrou conhecimento contábil excepcional e conduziu o trabalho com absoluta discrição e eficiência.',
      author: 'Conselheiro, Grupo Empresarial',
      company: 'Confidencial'
    },
    {
      content: 'O planejamento tributário desenvolvido superou nossas expectativas. Soluções inovadoras com total segurança fiscal e confidencialidade.',
      author: 'Family Office',
      company: 'Confidencial'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            REFERÊNCIAS
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Confiança
            <span className="block font-normal">Conquistada</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-sm shadow-sm"
            >
              <Quote className="w-8 h-8 text-slate-300 mb-8" />
              
              <p className="text-slate-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-slate-100 pt-6">
                <p className="font-medium text-slate-900 mb-1">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white p-12 rounded-sm shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-slate-900 mb-6">
              Discrição Absoluta
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Mantemos a mais rigorosa confidencialidade em todos os nossos relacionamentos 
              profissionais, garantindo total privacidade e segurança às informações de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;