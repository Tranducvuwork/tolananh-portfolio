'use client';

import { ArrowUp, Sparkles } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#1E1611] text-[#DECFC0] border-t border-[#2E221B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-serif text-xl font-bold text-white tracking-tight">
            {profileData.name}
          </div>
          <p className="text-xs text-[#DECFC0] font-mono">
            Social Media & Creative Planner • PR Văn Lang
          </p>
          <div className="text-[11px] text-[#A68C72] pt-1">
            © {new Date().getFullYear()} Tô Lan Anh. Crafted with precision & warmth.
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E221B] hover:bg-[#9E6B47] text-xs font-mono font-medium text-[#FAF7F2] transition-colors border border-white/10"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
