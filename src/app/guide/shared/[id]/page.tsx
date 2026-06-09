"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, Dna, Layers, ShieldCheck, Globe, Database, Cpu, Lock, Terminal, Layout, FileCode, CheckCircle2, Search, Zap, Rocket, Activity, Shield, Grid, Code, Server, Smartphone, Monitor, Boxes, Layers3, CpuIcon } from "lucide-react";
import Link from "next/link";
import { sharedModuleGuides } from "@/data/guide-content";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function SharedModuleDetailPage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  const guide = sharedModuleGuides[id as keyof typeof sharedModuleGuides] as any;

  if (!guide) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    "🧠": Cpu,
    "📡": Globe,
    "⚖️": ShieldCheck,
    "🗄️": Database,
    "🎨": Layers,
    "🏗️": Layout,
    "🌐": Globe,
    "🚀": Zap,
    "📊": Activity,
    "🛡️": Shield,
    "🧪": FileCode,
    "💎": Zap,
    "📐": Grid,
    "💻": Code,
    "🖥️": Monitor,
    "📱": Smartphone,
    "⚙️": Server
  };

  const colorMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    "ai-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "api-standards": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "compliance-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "database-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "design-philosophy": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "design-system": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "domain-blueprints": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "dx-toolkit": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "i18n-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "infra-blueprints": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "metrics": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "resilience-patterns": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "security-armor": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "seo-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "testing-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "ui-ux-pro-max": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "vitals-templates": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
  };

  const theme = colorMap[id] || { color: "text-white/60", bg: "bg-white/5", border: "border-white/10", glow: "border-white/20", bullet: "bg-white/20" };
  const Icon = iconMap[guide.icon] || Dna;

  const googleColors = [
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/shared" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Shared Modules
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
                  {guide.status}
               </span>
            </div>
            <p className="text-white/40 text-lg mt-1">{localize(guide, 'description', locale)}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Features */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.shared.vision')}</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg">
                   {localize(guide, 'purpose', locale)}
                </p>
             </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.shared.features')}</h2>
             <div className="grid md:grid-cols-2 gap-4">
                {(localize(guide, 'features', locale) || []).map((feature: string, idx: number) => {
                   const itemTheme = googleColors[idx % googleColors.length];
                   return (
                      <div key={idx} className={`p-5 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:${itemTheme.border} transition-all`}>
                         <CheckCircle2 className={`h-5 w-5 ${itemTheme.color} opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                         <span className="text-sm text-white/70">{feature}</span>
                      </div>
                   );
                })}
             </div>
          </section>

          {/* Guidelines */}
           {(localize(guide, 'guidelines', locale) || []).length > 0 && (
              <section className="space-y-6">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.shared.guidelines')}</h2>
                 <div className="space-y-4">
                    {(localize(guide, 'guidelines', locale) || []).map((g: string, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`flex gap-4 p-4 rounded-xl ${itemTheme.bg} border border-white/10 group hover:${itemTheme.border} transition-all`}>
                             <span className={`font-mono ${itemTheme.color} font-black`}>0{idx + 1}.</span>
                             <span className="text-sm text-white/60">{g}</span>
                          </div>
                       );
                    })}
                 </div>
              </section>
           )}

          {/* Rules System */}
           {(localize(guide, 'rules', locale) || []).length > 0 && (
              <section className="space-y-6">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.shared.rules')}</h2>
                 <div className="space-y-4">
                    {(localize(guide, 'rules', locale) || []).map((rule: any, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`card-glass p-6 bg-black/40 border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                             <div className={`${itemTheme.color} font-black text-sm uppercase tracking-wider`}>{rule.name}</div>
                             <p className="text-white/70 text-sm leading-relaxed">{rule.rule || rule.desc}</p>
                             {rule.example && (
                                <div className={`mt-2 p-3 bg-black/60 rounded border border-white/5 font-mono text-[10px] text-white/40 group-hover:${itemTheme.border} transition-colors`}>
                                   <span className={`${itemTheme.color} opacity-60 transition-colors uppercase font-bold mr-2 text-[8px]`}>Example:</span>
                                   {rule.example}
                                </div>
                             )}
                          </div>
                       );
                    })}
                 </div>
              </section>
           )}

           {/* Industries (for Domain Blueprints) */}
           {(localize(guide, 'industries', locale) || []).length > 0 && (
              <section className="space-y-8">
                 <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.shared.industries')}</h2>
                 <div className="grid gap-6">
                    {(localize(guide, 'industries', locale) || []).map((ind: any, idx: number) => (
                       <div key={idx} className={`card-glass p-8 bg-black/20 border-white/10 space-y-6 group hover:${theme.border} transition-all`}>
                          <div className="flex items-center gap-4">
                             <span className="text-4xl">{ind.icon}</span>
                             <h3 className={`text-2xl font-black ${theme.color}`}>{ind.name}</h3>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <h4 className={`text-[10px] font-black ${theme.color} uppercase tracking-widest pl-2 border-l-2 ${theme.glow}`}>Features</h4>
                                <ul className="space-y-1.5">
                                   {ind.features.map((f: string, i: number) => (
                                      <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                                         <div className={`w-1 h-1 rounded-full ${theme.bullet} opacity-40`} />
                                         {f}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                             {ind.technicalNotes && (
                                <div className="space-y-3">
                                   <h4 className={`text-[10px] font-black ${theme.color} uppercase tracking-widest pl-2 border-l-2 ${theme.glow}`}>Technical Notes</h4>
                                   <ul className="space-y-2">
                                      {ind.technicalNotes.map((n: string, i: number) => (
                                         <li key={i} className={`text-[11px] font-mono ${theme.color} opacity-60 leading-relaxed italic`}>
                                            # {n}
                                         </li>
                                      ))}
                                   </ul>
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
           )}
        </div>

        {/* Right Column: Files & Architecture */}
        <div className="space-y-8">
           {/* Architecture Block */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-6`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <Layers3 className="h-4 w-4" />
                 {t('guide.shared.architecture')}
              </div>
              <div className="space-y-4">
                 <div className="flex flex-col gap-1 items-center p-4 bg-black/40 rounded border border-white/5">
                    <span className="text-[10px] text-white/20 font-bold">DNA Origin</span>
                    <Dna className={`h-6 w-6 ${theme.color} opacity-40`} />
                    <span className="text-[11px] text-white/60 font-mono">.agent/.shared</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/20 font-bold uppercase ml-1">Location</span>
                    <code className={`text-[10px] bg-black/40 p-2 rounded truncate block ${theme.color} opacity-80`}>
                       {guide.location}
                    </code>
                 </div>
              </div>
           </section>

           {/* Core Protocols */}
           {(localize(guide, 'protocols', locale) || []).length > 0 && (
              <section className="space-y-6">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Core Protocols</h2>
                 <div className="space-y-2">
                    {(localize(guide, 'protocols', locale) || []).map((p: string, idx: number) => (
                       <div key={idx} className={`flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-lg group hover:${theme.border} transition-all`}>
                          <CpuIcon className={`h-3.5 w-3.5 ${theme.color} opacity-60`} />
                          <span className="text-[11px] text-white/60">{p}</span>
                       </div>
                    ))}
                 </div>
              </section>
           )}

           {/* Standard List */}
           {(localize(guide, 'standards', locale) || []).length > 0 && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>{t('guide.shared.standards')}</h2>
                 <ul className="space-y-2">
                    {(localize(guide, 'standards', locale) || []).map((std: string, idx: number) => (
                       <li key={idx} className="text-[11px] text-white/40 flex gap-2">
                          <CheckCircle2 className={`h-3 w-3 ${theme.color} flex-shrink-0`} />
                          {std}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Capabilities List */}
           {(localize(guide, 'capabilities', locale) || []).length > 0 && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Capabilities</h2>
                 <ul className="space-y-2">
                    {localize(guide, 'capabilities', locale).map((cap: string, idx: number) => (
                       <li key={idx} className="text-[11px] text-white/60 flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-all">
                          <Zap className={`h-3 w-3 ${theme.color}`} />
                          {cap}
                       </li>
                    ))}
                 </ul>
              </section>
           )}

           {/* Usage List */}
           {(localize(guide, 'usage', locale) || []).length > 0 && (
              <section className="space-y-4">
                 <h2 className={`text-xs font-black ${theme.color} uppercase tracking-[0.2em] px-2 opacity-60`}>Cách thức vận hành</h2>
                 <div className="space-y-2">
                    {localize(guide, 'usage', locale).map((u: string, idx: number) => (
                       <div key={idx} className={`p-3 bg-black/40 border border-white/5 rounded-lg flex gap-3 items-start group hover:${theme.border} transition-all`}>
                          <Rocket className={`h-3.5 w-3.5 ${theme.color} opacity-60 mt-0.5`} />
                          <span className="text-[11px] text-white/60 leading-relaxed">{u}</span>
                       </div>
                    ))}
                 </div>
              </section>
           )}
        </div>
      </div>
    </div>
  );
}
