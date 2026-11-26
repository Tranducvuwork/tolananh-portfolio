'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, Send } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về tôi', href: '#about' },
    { name: 'TikTok & Video', href: '#tiktok-showcase' },
    { name: 'Dự án (Case Studies)', href: '#case-studies' },
    { name: 'Kinh nghiệm', href: '#experience' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C4AF9A] to-[#E8DEC8] flex items-center justify-center text-[#2D231C] font-serif font-bold text-lg shadow-inner group-hover:scale-105 transition-transform">
            LA
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D231C] group-hover:text-[#84674C] transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#84674C] -mt-0.5 font-sans">
              Creative Planner
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#5A493C] hover:text-[#84674C] transition-colors relative py-1 tracking-wide after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#84674C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#BFA285] text-xs font-semibold text-[#644D38] hover:bg-[#F2E8DC] transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải CV PDF</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#84674C] text-xs font-semibold text-white hover:bg-[#644D38] transition-all shadow-sm shadow-[#84674C]/20 hover:shadow-md hover:scale-[1.02]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Kết nối ngay</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#5A493C] hover:bg-[#F2E8DC] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8DEC8] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#2D231C] hover:text-[#84674C]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={profileData.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#BFA285] text-xs font-semibold text-[#644D38]"
            >
              <Download className="w-4 h-4" />
              <span>Tải CV PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#84674C] text-xs font-semibold text-white"
            >
              <Send className="w-4 h-4" />
              <span>Liên hệ hợp tác</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
