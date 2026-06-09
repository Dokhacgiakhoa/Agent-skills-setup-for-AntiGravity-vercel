"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  color?: string;
}

interface CategoryTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  color?: string;
}

export function CategoryTabs({ tabs, activeTab, onTabChange, color = "#4285F4" }: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Get color for tab
  const getTabColor = (tab: Tab, isActive: boolean) => {
    if (tab.id === "all") return color;
    return tab.color || color;
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
        >
          <ChevronLeft className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
        </motion.button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
        >
          <ChevronRight className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
        </motion.button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const tabColor = getTabColor(tab, isActive);

          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="relative flex-shrink-0 group"
            >
              {/* Background */}
              <div
                className={`
                  relative px-4 py-2.5 rounded-xl font-medium text-sm
                  transition-all duration-300 border
                  ${isActive
                    ? "text-white shadow-lg"
                    : "text-white/50 hover:text-white bg-white/[0.02] border-white/10 hover:border-white/20"
                  }
                `}
                style={isActive ? {
                  backgroundColor: `${tabColor}20`,
                  borderColor: `${tabColor}50`,
                  boxShadow: `0 0 20px ${tabColor}20`
                } : {}}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tabColor }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Content */}
                <span className="flex items-center gap-2 whitespace-nowrap">
                  {/* Icon */}
                  {tab.icon && (
                    <span 
                      className={`transition-colors ${isActive ? "" : "opacity-50 group-hover:opacity-100"}`}
                      style={isActive ? { color: tabColor } : {}}
                    >
                      {tab.icon}
                    </span>
                  )}

                  {/* Label */}
                  <span style={isActive ? { color: tabColor } : {}}>
                    {tab.label}
                  </span>

                  {/* Count Badge */}
                  {tab.count !== undefined && (
                    <span 
                      className={`
                        text-[10px] font-bold px-2 py-0.5 rounded-full
                        transition-all duration-300
                        ${isActive 
                          ? "text-white" 
                          : "bg-white/10 text-white/40 group-hover:text-white/60"
                        }
                      `}
                      style={isActive ? {
                        backgroundColor: tabColor,
                      } : {}}
                    >
                      {tab.count}
                    </span>
                  )}
                </span>

                {/* Hover Glow */}
                {!isActive && (
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tabColor}10 0%, transparent 70%)`
                    }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
