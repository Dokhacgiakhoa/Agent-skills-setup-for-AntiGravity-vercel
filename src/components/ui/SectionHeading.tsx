"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  highlightColor?: "blue" | "red" | "yellow" | "green";
  sub?: string;
  desc?: string;
  align?: "left" | "center" | "right";
  isHero?: boolean;
}

export function SectionHeading({ 
  badge, 
  title, 
  highlight, 
  highlightColor = "blue", 
  sub,
  desc, 
  align = "center",
  isHero = false
}: SectionHeadingProps) {
  const alignClass = align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";
  
  const colorMap = {
    blue: "text-[#00F3FF] border-[#00F3FF]/20 bg-[#00F3FF]/10",
    red: "text-[#BD00FF] border-[#BD00FF]/20 bg-[#BD00FF]/10",
    yellow: "text-[#BD00FF] border-[#BD00FF]/20 bg-[#BD00FF]/10",
    green: "text-[#00F3FF] border-[#00F3FF]/20 bg-[#00F3FF]/10",
  };

  const highlightTextColors = {
    blue: "text-[#00F3FF]",
    red: "text-[#BD00FF]",
    yellow: "text-[#BD00FF]",
    green: "text-[#00F3FF]",
  };

  return (
    <div className={cn("flex flex-col space-y-6", alignClass)}>
      {badge && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-flex px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-[0.2em]",
            colorMap[highlightColor]
          )}
        >
          {badge}
        </motion.div>
      )}

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "font-black text-white tracking-tighter uppercase italic",
          isHero ? "text-4xl md:text-6xl lg:text-7xl leading-[0.9]" : "text-4xl md:text-5xl leading-tight"
        )}
      >
        {title} 
        {highlight && (
          <>
            {" "}
            <span className={cn("italic", highlightTextColors[highlightColor])}>
              {highlight}
            </span>
          </>
        )}
        {sub && <><br/>{sub}</>}
      </motion.h2>

      {desc && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-white/40 text-lg font-medium max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
