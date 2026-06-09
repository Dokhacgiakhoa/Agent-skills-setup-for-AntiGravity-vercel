"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Bot, User, BrainCircuit, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { agentsList } from "@/data/documentation";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";
import { SearchBar, CategoryTabs } from "@/components/ui/premium";

// PDCA category config
const pdcaConfig = {
  command: { color: "#6F00FF", label: "Command", desc: "Điều phối & Quyết định" },
  plan: { color: "#6F00FF", label: "Plan", desc: "Lập kế hoạch" },
  do: { color: "#6F00FF", label: "Do", desc: "Thực thi" },
  check: { color: "#6F00FF", label: "Check", desc: "Kiểm tra" },
  act: { color: "#6F00FF", label: "Act", desc: "Cải tiến" }
};

// Map agents to PDCA categories
const agentPdcaMap: Record<string, keyof typeof pdcaConfig> = {
  "orchestrator": "command",
  "quality-inspector": "check",
  "project-planner": "plan",
  "product-manager": "plan",
  "product-owner": "plan",
  "documentation-writer": "plan",
  "seo-specialist": "plan",
  "explorer-agent": "plan",
  "frontend-specialist": "do",
  "backend-specialist": "do",
  "database-architect": "do",
  "cloud-architect": "do",
  "mobile-developer": "do",
  "game-developer": "do",
  "codebase-expert": "do",
  "code-archaeologist": "do",
  "security-auditor": "check",
  "penetration-tester": "check",
  "test-engineer": "check",
  "qa-automation-engineer": "check",
  "devops-engineer": "act",
  "performance-optimizer": "act",
  "debugger": "act"
};

export default function AgentsPage() {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Build category tabs
  const categoryTabs = useMemo(() => {
    const tabs = [{ id: "all", label: "Tất cả", count: agentsList.length }];
    Object.entries(pdcaConfig).forEach(([id, config]) => {
      const count = agentsList.filter(agent => agentPdcaMap[agent.id] === id).length;
      if (count > 0) {
        tabs.push({ id, label: config.label, count });
      }
    });
    return tabs;
  }, []);

  // Filter agents
  const filteredAgents = useMemo(() => {
    let agents = agentsList;

    // Filter by category
    if (activeCategory !== "all") {
      agents = agents.filter(agent => agentPdcaMap[agent.id] === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      agents = agents.filter(agent =>
        agent.name.toLowerCase().includes(query) ||
        agent.role.toLowerCase().includes(query) ||
        agent.roleEn?.toLowerCase().includes(query)
      );
    }

    return agents;
  }, [searchQuery, activeCategory]);

  return (
    <div className="page-container mt-24 pb-24 space-y-12">
      <PageHeader
        badgeIcon={Bot}
        badgeLabel="Neural Workforce"
        title={t('guide.agents.title')}
        description={t('guide.agents.subtitle')}
        color="blue"
      />

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 max-w-4xl mx-auto"
      >
        <SearchBar 
          placeholder="Tìm kiếm agent..." 
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
          Hiển thị {filteredAgents.length} / {agentsList.length} agents
        </div>
      </motion.div>

      {/* PDCA Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {Object.entries(pdcaConfig).map(([id, config]) => (
          <div 
            key={id}
            className="flex items-center gap-2 text-sm"
          >
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: config.color }}
            />
            <span className="text-white/60">{config.label}</span>
            <span className="text-white/30 text-xs">({config.desc})</span>
          </div>
        ))}
      </motion.div>

      {/* Agents Grid with 3D Tilt Effect */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredAgents.map((agent, idx) => {
          const pdcaCategory = agentPdcaMap[agent.id] || "do";
          const config = pdcaConfig[pdcaCategory];
          
          return (
            <Link key={agent.id} href={`/guide/agents/${agent.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(idx * 0.03, 0.5) }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="card-glass h-full group cursor-pointer text-center relative overflow-hidden"
                style={{ 
                  perspective: "1000px",
                  borderColor: `${config.color}30` 
                }}
              >
                {/* PDCA Badge */}
                <div 
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase"
                  style={{
                    backgroundColor: `${config.color}20`,
                    color: config.color,
                    border: `1px solid ${config.color}40`
                  }}
                >
                  {config.label}
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${config.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Avatar */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${config.color}30 0%, ${config.color}10 100%)`,
                    border: `2px solid ${config.color}40`,
                    boxShadow: `0 0 30px ${config.color}20`
                  }}
                  whileHover={{
                    boxShadow: `0 0 40px ${config.color}40`,
                    scale: 1.1
                  }}
                >
                  {agent.icon}
                </motion.div>

                <h3 className="font-bold text-white mb-1 group-hover:text-[#6F00FF] transition-colors relative z-10">
                  {agent.name}
                </h3>

                <p className="text-sm text-white/50 relative z-10">
                  {locale === 'en' ? agent.roleEn || agent.role : agent.role}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-3 right-3"
                >
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAgents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-white/50 text-lg">
            Không tìm thấy agent phù hợp với &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
            className="mt-4 text-[#6F00FF] hover:underline"
          >
            Xóa bộ lọc
          </button>
        </motion.div>
      )}

      {/* Interaction Model */}
      <div className="max-w-4xl mx-auto space-y-8 pt-12">
        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-2">{t('guide.agents.interactionTitle')}</h2>
          <p className="text-white/40 text-sm">{t('guide.agents.interactionDesc')}</p>
        </div>

        <div className="relative">
          {/* PDCA Cycle Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 w-48">
              <User className="h-8 w-8 mx-auto mb-2 text-white" />
              <div className="font-bold text-white">User</div>
            </div>
            <div className="h-8 w-0.5 md:h-0.5 md:w-16 bg-white/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-2 text-[10px] text-white/40">CHAT</div>
            </div>
            <div className="p-6 bg-[#6F00FF]/10 rounded-2xl border border-[#6F00FF]/20 w-48">
              <BrainCircuit className="h-8 w-8 mx-auto mb-2 text-[#6F00FF]" />
              <div className="font-bold text-[#6F00FF]">Orchestrator</div>
            </div>
            <div className="h-8 w-0.5 md:h-0.5 md:w-16 bg-white/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-2 text-[10px] text-white/40">PDCA</div>
            </div>
            <div className="p-6 bg-[#6F00FF]/10 rounded-2xl border border-[#6F00FF]/20 w-48">
              <div className="flex justify-center gap-1 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#6F00FF]" />
                <div className="w-3 h-3 rounded-full bg-[#6F00FF]/80" />
                <div className="w-3 h-3 rounded-full bg-[#6F00FF]/60" />
                <div className="w-3 h-3 rounded-full bg-[#6F00FF]/40" />
              </div>
              <div className="font-bold text-white">Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
