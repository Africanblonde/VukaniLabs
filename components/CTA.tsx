import React, { useState } from 'react';
import { WhatsAppIcon, GmailIcon, PhoneIcon } from './Icons';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface CTAProps {
    navigateToPropose: () => void;
}

const CTA: React.FC<CTAProps> = ({ navigateToPropose }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsappNumber) {
        const companyWhatsapp = "258879069325"; // Company's WhatsApp number
        const message = encodeURIComponent(`Olá! Tenho interesse nos serviços da VukaniLabs. Meu número para contato é ${whatsappNumber}.`);
        window.open(`https://wa.me/${companyWhatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <section id="contato" className="py-20 sm:py-24 lg:py-32 bg-gray-900/50 overflow-hidden">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Vamos construir o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">futuro juntos.</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Pronto para começar? Envie sua ideia através do nosso formulário detalhado ou entre em contato direto por um dos canais abaixo.
        </p>

        <div className="mb-12">
            <button
                onClick={navigateToPropose}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-lg"
            >
                Proponha sua Ideia Agora
            </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
          <form onSubmit={handleWhatsappSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:flex-1">
              <input 
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="Seu número do WhatsApp"
                required
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-colors duration-300 text-white w-full min-h-[52px]"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500 text-green-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 min-h-[52px] sm:w-auto w-full"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Iniciar Conversa</span>
              </button>
          </form>
          
          <div className="flex flex-row sm:flex-col gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="mailto:juniormuianga77@gmail.com"
              className="flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500 text-red-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1 min-h-[52px]"
            >
              <GmailIcon className="w-6 h-6" />
              <span>Gmail</span>
            </a>
            <a
              href="tel:+258879069325"
              className="flex items-center justify-center gap-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500 text-blue-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1 min-h-[52px]"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;