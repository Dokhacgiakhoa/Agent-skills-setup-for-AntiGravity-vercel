import React from "react";
import { Terminal } from "lucide-react";

interface CommandCardProps {
  cmd: string;
  desc: string;
  color: string;
}

export function CommandCard({ cmd, desc, color }: CommandCardProps) {
  const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    red: { bg: 'bg-[#6F00FF]/10', border: 'border-[#6F00FF]/20', text: 'text-[#6F00FF]', glow: 'shadow-[#6F00FF]/10' },
    yellow: { bg: 'bg-[#6F00FF]/10', border: 'border-[#6F00FF]/20', text: 'text-[#6F00FF]', glow: 'shadow-[#6F00FF]/10' },
    green: { bg: 'bg-[#6F00FF]/10', border: 'border-[#6F00FF]/20', text: 'text-[#6F00FF]', glow: 'shadow-[#6F00FF]/10' },
    blue: { bg: 'bg-[#6F00FF]/10', border: 'border-[#6F00FF]/20', text: 'text-[#6F00FF]', glow: 'shadow-[#6F00FF]/10' },
  };
  
  const c = colors[color] || colors.blue;
  
  return (
    <div className={`card-glass p-8 space-y-4 ${c.bg} border ${c.border} hover:scale-[1.02] hover:${c.glow} transition-all group cursor-pointer h-full flex flex-col justify-center min-h-[160px] rounded-[2rem] shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${c.bg} border ${c.border} shadow-sm group-hover:rotate-6 transition-transform`}>
          <Terminal className={`h-5 w-5 ${c.text}`} />
        </div>
        <code className={`font-black text-lg ${c.text} tracking-tighter italic`}>{cmd}</code>
      </div>
      <p className="text-white/70 text-sm leading-relaxed font-semibold pl-12">{desc}</p>
    </div>
  );
}
