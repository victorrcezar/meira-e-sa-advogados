import React, { useState } from 'react';
import { Section } from './ui/Section';
import { JourneyStep } from '../types';
import { AlertTriangle, CheckCircle, Search, Activity, Accessibility, AlertOctagon } from 'lucide-react';

const JourneyRow: React.FC<{ steps: JourneyStep[], title: string, description: string }> = ({ steps, title, description }) => (
  <div className="animate-fade-in">
    <div className="mb-6">
      <h3 className="font-bold text-xl text-brand-800 mb-2 flex items-center gap-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg border border-blue-100 inline-block">
        <span className="font-bold text-blue-800">Objetivo da Análise:</span> {description}
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      {/* Connector Line (Desktop) */}
      <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
      
      {steps.map((item, idx) => (
        <div key={idx} className={`bg-white p-5 rounded-lg border-2 shadow-sm flex flex-col items-center text-center md:items-start md:text-left relative transition-all duration-300
          ${item.status === 'critical' ? 'border-red-100' : 'border-gray-100'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white mb-3 font-bold text-sm z-10 shadow-sm
            ${item.status === 'critical' ? 'bg-red-500' : 'bg-brand-300'}`}>
            {idx + 1}
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1">{item.step}</h4>
          
          <div className="mt-2 text-xs text-gray-500">
             <span className="font-bold text-gray-700 block mb-1">Risco Comum:</span>
             {item.observation}
          </div>
          
          <div className="mt-3 w-full pt-3 border-t border-gray-50">
             {item.status === 'critical' && (
               <span className="text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2 py-1 rounded flex items-center gap-1 justify-center md:justify-start">
                 <AlertOctagon size={10} /> Ponto de Perda
               </span>
             )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const JourneyDiagnosis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'accident' | 'pcd'>('accident');

  const journeyAccident: JourneyStep[] = [
    { step: "Anúncio (Meta Ads)", status: "ok", observation: "O cliente é interrompido no feed. A imagem impacta, mas a atenção dele dura 3 segundos." },
    { step: "Abordagem WhatsApp", status: "critical", observation: "Se a resposta demorar >15min, ele esquece que clicou. É tráfego de impulso, não de busca." },
    { step: "Qualificação", status: "critical", observation: "Ele quer ser acolhido, não interrogado. Excesso de perguntas frias aqui mata a conexão." },
    { step: "Fechamento", status: "critical", observation: "Cliente esfria rápido. Sem agendamento de retorno (Follow-up), a venda morre." }
  ];

  const journeyPcd: JourneyStep[] = [
    { step: "Impacto no Feed", status: "ok", observation: "Ele NÃO estava procurando advogado (diferente do Google). Foi o anúncio que gerou o desejo." },
    { step: "Consciência (Educação)", status: "critical", observation: "Ele é cético. Se a primeira mensagem for 'venda', ele foge. Precisa de educação sobre o direito." },
    { step: "Triagem de Risco", status: "critical", observation: "Momento crucial para separar o curioso (Bad Fit) de quem tem laudos (SQL) sem ser rude." },
    { step: "Prova Social", status: "ok", observation: "Como ele não te buscou, ele não confia. Sem ver outros casos de sucesso, ele não assina." }
  ];

  return (
    <Section title="Mapeamento de Riscos na Jornada" subtitle="No Meta Ads (Facebook/Instagram), o jogo é diferente do Google. O cliente é interrompido e precisa ser conquistado.">
      <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white">
          <button 
            onClick={() => setActiveTab('accident')}
            className={`flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-colors
              ${activeTab === 'accident' ? 'text-brand-600 border-b-2 border-brand-500 bg-brand-50' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Activity size={18} />
            Jornada Auxílio-Acidente
          </button>
          <button 
            onClick={() => setActiveTab('pcd')}
            className={`flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-colors
              ${activeTab === 'pcd' ? 'text-brand-600 border-b-2 border-brand-500 bg-brand-50' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Accessibility size={18} />
            Jornada Aposentadoria PCD
          </button>
        </div>

        <div className="p-6 md:p-8">
          {activeTab === 'accident' ? (
             <JourneyRow 
               title="Riscos: Auxílio-Acidente (Impulso)" 
               description="Público fragilizado. O anúncio gera curiosidade imediata, mas a 'chama' apaga rápido. Velocidade é tudo."
               steps={journeyAccident} 
             />
          ) : (
             <JourneyRow 
               title="Riscos: Aposentadoria PCD (Educação)" 
               description="Público desconfiado. O anúncio promete um benefício que ele nem sabia que tinha. Exige paciência e prova."
               steps={journeyPcd} 
             />
          )}

          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-50 p-5 rounded-lg border border-brand-100">
              <h4 className="font-bold text-brand-800 text-sm mb-2 flex items-center gap-2">
                <Search size={16} /> O que vamos validar hoje:
              </h4>
              <ul className="space-y-2 text-sm text-brand-900">
                <li className="flex items-start gap-2">
                  <span className="text-brand-400">•</span>
                  Seu tempo de resposta médio está abaixo de 1 hora?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400">•</span>
                  Você utiliza áudios para gerar conexão com acidentados?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400">•</span>
                  Existe um guia simples para ajudar o cliente PCD a achar documentos?
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-100 flex items-center justify-center text-center">
              <div>
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-bold text-green-800 text-sm mb-1">Meta do Processo</h4>
                <p className="text-sm text-green-900">
                  Transformar a jornada em um "tapete vermelho" onde o cliente se sente guiado, não cobrado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};