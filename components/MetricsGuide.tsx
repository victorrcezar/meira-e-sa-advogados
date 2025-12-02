import React from 'react';
import { Section } from './ui/Section';

const KpiCard: React.FC<{ label: string; explanation: string }> = ({ label, explanation }) => (
  <div className="p-4 border border-gray-200 rounded-lg bg-white">
    <h4 className="font-bold text-brand-700 text-lg mb-2">{label}</h4>
    <p className="text-sm text-gray-600">{explanation}</p>
  </div>
);

export const MetricsGuide: React.FC = () => {
  return (
    <Section title="O Que Vamos Acompanhar" subtitle="Métricas simples para saber se estamos evoluindo semana a semana.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard label="1. Chamou?" explanation="Total de pessoas que enviaram a primeira mensagem." />
        <KpiCard label="2. Respondeu?" explanation="Quantas pessoas responderam à sua primeira pergunta de triagem." />
        <KpiCard label="3. Qualificado?" explanation="Quantas pessoas realmente tinham o perfil do cliente ideal." />
        <KpiCard label="4. Documentos?" explanation="Quantas pessoas enviaram a foto/documento solicitado." />
        <KpiCard label="5. Agendou/Ligou?" explanation="Quantas conversas evoluíram para uma ligação ou visita." />
        <KpiCard label="6. Contrato?" explanation="Assinaturas efetivas." />
      </div>
      <div className="mt-8 text-center bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
        <p className="font-medium">
          <strong>Meta do Mês:</strong> Focar em melhorar a taxa de conversão da <em>Etapa 2 (Respondeu)</em> para a <em>Etapa 5 (Ligou)</em>.
        </p>
      </div>
    </Section>
  );
};