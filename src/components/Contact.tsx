import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { API_URL } from '../apiConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    entityType: '',
    specialty: '',
    monthlyBilling: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const whatsappNumber = '5583987351040';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20o%20contato%20no%20site.`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ocorreu um erro ao enviar a mensagem.');
      }
      
      setStatus('success');
      setStatusMessage(data.message || 'Mensagem enviada com sucesso!');
      setFormData({ 
        name: '', company: '', email: '', phone: '', 
        entityType: '', specialty: '', monthlyBilling: '', 
        subject: '', message: '' 
      });

    } catch (err: any) {
      console.error("Erro no handleSubmit:", err);
      setStatus('error');
      setStatusMessage(err.message);
    }
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'ENDEREÇO',
      details: [
        'Rua José Gonçalves de Lucena, 524',
        'Cruzeiro, Campina Grande - PB',
        'CEP: 58415-000'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'CONTATO',
      details: [
        '+55 (83) 98735-1040',
        'Atendimento executivo'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-MAIL',
      details: [
        'evertonsousacontabilidade@gmail.com',
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'HORÁRIO',
      details: [
        'Segunda a Sexta: 8h às 19h',
        'Sábado: 9h às 13h',
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
          <div className="lg:col-span-2 space-y-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="text-slate-400 flex-shrink-0 mt-1">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4 tracking-wide">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600 mb-1">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-sm p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">NOME COMPLETO *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="Seu nome completo" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">EMPRESA / ORGANIZAÇÃO</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="Nome da empresa" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">E-MAIL CORPORATIVO *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="seu@empresa.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">TELEFONE</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="(83) 99999-9999" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="entityType" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">VOCÊ ATUA COMO *</label>
                      <select id="entityType" name="entityType" value={formData.entityType} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white">
                          <option value="" disabled>Selecione uma opção</option>
                          <option value="Pessoa Física">Pessoa Física</option>
                          <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">ESPECIALIDADE NA SAÚDE *</label>
                      <input type="text" id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="Ex: Médico, Dentista, Clínica..."/>
                    </div>
                </div>
                <div>
                  <label htmlFor="monthlyBilling" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">FATURAMENTO MÉDIO MENSAL *</label>
                  <select id="monthlyBilling" name="monthlyBilling" value={formData.monthlyBilling} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white">
                      <option value="" disabled>Selecione uma faixa de faturamento</option>
                      <option value="Até R$ 10.000">Até R$ 10.000</option>
                      <option value="De R$ 10.001 a R$ 20.000">De R$ 10.001 a R$ 20.000</option>
                      <option value="De R$ 20.001 a R$ 50.000">De R$ 20.001 a R$ 50.000</option>
                      <option value="De R$ 50.001 a R$ 100.000">De R$ 50.001 a R$ 100.000</option>
                      <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
                  </select>
                </div>
                
                {/* ===== ÁREA DE INTERESSE ATUALIZADA ===== */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">ÁREA DE INTERESSE *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white">
                      <option value="" disabled>Selecione um serviço</option>
                      <optgroup label="Serviços para Pessoa Física">
                        <option value="IRPF para Profissionais da Saúde">IRPF para Profissionais da Saúde</option>
                        <option value="Carnê-Leão Digital">Carnê-Leão Digital</option>
                        <option value="Receita Saúde">Receita Saúde</option>
                        <option value="Consultoria Previdenciária (INSS)">Consultoria Previdenciária (INSS)</option>
                        <option value="Planejamento para migrar de PF para PJ">Planejamento para migrar de PF para PJ</option>
                        <option value="Revisão e Retificação">Revisão e Retificação</option>
                      </optgroup>
                      <optgroup label="Serviços para Pessoa Jurídica">
                        <option value="Abertura de Empresa">Abertura de Empresa</option>
                        <option value="Planejamento Tributário">Planejamento Tributário</option>
                        <option value="Gestão Fiscal e Contábil">Gestão Fiscal e Contábil</option>
                        <option value="BPO Financeiro">BPO Financeiro</option>
                        <option value="Gestão de Equipe e eSocial">Gestão de Equipe e eSocial</option>
                        <option value="DMED">DMED</option>
                        <option value="Consultoria Estratégica para Clínicas">Consultoria Estratégica para Clínicas</option>
                      </optgroup>
                      <option value="Outros">Outros</option>
                  </select>
                </div>
                {/* ===== FIM DA ATUALIZAÇÃO ===== */}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">DESCRIÇÃO DA NECESSIDADE *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 bg-white" placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' && <span>Enviando...</span>}
                  {status === 'idle' && <><Send className="w-5 h-5" /><span>ENVIAR SOLICITAÇÃO</span></>}
                  {status === 'success' && <><CheckCircle className="w-5 h-5" /><span>MENSAGEM ENVIADA!</span></>}
                  {status === 'error' && <><AlertTriangle className="w-5 h-5" /><span>TENTAR NOVAMENTE</span></>}
                </button>

                {status === 'success' && <p className="text-center text-green-600">{statusMessage}</p>}
                {status === 'error' && <p className="text-center text-red-600">{statusMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
