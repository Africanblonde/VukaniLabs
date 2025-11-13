import React, { useState, useEffect } from 'react';

interface HeaderProps {
  navigateToHome: () => void;
  navigateToPropose: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigateToHome, navigateToPropose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    navigateToHome();
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Allow the menu to close before navigating
    setTimeout(() => {
        navigateToHome();
        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }, 300); 
  };

  const handleProposeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
     setTimeout(() => {
      navigateToPropose();
    }, 300);
  };

  return (
    <>
      <header className="py-5 px-4 sm:px-6 lg:px-8 absolute top-0 left-0 w-full z-30">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={navigateToHome} className="text-2xl font-bold tracking-tighter text-white">
            Vukani<span className="text-blue-400">Labs</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="text-gray-300 hover:text-white transition-colors duration-300">Soluções</a>
            <a href="#planos" onClick={(e) => handleNavClick(e, '#planos')} className="text-gray-300 hover:text-white transition-colors duration-300">Nossos Planos</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="text-gray-300 hover:text-white transition-colors duration-300">Contato</a>
          </nav>
          <button onClick={handleProposeClick} className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105">
            Proponha sua Ideia
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50 relative w-6 h-6">
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900/90 shadow-2xl z-20 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <a href="#solucoes" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl font-semibold" onClick={(e) => handleMobileNavClick(e, '#solucoes')}>Soluções</a>
          <a href="#planos" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl font-semibold" onClick={(e) => handleMobileNavClick(e, '#planos')}>Nossos Planos</a>
          <a href="#contato" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl font-semibold" onClick={(e) => handleMobileNavClick(e, '#contato')}>Contato</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 text-lg mt-8" onClick={handleProposeClick}>
            Proponha sua Ideia
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;