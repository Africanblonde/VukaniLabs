import React from 'react';
import { PortfolioItem } from '../types';
import { ExternalLinkIcon, TwitterIcon, LinkedInIcon } from './Icons';

interface ProjectDetailProps {
  project: PortfolioItem;
  navigateToHome: () => void;
}

const FastManagementContent = () => (
  <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
    <p className="text-xl text-gray-300 leading-relaxed">
      O Fast Managment é uma plataforma robusta e completa, desenhada para ser o centro nevrálgico da sua oficina. Esta aplicação foi criada com o objetivo de não apenas digitalizar as suas operações, mas de as tornar mais inteligentes, rápidas e lucrativas.
    </p>

    <h2 className="!text-3xl !font-bold !border-b !border-gray-700 !pb-3 !mb-6">Funcionalidades Principais</h2>
    
    <div className="space-y-4">
      <h3 className="!text-2xl !font-bold !text-blue-400">🚀 1. Operações Inteligentes e Otimizadas</h3>
      <p>O coração do Fast Managment é a sua capacidade de acelerar e simplificar o trabalho diário.</p>
      <h4 className="!font-semibold !text-lg !text-white">Diagnóstico com Inteligência Artificial</h4>
      <p>Esqueça as suposições. Descreva os sintomas do veículo no nosso Assistente de Diagnóstico IA e receba instantaneamente uma lista de possíveis causas, verificações recomendadas, e sugestões de serviços e peças do seu próprio stock. É como ter um mecânico especialista disponível 24/7.</p>
      <h4 className="!font-semibold !text-lg !text-white">Venda Rápida (Quick Sale)</h4>
      <p>Crie orçamentos e faturas em segundos, diretamente do painel principal. Adicione clientes, serviços e peças com poucos cliques, ideal para atendimentos rápidos e para não deixar o cliente à espera.</p>
      <h4 className="!font-semibold !text-lg !text-white">Pós-Venda Automatizado</h4>
      <p>O sistema identifica automaticamente faturas que necessitam de acompanhamento para garantia (após 7 dias) e manutenção preventiva (após 120 dias), ajudando a fidelizar clientes e a gerar novas oportunidades de negócio.</p>
    </div>

    <div className="space-y-4">
      <h3 className="!text-2xl !font-bold !text-blue-400">💰 2. Controlo Financeiro Total, Online e Offline</h3>
      <p>Assuma o controlo total das finanças da sua oficina com ferramentas poderosas e flexíveis.</p>
      <h4 className="!font-semibold !text-lg !text-white">Faturação Profissional e Completa</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>Crie Cotações, Faturas Pro-forma, Faturas e Faturas Recibo com aparência profissional, incluindo o seu logo e dados da empresa.</li>
        <li>Registe pagamentos parciais ou totais em múltiplos métodos (M-Pesa, E-mola, Numerário, etc.).</li>
        <li>Aplique descontos (fixos ou em percentagem) e configure impostos (IVA) de forma automática.</li>
        <li>Gere PDFs profissionais para imprimir ou enviar diretamente aos seus clientes.</li>
      </ul>
      <h4 className="!font-semibold !text-lg !text-white">Funcionalidade Offline Primeiro</h4>
      <p>A sua internet falhou? Não há problema. Continue a criar faturas normalmente. O Fast Managment guarda tudo localmente e sincroniza automaticamente assim que a ligação for restabelecida. Nunca mais perca uma venda.</p>
      <h4 className="!font-semibold !text-lg !text-white">Gestão de Recebimentos e Despesas</h4>
      <p>Tenha uma visão clara de todas as entradas (faturas e receitas extra) e saídas (despesas gerais, compras, salários). Acompanhe os saldos em tempo real para cada um dos seus métodos de pagamento.</p>
      <h4 className="!font-semibold !text-lg !text-white">Contas Correntes de Clientes e Fornecedores</h4>
      <p>Identifique rapidamente quais clientes têm dívidas pendentes e o valor total em dívida. Registe compras a crédito de fornecedores e controle facilmente os pagamentos a efetuar.</p>
    </div>

    <div className="space-y-4">
      <h3 className="!text-2xl !font-bold !text-blue-400">⚙️ 3. Gestão 360º do Seu Negócio</h3>
      <p>Do cliente ao inventário, tudo está interligado para uma gestão sem falhas.</p>
      <h4 className="!font-semibold !text-lg !text-white">Gestão de Clientes e Viaturas</h4>
      <p>Mantenha um registo completo dos seus clientes e das suas respetivas viaturas. Consulte o histórico de serviços e faturas de cada cliente com um clique.</p>
      <h4 className="!font-semibold !text-lg !text-white">Controlo de Inventário (Stock)</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Peças e Óleos:</strong> Registe peças com controlo de quantidade, preço de compra e preço de venda. O sistema alerta-o sobre o stock baixo.</li>
        <li><strong>Serviços:</strong> Crie e gira a sua tabela de preços de serviços para uma faturação rápida e consistente.</li>
      </ul>
      <h4 className="!font-semibold !text-lg !text-white">Gestão de Património</h4>
      <p>Registe e controle todos os ativos da sua oficina, como ferramentas e equipamentos. Saiba a sua localização, valor, estado (Ativo, Em Manutenção) e data de aquisição.</p>
      <h4 className="!font-semibold !text-lg !text-white">Gestão de Recursos Humanos</h4>
      <p>Registe os seus funcionários, os seus salários e faça a gestão de adiantamentos salariais de forma simples.</p>
      <h4 className="!font-semibold !text-lg !text-white">Registo de Ocorrências</h4>
      <p>Mantenha um diário digital de todos os eventos importantes na oficina, desde a entrega de uma viatura a um acordo específico com um cliente.</p>
    </div>
    
    <div className="space-y-4">
        <h3 className="!text-2xl !font-bold !text-blue-400">📈 4. Relatórios e Análises para Decisões Inteligentes</h3>
        <p>Tome decisões baseadas em dados, não em suposições.</p>
        <h4 className="!font-semibold !text-lg !text-white">Painel de Controlo (Dashboard)</h4>
        <p>Tenha uma visão imediata da saúde do seu negócio com gráficos de Receitas vs. Despesas, Lucro, e estatísticas chave como o número de clientes e o total faturado.</p>
        <h4 className="!font-semibold !text-lg !text-white">Relatórios Detalhados</h4>
        <p>Gere relatórios de atividade por período para analisar todas as transações (entradas, saídas e ocorrências) num intervalo de datas específico.</p>
        <h4 className="!font-semibold !text-lg !text-white">Análise de Clientes VIP</h4>
        <p>Identifique os seus clientes mais valiosos com base no total gasto, frequência de visitas ou data da última visita, permitindo-lhe criar ações de fidelização.</p>
    </div>

    <div className="space-y-4">
        <h3 className="!text-2xl !font-bold !text-blue-400">🛠️ 5. Administração Flexível e Segura</h3>
        <p>Adapte o sistema à sua realidade e garanta a segurança dos seus dados.</p>
        <h4 className="!font-semibold !text-lg !text-white">Perfis e Permissões</h4>
        <p>Crie perfis de acesso (Ex: Rececionista, Mecânico, Gerente) e defina com precisão o que cada utilizador pode ver e fazer na aplicação, garantindo a segurança e a confidencialidade da informação.</p>
        <h4 className="!font-semibold !text-lg !text-white">Personalização Completa</h4>
        <p>Personalize a aparência dos seus documentos (logo, títulos, rodapé), configure métodos de pagamento, defina os seus impostos e muito mais.</p>
        <h4 className="!font-semibold !text-lg !text-white">Segurança e Backup</h4>
        <p>Os seus dados estão seguros na nuvem. Além disso, pode exportar um backup completo de toda a sua informação a qualquer momento para sua tranquilidade.</p>
    </div>

    <div className="!mt-8 bg-gray-800/50 border-l-4 border-purple-500 rounded-r-lg p-6">
        <p className="!font-bold !text-purple-300 !mt-0">O Fast Managment é mais do que um software; é o seu parceiro estratégico para o crescimento.</p>
    </div>
  </div>
);


