'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  FolderDown, ExternalLink, Sparkles, TrendingUp, CheckCircle, 
  Layers, Hammer, ShieldCheck, Truck, Coffee, Cake, Users, Lightbulb,
  Maximize2, X, ChevronLeft, ChevronRight, BookOpen, Star, Film, Eye
} from 'lucide-react';
import { caseStudies, CaseStudy } from '@/app/data';

const iconMap: Record<string, any> = {
  Hammer,
  Layers,
  ShieldCheck,
  Truck,
  Coffee,
  Cake,
  Sparkles,
  Users,
  Lightbulb,
  TrendingUp,
};

// All 13 original landscape slides from Tô Lan Anh's portfolio
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

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(caseStudies[0]);
  const [activeTab, setActiveTab] = useState<'case-detail' | 'all-slides'>('case-detail');
  const [lightboxSlide, setLightboxSlide] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxSlide(index);
  };

  const closeLightbox = () => {
    setLightboxSlide(null);
  };

  const nextSlide = () => {
    if (lightboxSlide === null) return;
    setLightboxSlide((lightboxSlide % allSlides.length) + 1);
  };

  const prevSlide = () => {
    if (lightboxSlide === null) return;
    setLightboxSlide(lightboxSlide === 1 ? allSlides.length : lightboxSlide - 1);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              Case Studies & Kế Hoạch Truyền Thông
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1E1611] tracking-tight">
            Dự Án Thực Chiến <br />
            <span className="font-sans italic text-[#9E6B47] font-normal">
              & Bộ Slide Thuyết Trình
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed max-w-2xl mx-auto">
            Khám phá quy trình tư duy từ nghiên cứu insight, định vị thông điệp, sản xuất nội dung đến đo lường chuyển đổi thực tế.
          </p>

          {/* Master View Switcher: Deep-Dive vs Slide Gallery */}
          <div className="inline-flex p-1.5 rounded-full bg-[#F4EFE6] border border-[#DECFC0] gap-1 pt-1">
            <button
              onClick={() => setActiveTab('case-detail')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'case-detail'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'text-[#5C4D43] hover:text-[#1E1611]'
              }`}
            >
              Chi tiết từng Case Study ({caseStudies.length})
            </button>
            <button
              onClick={() => setActiveTab('all-slides')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'all-slides'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'text-[#5C4D43] hover:text-[#1E1611]'
              }`}
            >
              Bộ Slide Gốc Portfolio (13 Trang)
            </button>
          </div>
        </div>

        {/* View Mode 1: Case Study Deep Dive */}
        {activeTab === 'case-detail' && (
          <div className="space-y-10">
            
            {/* Project Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {caseStudies.map((cs) => {
                const isActive = selectedCase.id === cs.id;
                return (
                  <button
                    key={cs.id}
                    onClick={() => setSelectedCase(cs)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#1E1611] text-white shadow-luxury scale-[1.02]'
                        : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <span>{cs.client}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Case Detail Card */}
            <div className="editorial-card p-6 sm:p-10 bg-white space-y-10">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133] text-xs font-mono font-semibold uppercase">
                      {selectedCase.badge}
                    </span>
                    <span className="text-xs font-mono text-[#5C4D43]">
                      {selectedCase.timeline} • {selectedCase.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611] leading-snug">
                    {selectedCase.title}
                  </h3>
                  <p className="text-sm text-[#5C4D43] font-medium">
                    {selectedCase.subtitle}
                  </p>
                </div>

                {/* Role Chip */}
                <div className="flex-shrink-0 bg-[#FAF7F2] border border-[#ECE4D8] px-4 py-3 rounded-2xl">
                  <div className="text-[10px] text-[#7D5133] uppercase font-mono font-bold tracking-wider">
                    Vai trò phụ trách:
                  </div>
                  <div className="text-xs font-bold text-[#1E1611] mt-0.5">
                    {selectedCase.role}
                  </div>
                </div>
              </div>

              {/* Slide Preview & Lightbox Button if present */}
              {selectedCase.slideImage && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7D5133]">
                    <span className="font-semibold uppercase tracking-wider">Ấn bản Slide Trực Tiếp Từ Hồ Sơ</span>
                    <span className="text-[#9E6B47] flex items-center gap-1 cursor-pointer" onClick={() => openLightbox(3)}>
                      <Maximize2 className="w-3.5 h-3.5" /> Bấm để phóng to toàn màn hình
                    </span>
                  </div>

                  <div 
                    onClick={() => openLightbox(3)}
                    className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#ECE4D8] bg-[#F4EFE6] cursor-pointer group shadow-card"
                  >
                    <Image
                      src={selectedCase.slideImage}
                      alt={selectedCase.title}
                      fill
                      className="object-contain group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Xem chi tiết Slide Full HD</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedCase.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-1">
                    <div className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#5C4D43] font-mono leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Story Narrative: Overview, Challenge, Solution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#ECE4D8] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-bold">
                    Bối Cảnh & Mục Tiêu
                  </div>
                  <p className="text-xs text-[#4A3A2C] leading-relaxed">
                    {selectedCase.overview}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#ECE4D8] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-800 font-bold">
                    Thách Thức Thị Trường
                  </div>
                  <p className="text-xs text-[#4A3A2C] leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#ECE4D8] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    Giải Pháp Sáng Tạo
                  </div>
                  <p className="text-xs text-[#4A3A2C] leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Content Pillars */}
              <div className="space-y-4">
                <h4 className="text-lg font-sans font-bold text-[#1E1611]">
                  Tuyến Nội Dung Cốt Lõi (Content Pillars)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedCase.contentPillars.map((pillar, idx) => {
                    const IconComponent = iconMap[pillar.icon] || Layers;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-[#ECE4D8] shadow-card space-y-2">
                        <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#9E6B47] flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-[#1E1611] leading-snug">
                          {pillar.title}
                        </div>
                        <p className="text-[11px] text-[#5C4D43] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deliverables & Actions */}
              <div className="pt-4 border-t border-[#ECE4D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-bold">
                    Sản Phẩm Bàn Giao:
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedCase.deliverables.map((d, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F2] text-[11px] text-[#4A3A2C] border border-[#ECE4D8]">
                        <CheckCircle className="w-3 h-3 text-[#9E6B47]" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                  {selectedCase.driveUrl && (
                    <a
                      href={selectedCase.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] transition-all"
                    >
                      <FolderDown className="w-3.5 h-3.5" />
                      <span>Xem File Drive</span>
                    </a>
                  )}
                  {selectedCase.externalUrl && (
                    <a
                      href={selectedCase.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-medium border border-[#DECFC0] bg-white text-[#1E1611] hover:bg-[#FAF7F2] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#9E6B47]" />
                      <span>Xem Kênh Trực Tuyến</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* View Mode 2: All 13 Original Slides Carousel & Grid */}
        {activeTab === 'all-slides' && (
          <div className="space-y-8">
            <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#DECFC0] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C4D43]">
                Hiển thị toàn bộ 13 trang Portfolio gốc của Tô Lan Anh. Bấm vào bất kỳ trang nào để phóng to.
              </span>
              <span className="text-xs font-mono font-semibold text-[#9E6B47]">
                13 Slides • 1440x809 HD
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSlides.map((slide) => (
                <div
                  key={slide.index}
                  onClick={() => openLightbox(slide.index)}
                  className="editorial-card overflow-hidden bg-white cursor-pointer group hover:border-[#9E6B47]"
                >
                  <div className="relative aspect-[16/9] w-full bg-[#FAF7F2] overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                      Trang {slide.index}/13
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border-t border-[#ECE4D8] flex items-center justify-between">
                    <span className="text-xs font-sans font-semibold text-[#1E1611] line-clamp-1">
                      {slide.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#7D5133] uppercase">
                      {slide.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxSlide !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 font-mono text-xs">
                Trang {lightboxSlide} / {allSlides.length}
              </span>
              <span className="font-sans text-sm sm:text-base font-semibold text-zinc-200">
                {allSlides[lightboxSlide - 1]?.title}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image Container */}
          <div className="relative flex-1 w-full my-4 flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
              aria-label="Trang trước"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={allSlides[lightboxSlide - 1]?.src || ''}
                alt={allSlides[lightboxSlide - 1]?.title || ''}
                fill
                priority
                className="object-contain"
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
              aria-label="Trang tiếp theo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {allSlides.map((slide) => (
              <button
                key={slide.index}
                onClick={() => setLightboxSlide(slide.index)}
                className={`relative w-14 h-9 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                  lightboxSlide === slide.index ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={slide.src} alt={slide.title} fill className="object-cover" />
              </button>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}
