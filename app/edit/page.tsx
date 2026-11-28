'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, ExternalLink, Save, RotateCcw, Eye, EyeOff, 
  Move, ChevronUp, ChevronDown, Upload, CheckCircle2, Sparkles,
  Coffee, Compass, Bike, Award, Layers, GraduationCap, Briefcase,
  Download, FileText, Plus, Trash2, Edit3, X, Play, Palette, Layout, Menu, Settings, PlusCircle
} from 'lucide-react';
import { profileData, featuredVideos, caseStudies, certificates, tiktokChannels } from '@/app/data';
import CustomBlockRenderer, { CustomBlockContent } from '@/components/CustomBlockRenderer';
import AddBlockModal from '@/components/AddBlockModal';
import HeaderLayoutEditor, { HeaderConfigState } from '@/components/HeaderLayoutEditor';
import FooterLayoutEditor, { FooterConfigState } from '@/components/FooterLayoutEditor';

export interface BlockState {
  id: string;
  title: string;
  visible: boolean;
  order: number;
  bgColor?: string;
  isCustom?: boolean;
  customContent?: CustomBlockContent;
}

interface MoveOffset {
  x: number;
  y: number;
}

interface ResizeState {
  w?: number;
  h?: number;
}

export default function EditLayoutPage() {
  const [activePage, setActivePage] = useState<'home' | 'work' | 'header' | 'footer' | 'experience' | 'skills' | 'form'>('home');
  const [message, setMessage] = useState<string | null>(null);

  // WordPress Style Block Modal
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [targetPageForBlock, setTargetPageForBlock] = useState<'home' | 'work' | 'experience'>('home');

  // Header Config State
  const [headerConfig, setHeaderConfig] = useState<HeaderConfigState>({
    style: 'standard',
    brandName: profileData.name,
    avatarSrc: profileData.avatar,
    navLinks: [
      { id: 'nav-1', name: 'Giới thiệu', href: '/', visible: true },
      { id: 'nav-2', name: 'Dự án (Work)', href: '/work', visible: true },
      { id: 'nav-3', name: 'Kinh nghiệm', href: '/working-experience', visible: true },
      { id: 'nav-4', name: 'Kỹ năng & Tools', href: '/skills', visible: true },
      { id: 'nav-5', name: 'Liên hệ', href: '/contact', visible: true },
    ],
    showPhone: true,
    phone: profileData.phone,
    showCv: true,
    cvPdf: profileData.cvPdf,
  });

  // Footer Config State
  const [footerConfig, setFooterConfig] = useState<FooterConfigState>({
    brandName: profileData.name,
    slogan: 'Creative Planner & Social Media Specialist. Sinh viên Quan Hệ Công Chúng (PR) Đại Học Văn Lang (2022 – 2026).',
    phone: profileData.phone,
    email: profileData.email,
    copyright: `© ${new Date().getFullYear()} Tô Lan Anh Portfolio · Handcrafted with Be Vietnam Pro.`,
    socialLinks: [
      { id: 'soc-1', name: 'Toạ Độ Gen Z (@toadogenz)', href: '/work?tab=genz' },
      { id: 'soc-2', name: 'La Cà Một Chút (@la.camotchut)', href: '/work?tab=fnb' },
      { id: 'soc-3', name: 'Datbike Hồng Phương', href: '/work?tab=datbike' },
    ],
  });

  // =========================================================================
  // GLOBAL EDITABLE SITE DATA STATE
  // =========================================================================
  const [siteData, setSiteData] = useState({
    profile: {
      name: profileData.name,
      title: profileData.title,
      subtitle: profileData.subtitle,
      birthday: profileData.birthday,
      phone: profileData.phone,
      email: profileData.email,
      address: profileData.address,
      intro: profileData.intro,
      portraitSrc: profileData.portrait,
      studentPhotoSrc: profileData.studentPhoto || '/images/lananh_vanlang_aodai.jpg',
      avatarSrc: profileData.avatar,
    },
    home: {
      eyebrow: 'Tô Lan Anh · PR Đại Học Văn Lang',
      heading: 'Sáng tạo nội dung short-form &\nKế hoạch truyền thông đa kênh',
      lead: 'Xin chào, mình là Tô Lan Anh. Mình chuyên lên ý tưởng kịch bản, quay dựng short-form video và phát triển các kênh TikTok đa dạng chủ đề: từ trào lưu giới trẻ @toadogenz, phong cách cafe & ẩm thực @la.camotchut, nhà hàng Rooftop Q.1 @bupskycuisine (133.1K views), đến xe máy điện thông minh @datbikehongphuong và lập kế hoạch truyền thông tích hợp (IMC).',
      stat1Val: '3+',
      stat1Label: 'Kênh TikTok chủ lực',
      stat2Val: '100K+',
      stat2Label: 'Lượt tiếp cận người xem',
      stat3Val: '100%',
      stat3Label: 'Tự lên kịch bản & dựng',
      stat4Val: 'Văn Lang',
      stat4Label: 'Cử nhân PR chuyên nghiệp',
      ctaHeading: 'Bạn đang cần lên kế hoạch truyền thông hoặc sản xuất video TikTok?',
      ctaSub: 'Kết nối trực tiếp cùng Tô Lan Anh qua Hotline hoặc gửi yêu cầu dự án.'
    },
    work: {
      bannerEyebrow: 'HẠNG MỤC DỰ ÁN & CÁC KÊNH TIKTOK',
      bannerTitle: 'Dự Án Đã Thực Hiện',
      bannerLead: 'Chọn danh mục bên dưới để lọc riêng từng kênh và dự án: Kênh Toạ Độ Gen Z (@toadogenz), Kênh La Cà Một Chút (@la.camotchut), Dự án Búp Sky Cuisine, Kênh Datbike Hồng Phương, Chiến dịch Brand Pitching & IMC hoặc Toàn bộ 14 Slide HD gốc.',
      toadogenz: {
        title: 'Toạ Độ Gen Z (@toadogenz)',
        subtitle: '1.051 Follower • 8.727 Thích • Bản đồ ăn – chơi – chill của Gen Z',
        imageSrc: '/images/channels/toadogenz_channel.jpg',
        url: 'https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc',
        videos: [
          {
            id: 'genz-1',
            title: 'Sự kiện The World of Heineken — Dương Domic live siêu đỉnh',
            views: '66.6K',
            hook: 'Dương Domic live siêu đỉnh tại đại nhạc hội The World of Heineken',
            desc: 'Khoảnh khắc bùng nổ của nam ca sĩ Dương Domic tại sự kiện âm nhạc Heineken với góc máy cận sân khấu, nhịp dựng giật beat sôi động bắt trọn năng lượng giới trẻ.'
          },
          {
            id: 'genz-2',
            title: 'Sự kiện The World of Heineken — HIEUTHUHAI biểu diễn "Không thể say"',
            views: '40.5K',
            hook: 'HIEUTHUHAI bùng nổ sân khấu The World of Heineken với bản hit Không thể say',
            desc: 'Bắt trọn khoảnh khắc visual và màn trình diễn cuốn hút của HIEUTHUHAI, cắt dựng nhịp nhàng theo giai điệu nhạc và tạo làn sóng tương tác lớn.'
          },
          {
            id: 'genz-3',
            title: 'Sự kiện The World of Heineken — Charlie Puth live',
            views: '14.0K',
            hook: 'Charlie Puth live tại The World of Heineken cực bùng nổ',
            desc: 'Thước phim ghi lại phần trình diễn của ngôi sao quốc tế Charlie Puth trên sân khấu The World of Heineken, âm thanh sống động và góc quay đẹp mắt.'
          },
          {
            id: 'genz-4',
            title: 'MARUKAME UDON — Ghé Marukame ăn gì?',
            views: '720',
            hook: 'Bản đồ ăn uống Gen Z: Ghé Marukame Udon chọn combo gì vừa ngon vừa no?',
            desc: 'Gợi ý món ngon chuẩn vị tại Marukame Udon, review cận cảnh các món mì udon nóng hổi cùng tempura giòn rụm.'
          },
          {
            id: 'genz-5',
            title: 'Tối nay ăn gì YAKIMONO?',
            views: '686',
            hook: 'Thèm thịt nướng buffet chuẩn Nhật thì ghé ngay Yakimono',
            desc: 'Trải nghiệm buffet nướng lẩu Yakimono với menu thịt bò chất lượng, không gian trẻ trung phù hợp tụ tập bạn bè.'
          },
          {
            id: 'genz-6',
            title: 'Recap sự kiện trải nghiệm xe điện Dat Bike tại Gigamall',
            views: 'Recap',
            hook: 'Không khí sôi động ngày hội trải nghiệm xe điện Dat Bike tại Gigamall',
            desc: 'Tổng hợp các hoạt động trải nghiệm thực tế xe điện Dat Bike, giao lưu khách hàng và không khí tưng bừng tại trung tâm thương mại Gigamall.'
          }
        ]
      },
      lacamotchut: {
        title: 'La Cà Một Chút (@la.camotchut)',
        subtitle: 'Review Cafe, F&B & Không gian trải nghiệm thư thái',
        imageSrc: '/images/channels/lacamotchut_channel.jpg',
        url: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM',
        videos: [
          {
            id: 'lcca-1',
            title: 'GEM CAFE — Chiêm ngưỡng không gian sang trọng',
            views: '72.9K',
            hook: 'Chiêm ngưỡng không gian cafe sang trọng đẳng cấp tại Gem Cafe',
            desc: 'Góc quay ánh sáng vàng ấm áp, đèn lồng nghệ thuật thả trần và phong cách kiến trúc tinh tế tại Gem Cafe, thước phim mang lại cảm giác thư thái và sang trọng.'
          },
          {
            id: 'lcca-2',
            title: 'A Little Christmas: GO GELATO — Lạc vào xứ giữa mùa Noel',
            views: '30.1K',
            hook: 'Không gian giáng sinh cổ tích ngập tràn tuyết trắng tại Go Gelato',
            desc: 'Review góc sống ảo mùa Noel tại Go Gelato với cây thông tuyết, gấu trắng bắc cực và những ly kem gelato mát lành ngọt ngào.'
          },
          {
            id: 'lcca-3',
            title: 'Con đường lá thu: YORI MATCHA & COFFEE Trường Sa',
            views: '21.1K',
            hook: 'Con đường lá thu lãng mạn ngắm bờ kè Trường Sa tại Yori Matcha & Coffee',
            desc: 'Thưởng thức matcha nguyên chất tại Yori Matcha & Coffee Trường Sa, không gian ban công ngắm lá vàng rơi rợp bóng bên bờ kênh thanh bình.'
          },
          {
            id: 'lcca-4',
            title: 'A Winter Night: GEM CENTER — Lạc vào rừng tuyết giữa Sài Gòn',
            views: '4.2K',
            hook: 'Rừng tuyết lung linh mùa đông huyền diệu ngay tại Gem Center',
            desc: 'Check-in trải nghiệm không gian sự kiện mùa đông ánh xanh băng giá lộng lẫy, âm nhạc giáng sinh du dương tại Gem Center.'
          },
          {
            id: 'lcca-5',
            title: 'BEAN THERE CAFE — Khu vườn cà phê xanh mướt trốn trong con hẻm',
            views: '13.8K',
            hook: 'Ngay tại Sài Gòn lại có 1 quán cà phê sân vườn xanh mướt chill đến vậy',
            desc: 'Khu vườn cà phê ngập tràn cây xanh và ánh sáng tự nhiên với cả không gian indoor & outdoor thoáng đãng tại Bean There Cafe, lý tưởng để đi chill, hẹn hò hay ngồi làm việc.'
          },
          {
            id: 'lcca-6',
            title: 'A LITTLE STUDIO — Tiệm cafe sách vibe thơ như câu chuyện cổ tích',
            views: '15.8K',
            hook: 'Tiệm cafe sách nhỏ xinh mang vibe thơ mộng như bước ra từ câu chuyện cổ tích',
            desc: 'Một góc nhỏ cho ngày muốn sống chậm tại A Little Studio — tiệm cafe sách ấm cúng với kệ gỗ ngập tràn sách, nắng ghé bên khung cửa cùng bánh croissant và trà trái cây mát lành.'
          }
        ]
      },
      bupsky: {
        title: 'Búp Sky Cuisine',
        subtitle: 'Nhà hàng Rooftop Tầng 10 • 65-69 Nguyễn Thái Bình, Q.1 (cách Chợ Bến Thành 4 phút)',
        imageSrc: '/images/channels/bupsky_channel.jpg',
        url: 'https://www.tiktok.com/@bupskycuisine',
        stat1Val: '133.1K',
        stat1Label: 'Tiệc sinh nhật riêng',
        stat2Val: '109K',
        stat2Label: 'Clip tiệc âm nhạc',
        stat3Val: '37.7K',
        stat3Label: 'Rooftop Bến Thành',
        bullet1: 'Video "Sinh nhật và các dịp đặc biệt, để Búp lo!": Đã ghim, đạt 133.1K lượt xem tự nhiên.',
        bullet2: 'Video "Khoảnh khắc sự kiện & tiệc âm nhạc": Đã ghim, đạt 109K lượt xem.',
        bullet3: 'Video "Nhà hàng Rooftop cách Chợ Bến Thành 4 phút đi bộ": Đã ghim, đạt 37.7K lượt xem.'
      },
      datbike: {
        title: 'Datbike Hồng Phương (@datbikehongphuong)',
        subtitle: 'Kênh truyền thông xe máy điện thông minh Dat Bike tại đại lý Hồng Phương',
        url: 'https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9BjNL1MnE9q',
        video1Title: 'Trải nghiệm bứt tốc 0-50km/h cùng Dat Bike: Xe điện thông minh của người trẻ',
        video1Views: '98.6K',
        video1Hook: 'Cảm giác vặn ga xe máy điện thông minh mà êm như lướt trên mây có gì khác xe xăng?',
        video2Title: 'Recap sự kiện trải nghiệm lái thử Dat Bike tại Gigamall',
        video2Views: '84.0K',
        video2Hook: 'Sức hút của xe máy điện thương hiệu Việt tại trung tâm thương mại Gigamall'
      }
    },
    experience: {
      bannerTitle: 'Kinh Nghiệm & Học Vấn',
      bannerSub: 'Hồ sơ năng lực thực tế của Tô Lan Anh qua các dự án F&B, Social Media Coordinator và học vấn PR Văn Lang.',
      jobs: [
        {
          id: 'job-1',
          role: 'Content Creator (Freelance) & F&B Media Planner',
          company: 'Búp Sky Cuisine (Nhà Hàng Rooftop Q.1)',
          period: '02/2026 – Hiện tại',
          focus: 'Xây dựng kênh TikTok @bupskycuisine, video viral tiệc riêng & sự kiện hoàng hôn',
          point1: 'Lên ý tưởng kịch bản, quay dựng video TikTok cho nhà hàng Rooftop cao cấp tại Tầng 10, 65-69 Nguyễn Thái Bình, Q.1.',
          point2: 'Sản xuất các video đạt lượt xem ấn tượng: Video "Không gian & tiệc riêng - Sinh nhật và các dịp đặc biệt" đạt 133.1K views; Video "Khoảnh khắc sự kiện & tiệc âm nhạc" đạt 109K views; Video "Khám phá địa điểm Rooftop Q.1" đạt 37.7K views.',
          point3: 'Xây dựng kênh TikTok đạt mốc 34K+ lượt thích và thúc đẩy chuyển đổi tin nhắn đặt bàn tiệc sinh nhật, sự kiện.'
        },
        {
          id: 'job-2',
          role: 'Social Media Coordinator',
          company: 'Phat-Thuy Company (DN Vận Tải Xe Khách Phát)',
          period: '2024 - 2025',
          focus: 'Vận hành fanpage, sáng tạo nội dung & bài đăng tuyển dụng',
          point1: 'Quản lý nội dung và trực tiếp vận hành kênh Facebook Fanpage của doanh nghiệp.',
          point2: 'Lên ý tưởng, thiết kế hình ảnh và viết copywriting cho toàn bộ tuyến bài đăng thường nhật và mùa cao điểm lễ/Tết.',
          point3: 'Phân tích hiệu quả bài đăng qua Meta Business Suite, tối ưu chiến lược nội dung giúp tăng tương tác và thu hút khách hàng đặt vé mới.'
        },
        {
          id: 'job-3',
          role: 'Social Media & Media Publications',
          company: 'Suzuki Hồng Phương',
          period: '2024 - 2025',
          focus: 'Quản lý & đăng bài trên nền tảng Facebook & Instagram',
          point1: 'Trực tiếp quản lý và đăng tải nội dung truyền thông cho đại lý ô tô / xe máy Suzuki Hồng Phương.',
          point2: 'Thiết kế ấn phẩm truyền thông, thông báo khuyến mãi, giới thiệu xe và dịch vụ bảo dưỡng.',
          point3: 'Tương tác và hỗ trợ khách hàng tiềm năng gửi tin nhắn quan tâm các dòng xe.'
        },
        {
          id: 'job-4',
          role: 'Promotional Brand Ambassador (PG)',
          company: 'Đại sứ quảng bá thương hiệu tại sự kiện',
          period: '2022 - 2025',
          focus: 'Truyền thông trực tiếp, tương tác khách hàng & chăm sóc điểm bán',
          point1: 'Đại diện giới thiệu và quảng bá hình ảnh sản phẩm/thương hiệu tại các sự kiện lớn, trung tâm thương mại và siêu thị (Sapporo, King Car, Farmers Union, ITO EN).',
          point2: 'Giao tiếp trực tiếp với khách hàng, lắng nghe nhu cầu và truyền tải thông điệp tính năng sản phẩm một cách khéo léo.',
          point3: 'Rèn luyện kỹ năng thuyết phục, giải quyết tình huống thực tế và thấu hiểu tâm lý người tiêu dùng đa thế hệ.'
        },
        {
          id: 'job-5',
          role: 'Pitching Project Leader (Winner)',
          company: 'TNHH Hải Phi Company (Dự án kiến tập)',
          period: '06/2025',
          focus: 'Chiến dịch truyền thông thương hiệu TV HXY & TikTok Channel',
          point1: 'Thắng Pitching dự án kiến tập với ý tưởng truyền thông sáng tạo cho dòng tivi HXY.',
          point2: 'Chủ trì nghiên cứu thị trường, phân tích insight khách hàng mục tiêu và xây dựng concept chiến dịch.',
          point3: 'Trực tiếp thiết kế slide thuyết trình và pitch ý tưởng thành công trước ban giám đốc doanh nghiệp.'
        }
      ],
      education: {
        school: 'Đại Học Văn Lang',
        major: 'Quan Hệ Công Chúng - Truyền Thông (PR)',
        period: '2022 - 2026',
        details: 'Tích lũy kiến thức nền tảng vững chắc về nghiên cứu công chúng, định vị thương hiệu, lập kế hoạch truyền thông tích hợp (IMC), quan hệ báo chí và kỹ năng thuyết trình pitching chuyên nghiệp.'
      },
      certificates: [
        {
          id: 'cert-1',
          name: 'Social Media Starter',
          org: 'QCC Mastery Hub',
          date: '28/10/2025',
          rank: 'EXCELLENT (Xuất Sắc)',
          desc: 'Chứng nhận hoàn thành xuất sắc khóa đào tạo Social Media Starter: nghiên cứu insight công chúng, xây dựng chiến lược truyền thông mạng xã hội và phát triển kênh short-form video.',
          imageSrc: '/images/certificates/cert_qcc_social_media.jpg'
        },
        {
          id: 'cert-2',
          name: 'Photoshop Digital Design',
          org: 'ColorME Skill Training School',
          date: '26/06/2025',
          rank: 'Digital Certificate',
          desc: 'Chứng chỉ kỹ thuật số khóa học Photoshop tại ColorME: thành thạo xử lý ấn phẩm đồ họa quảng cáo, bố cục thị giác, retouch hình ảnh và typography ứng dụng trên mạng xã hội.',
          imageSrc: '/images/certificates/cert_colorme_photoshop.jpg'
        }
      ]
    },
    skills: {
      creative: [
        'Creative Planning & Concept',
        'TikTok Scriptwriting & Storytelling',
        'Video Editing (CapCut Mobile & Desktop)',
        'Social Visual Branding (Canva & Photoshop)',
        'F&B Aesthetic Lifestyle Photography',
        'Market & Audience Insight Research'
      ],
      technical: [
        { name: 'CapCut', level: 'Thành thạo (Dựng video, hiệu ứng, âm thanh, trend)' },
        { name: 'Adobe Photoshop', level: 'Chứng chỉ ColorMe (Chỉnh sửa ảnh, layout, mockup)' },
        { name: 'Canva Pro', level: 'Thành thạo (Poster, feed design, template)' },
        { name: 'Facebook Page & Meta Suite', level: 'Vận hành, kiểm duyệt, theo dõi chỉ số' },
        { name: 'TikTok Studio & Analytics', level: 'Lên lịch, tối ưu SEO TikTok, đọc metric' },
        { name: 'Google Workspace', level: 'Docs, Sheets, Slides, Drive phối hợp' }
      ],
      soft: [
        'Làm việc nhóm & Giao tiếp tinh tế',
        'Thuyết trình & Pitching ý tưởng',
        'Tư duy giải quyết vấn đề linh hoạt',
        'Nhạy bén với xu hướng mạng xã hội (Trend Sensitivity)'
      ]
    }
  });

  // Home blocks order & visibility
  const [homeBlocks, setHomeBlocks] = useState<BlockState[]>([
    { id: 'hero', title: '1. Hero Banner & Chân Dung', visible: true, order: 0 },
    { id: 'nav-tabs', title: '2. Thanh Điều Hướng 4 Hạng Mục', visible: true, order: 1 },
    { id: 'channels', title: '3. Các Kênh TikTok Chủ Lực', visible: true, order: 2 },
    { id: 'secondary-note', title: '4. Khối Dự Án Búp Sky & 14 Slide HD', visible: true, order: 3 },
    { id: 'contact', title: '5. Khối Kêu Gọi Hợp Tác (CTA)', visible: true, order: 4 },
  ]);

  // Work blocks order & visibility
  const [workBlocks, setWorkBlocks] = useState<BlockState[]>([
    { id: 'work-header', title: '1. Banner Giới Thiệu Dự Án', visible: true, order: 0 },
    { id: 'work-genz', title: '2. Kênh Toạ Độ Gen Z (@toadogenz)', visible: true, order: 1 },
    { id: 'work-laca', title: '3. Kênh La Cà Một Chút (@la.camotchut)', visible: true, order: 2 },
    { id: 'work-bupsky', title: '4. Dự Án Búp Sky Cuisine Rooftop Q.1', visible: true, order: 3 },
    { id: 'work-datbike', title: '5. Kênh Datbike Hồng Phương', visible: true, order: 4 },
    { id: 'work-brand', title: '6. Chiến Dịch Brand Pitching & IMC', visible: true, order: 5 },
  ]);

  // Experience blocks order & visibility
  const [expBlocks, setExpBlocks] = useState<BlockState[]>([
    { id: 'exp-hero', title: '1. Banner Học Vấn & Profile Snapshot', visible: true, order: 0 },
    { id: 'exp-timeline', title: '2. Dòng Thời Gian Kinh Nghiệm Thực Tế', visible: true, order: 1 },
    { id: 'exp-education', title: '3. Nền Tảng Học Vấn & Ảnh Áo Dài Văn Lang', visible: true, order: 2 },
    { id: 'exp-certificates', title: '4. Chứng Chỉ Marketing & Kỹ Năng Số (QCC & ColorME)', visible: true, order: 3 },
    { id: 'exp-tools', title: '5. Hệ Thống Công Cụ Chuyên Sâu', visible: true, order: 4 },
  ]);

  // Moves & Resizes
  const [moves, setMoves] = useState<Record<string, MoveOffset>>({});
  const [resizes, setResizes] = useState<Record<string, ResizeState>>({});

  // Dragging state
  const draggingRef = useRef<{ id: string; startX: number; startY: number; initX: number; initY: number } | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tolananh_site_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.header) setHeaderConfig(parsed.header);
        if (parsed.footer) setFooterConfig(parsed.footer);
        if (parsed.siteData) setSiteData(parsed.siteData);
        if (parsed.homeBlocks) setHomeBlocks(parsed.homeBlocks);
        if (parsed.workBlocks) setWorkBlocks(parsed.workBlocks);
        if (parsed.expBlocks) setExpBlocks(parsed.expBlocks);
        if (parsed.moves) setMoves(parsed.moves);
        if (parsed.resizes) setResizes(parsed.resizes);
        setMessage('Đã nạp toàn bộ bố cục, header & footer tùy chỉnh từ trình duyệt của bạn.');
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save to localStorage
  const handleSave = () => {
    try {
      const dataToSave = {
        header: headerConfig,
        footer: footerConfig,
        profile: siteData.profile,
        siteData,
        homeBlocks,
        workBlocks,
        expBlocks,
        moves,
        resizes,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('tolananh_site_data', JSON.stringify(dataToSave));
      setMessage('✅ Đã lưu toàn bộ bố cục trang, Header, Footer & nội dung thành công! Trang live sẽ tự động cập nhật.');
      setTimeout(() => setMessage(null), 4000);
    } catch (e) {
      console.error(e);
      setMessage('Lỗi khi lưu dữ liệu vào trình duyệt.');
    }
  };

  // Reset to default
  const handleReset = () => {
    if (confirm('Bạn có chắc chắn muốn khôi phục lại bố cục và nội dung mặc định?')) {
      localStorage.removeItem('tolananh_site_data');
      setMoves({});
      setResizes({});
      setMessage('Đã khôi phục lại dữ liệu mặc định.');
      setTimeout(() => setMessage(null), 3000);
      window.location.reload();
    }
  };

  // Export JSON file
  const handleExportJSON = () => {
    const dataToSave = {
      header: headerConfig,
      footer: footerConfig,
      siteData,
      homeBlocks,
      workBlocks,
      expBlocks,
      moves,
      resizes,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tolananh_portfolio_data_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage('✅ Đã xuất file JSON thành công! Bạn có thể lưu giữ hoặc chia sẻ.');
    setTimeout(() => setMessage(null), 3000);
  };

  // Import JSON file
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.header) setHeaderConfig(parsed.header);
          if (parsed.footer) setFooterConfig(parsed.footer);
          if (parsed.siteData) setSiteData(parsed.siteData);
          if (parsed.homeBlocks) setHomeBlocks(parsed.homeBlocks);
          if (parsed.workBlocks) setWorkBlocks(parsed.workBlocks);
          if (parsed.expBlocks) setExpBlocks(parsed.expBlocks);
          if (parsed.moves) setMoves(parsed.moves || {});
          if (parsed.resizes) setResizes(parsed.resizes || {});
          setMessage('✅ Đã nhập file JSON thành công! Hãy bấm "Lưu Bố Cục" để áp dụng.');
        } catch (err) {
          alert('File JSON không hợp lệ!');
        }
      };
      reader.readAsText(file);
    }
  };

  // Handle adding custom block from template
  const handleSelectBlockType = (type: CustomBlockContent['type']) => {
    const newId = `custom-${type}-${Date.now()}`;
    let title = 'Khối Bố Cục Mới';
    let defaultContent: CustomBlockContent = {
      type,
      bgColor: 'white',
      align: 'left',
    };

    if (type === 'rich-text') {
      title = 'Khối Đoạn Văn & Nút Bấm';
      defaultContent = {
        type: 'rich-text',
        heading: 'Tiêu đề khối nội dung mới',
        subheading: 'Hạng Mục Nổi Bật',
        body: 'Đây là đoạn văn bản nội dung giới thiệu bạn có thể chỉnh sửa trực tiếp bằng cách nhấp chuột vào chữ.',
        btnText: 'Xem Chi Tiết',
        btnUrl: '#',
        bgColor: 'white',
        align: 'left',
      };
    } else if (type === 'cta-banner') {
      title = 'Khối Banner Kêu Gọi Hành Động (CTA)';
      defaultContent = {
        type: 'cta-banner',
        heading: 'Sẵn sàng khởi động chiến dịch truyền thông cùng Tô Lan Anh?',
        subheading: 'Kết Nối & Hợp Tác',
        body: 'Liên hệ ngay để cùng lên ý tưởng kịch bản và sản xuất video TikTok bắt kịp trào lưu.',
        btnText: 'Gọi Hotline Ngay',
        btnUrl: `tel:${profileData.phone.replace(/[^0-9]/g, '')}`,
        bgColor: 'cream',
        align: 'center',
      };
    } else if (type === 'stats-grid') {
      title = 'Khối Thống Kê & Số Liệu';
      defaultContent = {
        type: 'stats-grid',
        heading: 'Những Con Số Ấn Tượng',
        body: 'Kết quả đạt được qua các dự án và chiến dịch nội dung short-form video.',
        items: [
          { value: '100K+', title: 'Lượt tiếp cận', desc: 'Video viral trên TikTok' },
          { value: '4+', title: 'Kênh TikTok', desc: 'Chủ lực đã triển khai' },
          { value: '100%', title: 'Tự lên kịch bản', desc: 'Quay & hậu kỳ chỉn chu' },
          { value: 'Văn Lang', title: 'Cử nhân PR', desc: 'Tư duy chiến lược bài bản' },
        ],
        bgColor: 'white',
      };
    } else if (type === 'media-gallery') {
      title = 'Khối Thư Viện Hình Ảnh';
      defaultContent = {
        type: 'media-gallery',
        heading: 'Hình Ảnh Hoạt Động & Sự Kiện Thực Tế',
        items: [
          { image: '/images/lananh_vanlang_aodai.jpg', title: 'Tô Lan Anh · PR Văn Lang' },
          { image: '/images/channels/toadogenz_channel.jpg', title: 'Kênh Toạ Độ Gen Z' },
          { image: '/images/channels/bupsky_channel.jpg', title: 'Búp Sky Cuisine' },
        ],
        bgColor: 'white',
      };
    } else if (type === 'testimonial') {
      title = 'Khối Trích Dẫn & Nhận Xét';
      defaultContent = {
        type: 'testimonial',
        body: 'Tô Lan Anh là một bạn trẻ rất năng động, nắm bắt xu hướng nhanh nhạy và có tư duy hình ảnh, kịch bản video ngắn cực kỳ chỉn chu.',
        quoteAuthor: 'Mentor & Giảng Viên PR Văn Lang',
        quoteRole: 'Khoa Quan hệ Công chúng — Truyền thông',
        quoteAvatar: '/images/lananh_vanlang_aodai.jpg',
        bgColor: 'amber',
      };
    } else if (type === 'video-embed') {
      title = 'Khối Giới Thiệu Video TikTok';
      defaultContent = {
        type: 'video-embed',
        heading: 'Chiến Dịch Video TikTok Viral',
        subheading: 'TikTok Spotlight',
        body: 'Video ngắn sáng tạo bắt kịp trào lưu giới trẻ, tỷ lệ giữ chân người xem cao và tương tác tự nhiên.',
        btnUrl: 'https://www.tiktok.com/@toadogenz',
        bgColor: 'white',
      };
    } else if (type === 'quick-contact') {
      title = 'Khối Liên Hệ Nhanh';
      defaultContent = {
        type: 'quick-contact',
        heading: 'Liên Hệ & Kết Nối Trực Tiếp',
        body: 'Kết nối nhanh cùng Tô Lan Anh cho các cơ hội hợp tác dự án truyền thông và sản xuất video.',
        bgColor: 'cream',
      };
    }

    const newBlock: BlockState = {
      id: newId,
      title: `${title} (Mới)`,
      visible: true,
      order: 99,
      isCustom: true,
      customContent: defaultContent,
      bgColor: defaultContent.bgColor,
    };

    if (targetPageForBlock === 'home') {
      setHomeBlocks(prev => [...prev, newBlock]);
    } else if (targetPageForBlock === 'work') {
      setWorkBlocks(prev => [...prev, newBlock]);
    } else {
      setExpBlocks(prev => [...prev, newBlock]);
    }

    setMessage(`✅ Đã thêm "${title}" vào trang! Bạn có thể nhấp vào để chỉnh sửa ngay.`);
    setTimeout(() => setMessage(null), 4000);
  };

  // Delete block handler
  const handleDeleteBlock = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, id: string) => {
    if (confirm('Bạn có chắc chắn muốn xoá khối bố cục này?')) {
      setBlocks(blocks.filter(b => b.id !== id));
      setMessage('Đã xoá khối bố cục.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // Change block background color
  const handleChangeBlockBg = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, id: string, bg: string) => {
    setBlocks(blocks.map(b => {
      if (b.id === id) {
        return {
          ...b,
          bgColor: bg,
          customContent: b.customContent ? { ...b.customContent, bgColor: bg as any } : undefined,
        };
      }
      return b;
    }));
  };

  // Update custom block content
  const handleUpdateCustomContent = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, id: string, updated: CustomBlockContent) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, customContent: updated } : b));
  };

  // Reordering helpers
  const moveBlock = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= blocks.length) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[idx];
    newBlocks[idx] = newBlocks[targetIdx];
    newBlocks[targetIdx] = temp;
    newBlocks.forEach((b, i) => { b.order = i; });
    setBlocks(newBlocks);
  };

  const toggleVisibility = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, id: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, visible: !b.visible } : b));
  };

  // Mouse drag listeners for movable blocks
  const startDrag = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const curr = moves[id] || { x: 0, y: 0 };
    draggingRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      initX: curr.x,
      initY: curr.y,
    };

    const handleMouseMove = (moveEvt: MouseEvent) => {
      if (!draggingRef.current) return;
      const dx = moveEvt.clientX - draggingRef.current.startX;
      const dy = moveEvt.clientY - draggingRef.current.startY;
      setMoves(prev => ({
        ...prev,
        [draggingRef.current!.id]: {
          x: Math.round(draggingRef.current!.initX + dx),
          y: Math.round(draggingRef.current!.initY + dy),
        }
      }));
    };

    const handleMouseUp = () => {
      draggingRef.current = null;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Image replacement helper
  const handleImageUpload = (setter: (dataUrl: string) => void, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setter(reader.result as string);
        setMessage('Đã cập nhật ảnh thành công! Hãy bấm "Lưu Bố Cục" để lưu lại.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="layout-editor font-sans text-[#14110F]">
      
      {/* Top Sticky Control Bar */}
      <header className="layout-editor-bar">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <strong className="text-base font-extrabold tracking-tight">
              WordPress Style Full Layout Editor — Tô Lan Anh
            </strong>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#D5CEBE] border border-white/15">
              Edit All Pages &amp; Full Content
            </span>
          </div>

          <p>
            Giữ nút <strong>Move</strong> để dời ô, nhấp trực tiếp vào chữ để sửa nội dung, bấm <strong>Đổi ảnh</strong> để tải ảnh mới lên và bấm <strong>Lưu Bố Cục</strong> để hoàn tất.
          </p>

          {/* Page Switcher Tabs */}
          <div className="layout-editor-pages">
            <button
              type="button"
              onClick={() => setActivePage('home')}
              className={activePage === 'home' ? 'is-active' : ''}
            >
              Trang Chủ (Home)
            </button>
            <button
              type="button"
              onClick={() => setActivePage('work')}
              className={activePage === 'work' ? 'is-active' : ''}
            >
              Dự Án &amp; TikTok (Work)
            </button>
            <button
              type="button"
              onClick={() => setActivePage('header')}
              className={activePage === 'header' ? 'is-active !bg-amber-600 !text-white !border-amber-600' : ''}
            >
              🧭 Sửa Header &amp; Menu
            </button>
            <button
              type="button"
              onClick={() => setActivePage('footer')}
              className={activePage === 'footer' ? 'is-active !bg-stone-800 !text-white !border-stone-800' : ''}
            >
              🦶 Sửa Footer &amp; Mạng Xã Hội
            </button>
            <button
              type="button"
              onClick={() => setActivePage('experience')}
              className={activePage === 'experience' ? 'is-active' : ''}
            >
              Kinh Nghiệm &amp; Học Vấn
            </button>
            <button
              type="button"
              onClick={() => setActivePage('skills')}
              className={activePage === 'skills' ? 'is-active' : ''}
            >
              Kỹ Năng &amp; Tools
            </button>
            <button
              type="button"
              onClick={() => setActivePage('form')}
              className={activePage === 'form' ? 'is-active !bg-amber-500 !text-black !border-amber-500' : ''}
            >
              ⚡ Bảng Sửa Toàn Bộ (Form View)
            </button>
          </div>
        </div>

        {/* Global Actions */}
        <div className="layout-editor-actions">
          <Link
            href={
              activePage === 'home' || activePage === 'header' || activePage === 'footer'
                ? '/'
                : activePage === 'work'
                ? '/work'
                : activePage === 'experience'
                ? '/working-experience'
                : '/skills'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Xem Live</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8C5A3C]" />
          </Link>

          <button
            type="button"
            onClick={handleExportJSON}
            title="Xuất dữ liệu ra file JSON"
          >
            <Download className="w-3.5 h-3.5 text-[#8C5A3C]" />
            <span>Xuất JSON</span>
          </button>

          <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#14110F] text-xs font-bold rounded-full hover:bg-zinc-100 transition-colors">
            <Upload className="w-3.5 h-3.5 text-[#8C5A3C]" />
            <span>Nhập JSON</span>
            <input type="file" accept=".json" hidden onChange={handleImportJSON} />
          </label>

          <button
            type="button"
            onClick={handleReset}
            title="Khôi phục về vị trí ban đầu"
          >
            <RotateCcw className="w-3.5 h-3.5 text-zinc-600" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="btn-save"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Lưu Bố Cục (Save)</span>
          </button>
        </div>
      </header>

      {/* Alert Notice Banner */}
      {message && (
        <div className="layout-editor-message">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C5A3C]" />
            <span>{message}</span>
          </div>
          <button
            onClick={() => setMessage(null)}
            className="text-xs text-[#8C5A3C] hover:underline"
          >
            Đóng
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="container py-8 space-y-8 max-w-6xl">
        
        {/* ===================================================================== */}
        {/* VIEW 1: HOME PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'home' && (
          <div className="space-y-6">

            {/* WordPress Style Add Block Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border-2 border-dashed border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F3ECE0] transition-colors">
              <div className="flex items-center gap-2.5">
                <PlusCircle className="w-5 h-5 text-[#8C5A3C]" />
                <div>
                  <div className="text-sm font-bold text-[#14110F]">
                    Thêm Khối Bố Cục Mới Vào Trang Chủ (WordPress Style Add Block)
                  </div>
                  <div className="text-xs text-[#7A6E65]">
                    Chèn Đoạn văn &amp; Nút, Banner CTA, Lưới số liệu, Thư viện ảnh, Đánh giá hoặc Thẻ TikTok
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setTargetPageForBlock('home');
                  setIsBlockModalOpen(true);
                }}
                className="px-4 py-2 bg-[#8C5A3C] hover:bg-[#72452B] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-all self-start sm:self-auto cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Thêm Khối Mới</span>
              </button>
            </div>
            
            {homeBlocks.map((block, idx) => {
              const moveKey = `home-${block.id}`;
              const offset = moves[moveKey] || { x: 0, y: 0 };

              return (
                <div
                  key={block.id}
                  className={`layout-block ${!block.visible ? 'is-hidden' : ''}`}
                >
                  {/* Block Bar with Drag Handle, Up/Down and Visibility Toggle */}
                  <div className="layout-block-bar">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-200">#{idx + 1}</span>
                      <span>{block.title}</span>
                      {block.isCustom && (
                        <span className="text-[10px] bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded font-mono">
                          Khối Tuỳ Biến
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Background Color Selector */}
                      <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-md text-xs">
                        <Palette className="w-3 h-3 text-amber-300" />
                        <select
                          value={block.bgColor || 'white'}
                          onChange={(e) => handleChangeBlockBg(homeBlocks, setHomeBlocks, block.id, e.target.value)}
                          className="bg-transparent text-xs text-white border-0 focus:ring-0 cursor-pointer"
                        >
                          <option value="white" className="text-black">Trắng</option>
                          <option value="cream" className="text-black">Be nhạt</option>
                          <option value="dark" className="text-black">Đen</option>
                          <option value="amber" className="text-black">Vàng ấm</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => moveBlock(homeBlocks, setHomeBlocks, idx, 'up')}
                        disabled={idx === 0}
                        className="disabled:opacity-40"
                        title="Di chuyển lên trên"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(homeBlocks, setHomeBlocks, idx, 'down')}
                        disabled={idx === homeBlocks.length - 1}
                        className="disabled:opacity-40"
                        title="Di chuyển xuống dưới"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleVisibility(homeBlocks, setHomeBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs"
                      >
                        {block.visible ? (
                          <>
                            <Eye className="w-3 h-3" />
                            <span>Ẩn</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3 text-red-400" />
                            <span>Hiện</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlock(homeBlocks, setHomeBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs text-red-300 hover:text-red-100 hover:bg-red-500/20 px-2 py-0.5 rounded transition-colors"
                        title="Xoá khối này"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Xoá</span>
                      </button>
                    </div>
                  </div>

                  {/* Custom Injected Block with Live Editing */}
                  {block.isCustom && block.customContent && (
                    <div
                      className="p-4"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                          title="Giữ chuột và kéo để dời vị trí khối này"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <CustomBlockRenderer
                          content={block.customContent}
                          isEditable={true}
                          onUpdate={(updated) => handleUpdateCustomContent(homeBlocks, setHomeBlocks, block.id, updated)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Block 1: Hero Banner */}
                  {block.id === 'hero' && (
                    <section
                      className="p-8 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                          title="Giữ chuột và kéo để dời vị trí khối này"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                          
                          {/* Text Left (7 cols) */}
                          <div className="lg:col-span-7 space-y-4">
                            <div
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => setSiteData(prev => ({
                                ...prev,
                                home: { ...prev.home, eyebrow: e.currentTarget.textContent || '' }
                              }))}
                              className="layout-editable inline-block text-xs font-bold text-[#8C5A3C] uppercase tracking-wider bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#DECFC0]"
                            >
                              {siteData.home.eyebrow}
                            </div>

                            <h1
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => setSiteData(prev => ({
                                ...prev,
                                home: { ...prev.home, heading: e.currentTarget.textContent || '' }
                              }))}
                              className="layout-editable text-3xl sm:text-4xl font-extrabold text-[#14110F] leading-tight"
                            >
                              {siteData.home.heading}
                            </h1>

                            <p
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => setSiteData(prev => ({
                                ...prev,
                                home: { ...prev.home, lead: e.currentTarget.textContent || '' }
                              }))}
                              className="layout-editable text-sm text-[#635952] leading-relaxed"
                            >
                              {siteData.home.lead}
                            </p>

                            {/* 4 Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[rgba(20,17,15,0.06)] text-center">
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setSiteData(prev => ({
                                    ...prev,
                                    home: { ...prev.home, stat1Val: e.currentTarget.textContent || '' }
                                  }))}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {siteData.home.stat1Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{siteData.home.stat1Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setSiteData(prev => ({
                                    ...prev,
                                    home: { ...prev.home, stat2Val: e.currentTarget.textContent || '' }
                                  }))}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {siteData.home.stat2Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{siteData.home.stat2Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setSiteData(prev => ({
                                    ...prev,
                                    home: { ...prev.home, stat3Val: e.currentTarget.textContent || '' }
                                  }))}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {siteData.home.stat3Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{siteData.home.stat3Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setSiteData(prev => ({
                                    ...prev,
                                    home: { ...prev.home, stat4Val: e.currentTarget.textContent || '' }
                                  }))}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {siteData.home.stat4Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{siteData.home.stat4Label}</div>
                              </div>
                            </div>

                          </div>

                          {/* Image Right (5 cols) */}
                          <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-luxury group">
                              <Image
                                src={siteData.profile.portraitSrc}
                                alt="Chân dung Tô Lan Anh"
                                fill
                                className="object-cover object-[center_20%]"
                              />
                              {/* Replace Image Button */}
                              <label className="image-replace">
                                <Upload className="w-3.5 h-3.5" />
                                <span>Đổi ảnh</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  hidden
                                  onChange={(e) => handleImageUpload((url) => setSiteData(prev => ({
                                    ...prev,
                                    profile: { ...prev.profile, portraitSrc: url }
                                  })), e)}
                                />
                              </label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                  )}

                  {/* Block 2: Navigation 4 Categories */}
                  {block.id === 'nav-tabs' && (
                    <section
                      className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">HẠNG MỤC 01</span>
                            <div className="font-bold text-sm text-[#14110F]">Các Kênh TikTok &amp; Dự Án</div>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">HẠNG MỤC 02</span>
                            <div className="font-bold text-sm text-[#14110F]">Kinh Nghiệm &amp; Học Vấn</div>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">HẠNG MỤC 03</span>
                            <div className="font-bold text-sm text-[#14110F]">Kỹ Năng &amp; Tools</div>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">HẠNG MỤC 04</span>
                            <div className="font-bold text-sm text-[#14110F]">Liên Hệ &amp; Hợp Tác</div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Block 3: Channels Grid */}
                  {block.id === 'channels' && (
                    <section
                      className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                            <span className="text-[10px] font-bold text-orange-700">@toadogenz</span>
                            <div className="font-bold text-sm text-[#14110F]">{siteData.work.toadogenz.title}</div>
                            <p className="text-xs text-[#635952]">{siteData.work.toadogenz.subtitle}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">@la.camotchut</span>
                            <div className="font-bold text-sm text-[#14110F]">{siteData.work.lacamotchut.title}</div>
                            <p className="text-xs text-[#635952]">{siteData.work.lacamotchut.subtitle}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                            <span className="text-[10px] font-bold text-teal-800">@datbikehongphuong</span>
                            <div className="font-bold text-sm text-[#14110F]">{siteData.work.datbike.title}</div>
                            <p className="text-xs text-[#635952]">{siteData.work.datbike.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Block 4: Secondary Note */}
                  {block.id === 'secondary-note' && (
                    <section
                      className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <div className="py-2 space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C]">
                            Các dự án &amp; chứng chỉ chuyên môn
                          </span>
                          <p className="text-xs sm:text-sm text-[#635952]">
                            Nhà hàng Rooftop <strong>Búp Sky Cuisine (@bupskycuisine - 133.1K views)</strong>, Chứng chỉ <strong>QCC Mastery Hub &amp; ColorME Photoshop</strong>, Winner Pitching <strong>Tivi HXY Hải Phi</strong> và <strong>Bộ 14 Slide HD</strong> nguyên bản.
                          </p>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Block 5: Contact CTA */}
                  {block.id === 'contact' && (
                    <section
                      className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs text-center"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <div className="py-4 space-y-2">
                          <h3
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setSiteData(prev => ({
                              ...prev,
                              home: { ...prev.home, ctaHeading: e.currentTarget.textContent || '' }
                            }))}
                            className="layout-editable text-xl font-bold text-[#14110F]"
                          >
                            {siteData.home.ctaHeading}
                          </h3>
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setSiteData(prev => ({
                              ...prev,
                              home: { ...prev.home, ctaSub: e.currentTarget.textContent || '' }
                            }))}
                            className="layout-editable text-xs text-[#635952]"
                          >
                            {siteData.home.ctaSub}
                          </p>
                          <div className="text-xs font-bold text-[#8C5A3C] pt-2">
                            Hotline: {siteData.profile.phone} • Email: {siteData.profile.email}
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                </div>
              );
            })}

            {/* Bottom Add Block for Home */}
            <div className="flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F3ECE0] transition-colors">
              <button
                type="button"
                onClick={() => {
                  setTargetPageForBlock('home');
                  setIsBlockModalOpen(true);
                }}
                className="px-5 py-2.5 bg-[#8C5A3C] hover:bg-[#72452B] text-white text-xs font-bold rounded-lg flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Chèn Thêm Khối Mới Cho Trang Chủ</span>
              </button>
            </div>

          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW 2: WORK / PROJECTS PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'work' && (
          <div className="space-y-6">

            {/* WordPress Style Add Block Banner for Work */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border-2 border-dashed border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F3ECE0] transition-colors">
              <div className="flex items-center gap-2.5">
                <PlusCircle className="w-5 h-5 text-[#8C5A3C]" />
                <div>
                  <div className="text-sm font-bold text-[#14110F]">
                    Thêm Khối Bố Cục Mới Vào Trang Dự Án (Work)
                  </div>
                  <div className="text-xs text-[#7A6E65]">
                    Chèn Video TikTok, Banner kêu gọi, Thư viện ảnh, Đoạn văn hoặc Lưới số liệu
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setTargetPageForBlock('work');
                  setIsBlockModalOpen(true);
                }}
                className="px-4 py-2 bg-[#8C5A3C] hover:bg-[#72452B] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-all self-start sm:self-auto cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Thêm Khối Mới</span>
              </button>
            </div>
            
            {workBlocks.map((block, idx) => {
              const moveKey = `work-${block.id}`;
              const offset = moves[moveKey] || { x: 0, y: 0 };

              return (
                <div
                  key={block.id}
                  className={`layout-block ${!block.visible ? 'is-hidden' : ''}`}
                >
                  <div className="layout-block-bar">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-200">#{idx + 1}</span>
                      <span>{block.title}</span>
                      {block.isCustom && (
                        <span className="text-[10px] bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded font-mono">
                          Khối Tuỳ Biến
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Background Color Selector */}
                      <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-md text-xs">
                        <Palette className="w-3 h-3 text-amber-300" />
                        <select
                          value={block.bgColor || 'white'}
                          onChange={(e) => handleChangeBlockBg(workBlocks, setWorkBlocks, block.id, e.target.value)}
                          className="bg-transparent text-xs text-white border-0 focus:ring-0 cursor-pointer"
                        >
                          <option value="white" className="text-black">Trắng</option>
                          <option value="cream" className="text-black">Be nhạt</option>
                          <option value="dark" className="text-black">Đen</option>
                          <option value="amber" className="text-black">Vàng ấm</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => moveBlock(workBlocks, setWorkBlocks, idx, 'up')}
                        disabled={idx === 0}
                        className="disabled:opacity-40"
                        title="Di chuyển lên"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(workBlocks, setWorkBlocks, idx, 'down')}
                        disabled={idx === workBlocks.length - 1}
                        className="disabled:opacity-40"
                        title="Di chuyển xuống"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleVisibility(workBlocks, setWorkBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs"
                      >
                        {block.visible ? (
                          <>
                            <Eye className="w-3 h-3" />
                            <span>Ẩn</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3 text-red-400" />
                            <span>Hiện</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlock(workBlocks, setWorkBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs text-red-300 hover:text-red-100 hover:bg-red-500/20 px-2 py-0.5 rounded transition-colors"
                        title="Xoá khối này"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Xoá</span>
                      </button>
                    </div>
                  </div>

                  {/* Custom Injected Block with Live Editing */}
                  {block.isCustom && block.customContent && (
                    <div
                      className="p-4"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                      }}
                    >
                      <div className="movable is-editing relative">
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                          title="Giữ chuột và kéo để dời vị trí khối này"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>
                        <CustomBlockRenderer
                          content={block.customContent}
                          isEditable={true}
                          onUpdate={(updated) => handleUpdateCustomContent(workBlocks, setWorkBlocks, block.id, updated)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Work Header Banner */}
                  {block.id === 'work-header' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="space-y-2 pt-2">
                          <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bannerEyebrow: e.currentTarget.textContent || '' } }))} className="layout-editable text-xs font-bold text-[#8C5A3C]">
                            {siteData.work.bannerEyebrow}
                          </div>
                          <h2 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bannerTitle: e.currentTarget.textContent || '' } }))} className="layout-editable text-2xl font-extrabold text-[#14110F]">
                            {siteData.work.bannerTitle}
                          </h2>
                          <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bannerLead: e.currentTarget.textContent || '' } }))} className="layout-editable text-xs text-[#635952]">
                            {siteData.work.bannerLead}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Kênh Toạ Độ Gen Z */}
                  {block.id === 'work-genz' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                          {/* Left: Channel Screenshot Frame */}
                          <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-md group">
                              <Image src={siteData.work.toadogenz.imageSrc} alt="Toạ Độ Gen Z" fill className="object-cover object-top" />
                              <label className="image-replace">
                                <Upload className="w-3 h-3" />
                                <span>Đổi ảnh kênh</span>
                                <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload((url) => setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, imageSrc: url } } })), e)} />
                              </label>
                            </div>
                            <span className="text-[11px] text-[#635952] mt-2">Ảnh giao diện kênh TikTok thực tế</span>
                          </div>

                          {/* Right: Channel info and editable video list */}
                          <div className="lg:col-span-7 space-y-4">
                            <h3 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, title: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xl font-bold text-[#14110F]">
                              {siteData.work.toadogenz.title}
                            </h3>
                            <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, subtitle: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xs text-[#635952]">
                              {siteData.work.toadogenz.subtitle}
                            </p>

                            <div className="space-y-2 pt-2">
                              <span className="text-xs font-bold text-[#14110F]">Danh sách video thực tế trên kênh ({siteData.work.toadogenz.videos.length}):</span>
                              {siteData.work.toadogenz.videos.map((vid, vIdx) => (
                                <div key={vid.id} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span contentEditable suppressContentEditableWarning onBlur={(e) => {
                                      const newVids = [...siteData.work.toadogenz.videos];
                                      newVids[vIdx].views = e.currentTarget.textContent || '';
                                      setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, videos: newVids } } }));
                                    }} className="layout-editable text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                                      {vid.views} views
                                    </span>
                                  </div>
                                  <h5 contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newVids = [...siteData.work.toadogenz.videos];
                                    newVids[vIdx].title = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, videos: newVids } } }));
                                  }} className="layout-editable text-xs font-bold text-[#14110F]">
                                    {vid.title}
                                  </h5>
                                  <p contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newVids = [...siteData.work.toadogenz.videos];
                                    newVids[vIdx].hook = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, videos: newVids } } }));
                                  }} className="layout-editable text-[11px] text-[#635952] italic">
                                    "{vid.hook}"
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Kênh La Cà Một Chút */}
                  {block.id === 'work-laca' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                          <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-md group">
                              <Image src={siteData.work.lacamotchut.imageSrc} alt="La Cà Một Chút" fill className="object-cover object-top" />
                              <label className="image-replace">
                                <Upload className="w-3 h-3" />
                                <span>Đổi ảnh kênh</span>
                                <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload((url) => setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, imageSrc: url } } })), e)} />
                              </label>
                            </div>
                            <span className="text-[11px] text-[#635952] mt-2">Ảnh giao diện kênh TikTok thực tế</span>
                          </div>

                          <div className="lg:col-span-7 space-y-4">
                            <h3 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, title: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xl font-bold text-[#14110F]">
                              {siteData.work.lacamotchut.title}
                            </h3>
                            <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, subtitle: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xs text-[#635952]">
                              {siteData.work.lacamotchut.subtitle}
                            </p>

                            <div className="space-y-2 pt-2">
                              <span className="text-xs font-bold text-[#14110F]">Danh sách địa điểm &amp; video ({siteData.work.lacamotchut.videos.length}):</span>
                              {siteData.work.lacamotchut.videos.map((vid, vIdx) => (
                                <div key={vid.id} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span contentEditable suppressContentEditableWarning onBlur={(e) => {
                                      const newVids = [...siteData.work.lacamotchut.videos];
                                      newVids[vIdx].views = e.currentTarget.textContent || '';
                                      setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, videos: newVids } } }));
                                    }} className="layout-editable text-[10px] font-bold text-[#8C5A3C] bg-amber-100 px-2 py-0.5 rounded">
                                      {vid.views} views
                                    </span>
                                  </div>
                                  <h5 contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newVids = [...siteData.work.lacamotchut.videos];
                                    newVids[vIdx].title = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, videos: newVids } } }));
                                  }} className="layout-editable text-xs font-bold text-[#14110F]">
                                    {vid.title}
                                  </h5>
                                  <p contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newVids = [...siteData.work.lacamotchut.videos];
                                    newVids[vIdx].hook = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, videos: newVids } } }));
                                  }} className="layout-editable text-[11px] text-[#635952] italic">
                                    "{vid.hook}"
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Dự Án Búp Sky Cuisine */}
                  {block.id === 'work-bupsky' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                          <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-md group">
                              <Image src={siteData.work.bupsky.imageSrc} alt="Búp Sky Cuisine" fill className="object-cover object-top" />
                              <label className="image-replace">
                                <Upload className="w-3 h-3" />
                                <span>Đổi ảnh thông số</span>
                                <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload((url) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, imageSrc: url } } })), e)} />
                              </label>
                            </div>
                            <span className="text-[11px] text-[#635952] mt-2">Ảnh thông số thực tế kênh Búp Sky</span>
                          </div>

                          <div className="lg:col-span-7 space-y-4">
                            <h3 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, title: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xl font-bold text-[#14110F]">
                              {siteData.work.bupsky.title}
                            </h3>
                            <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, subtitle: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xs text-[#635952]">
                              {siteData.work.bupsky.subtitle}
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-center pt-2">
                              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                                <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, stat1Val: e.currentTarget.textContent || '' } } }))} className="layout-editable font-bold text-lg text-[#14110F]">
                                  {siteData.work.bupsky.stat1Val}
                                </div>
                                <span className="text-[10px] text-[#635952]">{siteData.work.bupsky.stat1Label}</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                                <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, stat2Val: e.currentTarget.textContent || '' } } }))} className="layout-editable font-bold text-lg text-[#14110F]">
                                  {siteData.work.bupsky.stat2Val}
                                </div>
                                <span className="text-[10px] text-[#635952]">{siteData.work.bupsky.stat2Label}</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECFC0]">
                                <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, stat3Val: e.currentTarget.textContent || '' } } }))} className="layout-editable font-bold text-lg text-[#14110F]">
                                  {siteData.work.bupsky.stat3Val}
                                </div>
                                <span className="text-[10px] text-[#635952]">{siteData.work.bupsky.stat3Label}</span>
                              </div>
                            </div>

                            <div className="space-y-1.5 pt-2 text-xs text-[#2D2723]">
                              <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, bullet1: e.currentTarget.textContent || '' } } }))} className="layout-editable p-2 rounded-lg bg-[#FAF7F2]">
                                {siteData.work.bupsky.bullet1}
                              </div>
                              <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, bullet2: e.currentTarget.textContent || '' } } }))} className="layout-editable p-2 rounded-lg bg-[#FAF7F2]">
                                {siteData.work.bupsky.bullet2}
                              </div>
                              <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, bullet3: e.currentTarget.textContent || '' } } }))} className="layout-editable p-2 rounded-lg bg-[#FAF7F2]">
                                {siteData.work.bupsky.bullet3}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Datbike & Brand blocks */}
                  {(block.id === 'work-datbike' || block.id === 'work-brand') && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="pt-2">
                          <h4 className="font-bold text-base text-[#14110F]">{block.title}</h4>
                          <p className="text-xs text-[#635952] mt-1">
                            Khối nội dung này đang được hiển thị trong trang /work. Bạn có thể kéo dời vị trí hoặc thay đổi thứ tự hiển thị bằng các nút mũi tên.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

            {/* Bottom Add Block for Work */}
            <div className="flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-[#DECFC0] bg-[#FAF7F2] hover:bg-[#F3ECE0] transition-colors">
              <button
                type="button"
                onClick={() => {
                  setTargetPageForBlock('work');
                  setIsBlockModalOpen(true);
                }}
                className="px-5 py-2.5 bg-[#8C5A3C] hover:bg-[#72452B] text-white text-xs font-bold rounded-lg flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Chèn Thêm Khối Mới Cho Trang Dự Án (Work)</span>
              </button>
            </div>

          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW: HEADER & NAVIGATION LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'header' && (
          <HeaderLayoutEditor
            config={headerConfig}
            onChange={setHeaderConfig}
            onSave={handleSave}
          />
        )}

        {/* ===================================================================== */}
        {/* VIEW: FOOTER & SOCIALS LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'footer' && (
          <FooterLayoutEditor
            config={footerConfig}
            onChange={setFooterConfig}
            onSave={handleSave}
          />
        )}

        {/* ===================================================================== */}
        {/* VIEW 3: EXPERIENCE PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'experience' && (
          <div className="space-y-6">
            
            {expBlocks.map((block, idx) => {
              const moveKey = `exp-${block.id}`;
              const offset = moves[moveKey] || { x: 0, y: 0 };

              return (
                <div
                  key={block.id}
                  className={`layout-block ${!block.visible ? 'is-hidden' : ''}`}
                >
                  <div className="layout-block-bar">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-200">#{idx + 1}</span>
                      <span>{block.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => moveBlock(expBlocks, setExpBlocks, idx, 'up')}
                        disabled={idx === 0}
                        className="disabled:opacity-40"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(expBlocks, setExpBlocks, idx, 'down')}
                        disabled={idx === expBlocks.length - 1}
                        className="disabled:opacity-40"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleVisibility(expBlocks, setExpBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs"
                      >
                        {block.visible ? <span>Ẩn</span> : <span>Hiện</span>}
                      </button>
                    </div>
                  </div>

                  {/* Exp Block 1: Banner */}
                  {block.id === 'exp-hero' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="space-y-2 pt-2">
                          <h2 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, experience: { ...prev.experience, bannerTitle: e.currentTarget.textContent || '' } }))} className="layout-editable text-2xl font-extrabold text-[#14110F]">
                            {siteData.experience.bannerTitle}
                          </h2>
                          <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, experience: { ...prev.experience, bannerSub: e.currentTarget.textContent || '' } }))} className="layout-editable text-xs text-[#635952]">
                            {siteData.experience.bannerSub}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Exp Block 2: Timeline Jobs */}
                  {block.id === 'exp-timeline' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="space-y-4 pt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                            Các mốc kinh nghiệm thực tế (Nhấp vào bất kỳ đoạn chữ nào để chỉnh sửa):
                          </span>

                          <div className="space-y-3">
                            {siteData.experience.jobs.map((job, jIdx) => (
                              <div key={job.id} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-2">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h4 contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newJobs = [...siteData.experience.jobs];
                                    newJobs[jIdx].role = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                  }} className="layout-editable font-bold text-sm text-[#14110F]">
                                    {job.role}
                                  </h4>
                                  <span contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newJobs = [...siteData.experience.jobs];
                                    newJobs[jIdx].period = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                  }} className="layout-editable text-xs font-mono font-bold text-[#8C5A3C]">
                                    {job.period}
                                  </span>
                                </div>

                                <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                                  const newJobs = [...siteData.experience.jobs];
                                  newJobs[jIdx].company = e.currentTarget.textContent || '';
                                  setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                }} className="layout-editable text-xs font-semibold text-[#2D2723]">
                                  {job.company}
                                </div>

                                <div className="space-y-1 text-xs text-[#635952] pl-3 border-l-2 border-[#8C5A3C]">
                                  <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newJobs = [...siteData.experience.jobs];
                                    newJobs[jIdx].point1 = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                  }} className="layout-editable">
                                    • {job.point1}
                                  </div>
                                  <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newJobs = [...siteData.experience.jobs];
                                    newJobs[jIdx].point2 = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                  }} className="layout-editable">
                                    • {job.point2}
                                  </div>
                                  <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                                    const newJobs = [...siteData.experience.jobs];
                                    newJobs[jIdx].point3 = e.currentTarget.textContent || '';
                                    setSiteData(prev => ({ ...prev, experience: { ...prev.experience, jobs: newJobs } }));
                                  }} className="layout-editable">
                                    • {job.point3}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Exp Block 3: Education & Student Photo */}
                  {block.id === 'exp-education' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                          <div className="sm:col-span-8 space-y-2">
                            <h4 contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, experience: { ...prev.experience, education: { ...prev.experience.education, major: e.currentTarget.textContent || '' } } }))} className="layout-editable font-bold text-base text-[#14110F]">
                              {siteData.experience.education.major}
                            </h4>
                            <div contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, experience: { ...prev.experience, education: { ...prev.experience.education, school: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xs font-semibold text-[#8C5A3C]">
                              {siteData.experience.education.school} ({siteData.experience.education.period})
                            </div>
                            <p contentEditable suppressContentEditableWarning onBlur={(e) => setSiteData(prev => ({ ...prev, experience: { ...prev.experience, education: { ...prev.experience.education, details: e.currentTarget.textContent || '' } } }))} className="layout-editable text-xs text-[#635952]">
                              {siteData.experience.education.details}
                            </p>
                          </div>

                          <div className="sm:col-span-4 flex justify-center">
                            <div className="relative w-28 h-36 rounded-xl overflow-hidden border border-[#DECFC0] group">
                              <Image src={siteData.profile.studentPhotoSrc} alt="Ảnh áo dài Văn Lang" fill className="object-cover" />
                              <label className="image-replace">
                                <Upload className="w-3 h-3" />
                                <span>Đổi ảnh</span>
                                <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload((url) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, studentPhotoSrc: url } })), e)} />
                              </label>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Exp Block 4: Certificates */}
                  {block.id === 'exp-certificates' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="space-y-4 pt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#14110F]">
                            Chứng chỉ đào tạo chuyên sâu:
                          </span>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {siteData.experience.certificates.map((cert, cIdx) => (
                              <div key={cert.id} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-2">
                                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#DECFC0] group mb-2">
                                  <Image src={cert.imageSrc} alt={cert.name} fill className="object-cover" />
                                  <label className="image-replace">
                                    <Upload className="w-3 h-3" />
                                    <span>Đổi ảnh chứng chỉ</span>
                                    <input type="file" accept="image/*" hidden onChange={(e) => handleImageUpload((url) => {
                                      const newCerts = [...siteData.experience.certificates];
                                      newCerts[cIdx].imageSrc = url;
                                      setSiteData(prev => ({ ...prev, experience: { ...prev.experience, certificates: newCerts } }));
                                    }, e)} />
                                  </label>
                                </div>
                                <h5 contentEditable suppressContentEditableWarning onBlur={(e) => {
                                  const newCerts = [...siteData.experience.certificates];
                                  newCerts[cIdx].name = e.currentTarget.textContent || '';
                                  setSiteData(prev => ({ ...prev, experience: { ...prev.experience, certificates: newCerts } }));
                                }} className="layout-editable font-bold text-xs text-[#14110F]">
                                  {cert.name}
                                </h5>
                                <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                                  const newCerts = [...siteData.experience.certificates];
                                  newCerts[cIdx].org = e.currentTarget.textContent || '';
                                  setSiteData(prev => ({ ...prev, experience: { ...prev.experience, certificates: newCerts } }));
                                }} className="layout-editable text-[11px] font-semibold text-[#8C5A3C]">
                                  {cert.org} • {cert.date}
                                </div>
                                <p contentEditable suppressContentEditableWarning onBlur={(e) => {
                                  const newCerts = [...siteData.experience.certificates];
                                  newCerts[cIdx].desc = e.currentTarget.textContent || '';
                                  setSiteData(prev => ({ ...prev, experience: { ...prev.experience, certificates: newCerts } }));
                                }} className="layout-editable text-[11px] text-[#635952]">
                                  {cert.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Exp Block 5: Tools */}
                  {block.id === 'exp-tools' && (
                    <div className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                      <div className="movable is-editing relative">
                        <button type="button" onMouseDown={(e) => startDrag(moveKey, e)} className="move-handle">
                          <Move className="w-3 h-3" /><span>Move</span>
                        </button>
                        <div className="pt-2">
                          <h4 className="font-bold text-base text-[#14110F]">{block.title}</h4>
                          <p className="text-xs text-[#635952] mt-1">
                            Bộ công cụ thành thạo: CapCut Mobile &amp; Desktop, Adobe Photoshop, Canva Pro, Meta Business Suite, TikTok Studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW 4: SKILLS & TOOLS PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'skills' && (
          <div className="space-y-6">
            <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#14110F]">Chỉnh Sửa Bộ Kỹ Năng &amp; Công Cụ Chuyên Môn</h3>
              <p className="text-xs text-[#635952]">
                Nhấp vào từng kỹ năng để chỉnh sửa trực tiếp nội dung hoặc bấm Thêm để bổ sung kỹ năng mới.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#14110F]">Kỹ năng sáng tạo &amp; Hoạch định:</span>
                <div className="flex flex-wrap gap-2">
                  {siteData.skills.creative.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newSkills = [...siteData.skills.creative];
                        newSkills[sIdx] = e.currentTarget.textContent || '';
                        setSiteData(prev => ({ ...prev, skills: { ...prev.skills, creative: newSkills } }));
                      }}
                      className="layout-editable px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DECFC0] text-xs font-semibold text-[#14110F]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[rgba(20,17,15,0.06)]">
                <span className="text-xs font-bold text-[#14110F]">Công cụ phần mềm kỹ thuật số:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {siteData.skills.technical.map((t, tIdx) => (
                    <div key={tIdx} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                        const newTech = [...siteData.skills.technical];
                        newTech[tIdx].name = e.currentTarget.textContent || '';
                        setSiteData(prev => ({ ...prev, skills: { ...prev.skills, technical: newTech } }));
                      }} className="layout-editable font-bold text-xs text-[#14110F]">
                        {t.name}
                      </div>
                      <div contentEditable suppressContentEditableWarning onBlur={(e) => {
                        const newTech = [...siteData.skills.technical];
                        newTech[tIdx].level = e.currentTarget.textContent || '';
                        setSiteData(prev => ({ ...prev, skills: { ...prev.skills, technical: newTech } }));
                      }} className="layout-editable text-[11px] text-[#635952]">
                        {t.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW 5: FULL CONTENT FORM (BẢNG SỬA TẬP TRUNG TOÀN BỘ) */}
        {/* ===================================================================== */}
        {activePage === 'form' && (
          <div className="p-8 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-8">
            <div className="border-b border-[#ECE4D8] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#14110F]">Bảng Quản Lý Toàn Bộ Dữ Liệu Tập Trung</h2>
                <p className="text-xs text-[#635952] mt-1">
                  Chỉnh sửa nhanh tất cả trường thông tin của Tô Lan Anh và lưu lại một lần duy nhất.
                </p>
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="btn btn-primary"
              >
                <Save className="w-4 h-4" />
                <span>Lưu Tất Cả (Save All)</span>
              </button>
            </div>

            {/* Profile Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
                1. Thông Tin Cá Nhân &amp; Giới Thiệu
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Họ và tên:</label>
                  <input
                    type="text"
                    value={siteData.profile.name}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, name: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Chức danh / Tiêu đề:</label>
                  <input
                    type="text"
                    value={siteData.profile.title}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, title: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Số điện thoại:</label>
                  <input
                    type="text"
                    value={siteData.profile.phone}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, phone: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Email:</label>
                  <input
                    type="email"
                    value={siteData.profile.email}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, email: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-bold text-[#14110F] block mb-1">Địa chỉ:</label>
                  <input
                    type="text"
                    value={siteData.profile.address}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, address: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-bold text-[#14110F] block mb-1">Đoạn giới thiệu bản thân (Intro):</label>
                  <textarea
                    rows={4}
                    value={siteData.profile.intro}
                    onChange={(e) => setSiteData(prev => ({ ...prev, profile: { ...prev.profile, intro: e.target.value } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
              </div>
            </div>

            {/* Channels & URLs */}
            <div className="space-y-4 pt-4 border-t border-[#ECE4D8]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
                2. Đường Dẫn Kênh TikTok &amp; Dự Án
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Link Kênh Toạ Độ Gen Z:</label>
                  <input
                    type="text"
                    value={siteData.work.toadogenz.url}
                    onChange={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, toadogenz: { ...prev.work.toadogenz, url: e.target.value } } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Link Kênh La Cà Một Chút:</label>
                  <input
                    type="text"
                    value={siteData.work.lacamotchut.url}
                    onChange={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, lacamotchut: { ...prev.work.lacamotchut, url: e.target.value } } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Link Kênh Búp Sky Cuisine:</label>
                  <input
                    type="text"
                    value={siteData.work.bupsky.url}
                    onChange={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, bupsky: { ...prev.work.bupsky, url: e.target.value } } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Link Kênh Datbike Hồng Phương:</label>
                  <input
                    type="text"
                    value={siteData.work.datbike.url}
                    onChange={(e) => setSiteData(prev => ({ ...prev, work: { ...prev.work, datbike: { ...prev.work.datbike, url: e.target.value } } }))}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
              </div>
            </div>

            {/* Save Buttons at bottom of form */}
            <div className="pt-6 border-t border-[#ECE4D8] flex items-center justify-between">
              <span className="text-xs text-[#635952]">Nhấn nút Lưu để lưu lại vĩnh viễn vào trình duyệt.</span>
              <button
                type="button"
                onClick={handleSave}
                className="btn btn-primary"
              >
                <Save className="w-4 h-4" />
                <span>Lưu Toàn Bộ (Save)</span>
              </button>
            </div>

          </div>
        )}

      </main>

      {/* WordPress Style Block Inserter Modal */}
      <AddBlockModal
        isOpen={isBlockModalOpen}
        onClose={() => setIsBlockModalOpen(false)}
        onSelectType={handleSelectBlockType}
      />

    </div>
  );
}
