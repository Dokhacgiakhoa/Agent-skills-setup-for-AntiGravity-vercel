"use client";

import { motion } from "framer-motion";

type Severity = "low" | "medium" | "high" | "critical";

interface SeverityBadgeProps {
  severity: Severity;
  label?: string;
}

const severityConfig = {
  low: {
    color: "#34A853",
    bg: "rgba(52, 168, 83, 0.1)",
    border: "rgba(52, 168, 83, 0.3)",
    label: "Low"
  },
  medium: {
    color: "#FBBC04",
    bg: "rgba(251, 188, 4, 0.1)",
    border: "rgba(251, 188, 4, 0.3)",
    label: "Medium"
  },
  high: {
    color: "#EA4335",
    bg: "rgba(234, 67, 53, 0.1)",
    border: "rgba(234, 67, 53, 0.3)",
    label: "High"
  },
  critical: {
    color: "#EA4335",
    bg: "rgba(234, 67, 53, 0.2)",
    border: "rgba(234, 67, 53, 0.5)",
    label: "Critical"
  }
};

export function SeverityBadge({ severity, label }: SeverityBadgeProps) {
  const config = severityConfig[severity];
  
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`
      }}
    >
      <span 
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: config.color }}
      />
      {label || config.label}
    </motion.span>
  );
}
