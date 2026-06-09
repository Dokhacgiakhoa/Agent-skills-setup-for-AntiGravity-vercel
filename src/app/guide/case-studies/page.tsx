"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowLeft, Clock, Target, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/ui/premium";
import { caseStudies, difficultyConfig, CaseStudy } from "@/data/case-studies";

function DifficultyBar({ difficulty }: { difficulty: CaseStudy["difficulty"] }) {
  const config = difficultyConfig[difficulty];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className="w-2 h-4 rounded-sm transition-colors"
            style={{
              backgroundColor: bar <= config.bars ? config.color : 'rgba(255,255,255,0.1)'
            }}
          />
        ))}
      </div>
      <span className="text-xs" style={{ color: config.color }}>{config.label}</span>
    </div>
  );
}

function CaseStudyCard({ study, onClick, index }: { study: CaseStudy; onClick: () => void; index: number }) {
  const config = difficultyConfig[study.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={onClick}
      className="card-glass cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{study.icon}</span>
        <DifficultyBar difficulty={study.difficulty} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4285F4] transition-colors">
        {study.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm mb-4 line-clamp-2">
        {study.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {study.duration}
        </span>
        <span className="flex items-center gap-1">
          <Target className="w-3 h-3" />
          {study.phases.length} phases
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {study.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
          >
            {tag}
          </span>
        ))}
        {study.tags.length > 3 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/40">
            +{study.tags.length - 3}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-5 h-5 text-[#4285F4]" />
      </div>
    </motion.div>
  );
}

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-black/90 rounded-3xl border border-white/10 p-6 md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/50" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">{study.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{study.title}</h2>
            <div className="flex items-center gap-4">
              <DifficultyBar difficulty={study.difficulty} />
              <span className="text-white/40 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" /> {study.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 mb-6">{study.description}</p>

        {/* Focus Areas */}
        <div className="flex flex-wrap gap-2 mb-8">
          {study.focus.map((f) => (
            <span
              key={f}
              className="px-3 py-1 text-sm rounded-full bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/30"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Phase Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {study.phases.map((phase, idx) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhase(idx)}
              className={`
                px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all
                ${activePhase === idx
                  ? 'bg-[#4285F4] text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10'}
              `}
            >
              Phase {phase.phase}: {phase.title}
            </button>
          ))}
        </div>

        {/* Phase Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                {study.phases[activePhase].title}
              </h3>
              <span className="text-sm text-[#4285F4]">
                {study.phases[activePhase].progress} công việc
              </span>
            </div>

            {/* Prompts */}
            <div className="space-y-3">
              {study.phases[activePhase].prompts.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-black/50 rounded-xl p-4 border border-white/10"
                >
                  {p.context && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs rounded-full bg-[#34A853]/20 text-[#34A853] border border-[#34A853]/30">
                        {p.context}
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-white/80 text-sm font-mono">{p.prompt}</p>
                    <CopyButton text={p.prompt} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="page-container">
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-[#FBBC04]/20 border border-[#FBBC04]/30">
              <Briefcase className="w-8 h-8 text-[#FBBC04]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Case <span className="text-[#FBBC04]">Studies</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            5 ví dụ thực tế về cách sử dụng AntiGravity IDE trong các dự án từ đơn giản đến phức tạp.
            Click vào từng case để xem chi tiết các bước và prompt mẫu.
          </p>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index}
              onClick={() => setSelectedStudy(study)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <CaseStudyModal
              study={selectedStudy}
              onClose={() => setSelectedStudy(null)}
            />
          )}
        </AnimatePresence>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 card-glass"
        >
          <h3 className="text-lg font-bold text-white mb-4">💡 Prompt Patterns</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-[#4285F4] font-semibold mb-2">✅ Đúng cách</h4>
              <p className="text-white/60">
                &quot;Đóng vai @security, viết API Login, yêu cầu hash password và chặn Brute Force.&quot;
              </p>
            </div>
            <div>
              <h4 className="text-[#EA4335] font-semibold mb-2">❌ Sai cách</h4>
              <p className="text-white/60">
                &quot;Viết code login đi.&quot; (Quá sơ sài, AI không biết tiêu chuẩn gì)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
