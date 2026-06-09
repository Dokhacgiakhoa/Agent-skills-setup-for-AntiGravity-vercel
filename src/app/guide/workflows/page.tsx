"use client";

import { motion } from "framer-motion";
import { Workflow, Command, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { workflowsList, pdcaCycle } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";

export default function WorkflowsPage() {
  const { t, locale } = useLanguage();
  const categoryColorMap: Record<string, { color: string; bg: string; border: string; glow: string }> = {
    planning: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    management: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    development: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    design: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    system: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    quality: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    devops: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    maintenance: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    advanced: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
    documentation: { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
  };

  const pdcaStyles: Record<string, { color: string; border: string }> = {
    red: { color: "text-[#6F00FF]", border: "border-[#6F00FF]/40" },
    yellow: { color: "text-[#6F00FF]", border: "border-[#6F00FF]/40" },
    green: { color: "text-[#6F00FF]", border: "border-[#6F00FF]/40" },
    cyan: { color: "text-[#6F00FF]", border: "border-[#6F00FF]/40" },
    blue: { color: "text-[#6F00FF]", border: "border-[#6F00FF]/40" },
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader
        badgeIcon={Workflow}
        badgeLabel={t('guide.workflows.badge')}
        title={t('guide.workflows.title')}
        description={t('guide.workflows.subtitle').replace('{count}', workflowsList.length.toString())}
        color="blue"
      />

      {/* PDCA Cycle */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {pdcaCycle.map((item, idx) => {
           const style = pdcaStyles[item.color] || pdcaStyles.blue;
           return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-black/40 border-2 ${style.border} text-center space-y-2`}
            >
              <h3 className={`text-3xl font-black ${style.color}`}>{item.phase}</h3>
              <p className="text-white/60 text-xs font-bold uppercase">{locale === 'en' ? item.nameEn || item.name : item.name}</p>
              <p className="text-white/30 text-[10px] leading-tight">{locale === 'en' ? item.descriptionEn || item.description : item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Slash Commands */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {workflowsList.map((wf, idx) => {
          const googleColors = [
            { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
            { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
            { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
            { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20", glow: "group-hover:border-[#6F00FF]/40" },
          ];
          const theme = googleColors[idx % googleColors.length];
          
          return (
            <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + Math.min(idx * 0.05, 1) }}
                className={`group card-glass p-8 hover:bg-white/[0.05] transition-all cursor-pointer border ${theme.border} ${theme.glow} h-full rounded-3xl`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className={`p-2 rounded-xl ${theme.bg} border ${theme.border}`}>
                      <Command className={`h-4 w-4 ${theme.color}`} />
                    </div>
                    <code className="font-black text-base tracking-tight">{wf.command}</code>
                  </div>
                  <span className={`text-[10px] ${theme.bg} border ${theme.border} px-3 py-1 rounded-full ${theme.color} font-black uppercase tracking-widest transition-colors shadow-sm`}>
                    {wf.category}
                  </span>
                </div>
                  <h4 className="text-xl font-black text-white italic uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                    {locale === 'en' ? wf.nameEn || wf.name : wf.name}
                  </h4>
                  <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                    {locale === 'en' ? wf.descEn || wf.desc : wf.desc}
                  </p>
                <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${theme.color} opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-right mt-auto pt-4 border-t border-white/5`}>
                  <PlayCircle className="h-4 w-4" />
                  Execution Roadmap
                  <ArrowRight className="h-3 w-3 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
