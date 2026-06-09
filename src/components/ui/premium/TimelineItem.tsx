"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  index: number;
  date: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  children?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ 
  index, 
  date, 
  title, 
  description, 
  badge, 
  children,
  isLast = false 
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#4285F4] to-transparent" />
      )}
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 400 }}
        className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#4285F4] to-[#1967D2] flex items-center justify-center shadow-[0_0_20px_rgba(66,133,244,0.5)]"
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Content */}
      <div className="card-glass p-5 mb-4">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-sm text-white/50">{date}</span>
          {badge}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-white/60 text-sm">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
