'use client';

import { Phone, Mail, MapPin, Download, Send, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { profileData } from '@/app/data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F2E8DC] relative overflow-hidden border-t border-[#E5D6C3]">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#E8DCCF]/80 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#FAF3EA]/90 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Contact Card */}
        <div className="bg-white rounded-3xl border border-[#D8C7B2] shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Heading & Message */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#84674C] text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let&apos;s Work Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#34261C] leading-tight">
                Sẵn Sàng Đồng Hành <br />
                <span className="italic text-[#84674C] font-normal">Cùng Chiến Dịch Của Bạn.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#6E5A4B] leading-relaxed">
                Bạn đang tìm kiếm một <strong>Creative Planner</strong> nhiệt huyết, có khả năng lên ý tưởng 
                và sản xuất short-form video TikTok thực chiến với phong cách chỉn chu, thẩm mỹ? 
                Hãy liên hệ ngay với mình nhé!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${profileData.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#84674C] text-white text-xs sm:text-sm font-semibold hover:bg-[#644D38] shadow-md shadow-[#84674C]/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi ngay: {profileData.phone}</span>
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF6F0] border border-[#D5BEA4] text-[#644D38] text-xs sm:text-sm font-semibold hover:bg-[#F2E8DC] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Gửi Email</span>
                </a>

                <a
                  href={profileData.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#D5BEA4] text-[#644D38] text-xs sm:text-sm font-semibold hover:bg-[#FAF6F0] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Xem & Tải CV</span>
                </a>
              </div>
            </div>

            {/* Right side: Contact Details Card */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DEC8] space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#84674C]">
                Thông Tin Liên Hệ Trực Tiếp:
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5D6C3] flex items-center justify-center text-[#84674C] flex-shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8C7665]">Điện thoại / Zalo</div>
                    <a href={`tel:${profileData.phone}`} className="text-sm font-bold text-[#34261C] hover:text-[#84674C]">
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5D6C3] flex items-center justify-center text-[#84674C] flex-shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8C7665]">Địa chỉ Email</div>
                    <a href={`mailto:${profileData.email}`} className="text-sm font-bold text-[#34261C] hover:text-[#84674C] break-all">
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E5D6C3] flex items-center justify-center text-[#84674C] flex-shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8C7665]">Địa bàn hoạt động</div>
                    <div className="text-sm font-bold text-[#34261C]">
                      {profileData.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Badge */}
              <div className="pt-3 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#7A6453]">
                <span>TikTok:</span>
                <a
                  href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#84674C] hover:underline"
                >
                  @la.camotchut
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
