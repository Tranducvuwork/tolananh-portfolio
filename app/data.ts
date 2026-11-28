export interface VideoItem {
  id: string;
  title: string;
  category: 'genz' | 'fnb' | 'bupsky' | 'datbike' | 'lifestyle';
  channel: string;
  channelHandle: string;
  avatar: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  duration: string;
  hook: string;
  description: string;
  aspectRatio: string;
  capcutTemplate?: string;
  tags: string[];
  gradient: string;
  videoSrc?: string;
  driveLink?: string;
  tiktokUrl?: string;
  highlights: string[];
}

export interface TikTokChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: string;
  badge: string;
  desc: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  tag: string;
  themeColor: string;
}

export const tiktokChannels: TikTokChannel[] = [
  {
    id: 'toadogenz',
    name: 'Toạ Độ Gen Z',
    handle: '@toadogenz',
    url: 'https://www.tiktok.com/@toadogenz?_r=1&_t=ZS-9BjNMmzw5vc',
    category: 'Gen Z Trends & Events',
    badge: '1.129 Follower • 8.729 Thích',
    desc: 'Bản đồ ăn – chơi – chill của Gen Z • Update toạ độ hot & trend mới • Ăn | Chill | Chơi | Check-in.',
    highlights: [
      'Dương Domic live siêu đỉnh tại The World of Heineken (66.6K views)',
      'HIEUTHUHAI biểu diễn "Không thể say" tại The World of Heineken (40.5K views)',
      'Charlie Puth live tại The World of Heineken (14.0K views)',
      'Review ẩm thực & check-in: NShop (6.3K views), Sukiya, Marukame Udon, Yakimono'
    ],
    metrics: [
      { value: '66.6K', label: 'Top Video Heineken' },
      { value: '8.729', label: 'Lượt thích kênh' },
      { value: '1.129', label: 'Follower thực tế' },
    ],
    tag: 'Gen Z & Trends',
    themeColor: '#D35400'
  },
  {
    id: 'lacamotchut',
    name: 'La Cà Một Chút',
    handle: '@la.camotchut',
    url: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM',
    category: 'F&B Cafe & Lifestyle',
    badge: '196 Follower • 4.496 Thích',
    desc: 'Review cafe, tiệm bánh và không gian trải nghiệm F&B nhẹ nhàng, thư thái.',
    highlights: [
      'GEM CAFE — Không gian sang trọng (73.1K views)',
      'A Little Christmas GO GELATO — Mùa Noel (31.6K views)',
      'Con đường lá thu YORI MATCHA & COFFEE Trường Sa (21.1K views)',
      'A Little Studio (15.8K views), Bean There Cafe (13.8K views) & Gem Center (4.2K views)'
    ],
    metrics: [
      { value: '73.1K', label: 'Top Video Gem Cafe' },
      { value: '31.6K', label: 'Go Gelato Noel' },
      { value: '4.496', label: 'Lượt thích kênh' },
    ],
    tag: 'F&B & Lifestyle',
    themeColor: '#8C5A3C'
  },
  {
    id: 'bupsky',
    name: 'Búp Sky Cuisine',
    handle: '@bupskycuisine',
    url: 'https://www.tiktok.com/@bupskycuisine',
    category: 'Rooftop Dining & Event F&B',
    badge: '838 Follower • 34.1K Thích',
    desc: 'Nhà hàng Rooftop Tầng 10 (65-69 Nguyễn Thái Bình, Q.1) cách Chợ Bến Thành 4 phút đi bộ. Sáng tạo nội dung TikTok F&B: review không gian tiệc sinh nhật, view ngắm hoàng hôn Sài Gòn và trải nghiệm ẩm thực cao cấp.',
    highlights: [
      'Sinh nhật và các dịp đặc biệt, để Búp lo! (133.1K lượt xem)',
      'Khoảnh khắc sự kiện & tiệc âm nhạc (109K lượt xem)',
      'Nhà hàng Rooftop cách Chợ Bến Thành 4 phút đi bộ (37.7K lượt xem)',
      'World Luxury Restaurant Awards & Sunset Cocktail Buy 1 Get 1'
    ],
    metrics: [
      { value: '133.1K', label: 'Top video tiệc sinh nhật' },
      { value: '109K', label: 'Clip tiệc âm nhạc' },
      { value: '34.1K', label: 'Lượt thích kênh' },
    ],
    tag: 'F&B Rooftop & Events',
    themeColor: '#1E3A8A'
  },
  {
    id: 'datbike',
    name: 'Dat.bike Hồng Phương',
    handle: '@datbikehongphuong',
    url: 'https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9Blz0Px6Pma',
    category: 'Xe Điện Công Nghệ & Green Mobility',
    badge: '1.253 Follower • 6.148 Thích',
    desc: 'Kênh truyền thông dòng xe máy điện thông minh Dat.bike tại đại lý Hồng Phương (38 Nguyễn Thị Định, P. Bình Trưng). Nội dung tập trung vào công nghệ bứt tốc, sạc nhanh, trải nghiệm lái xe xanh và thu xăng đổi điện.',
    highlights: [
      'Vì sao xe hiện "Cụ rùa" & cách xử lý tại Dat Bike Hồng Phương (27.7K views)',
      'Mẫu xe điện Dat Bike Era cập bến & Quantum S1 phối màu (5.2K & 3.4K views)',
      'Thu xe xăng đổi xe điện thủ tục nhanh gọn (3.8K views)'
    ],
    metrics: [
      { value: '27.7K', label: 'Top Video Cụ Rùa' },
      { value: '1.253', label: 'Follower thực tế' },
      { value: '6.148', label: 'Lượt thích kênh' },
    ],
    tag: 'Tech & Mobility',
    themeColor: '#1A535C'
  }
];

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  role: string;
  timeline: string;
  metrics: { value: string; label: string }[];
  overview: string;
  challenge: string;
  solution: string;
  contentPillars: { title: string; desc: string; icon: string }[];
  deliverables: string[];
  externalUrl?: string;
  driveUrl?: string;
  badge: string;
  slideImage?: string;
  featuredVideos?: VideoItem[];
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  rank?: string;
  verifyUrl?: string;
  verifyId?: string;
  imageUrl: string;
  signatory: string;
  description: string;
  badge: string;
}

export const certificates: Certificate[] = [
  {
    id: 'qcc-social-media',
    name: 'Social Media Starter',
    organization: 'QCC Mastery Hub',
    date: '28/10/2025',
    rank: 'EXCELLENT (Xuất Sắc)',
    signatory: 'Ms. Nguyen Thi Xuan Quynh — Founder & CEO',
    imageUrl: '/images/certificates/cert_qcc_social_media.jpg',
    badge: 'Marketing Social Media',
    description: 'Chứng nhận hoàn thành xuất sắc khóa đào tạo Social Media Starter tại QCC Mastery Hub: nghiên cứu insight công chúng mục tiêu, xây dựng chiến lược truyền thông mạng xã hội và phát triển kênh short-form video đa nền tảng.'
  },
  {
    id: 'colorme-photoshop',
    name: 'Photoshop Digital Design',
    organization: 'ColorME Skill Training School',
    date: '26/06/2025',
    verifyId: '146641',
    verifyUrl: 'http://colorme.vn/digitalcertificate/146641',
    signatory: 'Bui Quang Son — Chief Academy Officer',
    imageUrl: '/images/certificates/cert_colorme_photoshop.jpg',
    badge: 'Design & Visual Branding',
    description: 'Chứng chỉ kỹ thuật số khóa học Photoshop tại ColorME: thành thạo xử lý ấn phẩm đồ họa quảng cáo, bố cục thị giác, retouch hình ảnh và typography ứng dụng trên mạng xã hội.'
  }
];

