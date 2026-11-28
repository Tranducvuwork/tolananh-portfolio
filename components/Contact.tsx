'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, Send, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/app/data';
import { useSiteData } from '@/components/SiteDataProvider';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const { persisted } = useSiteData();

  const profileCfg = persisted?.siteData?.profile || persisted?.profile;
  const phone = profileCfg?.phone || profileData.phone;
  const email = profileCfg?.email || profileData.email;
  const address = profileCfg?.address || profileData.address;

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
            <div className="md:col-span-7 space-y-5">
              <p className="eyebrow">
                LIÊN HỆ &amp; HỢP TÁC
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] leading-[1.15] tracking-tight">
                Sẵn sàng đồng hành cùng <br />
                dự án truyền thông của bạn
              </h2>

              <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
                Bạn đang tìm kiếm một <strong className="text-[#14110F]">Creative Planner</strong> bài bản, 
                có năng lực lên ý tưởng kịch bản và sản xuất short-form video TikTok thực chiến với phong cách ấm áp, tinh tế? 
                Hãy kết nối cùng mình ngay hôm nay.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="btn btn-primary"
                >
                  <Phone className="w-4 h-4 text-[#D5CEBE]" />
                  <span>Gọi: {phone}</span>
                </a>

                <a
                  href={`mailto:${email}`}
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
                      <a href={`tel:${phone}`} className="text-sm font-sans font-bold text-[#1E1611] hover:text-[#9E6B47]">
                        {phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phone, 'phone')}
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
                      <a href={`mailto:${email}`} className="text-sm font-sans font-bold text-[#1E1611] hover:text-[#9E6B47] break-all">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(email, 'email')}
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
                      {address}
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
