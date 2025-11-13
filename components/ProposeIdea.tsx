import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon } from './Icons';
import SuccessModal from './SuccessModal';

interface ProposeIdeaProps {
  navigateToHome: () => void;
}

const ProposeIdea: React.FC<ProposeIdeaProps> = ({ navigateToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ideaName: '',
    ideaDescription: '',
  });
  const [isRefining, setIsRefining] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRefineWithAI = async () => {
    if (!formData.ideaDescription.trim()) {
      setError('Por favor, descreva sua ideia primeiro.');
      return;
    }
    setIsRefining(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const systemInstruction = `
        Você é um consultor especialista em produtos digitais e startups. Sua tarefa é pegar a descrição da ideia de um aplicativo fornecida por um usuário e refiná-la.
        Seu objetivo é tornar a descrição mais clara, estruturada e profissional, destacando a proposta de valor.
        Estruture a resposta final nas seguintes seções, usando markdown:
        1. **O Problema:** Descreva claramente o problema que a ideia busca resolver.
        2. **A Solução:** Apresente o aplicativo como a solução para esse problema.
        3. **Principais Funcionalidades:** Liste as características essenciais do aplicativo.
        4. **Público-Alvo:** Identifique o perfil do usuário ideal.
        Use uma linguagem profissional, mas encorajadora. Responda em Português do Brasil.
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formData.ideaDescription,
        config: {
            systemInstruction: systemInstruction,
        }
      });
      
      setFormData(prev => ({ ...prev, ideaDescription: response.text }));

    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao refinar a ideia. Tente novamente.');
    } finally {
      setIsRefining(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      // Simulate API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', formData);
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Houve um erro ao enviar sua proposta. Por favor, tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors duration-300";

  return (
    <>
      {showSuccessModal && <SuccessModal onClose={navigateToHome} />}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <button onClick={navigateToHome} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Voltar para a página inicial
          </button>

          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Dê vida à sua Ideia</h1>
              <p className="text-lg text-gray-400">Preencha o formulário abaixo com os detalhes do seu projeto. Quanto mais detalhes, melhor poderemos ajudá-lo.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Seu Nome</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className={inputClasses} />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Seu Email</label>
                      <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className={inputClasses} />
                  </div>
              </div>
              <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Seu WhatsApp / Telefone</label>
                  <input type="tel" name="phone" id="phone" required placeholder="+258 8X XXX XXXX" value={formData.phone} onChange={handleInputChange} className={inputClasses} />
              </div>
              <div>
                  <label htmlFor="ideaName" className="block text-sm font-medium text-gray-300 mb-2">Nome do Projeto/Ideia</label>
                  <input type="text" name="ideaName" id="ideaName" required value={formData.ideaName} onChange={handleInputChange} className={inputClasses} />
              </div>
              <div>
                  <label htmlFor="ideaDescription" className="block text-sm font-medium text-gray-300 mb-2">Descreva sua ideia em detalhes</label>
                  <div className="relative">
                      <textarea name="ideaDescription" id="ideaDescription" required rows={10} value={formData.ideaDescription} onChange={handleInputChange} className={`${inputClasses} resize-y`}></textarea>
                      <button type="button" onClick={handleRefineWithAI} disabled={isRefining} className="absolute bottom-3 right-3 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                          {isRefining ? (
                              <>
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Refinando...
                              </>
                          ) : (
                              <>
                                  <SparklesIcon className="w-5 h-5" />
                                  Melhorar com IA
                              </>
                          )}
                      </button>
                  </div>
                  {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
              <div className="text-center pt-4">
                  <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-lg w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar Proposta'
                      )}
                  </button>
              </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProposeIdea;