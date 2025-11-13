import React, { useState, useEffect, useCallback } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

interface HeroProps {
  onNavigateToProject: (project: PortfolioItem) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToProject }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const nextItem = useCallback(() => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % PORTFOLIO_ITEMS.length);
  }, []);

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [nextItem]);
  
  const currentItem: PortfolioItem = PORTFOLIO_ITEMS[currentItemIndex];

  return (
    <section id="solucoes" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <div
          key={item.id}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          aria-hidden={index !== currentItemIndex}
        >
         <div 
            className={`absolute inset-0 w-full h-full bg-black transition-opacity duration-1000 ${index === currentItemIndex ? 'bg-opacity-60' : 'bg-opacity-100'}`}
         />
        </div>
      ))}

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <div className="transition-all duration-700 ease-in-out">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-shadow-lg animate-fade-in-down" key={`${currentItem.id}-h1`}>
            {currentItem.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up" key={`${currentItem.id}-p`}>
            {currentItem.description}
          </p>
          <div className="mt-8 animate-fade-in-up" key={`${currentItem.id}-btn-div`}>
            <button
              onClick={() => onNavigateToProject(currentItem)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      <button onClick={prevItem} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300">
        <ArrowLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextItem} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300">
        <ArrowRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {PORTFOLIO_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentItemIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentItemIndex === index ? 'bg-blue-400 scale-125' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
