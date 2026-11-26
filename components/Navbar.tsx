'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Giới thiệu', href: '/' },
    { name: 'Dự án (Work)', href: '/work' },
    { name: 'Kinh nghiệm', href: '/working-experience' },
    { name: 'Kỹ năng & Tools', href: '/skills' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/work') {
      return (
        pathname === '/work' ||
        pathname === '/projects' ||
        pathname.startsWith('/work/') ||
        pathname.startsWith('/projects/')
      );
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        {/* Brand */}
        <Link href="/" className="brand">
          <img
            src="/images/avatar.jpg"
            alt={profileData.name}
            className="brand-img"
            width={40}
            height={40}
          />
          <span>{profileData.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex nav-links" aria-label="Chính">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={active ? 'active' : ''}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={profileData.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#8C5A3C]" />
            <span>CV PDF</span>
          </a>
          <a
            href={`tel:${profileData.phone.replace(/[^0-9]/g, '')}`}
            className="btn btn-primary btn-sm header-cta"
          >
            <span>{profileData.phone}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden nav-toggle"
          type="button"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(20,17,15,0.08)] bg-[#F8F6F1]/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-3.5 rounded-xl font-semibold text-base transition-colors ${
                  active
                    ? 'bg-[#14110F] text-white'
                    : 'text-[#635952] hover:text-[#14110F] hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[rgba(20,17,15,0.08)] flex flex-col gap-2">
            <a
              href={profileData.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full"
            >
              <Download className="w-4 h-4 text-[#8C5A3C]" />
              <span>Tải CV PDF</span>
            </a>
            <a
              href={`tel:${profileData.phone.replace(/[^0-9]/g, '')}`}
              className="btn btn-primary w-full"
            >
              <span>Gọi {profileData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
