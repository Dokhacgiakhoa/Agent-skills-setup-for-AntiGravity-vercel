"use client";

import { useState } from "react";
import { Zap, Cpu, ShieldCheck, Sparkles, Settings, ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkflowExplorer() {
  const [activeCategory, setActiveCategory] = useState("Core");

  const categories = [
    { id: "Core", label: "Cốt lõi", icon: <Zap className="w-4 h-4" /> },
    { id: "Builder", label: "Xây dựng", icon: <Cpu className="w-4 h-4" /> },
    { id: "Enterprise", label: "Doanh nghiệp", icon: <ShieldCheck className="w-4 h-4" /> },
    { id: "Growth", label: "Tăng trưởng", icon: <Sparkles className="w-4 h-4" /> },
    { id: "Ops", label: "Vận hành", icon: <Settings className="w-4 h-4" /> }
  ];

  const workflows: any = {
    "Core": [
      { cmd: "/brainstorm", name: "Khởi tạo ý tưởng", desc: "Khi bí ý tưởng, cần AI gợi ý giải pháp.", usage: "/brainstorm [ý tưởng]" },
      { cmd: "/plan", name: "Lập kế hoạch", desc: "Phân tích yêu cầu và chia nhỏ task.", usage: "/plan [tên tính năng]" },
      { cmd: "/status", name: "Dashboard", desc: "Xem sức khỏe dự án và tiến độ.", usage: "/status" },
      { cmd: "/debug", name: "Gỡ lỗi thông minh", desc: "Phân tích log và sửa lỗi khó.", usage: "/debug [log lỗi]" }
    ],
    "Builder": [
      { cmd: "/create", name: "Tạo tính năng", desc: "Build module hoàn chỉnh (Frontend + Backend).", usage: "/create [tên module]" },
      { cmd: "/enhance", name: "Nâng cấp", desc: "Thêm nút bấm, đổi màu, sửa logic nhỏ.", usage: "/enhance [yêu cầu]" },
      { cmd: "/orchestrate", name: "Điều phối Agent", desc: "Giải quyết bài toán lớn với nhiều chuyên gia.", usage: "/orchestrate [yêu cầu phức tạp]" }
    ],
    "Enterprise": [
      { cmd: "/audit", name: "Tổng kiểm tra", desc: "Check Security, SEO, Performance trước bàn giao.", usage: "/audit" },
      { cmd: "/security", name: "Bảo mật chuyên sâu", desc: "Quét lỗ hổng và hardening hệ thống.", usage: "/security scan" },
      { cmd: "/test", name: "Kiểm thử tự động", desc: "Viết Unit Test, E2E Test.", usage: "/test [module]" }
    ],
    "Growth": [
      { cmd: "/ui-ux-pro-max", name: "Thiết kế đỉnh cao", desc: "Tạo giao diện đẹp như tranh (Linear/Magic UI).", usage: "/ui-ux-pro-max [mô tả]" },
      { cmd: "/seo", name: "Tối ưu tìm kiếm", desc: "Tạo Sitemap, Schema, Meta tags để lên Top Google.", usage: "/seo audit" }
    ],
    "Ops": [
      { cmd: "/onboard", name: "Hướng dẫn người mới", desc: "Tạo tài liệu và giải thích code cho Newbie.", usage: "/onboard" },
      { cmd: "/document", name: "Viết tài liệu", desc: "Tự động update README, API Docs.", usage: "/document all" },
      { cmd: "/monitor", name: "Giám sát", desc: "Setup logging, theo dõi lỗi Production.", usage: "/monitor setup" },
      { cmd: "/deploy", name: "Phát hành", desc: "Deploy lên Vercel, VPS, Docker.", usage: "/deploy" }
    ]
  };

  return (
    <section className="space-y-12 max-w-6xl mx-auto py-12 border-t border-white/5">
       <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-[#6F00FF]/10 text-[#6F00FF] text-xs font-black uppercase tracking-widest border border-[#6F00FF]/20">Phase 5</div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Làm chủ Workflow</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">Hệ thống 17 quy trình chuẩn hóa giúp bạn code nhanh gấp 10 lần.</p>
       </div>

       {/* Tabs */}
       <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
             <button
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={cn(
                 "px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all",
                 activeCategory === cat.id 
                   ? "bg-[#6F00FF] text-white shadow-[0_0_20px_rgba(111,0,255,0.4)] scale-105" 
                   : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
               )}
             >
               {cat.icon} {cat.label}
             </button>
          ))}
       </div>

       {/* Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {workflows[activeCategory]?.map((wf: any, idx: number) => (
             <div key={idx} className="card-glass p-8 group hover:bg-white/5 transition-all duration-300 border-white/5 hover:border-[#6F00FF]/30">
                <div className="flex items-start justify-between mb-4">
                   <code className="px-3 py-1 bg-black/40 rounded-lg text-[#6F00FF] font-mono font-bold text-lg border border-white/10 group-hover:border-[#6F00FF]/50 transition-colors">
                     {wf.cmd}
                   </code>
                   <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#6F00FF]/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#6F00FF]" />
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{wf.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 h-10">{wf.desc}</p>
                
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/30">
                   <Terminal className="w-3 h-3" />
                   <span>Usage:</span>
                   <span className="text-white/60">{wf.usage}</span>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
}