const FlowPointContent = () => (
  <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
    <p className="text-xl text-gray-300 leading-relaxed">
      Cansado da página em branco? O FlowPoint é o seu copiloto de IA tudo-em-um, projetado para transformar suas ideias em resultados impressionantes com velocidade e fluidez. De roteiros simples a apresentações de alto impacto, de prompts de texto a imagens espetaculares, o FlowPoint integra as ferramentas de que você precisa para se destacar. Crie, desenhe e dialogue em um único lugar.
    </p>

    <h2 className="!text-3xl !font-bold !border-b !border-gray-700 !pb-3 !mb-6">Funcionalidades em Destaque</h2>
    
    {/* Feature 1: Presentation Generator */}
    <div className="space-y-4">
      <h3 className="!text-2xl !font-bold !text-blue-400">1. Gerador de Apresentações com IA: Do Roteiro ao Slide em Segundos</h3>
      <p>Nunca mais comece uma apresentação do zero. Nossa ferramenta transforma seu conteúdo bruto em uma apresentação de slides profissional, visualmente deslumbrante e pronta para cativar qualquer audiência.</p>
      <h4 className="!font-semibold !text-lg !text-white">Como Funciona?</h4>
      <p>Defina seu Objetivo: Diga à IA qual é a meta da sua apresentação e quem é o público.</p>
      <p>Adicione seu Conteúdo: Escreva ou cole seu roteiro, usando o símbolo % para indicar a separação entre os slides.</p>
      <p>A Mágica Acontece: A IA analisa seu texto e gera uma apresentação completa, incluindo:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Títulos e Tópicos:</strong> Conteúdo organizado de forma clara e concisa em cada slide.</li>
        <li><strong>Design Inteligente:</strong> Sugestão de uma paleta de cores e tipografia harmoniosas.</li>
        <li><strong>Imagens Únicas para Cada Slide:</strong> O FlowPoint gera uma imagem de fundo exclusiva e relevante para cada slide com base no seu conteúdo. Diga adeus aos bancos de imagens genéricas!</li>
        <li><strong>Notas do Orador:</strong> Seu roteiro original é transformado em notas detalhadas para você brilhar na apresentação.</li>
      </ul>
       <h4 className="!font-semibold !text-lg !text-white">Pós-Criação:</h4>
       <ul className="list-disc list-inside space-y-2">
         <li><strong>Edição Total:</strong> Altere textos, ajuste cores, fontes, alinhamento e até a opacidade do fundo das imagens.</li>
         <li><strong>Download Fácil:</strong> Exporte sua obra-prima como um arquivo .pptx (PowerPoint) com um único clique.</li>
       </ul>
      <div className="!mt-6 bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg p-6">
        <p className="!font-bold !text-blue-300 !mt-0">Benefício Principal:</p>
        <p className="!mb-0">Economize horas de design e formatação. Crie apresentações com aparência profissional que comunicam suas ideias de forma eficaz e memorável.</p>
      </div>
    </div>

    {/* Feature 2: Image Studio */}
    <div className="space-y-4">
        <h3 className="!text-2xl !font-bold !text-blue-400">2. Estúdio de Imagens: Sua Imaginação, Visualizada</h3>
        <p>Liberte seu potencial criativo com um estúdio de imagens que entende suas palavras. Crie, edite e analise visuais sem precisar de softwares complexos.</p>
        <h4 className="!font-semibold !text-lg !text-white">Nossos Módulos:</h4>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Gerar:</strong> Descreva a imagem dos seus sonhos e veja-a materializar-se em segundos. Escolha diferentes formatos (paisagem, retrato, quadrado) para se adaptar perfeitamente a qualquer plataforma.</li>
            <li><strong>Editar:</strong> Carregue uma foto e peça modificações com simples comandos de texto. "Adicione óculos de sol neste cachorro" ou "Mude o cenário para uma floresta mágica". A edição de imagens nunca foi tão intuitiva.</li>
            <li><strong>Analisar:</strong> Envie uma imagem e faça perguntas. "Que estilo arquitetônico é este?" ou "Descreva os sentimentos transmitidos por esta foto". Obtenha insights profundos sobre qualquer conteúdo visual.</li>
        </ul>
        <h4 className="!font-semibold !text-lg !text-white">Sua Galeria Pessoal:</h4>
        <p>Todas as imagens criadas são salvas automaticamente em sua galeria, junto com os prompts que você usou. Organize e revisite suas criações sempre que quiser.</p>
        <div className="!mt-6 bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg p-6">
          <p className="!font-bold !text-blue-300 !mt-0">Benefício Principal:</p>
          <p className="!mb-0">Transforme ideias em imagens de alta qualidade para seus projetos, redes sociais e apresentações. É o poder de um diretor de arte ao seu alcance.</p>
        </div>
    </div>
    
    {/* Feature 3: Smart Chat */}
    <div className="space-y-4">
        <h3 className="!text-2xl !font-bold !text-blue-400">3. Chat Inteligente: Seu Assistente Pessoal para Pesquisa e Ideias</h3>
        <p>Vá além das respostas padrão. Converse com um assistente de IA que não apenas entende você, mas também se conecta ao mundo para trazer as informações mais relevantes.</p>
        <h4 className="!font-semibold !text-lg !text-white">Recursos Poderosos:</h4>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Conectado à Internet:</strong> Ative o modo de pesquisa para que o assistente use o Google e encontre respostas atualizadas sobre notícias, tendências e eventos recentes.</li>
            <li><strong>Fontes e Referências:</strong> Quando o modo de pesquisa está ativo, o chat fornece os links das fontes utilizadas, permitindo que você verifique e se aprofunde nos dados com total confiança.</li>
            <li><strong>Organização por Sessões:</strong> Crie diferentes chats para diferentes projetos. Suas conversas são salvas e organizadas, permitindo que você continue de onde parou.</li>
            <li><strong>Multitarefa:</strong> Use-o para fazer brainstorming, redigir e-mails, resumir artigos, depurar código ou simplesmente para tirar uma dúvida rápida.</li>
        </ul>
        <div className="!mt-6 bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg p-6">
          <p className="!font-bold !text-blue-300 !mt-0">Benefício Principal:</p>
          <p className="!mb-0">Acelere sua pesquisa e processo criativo. Tenha um parceiro de brainstorming que fornece respostas inteligentes, atuais e confiáveis, 24 horas por dia.</p>
        </div>
    </div>

  </div>
);

