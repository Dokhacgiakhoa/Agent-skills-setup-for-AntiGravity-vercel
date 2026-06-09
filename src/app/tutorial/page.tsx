"use client";

import { useState } from "react";
import { 
  Download, Settings, User, Palette, Cpu, Monitor, Globe, FileText, 
  CheckCircle, AlertCircle, Info, Zap, Chrome, Terminal, Rocket,
  ArrowRight, ShieldCheck, Laptop, ChevronRight, PlayCircle, Brain,
  Layers, Database, Sparkles, Bot, Users, Building, Activity
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WorkflowExplorer from "./WorkflowExplorer";
import { TerminalBlock } from "@/components/ui/terminal-block";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

// ... imports

export default function TutorialPage() {
  const { t } = useLanguage();

  return (
    <div className="page-container mt-8 space-y-12 pb-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 bg-[#FCD34D]/10 border border-[#FCD34D]/20 px-6 py-2 rounded-full text-[#FCD34D] text-xs font-black tracking-widest uppercase"
        >
          <Rocket className="h-4 w-4" />
          {t('tutorial.badge')}
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {t('tutorial.headerTitle')} <span className="text-white">{t('tutorial.headerHighlight')}</span>
        </h1>
        
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          {t('tutorial.headerDesc')}
        </p>
      </section>

      {/* Steps Timeline */}
      <div className="relative w-full mx-auto space-y-4">
        
           <div className="relative z-10 pt-4 pb-1 text-center">
             <div className="inline-block px-6 py-2 rounded-full bg-rose-500/10 text-rose-400 text-base font-black uppercase tracking-widest border border-rose-500/20 mb-3">{t('tutorial.phase1.badge')}</div>
             <h2 className="text-3xl md:text-4xl font-black text-rose-400 italic uppercase tracking-tighter leading-none mb-2">{t('tutorial.phase1.title')}</h2>
             <p className="text-white/70 text-lg leading-normal font-light max-w-xl mx-auto">
               {t('tutorial.phase1.desc')}
             </p>
          </div>

        {/* Step 1: Download IDE */}
        <section className="space-y-6 relative">

          <div className="grid md:grid-cols-3 gap-6">
            <OSCard 
              icon={<Monitor className="text-cyan-400 h-8 w-8" />} 
              name="Windows" 
              color="cyan" 
              steps={["Universal Windows Platform", "64-bit Architecture", "Windows AI Ready"]}
              downloads={[
                { label: `Windows (x64)`, url: "https://edgedl.me.gvt1.com/edgedl/release2/j0qc3/antigravity/stable/1.16.5-6703236727046144/windows-x64/Antigravity.exe" },
                { label: `Windows (ARM64)`, url: "https://edgedl.me.gvt1.com/edgedl/release2/j0qc3/antigravity/stable/1.16.5-6703236727046144/windows-arm64/Antigravity.exe" }
              ]}
              copyText={t('tutorial.download')}
            />
            <OSCard 
              icon={<Laptop className="text-[#FCD34D] h-8 w-8" />} 
              name="macOS" 
              color="gold" 
              steps={["Apple Silicon (M1/M2/M3)", "Intel Chip Architecture", "Signed & Notarized"]}
              downloads={[
                { label: `macOS (Apple Silicon)`, url: "https://edgedl.me.gvt1.com/edgedl/release2/j0qc3/antigravity/stable/1.16.5-6703236727046144/darwin-arm/Antigravity.dmg" },
                { label: `macOS (Intel)`, url: "https://edgedl.me.gvt1.com/edgedl/release2/j0qc3/antigravity/stable/1.16.5-6703236727046144/darwin-x64/Antigravity.dmg" }
              ]}
              copyText={t('tutorial.download')}
            />
            <OSCard 
              icon={<Globe className="text-emerald-500 h-8 w-8" />} 
              name="Linux" 
              color="emerald" 
              steps={["AppImage Portable", "Debian Package (.deb)", "RPM Package (.rpm)"]}
              downloads={[
                { label: "Linux", url: "https://antigravity.google/download/linux" }
              ]}
              copyText={t('tutorial.download')}
            />
          </div>
          
          {/* Screenshot Preview */}
          <div className="mt-6 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-rose-500/5">
            <Image 
              src="/antigravity-ide.png"
              alt="Agent skills setup for AntiGravity Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Phase 2 Header - Node.js */}
        <div className="text-center space-y-3 pt-8 border-t border-white/5">
            <div className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-base font-black uppercase tracking-widest border border-cyan-500/20">{t('tutorial.phase2.badge')}</div>
            <h2 className="text-3xl md:text-4xl font-black text-cyan-400 italic uppercase tracking-tighter">{t('tutorial.phase2.title')}</h2>
            <p className="text-white/40 text-base leading-relaxed font-light max-w-xl mx-auto">
               {t('tutorial.phase2.desc')}
            </p>
         </div>

         {/* Step 2: Node.js Download */}
         <section className="max-w-4xl mx-auto">
            <div className="card-glass p-8 md:p-12 border-cyan-500/20 bg-cyan-500/5 flex flex-col md:flex-row items-center gap-8 group">
               <div className="w-24 h-24 rounded-[2rem] bg-black/40 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" 
                    alt="Node.js" 
                    width={64} 
                    height={64}
                    className="brightness-110"
                  />
               </div>
               <div className="flex-grow text-center md:text-left space-y-4">
                  <h3 className="text-2xl font-black text-white">Node.js LTS (Long Term Support)</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                    {t('tutorial.phase2.desc')}
                  </p>
               </div>
               <Link 
                 href="https://nodejs.org/" 
                 target="_blank"
                 className="btn-emerald h-16 px-10 rounded-2xl shadow-xl hover:scale-105 transition-all shrink-0 flex items-center gap-3"
               >
                  <Download className="w-5 h-5" />
                  {t('tutorial.phase2.action')}
               </Link>
            </div>
         </section>

         {/* Phase 3 Header */}
         <div className="text-center space-y-3 pt-8 border-t border-white/5">
           <div className="inline-block px-6 py-2 rounded-full bg-amber-500/10 text-amber-400 text-base font-black uppercase tracking-widest border border-amber-500/20">{t('tutorial.phase3.badge')}</div>
           <h2 className="text-3xl md:text-4xl font-black text-amber-400 italic uppercase tracking-tighter">{t('tutorial.phase3.title')}</h2>
         </div>

        {/* Step 3: Khởi tạo Project */}
        <section className="space-y-6">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-amber-400 italic uppercase leading-tight">{t('tutorial.phase3.subtitle')}</h3>
            <p className="text-white/40 text-base leading-relaxed font-light mt-2 max-w-2xl">
              {t('tutorial.phase3.subdesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {/* Way 01 - Emerald (Fresh Start) */}
             <div className="space-y-6 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-black border border-emerald-500/30 uppercase tracking-tighter">{t('tutorial.methods.way1')}</div>
                   <div>
                      <h4 className="text-emerald-400 font-black text-xl italic uppercase tracking-tight mb-2">{t('tutorial.methods.way1Title')}</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">{t('tutorial.methods.way1Desc')}</p>
                   </div>
                </div>
                 <TerminalBlock command="npx agent-skills-setup-for-antigravity my_project" />
             </div>

             {/* Way 02 - Sky (Modern Integration) */}
             <div className="space-y-6 p-8 rounded-3xl bg-sky-500/5 border border-sky-500/10 hover:bg-sky-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs font-black border border-sky-500/30 uppercase tracking-tighter">{t('tutorial.methods.way2')}</div>
                   <div>
                      <h4 className="text-sky-400 font-black text-xl italic uppercase tracking-tight mb-2">{t('tutorial.methods.way2Title')}</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">{t('tutorial.methods.way2Desc')}</p>
                   </div>
                </div>
                 <TerminalBlock command="npx agent-skills-setup-for-antigravity" />
             </div>

             {/* Way 03 - Amber (Maintenance) */}
             <div className="space-y-6 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10 transition-all flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                   <div className="px-3 py-1 inline-block rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs font-black border border-amber-500/30 uppercase tracking-tighter">{t('tutorial.methods.way3')}</div>
                   <div>
                      <h4 className="text-amber-400 font-black text-xl italic uppercase tracking-tight mb-2">{t('tutorial.methods.way3Title')}</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">{t('tutorial.methods.way3Desc')}</p>
                   </div>
                </div>
                 <TerminalBlock command="npx agent-skills-setup-for-antigravity update" />
             </div>
          </div>
        </section>


        {/* Full Width Setup Wizard Section Content */}
        <section className="py-8 border-t border-white/5">
           <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent italic uppercase leading-tight">{t('tutorial.wizard.title')}</h3>
              <p className="text-white/70 text-lg font-light leading-normal mt-2 max-w-xl mx-auto">
                 {t('tutorial.wizard.desc')}
              </p>
           </div>
           
           {/* Creative Roadmap Timeline Design */}
           <div className="relative">
              {/* Main Timeline Track */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-2 rounded-full bg-gradient-to-r from-rose-600 via-amber-500 via-emerald-500 to-sky-500 shadow-lg" />
              
              {/* Animated Glow Effect */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-2 rounded-full bg-gradient-to-r from-rose-600 via-amber-500 via-emerald-500 to-sky-500 blur-md opacity-50" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                 {/* Step 01 - Bold Card */}
                 <div className="group relative">
                    {/* Giant Number */}
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center shadow-2xl shadow-rose-500/50 z-20 rotate-[-6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-white font-black text-3xl">B1</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-rose-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-rose-500/10 group-hover:border-rose-400 group-hover:shadow-rose-500/30 transition-all">
                       <h4 className="text-rose-400 font-black text-xl uppercase tracking-wider mb-4">{t('tutorial.wizard.step1')}</h4>
                       <p className="text-white/50 text-sm mb-5">{t('tutorial.wizard.step1Desc')}</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30">
                             <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
                                <span className="text-black font-black text-sm">VI</span>
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">{t('tutorial.wizard.languages.vi.label')}</span>
                                <span className="text-white/60 text-xs">{t('tutorial.wizard.languages.vi.desc')}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30">
                             <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
                                <span className="text-black font-black text-sm">EN</span>
                             </div>
                             <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-wide">{t('tutorial.wizard.languages.en.label')}</span>
                    <span className="text-white/60 text-xs">{t('tutorial.wizard.languages.en.desc')}</span>
                  </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 02 - Bold Card */}
                 <div className="group relative lg:mt-12">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/50 z-20 rotate-[6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B2</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-amber-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-amber-500/10 group-hover:border-amber-400 group-hover:shadow-amber-500/30 transition-all">
                       <h4 className="text-amber-400 font-black text-xl uppercase tracking-wider mb-4">{t('tutorial.wizard.step2')}</h4>
                       <p className="text-white/50 text-sm mb-5">{t('tutorial.wizard.step2Desc')}</p>
                       
                       <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <User className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">👤 {t('home.architecture.options.solo.title')}</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">{t('home.architecture.options.solo.desc')}</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Users className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">👥 {t('home.architecture.options.team.title')}</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">{t('home.architecture.options.team.desc')}</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                             <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                                <Building className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">🏢 {t('home.architecture.options.enterprise.title')}</span>
                                <span className="text-white/60 text-xs leading-relaxed block mt-1">{t('home.architecture.options.enterprise.desc')}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 03 - Bold Card */}
                 <div className="group relative">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50 z-20 rotate-[-6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B3</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-emerald-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:shadow-emerald-500/30 transition-all">
                       <h4 className="text-emerald-400 font-black text-xl uppercase tracking-wider mb-4">{t('tutorial.wizard.step3')}</h4>
                       <p className="text-white/50 text-sm mb-5">{t('tutorial.wizard.step3Desc')}</p>
                       {/* B3 Content */}
                       <div className="space-y-3">
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-emerald-500/50 flex items-center justify-center shrink-0">
                                 <Laptop className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="text-emerald-100 text-sm font-bold block">{t('home.smartAlloc.products.userApp.title')}</span>
                                <span className="text-white/50 text-[10px] block">{t('home.smartAlloc.products.userApp.desc')}</span>
                              </div>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-emerald-500/50 flex items-center justify-center shrink-0">
                                 <Terminal className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="text-emerald-100 text-sm font-bold block">{t('home.smartAlloc.products.devTool.title')}</span>
                                <span className="text-white/50 text-[10px] block">{t('home.smartAlloc.products.devTool.desc')}</span>
                              </div>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-emerald-500/50 flex items-center justify-center shrink-0">
                                 <Bot className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="text-emerald-100 text-sm font-bold block">{t('home.smartAlloc.products.aiAgent.title')}</span>
                                <span className="text-white/50 text-[10px] block">{t('home.smartAlloc.products.aiAgent.desc')}</span>
                              </div>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-emerald-500/50 flex items-center justify-center shrink-0">
                                 <Palette className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="text-emerald-100 text-sm font-bold block">{t('home.smartAlloc.products.digitalAsset.title')}</span>
                                <span className="text-white/50 text-[10px] block">{t('home.smartAlloc.products.digitalAsset.desc')}</span>
                              </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Step 04 - Bold Card */}
                 <div className="group relative lg:mt-12">
                    <div className="absolute -top-2 -left-2 w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center shadow-2xl shadow-sky-500/50 z-20 rotate-[6deg] group-hover:rotate-0 transition-transform">
                       <span className="text-black font-black text-3xl">B4</span>
                    </div>
                    
                    <div className="bg-[#0a0f1a] border-2 border-sky-500/40 rounded-3xl p-6 pt-16 h-full backdrop-blur-xl shadow-2xl shadow-sky-500/10 group-hover:border-sky-400 group-hover:shadow-sky-500/30 transition-all">
                       <h4 className="text-sky-400 font-black text-xl uppercase tracking-wider mb-4">{t('tutorial.wizard.step4')}</h4>
                       <p className="text-white/50 text-sm mb-5">{t('tutorial.wizard.step4Desc')}</p>
                       {/* B4 Content */}
                       <div className="space-y-3">
                           <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-500/20 border border-sky-500/30">
                             <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0">
                                <Bot className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">✨ {t('tutorial.wizard.step4Options.custom.title')}</span>
                                <span className="text-white/60 text-xs">{t('tutorial.wizard.step4Options.custom.desc')}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-500/20 border border-sky-500/30">
                             <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0">
                                <Layers className="w-5 h-5 text-black" />
                             </div>
                             <div>
                                <span className="text-white font-bold text-sm block">📚 {t('tutorial.wizard.step4Options.multi.title')}</span>
                                <span className="text-white/60 text-xs">{t('tutorial.wizard.step4Options.multi.desc')}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

         {/* Phase 4 Header - Launch & Readiness */}
         <div className="text-center space-y-3 pt-8 border-t border-white/5">
            <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-base font-black uppercase tracking-widest border border-emerald-500/20">{t('tutorial.phase4.badge')}</div>
            <h2 className="text-3xl md:text-4xl font-black text-emerald-400 italic uppercase tracking-tighter">{t('tutorial.phase4.title')}</h2>
         </div>

         {/* Step 4: Combined Launch & Mindset */}

         <section className="relative grid lg:grid-cols-12 gap-8 items-start pt-2 pb-8">
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div>
                  <div className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20 mb-4">{t('tutorial.phase4.cardTitle')}</div>
                  <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
                     {t('tutorial.phase4.cardTitle')}
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed font-light max-w-xl">
                     {t('tutorial.phase4.cardDesc')}
                  </p>
               </div>

               <div className="card-glass p-8 md:p-12 border-emerald-500/20 flex flex-col gap-8">
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black font-black">AI</div>
                        <div>
                           <div className="text-white font-black">{t('tutorial.phase4.agentName')}</div>
                           <div className="text-emerald-500 text-xs font-bold">{t('tutorial.phase4.stateReady')}</div>
                        </div>
                     </div>
                     <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between text-xs font-black text-white/30 uppercase tracking-widest">
                        <span>{t('tutorial.phase4.commandInput')}</span>
                        <span>{t('tutorial.phase4.activationCmd')}</span>
                     </div>
                     <TerminalBlock command={t('tutorial.phase4.command')} />
                     <p className="text-[10px] text-white/20 italic text-center">
                        {t('tutorial.phase4.loadNote')}
                     </p>
                  </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
               <div className="card-glass p-6 border-amber-500/20 bg-amber-500/5 space-y-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500/40 animate-pulse" />
                         <span className="text-xs text-amber-400/60 font-mono tracking-widest uppercase">{t('tutorial.phase4.commandInput')}</span>
                     </div>
                  </div>
                  <h4 className="text-white/40 font-black text-xs uppercase tracking-widest italic">{t('tutorial.phase4.activationCmd')}</h4>
                  <div className="bg-black/60 p-6 rounded-xl border border-white/5 font-mono text-amber-400 text-sm md:text-xl leading-relaxed shadow-inner group-hover:border-amber-500/40 transition-colors">
                     {t('tutorial.phase4.command')}
                  </div>
                   <div className="flex items-center gap-2 text-xs text-white/20 italic">
                     <Info className="w-3 h-3" />
                     {t('tutorial.phase4.loadNote')}
                  </div>
               </div>


               <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <CheckCircle className="text-emerald-400 h-6 w-6 flex-shrink-0" />
                  <p className="text-sm font-medium text-emerald-100/90 leading-relaxed italic">
                    {t('tutorial.phase4.successNote')}

                 </p>
               </div>
            </div>
         </section>
      </div>

      {/* Requirements Table - Redesigned as Bento Grid */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#FCD34D]">{t('tutorial.requirements.title')}</h2>
        {/* Simplified req card titles or add to dict if needed. For now assume headers are key. */}
        <div className="grid md:grid-cols-4 gap-6">
          <ReqCard label={t('tutorial.requirements.os.label')} value={t('tutorial.requirements.os.value')} detail={t('tutorial.requirements.os.detail')} />
          <ReqCard label={t('tutorial.requirements.ram.label')} value={t('tutorial.requirements.ram.value')} detail={t('tutorial.requirements.ram.detail')} />
          <ReqCard label={t('tutorial.requirements.cpu.label')} value={t('tutorial.requirements.cpu.value')} detail={t('tutorial.requirements.cpu.detail')} />
          <ReqCard label={t('tutorial.requirements.disk.label')} value={t('tutorial.requirements.disk.value')} detail={t('tutorial.requirements.disk.detail')} />
        </div>
      </section>
      
      <section className="text-center py-32 relative overflow-hidden rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-12 flex flex-col items-center gap-2 uppercase italic">
            <span className="leading-tight">{t('tutorial.ready.titleLine1')}</span>
            <span className="leading-tight">{t('tutorial.ready.titleLine2')}</span>
          </h2>
          
          <Link href="/">
            <button className="btn-emerald h-20 px-16 text-xl rounded-full shadow-[0_0_50px_rgba(52,168,83,0.3)] hover:shadow-[0_0_80px_rgba(52,168,83,0.5)] hover:scale-105 transition-all group flex items-center justify-center gap-3 mx-auto">
              {t('tutorial.ready.cta')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function OSCard({ icon, name, color, steps, downloads, copyText }: { icon: React.ReactNode, name: string, color: string, steps: string[], downloads?: { label: string, url: string }[], copyText?: string }) {
  const colors: any = {
    cyan: "border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/40",
    gold: "border-[#FCD34D]/20 bg-[#FCD34D]/5 hover:border-[#FCD34D]/40",
    emerald: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
  };
  
  const btnClasses = {
      cyan: "bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-black",
      gold: "bg-[#FCD34D]/10 text-[#FCD34D] hover:bg-[#FCD34D] hover:text-black",
      emerald: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
  }
  
  const btnColor = btnClasses[color as keyof typeof btnClasses] || btnClasses.cyan;

  return (
    <div className={cn("card-glass p-8 flex flex-col gap-6 group transition-all duration-300 h-full", colors[color])}>
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-xl font-black text-white">{name}</h3>
      </div>
      
      {downloads && (
        <div className="grid gap-3">
          {downloads.map((d, i) => (
            <Link key={i} href={d.url} className={cn("flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all", btnColor)}>
              {d.label}
              <Download className="h-4 w-4" />
            </Link>
          ))}
        </div>
      )}

      <ul className="space-y-4 pt-4 border-t border-white/5 mt-auto">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/50 font-medium">
            <ChevronRight className="h-4 w-4 text-current opacity-50" /> {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SetupBox({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-glass p-8 flex gap-6 border-white/5 hover:border-white/10 transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-400">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-black text-white mb-2">{title}</h4>
        <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function LaunchStep({ number, title, body }: { number: string, title: string, body: string }) {
  return (
    <div className="card-glass p-10 space-y-6 border-white/5 text-center flex flex-col items-center">
      <div className="text-emerald-400 font-mono text-xs tracking-[0.3em] font-black">{number}</div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="text-white/40 leading-relaxed">{body}</p>
    </div>
  );
}

function ReqCard({ label, value, detail }: { label: string, value: string, detail: string }) {
  return (
    <div className="card-glass p-8 text-center border-white/5 space-y-2 group hover:bg-white/5 transition-colors">
       <p className="text-xs font-black uppercase tracking-[0.2em] text-white/20">{label}</p>
      <p className="text-xl font-black text-white">{value}</p>
      <p className="text-xs text-[#FCD34D]/50 font-medium">{detail}</p>
    </div>
  );
}
