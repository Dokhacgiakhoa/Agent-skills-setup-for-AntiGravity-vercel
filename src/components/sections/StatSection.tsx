"use client";

import { Brain, Layers, Workflow, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Mapping string names to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Brain, Layers, Workflow
};

interface StatItem {
  number: string;
  label: string;
  desc: string;
  iconName: string;
  color: string;
}

interface StatSectionProps {
  data: StatItem[];
}

export function StatSection({ data }: StatSectionProps) {
  return (
    <section className="w-full pt-16 pb-8 px-4">
      <div className="w-[90%] max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {data.map((item, idx) => (
          <StatCard 
            key={idx}
            iconName={item.iconName}
            number={item.number} 
            label={item.label} 
            desc={item.desc}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}

function StatCard({ iconName, number, label, desc, color }: { iconName: string, number: string, label: string, desc: string, color: string }) {
  const Icon = iconMap[iconName] || Brain;
  
  const colorMap: Record<string, string> = {
    blue: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50 text-[#6F00FF] bg-[#6F00FF]/5",
    red: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50 text-[#6F00FF] bg-[#6F00FF]/5",
    yellow: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50 text-[#6F00FF] bg-[#6F00FF]/5",
    green: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50 text-[#6F00FF] bg-[#6F00FF]/5",
  };

  return (
    <motion.div whileHover={{ y: -8 }} className={cn("p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500", colorMap[color])}>
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 scale-125 origin-left">
        <Icon className={cn("w-7 h-7", "text-[#6F00FF]")} />
      </div>
      <div className="space-y-2">
        <h3 className="text-5xl font-black tracking-tight">{number}</h3>
        <div className="text-xl font-black uppercase text-white tracking-tight italic">{label}</div>
        <p className="text-white/40 text-sm font-medium leading-relaxed pt-2">{desc}</p>
      </div>
    </motion.div>
  );
}
