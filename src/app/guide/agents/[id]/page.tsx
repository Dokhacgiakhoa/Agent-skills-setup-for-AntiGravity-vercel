"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Bot, BrainCircuit, CheckCircle2, Shield, Settings, Zap, Database, Cloud, Tablet, Gamepad, User, Laptop } from "lucide-react";
import Link from "next/link";
import { agentGuides } from "@/data/guide-content";
import { orchestratorAgentData } from "@/data/agents/orchestrator";
import { qualityInspectorAgentData } from "@/data/agents/quality-inspector";
import { agentGuidesEn } from "@/data/agents/en-dict";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function AgentDetailPage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  let guide = agentGuides[id as keyof typeof agentGuides] as any;
  const isEnglish = locale === 'en';

  // Static overrides for complex agents
  if (id === 'orchestrator') {
    guide = { ...guide, ...orchestratorAgentData };
  } else if (id === 'quality-inspector') {
    guide = { ...guide, ...qualityInspectorAgentData };
  }

  if (!guide) {
    notFound();
  }

  // ... (keep maps) ...

  const iconMap: Record<string, any> = {
    "🎯": BrainCircuit,
    "🎨": Laptop,
    "⚙️": Settings,
    "🛡️": Shield,
    "🗄️": Database,
    "🧪": Zap,
    "🚀": Bot,
    "🔧": Settings
  };

  const agentThemeMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    // Tất cả các agent đều được đồng bộ về tông màu xanh tím neon #6F00FF duy nhất
    "orchestrator": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "quality-inspector": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "project-planner": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "product-manager": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "product-owner": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "documentation-writer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "seo-specialist": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "explorer-agent": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    
    "frontend-specialist": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "backend-specialist": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "database-architect": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "cloud-architect": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "mobile-developer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "game-developer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "codebase-expert": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "code-archaeologist": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    
    "security-auditor": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "penetration-tester": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "test-engineer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "qa-automation-engineer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    
    "devops-engineer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "performance-optimizer": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "debugger": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
  };

  const theme = agentThemeMap[id] || { color: "text-white/60", bg: "bg-white/5", border: "border-white/10", glow: "border-white/20", bullet: "bg-white/20" };
  const Icon = iconMap[guide.icon] || Bot;

  const googleColors = [
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/agents" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Agents
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center text-4xl`}>
            <Icon className={`h-10 w-10 ${theme.color}`} />
          </div>
          <div>
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black text-white">{guide.name}</h1>
                <span className={`${theme.bg} ${theme.color} px-3 py-1 rounded-full text-xs font-black border ${theme.border} uppercase tracking-widest`}>
                   {localize(guide, 'title', locale)}
                </span>
            </div>
             <p className="text-white/40 text-lg mt-1">{localize(guide, 'description', locale)}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Role & Mindset */}
        <div className="lg:col-span-2 space-y-12">
          {/* Role */}
          <section className="space-y-4">
              <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.agent.role')}</h2>
              <div className="card-glass p-8 bg-white/[0.02]">
                 <p className="text-white/70 leading-relaxed text-lg">
                    {localize(guide, 'role', locale)}
                 </p>
              </div>
          </section>

          {/* Philosophy / Mindset */}
          {(localize(guide, 'philosophy', locale) || localize(guide, 'mindset', locale)) && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.agent.mindset')}</h2>
                {localize(guide, 'philosophy', locale) && (
                   <p className="text-white/40 italic text-lg pl-8 border-l border-white/10 mb-8">
                      "{localize(guide, 'philosophy', locale)}"
                   </p>
                )}
                {localize(guide, 'mindset', locale) && (
                   <div className="grid md:grid-cols-2 gap-4">
                      {localize(guide, 'mindset', locale).map((m: string, idx: number) => {
                         const itemTheme = googleColors[idx % googleColors.length];
                         return (
                            <div key={idx} className={`flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:${itemTheme.border} transition-all`}>
                               <CheckCircle2 className={`h-5 w-5 ${itemTheme.color} flex-shrink-0`} />
                               <span className="text-sm text-white/70">{m}</span>
                            </div>
                         );
                      })}
                   </div>
                )}
             </section>
          )}

          {/* Workflow Phases */}
          {localize(guide, 'workflowPhases', locale) && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.agent.workflow')}</h2>
                <div className="space-y-4">
                   {(localize(guide, 'workflowPhases', locale) || []).map((phase: any, idx: number) => {
                      const itemTheme = googleColors[idx % googleColors.length];
                      return (
                         <div key={idx} className="flex gap-6 relative">
                            <div className="flex flex-col items-center gap-2">
                               <div className={`w-10 h-10 rounded-full ${itemTheme.bg} border ${itemTheme.border} flex items-center justify-center font-black ${itemTheme.color} text-sm`}>
                                  {idx}
                               </div>
                               {idx < (localize(guide, 'workflowPhases', locale) || []).length - 1 && <div className="w-0.5 h-full bg-white/5" />}
                            </div>
                            <div className="pb-8 flex-1">
                               <h3 className={`font-black text-lg ${itemTheme.color}`}>{phase.name}</h3>
                               <p className="text-white/40 text-sm">{phase.desc}</p>
                            </div>
                         </div>
                      );
                   })}
                </div>
             </section>
          )}
        </div>

        {/* Right Column: Skills & Expertises */}
        <div className="space-y-8">
           {/* Skills */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <Zap className="h-4 w-4" />
                 {t('guide.agent.skills')}
              </div>
              <div className="flex flex-wrap gap-2">
                 {(guide.skills || []).map((skill: string, idx: number) => (
                    <span key={idx} className="text-[10px] font-mono bg-black/40 border border-white/5 px-2 py-1 rounded text-white/40">
                       {skill}
                    </span>
                 ))}
              </div>
           </section>

           {/* Expertise Areas */}
           {guide.expertiseAreas && (
              <section className="space-y-6">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>{t('guide.agent.expertiseAreas')}</h2>
                 <div className="space-y-4">
                    {guide.expertiseAreas.map((exp: any, idx: number) => (
                       <div key={idx} className="card-glass p-5 bg-black/60 border border-white/5 space-y-3">
                          <h4 className="text-white font-bold text-sm flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full ${theme.bullet}`} />
                             {exp.area}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                             {exp.skills.map((s: string, i: number) => (
                                <span key={i} className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded text-white/30">
                                   {s}
                                </span>
                             ))}
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
           )}

            {/* Expertise (Simple list) */}
            {localize(guide, 'expertise', locale) && (
               <section className="space-y-6">
                  <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] px-2">{t('guide.agent.expertise')}</h2>
                  <ul className="space-y-2">
                     {localize(guide, 'expertise', locale).map((exp: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex gap-2">
                          <CheckCircle2 className={`h-3.5 w-3.5 ${theme.color} flex-shrink-0`} />
                          {exp}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

            {/* Standards (Simple list) */}
            {localize(guide, 'standards', locale) && (
               <section className="card-glass p-6 bg-[#6F00FF]/5 border-[#6F00FF]/20 space-y-4">
                  <div className="flex items-center gap-2 text-[#6F00FF] font-black uppercase text-sm">
                     <Shield className="h-4 w-4" />
                     {t('guide.agent.standards')}
                  </div>
                  <ul className="space-y-2">
                     {localize(guide, 'standards', locale).map((std: string, idx: number) => (
                       <li key={idx} className="text-xs text-white/60 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#6F00FF]" />
                          {std}
                       </li>
                    ))}
                 </ul>
              </section>
           )}
        </div>
      </div>
    </div>
  );
}
