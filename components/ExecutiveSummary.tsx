import React from 'react';
import { Section } from './ui/Section';
import { Search, Target, Rocket } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  return (
    <Section title="Objetivo do Diagnóstico" subtitle="O que vamos analisar e construir nesta reunião estratégica.">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-brand-600 font-bold uppercase text-sm tracking-wider">
              <Search size={18} />
              <h3>1. Investigar</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Entender exatamente como os <strong>133 leads</strong> foram atendidos. Vamos identificar se o problema está na qualidade do contato ou no processo de vendas.
            </p>
          </div>

          <div className="space-y-3 relative md:before:content-[''] md:before:absolute md:before:-left-4 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-gray-100">
            <div className="flex items-center gap-2 text-amber-600 font-bold uppercase text-sm tracking-wider">
              <Target size={18} />
              <h3>2. Identificar Gargalos</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Validar se estamos falhando na triagem, no follow-up ou na argumentação jurídica. Onde o cliente está "esfriando"?
            </p>
          </div>

          <div className="space-y-3 relative md:before:content-[''] md:before:absolute md:before:-left-4 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-gray-100">
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-sm tracking-wider">
              <Rocket size={18} />
              <h3>3. Implementar Solução</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Apresentar um novo <strong>Script Comercial</strong> e uma rotina de acompanhamento para transformar conversas em contratos assinados.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};