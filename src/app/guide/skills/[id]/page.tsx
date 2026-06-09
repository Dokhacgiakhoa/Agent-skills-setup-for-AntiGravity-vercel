"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Zap, Code, Link2 } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/ui/premium";
import { getSkillDetail, skillsDetails } from "@/data/skills-details";

// Category configuration
const categoryConfig: Record<string, { color: string; icon: string; label: string }> = {
  frontend: { color: "#4285F4", icon: "🎨", label: "Frontend" },
  backend: { color: "#34A853", icon: "⚙️", label: "Backend" },
  database: { color: "#FBBC04", icon: "🗄️", label: "Database" },
  security: { color: "#EA4335", icon: "🛡️", label: "Security" },
  devops: { color: "#9AA0A6", icon: "🚀", label: "DevOps" },
  testing: { color: "#8B5CF6", icon: "🧪", label: "Testing" },
  ai: { color: "#4285F4", icon: "🤖", label: "AI/ML" },
  seo: { color: "#34A853", icon: "📈", label: "SEO" },
  default: { color: "#4285F4", icon: "📦", label: "Other" }
};

export default function SkillDetailPage() {
  const params = useParams();
  const skillId = params.id as string;
  const skill = getSkillDetail(skillId);

  if (!skill) {
    return (
      <div className="min-h-screen py-20">
        <div className="page-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Skill không tìm thấy</h1>
          <p className="text-white/60 mb-8">Skill &quot;{skillId}&quot; không tồn tại trong hệ thống.</p>
          <Link href="/guide/skills" className="btn-blue">
            Quay lại danh sách Skills
          </Link>
        </div>
      </div>
    );
  }

  const config = categoryConfig[skill.category] || categoryConfig.default;

  return (
    <div className="min-h-screen py-20">
      <div className="page-container max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/guide/skills"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Skills
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-glass mb-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="p-4 rounded-2xl text-4xl"
              style={{
                backgroundColor: `${config.color}20`,
                border: `2px solid ${config.color}40`
              }}
            >
              {config.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="px-2 py-0.5 text-xs font-bold rounded-full"
                  style={{
                    backgroundColor: `${config.color}20`,
                    color: config.color,
                    border: `1px solid ${config.color}40`
                  }}
                >
                  {config.label}
                </span>
                <span className="text-xs text-white/40">v{skill.version}</span>
              </div>
              <h1 className="text-3xl font-mono font-bold text-white">
                {skill.name}
              </h1>
            </div>
          </div>
          <p className="text-white/60 text-lg">{skill.description}</p>
          {skill.source && (
            <div className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <ExternalLink className="w-4 h-4" />
              Source: {skill.source}
            </div>
          )}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FBBC04]" />
            Tính năng chính
          </h2>
          <ul className="space-y-3">
            {skill.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-start gap-3 text-white/70"
              >
                <span className="text-[#34A853] mt-1">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-[#4285F4]" />
            Ví dụ sử dụng
          </h2>
          <div className="space-y-3">
            {skill.usageExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/10"
              >
                <code className="text-[#4285F4] text-sm">&quot;{example}&quot;</code>
                <CopyButton text={example} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Link2 className="w-5 h-5 text-[#EA4335]" />
            Skills liên quan
          </h2>
          <div className="flex flex-wrap gap-3">
            {skill.relatedSkills.map((relatedId) => {
              const related = skillsDetails[relatedId];
              const relatedConfig = related 
                ? categoryConfig[related.category] || categoryConfig.default 
                : categoryConfig.default;
              
              return (
                <Link
                  key={relatedId}
                  href={`/guide/skills/${relatedId}`}
                  className="group px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#4285F4]/50 transition-all"
                >
                  <span className="mr-2">{relatedConfig.icon}</span>
                  <span className="font-mono text-white/70 group-hover:text-white transition-colors">
                    {relatedId}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-white/40 text-sm">
            Skill này được tự động nạp khi bạn đề cập đến các từ khóa liên quan trong prompt.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
