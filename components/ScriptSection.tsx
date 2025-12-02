import React from 'react';
import { Section } from './ui/Section';
import { MessageCircle, Phone, FileSignature, Filter, CheckCircle2, Clock, XCircle, ChevronRight, PlayCircle, BookOpen, AlertCircle } from 'lucide-react';

const ScriptStep: React.FC<{ 
  stepNumber: string; 
  title: string; 
  icon: React.ReactNode; 
  content?: string;
  children?: React.ReactNode;
  tip?: string;
  isTipImportant?: boolean;
}> = ({ stepNumber, title, icon, content, children, tip, isTipImportant }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-6 relative">
    <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          {stepNumber}
        </div>
        <h3 className="font-bold text-brand-900 flex items-center gap-2 text-lg">
          {icon} {title}
        </h3>
      </div>
    </div>
    <div className="p-6">
      {content && (
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 text-brand-900 font-medium italic relative shadow-inner mb-4">
          <span className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-blue-600 uppercase tracking-wider border border-blue-100 rounded shadow-sm">
            Sugestão de Script
          </span>
          "{content}"
        </div>
      )}
      {children}
      {tip && (
        <div className={`mt-4 text-sm flex items-start gap-2 p-3 rounded ${isTipImportant ? 'bg-amber-50 text-amber-800' : 'text-gray-500'}`}>
          <span className={`font-bold uppercase text-xs mt-0.5 ${isTipImportant ? 'text-amber-600' : 'text-gold-600'}`}>
            {isTipImportant ? 'Estratégia:' : 'Dica:'}
          </span>
          {tip}
        </div>
      )}
    </div>
  </div>
);

