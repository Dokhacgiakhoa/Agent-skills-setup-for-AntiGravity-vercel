"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowLeft, FolderTree, Zap, Users, Workflow, Shield, FileCode, ChevronRight } from "lucide-react";
import Link from "next/link";

// Architecture Components
const architectureComponents = [
  {
    id: "gemini-md",
    name: "GEMINI.md",
    icon: "🧬",
    color: "#4285F4",
    type: "core",
    description: "DNA cốt lõi - Định nghĩa danh tính, quy tắc vận hành và Operating Mode.",
    features: [
      "Agent Identity & Persona",
      "Operating Mode (Solo/Team/Enterprise)",
      "Language Protocol (Việt/Anh)",
      "Skill & Rule References"
    ],
    path: "GEMINI.md",
    link: "/guide"
  },
  {
    id: "skills",
    name: "Skills",
    icon: "⚡",
    color: "#FBBC04",
    type: "knowledge",
    description: "72 Master Skills - Thư viện tri thức chuyên sâu được cấu trúc theo domain.",
    features: [
      "Frontend, Backend, Security...",
      "Mỗi skill có SKILL.md riêng",
      "600+ AI Patterns bên trong",
      "Tự động nạp theo context"
    ],
    path: ".agent/skills/",
    link: "/guide/skills"
  },
  {
    id: "agents",
    name: "Agents",
    icon: "🤖",
    color: "#34A853",
    type: "personnel",
    description: "22 Specialist Agents - Đội ngũ chuyên gia AI được phân vai theo PDCA.",
    features: [
      "Plan: Project Planner, PM...",
      "Do: Frontend, Backend, Mobile...",
      "Check: Security, Test, QA...",
      "Act: DevOps, Performance..."
    ],
    path: ".agent/agents/",
    link: "/guide/agents"
  },
  {
    id: "workflows",
    name: "Workflows",
    icon: "🔁",
    color: "#EA4335",
    type: "process",
    description: "30+ Slash Commands - Quy trình tự động hóa cho mọi tác vụ.",
    features: [
      "/create - Tạo feature mới",
      "/debug - Sửa lỗi thông minh",
      "/deploy - Triển khai production",
      "/audit - Kiểm tra toàn diện"
    ],
    path: ".agent/workflows/",
    link: "/guide/workflows"
  },
  {
    id: "rules",
    name: "Rules",
    icon: "📏",
    color: "#9AA0A6",
    type: "governance",
    description: "10+ Rules - Rào chắn bảo vệ và quy tắc vận hành tự động.",
    features: [
      "security.md - Chống hardcode",
      "runtime-watchdog.md - Chống treo",
      "error-logging.md - Tự học từ lỗi",
      "malware-protection.md - Chống mã độc"
    ],
    path: ".agent/rules/",
    link: "/guide/rules"
  },
  {
    id: "shared",
    name: ".shared",
    icon: "🧫",
    color: "#8B5CF6",
    type: "dna",
    description: "17 DNA Libraries - Tiêu chuẩn thiết kế dùng chung cho toàn hệ thống.",
    features: [
      "API Standards, Database Master",
      "Design System, Security Armor",
      "Testing Master, I18n Master",
      "Compliance, Metrics..."
    ],
    path: ".agent/.shared/",
    link: "/guide/shared"
  }
];

const pdcaCycle = [
  { id: "plan", label: "Plan", color: "#EA4335", desc: "Lập kế hoạch" },
  { id: "do", label: "Do", color: "#FBBC04", desc: "Thực thi" },
  { id: "check", label: "Check", color: "#34A853", desc: "Kiểm tra" },
  { id: "act", label: "Act", color: "#4285F4", desc: "Cải tiến" }
];

export default function ArchitecturePage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="page-container max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Guide
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-4 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/30">
              <Layers className="w-10 h-10 text-[#8B5CF6]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kiến Trúc <span className="text-[#8B5CF6]">Hệ Thống</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tổng quan về cấu trúc và các thành phần của AntiGravity IDE.
            Click vào từng component để xem chi tiết.
          </p>
        </motion.div>

        {/* PDCA Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-center text-lg font-bold text-white/50 mb-6 uppercase tracking-wider">
            Mô hình vận hành: PDCA Cycle
          </h2>
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            {pdcaCycle.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div 
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{ 
                    backgroundColor: `${phase.color}20`,
                    color: phase.color,
                    border: `2px solid ${phase.color}`
                  }}
                >
                  {phase.label}
                  <span className="hidden md:inline ml-2 opacity-60">({phase.desc})</span>
                </div>
                {index < pdcaCycle.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-white/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {architectureComponents.map((comp, index) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedComponent(selectedComponent === comp.id ? null : comp.id)}
              className={`
                card-glass cursor-pointer transition-all
                ${selectedComponent === comp.id ? 'ring-2' : ''}
              `}
              style={{ 
                borderColor: `${comp.color}30`,
                ...(selectedComponent === comp.id && { ringColor: comp.color })
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ 
                    backgroundColor: `${comp.color}20`,
                    border: `1px solid ${comp.color}40`
                  }}
                >
                  {comp.icon}
                </div>
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${comp.color}20`, color: comp.color }}
                >
                  {comp.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{comp.name}</h3>
              <p className="text-sm text-white/50 mb-4">{comp.description}</p>

              {/* Expandable Features */}
              {selectedComponent === comp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2 pt-4 border-t border-white/10"
                >
                  {comp.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: comp.color }} />
                      {feature}
                    </div>
                  ))}
                  <div className="pt-4">
                    <code className="text-xs text-white/40 bg-black/30 px-2 py-1 rounded">
                      {comp.path}
                    </code>
                  </div>
                  <Link 
                    href={comp.link}
                    className="inline-flex items-center gap-2 text-sm mt-2"
                    style={{ color: comp.color }}
                  >
                    Xem chi tiết <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Directory Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass p-8"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <FolderTree className="w-6 h-6 text-[#FBBC04]" />
            Cấu trúc thư mục
          </h2>
          <div className="font-mono text-sm bg-black/40 p-6 rounded-2xl border border-white/10 overflow-x-auto">
            <pre className="text-white/80">
{`your-project/
├── .agent/                    # 🧠 Bộ não AI
│   ├── agents/                # 22 Specialist Agents
│   ├── skills/                # 72 Master Skills  
│   ├── rules/                 # 10+ Guardrail Rules
│   ├── workflows/             # 30+ Slash Commands
│   └── .shared/               # 17 DNA Libraries
├── GEMINI.md                  # 🧬 DNA cốt lõi
├── ERRORS.md                  # 📝 Error Learning Log
└── your-code/                 # 📁 Code dự án`}
            </pre>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: "Master Skills", value: "72", color: "#FBBC04", icon: Zap },
            { label: "Specialist Agents", value: "22", color: "#34A853", icon: Users },
            { label: "Workflows", value: "30+", color: "#EA4335", icon: Workflow },
            { label: "AI Patterns", value: "600+", color: "#4285F4", icon: FileCode }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="card-glass text-center py-6"
              style={{ borderColor: `${stat.color}30` }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
