import React from 'react';
import { Section } from './ui/Section';
import { Zap, Calendar, Target, CheckCircle2, Play, Flag } from 'lucide-react';

const Phase: React.FC<{ 
  title: string; 
  period: string; 
  items: string[]; 
  icon: React.ReactNode; 
  colorClass: string;
  borderColor: string;
}> = ({ title, period, items, icon, colorClass, borderColor }) => (
  <div className="relative pl-8 md:pl-0 md:flex gap-6 pb-12 last:pb-0 group">
    {/* Line (Desktop) */}
    <div className="hidden md:block absolute left-[19px] top-10 bottom-0 w-0.5 bg-gray-200 group-last:hidden"></div>
    
    {/* Icon Wrapper */}
    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-10 relative md:mx-0 ${colorClass}`}>
      {icon}
    </div>

    {/* Content */}
    <div className={`mt-2 md:mt-0 flex-1 bg-white p-6 rounded-lg border-l-4 shadow-sm ${borderColor}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mt-2 md:mt-0 w-fit ${colorClass.replace('bg-', 'bg-opacity-10 text-').replace('text-white', '')}`}>
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base leading-snug font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ActionPlan: React.FC = () => {
  return (
    <Section title="Proposta de Plano de Ação" subtitle="O roteiro sugerido para profissionalizar o comercial e recuperar os leads perdidos.">
      
      <div className="mb-10 bg-amber-50 border border-amber-200 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <div className="p-3 bg-amber-100 rounded-full text-amber-600">
           <Play size={24} fill="currentColor" />
        </div>
        <div>
          <h4 className="font-bold text-amber-900 text-lg mb-1">Ponto de Partida: Recuperação da Base</h4>
          <p className="text-amber-800 text-sm md:text-base">
            Antes de qualquer mudança, sugerimos rodar o <strong>Script de Recuperação</strong> nos 133 leads atuais para tentar agendar reuniões imediatas.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <Phase 
          title="Fase 1: Organização da Casa"
          period="Semana 1 (Imediato)"
          colorClass="bg-brand-600"
          borderColor="border-brand-600"
          icon={<Zap size={20} />}
          items={[
            "Implementação do Script de Triagem MQL/SQL no WhatsApp.",
            "Definição clara: O que é um lead 'Bom' vs 'Ruim' para o escritório?",
            "Treinamento rápido: Como fazer a ligação de 5 minutos.",
            "Ação de repescagem nos contatos da última semana."
          ]}
        />
        <Phase 
          title="Fase 2: Rotina e Constância"
          period="Primeiros 30 Dias"
          colorClass="bg-brand-500"
          borderColor="border-brand-500"
          icon={<Calendar size={20} />}
          items={[
            "Validação da rotina de Follow-up (Regra do 1, 3, 7 dias).",
            "Ajuste nos criativos de Auxílio-Acidente focando em 'Autoridade'.",
            "Criação do PDF 'Guia de Documentos' para facilitar a vida do cliente PCD."
          ]}
        />
        <Phase 
          title="Fase 3: Otimização"
          period="60 Dias"
          colorClass="bg-brand-800"
          borderColor="border-brand-800"
          icon={<Flag size={20} />}
          items={[
            "Análise dos dados: Qual script converteu mais?",
            "Aumento de verba nos públicos campeões de vendas.",
            "Possível automação das primeiras mensagens de saudação."
          ]}
        />
      </div>
    </Section>
  );
};