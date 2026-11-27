'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Coffee, FolderDown, ExternalLink, Sparkles, 
  Play, Eye, Heart, MessageCircle, Share2, 
  CheckCircle2, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight,
  Award, Layers, Compass, Bike
} from 'lucide-react';
import { featuredVideos, VideoItem, caseStudies, tiktokChannels } from '@/app/data';
import IPhone12ProMaxMockup from '@/components/IPhone12ProMaxMockup';

const genzVideos = featuredVideos.filter(v => v.category === 'genz');
const fnbVideos = featuredVideos.filter(v => v.category === 'fnb');
const bupskyVideos = featuredVideos.filter(v => v.category === 'bupsky');
const datbikeVideos = featuredVideos.filter(v => v.category === 'datbike');

// All 14 original landscape slides from updated Portfolio PDF
const allSlides = [
  { index: 1, title: 'Bìa Portfolio — My PORTFOLIO Tô Lan Anh', src: '/images/slides/slide_1.png', category: 'Overview' },
  { index: 2, title: 'ABOUT ME — Giới Thiệu Bản Thân, Học Vấn & Công Cụ', src: '/images/slides/slide_2.png', category: 'About' },
  { index: 3, title: 'Certificates & Training — QCC Mastery Hub & ColorME', src: '/images/slides/slide_3.png', category: 'Certificates' },
  { index: 4, title: 'Winner Pitching Project — Kế Hoạch Triển Khai Tivi HXY Hải Phi', src: '/images/slides/slide_4.png', category: 'Hai Phi TVC' },
  { index: 5, title: 'Project at HAI PHI Company — TikTok Channel, TVC & Fanpage Post', src: '/images/slides/slide_5.png', category: 'Hai Phi TVC' },
  { index: 6, title: 'Completed Photography Project (Điểm A+ Khóa Nhiếp Ảnh PR Văn Lang)', src: '/images/slides/slide_6.png', category: 'Photography' },
  { index: 7, title: 'Manage Facebook & Instagram Platforms for Suzuki Hồng Phương', src: '/images/slides/slide_7.png', category: 'Suzuki' },
  { index: 8, title: 'Suzuki Hồng Phương Media Publications (Tuyển Dụng, Fest 2025, Test Drive)', src: '/images/slides/slide_8.png', category: 'Suzuki' },
  { index: 9, title: 'Managed Social Media Content for Phat-Thuy Company (Nhà Xe Phát)', src: '/images/slides/slide_9.png', category: 'Phat Thuy' },
  { index: 10, title: 'Recruitment Content & Vận Chuyển Hàng Hóa Facebook Page (Nhà Xe Phát)', src: '/images/slides/slide_10.png', category: 'Phat Thuy' },
  { index: 11, title: 'Media Projects with Adobe Photoshop & Mockup Design', src: '/images/slides/slide_11.png', category: 'Graphic Design' },
  { index: 12, title: 'Design Projects Created with Adobe Photoshop (Milo, Orange Juice, Hoàng Tử Bé, Talkshow)', src: '/images/slides/slide_12.png', category: 'Graphic Design' },
  { index: 13, title: 'Brand Promoter PG Part-time (Sapporo, King Car, Farmers Union, ITO EN)', src: '/images/slides/slide_13.png', category: 'Brand Ambassador' },
  { index: 14, title: 'Thank You — Lời Cảm Ơn & Kết Nối Hợp Tác', src: '/images/slides/slide_14.png', category: 'Contact' },
];

