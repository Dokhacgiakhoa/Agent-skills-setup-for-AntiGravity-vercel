import React from "react";

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  color?: string;
}

export function ConceptCard({ icon, title, desc, features, color = "emerald" }: ConceptCardProps) {
  const colors: Record<string, { border: string; bg: string; iconBg: string; text: string; dot: string }> = {
    sky: { 
      border: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50", 
      bg: "bg-[#6F00FF]/5", 
      iconBg: "bg-[#6F00FF]/10",
      text: "text-[#6F00FF]",
      dot: "bg-[#6F00FF]"
    },
    amber: { 
      border: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50", 
      bg: "bg-[#6F00FF]/5", 
      iconBg: "bg-[#6F00FF]/10",
      text: "text-[#6F00FF]", 
      dot: "bg-[#6F00FF]"
    },
    rose: { 
      border: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50", 
      bg: "bg-[#6F00FF]/5", 
      iconBg: "bg-[#6F00FF]/10",
      text: "text-[#6F00FF]", 
      dot: "bg-[#6F00FF]"
    },
    emerald: { 
      border: "border-[#6F00FF]/20 hover:border-[#6F00FF]/50", 
      bg: "bg-[#6F00FF]/5", 
      iconBg: "bg-[#6F00FF]/10",
      text: "text-[#6F00FF]", 
      dot: "bg-[#6F00FF]"
    },
  };

  const c = colors[color] || colors.emerald;

  return (
    <div className={`card-glass p-8 space-y-6 ${c.bg} border ${c.border} hover:bg-black/40 transition-all group relative overflow-hidden rounded-3xl shadow-xl`}>
      <div className={`w-16 h-16 rounded-2xl ${c.iconBg} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className={`text-xl font-black text-white italic whitespace-nowrap group-hover:${c.text} transition-colors tracking-tight`}>{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed font-medium">{desc}</p>
      </div>
      <ul className="space-y-3 pt-6 border-t border-white/5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-white/70 text-sm">
            <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0 shadow-[0_0_8px_${c.dot.replace('bg-', '')}]`} />
            <span className="font-medium leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
