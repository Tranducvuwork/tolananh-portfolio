import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Download, Phone, Mail, Coffee, 
  Briefcase, Wrench, CheckCircle2, Star, Sparkles, ExternalLink,
  Zap, Compass, Bike, Sofa, Award
} from 'lucide-react';
import { profileData, tiktokChannels } from '@/app/data';

export default function Home() {
  const homeTabs = [
    {
      kicker: 'Hạng Mục 01',
      title: 'Các Kênh TikTok & Dự Án',
      desc: 'Toạ Độ Gen Z, La Cà Một Chút, Datbike Hồng Phương & IMC',
      href: '/work',
    },
    {
      kicker: 'Hạng Mục 02',
      title: 'Kinh nghiệm & Học vấn',
      desc: 'PR Văn Lang, Chứng chỉ QCC (Xuất sắc) & ColorMe, Búp Sky & thực tế',
      href: '/working-experience',
    },
    {
      kicker: 'Hạng Mục 03',
      title: 'Kỹ năng & Tools',
      desc: 'CapCut, Photoshop, Canva, Meta Suite, TikTok Studio',
      href: '/skills',
    },
    {
      kicker: 'Hạng Mục 04',
      title: 'Liên hệ & Hợp tác',
      desc: 'Hotline 0942 077 335, Email & thông tin kết nối',
      href: '/contact',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#14110F]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="eyebrow !text-xs !tracking-wider">
                  Tô Lan Anh · PR Đại Học Văn Lang
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] tracking-tight leading-[1.15]">
                  Sáng tạo nội dung short-form &amp; <br />
                  Kế hoạch truyền thông đa kênh
                </h1>
                <p className="page-lead">
                  Xin chào, mình là <strong className="text-[#14110F] font-bold">Tô Lan Anh</strong>. 
                  Mình chuyên lên ý tưởng kịch bản, quay dựng short-form video và phát triển các kênh TikTok đa dạng chủ đề: 
                  từ trào lưu giới trẻ <strong className="text-[#8C5A3C] font-semibold">@toadogenz</strong>, 
                  phong cách cafe &amp; ẩm thực tone Be ấm áp <strong className="text-[#8C5A3C] font-semibold">@la.camotchut</strong>, 
                  nhà hàng Rooftop Q.1 <strong className="text-[#8C5A3C] font-semibold">@bupskycuisine</strong> (132.9K views), 
                  đến xe máy điện thông minh <strong className="text-[#8C5A3C] font-semibold">@datbikehongphuong</strong> và lập kế hoạch truyền thông tích hợp (IMC).
                </p>
              </div>

              {/* Core capabilities tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Bắt Trend TikTok &amp; Kịch bản Gen Z
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Tone Be &amp; Thẩm mỹ Cafe F&amp;B
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Truyền Thông Xe Điện Dat Bike
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Hoạch Định Kế Hoạch IMC
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/work" className="btn btn-primary">
                  <span>Khám Phá Các Kênh &amp; Dự Án</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/working-experience" className="btn btn-secondary">
                  <span>Kinh Nghiệm &amp; Học Vấn</span>
                </Link>
                <a
                  href={profileData.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary !px-3.5"
                >
                  <Download className="w-4 h-4 text-[#8C5A3C]" />
                  <span>CV PDF</span>
                </a>
                <a
                  href="/Portfolio_ToLanAnh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary !px-3.5"
                >
                  <Download className="w-4 h-4 text-[#8C5A3C]" />
                  <span>Portfolio PDF</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-[rgba(20,17,15,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">3+</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Kênh TikTok chủ lực</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">100K+</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Lượt tiếp cận người xem</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">100%</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Tự lên kịch bản &amp; dựng</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">Văn Lang</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Cử nhân PR chuyên nghiệp</div>
                </div>
              </div>

            </div>

            {/* Right Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[rgba(20,17,15,0.1)] bg-white shadow-[0_12px_40px_rgba(20,17,15,0.08)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFECE4]">
                  <Image
                    src={profileData.portrait}
                    alt={profileData.name}
                    fill
                    priority
                    className="object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md text-white flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold tracking-tight">
                        {profileData.name}
                      </div>
                      <div className="text-[11px] text-[#D5CEBE]">
                        Creative Planner · Social Media
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 font-medium">
                      PR Văn Lang
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white flex items-center justify-between border-t border-[rgba(20,17,15,0.06)]">
                  <span className="text-xs text-[#635952]">
                    Khu vực làm việc: TP. Hồ Chí Minh
                  </span>
                  <a
                    href={`tel:${profileData.phone.replace(/[^0-9]/g, '')}`}
                    className="text-xs font-bold text-[#8C5A3C] hover:underline"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Hub: Home Tabs */}
          <div className="home-tabs">
            {homeTabs.map((tab, idx) => (
              <Link key={idx} href={tab.href} className="home-tab group">
                <span>{tab.kicker}</span>
                <div className="text-[#14110F] group-hover:text-[#8C5A3C] transition-colors font-bold">
                  {tab.title}
                </div>
                <div className="text-xs text-[#635952] font-normal leading-relaxed line-clamp-2">
                  {tab.desc}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Featured TikTok Channels Showcase (Replaced Minh Huy spotlight!) */}
      <section className="py-20 bg-white border-y border-[rgba(20,17,15,0.08)]">
        <div className="container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow">CÁC KÊNH TIKTOK CHỦ LỰC</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight mt-1">
                Phát triển nội dung &amp; Định hình phong cách
              </h2>
            </div>
            <Link href="/work" className="btn btn-secondary btn-sm">
              <span>Xem Toàn Bộ Dự Án &amp; Video</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Channel 1: Toạ Độ Gen Z */}
            <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Xu Hướng Gen Z</span>
                  </div>
                  <span className="text-xs font-semibold text-[#8C5A3C]">@toadogenz</span>
                </div>

                <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                  Toạ Độ Gen Z (@toadogenz)
                </h3>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Bản đồ ăn – chơi – chill của Gen Z. Trực tiếp sản xuất video đại nhạc hội The World of Heineken (Dương Domic 66.6K, HIEUTHUHAI 40.5K, Charlie Puth 14K) và review ẩm thực.
                </p>

                <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Dương Domic live Heineken (66.6K views)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>HIEUTHUHAI "Không thể say" (40.5K views)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                <a
                  href="https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                >
                  <span>Mở TikTok</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/work"
                  className="btn btn-primary btn-sm !px-3"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Channel 2: La Cà Một Chút */}
            <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>Cafe &amp; F&amp;B</span>
                  </div>
                  <span className="text-xs font-semibold text-[#8C5A3C]">@la.camotchut</span>
                </div>

                <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                  La Cà Một Chút (@la.camotchut)
                </h3>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Review các quán cafe đẹp, tiệm bánh và trải nghiệm ẩm thực thư thái giữa lòng phố thị (Gem Cafe 72.9K, Go Gelato 30.1K, Yori Matcha 21.1K).
                </p>

                <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Gem Cafe sang trọng (72.9K views)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Go Gelato giáng sinh (30.1K views)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                <a
                  href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                >
                  <span>Mở TikTok</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/work"
                  className="btn btn-primary btn-sm !px-3"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Channel 3: Datbike Hồng Phương */}
            <div className="p-7 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6 hover:shadow-[0_10px_30px_rgba(20,17,15,0.05)] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold">
                    <Bike className="w-3.5 h-3.5" />
                    <span>Xe Điện Dat Bike</span>
                  </div>
                  <span className="text-xs font-semibold text-[#8C5A3C]">@datbikehongphuong</span>
                </div>

                <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                  Datbike Hồng Phương — Xe Máy Điện Thông Minh
                </h3>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Truyền thông giải pháp di chuyển xanh của dòng xe điện công nghệ Dat Bike tại Hồng Phương: tính năng bứt tốc, sạc nhanh và phong cách sống hiện đại.
                </p>

                <div className="space-y-2 pt-2 border-t border-[rgba(20,17,15,0.06)] text-xs text-[#2D2723]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Trải nghiệm bứt tốc &amp; công nghệ pin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Điều hướng đăng ký lái thử trực tiếp</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                <a
                  href="https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9BjNL1MnE9q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#14110F] hover:text-[#8C5A3C] inline-flex items-center gap-1"
                >
                  <span>Mở TikTok</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/work?tab=datbike"
                  className="btn btn-primary btn-sm !px-3"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

          {/* Secondary projects note: Búp Sky, IMC & 14 Slides */}
          <div className="mt-8 p-5 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                Các dự án &amp; chứng chỉ chuyên môn
              </span>
              <p className="text-xs sm:text-sm text-[#635952]">
                Nhà hàng Rooftop <strong>Búp Sky Cuisine (@bupskycuisine - 133.1K views)</strong>, Chứng chỉ <strong>QCC Mastery Hub (Rank Excellent) &amp; ColorME Photoshop</strong>, Winner Pitching <strong>Tivi HXY Hải Phi</strong> và <strong>Bộ 14 Slide HD</strong> nguyên bản.
              </p>
            </div>
            <Link href="/work" className="btn btn-secondary btn-sm flex-shrink-0">
              <span>Xem Thêm Dự Án (Work)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8C5A3C]" />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <p className="eyebrow">LIÊN HỆ &amp; HỢP TÁC</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
            Bạn đang cần lên kế hoạch truyền thông <br />
            hoặc sáng tạo nội dung short-form TikTok?
          </h2>
          <p className="text-base text-[#635952]">
            Hãy liên hệ trực tiếp với mình qua điện thoại hoặc email để cùng trao đổi về dự án của bạn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href="tel:0942077335" className="btn btn-primary">
              <Phone className="w-4 h-4" />
              <span>Gọi 0942 077 335</span>
            </a>
            <a href="mailto:lananhto2402@gmail.com" className="btn btn-secondary">
              <Mail className="w-4 h-4" />
              <span>lananhto2402@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
