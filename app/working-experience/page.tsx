import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  GraduationCap, Briefcase, Target, Download, ArrowUpRight, 
  CheckCircle2, Sparkles, FolderDown, Scissors, Palette, 
  Layout, BarChart3, Smartphone, FolderOpen, Award, ArrowRight
} from 'lucide-react';
import { profileData } from '@/app/data';

export const metadata: Metadata = {
  title: 'Working Experience & Education | Tô Lan Anh Portfolio',
  description: 'Hồ sơ học vấn, kinh nghiệm làm việc và kỹ năng chuyên môn của Tô Lan Anh (Đại Học Văn Lang PR, ColorMe, DN Phát Thủy, Suzuki Hồng Phương, Hải Phi).',
};

export default function WorkingExperiencePage() {
  const tools = [
    { name: 'CapCut', desc: 'Dựng short-form video nhịp điệu cao', icon: Scissors, tag: 'Expert' },
    { name: 'Photoshop', desc: 'Chứng chỉ ColorMe 2025', icon: Palette, tag: 'Certified' },
    { name: 'Canva Pro', desc: 'Social Media & Visual Assets', icon: Layout, tag: 'Proficient' },
    { name: 'Meta Business Suite', desc: 'Quản trị Fanpage & Phân tích số liệu', icon: BarChart3, tag: 'Hands-on' },
    { name: 'TikTok Studio', desc: 'Lên lịch, tối ưu SEO & Trend', icon: Smartphone, tag: 'Specialist' },
    { name: 'Google Workspace', desc: 'Docs, Sheets, Slides, Drive', icon: FolderOpen, tag: 'Advanced' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      {/* Page Hero: Working Experience */}
      <section className="page-banner border-b border-[rgba(20,17,15,0.08)] bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Description (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <p className="eyebrow">
                KINH NGHIỆM LÀM VIỆC &amp; HỌC VẤN
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight leading-[1.15]">
                Học vấn &amp; Hành trình <br />
                Kinh nghiệm thực chiến
              </h1>

              <p className="page-lead">
                Nền tảng đào tạo bài bản từ chuyên ngành <strong className="text-[#14110F] font-semibold">Quan Hệ Công Chúng (PR) Đại Học Văn Lang</strong> kết hợp kinh nghiệm thực chiến trong phát triển nội dung đa dạng trên TikTok (Toạ Độ Gen Z @toadogenz, kênh F&amp;B @la.camotchut tone Be, Datbike Hồng Phương @datbikehongphuong) và hoạch định chiến dịch truyền thông tích hợp (IMC).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={profileData.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Download className="w-4 h-4 text-[#D5CEBE]" />
                  <span>Tải Bản CV Đầy Đủ (PDF)</span>
                </a>

                <Link
                  href="/work"
                  className="btn btn-secondary"
                >
                  <span>Xem Các Hạng Mục Dự Án</span>
                  <ArrowRight className="w-4 h-4 text-[#8C5A3C]" />
                </Link>
              </div>

            </div>

            {/* Right Column: Role Snapshot Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="editorial-card p-6 sm:p-7 bg-white w-full max-w-sm space-y-5 shadow-luxury">
                
                {/* Avatar & Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#ECE4D8]">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#9E6B47] flex-shrink-0">
                    <Image
                      src={profileData.portrait}
                      alt={profileData.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-[#1E1611]">{profileData.name}</h3>
                    <p className="text-xs font-mono text-[#9E6B47]">Creative Planner • Social Media</p>
                    <span className="text-[11px] text-[#5C4D43] font-mono">Văn Lang University (2022-2026)</span>
                  </div>
                </div>

                {/* Organization Chips */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D5133] font-bold">
                    Tổ chức & Doanh nghiệp đã tham gia:
                  </div>
                  <div className="space-y-1.5 text-xs text-[#4A3A2C]">
                    <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] flex items-center justify-between">
                      <span className="font-medium">Đại Học Văn Lang</span>
                      <span className="text-[10px] font-mono text-[#9E6B47]">PR Chính Quy</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] flex items-center justify-between">
                      <span className="font-medium">Hải Phi Company</span>
                      <span className="text-[10px] font-mono text-[#9E6B47]">Winner Pitching</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] flex items-center justify-between">
                      <span className="font-medium">Suzuki Hồng Phương</span>
                      <span className="text-[10px] font-mono text-[#9E6B47]">Social Media</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] flex items-center justify-between">
                      <span className="font-medium">DN Vận Tải Phát Thủy</span>
                      <span className="text-[10px] font-mono text-[#9E6B47]">Coordinator</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-2 border-t border-[#ECE4D8] flex items-center justify-between text-xs font-mono text-[#7D5133]">
                  <span>Trạng thái:</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Sẵn sàng tiếp nhận dự án
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quantifiable Impact Metrics Strip */}
      <section className="py-12 bg-[#F4EFE6] border-y border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {profileData.keyMetrics.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#ECE4D8] space-y-1">
                <div className="text-3xl sm:text-4xl font-sans font-bold text-[#1E1611]">
                  {item.value}
                </div>
                <div className="text-xs font-mono text-[#5C4D43] leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Experience & Education Breakdown */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          
          {/* Section 1: Professional Experience Timeline */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#ECE4D8]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E6B47] uppercase tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Kinh Nghiệm Làm Việc Thực Tế</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611] mt-1">
                  Doanh Nghiệp & Dự Án Đã Triển Khai
                </h2>
              </div>
              <span className="text-xs font-mono text-[#5C4D43]">
                Social Media • Content Strategy • Video Production
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="editorial-card p-6 bg-white space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#9E6B47]">{exp.period}</span>
                      <span className="text-[#5C4D43]">{exp.company}</span>
                    </div>

                    <div>
                      <h3 className="font-sans text-lg font-bold text-[#1E1611]">{exp.role}</h3>
                      <p className="text-xs font-medium text-[#7D5133] mt-0.5">{exp.focus}</p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-[#ECE4D8] text-xs text-[#4A3A2C]">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Academic Background & Certifications */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#ECE4D8]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E6B47] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Nền Tảng Học Vấn</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611] mt-1">
                  Đại Học Chính Quy & Chứng Chỉ Thiết Kế
                </h2>
              </div>
              <span className="text-xs font-mono text-[#5C4D43]">
                PR Văn Lang 2022-2026 • ColorMe Certified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="editorial-card p-6 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#9E6B47]">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133] text-[11px]">
                      {edu.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-[#1E1611]">{edu.school}</h3>
                  <div className="text-xs font-mono text-[#7D5133] font-semibold">{edu.major}</div>
                  
                  <p className="text-xs text-[#5C4D43] leading-relaxed pt-2 border-t border-[#ECE4D8]">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Tools I Work With */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#ECE4D8]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E6B47] uppercase tracking-wider">
                  <Palette className="w-4 h-4" />
                  <span>Hệ Thống Công Cụ</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611] mt-1">
                  Phần Mềm & Ứng Dụng Chuyên Sâu
                </h2>
              </div>
              <span className="text-xs font-mono text-[#5C4D43]">
                CapCut • Photoshop • Canva • TikTok Studio
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, idx) => {
                const IconComp = tool.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-[#ECE4D8] text-center space-y-2 hover:border-[#9E6B47] transition-all"
                  >
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] flex items-center justify-center text-[#1E1611]">
                      <IconComp className="w-5 h-5 text-[#9E6B47]" />
                    </div>
                    <div className="text-xs font-sans font-bold text-[#1E1611]">{tool.name}</div>
                    <div className="text-[11px] text-[#5C4D43] leading-tight line-clamp-2">{tool.desc}</div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[10px] font-mono text-[#7D5133]">
                      {tool.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Career Goals Roadmap */}
          <div className="editorial-card p-8 bg-white space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#ECE4D8]">
              <Target className="w-5 h-5 text-[#9E6B47]" />
              <h3 className="text-xl font-sans font-bold text-[#1E1611]">
                Lộ Trình & Định Hướng Nghề Nghiệp (Career Roadmap)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E6B47]">
                  Mục tiêu ngắn hạn (2 tháng tới)
                </span>
                <p className="text-xs sm:text-sm text-[#4A3A2C] leading-relaxed pt-1 font-medium">
                  {profileData.goals.shortTerm}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E6B47]">
                  Mục tiêu dài hạn (2 năm tới)
                </span>
                <p className="text-xs sm:text-sm text-[#4A3A2C] leading-relaxed pt-1 font-medium">
                  {profileData.goals.longTerm}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Next Page Banner */}
          <div className="p-8 rounded-3xl bg-[#1E1611] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-[#DECFC0] uppercase tracking-wider">
                Khám Phá Các Dự Án Thực Tế
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Xem 2 Hạng Mục Riêng Biệt: Nội Thất Minh Huy & Kênh La Cà
              </h3>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1E1611] text-xs font-mono font-bold hover:bg-[#FAF7F2] transition-colors"
              >
                <span>Xem Trang Projects</span>
                <ArrowRight className="w-4 h-4 text-[#9E6B47]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
