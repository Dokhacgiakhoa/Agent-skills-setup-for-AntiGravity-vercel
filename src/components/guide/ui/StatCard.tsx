import React from "react";

interface StatCardProps {
  number: string;
  label: string;
  sublabel: string;
  color?: string;
}

export function StatCard({ number, label, sublabel, color = "amber" }: StatCardProps) {
  const colors: Record<string, string> = {
    blue: "text-[#6F00FF]",
    emerald: "text-[#6F00FF]",
    amber: "text-[#6F00FF]",
    rose: "text-[#6F00FF]"
  };
  
  const textColor = colors[color] || colors.amber;

  return (
    <div className="card-glass p-10 text-center space-y-3 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] transition-all rounded-[2.5rem] border border-white/5 shadow-2xl group">
      <div className={`text-5xl md:text-6xl font-black ${textColor} tracking-tighter group-hover:scale-110 transition-transform italic`}>{number}</div>
      <div className="text-white font-black text-base uppercase tracking-widest">{label}</div>
      <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{sublabel}</div>
    </div>
  );
}
