import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'ENDEREÇO',
      details: [
        'Av. Faria Lima, 3144 - 12º andar',
        'Itaim Bibi, São Paulo - SP',
        'CEP: 01451-000'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'CONTATO',
      details: [
        '+55 (11) 3045-7000',
        '+55 (11) 99999-0000',
        'Atendimento executivo'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-MAIL',
      details: [
        'contato@escritorio.adv.br',
        'parcerias@escritorio.adv.br'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'HORÁRIO',
      details: [
        'Segunda a Sexta: 8h às 19h',
        'Sábado: 9h às 13h',
        'Plantão 24h para emergências'
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
            CONTATO EMPRESARIAL
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
            Consultoria
            <span className="block font-normal">Especializada</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato para uma consultoria confidencial e personalizada. 
            Atendemos exclusivamente mediante agendamento prévio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="text-slate-400 flex-shrink-0 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4 tracking-wide">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Executive Contact */}
            <div className="bg-slate-900 rounded-sm p-10 text-white">
              <h3 className="text-xl font-light mb-6 tracking-wide">
                ATENDIMENTO EMPRESARIAL
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Para questões fiscais urgentes ou de alta complexidade, 
                nosso atendimento empresarial está disponível 24 horas.
              </p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-sm font-medium hover:bg-white/90 transition-colors duration-300 w-full">
                CONTATO DIRETO
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-sm p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                      NOME COMPLETO *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                      EMPRESA / ORGANIZAÇÃO
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                      E-MAIL CORPORATIVO *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                      TELEFONE
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                    ÁREA DE INTERESSE *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="empresarial">Contabilidade Empresarial</option>
                    <option value="tributaria">Consultoria Tributária</option>
                    <option value="auditoria">Auditoria Independente</option>
                    <option value="controladoria">Controladoria</option>
                    <option value="patrimonial">Gestão Patrimonial</option>
                    <option value="internacional">Contabilidade Internacional</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                    DESCRIÇÃO DA NECESSIDADE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="Descreva brevemente sua necessidade contábil..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>MENSAGEM ENVIADA</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>ENVIAR SOLICITAÇÃO</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center leading-relaxed">
                  * Campos obrigatórios. Todas as informações são tratadas com absoluta confidencialidade 
                  em conformidade com a LGPD e as normas de sigilo profissional da contabilidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;