"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, FileText, CheckCircle2, Lock, Shield, MessageSquare, BookOpen, Terminal, Code, Settings, Briefcase, Scale, GraduationCap, ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import { rulesList } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";

export default function RulesPage() {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "always-on" | "on-demand">("all");

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

  // Google colors for rules
  const getTheme = (idx: number, type: string) => {
    if (type === "always-on") {
      return { color: "#EA4335", gradient: "from-[#EA4335]/20 to-transparent" };
    }
    const colors = ["#4285F4", "#FBBC04", "#34A853", "#EA4335"];
    return { color: colors[idx % colors.length], gradient: `from-[${colors[idx % colors.length]}]/20 to-transparent` };
  };

  // Filter rules
  const filteredRules = useMemo(() => {
    let rules = rulesList;

    if (activeFilter !== "all") {
      rules = rules.filter(rule => rule.type === activeFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      rules = rules.filter(rule =>
        rule.name.toLowerCase().includes(query) ||
        rule.id.toLowerCase().includes(query) ||
        rule.description.toLowerCase().includes(query)
      );
    }

    return rules;
  }, [searchQuery, activeFilter]);

  // Group by type
  const alwaysOnRules = filteredRules.filter(r => r.type === "always-on");
  const onDemandRules = filteredRules.filter(r => r.type === "on-demand");

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader
        badgeIcon={ShieldAlert}
        badgeLabel="Rules & Constraints"
        title={t('guide.rules.title')}
        description={t('guide.rules.subtitle').replace('{count}', rulesList.length.toString())}
        color="rose"
      />

      {/* Search & Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-4"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm rules..."
            className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#EA4335]/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2">
          {[
            { id: "all", label: "Tất cả", count: rulesList.length },
            { id: "always-on", label: "Luôn Bật", count: rulesList.filter(r => r.type === "always-on").length },
            { id: "on-demand", label: "Theo Yêu Cầu", count: rulesList.filter(r => r.type === "on-demand").length }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`
                px-4 py-2 rounded-xl text-sm font-bold transition-all
                ${activeFilter === filter.id
                  ? "bg-[#EA4335] text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-60">({filter.count})</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Always-On Rules Section */}
      {(activeFilter === "all" || activeFilter === "always-on") && alwaysOnRules.length > 0 && (
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#EA4335] animate-pulse" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">
              {locale === 'en' ? 'Always Active' : 'Luôn Kích Hoạt'}
            </h2>
            <span className="text-xs text-white/40">({alwaysOnRules.length} rules)</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alwaysOnRules.map((rule, idx) => {
              const Icon = iconMap[rule.icon] || FileText;
              const theme = getTheme(idx, rule.type);

              return (
                <Link key={rule.id} href={`/guide/rules/${rule.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group h-full"
                  >
                    <div 
                      className="card-glass h-full relative overflow-hidden"
                      style={{ borderColor: `${theme.color}30` }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${theme.color}20 0%, transparent 70%)`
                        }}
                      />

                      {/* Status Indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EA4335] animate-pulse" />
                        <span 
                          className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${theme.color}20`,
                            color: theme.color,
                            border: `1px solid ${theme.color}40`
                          }}
                        >
                          Active
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                          style={{ 
                            backgroundColor: `${theme.color}15`,
                            border: `2px solid ${theme.color}40`
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: theme.color }} />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#EA4335] transition-colors">
                          {rule.name}
                        </h3>

                        {/* ID Badge */}
                        <code className="text-[10px] text-white/30 bg-black/30 px-2 py-0.5 rounded mb-3 inline-block">
                          {rule.id}
                        </code>

                        {/* Description */}
                        <p className="text-sm text-white/50 line-clamp-2 mb-4">
                          {locale === 'en' ? rule.descriptionEn || rule.description : rule.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">
                            View Details
                          </span>
                          <ArrowRight 
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                            style={{ color: theme.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* On-Demand Rules Section */}
      {(activeFilter === "all" || activeFilter === "on-demand") && onDemandRules.length > 0 && (
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FBBC04]" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">
              {locale === 'en' ? 'On-Demand' : 'Theo Yêu Cầu'}
            </h2>
            <span className="text-xs text-white/40">({onDemandRules.length} rules)</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onDemandRules.map((rule, idx) => {
              const Icon = iconMap[rule.icon] || FileText;
              const colors = ["#4285F4", "#FBBC04", "#34A853"];
              const color = colors[idx % colors.length];

              return (
                <Link key={rule.id} href={`/guide/rules/${rule.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group h-full"
                  >
                    <div 
                      className="card-glass h-full relative overflow-hidden"
                      style={{ borderColor: `${color}30` }}
                    >
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${color}15 0%, transparent 70%)`
                        }}
                      />

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span 
                          className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${color}20`,
                            color: color,
                            border: `1px solid ${color}40`
                          }}
                        >
                          On-Demand
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                          style={{ 
                            backgroundColor: `${color}15`,
                            border: `2px solid ${color}40`
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color }} />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4285F4] transition-colors">
                          {rule.name}
                        </h3>

                        {/* ID Badge */}
                        <code className="text-[10px] text-white/30 bg-black/30 px-2 py-0.5 rounded mb-3 inline-block">
                          {rule.id}
                        </code>

                        {/* Description */}
                        <p className="text-sm text-white/50 line-clamp-2 mb-4">
                          {locale === 'en' ? rule.descriptionEn || rule.description : rule.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">
                            View Details
                          </span>
                          <ArrowRight 
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                            style={{ color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredRules.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-white/50 text-lg">
            Không tìm thấy rule phù hợp với &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
            className="mt-4 text-[#EA4335] hover:underline"
          >
            Xóa bộ lọc
          </button>
        </motion.div>
      )}

      {/* Safety Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="card-glass p-8 bg-gradient-to-br from-[#EA4335]/10 to-transparent border-[#EA4335]/20">
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <CheckCircle2 className="text-[#EA4335] w-6 h-6" />
            {t('guide.rules.safetyTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-2xl font-black text-[#EA4335]">0{i + 1}</span>
                <p className="text-white/60 text-sm leading-relaxed">{t(`guide.rules.safety.${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
