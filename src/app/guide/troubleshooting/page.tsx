"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowLeft, ChevronDown, Terminal } from "lucide-react";
import Link from "next/link";
import { CategoryTabs, SearchBar, SeverityBadge, CopyButton } from "@/components/ui/premium";
import { troubleshootingItems, troubleshootingCategories, TroubleshootingItem } from "@/data/troubleshooting";

export default function TroubleshootingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    let items = troubleshootingItems;

    if (activeCategory !== "all") {
      items = items.filter(item => item.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.errorCode?.toLowerCase().includes(query) ||
        item.cause.toLowerCase().includes(query)
      );
    }

    return items;
  }, [searchQuery, activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

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
            <div className="p-3 rounded-2xl bg-[#EA4335]/20 border border-[#EA4335]/30">
              <AlertTriangle className="w-8 h-8 text-[#EA4335]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Khắc Phục <span className="text-[#EA4335]">Lỗi</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tổng hợp các vấn đề thường gặp khi sử dụng Agent skills setup for AntiGravity và cách xử lý nhanh chóng.
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
            placeholder="Tìm kiếm theo error message..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <CategoryTabs
            tabs={troubleshootingCategories}
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
          Hiển thị {filteredItems.length} / {troubleshootingItems.length} vấn đề
        </motion.div>

        {/* Error Cards */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`
                  card-glass cursor-pointer
                  ${isExpanded(item.id) ? 'border-[#4285F4]/50' : ''}
                `}
                onClick={() => toggleExpand(item.id)}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <SeverityBadge severity={item.severity} />
                      <span className="text-xs text-white/40 capitalize">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-mono font-bold text-white text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/40"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                        {/* Cause */}
                        <div>
                          <h4 className="text-sm font-semibold text-[#FBBC04] mb-1">
                            🔍 Nguyên nhân
                          </h4>
                          <p className="text-white/60 text-sm">{item.cause}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-sm font-semibold text-[#34A853] mb-1">
                            ✅ Cách sửa
                          </h4>
                          <p className="text-white/60 text-sm">{item.solution}</p>
                        </div>

                        {/* Commands */}
                        {item.commands && item.commands.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-[#4285F4] mb-2">
                              <Terminal className="w-4 h-4 inline mr-1" />
                              Lệnh thực thi
                            </h4>
                            <div className="space-y-2">
                              {item.commands.map((cmd, cmdIndex) => (
                                <div
                                  key={cmdIndex}
                                  className="flex items-center justify-between bg-black/50 rounded-lg p-3 font-mono text-sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <code className="text-[#4285F4]">{cmd}</code>
                                  {!cmd.startsWith('#') && (
                                    <CopyButton text={cmd} />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/50 text-lg">
              Không tìm thấy lỗi phù hợp với &quot;{searchQuery}&quot;
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
              Vẫn không sửa được? Hãy liên hệ để được hỗ trợ!
            </p>
            <a
              href="https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              Báo cáo lỗi mới
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
