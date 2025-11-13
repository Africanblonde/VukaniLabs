import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProposeIdea from './components/ProposeIdea';
import ProjectDetail from './components/ProjectDetail';
import { PortfolioItem } from './types';

type View = {
  page: 'home' | 'proposeIdea' | 'project';
  data?: PortfolioItem;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>({ page: 'home' });

  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const LandingPage = () => (
    <>
      <main>
        <Hero onNavigateToProject={(project) => navigate({ page: 'project', data: project })} />
        <Services />
        <CTA navigateToPropose={() => navigate({ page: 'proposeIdea' })} />
      </main>
      <Footer />
    </>
  );

  const renderContent = () => {
    switch (currentView.page) {
      case 'proposeIdea':
        return <ProposeIdea navigateToHome={() => navigate({ page: 'home' })} />;
      case 'project':
        return <ProjectDetail project={currentView.data!} navigateToHome={() => navigate({ page: 'home' })} />;
      case 'home':
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e8b44,transparent)]"></div>
      </div>
      <div className="relative z-10">
        <Header 
          navigateToHome={() => navigate({ page: 'home' })}
          navigateToPropose={() => navigate({ page: 'proposeIdea' })}
        />
        {renderContent()}
      </div>
    </div>
  );
};

export default App;