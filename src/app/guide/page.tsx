"use client";

import { BookOpen, Command, FolderTree, Rocket, CheckCircle2, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import { systemStats, coreConcepts, workflowsList, operatingModes, gettingStarted } from "@/data/documentation";
import { directoryStructure } from "@/data/guide-content";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/guide/ui/PageHeader";
import { SectionHeader } from "@/components/guide/ui/SectionHeader";
import { ConceptCard } from "@/components/guide/ui/ConceptCard";
import { CommandCard } from "@/components/guide/ui/CommandCard";
import { StatCard } from "@/components/guide/ui/StatCard";

export default function GuidePage() {
  const { t, locale } = useLanguage();

  return (
    <div className="page-container mt-8 space-y-12 pb-24">
      {/* Hero Section */}
      <PageHeader 
        badgeIcon={BookOpen}
        badgeLabel={t('guide.hero.badge')}
        title={<>{t('guide.hero.title')} <span className="text-white">{t('guide.hero.highlight')}</span></>}
        description={t('guide.hero.desc')}
        color="blue"
      />

      {/* Installation Link */}
      <section className="max-w-4xl mx-auto">
        <Link href="/tutorial">
          <div className="card-glass p-8 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40 transition-all group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{t('guide.install.title')}</h3>
                  <p className="text-white/60">{t('guide.install.desc')}</p>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-emerald-400 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* Quick Links - New Premium Pages */}
      <section className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/guide/faq" className="card-glass p-6 bg-[#4285F4]/5 border-[#4285F4]/20 hover:border-[#4285F4]/50 transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-3xl">❓</span>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#4285F4] transition-colors">FAQ</h4>
                <p className="text-xs text-white/50">Câu hỏi thường gặp</p>
              </div>
            </div>
          </Link>
          <Link href="/guide/troubleshooting" className="card-glass p-6 bg-[#EA4335]/5 border-[#EA4335]/20 hover:border-[#EA4335]/50 transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#EA4335] transition-colors">Troubleshooting</h4>
                <p className="text-xs text-white/50">Khắc phục lỗi</p>
              </div>
            </div>
          </Link>
          <Link href="/guide/case-studies" className="card-glass p-6 bg-[#FBBC04]/5 border-[#FBBC04]/20 hover:border-[#FBBC04]/50 transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-3xl">💼</span>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#FBBC04] transition-colors">Case Studies</h4>
                <p className="text-xs text-white/50">Ví dụ thực tế</p>
              </div>
            </div>
          </Link>
          <Link href="/guide/changelog" className="card-glass p-6 bg-[#34A853]/5 border-[#34A853]/20 hover:border-[#34A853]/50 transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📜</span>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#34A853] transition-colors">Changelog</h4>
                <p className="text-xs text-white/50">Lịch sử phiên bản</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/guide/how-it-thinks" className="card-glass p-8 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 border-[#4285F4]/30 hover:border-[#4285F4]/50 transition-all group">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🧠</span>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-[#4285F4] transition-colors mb-2">AI Nghĩ Như Thế Nào?</h4>
                <p className="text-sm text-white/50">Khám phá quy trình xử lý từ prompt đến kết quả</p>
              </div>
            </div>
          </Link>
          <Link href="/guide/architecture" className="card-glass p-8 bg-gradient-to-br from-[#8B5CF6]/10 to-[#EA4335]/10 border-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all group">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏛️</span>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2">Kiến Trúc Hệ Thống</h4>
                <p className="text-sm text-white/50">Tổng quan cấu trúc và các thành phần</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="max-w-6xl mx-auto space-y-12">
        <SectionHeader title={t('guide.concepts.title')} subtitle={t('guide.concepts.subtitle')} />

        <div className="grid lg:grid-cols-3 gap-8">
          {coreConcepts.map((concept) => (
            <ConceptCard 
              key={concept.id}
              icon={<span className="text-4xl">{concept.icon}</span>}
              title={t(`guide.data.concepts.${concept.id}.title`)}
              desc={t(`guide.data.concepts.${concept.id}.desc`)}
              color="emerald"
              features={[
                `En: ${t(`guide.data.concepts.${concept.id}.enTerm`)}`,
                `Exp: ${t(`guide.data.concepts.${concept.id}.exp`)}`
              ]}
            />
          ))}
        </div>
      </section>

      {/* Operating Modes */}
      <section className="max-w-6xl mx-auto space-y-12">
        <SectionHeader title={t('guide.modes.title')} subtitle={t('guide.modes.subtitle')} />

        <div className="grid lg:grid-cols-3 gap-8">
          {operatingModes.map((mode) => (
            <ConceptCard 
              key={mode.id}
              icon={<span className="text-4xl">{mode.icon}</span>}
              title={t(`guide.data.modes.${mode.id}.title`)}
              desc={t(`guide.data.modes.${mode.id}.desc`)}
              features={(t(`guide.data.modes.${mode.id}.features`) as any) || mode.features} 
              color={mode.color}
            />
          ))}
        </div>
      </section>

      {/* Slash Commands Grid */}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
            <Command className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-3xl font-black">{t('guide.commands.title')}</h2>
            <p className="text-white/40">{t('guide.commands.subtitle')}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowsList.slice(0, 12).map((wf, index) => {
            const googleColors = ['red', 'yellow', 'green', 'blue'];
            const color = googleColors[index % googleColors.length];
            return (
              <Link key={wf.id} href={`/guide/workflows/${wf.id}`}>
                <CommandCard 
                  cmd={wf.command} 
                  desc={t(`guide.data.commands.${wf.id}`) || wf.desc} 
                  color={color} 
                />
              </Link>
            );
          })}
        </div>
        
        <div className="text-center pt-8">
          <Link href="/guide/workflows">
            <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2 mx-auto font-bold">
              {t('guide.commands.viewAll').replace('{{count}}', workflowsList.length.toString())}
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Project Structure */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FCD34D]/10 rounded-2xl flex items-center justify-center border border-[#FCD34D]/20">
            <FolderTree className="h-6 w-6 text-[#FCD34D]" />
          </div>
          <div>
            <h2 className="text-3xl font-black">{t('guide.structure.title')}</h2>
            <p className="text-white/40">{t('guide.structure.desc')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-glass p-8 bg-black/40 border-white/10 font-mono text-sm shadow-2xl h-full">

            <div className="text-emerald-400 font-black mb-4 flex items-center gap-2">
              <span className="text-xl">📂</span> {directoryStructure.root}
            </div>
            <pre className="text-white/80 leading-relaxed overflow-x-auto">
{directoryStructure.directories.map(dir => (
  <div key={dir.path} className="mb-3 hover:text-white transition-colors group">
    <div className="flex items-start gap-2">
      <span className="text-amber-400 group-hover:scale-110 transition-transform">├──</span>
      <div>
        <div className="font-bold text-white">{dir.path.split('/').filter(Boolean).pop()}/</div>
        <div className="text-[10px] text-white/40 leading-tight mt-0.5">{locale === 'en' ? dir.descriptionEn || dir.description : dir.description}</div>
      </div>
    </div>
  </div>
))}
{directoryStructure.coreFiles.map((file, idx) => (
  <div key={file.file} className="hover:text-white transition-colors group">
    <div className="flex items-start gap-2 h-7 group">
      <span className="text-amber-400">{idx === directoryStructure.coreFiles.length - 1 ? "└──" : "├──"}</span>
      <div className="flex items-center gap-2">
        <span className="text-sky-400">{file.file}</span>
        <span className="text-[10px] text-white/20 italic"># {locale === 'en' ? file.descEn || file.desc : file.desc}</span>
      </div>
    </div>
  </div>
))}
            </pre>
          </div>

          <div className="card-glass p-8 bg-black/40 border-white/10 space-y-6">
             <h3 className="text-white font-black uppercase tracking-widest text-xs flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
               {t('guide.structure.detailsTitle')}
             </h3>
             <div className="space-y-4">
               {directoryStructure.directories.slice(0, 4).map(dir => (
                 <div key={dir.path} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-white font-bold text-sm">{dir.path}</span>
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/60">{dir.fileCount} {t('guide.structure.itemsLabel')}</span>
                   </div>
                   <p className="text-xs text-white/40 leading-relaxed">Ví dụ: {dir.examples.join(', ')}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number={systemStats.skills.toString()} label={t('guide.stats.skills')} sublabel={t('guide.stats.skillsSub')} color="blue" />
          <StatCard number={systemStats.agents.toString()} label={t('guide.stats.agents')} sublabel={t('guide.stats.agentsSub')} color="emerald" />
          <StatCard number={systemStats.workflows.toString()} label={t('guide.stats.workflows')} sublabel={t('guide.stats.workflowsSub')} color="amber" />
          <StatCard number={systemStats.rules.toString()} label={t('guide.stats.rules')} sublabel={t('guide.stats.rulesSub')} color="rose" />
        </div>
      </section>

      {/* Advanced Usage */}
      <section className="max-w-4xl mx-auto space-y-8">
        <SectionHeader title={t('guide.advanced.title')} subtitle={t('guide.advanced.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="font-black">{t('guide.advanced.update')}</h3>
            </div>
            <p className="text-white/60 text-sm">{t('guide.advanced.updateDesc')}</p>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-white/80">
              npx agent-skills-setup-for-antigravity update
            </div>
          </div>

          <div className="card-glass p-6 space-y-4 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex items-center gap-2 text-cyan-400">
              <Settings className="h-5 w-5" />
              <h3 className="font-black">{t('guide.advanced.identity')}</h3>
            </div>
            <p className="text-white/60 text-sm">{t('guide.advanced.identityDesc')}</p>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-white/80">
               "Jarvis", "Friday"
            </div>
          </div>
        </div>
      </section>


      {/* Quick Start Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <SectionHeader title={t('guide.gettingStarted.title')} subtitle={t('guide.gettingStarted.subtitle')} />

        <div className="space-y-6">
          {gettingStarted.steps.map((step) => (
            <div key={step.step} className="card-glass p-6 md:p-8 flex gap-6 items-start bg-black/40 border-white/10 hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#FCD34D]/10 border border-[#FCD34D]/20 flex items-center justify-center shrink-0 text-[#FCD34D] font-black text-xl group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase italic tracking-tight">{t(`guide.data.gettingTimestamp.step${step.step}.title`)}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{t(`guide.data.gettingTimestamp.step${step.step}.desc`)}</p>
                {step.action && (
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl font-mono text-sm text-emerald-400 flex items-center justify-between group/code">
                    <span>{locale === 'en' ? step.actionEn || step.action : step.action}</span>
                    <button className="text-[10px] uppercase font-black tracking-widest bg-emerald-500/20 px-2 py-1 rounded opacity-0 group-hover/code:opacity-100 transition-opacity">{t('tutorial.copy')}</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="card-glass p-8 border-rose-500/20 bg-rose-500/5 space-y-6">
           <h3 className="text-rose-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
             {t('guide.gettingStarted.verifyTitle')}
           </h3>
           <div className="grid md:grid-cols-3 gap-4">
             {/* Use gettingStarted.verification array directly if t key is not reliable or map it */}
             {(locale === 'en' ? gettingStarted.verificationEn || gettingStarted.verification : gettingStarted.verification).map((item: string, i: number) => (
               <div key={i} className="text-xs text-white/40 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 italic">
                 {item}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center space-y-8 py-12">
        <h2 className="text-3xl md:text-4xl font-black">{t('guide.cta.title')}</h2>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          {t('guide.cta.subtitle')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/dictionaries">
            <button className="btn-cyan px-8 py-4 rounded-full group/btn flex items-center gap-2">
              {t('guide.cta.dictionaryBtn')}
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm transition-all">
              {t('guide.cta.repoBtn')}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
