'use client';

import { Sparkles, Scissors, Palette, Layout, BarChart3, Smartphone, FolderOpen, CheckCircle2, Video, PenTool, Layers, Target } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Skills() {
  const tools = [
    { name: 'CapCut Pro', desc: 'Dựng short-form video nhịp điệu cao & sound effect', icon: Scissors, tag: 'Chuyên sâu' },
    { name: 'Photoshop', desc: 'Chứng chỉ ColorMe 2025 · Xử lý ảnh & layout poster', icon: Palette, tag: 'Chứng chỉ' },
    { name: 'Canva Pro', desc: 'Thiết kế ấn phẩm truyền thông & slide pitching', icon: Layout, tag: 'Thành thạo' },
    { name: 'Meta Suite', desc: 'Quản trị Fanpage, đo lường tương tác & tiếp cận', icon: BarChart3, tag: 'Thực chiến' },
    { name: 'TikTok Studio', desc: 'Phân tích insight người xem, SEO từ khóa & trend', icon: Smartphone, tag: 'Chuyên môn' },
    { name: 'Google Workspace', desc: 'Docs, Sheets, Drive quản lý dữ liệu sản xuất', icon: FolderOpen, tag: 'Tối ưu' },
  ];

  const focusAreas = [
    {
      title: 'Sản Xuất Short-Form Video',
      icon: Video,
      desc: 'Quy trình sản xuất video ngắn toàn diện từ ý tưởng, kịch bản chi tiết, chỉ đạo bối cảnh đến hậu kỳ dựng nhịp điệu cuốn hút.',
      tags: ['Kịch bản TikTok đa chủ đề', 'Dựng CapCut Pro', 'Thu âm & Voiceover', 'Âm thanh & Hiệu ứng', 'Tối ưu 3s đầu (Hook)']
    },
    {
      title: 'Sáng Tạo Nội Dung & Storytelling',
      icon: Sparkles,
      desc: 'Bắt nhịp xu hướng Gen Z, khai thác không gian cafe tone Be ấm áp và trải nghiệm thực tế để tạo sự gắn kết tự nhiên với khán giả.',
      tags: ['Bắt trend Gen Z', 'Tone Be & Ấm áp', 'Kịch bản viral', 'Storytelling thực tế', 'Xe điện Dat Bike']
    },
    {
      title: 'Thiết Kế Đồ Họa & Visual Branding',
      icon: PenTool,
      desc: 'Xây dựng hình ảnh thương hiệu đồng nhất trên các nền tảng số với màu sắc trang nhã, bố cục rõ ràng và chuẩn nhận diện.',
      tags: ['Adobe Photoshop', 'Canva Pro', 'Social Media Banner', 'Bộ nhận diện visual', 'Ấn phẩm tuyển dụng']
    },
    {
      title: 'Chiến Lược IMC & Pitching',
      icon: Target,
      desc: 'Nền tảng đào tạo PR chính quy từ Đại học Văn Lang kết hợp tư duy phân tích thị trường, nghiên cứu tệp khách hàng và pitching.',
      tags: ['Hoạch định chiến dịch', 'Nghiên cứu đối tượng', 'Slide Pitching Deck', 'Đo lường KPIs', 'Báo cáo hiệu quả']
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8F6F1]">
      <div className="container">
        
        {/* Section Header - Clean Human Typography */}
        <div className="max-w-2xl mb-14 space-y-3">
          <p className="eyebrow">
            KỸ NĂNG &amp; CÔNG CỤ THỰC CHIẾN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight leading-tight">
            Năng lực chuyên môn &amp; <br />
            Hệ thống công cụ làm việc
          </h2>
          <p className="text-base text-[#635952] leading-relaxed pt-1">
            Kết hợp giữa tư duy truyền thông bài bản từ chuyên ngành PR Văn Lang, gu thẩm mỹ ấm áp tinh tế và kỹ năng sản xuất video ngắn thực chiến.
          </p>
        </div>

        {/* 4 Focus Domains (Inspired by Ngân Hà Trần Wix Studio style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {focusAreas.map((area, idx) => {
            const IconComp = area.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[rgba(20,17,15,0.08)] shadow-[0_4px_20px_rgba(20,17,15,0.03)] hover:shadow-[0_12px_30px_rgba(20,17,15,0.06)] hover:border-[rgba(140,90,60,0.3)] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex items-center justify-center text-[#8C5A3C]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    {area.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[rgba(20,17,15,0.06)]">
                  {area.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools I Work With Strip */}
        <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[rgba(20,17,15,0.08)] shadow-[0_4px_20px_rgba(20,17,15,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[rgba(20,17,15,0.08)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
              Công cụ vận hành hàng ngày (Tools I Work With)
            </span>
            <span className="text-xs text-[#635952]">
              Short-form Video · Graphic Design · Analytics
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
            {tools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.06)] hover:border-[rgba(140,90,60,0.35)] transition-all hover:bg-white text-center space-y-2 group"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-[rgba(20,17,15,0.08)] flex items-center justify-center text-[#14110F] group-hover:scale-105 group-hover:text-[#8C5A3C] transition-transform shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-[#14110F] pt-1">{tool.name}</div>
                  <div className="text-[11px] text-[#635952] leading-tight line-clamp-2">{tool.desc}</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[10px] font-semibold text-[#8C5A3C] border border-[rgba(20,17,15,0.08)]">
                    {tool.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