export const profileData = {
  name: 'Tô Lan Anh',
  title: 'Social Media & Creative Planner',
  subtitle: 'Content Marketing | F&B & Lifestyle TikTok Specialist',
  birthday: '24.02.2004',
  phone: '0942.077.335',
  email: 'lananhto2402@gmail.com',
  address: 'Lê Tấn Bê, Phường An Lạc, Bình Tân, TP.HCM',
  cvPdf: '/ToLanAnh_CV.pdf',
  portfolioPdf: '/Portfolio_ToLanAnh.pdf',
  avatar: '/images/avatar_cafe.jpg',
  portrait: '/images/lananh_cafe_portrait.jpg',
  studentPhoto: '/images/lananh_vanlang_aodai.jpg',
  intro: 'Tôi là Tô Lan Anh, sinh viên chuyên ngành Quan hệ Công chúng - Truyền thông (PR) tại Đại Học Văn Lang (2022 - 2026), định hướng phát triển chuyên sâu thành một Creative Planner & Social Media Specialist. Với tư duy sáng tạo nhạy bén, tôi trực tiếp lên ý tưởng kịch bản và sản xuất nội dung đa dạng trên nền tảng TikTok: từ kênh xu hướng giới trẻ Toạ Độ Gen Z (@toadogenz), kênh trải nghiệm ẩm thực tone Be ấm áp La Cà Một Chút (@la.camotchut), đến kênh công nghệ xe điện thông minh Datbike Hồng Phương (@datbikehongphuong), kết hợp năng lực hoạch định chiến dịch truyền thông tích hợp (IMC).',
  goals: {
    shortTerm: 'Làm chủ các quy trình sản xuất nội dung short-form chuyên sâu, tối ưu hóa thuật toán phân phối đa kênh và nâng cao hiệu quả tương tác tự nhiên.',
    longTerm: 'Trở thành Creative Planner chuyên nghiệp, chủ trì các chiến dịch truyền thông tích hợp (IMC) và dẫn dắt đội ngũ sáng tạo nội dung.'
  },
  keyMetrics: [
    { value: '3+', label: 'Kênh TikTok đa dạng chủ đề' },
    { value: '100K+', label: 'Lượt tiếp cận người xem' },
    { value: '100%', label: 'Tự biên kịch & dựng CapCut' },
    { value: 'Văn Lang', label: 'Cử nhân Quan hệ Công chúng' },
  ],
  education: [
    {
      school: 'Đại Học Văn Lang',
      major: 'Quan Hệ Công Chúng - Truyền Thông (PR)',
      period: '2022 - 2026',
      badge: 'Đại học chính quy',
      details: 'Tích lũy kiến thức nền tảng vững chắc về nghiên cứu công chúng, định vị thương hiệu, lập kế hoạch truyền thông tích hợp (IMC), quan hệ báo chí và kỹ năng thuyết trình pitching chuyên nghiệp.',
    },
    {
      school: 'Học viện Thiết kế ColorMe',
      major: 'Photoshop Basic Course',
      period: '2025',
      badge: 'Chứng chỉ thiết kế',
      details: 'Được chứng nhận năng lực thiết kế đồ họa cơ bản, xử lý ảnh quảng cáo, bố cục thị giác và typography ứng dụng trên mạng xã hội.',
    }
  ],
  experience: [
    {
      role: 'Content Creator (Freelance) & F&B Media Planner',
      company: 'Búp Sky Cuisine (Nhà Hàng Rooftop Q.1)',
      period: '02/2026 – Hiện tại',
      focus: 'Xây dựng kênh TikTok @bupskycuisine, video viral tiệc riêng & sự kiện hoàng hôn',
      points: [
        'Lên ý tưởng kịch bản, quay dựng video TikTok cho nhà hàng Rooftop cao cấp tại Tầng 10, 65-69 Nguyễn Thái Bình, Q.1 (cách Chợ Bến Thành 4 phút).',
        'Sản xuất các video đạt lượt xem ấn tượng: Video "Không gian & tiệc riêng - Sinh nhật và các dịp đặc biệt" đạt 132.9K views; Video "Khoảnh khắc sự kiện & tiệc âm nhạc" đạt 109K views; Video "Khám phá địa điểm Rooftop Q.1" đạt 37.6K views.',
        'Xây dựng kênh TikTok doanh nghiệp đạt mốc 34.1K lượt thích (838 follower) và thúc đẩy chuyển đổi tin nhắn đặt bàn tiệc sinh nhật, sự kiện.'
      ]
    },
    {
      role: 'Social Media Coordinator',
      company: 'Phat-Thuy Company (DN Vận Tải Xe Khách Phát)',
      period: '2024 - 2025',
      focus: 'Vận hành fanpage, sáng tạo nội dung & bài đăng tuyển dụng',
      points: [
        'Quản lý nội dung và trực tiếp vận hành kênh Facebook Fanpage của doanh nghiệp.',
        'Lên ý tưởng, thiết kế hình ảnh và viết copywriting cho toàn bộ tuyến bài đăng thường nhật và mùa cao điểm lễ/Tết.',
        'Phân tích hiệu quả bài đăng qua Meta Business Suite, tối ưu chiến lược nội dung giúp tăng tương tác và thu hút khách hàng đặt vé mới.',
      ]
    },
    {
      role: 'Social Media & Media Publications',
      company: 'Suzuki Hồng Phương',
      period: '2024 - 2025',
      focus: 'Quản lý & đăng bài trên nền tảng Facebook & Instagram',
      points: [
        'Trực tiếp quản lý và đăng tải nội dung truyền thông cho đại lý ô tô / xe máy Suzuki Hồng Phương.',
        'Thiết kế ấn phẩm truyền thông, thông báo khuyến mãi, giới thiệu xe và dịch vụ bảo dưỡng.',
        'Tương tác và hỗ trợ khách hàng tiềm năng gửi tin nhắn quan tâm các dòng xe.',
      ]
    },
    {
      role: 'Promotional Brand Ambassador (PG)',
      company: 'Đại sứ quảng bá thương hiệu tại sự kiện',
      period: '2022 - 2025',
      focus: 'Truyền thông trực tiếp, tương tác khách hàng & chăm sóc điểm bán',
      points: [
        'Đại diện giới thiệu và quảng bá hình ảnh sản phẩm/thương hiệu tại các sự kiện lớn, trung tâm thương mại và siêu thị.',
        'Giao tiếp trực tiếp với khách hàng, lắng nghe nhu cầu và truyền tải thông điệp tính năng sản phẩm một cách khéo léo.',
        'Rèn luyện kỹ năng thuyết phục, giải quyết tình huống thực tế và thấu hiểu tâm lý người tiêu dùng đa thế hệ.',
      ]
    },
    {
      role: 'Pitching Project Leader (Winner)',
      company: 'TNHH Hải Phi Company (Dự án kiến tập)',
      period: '06/2025',
      focus: 'Chiến dịch truyền thông thương hiệu TV HXY & TikTok Channel',
      points: [
        'Thắng Pitching dự án kiến tập với ý tưởng truyền thông sáng tạo cho dòng tivi HXY.',
        'Chủ trì nghiên cứu thị trường, phân tích insight khách hàng mục tiêu và xây dựng concept chiến dịch.',
        'Trực tiếp thiết kế slide thuyết trình và pitch ý tưởng thành công trước ban giám đốc doanh nghiệp.',
      ]
    }
  ],
  skills: {
    creative: [
      'Creative Planning & Concept',
      'TikTok Scriptwriting & Storytelling',
      'Video Editing (CapCut Mobile & Desktop)',
      'Social Visual Branding (Canva & Photoshop)',
      'F&B Aesthetic Lifestyle Photography',
      'Market & Audience Insight Research',
    ],
    technical: [
      { name: 'CapCut', level: 'Thành thạo (Dựng video, hiệu ứng, âm thanh, trend)' },
      { name: 'Adobe Photoshop', level: 'Chứng chỉ ColorMe (Chỉnh sửa ảnh, layout, mockup)' },
      { name: 'Canva Pro', level: 'Thành thạo (Poster, feed design, template)' },
      { name: 'Facebook Page & Meta Suite', level: 'Vận hành, kiểm duyệt, theo dõi chỉ số' },
      { name: 'TikTok Studio & Analytics', level: 'Lên lịch, tối ưu SEO TikTok, đọc metric' },
      { name: 'Google Workspace', level: 'Docs, Sheets, Slides, Drive phối hợp' },
    ],
    soft: [
      'Làm việc nhóm & Giao tiếp tinh tế',
      'Thuyết trình & Pitching ý tưởng',
      'Tư duy giải quyết vấn đề linh hoạt',
      'Nhạy bén với xu hướng mạng xã hội (Trend Sensitivity)',
    ]
  }
};

