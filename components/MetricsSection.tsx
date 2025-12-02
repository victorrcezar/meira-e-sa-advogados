import React from 'react';
import { Users, FileX, AlertCircle, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';

export const MetricsSection: React.FC = () => {
  return (
    <Section title="Resultados Outubro a Novembro" subtitle="Uma análise fria dos números gerados pela campanha no período.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card Leads */}
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-500 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Volume de Oportunidades</p>
            <h3 className="text-5xl font-bold text-brand-900 mb-2">133</h3>
            <p className="text-gray-600 font-medium">Leads gerados</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-full">
            <Users className="w-8 h-8 text-brand-600" />
          </div>
        </div>

        {/* Card Contratos */}
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Resultado Final</p>
            <h3 className="text-5xl font-bold text-red-600 mb-2">0</h3>
            <p className="text-gray-600 font-medium">Contratos fechados</p>
          </div>
          <div className="bg-red-50 p-3 rounded-full">
            <FileX className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0">
          <AlertCircle className="w-10 h-10 text-brand-600" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-brand-900 mb-2">O que esses números dizem?</h4>
          <p className="text-gray-700 leading-relaxed">
            O tráfego está funcionando: <strong>as pessoas estão interessadas</strong>. O problema não é a falta de clientes procurando, mas sim o que acontece <strong>entre</strong> o clique e a assinatura. Existe um "vazamento" no processo comercial que precisamos estancar imediatamente.
          </p>
        </div>
      </div>
    </Section>
  );
};