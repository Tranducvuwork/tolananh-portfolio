'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicCustomBlocksList from '@/components/DynamicCustomBlocksList';
import { 
  Coffee, ExternalLink, Sparkles, 
  Play, Eye, Heart, MessageCircle, Share2, 
  CheckCircle2, Award, Compass, Bike
} from 'lucide-react';
import { featuredVideos, VideoItem, caseStudies, tiktokChannels } from '@/app/data';
import IPhone12ProMaxMockup from '@/components/IPhone12ProMaxMockup';
import { useSiteData } from '@/components/SiteDataProvider';

const baseGenzVideos = featuredVideos.filter(v => v.category === 'genz');
const baseFnbVideos = featuredVideos.filter(v => v.category === 'fnb');
const bupskyVideos = featuredVideos.filter(v => v.category === 'bupsky');
const datbikeVideos = featuredVideos.filter(v => v.category === 'datbike');

export default function WorkPage() {
  const { persisted } = useSiteData();
  const workCfg = persisted?.siteData?.work;

  const genzVideos: VideoItem[] =
    workCfg?.toadogenz?.videos && Array.isArray(workCfg.toadogenz.videos)
      ? workCfg.toadogenz.videos.map((ov: any, idx: number) => {
          const base = baseGenzVideos.find((b) => b.id === ov.id) || baseGenzVideos[idx] || baseGenzVideos[0];
          return {
            ...base,
            id: ov.id || base.id,
            title: ov.title ?? base.title,
            views: String(ov.views ?? base.views).replace(/\s*views$/i, ''),
            hook: ov.hook ?? base.hook,
            description: ov.desc ?? base.description,
          };
        })
      : baseGenzVideos;

  const fnbVideos: VideoItem[] =
    workCfg?.lacamotchut?.videos && Array.isArray(workCfg.lacamotchut.videos)
      ? workCfg.lacamotchut.videos.map((ov: any, idx: number) => {
          const base = baseFnbVideos.find((b) => b.id === ov.id) || baseFnbVideos[idx] || baseFnbVideos[0];
          return {
            ...base,
            id: ov.id || base.id,
            title: ov.title ?? base.title,
            views: String(ov.views ?? base.views).replace(/\s*views$/i, ''),
            hook: ov.hook ?? base.hook,
            description: ov.desc ?? base.description,
          };
        })
      : baseFnbVideos;

  // Category tab state: 'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'brand'
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'brand'>('all');

  // Active Video IDs
  const [activeGenzId, setActiveGenzId] = useState<string>(baseGenzVideos[0]?.id || '');
  const [activeFnbId, setActiveFnbId] = useState<string>(baseFnbVideos[0]?.id || '');
  const [activeDatbikeVideo, setActiveDatbikeVideo] = useState<VideoItem>(datbikeVideos[0] || featuredVideos[0]);

  const activeGenzVideo = genzVideos.find((v) => v.id === activeGenzId) || genzVideos[0] || featuredVideos[0];
  const activeFnbVideo = fnbVideos.find((v) => v.id === activeFnbId) || fnbVideos[0] || featuredVideos[0];

  const cleanBannerLead = workCfg?.bannerLead
    ? String(workCfg.bannerLead)
        .replace(/,\s*Chiến dịch Brand Pitching & IMC\s*hoặc Toàn bộ 14 Slide[^.]*\.?/i, ' và Chiến dịch Brand Pitching & IMC.')
        .replace(/\s*hoặc Toàn bộ 14 Slide[^.]*\.?/gi, '.')
    : null;

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#14110F]">
      <Navbar />

      {/* Page Header - Clean Editorial Page Banner */}
      <section className="page-banner border-b border-[rgba(20,17,15,0.08)] bg-white">
        <div className="container space-y-3">
          <p className="eyebrow">
            {workCfg?.bannerEyebrow || 'HẠNG MỤC DỰ ÁN & CÁC KÊNH TIKTOK'}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight whitespace-pre-line">
            {workCfg?.bannerTitle || 'Dự Án Đã Thực Hiện'}
          </h1>

          {cleanBannerLead ? (
            <p className="page-lead whitespace-pre-line">{cleanBannerLead}</p>
          ) : (
            <p className="page-lead">
              Chọn danh mục bên dưới để lọc riêng từng kênh và dự án: 
              Kênh <strong className="text-[#14110F]">Toạ Độ Gen Z (@toadogenz)</strong>, 
              Kênh <strong className="text-[#14110F]">La Cà Một Chút (@la.camotchut)</strong>, 
              Dự án <strong className="text-[#14110F]">Búp Sky Cuisine</strong>, 
              Kênh <strong className="text-[#14110F]">Datbike Hồng Phương</strong>{' '}
              và Chiến dịch Brand Pitching &amp; IMC.
            </p>
          )}

          {/* Interactive Category Switcher */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              Tất Cả Danh Mục
            </button>

            <button
              onClick={() => setSelectedCategory('genz')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'genz'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-orange-600" />
              <span>Toạ Độ Gen Z (@toadogenz)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('fnb')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'fnb'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-[#8C5A3C]" />
              <span>La Cà Một Chút (@la.camotchut)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('bupsky')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'bupsky'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Búp Sky Cuisine</span>
            </button>

            <button
              onClick={() => setSelectedCategory('datbike')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'datbike'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Bike className="w-3.5 h-3.5 text-teal-600" />
              <span>Datbike Hồng Phương (@datbikehongphuong)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('brand')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'brand'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#8C5A3C]" />
              <span>Brand Pitching &amp; IMC</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. HẠNG MỤC: TOẠ ĐỘ GEN Z (Show when 'all' or 'genz') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'genz') && (
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">
                  {workCfg?.toadogenz?.title || 'Toạ Độ Gen Z (@toadogenz)'}
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  {(workCfg?.toadogenz?.subtitle || '1.129 Follower • 8.729 Thích • Bản đồ ăn – chơi – chill của Gen Z')
                    .replace('1.051 Follower • 8.727 Thích', '1.129 Follower • 8.729 Thích')}
                </p>
              </div>

              <a
                href={workCfg?.toadogenz?.url || 'https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Mở Kênh TikTok @toadogenz</span>
                <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
              </a>
            </div>

            {/* Gen Z Phone Screenshot + Video Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Virtual Interactive iPhone 12 Pro Max Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <IPhone12ProMaxMockup
                  channelName="Toạ Độ Gen Z"
                  handle="@toadogenz"
                  tiktokUrl={workCfg?.toadogenz?.url || 'https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc'}
                  imageSrc={workCfg?.toadogenz?.imageSrc || '/images/channels/toadogenz_grid.jpg'}
                  imageAlt="Giao diện kênh TikTok Toạ Độ Gen Z"
                  imageWidth={549}
                  imageHeight={466}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
                  profileHeader={{
                    name: 'Toạ độ gen Z',
                    handle: '@toadogenz',
                    avatarSrc: '/images/channels/toadogenz_avatar.jpg',
                    following: '1',
                    followers: '1.129',
                    likes: '8.729',
                    bioLines: [
                      '📍 Bản đồ ăn – chơi – chill của Gen Z',
                      '🔥 Update tọa độ hot & trend mới',
                      '🍜 Ăn | ☕ Chill | 🎨 Chơi | 📸 Check-in',
                      '👇 Không biết đi đâu? Xem ở đây.'
                    ],
                    actionBtn1: 'Theo dõi',
                    actionBtn2: 'Nhắn tin'
                  }}
                />
              </div>

              {/* Right Side: Active Video Info & Real Videos List */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Video Spotlight Box */}
                <div className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-900 bg-orange-100 px-2.5 py-0.5 rounded-full">
                      Video Đang Chọn: {activeGenzVideo.views} views
                    </span>
                    <a
                      href={activeGenzVideo.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#8C5A3C] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Xem Trên TikTok</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#14110F] leading-snug">
                    {activeGenzVideo.title}
                  </h3>

                  <blockquote className="p-3 rounded-xl bg-white border-l-4 border-orange-500 text-xs sm:text-sm italic text-[#14110F]">
                    "{activeGenzVideo.hook}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#635952] leading-relaxed">
                    {activeGenzVideo.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeGenzVideo.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2D2723] bg-white px-2.5 py-1 rounded-lg border border-[rgba(20,17,15,0.06)]">
                        <CheckCircle2 className="w-3 h-3 text-orange-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* List of Real Videos on Channel */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                      Danh sách video thực tế trên kênh ({genzVideos.length})
                    </span>
                    <span className="text-xs text-[#635952]">Nhấn vào từng video để xem chi tiết</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {genzVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveGenzId(v.id)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeGenzVideo.id === v.id
                            ? 'bg-white border-orange-500 shadow-md ring-1 ring-orange-500'
                            : 'bg-white/80 border-[rgba(20,17,15,0.08)] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <span className="text-[10px] font-bold text-orange-700">{v.views} views</span>
                            <h5 className="text-xs font-bold text-[#14110F] line-clamp-1">{v.title}</h5>
                            <p className="text-[11px] text-[#635952] line-clamp-1">{v.hook}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. HẠNG MỤC: LA CÀ MỘT CHÚT (Show when 'all' or 'fnb') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'fnb') && (
        <section className="py-16 md:py-20 bg-[#F8F6F1] border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">
                  {workCfg?.lacamotchut?.title || 'La Cà Một Chút (@la.camotchut)'}
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  {workCfg?.lacamotchut?.subtitle && workCfg.lacamotchut.subtitle !== 'Review Cafe, F&B & Không gian trải nghiệm thư thái'
                    ? workCfg.lacamotchut.subtitle
                    : '196 Follower • 4.496 Thích • Review Cafe, F&B & Không gian trải nghiệm thư thái'}
                </p>
              </div>

              <a
                href={workCfg?.lacamotchut?.url || 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Mở Kênh TikTok @la.camotchut</span>
                <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
              </a>
            </div>

            {/* La Ca Phone Mockup + Video List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Virtual Interactive iPhone 12 Pro Max Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <IPhone12ProMaxMockup
                  channelName="La Cà Một Chút"
                  handle="@la.camotchut"
                  tiktokUrl={workCfg?.lacamotchut?.url || 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM'}
                  imageSrc={workCfg?.lacamotchut?.imageSrc || '/images/channels/lacamotchut_grid.jpg'}
                  imageAlt="Giao diện kênh TikTok La Cà Một Chút"
                  imageWidth={564}
                  imageHeight={984}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
                  profileHeader={{
                    name: 'La Cà Một Chút',
                    handle: '@la.camotchut',
                    avatarSrc: '/images/channels/lacamotchut_avatar.jpg',
                    following: '1',
                    followers: '196',
                    likes: '4.496',
                    bioLines: [
                      '🍜 Ăn | ☕ Chill | 🎨 Chơi | 📸 Check-in'
                    ],
                    actionBtn1: 'Theo dõi',
                    actionBtn2: 'Nhắn tin'
                  }}
                />
              </div>

              {/* Right Side: Active Video Info & Real Videos List */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Video Box */}
                <div className="p-6 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] space-y-3 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C] bg-amber-100 px-2.5 py-0.5 rounded-full">
                      Video Đang Chọn: {activeFnbVideo.views} views
                    </span>
                    <a
                      href={activeFnbVideo.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#8C5A3C] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Xem Trên TikTok</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#14110F] leading-snug">
                    {activeFnbVideo.title}
                  </h3>

                  <blockquote className="p-3 rounded-xl bg-[#F8F6F1] border-l-4 border-[#8C5A3C] text-xs sm:text-sm italic text-[#14110F]">
                    "{activeFnbVideo.hook}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#635952] leading-relaxed">
                    {activeFnbVideo.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeFnbVideo.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2D2723] bg-[#F8F6F1] px-2.5 py-1 rounded-lg border border-[rgba(20,17,15,0.06)]">
                        <CheckCircle2 className="w-3 h-3 text-[#8C5A3C]" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* List of Real Videos on Channel */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                      Danh sách địa điểm &amp; video thực tế ({fnbVideos.length})
                    </span>
                    <span className="text-xs text-[#635952]">Nhấn vào từng video để xem chi tiết</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fnbVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveFnbId(v.id)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeFnbVideo.id === v.id
                            ? 'bg-white border-[#8C5A3C] shadow-md ring-1 ring-[#8C5A3C]'
                            : 'bg-white/80 border-[rgba(20,17,15,0.08)] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">{v.views} views</span>
                            <h5 className="text-xs font-bold text-[#14110F] line-clamp-1">{v.title}</h5>
                            <p className="text-[11px] text-[#635952] line-clamp-1">{v.hook}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2.5 HẠNG MỤC: BÚP SKY CUISINE (Show when 'all', 'bupsky', or 'fnb') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'bupsky' || selectedCategory === 'fnb') && (
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">
                  {workCfg?.bupsky?.title || 'Búp Sky Cuisine (@bupskycuisine)'}
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  {workCfg?.bupsky?.subtitle && workCfg.bupsky.subtitle !== 'Nhà hàng Rooftop Tầng 10 • 65-69 Nguyễn Thái Bình, Q.1 (cách Chợ Bến Thành 4 phút)'
                    ? workCfg.bupsky.subtitle
                    : '838 Follower • 34.1K Thích • Nhà hàng Rooftop Tầng 10, 65-69 Nguyễn Thái Bình, Q.1'}
                </p>
              </div>

              <a
                href={workCfg?.bupsky?.url || 'https://www.tiktok.com/@bupskycuisine'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Mở Kênh TikTok Búp Sky</span>
                <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
              </a>
            </div>

            {/* Búp Sky Metrics & Channel Screenshot Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Virtual Interactive iPhone 12 Pro Max Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <IPhone12ProMaxMockup
                  channelName="Búp Sky Cuisine"
                  handle="@bupskycuisine"
                  tiktokUrl={workCfg?.bupsky?.url || 'https://www.tiktok.com/@bupskycuisine'}
                  imageSrc={workCfg?.bupsky?.imageSrc || '/images/channels/bupsky_grid.jpg'}
                  imageAlt="Thông số và video thực tế kênh TikTok Búp Sky Cuisine"
                  imageWidth={559}
                  imageHeight={976}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
                  profileHeader={{
                    name: 'bupskycuisine',
                    handle: '@bupskycuisine',
                    avatarSrc: '/images/channels/bupsky_avatar.jpg',
                    following: '82',
                    followers: '838',
                    likes: '34.1K',
                    bioLines: [
                      'Where flavor meets lifestyle! ✨️🍽',
                      'Tầng 10, 65-69 Nguyễn Thái Bình, Q.1, HCMC'
                    ],
                    actionBtn1: 'Theo dõi',
                    actionBtn2: 'Nhắn tin'
                  }}
                />
              </div>

              {/* Metrics & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Channel Stats Overview */}
                <div className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                    Thông số video nổi bật trên kênh Búp Sky Cuisine
                  </span>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3.5 rounded-xl bg-white border border-[rgba(20,17,15,0.08)]">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">{workCfg?.bupsky?.stat1Val || '133.1K'}</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">{workCfg?.bupsky?.stat1Label || 'Tiệc sinh nhật riêng'}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[rgba(20,17,15,0.08)]">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">{workCfg?.bupsky?.stat2Val || '109K'}</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">{workCfg?.bupsky?.stat2Label || 'Clip tiệc âm nhạc'}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[rgba(20,17,15,0.08)]">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">{workCfg?.bupsky?.stat3Val || '37.7K'}</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">{workCfg?.bupsky?.stat3Label || 'Rooftop Bến Thành'}</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.08)] text-xs text-[#2D2723]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8C5A3C] flex-shrink-0 mt-0.5" />
                      <span>Video <strong>"Sinh nhật và các dịp đặc biệt, để Búp lo!"</strong>: Đã ghim, đạt 133.1K lượt xem tự nhiên.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8C5A3C] flex-shrink-0 mt-0.5" />
                      <span>Video <strong>"Khoảnh khắc sự kiện &amp; tiệc âm nhạc"</strong>: Đã ghim, đạt 109K lượt xem.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8C5A3C] flex-shrink-0 mt-0.5" />
                      <span>Video <strong>"Nhà hàng Rooftop cách Chợ Bến Thành 4 phút đi bộ"</strong>: Đã ghim, đạt 37.7K lượt xem.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8C5A3C] flex-shrink-0 mt-0.5" />
                      <span>Nội dung đồng hành: <strong>World Luxury Restaurant Awards</strong>, Sunset Cocktail Buy 1 Get 1 (756 views) và đêm tiệc Rooftop (1.131 views).</span>
                    </div>
                  </div>
                </div>

                {/* Video Items on Búp Sky */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                    Các video thực tế trên kênh Búp Sky Cuisine ({bupskyVideos.length})
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bupskyVideos.map((v) => (
                      <a
                        key={v.id}
                        href={v.tiktokUrl || 'https://www.tiktok.com/@bupskycuisine'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] hover:shadow-sm hover:border-[#8C5A3C] transition-all block text-left group"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">{v.views} views</span>
                            <h5 className="text-xs font-bold text-[#14110F] line-clamp-1 group-hover:text-[#8C5A3C] transition-colors">{v.title}</h5>
                            <p className="text-[11px] text-[#635952] line-clamp-1">{v.hook}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. HẠNG MỤC: DATBIKE HỒNG PHƯƠNG (Show when 'all' or 'datbike') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'datbike') && (
        <section className="py-16 md:py-20 bg-[#F8F6F1] border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">
                  {workCfg?.datbike?.title || 'Dat.bike Hồng Phương (@datbikehongphuong)'}
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  {workCfg?.datbike?.subtitle || '1.253 Follower • 6.148 Thích • Đại lý xe máy điện Dat.bike (38 Nguyễn Thị Định, P. Bình Trưng)'}
                </p>
              </div>

              <a
                href={workCfg?.datbike?.url || 'https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9Blz0Px6Pma'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Mở Kênh TikTok {workCfg?.datbike?.handle || '@datbikehongphuong'}</span>
                <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
              </a>
            </div>

            {/* Datbike Phone Mockup + Video List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Virtual Interactive iPhone 12 Pro Max Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <IPhone12ProMaxMockup
                  channelName="Dat.bike Hồng Phương"
                  handle="@datbikehongphuong"
                  tiktokUrl="https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9Blz0Px6Pma"
                  imageSrc="/images/channels/datbike_grid.jpg"
                  imageAlt="Giao diện và video thực tế kênh TikTok Dat.bike Hồng Phương"
                  imageWidth={552}
                  imageHeight={969}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
                  profileHeader={{
                    name: 'Dat.bike Hồng Phương',
                    handle: '@datbikehongphuong',
                    avatarSrc: '/images/channels/datbike_avatar.jpg',
                    following: '60',
                    followers: '1.253',
                    likes: '6.148',
                    bioLines: [
                      'Đại lý xe máy điện Dat.bike',
                      '38 Nguyễn Thị Định, P. Bình Trưng',
                      'ĐT: 0799700777'
                    ],
                    actionBtn1: 'Theo dõi',
                    actionBtn2: 'Nhắn tin'
                  }}
                />
              </div>

              {/* Right Side: Active Video Info & Real Videos List */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Video Box */}
                <div className="p-6 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] space-y-3 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                      Video Đang Chọn: {activeDatbikeVideo.views} views
                    </span>
                    <a
                      href={activeDatbikeVideo.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Xem Trên TikTok</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#14110F] leading-snug">
                    {activeDatbikeVideo.title}
                  </h3>

                  <blockquote className="p-3 rounded-xl bg-[#F8F6F1] border-l-4 border-teal-600 text-xs sm:text-sm italic text-[#14110F]">
                    "{activeDatbikeVideo.hook}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#635952] leading-relaxed">
                    {activeDatbikeVideo.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeDatbikeVideo.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2D2723] bg-[#F8F6F1] px-2.5 py-1 rounded-lg border border-[rgba(20,17,15,0.06)]">
                        <CheckCircle2 className="w-3 h-3 text-teal-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* List of Real Videos on Channel */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                      Danh sách video thực tế trên kênh ({datbikeVideos.length})
                    </span>
                    <span className="text-xs text-[#635952]">Nhấn vào từng video để xem chi tiết</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {datbikeVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveDatbikeVideo(v)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeDatbikeVideo.id === v.id
                            ? 'bg-white border-teal-600 shadow-md ring-1 ring-teal-600'
                            : 'bg-white/80 border-[rgba(20,17,15,0.08)] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <span className="text-[10px] font-bold text-teal-700">{v.views} views</span>
                            <h5 className="text-xs font-bold text-[#14110F] line-clamp-1">{v.title}</h5>
                            <p className="text-[11px] text-[#635952] line-clamp-2">{v.hook}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. HẠNG MỤC: BRAND CAMPAIGNS (Show when 'all' or 'brand') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'brand') && (
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                <Award className="w-3.5 h-3.5 text-[#8C5A3C]" />
                <span>HẠNG MỤC: CHIẾN DỊCH BRAND PITCHING &amp; IMC</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">
                Chiến Dịch IMC &amp; Social Media Doanh Nghiệp
              </h2>
              <p className="text-xs sm:text-sm text-[#635952]">
                Winner Pitching Hải Phi Tivi HXY, Suzuki Hồng Phương và Doanh nghiệp Vận tải Phát Thủy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.filter(c => !['minh-huy-furniture', 'la-ca-mot-chut', 'bup-sky-cuisine'].includes(c.id)).map((cs) => (
                <div key={cs.id} className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-[#8C5A3C] font-semibold">
                        {cs.badge}
                      </span>
                      <span className="text-[#635952]">{cs.timeline}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#14110F] leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-[#635952] line-clamp-3">
                      {cs.overview}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[rgba(20,17,15,0.08)]">
                      {cs.metrics.slice(0, 2).map((m, mi) => (
                        <div key={mi} className="p-2.5 rounded-xl bg-white text-center">
                          <div className="text-base font-bold text-[#14110F]">{m.value}</div>
                          <div className="text-[10px] text-[#635952] line-clamp-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between text-xs">
                    <span className="text-[#635952]">Vai trò: {cs.role}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Dynamic Custom Layout Blocks Added via /edit */}
      <DynamicCustomBlocksList page="work" />

      <Footer />
    </main>
  );
}
