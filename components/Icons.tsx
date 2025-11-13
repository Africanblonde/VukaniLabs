import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6,14.2l-1.5-0.8c-0.3-0.1-0.5-0.1-0.7,0.1l-0.7,0.8c-0.5,0.6-1.4,0.5-1.9-0.1c-0.5-0.6-1-1.3-1.4-2 c-0.4-0.7-0.4-1.5,0.2-2l0.7-0.9c0.2-0.2,0.2-0.5,0.1-0.8l-0.8-1.5c-0.1-0.3-0.4-0.5-0.7-0.5c-0.1,0-0.2,0-0.3,0l-1,0.1 c-0.6,0.1-1,0.6-1.2,1.2C5,8.9,5.2,10,5.6,10.9c0.8,1.6,2,3.2,3.7,4.4c1.4,1,3,1.5,4.5,1.5c0.2,0,0.5,0,0.7-0.1 c0.6-0.2,1.1-0.7,1.2-1.3l0.1-1C17.1,14.6,16.9,14.3,16.6,14.2z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10 S17.5,2,12,2z M12,20.5c-4.7,0-8.5-3.8-8.5-8.5S7.3,3.5,12,3.5s8.5,3.8,8.5,8.5S16.7,20.5,12,20.5z" />
  </svg>
);

export const GmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,5.5H2c-0.6,0-1,0.4-1,1v11c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1v-11C23,5.9,22.6,5.5,22,5.5z M20.7,7.5L12,13.4 L3.3,7.5H20.7z M21,17.5H3c-0.6,0-1-0.4-1-1v-8.7l9.6,6.4c0.1,0.1,0.3,0.1,0.4,0.1s0.3,0,0.4-0.1l9.6-6.4v8.7 C22,17.1,21.6,17.5,21,17.5z" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5,15.7c-0.1-0.1-0.2-0.2-0.4-0.3l-2.6-1.5c-0.4-0.2-0.9-0.1-1.2,0.2l-1.3,1.3c-1-0.5-2.2-1.3-3.2-2.3 c-1-1-1.8-2.2-2.3-3.2l1.3-1.3c0.3-0.3,0.4-0.8,0.2-1.2L9.5,4.9C9.4,4.7,9.3,4.6,9.2,4.5c-0.3-0.3-0.8-0.4-1.2-0.1l-2,1 C5.6,5.6,5.3,6.1,5.3,6.6c0,0.1,0,0.2,0,0.3c0,4.6,3,8.7,7,10.2c0.3,0.1,0.6,0.1,0.9,0.1c0.6,0,1.1-0.3,1.4-0.7l1-2 c0.3-0.4,0.2-0.9-0.1-1.2C20.7,15.8,20.6,15.7,20.5,15.7z" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456l1.197.398-1.197.398a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);