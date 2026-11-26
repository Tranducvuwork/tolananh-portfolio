'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', href: '/' },
    { 
      name: 'Dự Án Riêng Biệt', 
      href: '/projects',
      subLinks: [
        { name: 'Nội Thất Minh Huy (B2B)', href: '/projects/minh-huy-furniture' },
        { name: 'La Cà Một Chút (F&B)', href: '/projects/la-ca-mot-chut' },
        { name: 'Tất Cả Dự Án & 13 Slides', href: '/projects' },
      ]
    },
    { name: 'Working Experience', href: '/working-experience' },
    { name: 'Liên Hệ', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? 'glass-editorial shadow-luxury border border-[#ECE4D8]'
            : 'bg-[#FAF7F2]/90 backdrop-blur-md border border-[#EAE1D5]/70 shadow-xs'
        }`}
      >
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.name} className="relative group/nav">
                <Link
                  href={link.href}
                  className={`text-xs font-mono font-medium tracking-wide transition-colors relative py-1 flex items-center gap-1 ${
                    active
                      ? 'text-[#1E1611] font-bold border-b-2 border-[#9E6B47]'
                      : 'text-[#5C4D43] hover:text-[#1E1611]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.subLinks && (
                    <ChevronDown className="w-3 h-3 text-[#9E6B47] group-hover/nav:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Dropdown for Sublinks */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl glass-editorial border border-[#ECE4D8] p-2 shadow-luxury opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto transition-all duration-200">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-2 rounded-xl text-xs font-mono text-[#5C4D43] hover:text-[#1E1611] hover:bg-[#FAF7F2] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-[#1E1611] hover:bg-[#9E6B47] shadow-sm transition-all"
          >
            <span>Hợp tác</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DECFC0]" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-[#1E1611] hover:bg-[#F4EFE6] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl glass-editorial border border-[#ECE4D8] p-5 shadow-luxury space-y-3">
          <div className="grid grid-cols-1 gap-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-[#1E1611] hover:bg-[#F4EFE6]"
            >
              Trang Chủ
            </Link>
            
            <div className="pt-2 pb-1 px-4 text-[10px] font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
              Các Hạng Mục Dự Án:
            </div>
            <Link
              href="/projects/minh-huy-furniture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[#5C4D43] hover:bg-[#F4EFE6] flex items-center justify-between"
            >
              <span>🛋️ Nội Thất Minh Huy (B2B)</span>
              <span className="text-[10px] text-[#9E6B47]">Xưởng</span>
            </Link>
            <Link
              href="/projects/la-ca-mot-chut"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[#5C4D43] hover:bg-[#F4EFE6] flex items-center justify-between"
            >
              <span>☕ Kênh La Cà Một Chút</span>
              <span className="text-[10px] text-[#9E6B47]">F&B</span>
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[#5C4D43] hover:bg-[#F4EFE6]"
            >
              📂 Tất Cả Dự Án & 13 Slide Gốc
            </Link>

            <div className="pt-2 pb-1 px-4 text-[10px] font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
              Hồ Sơ Năng Lực:
            </div>
            <Link
              href="/working-experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-[#1E1611] hover:bg-[#F4EFE6]"
            >
              Working Experience & Học Vấn
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-[#1E1611] hover:bg-[#F4EFE6]"
            >
              Liên Hệ Trực Tiếp
            </Link>
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
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full text-xs font-medium bg-[#1E1611] text-white"
            >
              Hợp tác ngay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