const UlinkaContent = () => (
    <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-8">
        <h1 className="!text-4xl !font-black !text-center !bg-clip-text !text-transparent !bg-gradient-to-r !from-blue-400 !to-purple-500">Ulinka: Arquitetura Social para Conexões de Alto Impacto</h1>
        <p className="text-xl text-gray-300 leading-relaxed text-center -mt-4">
            Uma plataforma modular e orientada a dados, desenhada para catalisar o crescimento pessoal e profissional através de um ecossistema de interações com propósito.
        </p>

        <h2 className="!text-3xl !font-bold !border-b !border-gray-700 !pb-3 !mb-6">Visão Geral da Plataforma</h2>
        <p>A Ulinka transcende o modelo tradicional de redes sociais. Somos uma plataforma de engenharia social focada em converter potencial em ação. A nossa arquitetura é construída sobre três pilares fundamentais: um grafo de conexões inteligentes, um ecossistema de eventos dinâmicos e um framework de crescimento gamificado. O nosso objetivo é fornecer as ferramentas e a estrutura para que indivíduos e organizações possam descobrir, conectar-se e colaborar de forma eficiente e mensurável.</p>

        <h2 className="!text-3xl !font-bold !border-b !border-gray-700 !pb-3 !mb-6">Core de Funcionalidades Atuais: O Nosso Motor Operacional</h2>
        <p>A nossa plataforma está equipada com um conjunto robusto de módulos desenhados para uma experiência integrada.</p>
        
        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">1. Sistema de Identidade Multifacetada e Perfis Ricos</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Perfis Baseados em Papéis (RBAC):</strong> Suporte nativo para múltiplos tipos de utilizador (person, student, ngo, venue, faculty, admin), cada um com atributos e permissões específicas.</li>
                <li><strong>Modelo de Dados Extensível:</strong> Perfis que incluem vetores de interesses, histórico de participação em eventos, gráfico de seguidores/seguindo, bio estruturada e pontos de impacto acumulados.</li>
                <li><strong>Autenticação Segura:</strong> Fluxos de onboarding e login dedicados para indivíduos e organizações.</li>
            </ul>
        </div>

        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">2. Feed de Conteúdo Dinâmico e Agregado</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Fluxo de Itens Multi-Tipo:</strong> Renderização otimizada de diferentes objetos de dados (Post, Event) num feed unificado e cronologicamente relevante.</li>
                <li><strong>Módulo de "Stories":</strong> Conteúdo efémero para partilhas rápidas e aumento de engajamento.</li>
                <li><strong>Pesquisa e Filtragem:</strong> Indexação de conteúdo para pesquisa textual rápida dentro do feed principal.</li>
            </ul>
        </div>

        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">3. Ecossistema de Eventos End-to-End</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Ciclo de Vida Completo:</strong> Módulos para criação, detalhe, gestão de participantes (attendees) e organização de eventos.</li>
                <li><strong>Geolocalização e Mapeamento:</strong> Integração com mapas (Leaflet.js) para visualização de eventos por localização, incluindo um Mapa de Impacto global.</li>
                <li><strong>Eventos em Tempo Real (Live):</strong> Funcionalidade para streaming de vídeo e chat em tempo real, aumentando o alcance e a interatividade.</li>
                <li><strong>Networking Dedicado:</strong> Salas de networking virtuais associadas a eventos específicos para facilitar conexões pós-evento.</li>
            </ul>
        </div>

        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">4. Motor de Conexão e Descoberta Inteligente</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Algoritmo de Recomendação:</strong> Sugestões proativas de eventos, utilizadores e ONGs com base na sobreposição de interesses, categorias de eventos frequentados e conexões em comum.</li>
                <li><strong>Funcionalidade "Vamos":</strong> Um protocolo de ação direta que transforma uma publicação numa iniciativa de mensagem privada, contornando a comunicação passiva.</li>
                <li><strong>Visualização de Rede (Network Map):</strong> Módulo para renderizar o grafo de conexões do utilizador, identificando clusters e potenciais pontes de networking.</li>
            </ul>
        </div>
        
        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">5. Framework de Comunidades e Colaboração</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Grupos Temáticos:</strong> Infraestrutura para a criação de comunidades de interesse públicas ou privadas, com gestão de membros e conteúdo exclusivo.</li>
                <li><strong>Comunidades Locais (Local Communities):</strong> Estruturas geolocalizadas lideradas por Embaixadores, desenhadas para fomentar a atividade local e organizar eventos regionais.</li>
            </ul>
        </div>
        
        <div className="space-y-4">
            <h3 className="!text-2xl !font-bold !text-blue-400">6. Sistema de Gamificação e Crescimento Pessoal</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Pontos de Impacto:</strong> Métrica proprietária que quantifica o engajamento positivo de um utilizador na plataforma.</li>
                <li><strong>Módulo de Recompensas:</strong> Marketplace interno onde Pontos de Impacto podem ser trocados por ativos digitais (Tickets, passes VIP).</li>
                <li><strong>Rastreador de Hábitos (Habit Tracker):</strong> Ferramenta para monitorização de objetivos pessoais, com sistema de "streaks" e incentivos.</li>
                {/* FIX: Complete the truncated list item and close the tags */}
                <li><strong>Teste de Aptidões de Carreira:</strong> Ferramenta de autoavaliação integrada que gera perfis de personalidade e sugere caminhos de carreira.</li>
            </ul>
        </div>
    </div>
);

