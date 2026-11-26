'use client';

import Image from 'next/image';
import { ArrowDownRight, Sparkles, Play, Award, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative blurred background circles for warm cozy aesthetic */}
      <div className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-[#EFE4D6]/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F5E6D8]/50 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag badge with scrapbook feel */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8DC] border border-[#D5BEA4] text-xs font-semibold text-[#84674C] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A38466]" />
              <span>Social Media & Creative Planner • PR Văn Lang</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#34261C] leading-[1.15] tracking-tight">
                Biến Ý Tưởng Thành <br />
                <span className="italic text-[#84674C] font-normal underline decoration-[#D5BEA4] decoration-wavy decoration-1 underline-offset-8">
                  Những Câu Chuyện Chạm
                </span> <br />
                Đến Trái Tim Khán Giả.
              </h1>
              <p className="text-base sm:text-lg text-[#5E4D40] leading-relaxed pt-2 max-w-xl font-normal">
                Xin chào, mình là <strong className="text-[#34261C] font-semibold">{profileData.name}</strong>. 
                Mình chuyên xây dựng concept nội dung viral, kịch bản short-form video TikTok xưởng sản xuất 
                <span className="text-[#84674C] font-medium"> Minh Huy Furniture</span> và định hình phong cách kênh F&B ngọt ngào, 
                ấm áp như <span className="text-[#84674C] font-medium">@la.camotchut</span>.
              </p>
            </div>

            {/* Quick value props / bullet chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-[#E5D6C3] text-xs text-[#5E4D40]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84674C]" /> Kịch bản & Dựng CapCut chuyên sâu
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-[#E5D6C3] text-xs text-[#5E4D40]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84674C]" /> Tone màu Be & Aesthetic Cafe
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-[#E5D6C3] text-xs text-[#5E4D40]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84674C]" /> Tư duy Pitching & Truyền thông IMC
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#tiktok-showcase"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#84674C] text-white font-medium text-sm shadow-md shadow-[#84674C]/25 hover:bg-[#644D38] hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Trải nghiệm Video TikTok</span>
              </a>

              <a
                href="#case-studies"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#D5BEA4] text-[#644D38] font-medium text-sm hover:bg-[#F9F5EC] transition-all shadow-sm"
              >
                <span>Chi tiết Case Studies</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="pt-8 border-t border-[#E8DEC8]/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profileData.keyMetrics.map((item, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#84674C]">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#6E5A4B] font-medium leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Polaroid Image Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Scrapbook Tape Accent */}
            <div className="washi-tape -top-3 left-12" />
            <div className="washi-tape washi-tape-right -top-2 right-12" />

            {/* Main Polaroid Frame */}
            <div className="polaroid-card w-full max-w-sm relative group">
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden bg-[#ECE3D5] mb-4">
                <Image
                  src={profileData.portrait}
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center justify-between">
                  <span className="font-medium">Tô Lan Anh • 2026</span>
                  <span className="text-[10px] tracking-wide uppercase text-amber-200">Creative Planner</span>
                </div>
              </div>

              {/* Polaroid Footer Handwritten Note */}
              <div className="px-2 pt-1 flex items-center justify-between">
                <div>
                  <div className="font-handwriting text-2xl text-[#5A4535] leading-none">
                    ✨ Tô Lan Anh Portfolio
                  </div>
                  <div className="text-[11px] text-[#8C7665] mt-1">
                    Content Marketing & Creative Direction
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F2E8DC] flex items-center justify-center text-[#84674C] font-serif text-sm font-bold">
                  ★
                </div>
              </div>
            </div>

            {/* Floating Mini Sticker Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white border border-[#D5BEA4] rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-soft-pulse">
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-xl">
                🎬
              </div>
              <div>
                <div className="text-xs font-bold text-[#34261C]">20+ Video Xưởng</div>
                <div className="text-[10px] text-[#7A6453]">Minh Huy Furniture & F&B</div>
              </div>
            </div>

            {/* Floating Cup of Coffee Sticker */}
            <div className="absolute top-10 -right-2 sm:-right-4 bg-[#F7F2EA] border border-[#E5D6C3] rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs text-[#5A4535]">
              <span>☕</span>
              <span className="font-handwriting text-base font-semibold">@la.camotchut</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
