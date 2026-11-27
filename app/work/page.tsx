'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Sofa, Coffee, FolderDown, ExternalLink, Sparkles, Film, 
  Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, 
  CheckCircle2, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight,
  TrendingUp, Award, Layers, Eye, Hammer, ShieldCheck, Truck, Cake,
  Compass, Zap, Bike
} from 'lucide-react';
import { featuredVideos, VideoItem, caseStudies, tiktokChannels } from '@/app/data';

const genzVideos = featuredVideos.filter(v => v.category === 'genz');
const fnbVideos = featuredVideos.filter(v => v.category === 'fnb');
const datbikeVideos = featuredVideos.filter(v => v.category === 'datbike');
const furnitureVideos = featuredVideos.filter(v => v.category === 'furniture');

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
  // Category tab state: 'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'furniture' | 'brand' | 'slides'
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'furniture' | 'brand' | 'slides'>('all');

  // Gen Z Video Phone State
  const [activeGenzVideo, setActiveGenzVideo] = useState<VideoItem>(genzVideos[0] || featuredVideos[0]);
  const [isGenzPlaying, setIsGenzPlaying] = useState<boolean>(true);
  const [isGenzMuted, setIsGenzMuted] = useState<boolean>(false);
  const [genzLikes, setGenzLikes] = useState<number>(19500);
  const [hasGenzLiked, setHasGenzLiked] = useState<boolean>(false);

  // La Ca Video Phone State & View Mode ('video' | 'mockup')
  const [fnbViewMode, setFnbViewMode] = useState<'video' | 'mockup'>('video');
  const [activeFnbVideo, setActiveFnbVideo] = useState<VideoItem>(fnbVideos[0] || featuredVideos[0]);
  const [isFnbPlaying, setIsFnbPlaying] = useState<boolean>(true);
  const [isFnbMuted, setIsFnbMuted] = useState<boolean>(false);
  const [fnbLikes, setFnbLikes] = useState<number>(14800);
  const [hasFnbLiked, setHasFnbLiked] = useState<boolean>(false);

  // Datbike Video Phone State
  const [activeDatbikeVideo, setActiveDatbikeVideo] = useState<VideoItem>(datbikeVideos[0] || featuredVideos[0]);
  const [isDatbikePlaying, setIsDatbikePlaying] = useState<boolean>(true);
  const [isDatbikeMuted, setIsDatbikeMuted] = useState<boolean>(false);
  const [datbikeLikes, setDatbikeLikes] = useState<number>(12300);
  const [hasDatbikeLiked, setHasDatbikeLiked] = useState<boolean>(false);

  // Minh Huy Video Phone State
  const [activeFurnVideo, setActiveFurnVideo] = useState<VideoItem>(furnitureVideos[0] || featuredVideos[0]);
  const [isFurnPlaying, setIsFurnPlaying] = useState<boolean>(true);
  const [isFurnMuted, setIsFurnMuted] = useState<boolean>(false);
  const [furnLikes, setFurnLikes] = useState<number>(8450);
  const [hasFurnLiked, setHasFurnLiked] = useState<boolean>(false);

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
            Chọn danh mục bên dưới để lọc riêng từng phân mảng dự án: 
            Kênh trào lưu giới trẻ <strong className="text-[#14110F]">@toadogenz</strong>, Kênh F&amp;B tone Be <strong className="text-[#14110F]">@la.camotchut</strong>, Kênh xe điện <strong className="text-[#14110F]">@datbikehongphuong</strong>, Dự án xưởng B2B Minh Huy, Chiến dịch Brand Pitching &amp; IMC hoặc Toàn bộ 13 Slide HD gốc.
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
              <span>Búp Sky Cuisine (@bupskycuisine)</span>
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
              onClick={() => setSelectedCategory('furniture')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'furniture'
                  ? 'bg-[#14110F] text-white shadow-xs'
                  : 'bg-[#F8F6F1] text-[#635952] border border-[rgba(20,17,15,0.08)] hover:bg-white hover:text-[#14110F]'
              }`}
            >
              <Sofa className="w-3.5 h-3.5 text-[#8C5A3C]" />
              <span>Nội Thất Minh Huy (Dự án B2B)</span>
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
        <section className="py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-orange-900">
                  <Compass className="w-3.5 h-3.5" />
                  <span>HẠNG MỤC: XU HƯỚNG &amp; PHONG CÁCH SỐNG GEN Z</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                  Kênh Toạ Độ Gen Z (@toadogenz)
                </h2>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Bắt nhịp xu hướng TikTok nhanh nhạy, khai thác góc nhìn hài hước, chân thực về đời sống sinh viên Văn Lang, những trào lưu biến hình và văn hóa giới trẻ với tỷ lệ chia sẻ tự nhiên cao.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Xem Kênh TikTok @toadogenz</span>
                  <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
                </a>
              </div>
            </div>

            {/* Gen Z Phone Mockup + Video Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="phone-mockup-pro select-none relative">
                  <div className="phone-dynamic-island flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-[9px] font-mono text-zinc-400">@toadogenz</span>
                  </div>

                  <div 
                    onClick={() => setIsGenzPlaying(!isGenzPlaying)}
                    className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeGenzVideo.gradient} opacity-90 transition-all duration-700`} />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-orange-300 border border-white/20 mb-2">
                        TOẠ ĐỘ GEN Z • TREND VĂN LANG
                      </span>
                      <h4 className="text-lg font-bold text-white leading-tight drop-shadow">
                        {activeGenzVideo.title}
                      </h4>
                      <p className="text-xs text-zinc-200 italic line-clamp-3 mt-2 px-2">
                        "{activeGenzVideo.hook}"
                      </p>
                    </div>

                    {!isGenzPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    <div className="relative z-20 pt-12 px-4 flex items-center justify-between text-white/90">
                      <span className="text-[10px] font-mono uppercase bg-black/40 px-2 py-0.5 rounded">
                        CapCut: {activeGenzVideo.capcutTemplate}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsGenzMuted(!isGenzMuted);
                        }}
                        className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center"
                      >
                        {isGenzMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Right side TikTok icons */}
                    <div className="relative z-20 pb-4 px-4 flex items-end justify-between text-white">
                      <div className="space-y-1 text-left">
                        <div className="text-xs font-bold">@toadogenz</div>
                        <p className="text-[11px] text-zinc-300 line-clamp-2">{activeGenzVideo.description}</p>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasGenzLiked) {
                              setGenzLikes(genzLikes + 1);
                              setHasGenzLiked(true);
                            }
                          }}
                          className="flex flex-col items-center gap-0.5"
                        >
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${hasGenzLiked ? 'bg-red-500 text-white' : 'bg-black/40 text-white'}`}>
                            <Heart className="w-4 h-4 fill-current" />
                          </div>
                          <span className="text-[10px] font-mono">{genzLikes.toLocaleString()}</span>
                        </button>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeGenzVideo.comments}</span>
                        </div>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeGenzVideo.shares}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                      Kịch Bản Đang Xem: {activeGenzVideo.title}
                    </span>
                    <span className="text-xs font-semibold text-[#635952]">{activeGenzVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-white border-l-4 border-orange-600 text-sm italic text-[#14110F]">
                    "{activeGenzVideo.hook}"
                  </blockquote>

                  <p className="text-sm text-[#635952] leading-relaxed">
                    {activeGenzVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                    Điểm nổi bật kịch bản
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeGenzVideo.highlights.map((h, hi) => (
                      <div key={hi} className="p-3 rounded-xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.06)] flex items-center gap-2.5 text-xs text-[#2D2723]">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                        <span>{h}</span>
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
        <section className="py-20 bg-[#F8F6F1] border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                  <Coffee className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  <span>HẠNG MỤC: F&amp;B LIFESTYLE &amp; CAFE REVIEW</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                  Kênh La Cà Một Chút (@la.camotchut) — Tone Be Ấm Áp
                </h2>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Review cafe hidden gems, tiệm bánh thủ công với ánh sáng tự nhiên dịu nhẹ, voiceover nhẹ nhàng, âm thanh xé bánh ASMR và phong cách nữ tính, thẩm mỹ.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Xem Kênh TikTok @la.camotchut</span>
                  <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
                </a>
              </div>
            </div>

            {/* La Ca Phone Mockup + Video List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Phone Frame Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                {/* Switcher between Video Player (Ảnh 1) & TikTok Mockup (Ảnh 2) */}
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] shadow-xs mb-4">
                  <button
                    type="button"
                    onClick={() => setFnbViewMode('video')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      fnbViewMode === 'video'
                        ? 'bg-[#8C5A3C] text-white shadow-xs'
                        : 'text-[#635952] hover:text-[#14110F]'
                    }`}
                  >
                    Ảnh 1: Video Kịch Bản
                  </button>
                  <button
                    type="button"
                    onClick={() => setFnbViewMode('mockup')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      fnbViewMode === 'mockup'
                        ? 'bg-[#8C5A3C] text-white shadow-xs'
                        : 'text-[#635952] hover:text-[#14110F]'
                    }`}
                  >
                    Ảnh 2: Giao Diện Kênh TikTok
                  </button>
                </div>

                <div className="phone-mockup-pro select-none relative">
                  <div className="phone-dynamic-island flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-[9px] font-mono text-zinc-400">@la.camotchut</span>
                  </div>

                  {fnbViewMode === 'video' ? (
                    <div 
                      onClick={() => setIsFnbPlaying(!isFnbPlaying)}
                      className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${activeFnbVideo.gradient} opacity-90 transition-all duration-700`} />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                        <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-amber-200 border border-white/20 mb-2">
                          LA CÀ MỘT CHÚT • TONE BE
                        </span>
                        <h4 className="text-lg font-bold text-white leading-tight drop-shadow">
                          {activeFnbVideo.title}
                        </h4>
                        <p className="text-xs text-zinc-300 italic line-clamp-3 mt-2 px-2">
                          "{activeFnbVideo.hook}"
                        </p>
                      </div>

                      {!isFnbPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                            <Play className="w-7 h-7 fill-current translate-x-0.5" />
                          </div>
                        </div>
                      )}

                      <div className="relative z-20 pt-12 px-4 flex items-center justify-between text-white/90">
                        <span className="text-[10px] font-mono uppercase bg-black/40 px-2 py-0.5 rounded">
                          CapCut: {activeFnbVideo.capcutTemplate}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsFnbMuted(!isFnbMuted);
                          }}
                          className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center"
                        >
                          {isFnbMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Right side TikTok icons */}
                      <div className="relative z-20 pb-4 px-4 flex items-end justify-between text-white">
                        <div className="space-y-1 text-left">
                          <div className="text-xs font-bold">@la.camotchut</div>
                          <p className="text-[11px] text-zinc-300 line-clamp-2">{activeFnbVideo.description}</p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!hasFnbLiked) {
                                setFnbLikes(fnbLikes + 1);
                                setHasFnbLiked(true);
                              }
                            }}
                            className="flex flex-col items-center gap-0.5"
                          >
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${hasFnbLiked ? 'bg-red-500 text-white' : 'bg-black/40 text-white'}`}>
                              <Heart className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-[10px] font-mono">{fnbLikes.toLocaleString()}</span>
                          </button>

                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                              <MessageCircle className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono">{activeFnbVideo.comments}</span>
                          </div>

                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                              <Share2 className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono">{activeFnbVideo.shares}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* Ảnh 2: Real TikTok Channel Showcase with click link */
                    <a
                      href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phone-screen relative bg-[#F8F6F1] flex flex-col justify-between overflow-hidden group cursor-pointer block"
                    >
                      <Image
                        src="/images/tiktok_phones_mockup.jpg"
                        alt="Kênh TikTok La Cà Một Chút - Ảnh 2"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-center">
                        <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-left space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-bold text-[#8C5A3C]">
                            <span>@la.camotchut</span>
                            <span className="inline-flex items-center gap-1 text-[10px] bg-[#8C5A3C] text-white px-2 py-0.5 rounded-full">
                              Mở TikTok <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                          <p className="text-[11px] text-[#14110F] font-semibold leading-tight">
                            Bấm vào ảnh để truy cập trực tiếp kênh TikTok @la.camotchut
                          </p>
                        </div>
                      </div>
                    </a>
                  )}

                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Dedicated Interactive Card for Ảnh 2 */}
                <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#ECE4D8] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#8C5A3C]" />
                      Ảnh 2: Giao Diện Kênh TikTok @la.camotchut (Nhấn Vào Ảnh Để Xem)
                    </span>
                    <a
                      href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#8C5A3C] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Mở kênh TikTok</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Clickable Image Banner */}
                  <a
                    href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#DECFC0] group shadow-xs cursor-pointer"
                  >
                    <Image
                      src="/images/tiktok_phones_mockup.jpg"
                      alt="Giao diện kênh TikTok La Cà Một Chút"
                      fill
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#14110F] shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                        <span>Truy cập Kênh TikTok @la.camotchut</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#8C5A3C]" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                      Kịch Bản Đang Xem: {activeFnbVideo.title}
                    </span>
                    <span className="text-xs font-semibold text-[#635952]">{activeFnbVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-[#F8F6F1] border-l-4 border-[#8C5A3C] text-sm italic text-[#14110F]">
                    "{activeFnbVideo.hook}"
                  </blockquote>

                  <p className="text-sm text-[#635952] leading-relaxed">
                    {activeFnbVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                    Chọn video để phát ({fnbVideos.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fnbVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => {
                          setActiveFnbVideo(v);
                          setFnbViewMode('video');
                        }}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeFnbVideo.id === v.id && fnbViewMode === 'video'
                            ? 'bg-white border-[#8C5A3C] shadow-md ring-1 ring-[#8C5A3C]'
                            : 'bg-white/80 border-[rgba(20,17,15,0.08)] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">{v.views} views</span>
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
      {/* 2.5 HẠNG MỤC: BÚP SKY CUISINE (Show when 'all', 'bupsky', or 'fnb') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'bupsky' || selectedCategory === 'fnb') && (
        <section className="py-20 bg-[#F4EFE6] border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DECFC0]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-xs font-bold text-[#1E3A8A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span>HẠNG MỤC: ROOFTOP DINING &amp; EVENT F&amp;B</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                  Búp Sky Cuisine (@bupskycuisine) — Rooftop Q.1
                </h2>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Nhà hàng Rooftop Tầng 10 (65-69 Nguyễn Thái Bình, Q.1), cách Chợ Bến Thành 4 phút. Sáng tạo nội dung short-form F&amp;B cao cấp: review không gian tiệc riêng sinh nhật (132.9K views), view hoàng hôn Sài Gòn và khoảnh khắc đêm nhạc sự kiện (109K views).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://canva.link/m4m8whruwdgalmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Xem Slide Thuyết Trình Canva</span>
                  <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
                </a>
              </div>
            </div>

            {/* Búp Sky Metrics & Slide Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Canva Slide Presentation Preview */}
              <div className="lg:col-span-7 space-y-3">
                <a
                  href="https://canva.link/m4m8whruwdgalmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-luxury group cursor-pointer"
                >
                  <Image
                    src="/images/bupsky_slide.png"
                    alt="Búp Sky Cuisine Canva Presentation Slide"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors flex items-end p-6">
                    <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md text-xs font-bold text-[#14110F] flex items-center gap-2 shadow-lg">
                      <span>Mở Slide Canva Chi Tiết Dự Án Búp Sky Cuisine</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#1E3A8A]" />
                    </div>
                  </div>
                </a>
                <p className="text-[11px] text-[#635952] text-center italic">
                  Trích xuất từ Slide 7 hồ sơ Canva Presentation: Dự án TikTok F&amp;B Búp Sky Cuisine (@bupskycuisine)
                </p>
              </div>

              {/* Metrics & Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[#DECFC0] space-y-4 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                      Số Liệu Tăng Trưởng Kênh
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-blue-900 border border-blue-200">
                      Verified Business
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                      <div className="text-xl font-extrabold text-[#14110F]">132.9K</div>
                      <div className="text-[10px] text-[#635952] font-semibold">Top Video View</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                      <div className="text-xl font-extrabold text-[#14110F]">34K+</div>
                      <div className="text-[10px] text-[#635952] font-semibold">Lượt thích kênh</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                      <div className="text-xl font-extrabold text-[#14110F]">109K</div>
                      <div className="text-[10px] text-[#635952] font-semibold">Video sự kiện</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#ECE4D8] text-xs text-[#2D2723]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Video <strong>"Không gian &amp; tiệc riêng - Để Búp lo"</strong>: Đạt 132.9K lượt xem tự nhiên.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Video <strong>"Khám phá nhà hàng Rooftop cách Chợ Bến Thành 4 phút"</strong>: Đạt 37.6K lượt xem.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Vai trò: <strong>Freelance Content Creator &amp; F&amp;B Planner (02/2026 – Hiện tại)</strong>.</span>
                    </div>
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
        <section className="py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold">
                  <Bike className="w-3.5 h-3.5" />
                  <span>HẠNG MỤC: XE MÁY ĐIỆN THÔNG MINH &amp; CÔNG NGHỆ XANH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                  Kênh Datbike Hồng Phương (@datbikehongphuong)
                </h2>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Chiến dịch truyền thông thương hiệu dòng xe máy điện công nghệ Dat Bike tại đại lý Hồng Phương: tính năng bứt tốc, sạc nhanh, trải nghiệm đường phố thực tế và lối sống xanh tiết kiệm.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9BjNL1MnE9q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Xem Kênh TikTok @datbikehongphuong</span>
                  <ExternalLink className="w-4 h-4 text-[#D5CEBE]" />
                </a>
              </div>
            </div>

            {/* Dat Bike Phone Mockup + Video Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="phone-mockup-pro select-none relative">
                  <div className="phone-dynamic-island flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-[9px] font-mono text-zinc-400">@datbikehongphuong</span>
                  </div>

                  <div 
                    onClick={() => setIsDatbikePlaying(!isDatbikePlaying)}
                    className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeDatbikeVideo.gradient} opacity-90 transition-all duration-700`} />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-teal-200 border border-white/20 mb-2">
                        DAT BIKE • HỒNG PHƯƠNG
                      </span>
                      <h4 className="text-lg font-bold text-white leading-tight drop-shadow">
                        {activeDatbikeVideo.title}
                      </h4>
                      <p className="text-xs text-zinc-300 italic line-clamp-3 mt-2 px-2">
                        "{activeDatbikeVideo.hook}"
                      </p>
                    </div>

                    {!isDatbikePlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    <div className="relative z-20 pt-12 px-4 flex items-center justify-between text-white/90">
                      <span className="text-[10px] font-mono uppercase bg-black/40 px-2 py-0.5 rounded">
                        CapCut: {activeDatbikeVideo.capcutTemplate}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDatbikeMuted(!isDatbikeMuted);
                        }}
                        className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center"
                      >
                        {isDatbikeMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Right side TikTok icons */}
                    <div className="relative z-20 pb-4 px-4 flex items-end justify-between text-white">
                      <div className="space-y-1 text-left">
                        <div className="text-xs font-bold">@datbikehongphuong</div>
                        <p className="text-[11px] text-zinc-300 line-clamp-2">{activeDatbikeVideo.description}</p>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasDatbikeLiked) {
                              setDatbikeLikes(datbikeLikes + 1);
                              setHasDatbikeLiked(true);
                            }
                          }}
                          className="flex flex-col items-center gap-0.5"
                        >
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${hasDatbikeLiked ? 'bg-red-500 text-white' : 'bg-black/40 text-white'}`}>
                            <Heart className="w-4 h-4 fill-current" />
                          </div>
                          <span className="text-[10px] font-mono">{datbikeLikes.toLocaleString()}</span>
                        </button>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeDatbikeVideo.comments}</span>
                        </div>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeDatbikeVideo.shares}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                      Kịch Bản Đang Xem: {activeDatbikeVideo.title}
                    </span>
                    <span className="text-xs font-semibold text-[#635952]">{activeDatbikeVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-white border-l-4 border-teal-600 text-sm italic text-[#14110F]">
                    "{activeDatbikeVideo.hook}"
                  </blockquote>

                  <p className="text-sm text-[#635952] leading-relaxed">
                    {activeDatbikeVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                    Điểm nổi bật chiến dịch
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeDatbikeVideo.highlights.map((h, hi) => (
                      <div key={hi} className="p-3 rounded-xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.06)] flex items-center gap-2.5 text-xs text-[#2D2723]">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                        <span>{h}</span>
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
      {/* 4. HẠNG MỤC: NỘI THẤT MINH HUY (Show when 'all' or 'furniture') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'furniture') && (
        <section className="py-20 bg-[#F8F6F1] border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                  <Sofa className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  <span>DỰ ÁN CASE STUDY B2B: SẢN XUẤT NỘI THẤT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                  Minh Huy Furniture — Short-Form Video Xưởng Sản Xuất
                </h2>
                <p className="text-sm text-[#635952] leading-relaxed">
                  20+ kịch bản video TikTok quay trực tiếp tại xưởng: máy uốn sắt CNC, cắt laser, kiểm tra tải trọng 300kg, 
                  quy trình hoàn thiện sofa và xuất xưởng số lượng lớn đi dự án F&amp;B.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FolderDown className="w-4 h-4 text-[#8C5A3C]" />
                  <span>Mở Google Drive Xưởng (20+ Video)</span>
                </a>
              </div>
            </div>

            {/* Furniture Phone Mockup + Video List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="phone-mockup-pro select-none relative">
                  <div className="phone-dynamic-island flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-[9px] font-mono text-zinc-400">Minh Huy B2B</span>
                  </div>

                  <div 
                    onClick={() => setIsFurnPlaying(!isFurnPlaying)}
                    className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeFurnVideo.gradient} opacity-90 transition-all duration-700`} />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-amber-200 border border-white/20 mb-2">
                        XƯỞNG MINH HUY • B2B
                      </span>
                      <h4 className="text-lg font-bold text-white leading-tight drop-shadow">
                        {activeFurnVideo.title}
                      </h4>
                      <p className="text-xs text-zinc-300 italic line-clamp-3 mt-2 px-2">
                        "{activeFurnVideo.hook}"
                      </p>
                    </div>

                    {!isFurnPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    <div className="relative z-20 pt-12 px-4 flex items-center justify-between text-white/90">
                      <span className="text-[10px] font-mono uppercase bg-black/40 px-2 py-0.5 rounded">
                        CapCut: {activeFurnVideo.capcutTemplate}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFurnMuted(!isFurnMuted);
                        }}
                        className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center"
                      >
                        {isFurnMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Right side TikTok icons */}
                    <div className="relative z-20 pb-4 px-4 flex items-end justify-between text-white">
                      <div className="space-y-1 text-left">
                        <div className="text-xs font-bold">@minhhuyfurniture</div>
                        <p className="text-[11px] text-zinc-300 line-clamp-2">{activeFurnVideo.description}</p>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasFurnLiked) {
                              setFurnLikes(furnLikes + 1);
                              setHasFurnLiked(true);
                            }
                          }}
                          className="flex flex-col items-center gap-0.5"
                        >
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${hasFurnLiked ? 'bg-red-500 text-white' : 'bg-black/40 text-white'}`}>
                            <Heart className="w-4 h-4 fill-current" />
                          </div>
                          <span className="text-[10px] font-mono">{furnLikes.toLocaleString()}</span>
                        </button>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeFurnVideo.comments}</span>
                        </div>

                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono">{activeFurnVideo.shares}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-[rgba(20,17,15,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                      Kịch Bản Đang Xem: {activeFurnVideo.title}
                    </span>
                    <span className="text-xs font-semibold text-[#635952]">{activeFurnVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-[#F8F6F1] border-l-4 border-[#8C5A3C] text-sm italic text-[#14110F]">
                    "{activeFurnVideo.hook}"
                  </blockquote>

                  <p className="text-sm text-[#635952] leading-relaxed">
                    {activeFurnVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                    Chọn video để phát ({furnitureVideos.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {furnitureVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveFurnVideo(v)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeFurnVideo.id === v.id
                            ? 'bg-white border-[#8C5A3C] shadow-md ring-1 ring-[#8C5A3C]'
                            : 'bg-white/80 border-[rgba(20,17,15,0.08)] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">{v.views} views</span>
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
        <section className="py-20 bg-white border-b border-[rgba(20,17,15,0.08)]">
          <div className="container space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                <Award className="w-3.5 h-3.5 text-[#8C5A3C]" />
                <span>HẠNG MỤC: CHIẾN DỊCH BRAND PITCHING &amp; IMC</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
                Chiến Dịch IMC &amp; Social Media Doanh Nghiệp
              </h2>
              <p className="text-sm text-[#635952]">
                Winner Pitching Hải Phi Tivi HXY, Suzuki Hồng Phương và Doanh nghiệp Vận tải Phát Thủy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.filter(c => !['minh-huy-furniture', 'la-ca-mot-chut'].includes(c.id)).map((cs) => (
                <div key={cs.id} className="p-6 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-[#8C5A3C] font-semibold">
                        {cs.badge}
                      </span>
                      <span className="text-[#635952]">{cs.timeline}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#14110F] leading-snug">
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
                      onClick={() => setLightboxSlide(3)}
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
                      onClick={() => setLightboxSlide(3)}
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
        <section className="py-20 bg-[#F8F6F1]">
          <div className="container space-y-10">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[rgba(20,17,15,0.08)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-bold text-[#8C5A3C]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>NGUYÊN BẢN PORTFOLIO CHUẨN ĐỒ ÁN</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight mt-1">
                  14 Trang Slide Gốc (Bản Thiết Kế Mới Nhất 2026)
                </h2>
                <p className="text-sm text-[#635952]">
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
