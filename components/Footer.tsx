
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} VukaniLabs. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construindo o futuro com Inteligência Artificial.</p>
      </div>
    </footer>
  );
};

export default Footer;
