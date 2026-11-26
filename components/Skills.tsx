'use client';

import { Sparkles, Video, Users, Wrench, Scissors, Palette, Layout, BarChart3, Smartphone, FolderOpen, CheckCircle } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Skills() {
  const tools = [
    { name: 'CapCut', desc: 'Dựng short-form video nhịp điệu cao', icon: Scissors, tag: 'Expert' },
    { name: 'Photoshop', desc: 'Chứng chỉ ColorMe 2025', icon: Palette, tag: 'Certified' },
    { name: 'Canva Pro', desc: 'Social Media & Visual Assets', icon: Layout, tag: 'Proficient' },
    { name: 'Meta Business Suite', desc: 'Quản trị Fanpage & Phân tích số liệu', icon: BarChart3, tag: 'Hands-on' },
    { name: 'TikTok Studio', desc: 'Lên lịch, tối ưu SEO & Trend', icon: Smartphone, tag: 'Specialist' },
    { name: 'Google Workspace', desc: 'Docs, Sheets, Slides, Drive', icon: FolderOpen, tag: 'Advanced' },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-xs">
            <Wrench className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              Skills & Toolstack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1611] tracking-tight">
            Năng Lực Chuyên Môn <br />
            <span className="font-serif italic text-[#9E6B47] font-normal">
              & Hệ Thống Công Cụ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            Sự giao thoa giữa tư duy thẩm mỹ nữ tính, năng lực phân tích dữ liệu và sự thành thạo các phần mềm sáng tạo kỹ thuật số.
          </p>
        </div>

        {/* Tools I Work With Strip (Inspired by Ngân Hà Trần reference) */}
        <div className="editorial-card p-6 sm:p-8 bg-white mb-14 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-4 border-b border-[#ECE4D8]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-bold">
              Công Cụ Vận Hành Hàng Ngày (Tools I Work With)
            </span>
            <span className="text-xs font-mono text-[#9E6B47]">
              Short-form Video • Design • Analytics
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] hover:border-[#9E6B47] transition-all hover:shadow-card text-center space-y-2.5 group"
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-white border border-[#DECFC0] flex items-center justify-center text-[#1E1611] group-hover:scale-105 group-hover:text-[#9E6B47] transition-transform shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-serif font-bold text-[#1E1611]">{tool.name}</div>
                  <div className="text-[11px] text-[#5C4D43] leading-tight line-clamp-2">{tool.desc}</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-medium text-[#7D5133] border border-[#ECE4D8]">
                    {tool.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Domains Grid with Pill Tags (Inspired by Ngân Hà Trần reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Creative & Concept Planning */}
          <div className="editorial-card p-6 bg-white space-y-5">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#1E1611]">
                Sáng Tạo & Concept
              </h3>
              <p className="text-xs text-[#5C4D43] mt-1">
                Hoạch định góc nhìn mới lạ và thông điệp chạm đến cảm xúc khán giả.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#ECE4D8]">
              {profileData.skills.creative.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#ECE4D8] text-xs font-mono text-[#4A3A2C]">
                  <CheckCircle className="w-3 h-3 text-[#9E6B47]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Video Production & Operations */}
          <div className="editorial-card p-6 bg-white space-y-5">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#1E1611]">
                Sản Xuất & Vận Hành
              </h3>
              <p className="text-xs text-[#5C4D43] mt-1">
                Kỹ thuật cắt dựng CapCut, canh chỉnh màu sắc và xử lý âm thanh ASMR.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#ECE4D8]">
              {profileData.skills.technical.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#ECE4D8] text-xs font-mono text-[#4A3A2C]">
                  <CheckCircle className="w-3 h-3 text-[#9E6B47]" />
                  {item.name} • {item.level}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Planning & Communication */}
          <div className="editorial-card p-6 bg-white space-y-5">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#1E1611]">
                Chiến Lược & Phân Tích
              </h3>
              <p className="text-xs text-[#5C4D43] mt-1">
                Đọc hiểu chỉ số tương tác, tối ưu SEO TikTok và trình bày pitching.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#ECE4D8]">
              {profileData.skills.soft.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#ECE4D8] text-xs font-mono text-[#4A3A2C]">
                  <CheckCircle className="w-3 h-3 text-[#9E6B47]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
