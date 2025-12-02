import React from 'react';
import { Section } from './ui/Section';
import { MessageSquare, Filter, Clock, Scale, Lightbulb, HelpCircle } from 'lucide-react';

const DiagnosticCard: React.FC<{ icon: React.ReactNode; title: string; question: string }> = ({ icon, title, question }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 bg-brand-50 rounded-lg text-brand-600 group-hover:bg-brand-100 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    </div>
    <div className="flex gap-3 pt-3 border-t border-gray-100">
        <HelpCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
        <p className="text-gray-600 text-sm leading-relaxed italic">{question}</p>
    </div>
  </div>
);

export const BottlenecksSection: React.FC = () => {
  return (
    <Section 
      title="Áreas de Investigação" 
      subtitle="Para destravar o crescimento, precisamos responder juntos a estas 5 perguntas sobre a operação atual."
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DiagnosticCard 
          icon={<MessageSquare size={24} />}
          title="Postura no Atendimento"
          question="O atendimento hoje é ativo (conduz o cliente) ou passivo (apenas tira dúvidas)? Estamos agindo como consultores ou recepcionistas?"
        />
        <DiagnosticCard 
          icon={<Filter size={24} />}
          title="Triagem de Qualidade"
          question="Existe um critério claro para separar quem é urgente (SQL) de quem é apenas curioso? Ou gastamos a mesma energia com todos?"
        />
        <DiagnosticCard 
          icon={<Clock size={24} />}
          title="Rotina de Follow-up"
          question="Quando o lead para de responder, existe um processo para buscá-lo de volta no dia seguinte e 3 dias depois? Ou aceitamos o 'vácuo'?"
        />
        <DiagnosticCard 
          icon={<Scale size={24} />}
          title="Alinhamento de Expectativa"
          question="A mensagem que o cliente recebe no WhatsApp condiz com a promessa do anúncio? Existe quebra de confiança na primeira abordagem?"
        />
        <DiagnosticCard 
          icon={<Lightbulb size={24} />}
          title="Autoridade Visual"
          question="Os materiais enviados (áudios, PDFs, textos) passam a segurança de um escritório especialista ou parecem amadores?"
        />
      </div>

      {/* Insights Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6 flex items-center gap-2">
          <Lightbulb className="text-gold-500 fill-current" />
          Premissas de um Processo Vencedor
        </h3>
        
        <div className="bg-brand-900 text-white p-8 rounded-xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h4 className="font-bold text-gold-500 uppercase tracking-widest text-xs mb-2">O Segredo Jurídico</h4>
              <p className="text-xl font-serif leading-relaxed">
                "O cliente jurídico não fecha por preço, fecha por <strong>segurança</strong>. O processo comercial deve servir para reduzir a ansiedade dele."
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-1.5 rounded text-gold-400 font-bold text-xs mt-1">Fato</div>
                <p className="text-brand-100 text-sm">98% das vendas complexas não acontecem no primeiro contato. O dinheiro está no acompanhamento (Follow-up).</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-1.5 rounded text-gold-400 font-bold text-xs mt-1">Fato</div>
                <p className="text-brand-100 text-sm">Leads 'ruins' muitas vezes são apenas leads mal atendidos. Uma triagem eficiente recupera o investimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};