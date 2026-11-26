import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Download, Phone, Mail, Sparkles, Sofa, Coffee, 
  Briefcase, Wrench, ArrowUpRight, CheckCircle2, Film, Star 
} from 'lucide-react';
import { profileData } from '@/app/data';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      {/* Hero Section: Giới thiệu Tô Lan Anh */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-16 left-1/3 w-[500px] h-[500px] rounded-full bg-[#EAE1D5]/40 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#F3EFE7]/60 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Intro (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-xs">
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

              {/* Core value props */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                  Kịch bản & Dựng CapCut chuyên sâu
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                  Tone màu Be & Aesthetic Cafe
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] text-xs font-medium text-[#4A3A2C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                  Tư duy Pitching & Truyền thông IMC
                </span>
              </div>

              {/* Navigation CTAs to separate pages */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1611] text-white text-xs sm:text-sm font-medium hover:bg-[#9E6B47] shadow-luxury transition-all hover:scale-[1.02]"
                >
                  <span>Xem Các Hạng Mục Dự Án (Work)</span>
                  <ArrowRight className="w-4 h-4 text-[#DECFC0]" />
                </Link>

                <Link
                  href="/working-experience"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DECFC0] text-[#1E1611] text-xs sm:text-sm font-medium hover:bg-[#F4EFE6] transition-all shadow-sm"
                >
                  <Briefcase className="w-4 h-4 text-[#9E6B47]" />
                  <span>Kinh Nghiệm & Học Vấn</span>
                </Link>

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

              {/* Quick Metrics */}
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

            {/* Right Column: High-End Editorial Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#ECE4D8] bg-white shadow-luxury group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4EFE6]">
                  <Image
                    src={profileData.portrait}
                    alt={profileData.name}
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

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

                <div className="p-4 bg-white flex items-center justify-between border-t border-[#F4EFE6]">
                  <span className="text-xs font-mono text-[#7D5133]">
                    Content Marketing & Strategy
                  </span>
                  <span className="text-xs font-mono text-[#9E6B47] font-semibold">
                    Đại Học Văn Lang
                  </span>
                </div>
              </div>

              {/* Floating Pills */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 glass-editorial p-3.5 rounded-2xl shadow-luxury flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1E1611] text-[#FAF7F2] flex items-center justify-center">
                  <Film className="w-4 h-4 text-[#C8B49F]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E1611]">20+ Video Xưởng</div>
                  <div className="text-[11px] text-[#5C4D43] font-mono">Minh Huy Furniture</div>
                </div>
              </div>

              <div className="absolute top-6 -right-3 sm:-right-6 glass-editorial px-3.5 py-2 rounded-full shadow-luxury flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#9E6B47]" />
                <span className="text-xs font-mono font-semibold text-[#1E1611]">@la.camotchut</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: Phân nhóm 4 Trang Độc Lập (Chỉ mục trang chuyên biệt) */}
      <section className="py-20 bg-[#F4EFE6] border-t border-[#ECE4D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
              Danh Mục Trang Chuyên Biệt
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1611]">
              Khám Phá Hồ Sơ Năng Lực
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4D43]">
              Bấm chọn trang bạn muốn xem, mỗi trang được hiển thị độc lập với nội dung chuyên sâu:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Dự án (Work) */}
            <Link
              href="/work"
              className="editorial-card p-6 bg-white space-y-4 hover:border-[#9E6B47] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Sofa className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9E6B47] uppercase font-bold">Hạng mục riêng</span>
                  <h3 className="text-xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                    Dự Án (Work)
                  </h3>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  2 hạng mục độc lập: Xưởng nội thất Minh Huy B2B & Kênh F&B La Cà Một Chút tone Be.
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE4D8] flex items-center justify-between text-xs font-mono font-medium text-[#1E1611]">
                <span>Xem trang Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Working Experience */}
            <Link
              href="/working-experience"
              className="editorial-card p-6 bg-white space-y-4 hover:border-[#9E6B47] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9E6B47] uppercase font-bold">Học vấn & Thực chiến</span>
                  <h3 className="text-xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                    Kinh Nghiệm
                  </h3>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  Đại Học Văn Lang PR, ColorMe, Phát Thủy, Suzuki Hồng Phương, Hải Phi.
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE4D8] flex items-center justify-between text-xs font-mono font-medium text-[#1E1611]">
                <span>Xem kinh nghiệm</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Skills & Tools */}
            <Link
              href="/skills"
              className="editorial-card p-6 bg-white space-y-4 hover:border-[#9E6B47] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9E6B47] uppercase font-bold">Công cụ hàng ngày</span>
                  <h3 className="text-xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                    Kỹ Năng & Tools
                  </h3>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  CapCut, Photoshop, Canva, Meta Business Suite, TikTok Studio, Google Workspace.
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE4D8] flex items-center justify-between text-xs font-mono font-medium text-[#1E1611]">
                <span>Xem kỹ năng</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4: Contact */}
            <Link
              href="/contact"
              className="editorial-card p-6 bg-white space-y-4 hover:border-[#9E6B47] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9E6B47] uppercase font-bold">Kết nối nhanh</span>
                  <h3 className="text-xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                    Liên Hệ
                  </h3>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  Phone: 0942.077.335, Email: lananhto2402@gmail.com, Tải CV PDF chi tiết.
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE4D8] flex items-center justify-between text-xs font-mono font-medium text-[#1E1611]">
                <span>Gửi lời nhắn</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