export const ScriptSection: React.FC = () => {
  return (
    <Section 
      title="Sugestão de Playbook Comercial" 
      subtitle="Nossa proposta de padronização para aumentar a conversão de leads em contratos."
      className="bg-brand-900 text-white section-dark"
    >
      <div className="max-w-4xl mx-auto space-y-8 text-gray-900">
        
        {/* Step 1: Greeting */}
        <ScriptStep 
          stepNumber="01"
          title="Acolhimento Inicial (Quebra de Gelo)"
          icon={<MessageCircle size={20} />}
          content="Olá! Tudo bem? Aqui é a Dra. Manuelly Mattos, da equipe Meira e Sá. Recebi seu contato sobre o benefício. Pode me contar rapidinho, por áudio ou texto, o que aconteceu no seu caso?"
          tip="O objetivo aqui não é vender, é fazer o lead responder. A pergunta final aberta convida ao desabafo."
        />

        {/* Glossary Section */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm text-white mb-8">
           <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2 text-gold-500">
             <BookOpen size={24} /> Glossário do Estrategista
           </h3>
           <p className="text-brand-100 mb-6 text-sm">
             Antes de avançar para a triagem, é fundamental que a equipe entenda esses conceitos para não tratar todo mundo igual.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-800 p-4 rounded border border-brand-700">
                <div className="flex items-center gap-2 text-red-300 font-bold mb-2 uppercase text-xs tracking-wider">
                  <XCircle size={14} /> Bad Fit
                </div>
                <p className="text-sm font-medium text-white">O Cliente Errado.</p>
                <p className="text-xs text-brand-300 mt-1">Não tem direito, não tem o perfil ou é apenas curioso sem dor. Gasta tempo da equipe e não compra.</p>
              </div>
              <div className="bg-brand-800 p-4 rounded border border-brand-700">
                <div className="flex items-center gap-2 text-blue-300 font-bold mb-2 uppercase text-xs tracking-wider">
                  <AlertCircle size={14} /> MQL (Marketing Qualified)
                </div>
                <p className="text-sm font-medium text-white">O Cliente Morno.</p>
                <p className="text-xs text-brand-300 mt-1">Tem o perfil e o problema, mas ainda não sente urgência ou faltam documentos. Precisa ser nutrido.</p>
              </div>
              <div className="bg-brand-800 p-4 rounded border border-brand-700">
                <div className="flex items-center gap-2 text-green-300 font-bold mb-2 uppercase text-xs tracking-wider">
                  <CheckCircle2 size={14} /> SQL (Sales Qualified)
                </div>
                <p className="text-sm font-medium text-white">O Cliente Pronto.</p>
                <p className="text-xs text-brand-300 mt-1">Tem a dor latente, tem o perfil e quer resolver AGORA. É prioridade total de atendimento.</p>
              </div>
           </div>
        </div>
        
        {/* Step 2: Triage Logic */}
        <ScriptStep 
          stepNumber="02"
          title="Matriz de Triagem (Aplicação Prática)"
          icon={<Filter size={20} />}
          tip="Você precisa classificar o cliente ANTES de oferecer a consulta. Use essas categorias:"
        >
          <div className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* BadFit */}
               <div className="border border-red-100 bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-red-700 font-bold text-sm uppercase">
                    <XCircle size={16} /> Bad Fit
                  </div>
                  <p className="text-xs text-red-900 mb-2 font-medium">Não tem direito ou perfil.</p>
                  <p className="text-xs text-gray-600">Ação: Descarte educado imediato para não perder tempo.</p>
               </div>
               
               {/* MQL */}
               <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm uppercase">
                    <CheckCircle2 size={16} /> MQL (Morno)
                  </div>
                  <p className="text-xs text-blue-900 mb-2 font-medium">Tem o problema, mas está sem pressa/documentos.</p>
                  <p className="text-xs text-gray-600">Ação: Enviar lista de documentos e nutrir.</p>
               </div>

               {/* SQL */}
               <div className="border border-green-100 bg-green-50 p-4 rounded-lg border-2 border-green-200 shadow-sm relative">
                  <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl">PRIORIDADE</span>
                  <div className="flex items-center gap-2 mb-2 text-green-700 font-bold text-sm uppercase">
                    <CheckCircle2 size={16} /> SQL (Quente)
                  </div>
                  <p className="text-xs text-green-900 mb-2 font-medium">Tem a dor latente e quer resolver AGORA.</p>
                  <p className="text-xs text-gray-600">Ação: Ligar imediatamente.</p>
               </div>
             </div>
          </div>
        </ScriptStep>

        {/* Step 3: Call */}
        <ScriptStep 
          stepNumber="03"
          title="A Ligação de 5 Minutos (Conversão)"
          icon={<Phone size={20} />}
          content="Fulano, sua situação é bem específica e tem um detalhe na lei que pode te ajudar muito. Posso te ligar 5 minutinhos para explicar? É mais fácil que digitar."
          tip="Texto não passa emoção. Para fechar contratos, a voz passa autoridade e segurança que o texto não consegue."
          isTipImportant
        >
           <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 space-y-2 border border-gray-200">
              <p className="font-bold text-xs uppercase text-gray-500 mb-2">Roteiro da Ligação:</p>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 1. Ouvir a dor (1 min)</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 2. Validar o direito ("Você tem chance")</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 3. Explicar como funciona (Sem juridiquês)</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 4. Fechamento ("Vamos dar entrada?")</div>
           </div>
        </ScriptStep>

        {/* Step 4: Soft Close */}
        <ScriptStep 
          stepNumber="04"
          title="Fechamento Suave"
          icon={<FileSignature size={20} />}
          content="Como vi que você tem direito, vou adiantar seu cadastro no sistema do escritório para garantir a data. Vou te mandar o link do contrato digital. É só clicar e assinar na tela do celular."
        />

        {/* Step 5: Follow-up System */}
        <div className="mt-12 pt-8 border-t border-brand-700">
          <div className="text-center mb-8">
             <h3 className="text-2xl font-serif font-bold mb-2 text-gold-500">Sistema de Follow-up Inteligente</h3>
             <p className="text-brand-100">Não aceite o "vácuo". Implemente esta cadência obrigatória.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-800 p-5 rounded-lg border border-brand-700 relative hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">24 Horas depois</span>
                <Clock size={16} className="text-brand-300" />
              </div>
              <p className="text-sm text-white italic mb-3">"Oi Fulano, conseguiu ver a mensagem acima? Fiquei preocupada se chegou tudo certo."</p>
              <span className="text-xs text-brand-400 block border-t border-brand-700 pt-2">Objetivo: Lembrar sem ser chato.</span>
            </div>

            <div className="bg-brand-800 p-5 rounded-lg border border-brand-700 relative hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">3 Dias depois</span>
                <Clock size={16} className="text-brand-300" />
              </div>
              <p className="text-sm text-white italic mb-3">"Fulano, estou organizando a agenda da semana. Ainda faz sentido a gente dar entrada no seu pedido?"</p>
              <span className="text-xs text-brand-400 block border-t border-brand-700 pt-2">Objetivo: Gerar escassez leve.</span>
            </div>

            <div className="bg-brand-800 p-5 rounded-lg border border-brand-700 relative hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">7 Dias (Breakup)</span>
                <XCircle size={16} className="text-brand-300" />
              </div>
              <p className="text-sm text-white italic mb-3">"Oi! Como não tivemos retorno, vou encerrar seu pré-cadastro por enquanto. Se precisar no futuro, estamos à disposição."</p>
              <span className="text-xs text-brand-400 block border-t border-brand-700 pt-2">Objetivo: Recuperar pelo medo da perda.</span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};