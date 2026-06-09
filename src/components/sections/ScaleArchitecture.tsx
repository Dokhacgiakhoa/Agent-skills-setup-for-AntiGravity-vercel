"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { User, Users, Building, LucideIcon, Bot, Code2, ShieldCheck, Zap, Server, Database, Workflow, Lightbulb, Sparkles, Crown, CheckCircle2, Brain, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  User, Users, Building
};

interface ArchitectureProps {
  data: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      sub: string;
    };
    desc: string;
    options: Array<{
      title: string;
      desc: string;
      iconName: string;
      color: string;
    }>;
  };
}

export function ScaleArchitecture({ data }: ArchitectureProps) {
  const [activeMode, setActiveMode] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="w-full pt-8 pb-24 px-4 relative">
      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-10">
          <SectionHeading 
            badge={data.badge}
            title={data.title.main}
            highlight={data.title.highlight}
            highlightColor="blue"
            sub={data.title.sub}
            desc={data.desc}
            align="left"
          />

          <div className="space-y-4">
            {data.options.map((opt, i) => (
              <ScaleOption 
                key={i} 
                title={opt.title} 
                desc={opt.desc} 
                iconName={opt.iconName} 
                color={opt.color} 
                isActive={activeMode === i}
                onClick={() => setActiveMode(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: Interactive Visualizer */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4285F4]/5 via-transparent to-[#EA4335]/5 rounded-full blur-3xl opacity-30" />
           
           <div className="relative z-10 w-full h-full border border-white/10 bg-black/40 backdrop-blur-3xl rounded-[2.5rem] p-8 flex flex-col shadow-2xl overflow-hidden">
              {/* Header for Visualizer */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                <div className="flex gap-2 items-center">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  {t('home.architecture.visualizer.header')}
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="flex-1 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeMode === 0 && <SoloNinjaVisualizer key="solo" />}
                  {activeMode === 1 && <AgileSquadVisualizer key="squad" />}
                  {activeMode === 2 && <SoftwareFactoryVisualizer key="factory" />}
                </AnimatePresence>
              </div>

              {/* Footer Legend */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] text-white/30 font-mono">
                 <div>Running: v4.0.0-core</div>
                 <div>
                   {activeMode === 0 ? "Threads: 1 | Latency: 5ms" : 
                    activeMode === 1 ? "Agents: 3 | Sync: Async" : 
                    "Pipeline: Strict | Audit: ON"}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function ScaleOption({ 
  title, desc, iconName, color, isActive, onClick 
}: { 
  title: string, desc: string, iconName: string, color: string, isActive: boolean, onClick: () => void 
}) {
  const Icon = iconMap[iconName] || User;
  
  const activeColors = {
    blue: "bg-[#4285F4]/20 border-[#4285F4] shadow-[0_0_30px_rgba(66,133,244,0.3)]",
    red: "bg-[#EA4335]/20 border-[#EA4335] shadow-[0_0_30px_rgba(234,67,53,0.3)]",
    yellow: "bg-[#FBBC04]/20 border-[#FBBC04] shadow-[0_0_30px_rgba(251,188,4,0.3)]",
  }[color];

  const inactiveColors = {
    blue: "text-[#4285F4] group-hover:bg-[#4285F4]/10",
    red: "text-[#EA4335] group-hover:bg-[#EA4335]/10",
    yellow: "text-[#FBBC04] group-hover:bg-[#FBBC04]/10",
  }[color];

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group flex items-start gap-6 p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-sm",
        isActive 
          ? cn("scale-[1.02]", activeColors) 
          : cn("bg-white/5 border-white/10 hover:border-white/20", inactiveColors)
      )}
    >
      <div className={cn(
        "p-3 rounded-xl transition-colors",
        isActive ? "bg-black/20 text-white" : "bg-black/20"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className={cn("text-lg font-black tracking-tight", isActive ? "text-white" : "text-white/80")}>
          {title}
        </h4>
        <p className={cn("text-sm leading-relaxed font-medium transition-opacity", isActive ? "text-white/80" : "text-white/40")}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// --- VISUALIZERS ---

// INSTANT Mode Visualizer (LITE - 4 orbs)
function SoloNinjaVisualizer() {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
    >
       {/* Star Particles */}
       <div className="absolute inset-0 overflow-hidden">
         {[...Array(15)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-white rounded-full"
             style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
             animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.5, 1, 0.5] }}
             transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
           />
         ))}
       </div>

       {/* Conveyor Belt Ring */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
         <defs>
           <filter id="glowBlue">
             <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
             <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
           </filter>
         </defs>
         <motion.circle cx="50%" cy="45%" r="110" fill="none" stroke="#4285F4" strokeWidth="2" strokeDasharray="10 8" opacity="0.5"
           animate={{ strokeDashoffset: [0, -80] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} filter="url(#glowBlue)" />
       </svg>

       {/* Speed Counter - Top Right */}
       <motion.div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md border border-blue-400/30 rounded-lg px-4 py-2"
         initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
         <div className="text-[10px] text-blue-400/60 font-mono uppercase tracking-wider">Speed</div>
         <div className="flex items-center gap-2">
           <motion.span className="text-xl font-black text-blue-400" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 1, repeat: Infinity }}>4x</motion.span>
           <span className="text-xs text-green-400 font-bold">⚡ FAST</span>
         </div>
       </motion.div>

       {/* Central Rocket Orb */}
       <motion.div className="relative z-20 flex flex-col items-center gap-3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
         <motion.div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 flex items-center justify-center border-4 border-blue-300/50 relative"
           animate={{ boxShadow: ["0 0 30px #4285F4, 0 0 60px #4285F440", "0 0 50px #4285F4, 0 0 100px #4285F460", "0 0 30px #4285F4, 0 0 60px #4285F440"] }} transition={{ duration: 2, repeat: Infinity }}>
           <Rocket className="w-14 h-14 text-white drop-shadow-lg rotate-[-45deg]" />
           <motion.div className="absolute -top-1 -right-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-black text-[10px] border border-white/50 shadow-lg uppercase tracking-wider"
             animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>MVP</motion.div>
         </motion.div>
         <div className="text-center">
           <div className="text-blue-400 font-black text-sm uppercase tracking-widest">INSTANT AGENT</div>
           <div className="text-[10px] text-blue-400/60 font-mono">Fullstack Solo</div>
         </div>
       </motion.div>

       {/* 4 Skill Orbs - Compass Positions (LITE) */}
       <motion.div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
         <SkillOrb color="from-cyan-500 to-blue-500" glowColor="#06b6d4" icon={Code2} label="FRONTEND" />
       </motion.div>
       <motion.div className="absolute top-[42%] right-[8%] z-20" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
         <SkillOrb color="from-purple-500 to-violet-500" glowColor="#8b5cf6" icon={Server} label="BACKEND" />
       </motion.div>
       <motion.div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-20" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
         <SkillOrb color="from-emerald-500 to-green-500" glowColor="#10b981" icon={Database} label="DATABASE" />
       </motion.div>
       <motion.div className="absolute top-[42%] left-[8%] z-20" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }}>
         <SkillOrb color="from-orange-500 to-red-500" glowColor="#f97316" icon={Zap} label="DEPLOY" />
       </motion.div>

       {/* Connection Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
         <defs>
           <linearGradient id="gradInstTop" x1="50%" y1="50%" x2="50%" y2="0%"><stop offset="0%" stopColor="#4285F4" stopOpacity="0.6" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" /></linearGradient>
           <linearGradient id="gradInstRight" x1="50%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stopColor="#4285F4" stopOpacity="0.6" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" /></linearGradient>
           <linearGradient id="gradInstBottom" x1="50%" y1="50%" x2="50%" y2="100%"><stop offset="0%" stopColor="#4285F4" stopOpacity="0.6" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.6" /></linearGradient>
           <linearGradient id="gradInstLeft" x1="50%" y1="50%" x2="0%" y2="50%"><stop offset="0%" stopColor="#4285F4" stopOpacity="0.6" /><stop offset="100%" stopColor="#f97316" stopOpacity="0.6" /></linearGradient>
         </defs>
         <motion.line x1="50%" y1="38%" x2="50%" y2="22%" stroke="url(#gradInstTop)" strokeWidth="2" filter="url(#glowBlue)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.5 }} />
         <motion.line x1="58%" y1="45%" x2="78%" y2="45%" stroke="url(#gradInstRight)" strokeWidth="2" filter="url(#glowBlue)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
         <motion.line x1="50%" y1="55%" x2="50%" y2="75%" stroke="url(#gradInstBottom)" strokeWidth="2" filter="url(#glowBlue)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
         <motion.line x1="42%" y1="45%" x2="22%" y2="45%" stroke="url(#gradInstLeft)" strokeWidth="2" filter="url(#glowBlue)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0, duration: 0.5 }} />
       </svg>

       {/* Flow Packets */}
       <div className="absolute inset-0 pointer-events-none z-15">
         <FlowPacket startX="50%" startY="40%" endX="50%" endY="20%" color="#06b6d4" delay={0} />
         <FlowPacket startX="55%" startY="45%" endX="80%" endY="45%" color="#8b5cf6" delay={0.5} />
         <FlowPacket startX="50%" startY="52%" endX="50%" endY="78%" color="#10b981" delay={1} />
         <FlowPacket startX="45%" startY="45%" endX="20%" endY="45%" color="#f97316" delay={1.5} />
       </div>
    </motion.div>
  );
}

// Skill Orb Component (for INSTANT mode)
function SkillOrb({ color, glowColor, icon: Icon, label }: { color: string, glowColor: string, icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center border-2 border-white/30 shadow-xl`}
        animate={{ boxShadow: [`0 0 15px ${glowColor}40`, `0 0 25px ${glowColor}60`, `0 0 15px ${glowColor}40`] }} transition={{ duration: 2, repeat: Infinity }} whileHover={{ scale: 1.1 }}>
        <Icon className="w-7 h-7 text-white drop-shadow-lg" />
      </motion.div>
      <div className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}

// Flow Packet Component 
function FlowPacket({ startX, startY, endX, endY, color, delay }: { startX: string, startY: string, endX: string, endY: string, color: string, delay: number }) {
  return (
    <motion.div className="absolute w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
      initial={{ left: startX, top: startY, opacity: 0 }}
      animate={{ left: [startX, endX], top: [startY, endY], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }} />
  );
}

// CREATIVE Mode Visualizer (FULL PREMIUM - 8 orbs)
function AgileSquadVisualizer() {
    const { t } = useLanguage();
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full relative flex items-center justify-center overflow-hidden"
      >
         {/* Spark Particles */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
           {[...Array(10)].map((_, i) => (
             <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
               style={{ background: i % 3 === 0 ? '#EA4335' : i % 3 === 1 ? '#4285F4' : '#34A853' }}
               animate={{ x: [0, (Math.random() - 0.5) * 80], y: [0, (Math.random() - 0.5) * 80], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
           ))}
         </div>

         {/* Conveyor Belt Ring */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
           <defs>
             <filter id="glowPurple"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
           </defs>
           <motion.circle cx="50%" cy="45%" r="130" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="15 10" opacity="0.6"
             animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} filter="url(#glowPurple)" />
           <motion.circle cx="50%" cy="45%" r="90" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="5 5" opacity="0.3"
             animate={{ strokeDashoffset: [0, 50] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
         </svg>

         {/* Synergy Counter - Top Right */}
         <motion.div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md border border-purple-400/30 rounded-lg px-4 py-2"
           initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
           <div className="text-[10px] text-purple-400/60 font-mono uppercase tracking-wider">Synergy</div>
           <div className="flex items-center gap-2">
             <motion.span className="text-xl font-black text-purple-400" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 1, repeat: Infinity }}>8x</motion.span>
             <span className="text-xs text-green-400 font-bold">🧠 FULL</span>
           </div>
         </motion.div>

         {/* Central Brain Orb */}
         <motion.div className="relative z-20 flex flex-col items-center gap-3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
           <motion.div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 flex items-center justify-center border-4 border-purple-300/50 relative"
             animate={{ boxShadow: ["0 0 30px #a855f7, 0 0 60px #a855f740", "0 0 50px #a855f7, 0 0 100px #a855f760", "0 0 30px #a855f7, 0 0 60px #a855f740"] }} transition={{ duration: 2, repeat: Infinity }}>
             <Brain className="w-12 h-12 text-white drop-shadow-lg" />
             <motion.div className="absolute -top-1 -right-1 px-2 py-1 rounded-full bg-black text-purple-400 font-black text-[10px] border border-purple-400/50 shadow-lg uppercase tracking-wider"
               animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>AI</motion.div>
           </motion.div>
           <div className="text-center">
             <div className="text-purple-400 font-black text-sm uppercase tracking-widest">CREATIVE BRAIN</div>
             <div className="text-[10px] text-purple-400/60 font-mono">Full Multi-Agent</div>
           </div>
         </motion.div>

         {/* 8 Role Orbs - FULL PREMIUM */}
         {/* Cardinal: PLAN */}
         <motion.div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-20" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
           <CreativeOrb color="from-red-500 to-orange-500" glowColor="#EA4335" icon={Lightbulb} label="PLAN" />
         </motion.div>
         {/* Cardinal: CODE */}
         <motion.div className="absolute top-[42%] right-[5%] z-20" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
           <CreativeOrb color="from-blue-500 to-cyan-500" glowColor="#4285F4" icon={Code2} label="CODE" />
         </motion.div>
         {/* Cardinal: REVIEW */}
         <motion.div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
           <CreativeOrb color="from-green-500 to-emerald-500" glowColor="#34A853" icon={CheckCircle2} label="REVIEW" />
         </motion.div>
         {/* Cardinal: OPTIMIZE */}
         <motion.div className="absolute top-[42%] left-[5%] z-20" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
           <CreativeOrb color="from-yellow-500 to-amber-500" glowColor="#FBBC04" icon={Sparkles} label="OPTIMIZE" />
         </motion.div>
         {/* Diagonal: DESIGN */}
         <motion.div className="absolute top-[18%] right-[12%] z-20" initial={{ x: 20, y: -20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
           <CreativeOrb color="from-pink-500 to-rose-500" glowColor="#ec4899" icon={Workflow} label="DESIGN" />
         </motion.div>
         {/* Diagonal: TEST */}
         <motion.div className="absolute bottom-[18%] right-[12%] z-20" initial={{ x: 20, y: 20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
           <CreativeOrb color="from-teal-500 to-cyan-500" glowColor="#14b8a6" icon={ShieldCheck} label="TEST" />
         </motion.div>
         {/* Diagonal: DEPLOY */}
         <motion.div className="absolute bottom-[18%] left-[12%] z-20" initial={{ x: -20, y: 20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.9 }}>
           <CreativeOrb color="from-orange-500 to-red-500" glowColor="#f97316" icon={Zap} label="DEPLOY" />
         </motion.div>
         {/* Diagonal: DATA */}
         <motion.div className="absolute top-[18%] left-[12%] z-20" initial={{ x: -20, y: -20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 1.0 }}>
           <CreativeOrb color="from-indigo-500 to-violet-500" glowColor="#6366f1" icon={Database} label="DATA" />
         </motion.div>

         {/* Connection Lines */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
           <defs>
             <linearGradient id="gradCTop" x1="50%" y1="50%" x2="50%" y2="0%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" /><stop offset="100%" stopColor="#EA4335" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradCRight" x1="50%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" /><stop offset="100%" stopColor="#4285F4" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradCBottom" x1="50%" y1="50%" x2="50%" y2="100%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" /><stop offset="100%" stopColor="#34A853" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradCLeft" x1="50%" y1="50%" x2="0%" y2="50%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" /><stop offset="100%" stopColor="#FBBC04" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradCTR" x1="50%" y1="50%" x2="85%" y2="15%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" /></linearGradient>
             <linearGradient id="gradCBR" x1="50%" y1="50%" x2="85%" y2="85%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" /><stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" /></linearGradient>
             <linearGradient id="gradCBL" x1="50%" y1="50%" x2="15%" y2="85%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" /><stop offset="100%" stopColor="#f97316" stopOpacity="0.4" /></linearGradient>
             <linearGradient id="gradCTL" x1="50%" y1="50%" x2="15%" y2="15%"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" /></linearGradient>
           </defs>
           {/* Cardinal */}
           <motion.line x1="50%" y1="38%" x2="50%" y2="18%" stroke="url(#gradCTop)" strokeWidth="2" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.4 }} />
           <motion.line x1="58%" y1="45%" x2="82%" y2="45%" stroke="url(#gradCRight)" strokeWidth="2" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.4 }} />
           <motion.line x1="50%" y1="55%" x2="50%" y2="78%" stroke="url(#gradCBottom)" strokeWidth="2" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.4 }} />
           <motion.line x1="42%" y1="45%" x2="18%" y2="45%" stroke="url(#gradCLeft)" strokeWidth="2" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
           {/* Diagonal */}
           <motion.line x1="55%" y1="40%" x2="72%" y2="25%" stroke="url(#gradCTR)" strokeWidth="1.5" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.4 }} />
           <motion.line x1="55%" y1="52%" x2="72%" y2="68%" stroke="url(#gradCBR)" strokeWidth="1.5" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.4 }} />
           <motion.line x1="45%" y1="52%" x2="28%" y2="68%" stroke="url(#gradCBL)" strokeWidth="1.5" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.4 }} />
           <motion.line x1="45%" y1="40%" x2="28%" y2="25%" stroke="url(#gradCTL)" strokeWidth="1.5" filter="url(#glowPurple)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0, duration: 0.4 }} />
         </svg>

         {/* Flow Packets - All 8 */}
         <div className="absolute inset-0 pointer-events-none z-15">
           <FlowPacket startX="50%" startY="40%" endX="50%" endY="16%" color="#EA4335" delay={0} />
           <FlowPacket startX="55%" startY="45%" endX="84%" endY="45%" color="#4285F4" delay={0.4} />
           <FlowPacket startX="50%" startY="52%" endX="50%" endY="80%" color="#34A853" delay={0.8} />
           <FlowPacket startX="45%" startY="45%" endX="16%" endY="45%" color="#FBBC04" delay={1.2} />
           <FlowPacket startX="54%" startY="41%" endX="74%" endY="23%" color="#ec4899" delay={1.6} />
           <FlowPacket startX="54%" startY="51%" endX="74%" endY="70%" color="#14b8a6" delay={2.0} />
           <FlowPacket startX="46%" startY="51%" endX="26%" endY="70%" color="#f97316" delay={2.4} />
           <FlowPacket startX="46%" startY="41%" endX="26%" endY="23%" color="#6366f1" delay={2.8} />
         </div>
      </motion.div>
    );
}

// Creative Orb Component (for CREATIVE mode)
function CreativeOrb({ color, glowColor, icon: Icon, label }: { color: string, glowColor: string, icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center border-2 border-white/30 shadow-xl`}
        animate={{ boxShadow: [`0 0 15px ${glowColor}40`, `0 0 25px ${glowColor}60`, `0 0 15px ${glowColor}40`] }} transition={{ duration: 2, repeat: Infinity }} whileHover={{ scale: 1.1 }}>
        <Icon className="w-7 h-7 text-white drop-shadow-lg" />
      </motion.div>
      <div className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}

// Helper for animating packets along a path
function PacketPath({ path, color, delay }: { path: string, color: string, delay: number }) {
   // Convert simplified "M x1 y1 L x2 y2" (percentages) to 0-1 range for motion if needed, 
   // but Framer's offsetPath isn't simple with percentages in SVG.
   // Instead, we simply animate a circle along the known percentage coordinates.
   
   // Actually, standard SVG coordinates in motion are easiest. 
   // Since we can't easily predict pixel size for `d` path in responsive container, 
   // we will use a simpler absolute animation approach for the packets based on the same start/end logic
   
   const isHorizontal = path.includes("L 80 70"); // Bottom line
   const isLeftDown = path.includes("M 50 30 L 20 70");
   
   // Coordinates corresponding to our lines: 
   // Top: 50% 30%
   // Left: 20% 70%
   // Right: 80% 70%
   
   let initial = {}, animate = {};
   
   if (isLeftDown) { // Planner -> Specialist
       initial = { top: "30%", left: "50%" };
       animate = { top: "70%", left: "20%" };
   } else if (isHorizontal) { // Specialist -> Inspector
       initial = { top: "70%", left: "20%" };
       animate = { top: "70%", left: "80%" };
   } else { // Inspector -> Planner
       initial = { top: "70%", left: "80%" };
       animate = { top: "30%", left: "50%" };
   }

   return (
      <motion.div
        className="absolute w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] z-10"
        style={{ backgroundColor: color }}
        initial={initial}
        animate={animate}
        transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4, // Wait for other 2 segments -> Total cycle 6s
            delay: delay
        }}
      />
   )
}

