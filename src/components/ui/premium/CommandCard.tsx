"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CommandCardProps {
  command: string;
  title: string;
  description: string;
  href: string;
  category?: string;
  index?: number;
}

const categoryColors: Record<string, string> = {
  planning: "#4285F4",
  development: "#34A853",
  devops: "#FBBC04",
  testing: "#EA4335",
  documentation: "#9AA0A6",
  management: "#4285F4",
  advanced: "#8B5CF6",
  default: "#4285F4"
};

export function CommandCard({ 
  command, 
  title, 
  description, 
  href, 
  category = "default",
  index = 0 
}: CommandCardProps) {
  const color = categoryColors[category] || categoryColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="card-glass group cursor-pointer h-full"
          style={{
            borderColor: `${color}20`,
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div 
              className="p-2 rounded-xl"
              style={{ 
                backgroundColor: `${color}15`,
                border: `1px solid ${color}30`
              }}
            >
              <Terminal className="w-5 h-5" style={{ color }} />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="text-white/40"
            >
              <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
            </motion.div>
          </div>

          <div 
            className="inline-block px-2 py-0.5 rounded-md text-sm font-mono font-bold mb-2"
            style={{ 
              backgroundColor: `${color}15`,
              color 
            }}
          >
            {command}
          </div>

          <h3 className="font-semibold text-white mb-2 group-hover:text-[#4285F4] transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-white/50 line-clamp-2">
            {description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
