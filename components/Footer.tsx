'use client';

import Link from 'next/link';
import { ArrowUp, Sparkles, Sofa, Coffee, Briefcase, Mail } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#1E1611] text-[#DECFC0] border-t border-[#2E221B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-serif text-2xl font-bold text-white tracking-tight">
              {profileData.name}
            </div>
            <p className="text-xs text-[#DECFC0] font-mono leading-relaxed max-w-sm">
              Creative Planner & Social Media Specialist. Sinh viên Quan Hệ Công Chúng - PR Đại Học Văn Lang (2022-2026).
            </p>
            <div className="text-[11px] text-[#A68C72] font-mono pt-1">
              Điện thoại: {profileData.phone} • Email: {profileData.email}
            </div>
          </div>

          {/* Navigation Links: Pages (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-200">
              Trang Độc Lập
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono">
              <Link href="/" className="hover:text-white transition-colors">
                Trang Chủ (Overview)
              </Link>
              <Link href="/working-experience" className="hover:text-white transition-colors">
                Học Vấn & Working Experience
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors">
                Tất Cả Dự Án & 13 Slides
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Liên Hệ & Tải CV
              </Link>
            </div>
          </div>

          {/* Navigation Links: Flagship Tracks (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-200">
              Hạng Mục Riêng Biệt
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono">
              <Link href="/projects/minh-huy-furniture" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Sofa className="w-3.5 h-3.5 text-[#C8B49F]" />
                <span>Nội Thất Minh Huy (B2B)</span>
              </Link>
              <Link href="/projects/la-ca-mot-chut" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#C8B49F]" />
                <span>Kênh La Cà Một Chút (F&B)</span>
              </Link>
              <a 
                href={profileData.cvPdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors pt-1"
              >
                Tải CV Đầy Đủ (PDF)
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A68C72]">
          <div>
            © {new Date().getFullYear()} Tô Lan Anh. Crafted with precision & warmth.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E221B] hover:bg-[#9E6B47] text-xs font-mono font-medium text-[#FAF7F2] transition-colors border border-white/10"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
