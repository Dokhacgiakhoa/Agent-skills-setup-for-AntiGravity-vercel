"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ArrowLeft, ChevronRight, Lightbulb, Search, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// AI Thinking Steps
const thinkingSteps = [
  {
    id: 1,
    title: "Nhận Request",
    icon: "📥",
    color: "#4285F4",
    description: "Agent nhận prompt từ người dùng qua chat interface.",
    details: [
      "Parse ngữ cảnh từ tin nhắn",
      "Xác định loại tác vụ (Create, Debug, Enhance, etc.)",
      "Đọc metadata từ file đang mở"
    ]
  },
  {
    id: 2,
    title: "Đọc DNA",
    icon: "🧬",
    color: "#EA4335",
    description: "Đọc GEMINI.md để hiểu danh tính và quy tắc hành xử.",
    details: [
      "Load GEMINI.md từ root project",
      "Parse Operating Mode (Solo/Team/Enterprise)",
      "Nhận diện Project Focus và Language Protocol"
    ]
  },
  {
    id: 3,
    title: "Routing",
    icon: "🧭",
    color: "#FBBC04",
    description: "Xác định chuyên gia phù hợp nhất cho tác vụ.",
    details: [
      "Phân tích keywords trong prompt",
      "Map với Agent profiles trong .agent/agents/",
      "Chọn Primary Agent và Support Agents"
    ]
  },
  {
    id: 4,
    title: "Load Skills",
    icon: "⚡",
    color: "#34A853",
    description: "Nạp các Master Skills cần thiết vào context.",
    details: [
      "Đọc skill_ref từ Agent profile",
      "Load SKILL.md từ .agent/skills/",
      "Merge với .shared/ DNA nếu cần"
    ]
  },
  {
    id: 5,
    title: "Lập Plan",
    icon: "📋",
    color: "#4285F4",
    description: "Tạo kế hoạch thực thi với các bước cụ thể.",
    details: [
      "Break down tác vụ thành sub-tasks",
      "Định nghĩa Pre-flight Checklist",
      "Ước tính effort và dependencies"
    ]
  },
  {
    id: 6,
    title: "Thực Thi",
    icon: "🚀",
    color: "#EA4335",
    description: "Thực hiện từng bước theo kế hoạch.",
    details: [
      "Execute với các tool calls",
      "Ghi log vào ERRORS.md nếu có lỗi",
      "Self-verify sau mỗi bước"
    ]
  },
  {
    id: 7,
    title: "Quality Check",
    icon: "✅",
    color: "#34A853",
    description: "Kiểm tra chất lượng output trước khi trả về.",
    details: [
      "Run lint và validation",
      "So sánh với standards trong .shared/",
      "Gọi Quality Inspector nếu cần"
    ]
  },
  {
    id: 8,
    title: "Phản Hồi",
    icon: "💬",
    color: "#FBBC04",
    description: "Trả lời người dùng với kết quả và giải thích.",
    details: [
      "Format output theo Language Protocol",
      "Đề xuất next steps",
      "Cập nhật Knowledge Base nếu học được điều mới"
    ]
  }
];

export default function HowItThinksPage() {
  const [activeStep, setActiveStep] = useState(1);

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
            <motion.div 
              className="p-4 rounded-2xl bg-gradient-to-br from-[#4285F4]/20 to-[#34A853]/20 border border-[#4285F4]/30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain className="w-10 h-10 text-[#4285F4]" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#34A853]">Nghĩ</span> Như Thế Nào?
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Khám phá quy trình xử lý của AntiGravity Agent từ khi nhận prompt đến khi trả kết quả.
            Click vào từng bước để xem chi tiết.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Steps List */}
          <div className="space-y-4">
            {thinkingSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveStep(step.id)}
                className={`
                  relative flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all
                  ${activeStep === step.id 
                    ? 'bg-white/10 border border-white/20 shadow-lg' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'}
                `}
              >
                {/* Connector Line */}
                {index < thinkingSteps.length - 1 && (
                  <div 
                    className="absolute left-8 top-16 w-0.5 h-8"
                    style={{ 
                      background: `linear-gradient(to bottom, ${step.color}, ${thinkingSteps[index + 1].color})` 
                    }}
                  />
                )}

                {/* Step Number */}
                <motion.div
                  animate={{ scale: activeStep === step.id ? 1.1 : 1 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{
                    backgroundColor: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    boxShadow: activeStep === step.id ? `0 0 20px ${step.color}40` : 'none'
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform ${activeStep === step.id ? 'rotate-90 text-white' : 'text-white/30'}`}
                    />
                  </div>
                  <p className="text-sm text-white/50 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <AnimatePresence mode="wait">
              {thinkingSteps.map((step) => (
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="card-glass p-8"
                    style={{ borderColor: `${step.color}30` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: step.color }}>
                          Bước {step.id} / {thinkingSteps.length}
                        </span>
                        <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                      </div>
                    </div>

                    <p className="text-white/70 mb-6 text-lg">{step.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider">Chi tiết:</h4>
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-white/60"
                        >
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: step.color }} />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                      <button
                        onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                        className={`flex items-center gap-2 text-sm ${activeStep === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-white'}`}
                        disabled={activeStep === 1}
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Bước trước
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(thinkingSteps.length, activeStep + 1))}
                        className={`flex items-center gap-2 text-sm ${activeStep === thinkingSteps.length ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-white'}`}
                        disabled={activeStep === thinkingSteps.length}
                      >
                        Bước tiếp
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 card-glass p-8 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 border-[#4285F4]/20"
        >
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-[#FBBC04] shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Điểm Khác Biệt</h3>
              <p className="text-white/60 leading-relaxed">
                AntiGravity không chỉ là &quot;wrapper&quot; cho LLM. Nó có hệ thống <strong className="text-[#4285F4]">DNA cấu hình</strong> (GEMINI.md), 
                <strong className="text-[#34A853]"> 72 Master Skills</strong> chuyên sâu, và cơ chế <strong className="text-[#EA4335]">tự sửa lỗi</strong> (ERRORS.md). 
                Mỗi request đều được xử lý bởi một đội ngũ <strong className="text-[#FBBC04]">22 Specialist Agents</strong> theo mô hình PDCA.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
