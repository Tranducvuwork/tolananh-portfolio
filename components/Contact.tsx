'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, Send, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4EFE6] relative overflow-hidden border-t border-[#ECE4D8]">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#EAE1D5]/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#FAF7F2]/80 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Editorial Contact Card */}
        <div className="editorial-card p-8 sm:p-12 lg:p-14 bg-white shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Vision (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
                  Let&apos;s Create Together
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1611] leading-[1.15] tracking-tight">
                Sẵn Sàng Đồng Hành <br />
                <span className="font-serif italic text-[#9E6B47] font-normal">
                  Cùng Chiến Dịch Của Bạn.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed">
                Bạn đang tìm kiếm một <strong className="text-[#1E1611]">Creative Planner</strong> nhiệt huyết, 
                có năng lực lên ý tưởng kịch bản và sản xuất short-form video TikTok thực chiến với phong cách ấm áp, thẩm mỹ? 
                Hãy kết nối cùng mình ngay nhé!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${profileData.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1611] text-white text-xs sm:text-sm font-medium hover:bg-[#9E6B47] shadow-luxury transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 text-[#C8B49F]" />
                  <span>Gọi ngay: {profileData.phone}</span>
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#1E1611] text-xs sm:text-sm font-medium hover:bg-[#ECE4D8] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#9E6B47]" />
                  <span>Gửi Email</span>
                </a>

                <a
                  href={profileData.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-medium text-[#7D5133] hover:text-[#1E1611] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#9E6B47]" />
                  <span>Tải CV PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Details Card (5 cols) */}
            <div className="md:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#ECE4D8] space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7D5133] pb-2 border-b border-[#ECE4D8]">
                Thông Tin Liên Hệ Trực Tiếp:
              </div>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#DECFC0] flex items-center justify-center text-[#9E6B47] flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#7D5133]">Điện thoại / Zalo</div>
                      <a href={`tel:${profileData.phone}`} className="text-sm font-serif font-bold text-[#1E1611] hover:text-[#9E6B47]">
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profileData.phone, 'phone')}
                    className="p-1.5 rounded-lg text-[#7D5133] hover:text-[#1E1611] hover:bg-white transition-colors"
                    aria-label="Copy số điện thoại"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#DECFC0] flex items-center justify-center text-[#9E6B47] flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#7D5133]">Hòm thư Email</div>
                      <a href={`mailto:${profileData.email}`} className="text-sm font-serif font-bold text-[#1E1611] hover:text-[#9E6B47] break-all">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profileData.email, 'email')}
                    className="p-1.5 rounded-lg text-[#7D5133] hover:text-[#1E1611] hover:bg-white transition-colors"
                    aria-label="Copy email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DECFC0] flex items-center justify-center text-[#9E6B47] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#7D5133]">Địa bàn hoạt động</div>
                    <div className="text-xs font-medium text-[#1E1611] mt-0.5">
                      {profileData.address}
                    </div>
                  </div>
                </div>

              </div>

              {/* Status footer pill */}
              <div className="pt-3 border-t border-[#ECE4D8] flex items-center justify-between text-[11px] font-mono text-[#7D5133]">
                <span>Phản hồi trong 2 giờ</span>
                <span className="text-emerald-700 font-semibold">● Online</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
