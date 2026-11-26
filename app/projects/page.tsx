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

// Separate video lists strictly by category - no mixing!
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

export default function ProjectsPage() {
  // Minh Huy Furniture Phone State
  const [activeFurnVideo, setActiveFurnVideo] = useState<VideoItem>(furnitureVideos[0]);
  const [isFurnPlaying, setIsFurnPlaying] = useState<boolean>(true);
  const [isFurnMuted, setIsFurnMuted] = useState<boolean>(false);
  const [furnLikes, setFurnLikes] = useState<number>(12400);
  const [hasFurnLiked, setHasFurnLiked] = useState<boolean>(false);

  // La Ca Mot Chut Phone State
  const [activeFnbVideo, setActiveFnbVideo] = useState<VideoItem>(fnbVideos[0]);
  const [isFnbPlaying, setIsFnbPlaying] = useState<boolean>(true);
  const [isFnbMuted, setIsFnbMuted] = useState<boolean>(false);
  const [fnbLikes, setFnbLikes] = useState<number>(6200);
  const [hasFnbLiked, setHasFnbLiked] = useState<boolean>(false);

  // Lightbox State
  const [lightboxSlide, setLightboxSlide] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-[#F4EFE6] border-b border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECFC0] shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              Hạng Mục Dự Án Riêng Biệt (Categorized Portfolio)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1611] tracking-tight">
            Các Hạng Mục Dự Án <br />
            <span className="italic font-normal text-[#9E6B47] font-serif">
              Tách Biệt Theo Từng Lĩnh Vực
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed max-w-2xl mx-auto">
            Mỗi hạng mục sở hữu đặc thù nội dung, insight khách hàng và định hướng hình ảnh riêng: 
            từ góc quay xưởng sản xuất B2B thực chiến đến phong cách F&B nhẹ nhàng, ấm áp chuẩn tone Be.
          </p>

          {/* Quick Anchor Jumper */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#minh-huy-furniture"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1611] text-white text-xs font-mono font-medium shadow-sm hover:bg-[#9E6B47] transition-all"
            >
              <Sofa className="w-3.5 h-3.5 text-[#C8B49F]" />
              <span>1. Nội Thất Minh Huy (Xưởng B2B)</span>
            </a>
            <a
              href="#la-ca-mot-chut"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DECFC0] text-[#1E1611] text-xs font-mono font-medium hover:bg-[#FAF7F2] transition-all"
            >
              <Coffee className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>2. Kênh La Cà Một Chút (Tone Be F&B)</span>
            </a>
            <a
              href="#brand-campaigns"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DECFC0] text-[#1E1611] text-xs font-mono font-medium hover:bg-[#FAF7F2] transition-all"
            >
              <span>3. Chiến Dịch Brand IMC & 13 Slides</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HẠNG MỤC 1: NỘI THẤT MINH HUY (HOÀN TOÀN TÁCH BIỆT) */}
      {/* ========================================================================= */}
      <section id="minh-huy-furniture" className="py-24 bg-[#FAF7F2] relative border-b border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                <Sofa className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>HẠNG MỤC 1: SẢN XUẤT NỘI THẤT B2B</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1611]">
                Minh Huy Furniture — Chiến Dịch TikTok Xưởng Sản Xuất
              </h2>
              <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed">
                Định vị xưởng sản xuất gia công cơ khí inox, uốn sắt mỹ thuật và bọc sofa lớn tại TP.HCM. 
                Chuyển đổi số nội dung B2B bằng chuỗi video chân thực từ tiếng máy cắt CNC, tia lửa hàn laser, 
                thử tải trọng 300kg đến đóng gói xuất xưởng cho các chuỗi nhà hàng, đại lý toàn quốc.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] shadow-luxury transition-all"
              >
                <FolderDown className="w-4 h-4 text-[#C8B49F]" />
                <span>Google Drive Xưởng (20+ Video)</span>
              </a>
              <Link
                href="/projects/minh-huy-furniture"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-mono font-medium border border-[#DECFC0] bg-white text-[#1E1611] hover:bg-[#F4EFE6] transition-all"
              >
                <span>Trang Chi Tiết Độc Lập</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47]" />
              </Link>
            </div>
          </div>

          {/* Key Metrics Strip for Furniture */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">20+ Video</div>
              <div className="text-xs font-mono text-[#5C4D43]">Kịch bản xưởng hoàn thành</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">115.0K</div>
              <div className="text-xs font-mono text-[#5C4D43]">Lượt xem video thử tải 300kg</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#9E6B47]">4.8x Lead</div>
              <div className="text-xs font-mono text-[#5C4D43]">Tăng tin nhắn hỏi giá sỉ</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">B2B Only</div>
              <div className="text-xs font-mono text-[#5C4D43]">Định vị bán buôn tận xưởng</div>
            </div>
          </div>

          {/* Showcase: Dedicated Phone Player for Furniture + Video List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Phone Viewport */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="phone-mockup-pro select-none relative">
                {/* Dynamic Island */}
                <div className="phone-dynamic-island flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  <span className="text-[9px] font-mono text-zinc-400">Minh Huy Live</span>
                </div>

                <div 
                  onClick={() => setIsFurnPlaying(!isFurnPlaying)}
                  className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeFurnVideo.gradient} opacity-90 transition-all duration-700`} />
                  
                  {/* Video Sim Content */}
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

                  {/* Top Bar */}
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

                  {/* Right Actions */}
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

                  {/* Bottom Meta */}
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

            {/* Furniture Video Selector & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="editorial-card p-6 bg-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
                    Kịch Bản Đang Phát: {activeFurnVideo.title}
                  </span>
                  <span className="text-xs font-mono text-[#5C4D43]">{activeFurnVideo.views} views</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase text-[#7D5133] font-semibold">Hook 3s đầu xưởng:</span>
                  <blockquote className="p-3.5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E6B47] text-sm font-serif italic text-[#1E1611]">
                    "{activeFurnVideo.hook}"
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {activeFurnVideo.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] text-xs text-[#4A3A2C]">
                      <span className="text-[#9E6B47] font-bold mr-1">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Video List of Furniture */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#7D5133] uppercase font-bold tracking-wider">
                  Chọn Video Xưởng Minh Huy Để Trải Nghiệm ({furnitureVideos.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {furnitureVideos.map((video) => {
                    const isSelected = activeFurnVideo.id === video.id;
                    return (
                      <div
                        key={video.id}
                        onClick={() => setActiveFurnVideo(video)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          isSelected
                            ? 'bg-white border-[#9E6B47] shadow-md ring-1 ring-[#9E6B47]'
                            : 'bg-white/80 border-[#ECE4D8] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${video.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="text-[10px] font-mono text-[#9E6B47] font-bold">{video.views} views</div>
                            <h5 className="text-xs font-serif font-bold text-[#1E1611] line-clamp-1">{video.title}</h5>
                            <p className="text-[11px] text-[#5C4D43] line-clamp-2">{video.hook}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HẠNG MỤC 2: KÊNH LA CÀ MỘT CHÚT (HOÀN TOÀN TÁCH BIỆT) */}
      {/* ========================================================================= */}
      <section id="la-ca-mot-chut" className="py-24 bg-[#F4EFE6] relative border-b border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                <Coffee className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>HẠNG MỤC 2: F&B LIFESTYLE & CAFE REVIEW</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1611]">
                Kênh TikTok: La Cà Một Chút — Tone Màu Be Ấm Áp
              </h2>
              <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed">
                Định vị kênh review cafe, tiệm bánh thủ công và phong cách sống nhẹ nhàng cho phái nữ. 
                Hình ảnh đồng bộ bảng màu Be, kem sữa và ánh sáng tự nhiên. Khai thác định dạng Slow Content 
                và âm thanh ASMR kích thích vị giác để tạo sự khác biệt không ồn ào.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] shadow-luxury transition-all"
              >
                <span>Xem Kênh TikTok @la.camotchut</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DECFC0]" />
              </a>
              <Link
                href="/projects/la-ca-mot-chut"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-mono font-medium border border-[#DECFC0] bg-white text-[#1E1611] hover:bg-[#FAF7F2] transition-all"
              >
                <span>Trang Chi Tiết Độc Lập</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47]" />
              </Link>
            </div>
          </div>

          {/* Key Metrics Strip for La Ca */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">58K+</div>
              <div className="text-xs font-mono text-[#5C4D43]">Followers kênh TikTok</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">3.9M+</div>
              <div className="text-xs font-mono text-[#5C4D43]">Tổng lượt thích</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#9E6B47]">14.8%</div>
              <div className="text-xs font-mono text-[#5C4D43]">Tỷ lệ tương tác (Cao hơn 80%)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">92% Nữ</div>
              <div className="text-xs font-mono text-[#5C4D43]">Tệp khán giả mục tiêu chuẩn</div>
            </div>
          </div>

          {/* Showcase: Dedicated Phone Player for La Ca + Video List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Phone Viewport */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="phone-mockup-pro select-none relative">
                {/* Dynamic Island */}
                <div className="phone-dynamic-island flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  <span className="text-[9px] font-mono text-zinc-400">La Cà Live</span>
                </div>

                <div 
                  onClick={() => setIsFnbPlaying(!isFnbPlaying)}
                  className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeFnbVideo.gradient} opacity-90 transition-all duration-700`} />
                  
                  {/* Video Sim Content */}
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

                  {/* Top Bar */}
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

                  {/* Right Actions */}
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

                  {/* Bottom Meta */}
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

            {/* La Ca Video Selector & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="editorial-card p-6 bg-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
                    Kịch Bản Đang Phát: {activeFnbVideo.title}
                  </span>
                  <span className="text-xs font-mono text-[#5C4D43]">{activeFnbVideo.views} views</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase text-[#7D5133] font-semibold">Hook 3s đầu F&B:</span>
                  <blockquote className="p-3.5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E6B47] text-sm font-serif italic text-[#1E1611]">
                    "{activeFnbVideo.hook}"
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {activeFnbVideo.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] text-xs text-[#4A3A2C]">
                      <span className="text-[#9E6B47] font-bold mr-1">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Video List of La Ca */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#7D5133] uppercase font-bold tracking-wider">
                  Chọn Video Kênh La Cà Để Trải Nghiệm ({fnbVideos.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fnbVideos.map((video) => {
                    const isSelected = activeFnbVideo.id === video.id;
                    return (
                      <div
                        key={video.id}
                        onClick={() => setActiveFnbVideo(video)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                          isSelected
                            ? 'bg-white border-[#9E6B47] shadow-md ring-1 ring-[#9E6B47]'
                            : 'bg-white/80 border-[#ECE4D8] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${video.gradient} flex items-center justify-center text-white shadow-xs`}>
                            <Play className="w-4 h-4 fill-current drop-shadow" />
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="text-[10px] font-mono text-[#9E6B47] font-bold">{video.views} views</div>
                            <h5 className="text-xs font-serif font-bold text-[#1E1611] line-clamp-1">{video.title}</h5>
                            <p className="text-[11px] text-[#5C4D43] line-clamp-2">{video.hook}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HẠNG MỤC 3: CÁC DỰ ÁN BRAND PITCHING & SLIDE GỐC */}
      {/* ========================================================================= */}
      <section id="brand-campaigns" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
              <Award className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>HẠNG MỤC 3: CHIẾN DỊCH BRAND PITCHING & IMC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1611]">
              Các Dự Án Pitching & 13 Slide Gốc
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4D43]">
              Bao gồm Winner Pitching Tivi HXY Hai Phi, Suzuki Hồng Phương, Vận Tải Phát Thủy và Thư Viện Slide HD.
            </p>
          </div>

          {/* Project Cards Grid */}
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

          {/* 13 Slide Gallery */}
          <div id="slides" className="editorial-card p-6 sm:p-8 bg-white space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ECE4D8]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1E1611]">
                  Bộ Sưu Tập 13 Slide Gốc Hồ Sơ Tô Lan Anh
                </h3>
                <p className="text-xs text-[#5C4D43] mt-0.5">
                  Bấm vào bất kỳ slide nào để mở cửa sổ xem Full HD toàn màn hình.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#9E6B47]">
                1440x809 HD Quality
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

        </div>
      </section>

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