export default function WorkPage() {
  // Category tab state: 'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'brand' | 'slides'
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'brand' | 'slides'>('all');

  // Active Video States
  const [activeGenzVideo, setActiveGenzVideo] = useState<VideoItem>(genzVideos[0] || featuredVideos[0]);
  const [activeFnbVideo, setActiveFnbVideo] = useState<VideoItem>(fnbVideos[0] || featuredVideos[0]);
  const [activeDatbikeVideo, setActiveDatbikeVideo] = useState<VideoItem>(datbikeVideos[0] || featuredVideos[0]);

  // Lightbox
  const [lightboxSlide, setLightboxSlide] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#14110F]">
      <Navbar />

      {/* Page Header - Clean Editorial Page Banner */}
      <section className="page-banner border-b border-[rgba(20,17,15,0.08)] bg-white">
        <div className="container space-y-3">
          <p className="eyebrow">
            HẠNG MỤC DỰ ÁN &amp; CÁC KÊNH TIKTOK
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight">
            Dự Án Đã Thực Hiện
          </h1>

          <p className="page-lead">
            Chọn danh mục bên dưới để lọc riêng từng kênh và dự án: 
            Kênh <strong className="text-[#14110F]">Toạ Độ Gen Z (@toadogenz)</strong>, 
            Kênh <strong className="text-[#14110F]">La Cà Một Chút (@la.camotchut)</strong>, 
            Dự án <strong className="text-[#14110F]">Búp Sky Cuisine</strong>, 
            Kênh <strong className="text-[#14110F]">Datbike Hồng Phương</strong>, 
            Chiến dịch Brand Pitching &amp; IMC hoặc Toàn bộ 14 Slide HD gốc.
          </p>

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

            <button
              onClick={() => setSelectedCategory('slides')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'slides'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#8C5A3C]" />
              <span>14 Slide Gốc HD (PDF)</span>
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
                  Toạ Độ Gen Z (@toadogenz)
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  1.051 Follower • 8.727 Thích • Bản đồ ăn – chơi – chill của Gen Z
                </p>
              </div>

              <a
                href="https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc"
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
                  tiktokUrl="https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc"
                  imageSrc="/images/channels/toadogenz_channel.jpg"
                  imageAlt="Giao diện kênh TikTok Toạ Độ Gen Z"
                  imageWidth={549}
                  imageHeight={1024}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
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
                        onClick={() => setActiveGenzVideo(v)}
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
                  La Cà Một Chút (@la.camotchut)
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  Review Cafe, F&amp;B &amp; Không gian trải nghiệm thư thái
                </p>
              </div>

              <a
                href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
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
                  tiktokUrl="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                  imageSrc="/images/channels/lacamotchut_channel.jpg"
                  imageAlt="Giao diện kênh TikTok La Cà Một Chút"
                  imageWidth={564}
                  imageHeight={1024}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
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
                        onClick={() => setActiveFnbVideo(v)}
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
                  Búp Sky Cuisine
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  Nhà hàng Rooftop Tầng 10 • 65-69 Nguyễn Thái Bình, Q.1 (cách Chợ Bến Thành 4 phút)
                </p>
              </div>

              <a
                href="https://www.tiktok.com/@bupskycuisine"
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
                  tiktokUrl="https://www.tiktok.com/@bupskycuisine"
                  imageSrc="/images/channels/bupsky_channel.jpg"
                  imageAlt="Thông số và video thực tế kênh TikTok Búp Sky Cuisine"
                  imageWidth={559}
                  imageHeight={1024}
                  badgeText="👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo"
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
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">133.1K</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">Tiệc sinh nhật riêng</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[rgba(20,17,15,0.08)]">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">109K</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">Clip tiệc âm nhạc</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[rgba(20,17,15,0.08)]">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#14110F]">37.7K</div>
                      <div className="text-[10px] text-[#635952] font-semibold mt-0.5">Rooftop Bến Thành</div>
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
                        href="https://www.tiktok.com/@bupskycuisine"
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
                  Datbike Hồng Phương (@datbikehongphuong)
                </h2>
                <p className="text-xs sm:text-sm text-[#635952] mt-1">
                  Kênh truyền thông xe máy điện thông minh Dat Bike tại đại lý Hồng Phương
                </p>
              </div>

              <a
                href="https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9BjNL1MnE9q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Mở Kênh TikTok @datbikehongphuong</span>
                <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
              </a>
            </div>

            {/* Datbike Video Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Spotlight Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] space-y-3 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                    {activeDatbikeVideo.views} views • Xe Điện Thông Minh
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#14110F] leading-snug">
                    {activeDatbikeVideo.title}
                  </h3>

                  <blockquote className="p-3 rounded-xl bg-[#F8F6F1] border-l-4 border-teal-600 text-xs sm:text-sm italic text-[#14110F]">
                    "{activeDatbikeVideo.hook}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#635952] leading-relaxed">
                    {activeDatbikeVideo.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={activeDatbikeVideo.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm w-full justify-center"
                    >
                      <span>Xem Video Trên TikTok @datbikehongphuong</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D5CEBE]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Video List */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                  Chọn video để xem chi tiết ({datbikeVideos.length})
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {datbikeVideos.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setActiveDatbikeVideo(v)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
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

                  {cs.slideImage && (
                    <div 
                      onClick={() => setLightboxSlide(4)}
                      className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white border border-[rgba(20,17,15,0.08)] cursor-pointer group"
                    >
                      <Image src={cs.slideImage} alt={cs.title} fill className="object-contain group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between text-xs">
                    <span className="text-[#635952]">Vai trò: {cs.role}</span>
                    <button 
                      onClick={() => setLightboxSlide(4)}
                      className="font-bold text-[#8C5A3C] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Xem Slide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. HẠNG MỤC: TOÀN BỘ 14 SLIDE PORTFOLIO GỐC HD (Show when 'all' or 'slides') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'slides') && (
        <section className="py-16 md:py-20 bg-[#F8F6F1]">
          <div className="container space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>NGUYÊN BẢN PORTFOLIO CHUẨN ĐỒ ÁN</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14110F] tracking-tight mt-1">
                  14 Trang Slide Gốc (Bản Thiết Kế Mới Nhất 2026)
                </h2>
                <p className="text-xs sm:text-sm text-[#635952]">
                  Bấm vào từng trang để phóng to toàn màn hình chất lượng cao hoặc tải file PDF gốc.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/Portfolio_ToLanAnh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FolderDown className="w-4 h-4 text-[#D5CEBE]" />
                  <span>Tải Portfolio PDF (14 Trang)</span>
                </a>
                <a
                  href="/ToLanAnh_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FolderDown className="w-4 h-4 text-[#8C5A3C]" />
                  <span>Tải CV Song Ngữ</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSlides.map((slide) => (
                <div
                  key={slide.index}
                  onClick={() => setLightboxSlide(slide.index)}
                  className="bg-white rounded-2xl overflow-hidden border border-[rgba(20,17,15,0.08)] shadow-xs hover:shadow-elevated transition-all group cursor-pointer"
                >
                  <div className="relative aspect-[16/9] w-full bg-[#EFECE4] overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                      <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Phóng to slide #{slide.index}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between border-t border-[rgba(20,17,15,0.06)]">
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <div className="text-xs font-bold text-[#8C5A3C]">
                        Trang {slide.index < 10 ? `0${slide.index}` : slide.index}/14 • {slide.category}
                      </div>
                      <div className="text-sm font-bold text-[#14110F] truncate">
                        {slide.title}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#8C5A3C] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Lightbox Modal for Slides */}
      {lightboxSlide !== null && (
        <div 
          onClick={() => setLightboxSlide(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl space-y-3 p-4"
          >
            <div className="flex items-center justify-between px-2 pt-1 text-white">
              <div className="text-sm font-bold">
                Trang {lightboxSlide}/14: {allSlides.find(s => s.index === lightboxSlide)?.title}
              </div>
              <button
                onClick={() => setLightboxSlide(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-black rounded-xl overflow-hidden">
              <Image
                src={`/images/slides/slide_${lightboxSlide}.png`}
                alt={`Slide ${lightboxSlide}`}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between px-2 pb-1 text-xs text-zinc-400">
              <button
                disabled={lightboxSlide <= 1}
                onClick={() => setLightboxSlide(lightboxSlide - 1)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Trang trước</span>
              </button>

              <span>Trang {lightboxSlide} / 14</span>

              <button
                disabled={lightboxSlide >= 14}
                onClick={() => setLightboxSlide(lightboxSlide + 1)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-colors"
              >
                <span>Trang sau</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
