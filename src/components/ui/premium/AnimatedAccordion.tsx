"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AnimatedAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function AnimatedAccordion({ items, allowMultiple = false }: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className={`
              w-full text-left p-5 rounded-2xl
              bg-black/60 backdrop-blur-xl
              border transition-all duration-300
              ${isOpen(item.id) 
                ? 'border-[#4285F4]/50 shadow-[0_0_30px_rgba(66,133,244,0.2)]' 
                : 'border-white/10 hover:border-[#4285F4]/30'}
              group
            `}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white group-hover:text-[#4285F4] transition-colors">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <ChevronDown className={`w-5 h-5 transition-colors ${isOpen(item.id) ? 'text-[#4285F4]' : 'text-white/50'}`} />
              </motion.div>
            </div>

            <AnimatePresence>
              {isOpen(item.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="pt-4 mt-4 border-t border-white/10 text-white/70 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
