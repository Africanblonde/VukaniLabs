import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Services: React.FC = () => {
  const [titleRef, isTitleVisible] = useAnimateOnScroll();
  const [card1Ref, isCard1Visible] = useAnimateOnScroll();
  const [card2Ref, isCard2Visible] = useAnimateOnScroll();

  return (
    <section id="planos" className="py-20 sm:py-24 lg:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tem uma ideia? Nós a <span className="text-blue-400">transformamos em realidade.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
            Seja você uma grande empresa ou um empreendedor solo, temos o plano perfeito para desenvolver sua solução de microaplicativo com IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Custom Projects Card */}
          <div
            ref={card1Ref}
            className={`bg-gray-800/50 border border-blue-500/30 rounded-2xl p-8 text-left transform hover:scale-105 hover:border-blue-500 transition-all duration-700 ease-out shadow-2xl shadow-blue-900/20 h-full ${isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Projetos Sob Medida</h3>
            <p className="text-gray-400 mb-6">
              Para startups e empresas (B2B/B2C) que buscam uma solução robusta e escalável. Desenvolvemos seu projeto do zero, com planos de desenvolvimento adaptados ao tamanho e complexidade da sua visão.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Agentes de IA e Sistemas RAG/CAG</li>
              <li className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Integração com AutoGen, N8N, Maker</li>
              <li className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Suporte e Manutenção Contínuos</li>
              <li className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Escalabilidade Garantida</li>
            </ul>
          </div>

          {/* Friends Plan Card */}
          <div
             ref={card2Ref}
             className={`bg-gray-800/50 border border-purple-500/30 rounded-2xl p-8 text-left transform hover:scale-105 hover:border-purple-500 transition-all duration-700 ease-out delay-200 shadow-2xl shadow-purple-900/20 h-full ${isCard2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Plano Amigos</h3>
            <p className="text-gray-400 mb-6">
              Perfeito para micro e pequenas empresas com grandes ideias. Nós desenvolvemos o seu aplicativo e, como parceiros, você tem acesso gratuito à solução. Uma parceria onde todos ganham.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="text-purple-400 mr-2">✓</span> Desenvolvimento de MVP sem custo</li>
              <li className="flex items-center"><span className="text-purple-400 mr-2">✓</span> Acesso Gratuito vitalício ao seu app</li>
              <li className="flex items-center"><span className="text-purple-400 mr-2">✓</span> Ideal para validar ideias de negócio</li>
              <li className="flex items-center"><span className="text-purple-400 mr-2">✓</span> Modelo de parceria e revenue share</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
