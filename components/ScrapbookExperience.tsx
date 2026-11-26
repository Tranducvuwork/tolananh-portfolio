'use client';

import Image from 'next/image';
import { BookOpen, GraduationCap, Briefcase, Target, Sparkles, Pin, Paperclip } from 'lucide-react';
import { profileData } from '@/app/data';

export default function ScrapbookExperience() {
  return (
    <section id="experience" className="py-24 bg-[#F5EDE1] relative border-t border-[#E8DEC8]/80 overflow-hidden">
      
      {/* Decorative backdrop elements */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#EADCCB]/50 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FAF0E4]/60 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D2] text-[#84674C] text-xs font-semibold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Journal & Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#34261C]">
            Học Vấn & Hành Trình <br />
            <span className="italic text-[#84674C] font-normal">Kinh Nghiệm Thực Chiến</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6E5A4B]">
            Những dấu mốc học tập và cọ xát thực tế xây dựng nên tư duy lập kế hoạch sáng tạo và kỹ năng thực thi.
          </p>
        </div>

        {/* Scrapbook Open Notebook Layout */}
        <div className="relative bg-[#FAF6F0] rounded-3xl border-2 border-[#D8C7B2] shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Top Paperclip Accent */}
          <div className="absolute top-4 left-1/4 -translate-x-1/2 flex items-center gap-1 text-[#84674C]/60 select-none">
            <Paperclip className="w-8 h-8 -rotate-45" />
          </div>

          {/* Notebook Center Binding Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D5BEA4] to-transparent" />

          {/* Notebook Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Left Page: Education & Career Goals */}
            <div className="space-y-8">
              
              {/* Education Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E8DEC8]">
                  <GraduationCap className="w-5 h-5 text-[#84674C]" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#34261C]">
                    Học Vấn & Chứng Chỉ
                  </h3>
                </div>

                <div className="space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-2xl bg-white border border-[#E5D6C3] shadow-sm space-y-1.5 relative group hover:border-[#84674C] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#84674C]">{edu.period}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F2E8DC] text-[10px] font-bold text-[#644D38]">
                          {edu.badge}
                        </span>
                      </div>
                      <div className="text-base font-bold text-[#34261C]">{edu.school}</div>
                      <div className="text-xs font-semibold text-[#84674C]">{edu.major}</div>
                      <p className="text-xs text-[#6E5A4B] leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Objectives Block */}
              <div className="p-5 rounded-2xl bg-[#F7EFE3] border border-[#D8C7B2] space-y-3 relative">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#84674C]" />
                  <h4 className="text-lg font-serif font-bold text-[#34261C]">
                    Mục Tiêu Nghề Nghiệp
                  </h4>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/90 border border-[#E5D6C3] space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#84674C] bg-[#F2E8DC] px-2 py-0.5 rounded">
                      Mục tiêu 2 tháng tới
                    </span>
                    <p className="text-xs text-[#463526] leading-relaxed font-medium">
                      {profileData.goals.shortTerm}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/90 border border-[#E5D6C3] space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#84674C] bg-[#F2E8DC] px-2 py-0.5 rounded">
                      Mục tiêu 2 năm tới
                    </span>
                    <p className="text-xs text-[#463526] leading-relaxed font-medium">
                      {profileData.goals.longTerm}
                    </p>
                  </div>
                </div>

                {/* Cute Scrapbook Sticker */}
                <div className="font-handwriting text-right text-lg text-[#84674C] -mb-1">
                  ~ Tô Lan Anh with passion ✨
                </div>
              </div>

            </div>

            {/* Right Page: Experience Timeline */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-2 pb-2 border-b border-[#E8DEC8]">
                <Briefcase className="w-5 h-5 text-[#84674C]" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#34261C]">
                  Kinh Nghiệm Làm Việc
                </h3>
              </div>

              <div className="space-y-5">
                {profileData.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-white border border-[#E5D6C3] shadow-sm space-y-2 relative group hover:border-[#84674C] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#84674C] bg-[#F9F5EC] px-2.5 py-1 rounded-full border border-[#E8DEC8]">
                        {exp.period}
                      </span>
                      <span className="text-[11px] font-medium text-[#8C7665] italic">
                        {exp.focus}
                      </span>
                    </div>

                    <div className="text-base font-bold text-[#34261C]">
                      {exp.role}
                    </div>
                    <div className="text-xs font-semibold text-[#644D38]">
                      {exp.company}
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-[#5E4D40] leading-relaxed">
                          <span className="text-[#84674C] font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Journal Stickers Bar */}
          <div className="mt-8 pt-6 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#8C7665]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 font-handwriting text-xl text-[#6E5A4B]">
                🌸 Vạn dặm khởi đầu từ một bước chân
              </span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span>Đại học Văn Lang • Khóa 2022 - 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
