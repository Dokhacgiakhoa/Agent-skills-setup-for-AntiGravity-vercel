"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Menu, Rocket, ChevronDown, ChevronRight, Book, Users, Zap, Workflow, Share2, BookOpen, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  
  const { t, locale, setLocale } = useLanguage();

  const navItems = [
    { name: t('navbar.home'), href: "/", color: "#00F3FF" }, // Neon Cyan
    { name: t('navbar.install'), href: "/tutorial", color: "#BD00FF" }, // Neon Purple
    { 
      name: t('navbar.guide'), 
      href: "/guide",
      color: "#00F3FF", // Neon Cyan
      children: [
        { name: t('navbar.guideRulesTitle'), href: "/guide/rules", desc: t('navbar.guideRules'), icon: Book },
        { name: t('navbar.guideAgentsTitle'), href: "/guide/agents", desc: t('navbar.guideAgents'), icon: Users },
        { name: t('navbar.guideSkillsTitle'), href: "/guide/skills", desc: t('navbar.guideSkills'), icon: Zap },
        { name: t('navbar.guideWorkflowsTitle'), href: "/guide/workflows", desc: t('navbar.guideWorkflows'), icon: Workflow },
        { name: t('navbar.guideSharedTitle'), href: "/guide/shared", desc: t('navbar.guideShared'), icon: Share2 },
      ]
    },
    { 
      name: t('navbar.notes'), 
      href: "/notes", 
      color: "#BD00FF", // Neon Purple
      children: [
         { name: t('navbar.samples'), href: "/samples", desc: t('navbar.library'), icon: Rocket },
         { name: t('navbar.dictionaries'), href: "/dictionaries", desc: t('navbar.dictionaries'), icon: BookOpen },
      ]
    }, 
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveIndex = () => {
    return navItems.findIndex(item => {
      if (item.href === "/") return pathname === "/";
      return pathname.startsWith(item.href);
    });
  };

  const activeIndex = getActiveIndex();
  // Get active color or default to yellow if none
  const activeColor = activeIndex !== -1 ? navItems[activeIndex].color : '#00F3FF';

  const toggleLanguage = () => {
    setLocale(locale === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-10 pointer-events-none">
      <nav 
        onMouseLeave={() => setHoveredIndex(null)}
        className={cn(
          "pointer-events-auto relative flex items-center h-16 rounded-full border transition-all duration-700 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-[40px] px-3",
          // FIXED WIDTH: Content-hug instead of fixed wide width
          "w-fit bg-white/[0.03] border-white/10",
          scrolled && "bg-black/40 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(252,211,77,0.1)]"
        )}
      >
        <div className="flex w-full items-center justify-between relative px-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 relative group-hover:scale-110 transition-transform duration-300 aspect-square rounded-xl overflow-hidden shadow-lg shadow-[#BD00FF]/20 border border-white/10 bg-black/40">
              <img 
                src="/antigravity-ide-logo.png" 
                alt="AntiGravity IDE Logo" 
                className="w-full h-full object-cover p-1.5 mix-blend-screen"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </div>
            <span className="hidden lg:inline-block font-black text-[#00F3FF] text-sm">
              Agent Skills Setup
            </span>
          </Link>

          {/* Menu Items with Proportional Sliding Pill */}
          <div className="relative flex items-center h-12 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 z-10 mx-4 shadow-inner justify-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeIndex === index;
              const hasChildren = !!item.children;

              return (
                <div
                  key={item.href}
                  className="relative z-10 h-full flex items-center justify-center px-1"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 h-full rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-1 pt-[2px]",
                       // Initial text color white/40, hover white. Active handled by style.
                      !isActive && "text-white/40 hover:text-white"
                    )}
                    style={{
                       // When active: Color is item specific. Add text shadow for neon effect.
                       color: isActive ? item.color : undefined,
                       textShadow: isActive ? `0 0 15px ${item.color}80` : undefined
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-black -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        style={{
                          boxShadow: `0 0 20px ${item.color}60, 0 0 10px ${item.color}40`
                        }}
                      />
                    )}
                    {item.name}
                    {hasChildren && <ChevronDown className="h-3 w-3" />}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasChildren && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 mt-4 w-64 p-2 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden"
                      >
                         <div className="flex flex-col gap-1">
                           {item.children!.map((child) => (
                             <Link
                               key={child.href}
                               href={child.href}
                               className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                             >
                               <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors" style={{ color: item.color }}>
                                  {child.icon ? <child.icon className="h-4 w-4 text-white/60 group-hover:text-current" /> : <ChevronRight className="h-4 w-4 text-white/60 group-hover:text-current" />}
                               </div>
                               <div>
                                 <div className="text-white text-xs font-bold transition-colors" style={{ color: 'inherit' }}>
                                    <span className="group-hover:text-current transition-colors" style={{ color: 'white' }}>{child.name}</span>
                                 </div>
                                 <div className="text-white/40 text-[10px]">{child.desc}</div>
                               </div>
                             </Link>
                           ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Section Actions */}
          <div className="flex items-center gap-3 z-20 flex-shrink-0">
            {/* Language Switcher */}
             <button
               onClick={toggleLanguage}
               className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors flex items-center gap-2 group"
            >
               <Globe className="h-4 w-4 text-white/80 group-hover:text-[#00F3FF] transition-colors" />
               <span className="text-[10px] font-black uppercase text-white/60 group-hover:text-white transition-colors">{locale === 'vi' ? 'VN' : 'EN'}</span>
            </button>

            <Link href="https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity" target="_blank" className="hidden sm:block">
              <div className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors">
                <Github className="h-4 w-4 text-white/80" />
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-2 bg-[#00F3FF]/10 px-3 py-1.5 rounded-full border border-[#00F3FF]/30">
              <div className="w-1.5 h-1.5 bg-[#00F3FF] rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-[#00F3FF] uppercase tracking-widest">{t('common.version')}</span>
            </div>

            <button
              className="p-3 md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed inset-x-6 top-24 z-50 p-6 rounded-[2.5rem] bg-black/95 backdrop-blur-3xl border border-white/10 md:hidden pointer-events-auto shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeIndex === index;
                const hasChildren = !!item.children;
                const isExpanded = mobileExpandedIndex === index;

                return (
                  <div key={item.href} className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Link
                         href={item.href}
                         className={cn(
                           "flex-1 p-6 rounded-3xl text-xl font-black transition-all",
                           isActive ? "bg-[#00F3FF] text-black" : "bg-white/5 text-white"
                         )}
                         onClick={() => !hasChildren && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {hasChildren && (
                        <button 
                          onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                          className="p-6 rounded-3xl bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all"
                        >
                          <ChevronDown className={cn("h-6 w-6 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden bg-white/5 rounded-3xl mt-2 border border-white/5"
                        >
                          {item.children!.map((child) => (
                             <Link
                               key={child.href}
                               href={child.href}
                               className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                               onClick={() => setIsOpen(false)}
                             >
                                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00F3FF]">
                                    {child.icon && <child.icon className="h-5 w-5" />}
                                 </div>
                                 <div>
                                    <div className="text-white font-bold">{child.name}</div>
                                    <div className="text-white/40 text-xs">{child.desc}</div>
                                 </div>
                             </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
