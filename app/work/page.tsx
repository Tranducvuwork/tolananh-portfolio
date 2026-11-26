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
  TrendingUp, Award, Layers, Eye, Hammer, ShieldCheck, Truck, Cake
} from 'lucide-react';
import { featuredVideos, VideoItem, caseStudies } from '@/app/data';

const furnitureVideos = featuredVideos.filter(v => v.category === 'furniture');
const fnbVideos = featuredVideos.filter(v => v.category === 'fnb');

// All 13 original landscape slides
const allSlides = [
  { index: 1, title: 'Bìa Portfolio Tô Lan Anh', src: '/images/slides/slide_1.png', category: 'Overview' },
  { index: 2, title: 'Giới Thiệu Bản Thân & Mục Tiêu', src: '/images/slides/slide_2.png', category: 'About' },
  { index: 3, title: 'Winner Pitching — Dự Án TVC & TikTok Tivi HXY (Hai Phi)', src: '/images/slides/slide_3.png', category: 'Hai Phi TVC' },
  { index: 4, title: 'Kịch Bản Phân Cảnh & Thông Điệp Tivi HXY', src: '/images/slides/slide_4.png', category: 'Hai Phi TVC' },
  { index: 5, title: 'Dự Án Social Media Suzuki Hồng Phương', src: '/images/slides/slide_5.png', category: 'Suzuki' },
  { index: 6, title: 'Content Pillars & KPIs Suzuki Hồng Phương', src: '/images/slides/slide_6.png', category: 'Suzuki' },
  { index: 7, title: 'DN Vận Tải Xe Khách Phát Thủy (Fanpage & Tuyển dụng)', src: '/images/slides/slide_7.png', category: 'Phat Thuy' },
  { index: 8, title: 'Dự Án Nhiếp Ảnh Thực Hành (Điểm A+)', src: '/images/slides/slide_8.png', category: 'Photography' },
  { index: 9, title: 'Tác Phẩm Nhiếp Ảnh Nghệ Thuật & Bố Cục Ánh Sáng', src: '/images/slides/slide_9.png', category: 'Photography' },
  { index: 10, title: 'Thiết Kế Đồ Họa & Photoshop Poster (ColorMe)', src: '/images/slides/slide_10.png', category: 'Graphic Design' },
  { index: 11, title: 'Ấn Phẩm Mạng Xã Hội & Visual Branding', src: '/images/slides/slide_11.png', category: 'Graphic Design' },
  { index: 12, title: 'Quá Trình Đào Tạo & Kỹ Năng Chuyên Môn', src: '/images/slides/slide_12.png', category: 'Education' },
  { index: 13, title: 'Lời Cảm Ơn & Thông Tin Liên Hệ', src: '/images/slides/slide_13.png', category: 'Contact' },
];

