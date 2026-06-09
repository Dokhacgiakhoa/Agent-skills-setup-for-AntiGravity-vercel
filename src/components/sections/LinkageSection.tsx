"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface LinkageProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    desc: string;
    cards: Array<{
      title: string;
      items: string[];
      color: string;
    }>;
  };
}

export function LinkageSection({ data }: LinkageProps) {
  return (
    <section className="w-full py-24 px-4 bg-black/40 border-y border-white/5">
      <div className="w-[90%] max-w-7xl mx-auto text-center space-y-8">
        <SectionHeading 
          badge={data.badge}
          title={data.title.main}
          highlight={data.title.highlight}
          highlightColor="blue"
          desc={data.desc}
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {data.cards.map((card, i) => (
             <LinkageCard key={i} title={card.title} items={card.items} color={card.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkageCard({ title, items, color }: { title: string, items: string[], color: string }) {
   const colorMap: Record<string, string> = {
    blue: "border-[#00F3FF]/30 shadow-[0_0_30px_rgba(0,243,255,0.1)]",
    red: "border-[#BD00FF]/30 shadow-[0_0_30px_rgba(189,0,255,0.1)]",
    green: "border-[#00F3FF]/30 shadow-[0_0_30px_rgba(0,243,255,0.1)]",
  };

  const titleColorMap: Record<string, string> = {
    blue: "text-[#00F3FF]",
    red: "text-[#BD00FF]",
    green: "text-[#00F3FF]",
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("p-8 rounded-3xl border bg-[#050505] relative overflow-hidden group", colorMap[color])}
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-current", titleColorMap[color])} />
      
      <h3 className={cn("text-2xl font-black mb-6 uppercase tracking-tight", titleColorMap[color])}>{title}</h3>
      <ul className="space-y-3 text-left">
        {items.map((item, j) => (
          <li key={j} className="flex items-center gap-3 text-white/60 font-medium">
            <div className={cn("w-1.5 h-1.5 rounded-full", titleColorMap[color].replace("text", "bg"))} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