// SME Mode Visualizer (STANDARD - 6 orbs)
function SoftwareFactoryVisualizer() {
    const { t } = useLanguage();
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full relative flex items-center justify-center overflow-hidden"
      >
         {/* Hexagonal Grid Background */}
         <div className="absolute inset-0 opacity-10">
           <svg width="100%" height="100%" className="absolute inset-0">
             <defs>
               <pattern id="hexGrid" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                 <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="#FBBC04" strokeWidth="0.5" />
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#hexGrid)" />
           </svg>
         </div>

         {/* Conveyor Belt Ring */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
           <defs>
             <filter id="glowGold"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
           </defs>
           <motion.circle cx="50%" cy="45%" r="125" fill="none" stroke="#FBBC04" strokeWidth="3" strokeDasharray="15 10" opacity="0.6"
             animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} filter="url(#glowGold)" />
           <motion.circle cx="50%" cy="45%" r="85" fill="none" stroke="#FBBC04" strokeWidth="1" strokeDasharray="5 5" opacity="0.3"
             animate={{ strokeDashoffset: [0, 50] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
         </svg>

         {/* Production Counter - Top Right */}
         <motion.div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md border border-yellow-400/30 rounded-lg px-4 py-2"
           initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
           <div className="text-[10px] text-yellow-400/60 font-mono uppercase tracking-wider">Production</div>
           <div className="flex items-center gap-2">
             <motion.span className="text-xl font-black text-yellow-400" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 1, repeat: Infinity }}>6x</motion.span>
             <span className="text-xs text-green-400 font-bold">▲ ACTIVE</span>
           </div>
         </motion.div>

         {/* Central Crown Orb */}
         <motion.div className="relative z-20 flex flex-col items-center gap-3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
           <motion.div className="w-26 h-26 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center border-4 border-yellow-300/50 relative"
             style={{ width: '6.5rem', height: '6.5rem' }}
             animate={{ boxShadow: ["0 0 30px #FBBC04, 0 0 60px #FBBC0440", "0 0 50px #FBBC04, 0 0 100px #FBBC0460", "0 0 30px #FBBC04, 0 0 60px #FBBC0440"] }} transition={{ duration: 2, repeat: Infinity }}>
             <Crown className="w-12 h-12 text-white drop-shadow-lg" />
             <motion.div className="absolute -top-1 -right-1 px-2 py-1 rounded-full bg-black text-yellow-400 font-black text-[10px] border border-yellow-400/50 shadow-lg uppercase tracking-wider"
               animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>SME</motion.div>
           </motion.div>
           <div className="text-center">
             <div className="text-yellow-400 font-black text-sm uppercase tracking-widest">{t('home.architecture.visualizer.factory.orchestrator')}</div>
             <div className="text-[10px] text-yellow-400/60 font-mono">{t('home.architecture.visualizer.factory.strategy')}</div>
           </div>
         </motion.div>

         {/* 6 PDCA+ Orbs - STANDARD */}
         {/* Cardinal: PLAN */}
         <motion.div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
           <PDCAOrb color="from-red-500 to-rose-600" glowColor="#ef4444" letter="P" label="PLAN" />
         </motion.div>
         {/* Cardinal: DO */}
         <motion.div className="absolute top-[42%] right-[6%] z-20" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
           <PDCAOrb color="from-yellow-500 to-amber-600" glowColor="#eab308" letter="D" label="DO" />
         </motion.div>
         {/* Cardinal: CHECK */}
         <motion.div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
           <PDCAOrb color="from-green-500 to-emerald-600" glowColor="#22c55e" letter="C" label="CHECK" />
         </motion.div>
         {/* Cardinal: ACT */}
         <motion.div className="absolute top-[42%] left-[6%] z-20" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
           <PDCAOrb color="from-cyan-500 to-blue-600" glowColor="#06b6d4" letter="A" label="ACT" />
         </motion.div>
         {/* Diagonal: SECURE */}
         <motion.div className="absolute top-[20%] right-[12%] z-20" initial={{ x: 20, y: -20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
           <PDCAOrb color="from-purple-500 to-violet-600" glowColor="#8b5cf6" letter="S" label="SECURE" />
         </motion.div>
         {/* Diagonal: MONITOR */}
         <motion.div className="absolute bottom-[20%] right-[12%] z-20" initial={{ x: 20, y: 20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.9 }}>
           <PDCAOrb color="from-pink-500 to-rose-600" glowColor="#ec4899" letter="M" label="MONITOR" />
         </motion.div>

         {/* Connection Lines */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
           <defs>
             <linearGradient id="gradSTop" x1="50%" y1="50%" x2="50%" y2="0%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.6" /><stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradSRight" x1="50%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.6" /><stop offset="100%" stopColor="#eab308" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradSBottom" x1="50%" y1="50%" x2="50%" y2="100%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.6" /><stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradSLeft" x1="50%" y1="50%" x2="0%" y2="50%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.6" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" /></linearGradient>
             <linearGradient id="gradSTR" x1="50%" y1="50%" x2="85%" y2="20%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.4" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" /></linearGradient>
             <linearGradient id="gradSBR" x1="50%" y1="50%" x2="85%" y2="80%"><stop offset="0%" stopColor="#FBBC04" stopOpacity="0.4" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" /></linearGradient>
           </defs>
           {/* Cardinal */}
           <motion.line x1="50%" y1="36%" x2="50%" y2="20%" stroke="url(#gradSTop)" strokeWidth="2" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.4 }} />
           <motion.line x1="58%" y1="45%" x2="80%" y2="45%" stroke="url(#gradSRight)" strokeWidth="2" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.4 }} />
           <motion.line x1="50%" y1="56%" x2="50%" y2="76%" stroke="url(#gradSBottom)" strokeWidth="2" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
           <motion.line x1="42%" y1="45%" x2="20%" y2="45%" stroke="url(#gradSLeft)" strokeWidth="2" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.4 }} />
           {/* Diagonal */}
           <motion.line x1="55%" y1="40%" x2="72%" y2="27%" stroke="url(#gradSTR)" strokeWidth="1.5" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.4 }} />
           <motion.line x1="55%" y1="52%" x2="72%" y2="68%" stroke="url(#gradSBR)" strokeWidth="1.5" filter="url(#glowGold)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.4 }} />
         </svg>

         {/* Flow Packets - All 6 */}
         <div className="absolute inset-0 pointer-events-none z-15">
           <FlowPacket startX="50%" startY="38%" endX="50%" endY="18%" color="#ef4444" delay={0} />
           <FlowPacket startX="55%" startY="45%" endX="82%" endY="45%" color="#eab308" delay={0.5} />
           <FlowPacket startX="50%" startY="54%" endX="50%" endY="78%" color="#22c55e" delay={1} />
           <FlowPacket startX="45%" startY="45%" endX="18%" endY="45%" color="#06b6d4" delay={1.5} />
           <FlowPacket startX="54%" startY="41%" endX="74%" endY="25%" color="#8b5cf6" delay={2} />
           <FlowPacket startX="54%" startY="51%" endX="74%" endY="70%" color="#ec4899" delay={2.5} />
         </div>
      </motion.div>
    );
}

