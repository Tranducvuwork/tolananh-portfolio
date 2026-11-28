'use client';

import Link from 'next/link';
import { ArrowUp, Download } from 'lucide-react';
import { profileData } from '@/app/data';
import { useSiteData } from '@/components/SiteDataProvider';

const DEFAULT_SOCIAL_LINKS = [
  { name: 'Toạ Độ Gen Z (@toadogenz)', href: '/work?tab=genz' },
  { name: 'La Cà Một Chút (@la.camotchut)', href: '/work?tab=fnb' },
  { name: 'Datbike Hồng Phương', href: '/work?tab=datbike' },
];

export default function Footer() {
  const { persisted } = useSiteData();

  const footerCfg = persisted?.footer;
  const profileCfg = persisted?.siteData?.profile || persisted?.profile;

  const brandName: string =
    footerCfg?.brandName || profileCfg?.name || profileData.name;
  const slogan: string =
    footerCfg?.slogan ||
    'Creative Planner & Social Media Specialist. Sinh viên Quan Hệ Công Chúng (PR) Đại Học Văn Lang (2022 – 2026).';
  const phoneNumber: string =
    footerCfg?.phone || profileCfg?.phone || profileData.phone;
  const email: string =
    footerCfg?.email || profileCfg?.email || profileData.email;
  const copyrightText: string =
    footerCfg?.copyright ||
    `© ${new Date().getFullYear()} Tô Lan Anh Portfolio · Handcrafted with Be Vietnam Pro.`;
  const socialLinks: Array<{ id?: string; name: string; href: string }> =
    footerCfg?.socialLinks && Array.isArray(footerCfg.socialLinks)
      ? footerCfg.socialLinks
      : DEFAULT_SOCIAL_LINKS;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#14110F] text-[#D5CEBE] border-t border-[rgba(255,255,255,0.08)]">
      <div className="container space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[rgba(255,255,255,0.08)]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-2xl font-extrabold text-white tracking-tight">
              {brandName}
            </div>
            <p className="text-sm text-[#A68C72] leading-relaxed max-w-sm">
              {slogan}
            </p>
            <div className="text-xs text-[#D5CEBE] pt-1 space-y-1">
              <div>Hotline: <strong className="text-white">{phoneNumber}</strong></div>
              <div>Email: <strong className="text-white">{email}</strong></div>
            </div>
          </div>

          {/* Navigation Links: Pages (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C7B198]">
              Danh Mục Trang
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Trang Chủ (Giới thiệu)
              </Link>
              <Link href="/work" className="hover:text-white transition-colors">
                Dự Án Đã Làm (Work)
              </Link>
              <Link href="/working-experience" className="hover:text-white transition-colors">
                Học Vấn &amp; Kinh Nghiệm
              </Link>
              <Link href="/skills" className="hover:text-white transition-colors">
                Kỹ Năng &amp; Hệ Thống Tools
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Liên Hệ Trực Tiếp
              </Link>
            </div>
          </div>

          {/* Navigation Links: Focus Tracks (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C7B198]">
              Các Kênh TikTok
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {socialLinks.map((item, idx) => (
                <Link key={item.id || idx} href={item.href} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{item.name}</span>
                </Link>
              ))}
              <a 
                href={profileData.cvPdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 pt-1 text-[#8C5A3C]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải Hồ Sơ CV PDF</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C5A3C]">
          <div className="flex items-center gap-3">
            <span>{copyrightText}</span>
            <span className="text-white/20">|</span>
            <Link href="/edit" className="text-[#D5CEBE] hover:text-white transition-colors font-medium">
              Chỉnh Sửa Layout (/edit)
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
