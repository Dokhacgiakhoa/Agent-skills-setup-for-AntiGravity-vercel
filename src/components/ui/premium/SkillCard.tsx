"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SkillCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  index?: number;
}

const categoryConfig: Record<string, { color: string; icon: string }> = {
  frontend: { color: "#4285F4", icon: "🎨" },
  backend: { color: "#34A853", icon: "⚙️" },
  database: { color: "#FBBC04", icon: "🗄️" },
  security: { color: "#EA4335", icon: "🛡️" },
  devops: { color: "#9AA0A6", icon: "🚀" },
  testing: { color: "#8B5CF6", icon: "🧪" },
  ai: { color: "#4285F4", icon: "🤖" },
  mobile: { color: "#34A853", icon: "📱" },
  architecture: { color: "#FBBC04", icon: "🏗️" },
  default: { color: "#4285F4", icon: "📦" }
};

export function SkillCard({ id, name, description, category, index = 0 }: SkillCardProps) {
  const config = categoryConfig[category] || categoryConfig.default;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link href={`/guide/skills/${id}`}>
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="card-glass group cursor-pointer h-full relative overflow-hidden"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${config.color}20 0%, transparent 70%)`
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{config.icon}</span>
              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                whileHover={{ opacity: 1, rotate: 0 }}
                className="text-white/40 group-hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>

            <h3 className="font-mono font-bold text-white mb-2 group-hover:text-[#4285F4] transition-colors">
              {name}
            </h3>

            <p className="text-sm text-white/50 line-clamp-2 mb-3">
              {description}
            </p>

            <span 
              className="inline-block px-2 py-0.5 rounded-md text-xs font-medium"
              style={{ 
                backgroundColor: `${config.color}15`,
                color: config.color,
                border: `1px solid ${config.color}30`
              }}
            >
              {category}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
