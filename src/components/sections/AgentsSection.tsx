"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { User, Shield, Brain, Laptop } from "lucide-react";

interface AgentsProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    desc: string;
    list: Array<{
        name: string;
        role: string;
    }>
  };
}

export function AgentsSection({ data }: AgentsProps) {
  return (
    <section className="w-full py-24 px-4 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Left: Visual - Compact Orbit Design (1/3 width on LG) */}
        <div className="lg:col-span-1 relative h-[350px] w-full max-w-[400px] mx-auto border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-[#6F00FF]/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6F00FF]/10 to-[#4F00B8]/10" />
            
            {/* Subtle orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border border-white/5 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-white/10" />
            </div>
            
            {/* Central Orchestrator */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6F00FF] to-[#4F00B8] flex items-center justify-center shadow-xl ring-4 ring-black/40">
                    <span className="text-white font-black text-xl">AI</span>
                </div>
            </div>
            
            {/* Orbiting Agents - Tighter */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* Top */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <AgentAvatar icon={User} color="blue" />
                </div>
                {/* Right */}
                <div className="absolute top-1/2 right-8 -translate-y-1/2">
                    <AgentAvatar icon={Shield} color="red" />
                </div>
                {/* Bottom */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <AgentAvatar icon={Brain} color="yellow" />
                </div>
                {/* Left */}
                <div className="absolute top-1/2 left-8 -translate-y-1/2">
                    <AgentAvatar icon={Laptop} color="green" />
                </div>
            </div>
        </div>

        {/* Right: Content (2/3 width on LG) */}
        <div className="lg:col-span-2 space-y-10">
          <SectionHeading 
            badge={data.badge}
            title={data.title.main}
            highlight={data.title.highlight}
            highlightColor="red"
            desc={data.desc}
            align="left"
          />

          <div className="flex flex-wrap gap-4">
            {data.list.map((agent, i) => {
               const colors = ["#6F00FF", "#6F00FF", "#6F00FF", "#6F00FF"];
               const currentColor = colors[i % 4];
               
               return (
                  <div key={i} className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white/80 hover:bg-white/10 transition-all duration-300 cursor-default group">
                     <span style={{ color: currentColor }} className="mr-2 group-hover:text-white transition-colors">{agent.name}</span> 
                     <span className="opacity-50">|</span> 
                     <span className="ml-2 opacity-60 font-normal">{agent.role}</span>
                  </div>
               );
            })}
            <div className="px-5 py-3 rounded-full border border-dashed border-white/20 text-sm text-white/40">
                +10 More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentAvatar({ icon: Icon, color }: { icon: any, color: string }) {
    const colorClasses = {
        blue: "text-[#6F00FF] bg-[#6F00FF]/10 border-[#6F00FF]/30",
        red: "text-[#6F00FF] bg-[#6F00FF]/10 border-[#6F00FF]/30",
        yellow: "text-[#6F00FF] bg-[#6F00FF]/10 border-[#6F00FF]/30",
        green: "text-[#6F00FF] bg-[#6F00FF]/10 border-[#6F00FF]/30",
    }[color];

    return (
        <motion.div 
            whileHover={{ scale: 1.15 }}
            className={cn("w-12 h-12 rounded-lg border-2 flex items-center justify-center backdrop-blur-md shadow-lg", colorClasses)}
        >
            <Icon className="w-6 h-6" />
        </motion.div>
    )
}
