'use client';

import Link from 'next/link';
import { Sofa, Coffee, Briefcase, ArrowRight, FolderDown, ExternalLink, Sparkles } from 'lucide-react';

export default function CategorySpotlight() {
  return (
    <section className="py-16 bg-[#F4EFE6] border-y border-[#ECE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9E6B47]">
              Phân Nhóm Theo Hạng Mục Riêng Biệt (Không Trộn Lẫn)
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">
              2 Lĩnh Vực Chuyên Môn Trọng Điểm
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1E1611] hover:text-[#9E6B47] transition-colors"
          >
            <span>Xem tất cả danh mục dự án</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Separate Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Minh Huy Furniture */}
          <div className="editorial-card p-7 sm:p-8 bg-white space-y-5 flex flex-col justify-between hover:border-[#9E6B47] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center">
                  <Sofa className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[11px] font-mono font-semibold text-[#7D5133]">
                  Hạng Mục 1: Xưởng B2B
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                  Minh Huy Furniture
                </h3>
                <p className="text-xs font-mono text-[#7D5133] mt-0.5">
                  TikTok Marketing Xưởng Sản Xuất Kim Khí & Sofa B2B
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                Tập trung vào thước phim chân thực: máy uốn sắt CNC, cắt laser, kiểm tra tải trọng 300kg, 
                và đóng gói xuất xưởng số lượng lớn đi dự án chuỗi F&B toàn quốc.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#ECE4D8] text-center">
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#1E1611]">20+</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Video Xưởng</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#1E1611]">115K</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Views Thử Tải</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#9E6B47]">4.8x</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Lead Khách Sỉ</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#ECE4D8]">
              <a
                href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#7D5133] hover:text-[#1E1611] flex items-center gap-1"
              >
                <FolderDown className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>Google Drive Folder</span>
              </a>

              <Link
                href="/projects/minh-huy-furniture"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E1611] text-white text-xs font-mono font-medium hover:bg-[#9E6B47] transition-all"
              >
                <span>Xem Trang Riêng</span>
                <ArrowRight className="w-3 h-3 text-[#DECFC0]" />
              </Link>
            </div>
          </div>

          {/* Card 2: La Ca Mot Chut */}
          <div className="editorial-card p-7 sm:p-8 bg-white space-y-5 flex flex-col justify-between hover:border-[#9E6B47] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[11px] font-mono font-semibold text-[#7D5133]">
                  Hạng Mục 2: F&B Lifestyle
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#1E1611] group-hover:text-[#9E6B47] transition-colors">
                  Kênh La Cà Một Chút
                </h3>
                <p className="text-xs font-mono text-[#7D5133] mt-0.5">
                  Định Hình Kênh Review Cafe & Ẩm Thực Tone Be Thẩm Mỹ
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                Đồng bộ bảng màu Be ấm áp, góc quay ánh sáng tự nhiên dịu nhẹ, voiceover tâm sự và âm thanh ASMR 
                kích thích vị giác, thu hút cộng đồng các bạn nữ yêu cái đẹp.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#ECE4D8] text-center">
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#1E1611]">58K+</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Followers</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#1E1611]">3.9M+</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Lượt Thích</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF7F2]">
                  <div className="text-base font-serif font-bold text-[#9E6B47]">5.3M+</div>
                  <div className="text-[10px] font-mono text-[#5C4D43]">Views / Tháng</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#ECE4D8]">
              <a
                href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#7D5133] hover:text-[#1E1611] flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>Kênh TikTok @la.camotchut</span>
              </a>

              <Link
                href="/projects/la-ca-mot-chut"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E1611] text-white text-xs font-mono font-medium hover:bg-[#9E6B47] transition-all"
              >
                <span>Xem Trang Riêng</span>
                <ArrowRight className="w-3 h-3 text-[#DECFC0]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Working Experience Quick Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#ECE4D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] text-[#9E6B47] flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#1E1611]">
                Xem Hồ Sơ Năng Lực & Quá Trình Đào Tạo
              </div>
              <div className="text-xs text-[#5C4D43]">
                PR Đại Học Văn Lang (2022-2026), ColorMe Design, Suzuki Hồng Phương, Vận Tải Phát Thủy, Hải Phi.
              </div>
            </div>
          </div>

          <Link
            href="/working-experience"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-xs font-mono font-bold text-[#1E1611] hover:bg-[#ECE4D8] transition-all flex-shrink-0"
          >
            <span>Xem Trang Working Experience</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#9E6B47]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
