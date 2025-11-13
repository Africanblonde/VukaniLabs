import React from 'react';
import { CheckCircleIcon } from './Icons';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-gray-800 border border-blue-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-blue-900/50 max-w-md w-full transform animate-scale-in">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          <CheckCircleIcon className="h-10 w-10 text-white" />
        </div>
        <h3 id="modal-title" className="text-2xl font-bold text-white mb-3">
          Proposta Enviada com Sucesso!
        </h3>
        <p className="text-gray-400 mb-8">
          Recebemos sua ideia. Nossa equipe analisará os detalhes e entrará em contato com você em breve. Obrigado por confiar na VukaniLabs!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
