import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Download, Phone, Mail, Sofa, Coffee, 
  Briefcase, Wrench, CheckCircle2, Star, Sparkles, ExternalLink 
} from 'lucide-react';
import { profileData, featuredVideos } from '@/app/data';

const furniturePreview = featuredVideos.filter(v => v.category === 'furniture').slice(0, 2);
const fnbPreview = featuredVideos.filter(v => v.category === 'fnb').slice(0, 2);

export default function Home() {
  const homeTabs = [
    {
      kicker: 'Hạng Mục 01',
      title: 'Dự án (Work)',
      desc: 'Minh Huy Furniture, La Cà Một Chút, IMC & 13 Slide HD',
      href: '/work',
    },
    {
      kicker: 'Hạng Mục 02',
      title: 'Kinh nghiệm & Học vấn',
      desc: 'PR Đại học Văn Lang, ColorMe & các dự án thực tế',
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
                  Mình chuyên xây dựng kịch bản và sản xuất video TikTok xưởng nội thất 
                  <strong className="text-[#8C5A3C] font-semibold"> Minh Huy Furniture</strong>, 
                  định hình phong cách kênh F&amp;B ấm áp nữ tính 
                  <strong className="text-[#8C5A3C] font-semibold"> @la.camotchut</strong> và lập kế hoạch truyền thông tích hợp.
                </p>
              </div>

              {/* Core capabilities tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Kịch bản &amp; Hậu kỳ CapCut Pro
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Tone Be &amp; Thẩm mỹ F&amp;B Cafe
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-medium text-[#2D2723]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5A3C]" />
                  Tư duy Pitching &amp; Đồ án IMC
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/work" className="btn btn-primary">
                  <span>Xem Các Hạng Mục Dự Án</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/working-experience" className="btn btn-secondary">
                  <span>Kinh Nghiệm &amp; Học Vấn</span>
                </Link>
                <a
                  href={profileData.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary !px-4"
                >
                  <Download className="w-4 h-4 text-[#8C5A3C]" />
                  <span>CV PDF</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-[rgba(20,17,15,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">20+</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Video xưởng triệu view</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight">4+</div>
                  <div className="text-xs text-[#635952] font-medium mt-0.5">Năm học tập &amp; làm việc</div>
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
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFECE4]">
                  <Image
                    src={profileData.portrait}
                    alt={profileData.name}
                    fill
                    priority
                    className="object-cover object-top"
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

          {/* Navigation Hub: Home Tabs linking to separate subpages */}
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

      {/* Featured Projects Highlight (Isolated Categories Preview) */}
      <section className="py-20 bg-white border-y border-[rgba(20,17,15,0.08)]">
        <div className="container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow">HẠNG MỤC DỰ ÁN NỔI BẬT</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14110F] tracking-tight mt-1">
                Hai phân mảng nội dung chính
              </h2>
            </div>
            <Link href="/work" className="btn btn-secondary btn-sm">
              <span>Xem Toàn Bộ Dự Án (Work)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Category 1: Minh Huy Furniture */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-semibold text-[#8C5A3C]">
                  <Sofa className="w-3.5 h-3.5" />
                  <span>Dự Án Nội Thất B2B</span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                  Minh Huy Furniture — TikTok Xưởng Sản Xuất
                </h3>
                <p className="text-sm text-[#635952] leading-relaxed">
                  20+ video short-form khai thác quy trình thợ mộc, kiểm tra chất lượng gỗ và tư vấn nội thất công trình. Tạo lòng tin thực tế và chuyển đổi đơn hàng trực tiếp qua TikTok.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#635952]">Tư liệu dự án:</div>
                  <div className="text-sm font-bold text-[#14110F]">Google Drive 20+ Video Gốc</div>
                </div>
                <Link
                  href="/work?tab=furniture"
                  className="btn btn-primary btn-sm !px-3"
                >
                  <span>Xem Chi Tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Category 2: La Cà Một Chút */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F8F6F1] border border-[rgba(20,17,15,0.08)] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(20,17,15,0.08)] text-xs font-semibold text-[#8C5A3C]">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Kênh TikTok F&amp;B</span>
                </div>
                <h3 className="text-xl font-bold text-[#14110F] tracking-tight">
                  La Cà Một Chút (@la.camotchut) — Cafe &amp; Ẩm Thực
                </h3>
                <p className="text-sm text-[#635952] leading-relaxed">
                  Định hình tone màu Be nữ tính, ấm áp và nhẹ nhàng. Review trải nghiệm quán cafe, món ngon đường phố và lifestyle với phong cách tự nhiên, gần gũi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(20,17,15,0.06)] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#635952]">Kênh chính thức:</div>
                  <div className="text-sm font-bold text-[#14110F]">tiktok.com/@la.camotchut</div>
                </div>
                <Link
                  href="/work?tab=fnb"
                  className="btn btn-primary btn-sm !px-3"
                >
                  <span>Xem Chi Tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <p className="eyebrow">LIÊN HỆ &amp; HỢP TÁC</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight">
            Bạn đang cần lên kế hoạch truyền thông <br />
            hoặc sản xuất video ngắn TikTok?
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