// PDCA Orb Component (for SME mode)
function PDCAOrb({ color, glowColor, letter, label }: { color: string, glowColor: string, letter: string, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center border-2 border-white/30 shadow-xl relative`}
        animate={{ boxShadow: [`0 0 15px ${glowColor}40`, `0 0 25px ${glowColor}60`, `0 0 15px ${glowColor}40`] }} transition={{ duration: 2, repeat: Infinity }} whileHover={{ scale: 1.1 }}>
        <span className="text-xl font-black text-white drop-shadow-lg">{letter}</span>
      </motion.div>
      <div className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}

function OrgNode({ icon: Icon, title, subtitle, color, isRoot, vertical }: { icon: any, title: string, subtitle: string, color: string, isRoot?: boolean, vertical?: boolean }) {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center rounded-xl border backdrop-blur-md shadow-2xl transition-all hover:scale-105",
             isRoot ? "w-48 h-24 p-4 bg-white/5 border-yellow-500/50" : "w-full py-3 px-2 bg-[#0A0A0A] border-white/10"
        )}>
           <div className={cn("flex items-center gap-2", vertical ? "flex-col text-center" : "flex-row text-left")}>
              <div className={cn("p-1.5 rounded-lg text-white shadow-lg", color)}>
                 <Icon className={cn("text-white", isRoot ? "w-7 h-7" : "w-5 h-5")} />
              </div>
              <div>
                  <div className={cn("font-bold text-white uppercase leading-none mb-0.5", isRoot ? "text-sm" : "text-[11px]")}>{title}</div>
                  <div className="text-[9px] text-white/50 font-mono">{subtitle}</div>
              </div>
           </div>
        </div>
    )
}

function AgentMiniCard({ role }: { role: string }) {
    return (
        <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded-full w-full justify-center">
             <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse shrink-0" />
             <span className="text-[10px] text-white/70 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{role}</span>
        </div>
    )
}


// ... (Rest of the file)

function FactoryPacket({ pathX, pathY, delay, color }: { pathX: string[], pathY: string[], delay: number, color: string }) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const sequence = async () => {
            const safeAnimate = async (target: any, props: any, options?: any) => {
                if (!target) return;
                try {
                    await animate(target, props, options);
                } catch (e) {
                    // Ignore errors if component is unmounted
                }
            };

            // Initial State (Hidden)
            await safeAnimate(scope.current, { opacity: 0, left: pathX[0], top: pathY[0] }, { duration: 0 });
            
            // Wait for start delay
            if (delay > 0) {
                 await new Promise(resolve => setTimeout(resolve, delay * 1000));
            }

            while (scope.current) { // Infinite Loop
                // Reset to start
                await safeAnimate(scope.current, { opacity: 0, left: pathX[0], top: pathY[0] }, { duration: 0 });
                
                // Appear
                await safeAnimate(scope.current, { opacity: 1 }, { duration: 0.2 });

                // Segment 1: Vertical Down (0 -> 1)
                // Duration: 0.6s
                if (pathY[1] !== pathY[0]) {
                     await safeAnimate(scope.current, { top: pathY[1] }, { duration: 0.6, ease: "linear" });
                } else {
                     await new Promise(r => setTimeout(r, 600));
                }

                if (!scope.current) break;

                // Segment 2: Horizontal (1 -> 2)
                // Duration: 1.8s
                if (pathX[2] && pathX[2] !== pathX[1]) {
                    await safeAnimate(scope.current, { left: pathX[2] }, { duration: 1.8, ease: "linear" });
                } else {
                    await new Promise(r => setTimeout(r, 1800));
                }

                if (!scope.current) break;

                // Segment 3: Vertical Final (2 -> 3)
                // Duration: 0.6s
                if (pathY[3] && pathY[3] !== pathY[2]) {
                    await safeAnimate(scope.current, { top: pathY[3] }, { duration: 0.6, ease: "linear" });
                } else {
                     await new Promise(r => setTimeout(r, 600));
                }

                if (!scope.current) break;

                // Disappear
                await safeAnimate(scope.current, { opacity: 0 }, { duration: 0.2 });
                
                // Loop Delay
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };

        sequence();
        
        return () => {
             // Cleanup handled by scope check 
        };
    }, []);

    return (
        <div
            ref={scope}
            className="absolute w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] z-10 -ml-[4px] -mt-[4px] opacity-0"
            style={{ backgroundColor: color }}
        />
    )
}

// --- HELPER COMPONENTS ---

function OrbitingNode({ startAngle, icon: Icon, label, color }: { startAngle: number, icon: any, label: string, color: string }) {
    // Radius of the orbit
    const radius = 140; 

    return (
        <motion.div 
           // Container placed at center
           className="absolute top-1/2 left-1/2" 
           style={{ width: 0, height: 0 }}
           // Rotate the entire container
           initial={{ rotate: startAngle }}
           animate={{ rotate: startAngle + 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {/* The satellite positioned at radius distance */}
            <motion.div 
                className="absolute flex flex-col items-center justify-center w-12"
                style={{ 
                    // Push it out to the radius distance
                    x: radius, 
                    y: -24, // Half of height (approx) to center vertically
                }}
                // Counter-rotate the satellite itself to keep it upright
                initial={{ rotate: -startAngle }}
                animate={{ rotate: -startAngle - 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                 <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg border border-white/20 z-10 box-content", color)}>
                    <Icon className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-black text-white/90 mt-2 tracking-wider bg-black/60 px-2 py-0.5 rounded-sm border border-white/10 shadow-sm backdrop-blur-sm whitespace-nowrap z-10">
                    {label}
                 </span>
            </motion.div>
        </motion.div>
    )
}

function SquadNode({ color, icon: Icon, role, task }: { color: string, icon: any, role: string, task: string }) {
    return (
        <div className="flex flex-col items-center gap-3 relative group cursor-default hover:scale-105 transition-transform">
            <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10", color)}>
                <Icon className="text-white w-10 h-10" />
            </div>
            <div className="text-center">
               <div className="font-black text-white text-xs uppercase tracking-widest mb-1 mt-1">{role}</div>
               <div className="text-[10px] text-white/50 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">{task}</div>
            </div>
        </div>
    )
}


