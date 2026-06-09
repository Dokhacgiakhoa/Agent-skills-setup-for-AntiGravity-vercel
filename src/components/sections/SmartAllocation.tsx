"use client";

import { motion } from "framer-motion";
import { productTypes } from "@/data/product-types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function SmartAllocation() {
    const { t } = useLanguage();

    const keyMap: Record<string, string> = {
        'user-app': 'userApp',
        'dev-tool': 'devTool',
        'ai-agent': 'aiAgent',
        'digital-asset': 'digitalAsset'
    };

    const translatedProducts = productTypes.map(p => ({
       ...p,
       title: t(`home.smartAlloc.products.${keyMap[p.id]}.title`),
       desc: t(`home.smartAlloc.products.${keyMap[p.id]}.desc`)
    }));

    return (
        <section className="w-full py-24 px-4 bg-black/60 backdrop-blur-md relative overflow-hidden">
             {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[#00F3FF] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[#BD00FF] rounded-full blur-[150px]" />
            </div>

            <div className="w-[90%] max-w-7xl mx-auto space-y-10 relative z-10">
                <SectionHeading 
                    badge={t('home.smartAlloc.badge')}
                    title={t('home.smartAlloc.title')}
                    highlight={t('home.smartAlloc.highlight')}
                    highlightColor="blue"
                    desc={t('home.smartAlloc.description')}
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {translatedProducts.map((prod, i) => (
                        <ProductCard 
                            key={i} 
                            product={prod} 
                            index={i} 
                            activatedLabel={t('home.smartAlloc.activated')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index, activatedLabel }: { product: any, index: number, activatedLabel: string }) {
    const colorMap: Record<string, string> = {
        blue: "border-[#00F3FF]/30 hover:shadow-[0_0_40px_rgba(0,243,255,0.2)]",
        red: "border-[#BD00FF]/30 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]",
        yellow: "border-[#BD00FF]/30 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]",
        green: "border-[#00F3FF]/30 hover:shadow-[0_0_40px_rgba(0,243,255,0.2)]",
    };
    
    const iconColorMap: Record<string, string> = {
        blue: "text-[#00F3FF]",
        red: "text-[#BD00FF]",
        yellow: "text-[#BD00FF]",
        green: "text-[#00F3FF]",
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group h-full p-8 rounded-[2rem] border bg-[#080808] hover:bg-[#111] transition-all duration-500 flex flex-col items-center text-center",
                colorMap[product.color]
            )}
        >
            <div className={cn("mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500", iconColorMap[product.color])}>
                <product.icon className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{product.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>

            <div className="w-full pt-6 border-t border-white/5">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">{activatedLabel}</div>
                <div className="flex flex-wrap justify-center gap-2">
                    {product.activeSkills.map((skill: string, j: number) => (
                        <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