// FIX: Add the missing ProjectDetail component and export it as default.
const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, navigateToHome }) => {
  const renderProjectContent = () => {
    switch (project.id) {
      case 1: // Fast Management
        return <FastManagementContent />;
      case 3: // Ulinka
        return <UlinkaContent />;
      case 5: // FlowPoint
        return <FlowPointContent />;
      default:
        return (
          <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300">
            <p className="text-xl leading-relaxed">{project.description}</p>
            <p className="mt-8 text-lg text-gray-400">Mais detalhes sobre este projeto estarão disponíveis em breve.</p>
          </div>
        );
    }
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <button onClick={navigateToHome} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Voltar para a página inicial
        </button>
        
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-blue-900/20">
          <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{project.name}</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <main className="flex-1">
            {renderProjectContent()}
          </main>
          <aside className="w-full md:w-1/3 lg:w-1/4 space-y-8 md:sticky top-24 self-start">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Sobre o Projeto</h3>
              <p className="text-gray-400">{project.description}</p>
              {project.projectUrl && project.projectUrl !== '#' && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                  Visitar Projeto
                </a>
              )}
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Partilhar</h3>
              <div className="flex justify-center gap-4">
                 <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== 'undefined' ? window.location.href : ''}&title=${project.name}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon className="w-8 h-8" /></a>
                 <a href={`https://twitter.com/intent/tweet?text=Confira este projeto incrível: ${project.name}&url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="w-8 h-8" /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
