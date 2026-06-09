"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, CheckCircle2, PlayCircle, StepForward, AlertTriangle, ListChecks } from "lucide-react";
import Link from "next/link";
import { workflowGuidesRevised as workflowGuides } from "@/data/guide-content";
import { planWorkflowData } from "@/data/workflows/plan";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function WorkflowDetailPage() {
  // Trigger re-render for data update
  const { t, locale } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  let guide = workflowGuides[id as keyof typeof workflowGuides] as any;

  // Override for plan to ensure fresh data
  if (id === 'plan') {
     guide = { ...guide, ...planWorkflowData };
  }



  if (!guide) {
    notFound();
  }

  const themeMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    planning: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    management: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    development: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    design: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    system: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    quality: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    devops: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    maintenance: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    advanced: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    documentation: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
  };

  const currentWf = (guide as any).category ? guide : { category: 'advanced' }; // fallback
  const theme = themeMap[(currentWf as any).category] || themeMap.advanced;

  const googleColors = [
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/workflows" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Workflows
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center text-4xl`}>
            {guide.icon}
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{localize(guide, 'title', locale)}</h1>
               <code className={`${theme.bg} ${theme.color} px-3 py-1 rounded-full text-sm font-black border ${theme.border}`}>
                  {guide.command}
               </code>
            </div>
            <p className="text-white/40 text-lg mt-1">{localize(guide, 'description', locale)}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Rules */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.workflow.purpose')}</h2>
             <div className="card-glass p-6 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg italic">
                   "{localize(guide, 'purpose', locale)}"
                </p>
             </div>
          </section>

          {/* Steps */}
          {/* Steps */}
          {localize(guide, 'steps', locale) && (
            <section className="space-y-6">
               <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.workflow.steps')}</h2>
               <div className="space-y-4">
                  {(localize(guide, 'steps', locale) || []).map((step: any, idx: number) => {
                     const itemTheme = googleColors[idx % googleColors.length];
                     return (
                        <motion.div 
                          key={step.step}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex gap-6 items-start group"
                        >
                           <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:${itemTheme.bg} group-hover:${itemTheme.border} transition-all font-black text-white/40 group-hover:${itemTheme.color}`}>
                              {step.step}
                           </div>
                           <div className="pt-1 space-y-1 border-b border-white/5 pb-4 md:flex-1">
                              <h3 className={`text-lg font-black ${itemTheme.color}`}>{step.title}</h3>
                              <p className="text-white/40 text-sm">{step.desc}</p>
                           </div>
                        </motion.div>
                     );
                  })}
               </div>
            </section>
          )}

          {/* Extra Content (Phases for Debug/Orchestrate) */}
          {guide.phases && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.workflow.phases')}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                   {(localize(guide, 'phases', locale) || []).map((phase: any, idx: number) => {
                      const itemTheme = googleColors[idx % googleColors.length];
                      return (
                         <div key={idx} className={`card-glass p-6 bg-black/40 border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                            <div className={`flex items-center gap-2 ${itemTheme.color} font-black text-sm uppercase`}>
                               <span className="opacity-40">{t('guide.workflow.phase')} {idx + 1}:</span>
                               {phase.title || phase.name}
                            </div>
                            <p className="text-white/60 text-xs">{phase.desc}</p>
                            <ul className="space-y-1.5 pt-2 border-t border-white/5">
                               {(phase.items || phase.agents || []).map((item: any, i: number) => (
                                  <li key={i} className="text-[11px] text-white/40 flex items-center gap-2">
                                     <div className={`w-1 h-1 rounded-full ${itemTheme.color} opacity-40`} />
                                     {typeof item === 'string' ? item : item.name || item}
                                  </li>
                               ))}
                            </ul>
                         </div>
                      );
                   })}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Rules & Output */}
        <div className="space-y-12">
          {/* Rules */}
          <section className="space-y-4">
              <h2 className={`text-lg font-black text-[#6F00FF] flex items-center gap-2 uppercase tracking-wide`}>
                <AlertTriangle className="h-5 w-5" />
                {t('guide.workflow.rules')}
              </h2>
              <div className="card-glass p-6 bg-[#6F00FF]/5 border-[#6F00FF]/20">
                <ul className="space-y-4">
                  {(localize(guide, 'criticalRules', locale) || []).map((rule: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-sm text-white/70">
                      <span className="text-[#6F00FF]">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
          </section>
 
           {/* Examples */}
           {guide.examples && guide.examples.length > 0 && (
             <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
                 <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                    <Terminal className="h-4 w-4" />
                    {t('guide.workflow.examples')}
                 </div>
                 <div className="space-y-3">
                    {guide.examples.map((ex: any, idx: number) => (
                       <div key={idx} className="space-y-1.5 p-3 bg-black/40 rounded border border-white/5 font-mono text-[11px] leading-tight">
                          <div className={`${theme.color} opacity-80`}>$ {typeof ex === 'string' ? ex : ex.command}</div>
                          {typeof ex !== 'string' && ex.output && <div className="text-white/20"># Output: {ex.output}</div>}
                       </div>
                    ))}
                 </div>
             </section>
           )}
 
           {/* Output */}
           {localize(guide, 'output', locale) && (
            <section className="space-y-4">
               <h2 className={`text-lg font-black text-[#6F00FF] flex items-center gap-2 uppercase tracking-wide`}>
                 <StepForward className="h-5 w-5" />
                 {t('guide.workflow.output')}
               </h2>
               <div className="card-glass p-6 bg-[#6F00FF]/5 border-[#6F00FF]/20 space-y-4">
                 <div>
                   <div className="text-xs font-bold text-[#6F00FF] uppercase tracking-wider mb-2">{t('guide.workflow.location')}</div>
                   <code className="block bg-black/40 p-3 rounded text-sm font-mono text-white/80 border border-white/5">
                     {localize(guide, 'output', locale)?.location}
                   </code>
                 </div>
                 <div>
                   <div className="text-xs font-bold text-[#6F00FF] uppercase tracking-wider mb-2">{t('guide.workflow.content')}</div>
                   <ul className="space-y-2">
                     {(localize(guide, 'output', locale)?.content || []).map((item: string, idx: number) => (
                       <li key={idx} className="flex gap-2 text-sm text-white/60">
                         <CheckCircle2 className="h-4 w-4 text-[#6F00FF] flex-shrink-0" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </section>
           )}
        </div>
      </div>
    </div>
  );
}
