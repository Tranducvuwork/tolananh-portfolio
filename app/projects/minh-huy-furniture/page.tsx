import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Sofa, FolderDown, ExternalLink, Play, Hammer, ShieldCheck, 
  Truck, Layers, ArrowLeft, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { featuredVideos, caseStudies } from '@/app/data';

export const metadata: Metadata = {
  title: 'Dự Án Nội Thất Minh Huy (B2B Xưởng) | Tô Lan Anh',
  description: 'Chiến dịch TikTok Marketing B2B cho cơ sở sản xuất gia công nội thất kim khí & sofa Minh Huy Furniture. 20+ video xưởng thực tế, kịch bản CapCut nhịp điệu cao.',
};

export default function MinhHuyPage() {
  const caseStudy = caseStudies.find(c => c.id === 'minh-huy-furniture') || caseStudies[0];
  const videos = featuredVideos.filter(v => v.category === 'furniture');

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F4EFE6] border-b border-[#ECE4D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#7D5133] hover:text-[#1E1611] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Danh Mục Dự Án</span>
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
              <Sofa className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>HẠNG MỤC: SẢN XUẤT NỘI THẤT B2B</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold text-[#1E1611] leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed max-w-3xl">
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1611] text-white text-xs font-mono font-medium hover:bg-[#9E6B47] shadow-luxury transition-all"
            >
              <FolderDown className="w-4 h-4 text-[#C8B49F]" />
              <span>Mở Google Drive Xưởng (20+ Video Gốc)</span>
            </a>
            <div className="px-4 py-3 rounded-full bg-white border border-[#DECFC0] text-xs font-mono text-[#5C4D43]">
              Vai trò: {caseStudy.role}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-10 bg-white border-b border-[#ECE4D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {caseStudy.metrics.map((m, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-sans font-bold text-[#1E1611]">{m.value}</div>
                <div className="text-xs font-mono text-[#5C4D43]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive Narrative */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="editorial-card p-6 bg-white space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-[#7D5133]">Bối Cảnh Khách Hàng</span>
              <p className="text-xs text-[#4A3A2C] leading-relaxed">{caseStudy.overview}</p>
            </div>
            <div className="editorial-card p-6 bg-white space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-rose-800">Thách Thức Ngành Hàng</span>
              <p className="text-xs text-[#4A3A2C] leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div className="editorial-card p-6 bg-white space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-emerald-800">Giải Pháp TikTok BTS</span>
              <p className="text-xs text-[#4A3A2C] leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-sans font-bold text-[#1E1611]">
              4 Tuyến Nội Dung Xưởng Sản Xuất (Content Pillars)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.contentPillars.map((p, i) => (
                <div key={i} className="editorial-card p-5 bg-white space-y-2">
                  <div className="font-sans text-sm font-bold text-[#1E1611] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#FAF7F2] text-[#9E6B47] flex items-center justify-center text-xs font-mono">
                      {i + 1}
                    </span>
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-[#5C4D43] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-sans font-bold text-[#1E1611]">
              Danh Sách Kịch Bản & Thước Phim Xưởng Đã Sản Xuất
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {videos.map((v) => (
                <div key={v.id} className="editorial-card p-5 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#9E6B47]">{v.views} views</span>
                    <span className="text-[#5C4D43]">{v.duration}</span>
                  </div>
                  <h4 className="font-sans text-base font-bold text-[#1E1611]">{v.title}</h4>
                  <blockquote className="p-3 rounded-xl bg-[#FAF7F2] text-xs font-sans italic text-[#4A3A2C]">
                    "{v.hook}"
                  </blockquote>
                  <p className="text-xs text-[#5C4D43]">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="editorial-card p-6 bg-white space-y-4">
            <h4 className="text-lg font-sans font-bold text-[#1E1611]">Sản Phẩm Đã Bàn Giao:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3A2C]">
              {caseStudy.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#9E6B47]" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross navigation */}
          <div className="pt-6 border-t border-[#ECE4D8] flex items-center justify-between">
            <Link
              href="/projects"
              className="text-xs font-mono font-medium text-[#5C4D43] hover:text-[#1E1611] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Về Trang Projects</span>
            </Link>
            <Link
              href="/projects/la-ca-mot-chut"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1611] text-white text-xs font-mono font-medium hover:bg-[#9E6B47] transition-all"
            >
              <span>Xem Hạng Mục 2: Kênh La Cà Một Chút</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
