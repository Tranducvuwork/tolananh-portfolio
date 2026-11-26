'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về tôi', href: '#about' },
    { name: 'TikTok Showcase', href: '#tiktok-showcase' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Học vấn & Kinh nghiệm', href: '#experience' },
    { name: 'Kỹ năng & Tools', href: '#skills' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? 'glass-editorial shadow-luxury border border-[#ECE4D8]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-md border border-[#EAE1D5]/60'
        }`}
      >
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#1E1611] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-semibold tracking-wide group-hover:bg-[#9E6B47] transition-colors">
            LA
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase font-mono font-medium text-[#9E6B47] -mt-0.5">
              Creative Planner
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#5C4D43] hover:text-[#1E1611] transition-colors relative py-1 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={profileData.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#5C4D43] border border-[#DECFC0] hover:bg-[#F4EFE6] transition-all"
          >
            <Download className="w-3 h-3 text-[#9E6B47]" />
            <span>CV PDF</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-[#1E1611] hover:bg-[#9E6B47] shadow-sm transition-all"
          >
            <span>Hợp tác</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-[#1E1611] hover:bg-[#F4EFE6] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl glass-editorial border border-[#ECE4D8] p-5 shadow-luxury space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#1E1611] hover:bg-[#F4EFE6] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#ECE4D8] flex gap-2">
            <a
              href={profileData.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-full text-xs font-mono font-medium border border-[#DECFC0] text-[#1E1611]"
            >
              Tải CV PDF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full text-xs font-medium bg-[#1E1611] text-white"
            >
              Hợp tác ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