export default function WorkPage() {
  // Category tab state: 'all' | 'furniture' | 'fnb' | 'brand' | 'slides'
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'furniture' | 'fnb' | 'brand' | 'slides'>('all');

  // Minh Huy Video Phone State
  const [activeFurnVideo, setActiveFurnVideo] = useState<VideoItem>(furnitureVideos[0]);
  const [isFurnPlaying, setIsFurnPlaying] = useState<boolean>(true);
  const [isFurnMuted, setIsFurnMuted] = useState<boolean>(false);
  const [furnLikes, setFurnLikes] = useState<number>(12400);
  const [hasFurnLiked, setHasFurnLiked] = useState<boolean>(false);

  // La Ca Video Phone State
  const [activeFnbVideo, setActiveFnbVideo] = useState<VideoItem>(fnbVideos[0]);
  const [isFnbPlaying, setIsFnbPlaying] = useState<boolean>(true);
  const [isFnbMuted, setIsFnbMuted] = useState<boolean>(false);
  const [fnbLikes, setFnbLikes] = useState<number>(6200);
  const [hasFnbLiked, setHasFnbLiked] = useState<boolean>(false);

  // Lightbox
  const [lightboxSlide, setLightboxSlide] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#F4EFE6] border-b border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECFC0] shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              Portfolio & Featured Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1611] tracking-tight">
            Dự Án Đã Thực Hiện
          </h1>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed max-w-2xl mx-auto">
            Bấm chọn danh mục bên dưới để xem riêng từng hạng mục dự án (không trộn lẫn): 
            Video xưởng B2B, Kênh review F&B tone Be, Chiến dịch Brand Pitching hoặc Bộ slide 13 trang.
          </p>

          {/* Interactive Category Switcher - Shows only selected category when clicked */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              Tất Cả Danh Mục
            </button>

            <button
              onClick={() => setSelectedCategory('furniture')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'furniture'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Sofa className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>Nội Thất Minh Huy (Xưởng B2B)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('fnb')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'fnb'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>Kênh La Cà Một Chút (F&B Tone Be)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('brand')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'brand'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>Brand Pitching & IMC</span>
            </button>

            <button
              onClick={() => setSelectedCategory('slides')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === 'slides'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>13 Slide Gốc HD</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. HẠNG MỤC: NỘI THẤT MINH HUY (Show when 'all' or 'furniture') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'furniture') && (
        <section className="py-20 bg-[#FAF7F2] border-b border-[#ECE4D8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                  <Sofa className="w-3.5 h-3.5 text-[#9E6B47]" />
                  <span>HẠNG MỤC: SẢN XUẤT NỘI THẤT B2B</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1611]">
                  Minh Huy Furniture — Video Xưởng Sản Xuất
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                  20+ kịch bản video TikTok quay trực tiếp tại xưởng: máy uốn sắt CNC, cắt laser, kiểm tra tải trọng 300kg, 
                  quy trình hoàn thiện sofa và xuất xưởng số lượng lớn đi dự án F&B.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] transition-all"
                >
                  <FolderDown className="w-4 h-4 text-[#C8B49F]" />
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
                    <span className="text-[9px] font-mono text-zinc-400">Minh Huy Live</span>
                  </div>

                  <div 
                    onClick={() => setIsFurnPlaying(!isFurnPlaying)}
                    className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeFurnVideo.gradient} opacity-90 transition-all duration-700`} />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-amber-200 border border-white/20 mb-2">
                        XƯỞNG MINH HUY • B2B BTS
                      </span>
                      <h4 className="text-lg font-serif font-bold text-white leading-tight drop-shadow">
                        {activeFurnVideo.title}
                      </h4>
                      <p className="text-xs text-zinc-300 font-sans italic line-clamp-3 mt-2 px-2">
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
                        className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white"
                      >
                        {isFurnMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="relative z-20 self-end mr-3 mb-6 flex flex-col items-center gap-4 text-white">
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-800 flex items-center justify-center text-xs font-bold">
                        MH
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHasFurnLiked(!hasFurnLiked);
                          setFurnLikes(prev => hasFurnLiked ? prev - 1 : prev + 1);
                        }}
                        className="flex flex-col items-center gap-1"
                      >
                        <Heart className={`w-7 h-7 drop-shadow ${hasFurnLiked ? 'fill-rose-500 text-rose-500' : 'fill-black/30'}`} />
                        <span className="text-[10px] font-mono font-semibold">{(furnLikes / 1000).toFixed(1)}K</span>
                      </button>
                      <div className="flex flex-col items-center gap-1">
                        <MessageCircle className="w-7 h-7 fill-black/30 drop-shadow" />
                        <span className="text-[10px] font-mono font-semibold">{activeFurnVideo.comments}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Share2 className="w-7 h-7 fill-black/30 drop-shadow" />
                        <span className="text-[10px] font-mono font-semibold">{activeFurnVideo.shares}</span>
                      </div>
                    </div>

                    <div className="relative z-20 p-4 bg-gradient-to-t from-black/80 to-transparent text-white space-y-1">
                      <div className="font-mono text-xs font-bold">{activeFurnVideo.channelHandle}</div>
                      <p className="text-xs text-zinc-200 line-clamp-2">{activeFurnVideo.description}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {activeFurnVideo.tags.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono text-amber-200">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video List & Hook Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="editorial-card p-6 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
                      Kịch Bản Đang Xem: {activeFurnVideo.title}
                    </span>
                    <span className="text-xs font-mono text-[#5C4D43]">{activeFurnVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E6B47] text-sm font-serif italic text-[#1E1611]">
                    "{activeFurnVideo.hook}"
                  </blockquote>

                  <p className="text-xs text-[#5C4D43] leading-relaxed">
                    {activeFurnVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-bold">
                    Chọn video để phát ({furnitureVideos.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {furnitureVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveFurnVideo(v)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeFurnVideo.id === v.id
                            ? 'bg-white border-[#9E6B47] shadow-md ring-1 ring-[#9E6B47]'
                            : 'bg-white/80 border-[#ECE4D8] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <span className="text-[10px] font-mono text-[#9E6B47] font-bold">{v.views} views</span>
                            <h5 className="text-xs font-serif font-bold text-[#1E1611] line-clamp-1">{v.title}</h5>
                            <p className="text-[11px] text-[#5C4D43] line-clamp-2">{v.hook}</p>
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
      {/* 2. HẠNG MỤC: KÊNH LA CÀ MỘT CHÚT (Show when 'all' or 'fnb') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'fnb') && (
        <section className="py-20 bg-[#F4EFE6] border-b border-[#ECE4D8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                  <Coffee className="w-3.5 h-3.5 text-[#9E6B47]" />
                  <span>HẠNG MỤC: F&B LIFESTYLE & CAFE REVIEW</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1611]">
                  Kênh La Cà Một Chút — Tone Màu Be & ASMR Ẩm Thực
                </h2>
                <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                  Review cafe hidden gems, tiệm bánh thủ công với ánh sáng tự nhiên dịu nhẹ, voiceover ấm áp, 
                  âm thanh xé bánh giòn rụm và phong cách thẩm mỹ đạt hơn 5.3M lượt xem mỗi tháng.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] transition-all"
                >
                  <span>Ghé Thăm Kênh TikTok @la.camotchut</span>
                  <ExternalLink className="w-4 h-4 text-[#DECFC0]" />
                </a>
              </div>
            </div>

            {/* La Ca Phone Mockup + Video List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="phone-mockup-pro select-none relative">
                  <div className="phone-dynamic-island flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-[9px] font-mono text-zinc-400">La Cà Live</span>
                  </div>

                  <div 
                    onClick={() => setIsFnbPlaying(!isFnbPlaying)}
                    className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeFnbVideo.gradient} opacity-90 transition-all duration-700`} />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-amber-200 border border-white/20 mb-2">
                        LA CÀ MỘT CHÚT • TONE BE F&B
                      </span>
                      <h4 className="text-lg font-serif font-bold text-white leading-tight drop-shadow">
                        {activeFnbVideo.title}
                      </h4>
                      <p className="text-xs text-zinc-300 font-sans italic line-clamp-3 mt-2 px-2">
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
                        className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white"
                      >
                        {isFnbMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="relative z-20 self-end mr-3 mb-6 flex flex-col items-center gap-4 text-white">
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-800 flex items-center justify-center text-xs font-bold">
                        LC
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHasFnbLiked(!hasFnbLiked);
                          setFnbLikes(prev => hasFnbLiked ? prev - 1 : prev + 1);
                        }}
                        className="flex flex-col items-center gap-1"
                      >
                        <Heart className={`w-7 h-7 drop-shadow ${hasFnbLiked ? 'fill-rose-500 text-rose-500' : 'fill-black/30'}`} />
                        <span className="text-[10px] font-mono font-semibold">{(fnbLikes / 1000).toFixed(1)}K</span>
                      </button>
                      <div className="flex flex-col items-center gap-1">
                        <MessageCircle className="w-7 h-7 fill-black/30 drop-shadow" />
                        <span className="text-[10px] font-mono font-semibold">{activeFnbVideo.comments}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Share2 className="w-7 h-7 fill-black/30 drop-shadow" />
                        <span className="text-[10px] font-mono font-semibold">{activeFnbVideo.shares}</span>
                      </div>
                    </div>

                    <div className="relative z-20 p-4 bg-gradient-to-t from-black/80 to-transparent text-white space-y-1">
                      <div className="font-mono text-xs font-bold">{activeFnbVideo.channelHandle}</div>
                      <p className="text-xs text-zinc-200 line-clamp-2">{activeFnbVideo.description}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {activeFnbVideo.tags.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono text-amber-200">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video List & Hook Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="editorial-card p-6 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
                      Kịch Bản Đang Xem: {activeFnbVideo.title}
                    </span>
                    <span className="text-xs font-mono text-[#5C4D43]">{activeFnbVideo.views} views</span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E6B47] text-sm font-serif italic text-[#1E1611]">
                    "{activeFnbVideo.hook}"
                  </blockquote>

                  <p className="text-xs text-[#5C4D43] leading-relaxed">
                    {activeFnbVideo.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-bold">
                    Chọn video để phát ({fnbVideos.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fnbVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setActiveFnbVideo(v)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          activeFnbVideo.id === v.id
                            ? 'bg-white border-[#9E6B47] shadow-md ring-1 ring-[#9E6B47]'
                            : 'bg-white/80 border-[#ECE4D8] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <span className="text-[10px] font-mono text-[#9E6B47] font-bold">{v.views} views</span>
                            <h5 className="text-xs font-serif font-bold text-[#1E1611] line-clamp-1">{v.title}</h5>
                            <p className="text-[11px] text-[#5C4D43] line-clamp-2">{v.hook}</p>
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
      {/* 3. HẠNG MỤC: BRAND CAMPAIGNS (Show when 'all' or 'brand') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'brand') && (
        <section className="py-20 bg-[#FAF7F2] border-b border-[#ECE4D8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                <Award className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>HẠNG MỤC: CHIẾN DỊCH BRAND PITCHING & IMC</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1611]">
                Chiến Dịch IMC & Social Media Doanh Nghiệp
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4D43]">
                Winner Pitching Hải Phi Tivi HXY, Suzuki Hồng Phương và Doanh nghiệp Vận tải Phát Thủy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.filter(c => !['minh-huy-furniture', 'la-ca-mot-chut'].includes(c.id)).map((cs) => (
                <div key={cs.id} className="editorial-card p-6 bg-white space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133]">
                        {cs.badge}
                      </span>
                      <span className="text-[#5C4D43]">{cs.timeline}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#1E1611] leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-[#5C4D43] line-clamp-3">
                      {cs.overview}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#ECE4D8]">
                      {cs.metrics.slice(0, 2).map((m, mi) => (
                        <div key={mi} className="p-2.5 rounded-xl bg-[#FAF7F2] text-center">
                          <div className="font-serif text-base font-bold text-[#1E1611]">{m.value}</div>
                          <div className="text-[10px] font-mono text-[#5C4D43] line-clamp-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {cs.slideImage && (
                    <div 
                      onClick={() => setLightboxSlide(3)}
                      className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#ECE4D8] cursor-pointer group"
                    >
                      <Image src={cs.slideImage} alt={cs.title} fill className="object-contain group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. HẠNG MỤC: 13 SLIDE GỐC (Show when 'all' or 'slides') */}
      {/* ========================================================================= */}
      {(selectedCategory === 'all' || selectedCategory === 'slides') && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ECE4D8]">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1E1611]">
                  Bộ Sưu Tập 13 Trang Slide Gốc (Portfolio PDF)
                </h3>
                <p className="text-xs text-[#5C4D43] mt-0.5">
                  Bấm vào từng slide để phóng to toàn màn hình độ phân giải cao 1440x809.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#9E6B47]">
                13 Slides Full HD
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {allSlides.map((slide) => (
                <div
                  key={slide.index}
                  onClick={() => setLightboxSlide(slide.index)}
                  className="rounded-xl overflow-hidden border border-[#ECE4D8] bg-[#FAF7F2] cursor-pointer group hover:border-[#9E6B47] transition-all"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={slide.src} alt={slide.title} fill className="object-contain" />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white">
                      Trang {slide.index}
                    </div>
                  </div>
                  <div className="p-2.5 bg-white text-[11px] font-serif font-medium text-[#1E1611] line-clamp-1 border-t border-[#ECE4D8]">
                    {slide.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxSlide !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <span className="font-mono text-xs">
              Slide {lightboxSlide} / {allSlides.length}: {allSlides[lightboxSlide - 1]?.title}
            </span>
            <button onClick={() => setLightboxSlide(null)} className="p-2 rounded-full bg-white/10 text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 w-full my-4 flex items-center justify-center">
            <button
              onClick={() => setLightboxSlide(lightboxSlide === 1 ? allSlides.length : lightboxSlide - 1)}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 text-white border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={allSlides[lightboxSlide - 1]?.src || ''}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={() => setLightboxSlide((lightboxSlide % allSlides.length) + 1)}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 text-white border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
            {allSlides.map((slide) => (
              <button
                key={slide.index}
                onClick={() => setLightboxSlide(slide.index)}
                className={`relative w-12 h-8 rounded overflow-hidden flex-shrink-0 border-2 ${
                  lightboxSlide === slide.index ? 'border-amber-400' : 'border-transparent opacity-60'
                }`}
              >
                <Image src={slide.src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
