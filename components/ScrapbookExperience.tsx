'use client';

import Image from 'next/image';
import { BookOpen, GraduationCap, Briefcase, Target, Sparkles, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/app/data';

export default function ScrapbookExperience() {
  return (
    <section id="experience" className="py-24 bg-[#F4EFE6] relative border-t border-[#ECE4D8] overflow-hidden">
      
      {/* Ambient backdrop */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#EAE1D5]/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FAF7F2]/60 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              Milestones & Trajectory
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1E1611] tracking-tight">
            Học Vấn & Hành Trình <br />
            <span className="font-sans italic font-normal text-[#9E6B47]">
              Kinh Nghiệm Thực Chiến
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            Những dấu mốc học tập bài bản tại Đại học Văn Lang và kinh nghiệm cọ xát thực tế xây dựng nên tư duy hoạch định chiến lược sáng tạo.
          </p>
        </div>

        {/* Editorial Journal Split Layout (Inspired by Ngân Hà Trần reference) */}
        <div className="editorial-card p-6 sm:p-10 lg:p-12 bg-white shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Education & Career Goals (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Education Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECE4D8]">
                  <GraduationCap className="w-5 h-5 text-[#9E6B47]" />
                  <h3 className="text-xl font-sans font-bold text-[#1E1611]">
                    Học Vấn & Chứng Chỉ
                  </h3>
                </div>

                <div className="space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div 
                      key={index} 
                      className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-2 hover:border-[#DECFC0] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#9E6B47]">{edu.period}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-mono text-[#5C4D43] border border-[#ECE4D8]">
                          {edu.badge}
                        </span>
                      </div>
                      <div className="text-base font-sans font-bold text-[#1E1611]">{edu.school}</div>
                      <div className="text-xs font-semibold text-[#7D5133] font-mono">{edu.major}</div>
                      <p className="text-xs text-[#5C4D43] leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Objectives Block */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#9E6B47]" />
                  <h4 className="text-lg font-sans font-bold text-[#1E1611]">
                    Mục Tiêu Nghề Nghiệp
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#ECE4D8] space-y-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#9E6B47] bg-[#FAF7F2] px-2 py-0.5 rounded">
                      Mục tiêu 2 tháng tới
                    </span>
                    <p className="text-xs text-[#3E3027] leading-relaxed font-medium">
                      {profileData.goals.shortTerm}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#ECE4D8] space-y-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#9E6B47] bg-[#FAF7F2] px-2 py-0.5 rounded">
                      Mục tiêu 2 năm tới
                    </span>
                    <p className="text-xs text-[#3E3027] leading-relaxed font-medium">
                      {profileData.goals.longTerm}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Work Experience Timeline (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECE4D8]">
                <Briefcase className="w-5 h-5 text-[#9E6B47]" />
                <h3 className="text-xl font-sans font-bold text-[#1E1611]">
                  Kinh Nghiệm Thực Tế
                </h3>
              </div>

              <div className="space-y-5">
                {profileData.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-3 hover:border-[#DECFC0] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-[#9E6B47]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-[#5C4D43]">
                        {exp.company}
                      </span>
                    </div>

                    <div>
                      <div className="text-base font-sans font-bold text-[#1E1611]">
                        {exp.role}
                      </div>
                      <div className="text-xs text-[#7D5133] font-medium mt-0.5">
                        {exp.focus}
                      </div>
                    </div>

                    <ul className="space-y-2 pt-1 border-t border-[#ECE4D8]/60">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-[#4A3A2C] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
