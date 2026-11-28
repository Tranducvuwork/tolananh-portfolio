'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { profileData } from '@/app/data';

export interface NavLinkItem {
  id?: string;
  name: string;
  href: string;
  visible?: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [brandName, setBrandName] = useState(profileData.name);
  const [brandAvatar, setBrandAvatar] = useState(profileData.avatar);
  const [navLinks, setNavLinks] = useState<NavLinkItem[]>([
    { name: 'Giới thiệu', href: '/' },
    { name: 'Dự án (Work)', href: '/work' },
    { name: 'Kinh nghiệm', href: '/working-experience' },
    { name: 'Kỹ năng & Tools', href: '/skills' },
    { name: 'Liên hệ', href: '/contact' },
  ]);
  const [showPhone, setShowPhone] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState(profileData.phone);
  const [showCv, setShowCv] = useState(true);
  const [headerStyle, setHeaderStyle] = useState<'standard' | 'centered' | 'pill'>('standard');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tolananh_site_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.header) {
          if (parsed.header.brandName) setBrandName(parsed.header.brandName);
          if (parsed.header.avatarSrc) setBrandAvatar(parsed.header.avatarSrc);
          if (parsed.header.navLinks && Array.isArray(parsed.header.navLinks)) {
            setNavLinks(parsed.header.navLinks.filter((l: any) => l.visible !== false));
          }
          if (parsed.header.showPhone !== undefined) setShowPhone(parsed.header.showPhone);
          if (parsed.header.phone) setPhoneNumber(parsed.header.phone);
          if (parsed.header.showCv !== undefined) setShowCv(parsed.header.showCv);
          if (parsed.header.style) setHeaderStyle(parsed.header.style);
        } else if (parsed.profile) {
          if (parsed.profile.name) setBrandName(parsed.profile.name);
          if (parsed.profile.avatarSrc) setBrandAvatar(parsed.profile.avatarSrc);
          if (parsed.profile.phone) setPhoneNumber(parsed.profile.phone);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

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
      <div className={`container nav-inner ${headerStyle === 'centered' ? 'justify-between' : ''}`}>
        {/* Brand */}
        <Link href="/" className="brand">
          <Image
            src={brandAvatar || profileData.avatar}
            alt={brandName}
            className="brand-img object-cover object-center"
            width={40}
            height={40}
            priority
          />
          <span>{brandName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex nav-links ${headerStyle === 'pill' ? 'bg-white/80 px-4 py-1.5 rounded-full border border-[rgba(20,17,15,0.08)] shadow-xs' : ''}`} aria-label="Chính">
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
          {showCv && (
            <a
              href={profileData.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#8C5A3C]" />
              <span>CV PDF</span>
            </a>
          )}
          {showPhone && (
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
              className="btn btn-primary btn-sm header-cta"
            >
              <span>{phoneNumber}</span>
            </a>
          )}
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
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                    active ? 'bg-[#8C5A3C] text-white' : 'text-[#2D2723] hover:bg-black/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[rgba(20,17,15,0.08)] flex flex-col gap-2.5">
            {showCv && (
              <a
                href={profileData.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary justify-center w-full"
              >
                <Download className="w-4 h-4 text-[#8C5A3C]" />
                <span>Tải CV PDF</span>
              </a>
            )}
            {showPhone && (
              <a
                href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                className="btn btn-primary justify-center w-full"
              >
                <span>Gọi Hotline: {phoneNumber}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
