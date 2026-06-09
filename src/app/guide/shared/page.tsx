"use client";

import { motion } from "framer-motion";
import { Share2, Dna, Layers, ShieldCheck, Globe, Database, Cpu, Lock, Terminal, Layout, FileCode, CheckCircle2, Search, Zap, Rocket, Activity, Shield, Grid, Code, Server, Smartphone, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";
import { sharedModules } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";

export default function SharedPage() {
  const { t, locale } = useLanguage();
  const isEnglish = locale === 'en';
  const iconMap: Record<string, any> = {
    "🧠": Cpu,
    "📡": Globe,
    "⚖️": ShieldCheck,
    "🗄️": Database,
    "🎨": Layers,
    "🏗️": Layout,
    "🌐": Globe,
    "🚀": Rocket,
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

  const colorMap: Record<string, { color: string; bg: string; border: string }> = {
    "ai-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "api-standards": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "compliance-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "database-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "design-philosophy": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "design-system": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "domain-blueprints": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "dx-toolkit": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "i18n-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "infra-blueprints": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "metrics": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "resilience-patterns": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "security-armor": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "seo-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "testing-master": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "ui-ux-pro-max": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
    "vitals-templates": { color: "text-[#6F00FF]", bg: "bg-[#6F00FF]/10", border: "border-[#6F00FF]/20" },
  };

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader
        badgeIcon={Share2}
        badgeLabel="The DNA System"
        title="Modules .shared"
        description={isEnglish 
            ? `${sharedModules.length} shared DNA modules for the entire Antigravity system, propagating knowledge across projects.`
            : `${sharedModules.length} bộ mã gen (DNA) dùng chung cho toàn bộ hệ thống Antigravity, lan truyền tri thức giữa các dự án.`
          }
        color="blue"
      />

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="card-glass p-10 bg-gradient-to-br from-white/[0.03] to-transparent border-[#6F00FF]/20 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#6F00FF]/5 blur-[80px] rounded-full" />
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
             <div className="w-40 h-40 rounded-full border-4 border-[#6F00FF]/10 flex items-center justify-center animate-pulse relative shadow-[0_0_30px_rgba(111,0,255,0.1)]">
                <div className="absolute inset-0 rounded-full border border-[#6F00FF]/40 animate-spin-slow" />
                <Dna className="h-16 w-16 text-[#6F00FF]" />
             </div>
             <div className="flex-1 space-y-6 text-center md:text-left">
                <h3 className="text-3xl font-black text-white italic tracking-tight uppercase">Scientific Linkage</h3>
                <p className="text-white/50 text-base leading-relaxed font-medium">
                  {isEnglish
                    ? "Scientific linkage mechanism allows files and modules to automatically detect and interact with each other without complex manual configuration."
                    : "Cơ chế liên kết khoa học giúp các files và modules tự động nhận diện và tương tác với nhau mà không cần cấu hình thủ công phức tạp."
                  }
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                   <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-white/60 font-black tracking-widest border border-white/5 uppercase">.agent/.shared</span>
                   <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-white/60 font-black tracking-widest border border-white/5 uppercase">metadata header</span>
                   <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-white/60 font-black tracking-widest border border-white/5 uppercase">auto-discovery</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharedModules.map((mod, idx) => {
            const Icon = iconMap[mod.icon] || Dna;
            const googleColors = [
              { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
              { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
              { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
              { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
            ];
            const theme = googleColors[idx % googleColors.length];
            
            return (
              <Link key={mod.id} href={`/guide/shared/${mod.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`group card-glass p-8 flex flex-col gap-6 relative overflow-hidden border ${theme.border} h-full hover:bg-white/[0.05] transition-all rounded-3xl shadow-lg`}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 ${theme.bg} blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${theme.bg} border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-7 w-7 ${theme.color}`} />
                    </div>
                    <span className={`text-[10px] font-black italic uppercase tracking-widest ${theme.color} opacity-40`}>
                      DNA Module
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-black text-white group-hover:${theme.color} transition-colors text-lg mb-1`}>{mod.name}</h4>
                    <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                        {isEnglish ? (mod.descriptionEn || mod.description) : mod.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5 mt-auto">
                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {mod.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="text-[10px] text-white/50 flex items-center gap-1.5">
                          <div className={`w-1 i-1 rounded-full ${theme.color} opacity-40`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className={`text-[10px] ${theme.color} opacity-40 uppercase font-black tracking-widest`}>Detail Architecture</span>
                     <ArrowRight className={`h-4 w-4 ${theme.color}`} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

