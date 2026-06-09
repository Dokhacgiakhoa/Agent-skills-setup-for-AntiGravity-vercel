"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { History, ArrowLeft, Plus, RefreshCw, Check, TrendingUp } from "lucide-react";
import Link from "next/link";
import { CategoryTabs, TimelineItem } from "@/components/ui/premium";
import { changelog, changelogTypeConfig } from "@/data/changelog";

const filterTabs = [
  { id: "all", label: "Tất cả", count: changelog.length },
  { id: "added", label: "Added", count: changelog.flatMap(v => v.entries.filter(e => e.type === "added")).length },
  { id: "changed", label: "Changed", count: changelog.flatMap(v => v.entries.filter(e => e.type === "changed")).length },
  { id: "fixed", label: "Fixed", count: changelog.flatMap(v => v.entries.filter(e => e.type === "fixed")).length },
  { id: "improved", label: "Improved", count: changelog.flatMap(v => v.entries.filter(e => e.type === "improved")).length },
];

const typeIcons = {
  added: Plus,
  changed: RefreshCw,
  fixed: Check,
  improved: TrendingUp
};

export default function ChangelogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredChangelog = useMemo(() => {
    if (activeFilter === "all") return changelog;

    return changelog
      .map(version => ({
        ...version,
        entries: version.entries.filter(entry => entry.type === activeFilter)
      }))
      .filter(version => version.entries.length > 0);
  }, [activeFilter]);

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
            <div className="p-3 rounded-2xl bg-[#34A853]/20 border border-[#34A853]/30">
              <History className="w-8 h-8 text-[#34A853]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Change<span className="text-[#34A853]">log</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Lịch sử phát triển và cập nhật của Agent skills setup for AntiGravity.
            Theo dõi các tính năng mới, cải tiến và sửa lỗi.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {Object.entries(changelogTypeConfig).map(([type, config]) => {
            const count = changelog.flatMap(v => v.entries.filter(e => e.type === type)).length;
            const Icon = typeIcons[type as keyof typeof typeIcons];
            return (
              <div
                key={type}
                className="card-glass text-center py-4"
                style={{ borderColor: `${config.color}30` }}
              >
                <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: config.color }} />
                <div className="text-2xl font-bold text-white">{count}</div>
                <div className="text-xs text-white/50">{config.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <CategoryTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {filteredChangelog.map((version, versionIndex) => (
            <TimelineItem
              key={version.version}
              index={versionIndex}
              date={version.date}
              title={`v${version.version}${version.title ? ` - ${version.title}` : ''}`}
              isLast={versionIndex === filteredChangelog.length - 1}
              badge={
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-[#4285F4]/20 text-[#4285F4] border border-[#4285F4]/30">
                  v{version.version}
                </span>
              }
            >
              <div className="mt-4 space-y-2">
                {version.entries.map((entry, entryIndex) => {
                  const config = changelogTypeConfig[entry.type];
                  const Icon = typeIcons[entry.type];
                  return (
                    <motion.div
                      key={entryIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: versionIndex * 0.1 + entryIndex * 0.03 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className="mt-0.5 p-1 rounded"
                        style={{ backgroundColor: `${config.color}20` }}
                      >
                        <Icon className="w-3 h-3" style={{ color: config.color }} />
                      </span>
                      <span className="text-white/70">{entry.description}</span>
                    </motion.div>
                  );
                })}
              </div>
            </TimelineItem>
          ))}
        </div>

        {/* Empty State */}
        {filteredChangelog.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/50 text-lg">
              Không có entries loại &quot;{activeFilter}&quot;
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 text-[#4285F4] hover:underline"
            >
              Xem tất cả
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card-glass inline-block px-8 py-6">
            <p className="text-white/60 mb-4">
              Muốn cập nhật lên phiên bản mới nhất?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <code className="px-4 py-2 bg-black/50 rounded-lg text-[#4285F4] font-mono text-sm">
                npx agent-skills-setup-for-antigravity
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
