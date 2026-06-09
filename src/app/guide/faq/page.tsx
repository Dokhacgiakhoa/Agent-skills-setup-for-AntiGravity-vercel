"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircleQuestion, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AnimatedAccordion, CategoryTabs, SearchBar } from "@/components/ui/premium";
import { faqItems, faqCategories, FAQItem } from "@/data/faq-content";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    let items = faqItems;

    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    }

    return items;
  }, [searchQuery, activeCategory]);

  const accordionItems = filteredItems.map(item => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    category: item.category
  }));

  return (
    <div className="min-h-screen py-20">
      <div className="page-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/guide" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Guide
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-[#4285F4]/20 border border-[#4285F4]/30">
              <MessageCircleQuestion className="w-8 h-8 text-[#4285F4]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Câu Hỏi <span className="text-[#4285F4]">Thường Gặp</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tổng hợp các câu hỏi phổ biến về Agent skills setup for AntiGravity. Không tìm thấy câu trả lời? 
            Hãy tạo Issue trên GitHub!
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          <SearchBar 
            placeholder="Tìm kiếm câu hỏi..." 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <CategoryTabs 
            tabs={faqCategories}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-white/40 text-sm"
        >
          Hiển thị {filteredItems.length} / {faqItems.length} câu hỏi
        </motion.div>

        {/* FAQ Accordion */}
        {filteredItems.length > 0 ? (
          <AnimatedAccordion items={accordionItems} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/50 text-lg">
              Không tìm thấy câu hỏi phù hợp với &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 text-[#4285F4] hover:underline"
            >
              Xóa bộ lọc
            </button>
          </motion.div>
        )}

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card-glass inline-block px-8 py-6">
            <p className="text-white/60 mb-4">
              Vẫn chưa tìm được câu trả lời?
            </p>
            <a
              href="https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue"
            >
              Tạo Issue trên GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
