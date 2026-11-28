'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomBlockRenderer, { CustomBlockContent } from '@/components/CustomBlockRenderer';
import {
  ArrowRight, Download, Phone, Mail, Coffee,
  CheckCircle2, ExternalLink, Compass, Bike
} from 'lucide-react';
import { profileData } from '@/app/data';
import { useSiteData } from '@/components/SiteDataProvider';

interface HomeBlockItem {
  id: string;
  title: string;
  visible: boolean;
  order: number;
  isCustom?: boolean;
  customContent?: CustomBlockContent;
}

const DEFAULT_HOME_BLOCKS: HomeBlockItem[] = [
  { id: 'hero', title: '1. Hero Banner & Chân Dung', visible: true, order: 0 },
  { id: 'nav-tabs', title: '2. Thanh Điều Hướng 4 Hạng Mục', visible: true, order: 1 },
  { id: 'channels', title: '3. Các Kênh TikTok Chủ Lực', visible: true, order: 2 },
  { id: 'secondary-note', title: '4. Khối Dự Án Búp Sky & Chứng Chỉ', visible: true, order: 3 },
  { id: 'contact', title: '5. Khối Kêu Gọi Hợp Tác (CTA)', visible: true, order: 4 },
];

export default function Home() {
  const { persisted } = useSiteData();

  const savedSite = persisted?.siteData;
  const profile = {
    name: savedSite?.profile?.name || persisted?.profile?.name || profileData.name,
    title: savedSite?.profile?.title || persisted?.profile?.title || profileData.title,
    phone: savedSite?.profile?.phone || persisted?.profile?.phone || profileData.phone,
    email: savedSite?.profile?.email || persisted?.profile?.email || profileData.email,
    address: savedSite?.profile?.address || persisted?.profile?.address || profileData.address,
    portraitSrc: savedSite?.profile?.portraitSrc || persisted?.profile?.portraitSrc || profileData.portrait,
  };

  const home = {
    eyebrow: savedSite?.home?.eyebrow ?? 'Tô Lan Anh · PR Đại Học Văn Lang',
    heading:
      savedSite?.home?.heading ??
      'Sáng tạo nội dung short-form &\nKế hoạch truyền thông đa kênh',
    lead: savedSite?.home?.lead ?? null,
    stat1Val: savedSite?.home?.stat1Val ?? '3+',
    stat1Label: savedSite?.home?.stat1Label ?? 'Kênh TikTok chủ lực',
    stat2Val: savedSite?.home?.stat2Val ?? '100K+',
    stat2Label: savedSite?.home?.stat2Label ?? 'Lượt tiếp cận người xem',
    stat3Val: savedSite?.home?.stat3Val ?? '100%',
    stat3Label: savedSite?.home?.stat3Label ?? 'Tự lên kịch bản & dựng',
    stat4Val: savedSite?.home?.stat4Val ?? 'Văn Lang',
    stat4Label: savedSite?.home?.stat4Label ?? 'Cử nhân PR chuyên nghiệp',
    channelsEyebrow: savedSite?.home?.channelsEyebrow ?? 'CÁC KÊNH TIKTOK CHỦ LỰC',
    channelsHeading: savedSite?.home?.channelsHeading ?? 'Phát triển nội dung & Định hình phong cách',
    secondaryNoteEyebrow: savedSite?.home?.secondaryNoteEyebrow ?? 'Các dự án & chứng chỉ chuyên môn',
    secondaryNoteText: savedSite?.home?.secondaryNoteText ?? null,
    ctaEyebrow: savedSite?.home?.ctaEyebrow ?? 'LIÊN HỆ & HỢP TÁC',
    ctaHeading:
      savedSite?.home?.ctaHeading ??
      'Bạn đang cần lên kế hoạch truyền thông\nhoặc sáng tạo nội dung short-form TikTok?',
    ctaSub:
      savedSite?.home?.ctaSub ??
      'Hãy liên hệ trực tiếp với mình qua điện thoại hoặc email để cùng trao đổi về dự án của bạn.',
  };

  const workCfg = savedSite?.work;
  const genzHandle = workCfg?.toadogenz?.handle || '@toadogenz';
  const genzTitle = workCfg?.toadogenz?.title || 'Toạ Độ Gen Z (@toadogenz)';
  const genzSubtitle =
    workCfg?.toadogenz?.subtitle ||
    'Bản đồ ăn – chơi – chill của Gen Z. Trực tiếp sản xuất video đại nhạc hội The World of Heineken (Dương Domic 66.6K, HIEUTHUHAI 40.5K, Charlie Puth 14K) và review ẩm thực.';
  const genzUrl =
    workCfg?.toadogenz?.url || 'https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc';
  const genzTopVideos =
    workCfg?.toadogenz?.videos && Array.isArray(workCfg.toadogenz.videos) && workCfg.toadogenz.videos.length >= 2
      ? [
          `${workCfg.toadogenz.videos[0].title} (${workCfg.toadogenz.videos[0].views} views)`,
          `${workCfg.toadogenz.videos[1].title} (${workCfg.toadogenz.videos[1].views} views)`,
        ]
      : [
          'Dương Domic live Heineken (66.6K views)',
          'HIEUTHUHAI "Không thể say" (40.5K views)',
        ];

  const lacaHandle = workCfg?.lacamotchut?.handle || '@la.camotchut';
  const lacaTitle = workCfg?.lacamotchut?.title || 'La Cà Một Chút (@la.camotchut)';
  const lacaSubtitle =
    workCfg?.lacamotchut?.subtitle ||
    'Review các quán cafe đẹp, tiệm bánh và trải nghiệm ẩm thực thư thái giữa lòng phố thị (Gem Cafe 73.1K, Go Gelato 31.6K, Yori Matcha 21.1K).';
  const lacaUrl =
    workCfg?.lacamotchut?.url || 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM';
  const lacaTopVideos =
    workCfg?.lacamotchut?.videos && Array.isArray(workCfg.lacamotchut.videos) && workCfg.lacamotchut.videos.length >= 2
      ? [
          `${workCfg.lacamotchut.videos[0].title} (${workCfg.lacamotchut.videos[0].views} views)`,
          `${workCfg.lacamotchut.videos[1].title} (${workCfg.lacamotchut.videos[1].views} views)`,
        ]
      : [
          'Gem Cafe sang trọng (73.1K views)',
          'Go Gelato giáng sinh (31.6K views)',
        ];

  const datbikeHandle = workCfg?.datbike?.handle || '@datbikehongphuong';
  const datbikeTitle =
    workCfg?.datbike?.title || 'Dat.bike Hồng Phương — Xe Máy Điện Thông Minh';
  const datbikeSubtitle =
    workCfg?.datbike?.subtitle ||
    'Truyền thông dòng xe máy điện thông minh Dat.bike tại đại lý Hồng Phương (1.253 Follower • Top video "Cụ rùa" 27.7K views, Dat Bike Era 5.2K views).';
  const datbikeUrl =
    workCfg?.datbike?.url || 'https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9Blz0Px6Pma';

  const homeBlocks: HomeBlockItem[] =
    persisted?.homeBlocks && Array.isArray(persisted.homeBlocks) && persisted.homeBlocks.length > 0
      ? (persisted.homeBlocks as HomeBlockItem[])
      : DEFAULT_HOME_BLOCKS;

  const moves = persisted?.moves || {};

  interface HomeTabItem {
    kicker: string;
    title: string;
    desc: string;
    href: string;
  }

  const defaultHomeTabs: HomeTabItem[] = [
    {
      kicker: 'Hạng Mục 01',
      title: 'Các Kênh TikTok & Dự Án',
      desc: 'Toạ Độ Gen Z, La Cà Một Chút, Datbike Hồng Phương & IMC',
      href: '/work',
    },
    {
      kicker: 'Hạng Mục 02',
      title: 'Kinh nghiệm & Học vấn',
      desc: 'PR Văn Lang, Chứng chỉ QCC (Xuất sắc) & ColorMe, Búp Sky & thực tế',
      href: '/working-experience',
    },
    {
      kicker: 'Hạng Mục 03',
      title: 'Kỹ năng & Tools',
      desc: 'CapCut, Photoshop, Canva, Meta Suite, TikTok Studio',
      href: '/skills',
    },
    {
      kicker: 'Hạng Mục 04',
      title: 'Liên hệ & Hợp tác',
      desc: `Hotline ${profile.phone}, Email & thông tin kết nối`,
      href: '/contact',
    },
  ];

  const homeTabs: HomeTabItem[] =
    Array.isArray(savedSite?.home?.navTabs) && savedSite.home.navTabs.length > 0
      ? savedSite.home.navTabs.map((tab: any, idx: number): HomeTabItem => ({
          kicker: tab?.kicker ?? defaultHomeTabs[idx]?.kicker ?? '',
          title: tab?.title ?? defaultHomeTabs[idx]?.title ?? '',
          desc: tab?.desc ?? defaultHomeTabs[idx]?.desc ?? '',
          href: tab?.href ?? defaultHomeTabs[idx]?.href ?? '/',
        }))
      : defaultHomeTabs;

  const getOffsetStyle = (blockId: string): React.CSSProperties | undefined => {
    const offset = moves[`home-${blockId}`];
    if (!offset || (offset.x === 0 && offset.y === 0)) return undefined;
    return { transform: `translate(${offset.x}px, ${offset.y}px)` };
  };

  const renderBlock = (block: HomeBlockItem) => {
    if (block.visible === false) return null;

    if (block.isCustom && block.customContent) {
      return (
        <section key={block.id} id={block.id} className="py-10" style={getOffsetStyle(block.id)}>
          <div className="container">
            <CustomBlockRenderer content={block.customContent} isEditable={false} />
          </div>
        </section>
      );
    }

    if (block.id === 'hero') {
      return (
        <section key={block.id} className="pt-28 pb-10 md:pt-36 md:pb-12" style={getOffsetStyle(block.id)}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="eyebrow !text-xs !tracking-wider">
                    {home.eyebrow}
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight leading-[1.15] whitespace-pre-line">
                    {home.heading}
                  </h1>

                  {home.lead ? (
                    <p className="page-lead whitespace-pre-line">{home.lead}</p>
                  ) : (
                    <p className="page-lead">
                      Xin chào, mình là <strong className="text-[#14110F] font-bold">{profile.name}</strong>.{' '}
                      Mình chuyên lên ý tưởng kịch bản, quay dựng short-form video và phát triển các kênh TikTok đa dạng chủ đề:
                      từ trào lưu giới trẻ <strong className="text-[#8C5A3C] font-semibold">@toadogenz</strong>,
                      phong cách cafe &amp; ẩm thực tone Be ấm áp <strong className="text-[#8C5A3C] font-semibold">@la.camotchut</strong>,
                      nhà hàng Rooftop Q.1 <strong className="text-[#8C5A3C] font-semibold">@bupskycuisine</strong> (133.1K views),
                      đến xe máy điện thông minh <strong className="text-[#8C5A3C] font-semibold">@datbikehongphuong</strong> và lập kế hoạch truyền thông tích hợp (IMC).
                    </p>
                  )}
                </div>

                {/* Core capabilities tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    Bắt Trend TikTok &amp; Kịch bản Gen Z
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    Tone Be &amp; Thẩm mỹ Cafe F&amp;B
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    Truyền Thông Xe Điện Dat Bike
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    Hoạch Định Kế Hoạch IMC
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link href="/work" className="btn btn-primary">
                    <span>Khám Phá Các Kênh &amp; Dự Án</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/working-experience" className="btn btn-secondary">
                    <span>Kinh Nghiệm &amp; Học Vấn</span>
                  </Link>
                  <a
                    href={profileData.cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary !px-3.5"
                  >
                    <Download className="w-4 h-4 text-[#8C5A3C]" />
                    <span>CV PDF</span>
                  </a>
                  <a
                    href="/Portfolio_ToLanAnh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary !px-3.5"
                  >
                    <Download className="w-4 h-4 text-[#8C5A3C]" />
                    <span>Portfolio PDF</span>
                  </a>
                </div>

                {/* Stats Bar */}
                <div className="pt-8 border-t border-[rgba(20,17,15,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">{home.stat1Val}</div>
                    <div className="text-xs text-[#635952] font-medium mt-0.5">{home.stat1Label}</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">{home.stat2Val}</div>
                    <div className="text-xs text-[#635952] font-medium mt-0.5">{home.stat2Label}</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">{home.stat3Val}</div>
                    <div className="text-xs text-[#635952] font-medium mt-0.5">{home.stat3Label}</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">{home.stat4Val}</div>
                    <div className="text-xs text-[#635952] font-medium mt-0.5">{home.stat4Label}</div>
                  </div>
                </div>
              </div>

              {/* Right Portrait (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[rgba(20,17,15,0.1)] bg-white shadow-[0_12px_40px_rgba(20,17,15,0.08)]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFECE4]">
                    <Image
                      src={profile.portraitSrc}
                      alt={profile.name}
                      fill
                      priority
                      className="object-cover object-[center_20%]"
                      unoptimized={profile.portraitSrc.startsWith('data:')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md text-white flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold tracking-tight">
                          {profile.name}
                        </div>
                        <div className="text-[11px] text-[#D5CEBE]">
                          Creative Planner · Social Media
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 font-medium">
                        PR Văn Lang
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white flex items-center justify-between border-t border-[rgba(20,17,15,0.06)]">
                    <span className="text-xs text-[#635952]">
                      Khu vực làm việc: {profile.address}
                    </span>
                    <a
                      href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs font-bold text-[#8C5A3C] hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (block.id === 'nav-tabs') {
      return (
        <section key={block.id} className="pb-16 md:pb-20" style={getOffsetStyle(block.id)}>
          <div className="container">
            <div className="home-tabs !mt-0">
              {homeTabs.map((tab, idx) => (
                <Link key={idx} href={tab.href} className="home-tab group">
                  <span>{tab.kicker}</span>
                  <div className="text-[#14110F] group-hover:text-[#8C5A3C] transition-colors font-bold">
                    {tab.title}
                  </div>
                  <div className="text-xs text-[#635952] font-normal leading-relaxed line-clamp-2">
                    {tab.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (block.id === 'channels') {
      return (
        <section key={block.id} className="py-20 bg-white border-y border-[rgba(20,17,15,0.08)]" style={getOffsetStyle(block.id)}>
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="eyebrow">{home.channelsEyebrow}</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight mt-1">
                  {home.channelsHeading}
                </h2>
              </div>
              <Link href="/work" className="btn btn-secondary btn-sm">
                <span>Xem Toàn Bộ Dự Án &amp; Video</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Channel 1: Toạ Độ Gen Z */}
              <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Xu Hướng Gen Z</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C5A3C]">{genzHandle}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                    {genzTitle}
                  </h3>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    {genzSubtitle}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                    {genzTopVideos.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C] flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                  <a
                    href={genzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                  >
                    <span>Mở TikTok</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link href="/work" className="btn btn-primary btn-sm !px-3">
                    <span>Chi Tiết</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Channel 2: La Cà Một Chút */}
              <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                      <Coffee className="w-3.5 h-3.5" />
                      <span>Cafe &amp; F&amp;B</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C5A3C]">{lacaHandle}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                    {lacaTitle}
                  </h3>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    {lacaSubtitle}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                    {lacaTopVideos.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C] flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                  <a
                    href={lacaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                  >
                    <span>Mở TikTok</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link href="/work" className="btn btn-primary btn-sm !px-3">
                    <span>Chi Tiết</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Channel 3: Datbike Hồng Phương */}
              <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold">
                      <Bike className="w-3.5 h-3.5" />
                      <span>Xe Điện Dat Bike</span>
                    </div>
                    <span className="text-xs font-semibold text-[#8C5A3C]">{datbikeHandle}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                    {datbikeTitle}
                  </h3>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    {datbikeSubtitle}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                      <span>Trải nghiệm bứt tốc &amp; công nghệ pin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                      <span>Điều hướng đăng ký lái thử trực tiếp</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                  <a
                    href={datbikeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                  >
                    <span>Mở TikTok</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link href="/work?tab=datbike" className="btn btn-primary btn-sm !px-3">
                    <span>Chi Tiết</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (block.id === 'secondary-note') {
      return (
        <section key={block.id} className="py-8 bg-white border-b border-[rgba(20,17,15,0.08)]" style={getOffsetStyle(block.id)}>
          <div className="container">
            <div className="p-5 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                  {home.secondaryNoteEyebrow}
                </span>
                {home.secondaryNoteText ? (
                  <p className="text-xs sm:text-sm text-[#635952] whitespace-pre-line">
                    {home.secondaryNoteText}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-[#635952]">
                    Nhà hàng Rooftop <strong>Búp Sky Cuisine (@bupskycuisine - {workCfg?.bupsky?.stat1Val || '133.1K'} views)</strong>, Chứng chỉ <strong>QCC Mastery Hub (Rank Excellent) &amp; ColorME Photoshop</strong> và Winner Pitching <strong>Tivi HXY Hải Phi</strong>.
                  </p>
                )}
              </div>
              <Link href="/work" className="btn btn-secondary btn-sm flex-shrink-0">
                <span>Xem Thêm Dự Án (Work)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8C5A3C]" />
              </Link>
            </div>
          </div>
        </section>
      );
    }

    if (block.id === 'contact') {
      return (
        <section key={block.id} className="py-20 bg-[#F8F6F1]" style={getOffsetStyle(block.id)}>
          <div className="container text-center max-w-2xl mx-auto space-y-6">
            <p className="eyebrow">{home.ctaEyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight whitespace-pre-line">
              {home.ctaHeading}
            </h2>
            <p className="text-base text-[#635952] whitespace-pre-line">
              {home.ctaSub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary">
                <Phone className="w-4 h-4" />
                <span>Gọi {profile.phone}</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#14110F]">
      <Navbar />
      {homeBlocks.map((block) => renderBlock(block))}
      <Footer />
    </main>
  );
}
