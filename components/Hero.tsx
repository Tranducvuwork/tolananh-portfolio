'use client';

import Image from 'next/image';
import { ArrowDownRight, Sparkles, Play, Download, Film, Coffee, CheckCircle2, Star } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle editorial backdrop glow */}
      <div className="absolute top-16 left-1/3 w-[500px] h-[500px] rounded-full bg-[#EAE1D5]/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#F3EFE7]/60 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Intro & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-medium tracking-wide text-[#7D5133] uppercase">
                Available for Projects • PR Văn Lang
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1611] leading-[1.14] tracking-tight">
                Biến Ý Tưởng Thành <br />
                <span className="italic font-normal text-[#9E6B47] font-serif">
                  Những Câu Chuyện Chạm
                </span> <br />
                Đến Trái Tim Khán Giả.
              </h1>
              <p className="text-base sm:text-lg text-[#5C4D43] leading-relaxed max-w-xl font-normal">
                Xin chào, mình là <strong className="text-[#1E1611] font-semibold">{profileData.name}</strong>. 
                Mình chuyên xây dựng concept nội dung viral, kịch bản short-form video TikTok xưởng sản xuất 
                <span className="text-[#9E6B47] font-medium"> Minh Huy Furniture</span> và định hình phong cách kênh F&B ngọt ngào, 
                ấm áp như <span className="text-[#9E6B47] font-medium">@la.camotchut</span>.
              </p>
            </div>

            {/* Clean Feature Badges (No emoji, clean SVG) */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                Kịch bản & Dựng CapCut chuyên sâu
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                Tone màu Be & Aesthetic Cafe
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C] shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                Tư duy Pitching & Truyền thông IMC
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#tiktok-showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1611] text-white text-xs sm:text-sm font-medium hover:bg-[#9E6B47] shadow-luxury transition-all hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-current text-[#FAF7F2]" />
                <span>Trải nghiệm TikTok Showcase</span>
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DECFC0] text-[#1E1611] text-xs sm:text-sm font-medium hover:bg-[#F4EFE6] transition-all shadow-sm"
              >
                <span>Xem Case Studies</span>
                <ArrowDownRight className="w-4 h-4 text-[#9E6B47]" />
              </a>

              <a
                href={profileData.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-mono font-medium text-[#7D5133] hover:text-[#1E1611] transition-colors"
              >
                <Download className="w-4 h-4 text-[#9E6B47]" />
                <span>Tải CV PDF</span>
              </a>
            </div>

            {/* Key Metrics Counter Strip */}
            <div className="pt-8 border-t border-[#EAE1D5] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {profileData.keyMetrics.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#5C4D43] font-medium leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-End Magazine Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient backdrop frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EAE1D5] to-transparent rounded-3xl transform rotate-2 scale-102 -z-10" />

            {/* Main Image Card */}
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#ECE4D8] bg-white shadow-luxury group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={profileData.portrait}
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Refined gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Floating Bottom Nameplate */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-dark text-white flex items-center justify-between">
                  <div>
                    <div className="font-serif text-base font-semibold tracking-wide">
                      {profileData.name}
                    </div>
                    <div className="text-[11px] font-mono tracking-wider uppercase text-[#DECFC0]">
                      Creative Planner • 2026
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-[#F4EFE6]">
                <span className="text-xs font-mono text-[#7D5133] tracking-wide">
                  Content Marketing & Strategy
                </span>
                <span className="text-xs font-mono text-[#9E6B47] font-semibold">
                  TP. Hồ Chí Minh
                </span>
              </div>
            </div>

            {/* Floating Glass Pill: 20+ Workshop Videos */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 glass-editorial p-3.5 rounded-2xl shadow-luxury flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1E1611] text-[#FAF7F2] flex items-center justify-center">
                <Film className="w-4 h-4 text-[#C8B49F]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#1E1611]">20+ Video Xưởng</div>
                <div className="text-[11px] text-[#5C4D43] font-mono">Minh Huy Furniture</div>
              </div>
            </div>

            {/* Floating Glass Pill: La Ca Mot Chut */}
            <div className="absolute top-6 -right-3 sm:-right-6 glass-editorial px-3.5 py-2 rounded-full shadow-luxury flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#9E6B47]" />
              <span className="text-xs font-mono font-semibold text-[#1E1611]">@la.camotchut</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
