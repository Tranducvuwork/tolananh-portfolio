'use client';

import { Heart, ArrowUp } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#34261C] text-[#E8DEC8] border-t border-[#463526]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-serif text-xl font-bold text-white tracking-tight">
            {profileData.name}
          </div>
          <p className="text-xs text-[#C4AF9A]">
            Social Media & Creative Planner • Content Marketing Portfolio
          </p>
          <div className="text-[11px] text-[#A38466] pt-1">
            © {new Date().getFullYear()} Tô Lan Anh. All rights reserved.
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#463526] hover:bg-[#5A4535] text-xs font-semibold text-[#F2E8DC] transition-colors border border-[#644D38]"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
