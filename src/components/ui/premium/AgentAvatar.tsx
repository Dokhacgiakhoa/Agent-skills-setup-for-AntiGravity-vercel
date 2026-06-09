"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface AgentAvatarProps {
  id: string;
  name: string;
  role: string;
  icon: string;
  category: "command" | "plan" | "do" | "check";
  index?: number;
}

const categoryConfig = {
  command: { color: "#4285F4", label: "Command" },
  plan: { color: "#FBBC04", label: "Plan" },
  do: { color: "#34A853", label: "Do" },
  check: { color: "#EA4335", label: "Check" }
};

export function AgentAvatar({ id, name, role, icon, category, index = 0 }: AgentAvatarProps) {
  const config = categoryConfig[category];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link href={`/guide/agents/${id}`}>
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            rotateX: -5,
          }}
          whileTap={{ scale: 0.95 }}
          className="card-glass group cursor-pointer text-center relative overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* PDCA Badge */}
          <div 
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold"
            style={{
              backgroundColor: `${config.color}20`,
              color: config.color,
              border: `1px solid ${config.color}40`
            }}
          >
            {config.label}
          </div>

          {/* Avatar */}
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl"
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
            {icon}
          </motion.div>

          <h3 className="font-bold text-white mb-1 group-hover:text-[#4285F4] transition-colors">
            {name}
          </h3>

          <p className="text-sm text-white/50">
            {role}
          </p>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-3 right-3"
          >
            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
