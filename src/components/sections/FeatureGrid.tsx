"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureGridProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    items: Array<{
      icon: LucideIcon;
      title: string;
      desc: string;
      colSpan: string;
      color: string;
    }>;
  };
}

export function FeatureGrid({ data }: FeatureGridProps) {
  return (
    <section className="w-full py-24 px-4">
      <div className="w-[90%] max-w-7xl mx-auto space-y-16">
        <SectionHeading 
          badge={data.badge}
          title={data.title.main}
          highlight={data.title.highlight}
          highlightColor="red"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {data.items.map((feature, i) => (
             <FeatureCard 
                key={i}
                feature={feature}
                index={i}
             />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const colorMap: Record<string, string> = {
    blue: "hover:border-[#6F00FF]/50 hover:shadow-[0_0_30px_rgba(111,0,255,0.15)]",
    red: "hover:border-[#6F00FF]/50 hover:shadow-[0_0_30px_rgba(111,0,255,0.15)]",
    yellow: "hover:border-[#6F00FF]/50 hover:shadow-[0_0_30px_rgba(111,0,255,0.15)]",
    green: "hover:border-[#6F00FF]/50 hover:shadow-[0_0_30px_rgba(111,0,255,0.15)]",
  };

  const iconColorMap: Record<string, string> = {
    blue: "text-[#6F00FF]",
    red: "text-[#6F00FF]",
    yellow: "text-[#6F00FF]",
    green: "text-[#6F00FF]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative p-8 rounded-[2rem] border border-white/10 bg-black/40 hover:bg-black/70 backdrop-blur-3xl overflow-hidden transition-all duration-500",
        colorMap[feature.color],
        feature.colSpan
      )}
    >
      <div className={cn("mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/5", iconColorMap[feature.color])}>
        <feature.icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{feature.title}</h3>
      <p className="text-white/50 leading-relaxed font-medium">{feature.desc}</p>
      
      {/* Background Glow */}
      <div className={cn(
        "absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700", 
        "bg-[#6F00FF]"
      )} />
    </motion.div>
  );
}
