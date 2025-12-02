import React from 'react';
import { MetricsSection } from './components/MetricsSection';
import { BottlenecksSection } from './components/BottlenecksSection';
import { ActionPlan } from './components/ActionPlan';
import { ScriptSection } from './components/ScriptSection';
import { MetricsGuide } from './components/MetricsGuide';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { JourneyDiagnosis } from './components/JourneyDiagnosis';
import { ShieldCheck, ChevronDown } from 'lucide-react';

const Header: React.FC = () => (
  <header className="bg-brand-900 py-5 px-6 md:px-12 border-b border-brand-800 sticky top-0 z-50 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Client Logo - Meira e Sá */}
      <div className="flex-shrink-0">
        <img 
          src="https://static.wixstatic.com/media/1f17f3_a6222cf2930a446f97ea897aec759bc6~mv2.webp" 
          alt="Meira e Sá Advogados" 
          className="h-10 md:h-14 w-auto object-contain animate-logo-bounce"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Consultant Logo - UP! Company */}
      <div className="flex items-center gap-4 pl-6 border-l border-brand-700">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] text-brand-200 uppercase tracking-[0.2em] font-bold leading-tight">
            Consultoria
          </p>
          <p className="text-[10px] text-brand-200 uppercase tracking-[0.2em] font-bold leading-tight">
            Estratégica
          </p>
        </div>
        <img 
           src="https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png" 
           alt="UP! Company" 
           className="h-8 md:h-10 w-auto object-contain hover:opacity-100 transition-opacity brightness-0 invert" 
           referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <div className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24 px-4 text-center relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute right-0 top-0 w-96 h-96 bg-brand-200 rounded-full blur-3xl mix-blend-multiply translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
       <div className="absolute left-0 bottom-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl mix-blend-multiply -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
    </div>

    <div className="max-w-4xl mx-auto relative z-10">
      <div className="inline-block border border-gold-200 bg-gold-50 text-gold-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Relatório Preliminar & Diagnóstico
      </div>
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-900 mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Diagnóstico Comercial <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">e Proposta de Otimização</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Vamos investigar juntos o que pode estar impedindo seus <strong>133 leads</strong> de virarem contratos e apresentar um <strong>Novo Playbook Comercial</strong> para reverter esse cenário.
      </p>
      <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <ChevronDown className="animate-bounce-slow text-brand-400 w-8 h-8 opacity-75" />
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-brand-950 text-white py-16 px-4 text-center border-t border-brand-900">
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <ShieldCheck className="w-16 h-16 text-gold-500 mx-auto mb-6 opacity-90" />
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Próximo Passo: Execução.</h2>
      <p className="text-brand-100 text-lg mb-8 leading-relaxed">
        Com o diagnóstico validado, teremos clareza absoluta de onde agir. 
        Estamos prontos para implementar este novo processo comercial no escritório Meira e Sá.
      </p>
      <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-10 opacity-50"></div>
      
      <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs text-brand-400 uppercase tracking-widest">
          Consultoria realizada por
        </span>
        <img 
           src="https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png" 
           alt="UP! Company" 
           className="h-10 w-auto object-contain brightness-0 invert" 
           referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Header />
      <Hero />
      <main>
        <ExecutiveSummary />
        <MetricsSection />
        <BottlenecksSection />
        <JourneyDiagnosis />
        <ActionPlan />
        <ScriptSection />
        <MetricsGuide />
      </main>
      <Footer />
    </div>
  );
}