export const featuredVideos: VideoItem[] = [
  // ==========================================
  // TOẠ ĐỘ GEN Z (@toadogenz)
  // ==========================================
  {
    id: 'genz-1',
    title: 'Sự kiện The World of Heineken — Dương Domic live siêu đỉnh',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '⚡',
    views: '66.6K',
    likes: '5.2K',
    comments: '210',
    shares: '480',
    duration: '00:35',
    hook: 'Dương Domic live siêu đỉnh tại đại nhạc hội The World of Heineken',
    description: 'Khoảnh khắc bùng nổ của nam ca sĩ Dương Domic tại sự kiện âm nhạc Heineken với góc máy cận sân khấu, nhịp dựng giật beat sôi động bắt trọn năng lượng giới trẻ.',
    aspectRatio: '9:16',
    capcutTemplate: 'Music Beat Cut',
    tags: ['#ToaDoGenZ', '#DuongDomic', '#Heineken', '#TheWorldOfHeineken', '#LiveMusic'],
    gradient: 'from-orange-600 to-amber-900',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7684842694266342663',
    highlights: ['Video đã ghim đạt 66.6K lượt xem', 'Bắt trọn không khí âm nhạc bùng nổ', 'Tương tác thảo luận sôi nổi của cộng đồng fan'],
  },
  {
    id: 'genz-2',
    title: 'Sự kiện The World of Heineken — HIEUTHUHAI biểu diễn "Không thể say"',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '⚡',
    views: '40.5K',
    likes: '3.8K',
    comments: '180',
    shares: '320',
    duration: '00:40',
    hook: 'HIEUTHUHAI bùng nổ sân khấu The World of Heineken với bản hit Không thể say',
    description: 'Bắt trọn khoảnh khắc visual và màn trình diễn cuốn hút của HIEUTHUHAI, cắt dựng nhịp nhàng theo giai điệu nhạc và tạo làn sóng tương tác lớn.',
    aspectRatio: '9:16',
    capcutTemplate: 'Stage Viral Flow',
    tags: ['#ToaDoGenZ', '#HIEUTHUHAI', '#KhongTheSay', '#Heineken', '#ConcertVibes'],
    gradient: 'from-amber-600 to-red-900',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7684847992934796562',
    highlights: ['Video đã ghim đạt 40.5K lượt xem', 'Cắt dựng nhịp beat chuẩn trend TikTok', 'Bắt sóng idol giới trẻ cực hot'],
  },
  {
    id: 'genz-3',
    title: 'Sự kiện The World of Heineken — Charlie Puth live',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '⚡',
    views: '14.0K',
    likes: '1.2K',
    comments: '95',
    shares: '160',
    duration: '00:30',
    hook: 'Charlie Puth live tại The World of Heineken cực bùng nổ',
    description: 'Thước phim ghi lại phần trình diễn của ngôi sao quốc tế Charlie Puth trên sân khấu The World of Heineken, âm thanh sống động và góc quay đẹp mắt.',
    aspectRatio: '9:16',
    capcutTemplate: 'International Star Live',
    tags: ['#ToaDoGenZ', '#CharliePuth', '#HeinekenLive', '#InternationalConcert'],
    gradient: 'from-red-600 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7685254303287725320',
    highlights: ['Video đã ghim đạt 14.0K lượt xem', 'Góc quay cận cảnh thần tượng quốc tế', 'Tỷ lệ chia sẻ tự nhiên cao'],
  },
  {
    id: 'genz-4',
    title: 'MARUKAME UDON — Ghé Marukame ăn gì?',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '🍜',
    views: '734',
    likes: '68',
    comments: '12',
    shares: '8',
    duration: '00:32',
    hook: 'Bản đồ ăn uống Gen Z: Ghé Marukame Udon chọn combo gì vừa ngon vừa no?',
    description: 'Gợi ý món ngon chuẩn vị tại Marukame Udon, review cận cảnh các món mì udon nóng hổi cùng tempura giòn rụm.',
    aspectRatio: '9:16',
    capcutTemplate: 'Foodie Guide',
    tags: ['#ToaDoGenZ', '#MarukameUdon', '#FoodReview', '#AnGiHomNay'],
    gradient: 'from-amber-700 to-stone-900',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7706507152290254087',
    highlights: ['Bản đồ ăn – chơi – chill của Gen Z', 'Góc quay món ăn hấp dẫn', 'Đánh giá chân thực món ngon'],
  },
  {
    id: 'genz-5',
    title: 'Tối nay ăn gì YAKIMONO?',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '🥩',
    views: '693',
    likes: '55',
    comments: '9',
    shares: '6',
    duration: '00:35',
    hook: 'Thèm thịt nướng buffet chuẩn Nhật thì ghé ngay Yakimono',
    description: 'Trải nghiệm buffet nướng lẩu Yakimono với menu thịt bò chất lượng, không gian trẻ trung phù hợp tụ tập bạn bè.',
    aspectRatio: '9:16',
    capcutTemplate: 'BBQ Vibes',
    tags: ['#ToaDoGenZ', '#Yakimono', '#BuffetNuong', '#FoodieSaigon'],
    gradient: 'from-orange-700 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7708354575878737170',
    highlights: ['Trải nghiệm ẩm thực cùng bạn bè', 'Menu buffet nướng hấp dẫn', 'Góc quay cận cảnh xèo xèo bắt mắt'],
  },
  {
    id: 'genz-6',
    title: 'Recap sự kiện trải nghiệm xe điện Dat Bike tại Gigamall',
    category: 'genz',
    channel: 'Toạ Độ Gen Z',
    channelHandle: '@toadogenz',
    avatar: '⚡',
    views: '85',
    likes: '15',
    comments: '4',
    shares: '5',
    duration: '00:45',
    hook: 'Không khí sôi động ngày hội trải nghiệm xe điện Dat Bike tại Gigamall',
    description: 'Tổng hợp các hoạt động trải nghiệm thực tế xe điện Dat Bike, giao lưu khách hàng và không khí tưng bừng tại trung tâm thương mại Gigamall.',
    aspectRatio: '9:16',
    capcutTemplate: 'Event Recap Beat',
    tags: ['#ToaDoGenZ', '#DatBike', '#Gigamall', '#RecapEvent', '#XeDien'],
    gradient: 'from-teal-700 to-zinc-900',
    tiktokUrl: 'https://www.tiktok.com/@toadogenz/video/7705759245626510599',
    highlights: ['Ghi lại toàn cảnh sự kiện trực tiếp', 'Trải nghiệm lái thử thực tế xe điện', 'Giao lưu cộng đồng người trẻ mê công nghệ'],
  },

  // ==========================================
  // LA CÀ MỘT CHÚT (@la.camotchut)
  // ==========================================
  {
    id: 'lcca-1',
    title: 'GEM CAFE — Chiêm ngưỡng không gian sang trọng',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '☕',
    views: '73.1K',
    likes: '6.8K',
    comments: '310',
    shares: '540',
    duration: '00:45',
    hook: 'Chiêm ngưỡng không gian cafe sang trọng đẳng cấp tại Gem Cafe',
    description: 'Góc quay ánh sáng vàng ấm áp, đèn lồng nghệ thuật thả trần và phong cách kiến trúc tinh tế tại Gem Cafe, thước phim mang lại cảm giác thư thái và sang trọng.',
    aspectRatio: '9:16',
    capcutTemplate: 'Luxury Cafe Aesthetic',
    tags: ['#LaCaMotChut', '#GemCafe', '#CafeSangTrong', '#AestheticVibes'],
    gradient: 'from-amber-700 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut/video/7699323323083279624',
    highlights: ['Video đã ghim đạt 73.1K lượt xem', 'Ánh sáng và không gian kiến trúc độc đáo', 'Tỷ lệ lưu video để ghé trải nghiệm cao'],
  },
  {
    id: 'lcca-2',
    title: 'A Little Christmas: GO GELATO — Lạc vào xứ giữa mùa Noel',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '🍨',
    views: '31.6K',
    likes: '3.4K',
    comments: '185',
    shares: '290',
    duration: '00:40',
    hook: 'Không gian giáng sinh cổ tích ngập tràn tuyết trắng tại Go Gelato',
    description: 'Review góc sống ảo mùa Noel tại Go Gelato với cây thông tuyết, gấu trắng bắc cực và những ly kem gelato mát lành ngọt ngào.',
    aspectRatio: '9:16',
    capcutTemplate: 'Christmas Festive Cut',
    tags: ['#LaCaMotChut', '#GoGelato', '#ChristmasInSaigon', '#CheckInNoel'],
    gradient: 'from-red-800 to-emerald-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut/video/7707178501694180615',
    highlights: ['Video đã ghim đạt 31.6K lượt xem', 'Không khí lễ hội lung linh ấm áp', 'Hàng trăm bình luận hỏi thăm địa chỉ'],
  },
  {
    id: 'lcca-3',
    title: 'Con đường lá thu: YORI MATCHA & COFFEE Trường Sa',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '🍵',
    views: '21.1K',
    likes: '2.1K',
    comments: '120',
    shares: '180',
    duration: '00:38',
    hook: 'Con đường lá thu lãng mạn ngắm bờ kè Trường Sa tại Yori Matcha & Coffee',
    description: 'Thưởng thức matcha nguyên chất tại Yori Matcha & Coffee Trường Sa, không gian ban công ngắm lá vàng rơi rợp bóng bên bờ kênh thanh bình.',
    aspectRatio: '9:16',
    capcutTemplate: 'Matcha Autumn Walk',
    tags: ['#LaCaMotChut', '#YoriMatcha', '#CafeTruongSa', '#MatchaLover'],
    gradient: 'from-amber-800 to-stone-900',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut/video/7688327313854942471',
    highlights: ['Video đã ghim đạt 21.1K lượt xem', 'Màu phim hoài niệm bên con đường rợp bóng', 'Review chi tiết vị matcha chuẩn vị'],
  },
  {
    id: 'lcca-4',
    title: 'A Winter Night: GEM CENTER — Lạc vào rừng tuyết giữa Sài Gòn',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '❄️',
    views: '4.2K',
    likes: '410',
    comments: '35',
    shares: '48',
    duration: '00:35',
    hook: 'Rừng tuyết lung linh mùa đông huyền diệu ngay tại Gem Center',
    description: 'Check-in trải nghiệm không gian sự kiện mùa đông ánh xanh băng giá lộng lẫy, âm nhạc giáng sinh du dương tại Gem Center.',
    aspectRatio: '9:16',
    capcutTemplate: 'Winter Wonderland',
    tags: ['#LaCaMotChut', '#GemCenter', '#WinterNight', '#RungTuyet'],
    gradient: 'from-blue-900 to-indigo-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM',
    highlights: ['4.204 lượt xem thực tế trên kênh', 'Khung cảnh trang hoàng lộng lẫy', 'Góc quay điện ảnh ấn tượng'],
  },
  {
    id: 'lcca-5',
    title: 'BEAN THERE CAFE — Khu vườn cà phê xanh mướt trốn trong con hẻm',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '🌿',
    views: '13.8K',
    likes: '99',
    comments: '2',
    shares: '114',
    duration: '00:24',
    hook: 'Ngay tại Sài Gòn lại có 1 quán cà phê sân vườn xanh mướt chill đến vậy',
    description: 'Khu vườn cà phê ngập tràn cây xanh và ánh sáng tự nhiên với cả không gian indoor & outdoor thoáng đãng tại Bean There Cafe, lý tưởng để đi chill, hẹn hò hay ngồi làm việc.',
    aspectRatio: '9:16',
    capcutTemplate: 'Green Garden Chill',
    tags: ['#LaCaMotChut', '#BeanThereCafe', '#CafeSanVuon', '#CheckInSaigon'],
    gradient: 'from-emerald-800 to-teal-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut/video/7691307280930901255',
    highlights: ['13.8K lượt xem thực tế trên kênh', 'Không gian sân vườn xanh mướt ngập nắng', 'Lý tưởng để chill, hẹn hò & làm việc'],
  },
  {
    id: 'lcca-6',
    title: 'A LITTLE STUDIO — Tiệm cafe sách vibe thơ như câu chuyện cổ tích',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '📖',
    views: '15.8K',
    likes: '772',
    comments: '16',
    shares: '149',
    duration: '00:34',
    hook: 'Tiệm cafe sách nhỏ xinh mang vibe thơ mộng như bước ra từ câu chuyện cổ tích',
    description: 'Một góc nhỏ cho ngày muốn sống chậm tại A Little Studio — tiệm cafe sách ấm cúng với kệ gỗ ngập tràn sách, nắng ghé bên khung cửa cùng bánh croissant và trà trái cây mát lành.',
    aspectRatio: '9:16',
    capcutTemplate: 'Storybook Vintage',
    tags: ['#LaCaMotChut', '#ALittleStudio', '#CafeSach', '#VibeCoTich'],
    gradient: 'from-amber-800 to-rose-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut/video/7700930019056454930',
    highlights: ['15.8K lượt xem & 269 lượt lưu địa điểm', 'Không gian tiệm sách cổ tích ấm cúng', 'Góc sống chậm ngập nắng bên khung cửa'],
  },

  // ==========================================
  // BÚP SKY CUISINE (@bupskycuisine)
  // ==========================================
  {
    id: 'bupsky-1',
    title: 'Sinh nhật và các dịp đặc biệt, để Búp lo!',
    category: 'bupsky',
    channel: 'Búp Sky Cuisine',
    channelHandle: '@bupskycuisine',
    avatar: '🎂',
    views: '133.1K',
    likes: '11.5K',
    comments: '480',
    shares: '890',
    duration: '00:45',
    hook: 'Rooftop tầng 10 view triệu đô ngắm toàn cảnh Sài Gòn cho bữa tiệc sinh nhật trong mơ',
    description: 'Video viral giới thiệu dịch vụ tiệc sinh nhật, kỷ niệm và gặp gỡ riêng tư trên rooftop với bàn tiệc nến hoa lung linh và góc ngắm Bitexco.',
    aspectRatio: '9:16',
    capcutTemplate: 'Rooftop Celebration',
    tags: ['#BupSkyCuisine', '#TiecSinhNhat', '#RooftopQ1', '#ViewTrieuDo', '#HenHoLangMan'],
    gradient: 'from-blue-900 to-indigo-950',
    tiktokUrl: 'https://www.tiktok.com/@bupskycuisine/photo/7554729533077736722',
    highlights: ['Bài đăng đã ghim đạt 133.1K lượt xem', 'Setup bàn tiệc riêng tư sang trọng', 'Dẫn đầu lượng khách nhắn tin đặt bàn'],
  },
  {
    id: 'bupsky-2',
    title: 'Khoảnh khắc đêm nhạc & tiệc sự kiện sôi động',
    category: 'bupsky',
    channel: 'Búp Sky Cuisine',
    channelHandle: '@bupskycuisine',
    avatar: '🎤',
    views: '109K',
    likes: '9.2K',
    comments: '360',
    shares: '650',
    duration: '00:42',
    hook: 'Không khí sự kiện vui nhộn & tiệc tùng rộn rã tại Búp Sky Cuisine',
    description: 'Ghi lại trọn vẹn cảm xúc sôi nổi và khoảnh khắc gắn kết trên không gian rooftop Búp Sky Cuisine.',
    aspectRatio: '9:16',
    capcutTemplate: 'Live Music Night',
    tags: ['#BupSkyCuisine', '#LiveMusic', '#DemNhacRooftop', '#PartyTime'],
    gradient: 'from-purple-900 to-slate-900',
    tiktokUrl: 'https://www.tiktok.com/@bupskycuisine/video/7477064447169711378',
    highlights: ['Video đã ghim đạt 109K lượt xem', 'Bắt trọn không khí sự kiện sống động', 'Tương tác cực cao từ tệp khách hàng trẻ'],
  },
  {
    id: 'bupsky-3',
    title: 'Nhà hàng Rooftop cách Chợ Bến Thành 4 phút đi bộ',
    category: 'bupsky',
    channel: 'Búp Sky Cuisine',
    channelHandle: '@bupskycuisine',
    avatar: '🌆',
    views: '37.7K',
    likes: '3.1K',
    comments: '145',
    shares: '230',
    duration: '00:38',
    hook: 'Tọa độ ẩm thực rooftop đắc địa ngay trung tâm Q.1 chỉ cách Chợ Bến Thành 4 phút',
    description: 'Chỉ dẫn đường đi và không gian thưởng thức ẩm thực sang trọng tại Tầng 10, 65-69 Nguyễn Thái Bình, Q.1.',
    aspectRatio: '9:16',
    capcutTemplate: 'Location Guide',
    tags: ['#BupSkyCuisine', '#NhaHangRooftop', '#BenThanh', '#AmThucQ1'],
    gradient: 'from-indigo-900 to-stone-900',
    tiktokUrl: 'https://www.tiktok.com/@bupskycuisine/video/7434494891599727879',
    highlights: ['Video đã ghim đạt 37.7K lượt xem', 'Vị trí đắc địa ngay trung tâm thành phố', 'Góc view ngắm hoàng hôn cực đẹp'],
  },

  // ==========================================
  // DAT.BIKE HỒNG PHƯƠNG (@datbikehongphuong)
  // ==========================================
  {
    id: 'db-1',
    title: 'Nguyên nhân chính khiến xe hiện "Cụ rùa" & cách xử lý tại Dat Bike Hồng Phương',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🐢',
    views: '27.7K',
    likes: '2.8K',
    comments: '165',
    shares: '240',
    duration: '00:35',
    hook: 'Nguyên nhân chính khiến xe hiện "Cụ rùa" là gì? Cùng tìm hiểu và xem cách xử lý!',
    description: 'Video giải đáp thực tế thắc mắc người dùng xe máy điện Dat Bike khi gặp biểu tượng "Cụ rùa", thu hút lượng tương tác và lưu video cao.',
    aspectRatio: '9:16',
    capcutTemplate: 'Viral Story Cut',
    tags: ['#DatbikeHongPhuong', '#DatBike', '#CuRua', '#XeMayDien', '#ViralVideo'],
    gradient: 'from-amber-700 to-slate-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7693956733374401800',
    highlights: ['Video đã ghim đạt 27.7K lượt xem', 'Giải đáp kỹ thuật trực quan dễ hiểu', 'Tương tác thảo luận sôi nổi của cộng đồng'],
  },
  {
    id: 'db-2',
    title: 'Dat Bike Era chính thức cập bến showroom Dat.bike Hồng Phương',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🛵',
    views: '5.2K',
    likes: '620',
    comments: '58',
    shares: '85',
    duration: '00:40',
    hook: 'Mẫu xe máy điện được mong chờ nhất Dat Bike Era đã có mặt tại showroom Hồng Phương',
    description: 'Trải nghiệm thực tế khả năng vận hành êm ái, bứt tốc mạnh mẽ và kiểu dáng hiện đại của dòng xe điện Dat Bike trên phố.',
    aspectRatio: '9:16',
    capcutTemplate: 'Speed Dynamic Flow',
    tags: ['#DatbikeHongPhuong', '#DatBikeEra', '#XeDienThongMinh', '#SpeedTest'],
    gradient: 'from-teal-700 to-slate-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7670066126365265160',
    highlights: ['Video đã ghim đạt 5.2K lượt xem', 'Góc máy quay chuyển động mượt mà', 'Cận cảnh thiết kế mới hiện đại'],
  },
  {
    id: 'db-3',
    title: 'Thu xe xăng đổi xe điện như thế nào?',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '⚡',
    views: '3.8K',
    likes: '410',
    comments: '42',
    shares: '68',
    duration: '00:42',
    hook: 'Quy trình thu cũ đổi mới: Từ xe máy xăng sang xe điện Dat Bike tiết kiệm ra sao?',
    description: 'Hướng dẫn cụ thể chính sách hỗ trợ thu đổi xe xăng sang xe máy điện thông minh Dat Bike nhanh gọn, tối ưu chi phí đi lại.',
    aspectRatio: '9:16',
    capcutTemplate: 'Info Guide Clean',
    tags: ['#DatbikeHongPhuong', '#ThuXexangDoiXeDien', '#TietKiemChiPhi', '#SongXanh'],
    gradient: 'from-orange-700 to-stone-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7708934623748836615',
    highlights: ['3.8K lượt xem quan tâm chuyển đổi xe', 'Tư vấn chính sách rõ ràng, minh bạch', 'Thông điệp sống xanh thiết thực'],
  },
  {
    id: 'db-4',
    title: 'Quantum S1 — Khi cá tính không chỉ có một màu (Hồng & Xanh lá)',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🎨',
    views: '3.4K',
    likes: '380',
    comments: '35',
    shares: '50',
    duration: '00:30',
    hook: 'Một bên hồng ngọt ngào nổi bật, một bên xanh lá cá tính đầy cuốn hút tại showroom',
    description: 'Cận cảnh các phiên bản màu sắc cá tính, phong cách hiện đại cho giới trẻ chuộng lối sống xanh và công nghệ.',
    aspectRatio: '9:16',
    capcutTemplate: 'Showcase Color',
    tags: ['#DatbikeHongPhuong', '#MauXeMoi', '#ShowroomTour', '#QuantumS1'],
    gradient: 'from-pink-800 to-zinc-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7673153198751894802',
    highlights: ['Video đã ghim đạt 3.4K lượt xem', 'Góc quay showroom sang trọng, bắt mắt', 'Giới thiệu đa dạng lựa chọn màu sắc'],
  },
  {
    id: 'db-5',
    title: 'Màu xe phù hợp cho người mệnh Hoả & Thổ',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🔥',
    views: '1.4K',
    likes: '145',
    comments: '18',
    shares: '22',
    duration: '00:35',
    hook: 'Chọn màu xe điện Dat Bike theo phong thủy: Gợi ý chuẩn cho mệnh Hoả & Thổ',
    description: 'Tư vấn phong thủy màu sắc xe điện tinh tế, kết hợp thẩm mỹ thời thượng và may mắn, tài lộc cho chủ nhân.',
    aspectRatio: '9:16',
    capcutTemplate: 'Lifestyle Advice',
    tags: ['#DatbikeHongPhuong', '#PhongThuyXe', '#MenhHoa', '#MenhTho'],
    gradient: 'from-red-800 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7710184142381649160',
    highlights: ['Góc nhìn phong thủy kết hợp xe công nghệ', 'Lời khuyên hữu ích cho người mua xe', 'Hình ảnh sắc nét, tương tác tốt'],
  },
  {
    id: 'db-6',
    title: 'So sánh chi tiết xe điện Quantum S1 vs S2',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '⚖️',
    views: '761',
    likes: '92',
    comments: '14',
    shares: '18',
    duration: '00:45',
    hook: 'Đều chạy được 285km, Quantum S1 và S2 có gì khác mà chênh nhau 7 triệu?',
    description: 'Phân tích trực quan thông số, quãng đường di chuyển và trải nghiệm lái giữa 2 phiên bản xe điện hot nhất của Dat Bike.',
    aspectRatio: '9:16',
    capcutTemplate: 'Comparison Pro',
    tags: ['#DatbikeHongPhuong', '#QuantumS1', '#QuantumS2', '#SoSanhXe'],
    gradient: 'from-blue-800 to-slate-950',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7710663898285821202',
    highlights: ['Phân tích khách quan, dễ hiểu', 'Cận cảnh từng chi tiết xe trên khung hình', 'Định hướng phiên bản phù hợp từng nhu cầu'],
  },
  {
    id: 'db-7',
    title: 'Hướng dẫn dựng chống đứng xe điện siêu nhẹ',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '💡',
    views: '635',
    likes: '80',
    comments: '11',
    shares: '15',
    duration: '00:28',
    hook: 'Mẹo trợ lực dựng chân chống đứng xe điện nhẹ nhàng cho các bạn nữ',
    description: 'Chia sẻ kỹ thuật trợ lực dựng chống đứng xe điện Dat Bike đúng tư thế, an toàn và hoàn toàn không tốn sức.',
    aspectRatio: '9:16',
    capcutTemplate: 'Tips & Tricks',
    tags: ['#DatbikeHongPhuong', '#MeoHay', '#DungChongDung', '#HuongDan'],
    gradient: 'from-emerald-800 to-stone-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong?_r=1&_t=ZS-9Blz0Px6Pma',
    highlights: ['Mẹo thực tế được nhiều người tìm kiếm', 'Thao tác mẫu chuẩn xác, rõ ràng', 'Đánh trúng tâm lý người dùng nữ'],
  },
  {
    id: 'db-8',
    title: 'Dẫn đường đến showroom Dat Bike Hồng Phương',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🗺️',
    views: '554',
    likes: '68',
    comments: '8',
    shares: '12',
    duration: '00:32',
    hook: 'Lộ trình di chuyển thuận tiện nhất ghé showroom Dat Bike Hồng Phương lái thử',
    description: 'Hướng dẫn đường đi chi tiết đến 38 Nguyễn Thị Định, P. Bình Trưng để khách hàng dễ dàng ghé trải nghiệm xe máy điện.',
    aspectRatio: '9:16',
    capcutTemplate: 'Location Tour',
    tags: ['#DatbikeHongPhuong', '#ChiDuong', '#Showroom', '#LaiThuXe'],
    gradient: 'from-cyan-800 to-slate-900',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7709077669224271122',
    highlights: ['Điều hướng khách hàng đến điểm bán thực tế', 'Hình ảnh cung đường chân thực, dễ nhận diện', 'Kêu gọi ghé lái thử trải nghiệm'],
  },
  {
    id: 'db-9',
    title: 'Recap sự kiện trải nghiệm xe điện Datbike tại Gigamall',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '🎉',
    views: '461',
    likes: '55',
    comments: '7',
    shares: '9',
    duration: '00:38',
    hook: 'Toàn cảnh không khí sự kiện lái thử xe điện Dat Bike náo nhiệt tại Gigamall',
    description: 'Ghi lại không khí sôi động, lượng khách hàng đăng ký trải nghiệm lái thử và nhận quà tại trung tâm thương mại Gigamall.',
    aspectRatio: '9:16',
    capcutTemplate: 'Event Launch Beat',
    tags: ['#DatbikeHongPhuong', '#SuKienGigamall', '#LaiThuXeDien', '#CongNgheViet'],
    gradient: 'from-teal-800 to-slate-950',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7705755017273216264',
    highlights: ['Ghi lại toàn cảnh sự kiện trực tiếp', 'Trải nghiệm lái thử thực tế xe điện', 'Giao lưu cộng đồng người trẻ mê công nghệ'],
  },
  {
    id: 'db-10',
    title: 'Tư vấn thủ tục mua xe trả góp nhanh gọn',
    category: 'datbike',
    channel: 'Dat.bike Hồng Phương',
    channelHandle: '@datbikehongphuong',
    avatar: '📋',
    views: '367',
    likes: '42',
    comments: '6',
    shares: '8',
    duration: '00:35',
    hook: 'Thủ tục mua xe máy điện trả góp cần những giấy tờ gì và duyệt bao lâu?',
    description: 'Giải đáp nhanh gọn các bước xét duyệt hồ sơ trả góp mua xe điện Dat Bike nhanh chóng trong ngày tại cửa hàng Hồng Phương.',
    aspectRatio: '9:16',
    capcutTemplate: 'Consulting Pro',
    tags: ['#DatbikeHongPhuong', '#TraGop', '#TuVanXe', '#XeMayDien'],
    gradient: 'from-stone-800 to-zinc-950',
    tiktokUrl: 'https://www.tiktok.com/@datbikehongphuong/video/7709529839652457746',
    highlights: ['Giải đáp câu hỏi lớn nhất khi mua xe', 'Thủ tục rõ ràng, giảm rào cản tài chính', 'Tối ưu chuyển đổi khách hàng'],
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'bup-sky-cuisine',
    title: 'Búp Sky Cuisine — Định Vị Nhà Hàng Rooftop Q.1 Bằng Video Trải Nghiệm & Sự Kiện Viral',
    subtitle: 'Chiến dịch TikTok F&B: Khám phá không gian rooftop ngắm hoàng hôn và dịch vụ tổ chức tiệc riêng tư',
    category: 'F&B TikTok & Hospitality Video Production',
    client: 'Búp Sky Cuisine (Tầng 10, Q.1)',
    role: 'Freelance Content Creator & F&B Media Planner',
    timeline: '02/2026 - Nay',
    badge: '133.1K Views Top Video',
    slideImage: '/images/channels/bupsky_channel.jpg',
    metrics: [
      { value: '133.1K', label: 'Top video tiệc sinh nhật & sự kiện' },
      { value: '109K', label: 'Video khoảnh khắc đêm nhạc rooftop' },
      { value: '37.7K', label: 'Video rooftop view Bến Thành' },
      { value: 'Rooftop Q.1', label: 'Cách Chợ Bến Thành 4 phút' },
    ],
    overview: 'Búp Sky Cuisine là nhà hàng rooftop tọa lạc tại Tầng 10, 65-69 Nguyễn Thái Bình, Quận 1. Với lợi thế view toàn cảnh thành phố và không gian ấm cúng, dự án TikTok tập trung vào việc định vị Búp Sky như điểm hẹn lý tưởng cho các buổi tiệc sinh nhật, kỷ niệm lãng mạn, sự kiện riêng tư và ngắm hoàng hôn Sài Gòn.',
    challenge: 'Phân khúc nhà hàng rooftop tại Quận 1 có sự cạnh tranh lớn về view và giá cả. Kênh cần kịch bản chạm đúng nhu cầu của giới trẻ và dân văn phòng tìm kiếm địa điểm chill, tổ chức sự kiện đặc biệt có dịch vụ setup chu đáo.',
    solution: 'Tập trung vào 3 trụ cột nội dung: Trải nghiệm không gian tiệc riêng trọn gói (dẫn đầu với 133.1K views), khoảnh khắc đêm nhạc sự kiện sống động (109K views), và review vị trí cách Chợ Bến Thành 4 phút (37.7K views). Kết hợp góc quay điện ảnh, màu sắc ấm cúng sang trọng và âm nhạc bắt trend.',
    contentPillars: [
      {
        title: 'Tiệc Riêng Tư & Sinh Nhật Kỷ Niệm',
        desc: 'Nội dung "Để Búp lo trọn gói tiệc đặc biệt" đánh trúng tâm lý cần không gian riêng, decor lung linh.',
        icon: 'Sparkles'
      },
      {
        title: 'View Rooftop & Vị Trí Trung Tâm',
        desc: 'Nhấn mạnh vị trí đắc địa cách Chợ Bến Thành chỉ 4 phút, view ngắm trọn hoàng hôn và phố thị về đêm.',
        icon: 'Coffee'
      },
      {
        title: 'Đêm Nhạc & Trải Nghiệm Ẩm Thực',
        desc: 'Ghi lại không khí tiệc tùng âm nhạc, món ăn fusion tinh tế và đồ uống cocktail đặc trưng.',
        icon: 'Users'
      }
    ],
    deliverables: [
      'Kịch bản quay dựng chi tiết từng phân cảnh theo format TikTok dọc 9:16',
      'Hậu kỳ âm thanh, lồng tiếng truyền cảm và chỉnh màu điện ảnh ấm áp',
      'Quản lý lịch đăng bài tối ưu khung giờ vàng của đối tượng khách hàng F&B',
      'Thúc đẩy chuyển đổi tin nhắn đặt bàn tiệc sinh nhật và sự kiện'
    ],
    externalUrl: 'https://www.tiktok.com/@bupskycuisine',
  },
  {
    id: 'la-ca-mot-chut',
    title: 'Kênh TikTok F&B: La Cà Một Chút — Không Gian Trải Nghiệm Cafe & Ẩm Thực',
    subtitle: 'Xây dựng thương hiệu cá nhân & Kênh review trải nghiệm cafe, ẩm thực phong cách thẩm mỹ',
    category: 'Brand Identity & Short-form Storytelling',
    client: 'Kênh La Cà Một Chút',
    role: 'Channel Owner, Creative Director & Content Strategist',
    timeline: '2025 - Nay',
    badge: 'Kênh TikTok F&B',
    metrics: [
      { value: '73.1K', label: 'Top video Gem Cafe' },
      { value: '31.6K', label: 'Video Go Gelato Noel' },
      { value: '21.1K', label: 'Yori Matcha Trường Sa' },
      { value: '12+ Quán', label: 'Địa điểm trải nghiệm' },
    ],
    overview: 'La Cà Một Chút là kênh TikTok định hướng phong cách sống, review các quán cafe đẹp, tiệm bánh thủ công và những không gian trải nghiệm ẩm thực Sài Gòn mang lại cảm giác thư thái cho người xem.',
    challenge: 'Mảng Food & Cafe Review trên TikTok có độ cạnh tranh cao. Để tạo sự khác biệt bền vững, kênh cần một phong cách riêng biệt, không giật tít câu view rẻ tiền.',
    solution: 'Tập trung vào trải nghiệm cảm xúc, góc quay tỉ mỉ với ánh sáng tự nhiên dịu nhẹ, âm thanh môi trường ASMR dễ chịu và ngôn từ chia sẻ chân thành như một người bạn thân giới thiệu chỗ đi trốn.',
    contentPillars: [
      {
        title: 'Cafe Không Gian Nghệ Thuật',
        desc: 'Khám phá Gem Cafe, Go Gelato, Yori Matcha với ánh sáng đẹp và kiến trúc độc đáo.',
        icon: 'Coffee'
      },
      {
        title: 'Pastry & Dessert Story',
        desc: 'Kể câu chuyện về chiếc bánh mới ra lò, ly cà phê rang xay thủ công với góc quay macro thèm thuồng.',
        icon: 'Cake'
      },
      {
        title: 'Weekend Vlog & Outfit Inspo',
        desc: 'Gợi ý trang phục đi cafe nhẹ nhàng, cách tạo dáng chụp ảnh cho các bạn nữ yêu cái đẹp.',
        icon: 'Sparkles'
      }
    ],
    deliverables: [
      'Bảng quy chuẩn nhận diện kênh: Font chữ, tone màu be/cafe latte, âm nhạc thương hiệu',
      'Kế hoạch nội dung hàng tuần (Content Calendar) đồng bộ với lịch sự kiện và thời tiết',
      'Kỹ thuật quay dựng ánh sáng tự nhiên trên iPhone & hậu kỳ màu phim pastel trên CapCut',
      'Tương tác tích cực với cộng đồng người xem qua comment, giải đáp nhiệt tình',
    ],
    externalUrl: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM',
    featuredVideos: featuredVideos.filter(v => v.category === 'fnb')
  },
  {
    id: 'hai-phi-pitching',
    title: 'Winner – Pitching Project tại HAI PHI Company (Tivi HXY Campaign)',
    subtitle: 'Dự án kiến tập xuất sắc: Khám phá insight người tiêu dùng và lập kế hoạch truyền thông tích hợp',
    category: 'Integrated Marketing Communication (IMC)',
    client: 'TNHH Hải Phi Company',
    role: 'Winner - Pitching Team Leader & Creative Planner',
    timeline: '06/2025',
    badge: 'Giải Nhất Pitching',
    metrics: [
      { value: 'Top 1', label: 'Đội thi thắng giải pitching' },
      { value: '95/100', label: 'Điểm sáng tạo ban giám khảo' },
      { value: '200+', label: 'Khảo sát người tiêu dùng thực tế' },
      { value: '1 Kế hoạch', label: 'Chiến dịch IMC hoàn chỉnh 3 giai đoạn' },
    ],
    overview: 'Chiến dịch pitching bài bản mô phỏng môi trường agency thực tế. Nhóm đã tiến hành khảo sát hành vi mua sắm thiết bị nghe nhìn của các gia đình trẻ, từ đó đề xuất thông điệp truyền thông "Gắn Kết Từng Khung Hình" cho sản phẩm Smart TV HXY cùng kênh TikTok Channel TVC lan tỏa mạnh mẽ.',
    challenge: 'Thị trường tivi thông minh bị chi phối bởi các thương hiệu lớn. Dự án HXY cần một góc tiếp cận đầy tính nhân văn và ấm áp để chạm vào cảm xúc người mua gia đình trẻ.',
    solution: 'Khai thác insight: Chiếc tivi trong phòng khách không chỉ là công cụ giải trí mà là "trọng tâm gắn kết các thành viên trong gia đình sum vầy sau ngày dài". Đề xuất kịch bản TikTok & TVC gia đình ấm áp kết hợp activation tại điểm bán.',
    contentPillars: [
      {
        title: 'Insight Khách Hàng Mục Tiêu',
        desc: 'Phân tích chân dung các cặp vợ chồng trẻ từ 25-35 tuổi có con nhỏ tại các đô thị.',
        icon: 'Users'
      },
      {
        title: 'Big Idea & Thông Điệp Cốt Lõi',
        desc: 'Ý tưởng "Gắn Kết Từng Khung Hình" biến chiếc màn hình thành chiếc cầu nối yêu thương.',
        icon: 'Lightbulb'
      },
      {
        title: 'Kế Hoạch Thực Thi Đa Điểm Chạm',
        desc: 'Phân bổ ngân sách theo 3 giai đoạn: Teasing gây tò mò -> Booming lan tỏa viral -> Sustaining kích thích chốt đơn.',
        icon: 'TrendingUp'
      }
    ],
    deliverables: [
      'Bản kế hoạch chiến lược truyền thông IMC dài 45 trang',
      'Bộ slide thuyết trình pitching visual ấn tượng thiết kế chuyên nghiệp',
      'Bản storyboard kịch bản TikTok Channel & TVC 60s',
    ]
  },
  {
    id: 'suzuki-hong-phuong',
    title: 'Suzuki Hồng Phương — Quản Lý & Xuất Bản Ấn Phẩm Đa Nền Tảng Facebook & Instagram',
    subtitle: 'Quản trị và phát triển nội dung số cho đại lý phân phối chính hãng xe ô tô & xe máy',
    category: 'Social Media & Visual Publications',
    client: 'Suzuki Hồng Phương',
    role: 'Social Media Management & Graphic Designer',
    timeline: '2024 - 2025',
    badge: 'Ô tô & Xe máy',
    metrics: [
      { value: '2 Nền tảng', label: 'Facebook & Instagram' },
      { value: '50+ Post', label: 'Xuất bản định kỳ hàng tháng' },
      { value: '+60%', label: 'Tương tác tương tác khách hỏi xe' },
      { value: 'Photoshop', label: 'Thiết kế ấn phẩm chuẩn nhận diện' },
    ],
    overview: 'Trực tiếp phụ trách lên ý tưởng nội dung, thiết kế ấn phẩm đồ họa và lên lịch đăng tải trên Facebook Page và Instagram của Suzuki Hồng Phương. Xây dựng các tuyến bài giới thiệu tính năng xe, bảng giá lăn bánh, cẩm nang bảo dưỡng và chương trình lái thử.',
    challenge: 'Ngành xe cần hình ảnh chỉn chu, thông số kỹ thuật chính xác nhưng không gây cảm giác khô khan nhằm kích thích khách hàng đăng ký lái thử.',
    solution: 'Thiết kế bố cục hình ảnh hiện đại bằng Photoshop, áp dụng màu sắc nhận diện thương hiệu Suzuki xanh - đỏ nổi bật, lồng ghép feedback khách hàng nhận xe mới để tăng độ tin cậy.',
    contentPillars: [
      {
        title: 'Giới Thiệu Dòng Xe & Giá Lăn Bánh',
        desc: 'Cập nhật bảng giá, tính năng an toàn nổi trội và khuyến mãi hàng tháng.',
        icon: 'Sparkles'
      },
      {
        title: 'Khoảnh Khắc Bàn Giao Xe',
        desc: 'Hình ảnh khách hàng nhận xe kèm lời chúc chân thành tạo hiệu ứng lan tỏa niềm tin.',
        icon: 'Users'
      },
      {
        title: 'Cẩm Nang Bảo Dưỡng',
        desc: 'Lời khuyên chăm sóc xe mùa mưa, kiểm tra lốp và thay dầu định kỳ tại xưởng dịch vụ.',
        icon: 'Layers'
      }
    ],
    deliverables: [
      'Lịch biên tập nội dung phát sóng hàng tuần (Content Calendar)',
      'Thiết kế ấn phẩm banner, carousels, story Facebook/Instagram bằng Photoshop',
      'Quản lý tương tác và phản hồi khách hàng gửi tin nhắn tư vấn lái thử',
    ]
  },
  {
    id: 'phat-thuy-social',
    title: 'Phat-Thuy Company (Xe Khách Phát) — Nội Dung Fanpage & Tuyển Dụng Chuyên Nghiệp',
    subtitle: 'Chiến dịch quản trị nội dung fanpage Facebook cho doanh nghiệp vận tải hành khách liên tỉnh',
    category: 'Social Media Coordinator',
    client: 'Phat-Thuy Company',
    role: 'Social Media Coordinator & Content Creator',
    timeline: '2024 - 2025',
    badge: 'Social Media & HR',
    metrics: [
      { value: '45%+', label: 'Tăng lượng tương tác tự nhiên' },
      { value: '3x', label: 'Tăng lượng inbox đặt vé trực tiếp' },
      { value: '100%', label: 'Đạt chỉ tiêu tuyển dụng tài xế' },
      { value: '30+ Banner', label: 'Thiết kế POSM & Digital' },
    ],
    overview: 'Vận hành toàn diện fanpage Facebook của doanh nghiệp xe khách liên tỉnh. Đổi mới phong cách truyền thông từ cứng nhắc sang hình ảnh hiện đại, cung cấp lịch trình rõ ràng, chia sẻ cẩm nang du lịch, thông báo an toàn và thực hiện các chiến dịch bài đăng tuyển dụng tài xế/nhân viên.',
    challenge: 'Ngành vận tải hành khách thường gặp rào cản về phàn nàn dịch vụ mùa lễ Tết và đối tượng khách hàng rất đa dạng từ học sinh sinh viên đến người lớn tuổi.',
    solution: 'Xây dựng quy chuẩn hình ảnh bảng giờ chạy minh bạch, thiết kế đồ họa dễ đọc trên điện thoại, đồng thời xây dựng kịch bản phản hồi tin nhắn tự động hỗ trợ khách 24/7.',
    contentPillars: [
      {
        title: 'Lịch Trình & Đặt Vé Tiện Lợi',
        desc: 'Banner trực quan các khung giờ khởi hành, giá vé niêm yết rõ ràng, chương trình ưu đãi.',
        icon: 'Layers'
      },
      {
        title: 'Cẩm Nang Hành Trình',
        desc: 'Gợi ý điểm ăn uống ngon tại các bến đỗ, kinh nghiệm đi xe tránh say xe cho hành khách.',
        icon: 'Coffee'
      },
      {
        title: 'Tuyển Dụng & Đội Ngũ Bác Tài',
        desc: 'Thiết kế bài tuyển dụng chuyên nghiệp, ghi lại những khoảnh khắc ấm lòng của đội ngũ tài xế.',
        icon: 'Users'
      }
    ],
    deliverables: [
      'Lập kế hoạch phát sóng bài viết định kỳ 4-5 post/tuần',
      'Thiết kế banner truyền thông & tuyển dụng bằng Photoshop & Canva (Slide 8 & 9)',
      'Quản lý hộp thư tương tác và xử lý khủng hoảng phản hồi khách hàng',
    ]
  }
];
