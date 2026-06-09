"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap, Search, ArrowUpRight, Globe, Server, ShieldCheck, Cloud, Brain, Cpu, Activity, Rocket, Terminal } from "lucide-react";
import Link from "next/link";
import { skillCategories, systemStats } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";
import { SearchBar, CategoryTabs } from "@/components/ui/premium";

// Category config with colors
const categoryConfig: Record<string, { color: string; icon: any }> = {
  web: { color: "#4285F4", icon: Globe },
  backend: { color: "#34A853", icon: Server },
  security: { color: "#EA4335", icon: ShieldCheck },
  devops: { color: "#9AA0A6", icon: Cloud },
  ai: { color: "#8B5CF6", icon: Brain },
  architecture: { color: "#FBBC04", icon: Cpu },
  quality: { color: "#EA4335", icon: Activity },
  growth: { color: "#34A853", icon: Rocket },
  shells: { color: "#9AA0A6", icon: Terminal },
  mcp: { color: "#4285F4", icon: Zap }
};

export default function SkillsPage() {
  const { t, locale } = useLanguage();
  const isEnglish = locale === 'en';
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Build category tabs with icons and colors
  const categoryTabs = useMemo(() => {
    const tabs: Array<{ id: string; label: string; count: number; icon?: React.ReactNode; color?: string }> = [
      { id: "all", label: "Tất cả", count: systemStats.skills, color: "#FBBC04" }
    ];
    skillCategories.forEach(cat => {
      const config = categoryConfig[cat.id] || { color: "#4285F4", icon: Zap };
      const Icon = config.icon;
      tabs.push({
        id: cat.id,
        label: isEnglish ? (cat.nameEn || cat.name) : cat.name,
        count: cat.skills.length,
        icon: <Icon className="w-4 h-4" />,
        color: config.color
      });
    });
    return tabs;
  }, [isEnglish]);

  // Filter skills
  const filteredCategories = useMemo(() => {
    let categories = skillCategories;

    // Filter by category
    if (activeCategory !== "all") {
      categories = categories.filter(cat => cat.id === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      categories = categories.map(cat => ({
        ...cat,
        skills: cat.skills.filter((skill: any) =>
          skill.name.toLowerCase().includes(query) ||
          skill.desc?.toLowerCase().includes(query) ||
          skill.descEn?.toLowerCase().includes(query)
        )
      })).filter(cat => cat.skills.length > 0);
    }

    return categories;
  }, [searchQuery, activeCategory]);

  // Count total filtered skills
  const totalFilteredSkills = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader 
        badgeIcon={Zap}
        badgeLabel={t('guide.skills.masterLabel')}
        title={t('guide.skills.title')}
        description={t('guide.skills.subtitle').replace('{count}', systemStats.skills.toString())}
        color="yellow"
      />

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 max-w-4xl mx-auto"
      >
        <SearchBar 
          placeholder="Tìm kiếm skill..." 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <div className="overflow-x-auto pb-2">
          <CategoryTabs 
            tabs={categoryTabs}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
        </div>
        <div className="text-sm text-white/40">
          Hiển thị {totalFilteredSkills} / {systemStats.skills} skills
        </div>
      </motion.div>

      {/* Skills Grid - Bento Style */}
      <div className="max-w-7xl mx-auto">
        {filteredCategories.map((cat, catIdx) => {
          const config = categoryConfig[cat.id] || { color: "#4285F4", icon: Zap };
          const Icon = config.icon;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.05 }}
              className="mb-12"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ 
                    backgroundColor: `${config.color}20`,
                    border: `1px solid ${config.color}40`
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: config.color }} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {isEnglish ? (cat.nameEn || cat.name) : cat.name}
                  </h2>
                  <p className="text-sm text-white/40">{cat.skills.length} skills</p>
                </div>
              </div>

              {/* Skills Bento Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill: any, skillIdx: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.02 }}
                  >
                    <Link href={`/guide/skills/${skill.name}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="card-glass h-full group cursor-pointer relative overflow-hidden"
                        style={{ borderColor: `${config.color}20` }}
                      >
                        {/* Hover Glow */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${config.color}15 0%, transparent 70%)`
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <code 
                              className="text-sm font-bold group-hover:text-white transition-colors"
                              style={{ color: config.color }}
                            >
                              {skill.name}
                            </code>
                            <motion.div
                              initial={{ opacity: 0, rotate: -45 }}
                              whileHover={{ opacity: 1, rotate: 0 }}
                              className="text-white/40 group-hover:text-white transition-colors"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </motion.div>
                          </div>

                          <p className="text-sm text-white/50 line-clamp-2 mb-3">
                            {isEnglish ? (skill.descEn || skill.desc) : skill.desc}
                          </p>

                          {/* Features Tags */}
                          {skill.features && skill.features.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {skill.features.slice(0, 3).map((feature: string, fIdx: number) => (
                                <span 
                                  key={fIdx}
                                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10"
                                >
                                  {feature}
                                </span>
                              ))}
                              {skill.features.length > 3 && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                                  +{skill.features.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-white/50 text-lg">
            Không tìm thấy skill phù hợp với &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
            className="mt-4 text-[#4285F4] hover:underline"
          >
            Xóa bộ lọc
          </button>
        </motion.div>
      )}

      {/* Footer Info */}
      <div className="max-w-4xl mx-auto text-center py-12 relative">
        <div className="absolute inset-0 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <p className="text-white/60 text-lg font-light leading-relaxed">
            {isEnglish 
              ? <>Skills are structured as independent directories in <code className="text-yellow-400 border-b border-yellow-400/20 pb-0.5">.agent/skills/</code>.</>
              : <>Hệ thống kỹ năng được cấu trúc dưới dạng các thư mục độc lập trong <code className="text-yellow-400 border-b border-yellow-400/20 pb-0.5">.agent/skills/</code>.</>
            }
          </p>
          <p className="text-white/30 text-xs italic uppercase tracking-[0.2em]">
            {isEnglish 
              ? "Agent automatically reads `SKILL.md` when executing related tasks."
              : "Agent sẽ tự động đọc tệp `SKILL.md` khi bắt đầu thực thi nhiệm vụ liên quan."
            }
          </p>
        </div>
      </div>
    </div>
  );
}
