"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-32 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00F3FF]/5 to-black" />
        <div className="glow-orb glow-blue bottom-0 left-[50%] translate-x-[-50%] opacity-20" />

        <div className="w-[90%] max-w-4xl mx-auto text-center relative z-10 space-y-10">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none"
            >
                {t('home.finalCta.title')} <span className="text-[#BD00FF]">{t('home.finalCta.highlight')}</span>
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/50 max-w-2xl mx-auto"
            >
                {t('home.finalCta.subTitle')}
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
                <Link href="/tutorial">
                    <Button size="lg" className="h-16 px-12 text-lg bg-[#00F3FF] hover:bg-[#00D6E2] text-black font-black rounded-full shadow-[0_0_50px_rgba(0,243,255,0.4)] hover:shadow-[0_0_80px_rgba(0,243,255,0.6)] hover:scale-105 transition-all">
                        {t('home.finalCta.button')}
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </Link>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-5 rounded-full border border-white/10 hover:border-[#00F3FF]/50 transition-colors cursor-copy group">
                    <Terminal className="w-5 h-5 text-[#00F3FF]" />
                    <code className="text-white/80 font-mono text-lg">npx agent-skills-setup-for-antigravity@latest</code>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
