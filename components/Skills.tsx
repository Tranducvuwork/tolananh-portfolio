'use client';

import { Sparkles, Palette, Video, BarChart3, Users, MessageSquare, Wrench } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Skills() {
  const tools = [
    { name: 'CapCut', desc: 'Dựng short-form video chuyên sâu', icon: '✂️', tag: 'Expert' },
    { name: 'Adobe Photoshop', desc: 'Chứng chỉ ColorMe 2025', icon: '🎨', tag: 'Certified' },
    { name: 'Canva Pro', desc: 'Social Media & Visual Layout', icon: '📐', tag: 'Proficient' },
    { name: 'Meta Business Suite', desc: 'Quản trị Fanpage & Phân tích', icon: '📊', tag: 'Hands-on' },
    { name: 'TikTok Studio', desc: 'Lên lịch, tối ưu SEO & Trend', icon: '📱', tag: 'Specialist' },
    { name: 'Google Workspace', desc: 'Docs, Sheets, Slides, Drive', icon: '📂', tag: 'Advanced' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#FAF6F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#84674C] text-xs font-semibold tracking-wide uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Kỹ Năng & Công Cụ Làm Việc</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#34261C]">
            Năng Lực Chuyên Môn <br />
            <span className="italic text-[#84674C] font-normal">& Hệ Thống Công Cụ</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6E5A4B]">
            Sự kết hợp giữa tư duy thẩm mỹ nữ tính, khả năng phân tích số liệu và sự thành thạo các phần mềm sáng tạo.
          </p>
        </div>

        {/* Tools I work with Grid */}
        <div className="mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#84674C] text-center">
            Công Cụ Sử Dụng Thành Thạo Hàng Ngày
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#84674C] transition-all hover:shadow-md text-center space-y-2 group"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F7F2EA] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-sm font-bold text-[#34261C]">{tool.name}</div>
                <div className="text-[11px] text-[#7A6453] leading-snug">{tool.desc}</div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#F2E8DC] text-[9px] font-bold text-[#644D38]">
                  {tool.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Creative & Content */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5D6C3] shadow-card space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F2E8DC] text-[#84674C] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#34261C]">
              Sáng Tạo & Concept
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5E4D40]">
              {profileData.skills.creative.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84674C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Tools */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5D6C3] shadow-card space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F2E8DC] text-[#84674C] flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#34261C]">
              Sản Xuất & Vận Hành
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5E4D40]">
              {profileData.skills.technical.map((item, i) => (
                <li key={i} className="flex flex-col space-y-0.5">
                  <span className="font-semibold text-[#34261C]">{item.name}</span>
                  <span className="text-[11px] text-[#7A6453]">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft skills */}
          <div className="p-6 rounded-3xl bg-white border border-[#E5D6C3] shadow-card space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F2E8DC] text-[#84674C] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#34261C]">
              Kỹ Năng Mềm & Tư Duy
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5E4D40]">
              {profileData.skills.soft.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84674C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
