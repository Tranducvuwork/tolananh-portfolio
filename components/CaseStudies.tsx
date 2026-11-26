'use client';

import { useState } from 'react';
import { 
  FolderDown, ExternalLink, Sparkles, TrendingUp, CheckCircle, 
  Layers, Hammer, ShieldCheck, Truck, Coffee, Cake, Users, Lightbulb, ChevronRight
} from 'lucide-react';
import { caseStudies, CaseStudy } from '@/app/data';

const iconMap: Record<string, any> = {
  Hammer,
  Layers,
  ShieldCheck,
  Truck,
  Coffee,
  Cake,
  Sparkles,
  Users,
  Lightbulb,
  TrendingUp,
};

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section id="case-studies" className="py-24 bg-[#FAF6F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#84674C] text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Chi Tiết Dự Án & Kế Hoạch Truyền Thông</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#34261C]">
            Case Studies Thực Chiến <br />
            <span className="italic text-[#84674C] font-normal">& Định Hướng Sáng Tạo</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6E5A4B] leading-relaxed">
            Mỗi dự án là một câu chuyện từ nghiên cứu insight, xây dựng thông điệp, sản xuất nội dung đến đo lường chuyển đổi thực tế.
          </p>
        </div>

        {/* Project Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {caseStudies.map((cs) => {
            const isActive = selectedCase.id === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#84674C] text-white shadow-md shadow-[#84674C]/25 scale-[1.02]'
                    : 'bg-white text-[#6E5A4B] border border-[#E8DEC8] hover:bg-[#F9F5EC]'
                }`}
              >
                <span>{cs.id === 'minh-huy-furniture' ? '🛋️' : cs.id === 'la-ca-mot-chut' ? '☕' : cs.id === 'xe-khach-phat' ? '🚌' : '🏆'}</span>
                <span>{cs.client}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="bg-white rounded-3xl border border-[#E5D6C3] p-6 sm:p-10 shadow-card space-y-10 relative overflow-hidden">
          
          {/* Top Info Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0E6D8]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F2E8DC] text-[#84674C] text-xs font-bold uppercase tracking-wide">
                  {selectedCase.badge}
                </span>
                <span className="text-xs text-[#8C7665] font-medium">
                  {selectedCase.timeline} • {selectedCase.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#34261C]">
                {selectedCase.title}
              </h3>
              <p className="text-sm text-[#7A6453] font-medium">
                {selectedCase.subtitle}
              </p>
            </div>

            {/* Role Chip */}
            <div className="flex-shrink-0 bg-[#FAF6F0] border border-[#E5D6C3] px-4 py-2 rounded-2xl">
              <div className="text-[10px] text-[#8C7665] uppercase font-bold tracking-wider">Vai trò đảm nhiệm:</div>
              <div className="text-xs font-bold text-[#34261C] mt-0.5">{selectedCase.role}</div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedCase.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#FBF7F0] border border-[#EFE4D6] space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#84674C]">
                  {m.value}
                </div>
                <div className="text-xs text-[#6E5A4B] font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DEC8] space-y-3">
              <h4 className="text-base font-serif font-bold text-[#34261C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>Bối cảnh & Thách thức</span>
              </h4>
              <p className="text-sm text-[#5E4D40] leading-relaxed">
                {selectedCase.overview}
              </p>
              <div className="p-3 rounded-xl bg-white/80 border border-[#E8DEC8] text-xs text-[#7A6453]">
                <strong className="text-[#34261C]">Rào cản: </strong>
                {selectedCase.challenge}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DEC8] space-y-3">
              <h4 className="text-base font-serif font-bold text-[#34261C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Giải pháp & Định hướng sáng tạo</span>
              </h4>
              <p className="text-sm text-[#5E4D40] leading-relaxed">
                {selectedCase.solution}
              </p>
            </div>
          </div>

          {/* Content Pillars */}
          {selectedCase.contentPillars && selectedCase.contentPillars.length > 0 && (
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-wider text-[#84674C] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Các Tuyến Nội Dung Trọng Tâm (Content Pillars)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedCase.contentPillars.map((pillar, i) => {
                  const Icon = iconMap[pillar.icon] || Sparkles;
                  return (
                    <div key={i} className="p-5 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#84674C] transition-all group space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F2E8DC] text-[#84674C] flex items-center justify-center group-hover:bg-[#84674C] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-[#34261C] group-hover:text-[#84674C] transition-colors">
                        {pillar.title}
                      </div>
                      <p className="text-xs text-[#6E5A4B] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deliverables & Actions */}
          <div className="p-6 rounded-2xl bg-[#FBF7EE] border border-[#E5D6C3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="text-xs uppercase font-bold tracking-wider text-[#84674C]">
                Sản phẩm bàn giao (Deliverables):
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCase.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#463526]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#84674C] flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              {selectedCase.driveUrl && (
                <a
                  href={selectedCase.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#84674C] text-white text-xs font-bold hover:bg-[#644D38] shadow-sm transition-all text-center"
                >
                  <FolderDown className="w-4 h-4" />
                  <span>Mở Google Drive Xưởng Minh Huy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {selectedCase.externalUrl && (
                <a
                  href={selectedCase.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#84674C] text-white text-xs font-bold hover:bg-[#644D38] shadow-sm transition-all text-center"
                >
                  <span>Xem Kênh TikTok @la.camotchut</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
