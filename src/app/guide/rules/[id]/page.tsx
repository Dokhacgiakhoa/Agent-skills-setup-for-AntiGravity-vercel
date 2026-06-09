"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, AlertTriangle, FileCheck } from "lucide-react";
import Link from "next/link";
import { ruleGuides } from "@/data/guide-content";
import { notFound, useParams } from "next/navigation";

import { useLanguage } from "@/contexts/LanguageContext";
import { localize } from "@/lib/i18n";

export default function RuleDetailPage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const id = params.id as string;
  const guide = ruleGuides[id as keyof typeof ruleGuides] as any;

  if (!guide) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    "🤖": ShieldAlert,
    "🔒": Lock,
    "🦠": Shield,
    "📝": MessageSquare,
    "📚": BookOpen,
    "🔧": Terminal,
    "🎨": Code,
    "⚙️": Settings,
    "💼": Briefcase,
    "⚖️": Scale,
    "🏛️": GraduationCap,
    "🔄": FileText
  };

  const colorMap: Record<string, { color: string; bg: string; border: string; glow: string; bullet: string }> = {
    "GEMINI": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "security": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "malware-protection": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "error-logging": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "docs-update": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "debug": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "frontend": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "backend": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "business": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "compliance": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "architecture-review": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
    "system-update": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "border-[#6F00FF]/40", bullet: "bg-[#6F00FF]" },
  };

  const theme = colorMap[id] || { color: "text-white/60", bg: "bg-white/5", border: "border-white/10", glow: "border-white/20", bullet: "bg-white/20" };
  const Icon = iconMap[guide.icon] || FileText;

  const googleColors = [
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
    { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", bullet: "bg-[#6F00FF]" },
  ];

  return (
    <div className="page-container mt-12 pb-24 space-y-12 max-w-5xl mx-auto">
      <Link href="/guide/rules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Rules
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
                  {guide.type || guide.trigger}
               </span>
            </div>
            <p className="text-white/40 text-lg mt-1">{localize(guide, 'description', locale)}</p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Purpose & Regulations */}
        <div className="lg:col-span-2 space-y-12">
          {/* Purpose */}
          <section className="space-y-4">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.rule.purpose')}</h2>
             <div className="card-glass p-8 bg-white/[0.02]">
                <p className="text-white/70 leading-relaxed text-lg italic">
                   "{localize(guide, 'purpose', locale)}"
                </p>
             </div>
          </section>

          {/* Regulations / Rules */}
          <section className="space-y-6">
             <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.rule.regulations')}</h2>
             <div className="space-y-4">
                {(localize(guide, 'rules', locale) || []).map((rule: any, idx: number) => {
                   const itemTheme = googleColors[idx % googleColors.length];
                   return (
                      <div key={idx} className={`p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3 group hover:${itemTheme.border} transition-all`}>
                         <div className={`flex items-center gap-2 ${itemTheme.color} font-black text-sm uppercase`}>
                            <FileCheck className="h-4 w-4 opacity-40" />
                            {rule.title}
                         </div>
                         <p className="text-white/60 text-sm leading-relaxed">{rule.desc}</p>
                      </div>
                   );
                })}
             </div>
          </section>

          {/* Enforcement */}
          {localize(guide, 'enforcement', locale) && (
             <section className="space-y-6">
                <h2 className={`text-2xl font-black ${theme.color} border-l-4 ${theme.glow} pl-4 uppercase tracking-wider`}>{t('guide.rule.enforcement')}</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                    {(localize(guide, 'enforcement', locale) || []).map((item: string, idx: number) => {
                       const itemTheme = googleColors[idx % googleColors.length];
                       return (
                          <div key={idx} className={`flex gap-4 p-4 rounded-xl ${itemTheme.bg} border ${itemTheme.border}`}>
                             <div className={`w-1.5 h-1.5 rounded-full ${itemTheme.bullet} mt-1.5 flex-shrink-0`} />
                             <span className="text-sm text-white/70">{item}</span>
                          </div>
                       );
                    })}
                 </div>
             </section>
          )}
        </div>

        {/* Right Column: Files & Exceptions */}
        <div className="space-y-8">
           {/* Source Files */}
           <section className={`card-glass p-6 ${theme.bg} border ${theme.border} space-y-4`}>
              <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                 <FileText className="h-4 w-4" />
                 {t('guide.rule.files')}
              </div>
               <div className="space-y-2">
                  {(guide.files || []).map((file: string, idx: number) => (
                     <code key={idx} className="block text-[10px] font-mono bg-black/40 border border-white/5 px-3 py-2 rounded text-white/40 truncate">
                        {file}
                     </code>
                  ))}
               </div>
           </section>

           {/* Exceptions */}
           {localize(guide, 'exceptions', locale) && (
              <section className="card-glass p-6 bg-[#6F00FF]/5 border-[#6F00FF]/20 space-y-4">
                 <div className={`flex items-center gap-2 ${theme.color} font-black uppercase text-sm`}>
                    <AlertTriangle className="h-4 w-4" />
                    {t('guide.rule.exceptions')}
                 </div>
                  <ul className="space-y-2">
                     {(guide.exceptions || []).map((ex: string, idx: number) => (
                        <li key={idx} className="text-xs text-white/60 flex gap-2">
                           <span className={`${theme.color}`}>•</span>
                           {ex}
                        </li>
                     ))}
                  </ul>
              </section>
           )}

           {/* Prohibited Actions */}
           {localize(guide, 'prohibited', locale) && (
              <section className={`card-glass p-6 bg-black border-[#6F00FF]/30 space-y-4 shadow-[0_0_20px_rgba(111,0,255,0.05)]`}>
                 <div className="flex items-center gap-2 text-[#6F00FF] font-black uppercase text-sm">
                    <ShieldAlert className="h-4 w-4" />
                    {t('guide.rule.prohibited')}
                 </div>
                  <ul className="space-y-3">
                     {(guide.prohibited || []).map((item: string, idx: number) => (
                        <li key={idx} className="text-[11px] text-[#6F00FF]/70 font-bold uppercase tracking-wide flex gap-2">
                           <span>✖</span>
                           {item}
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
