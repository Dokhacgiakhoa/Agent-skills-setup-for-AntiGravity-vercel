"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Command } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  showShortcut?: boolean;
}

export function SearchBar({ 
  placeholder = "Tìm kiếm...", 
  value, 
  onChange,
  showShortcut = true 
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      className={`
        relative flex items-center gap-3 px-4 py-3
        bg-black/60 backdrop-blur-xl rounded-2xl
        border transition-all duration-300
        ${isFocused 
          ? 'border-[#4285F4]/50 shadow-[0_0_30px_rgba(66,133,244,0.2)]' 
          : 'border-white/10 hover:border-white/20'}
      `}
      animate={{ scale: isFocused ? 1.01 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-[#4285F4]' : 'text-white/40'}`} />
      
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none"
      />

      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onChange('')}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-white/40" />
          </motion.button>
        )}
      </AnimatePresence>

      {showShortcut && !isFocused && !value && (
        <div className="hidden md:flex items-center gap-1 text-xs text-white/30">
          <Command className="w-3 h-3" />
          <span>K</span>
        </div>
      )}
    </motion.div>
  );
}
