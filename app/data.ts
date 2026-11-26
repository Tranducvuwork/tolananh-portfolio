export interface VideoItem {
  id: string;
  title: string;
  category: 'furniture' | 'fnb' | 'lifestyle';
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

export const profileData = {
  name: 'Tô Lan Anh',
  title: 'Social Media & Creative Planner',
  subtitle: 'Content Marketing | F&B & Lifestyle TikTok Specialist',
  birthday: '24.02.2004',
  phone: '0942.077.335',
  email: 'lananhto2402@gmail.com',
  address: 'Lê Tấn Bê, Phường An Lạc, Bình Tân, TP.HCM',
  cvPdf: '/ToLanAnh_CV.pdf',
  avatar: '/images/avatar.jpg',
  portrait: '/images/lananh_portrait.jpg',
  intro: 'Tôi là Tô Lan Anh (sinh ngày 24.02.2004), sinh viên ngành Quan hệ Công chúng - Truyền thông (PR) tại Đại Học Văn Lang (2022 - 2026), định hướng phát triển chuyên sâu thành một Creative Planner. Với tư duy thẩm mỹ nữ tính, tinh tế cùng năng lực sản xuất nội dung đa nền tảng (đặc biệt là short-form video TikTok), tôi luôn chủ động học hỏi và tích lũy kinh nghiệm thực chiến qua các dự án thương hiệu, từ sản xuất nội thất thủ công B2B đến các kênh F&B phong cách ấm áp.',
  goals: {
    shortTerm: 'Trong 2 tháng: Làm chủ các kiến thức chuyên môn cơ bản về xây dựng nội dung, vận hành mạng xã hội và sử dụng các công cụ truyền thông kỹ thuật số.',
    longTerm: 'Trong 2 năm: Trở thành Creative Planner chuyên nghiệp. Có khả năng dẫn dắt một nhóm nhỏ, tham gia vào các chiến dịch truyền thông tích hợp thực tiễn.'
  },
  keyMetrics: [
    { value: '250%+', label: 'Tăng trưởng tương tác tự nhiên' },
    { value: '50K+', label: 'Lượt xem trung bình mỗi video' },
    { value: '20+', label: 'Kịch bản TikTok xưởng sản xuất hoàn thành' },
    { value: '100%', label: 'Thắng Pitching dự án thực tế kiến tập' },
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
  {
    id: 'mh-1',
    title: 'Quy trình tạo ra chiếc ghế thô & Máy uốn sắt tự động',
    category: 'furniture',
    channel: 'Minh Huy Furniture',
    channelHandle: '@minhhuyfurniture',
    avatar: '🛋️',
    views: '84.5K',
    likes: '6.2K',
    comments: '412',
    shares: '280',
    duration: '00:38',
    hook: 'Liệu bạn có biết: Một chiếc ghế bền 10 năm bắt đầu từ những đường uốn thép này?',
    description: 'Thước phim cận cảnh quy trình uốn sắt công nghiệp và hàn laser bù tại xưởng Minh Huy Furniture. Âm thanh cơ khí sống động, góc máy macro chân thực thu hút người xem từ giây đầu tiên.',
    aspectRatio: '9:16',
    capcutTemplate: 'Trending Craftsmanship Beat',
    tags: ['#MinhHuyFurniture', '#NoiThatXuong', '#GheUonSat', '#QuyTrinhSanXuat', '#Handmade'],
    gradient: 'from-amber-800 to-stone-900',
    driveLink: 'https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V',
    highlights: ['Hook gây tò mò trong 2s đầu', 'Cận cảnh tia lửa hàn laser', 'Cam kết độ bền khung sắt bảo hành 5 năm'],
  },
  {
    id: 'lcca-1',
    title: 'Quán cafe tone be ẩn mình giữa hẻm Sài Gòn — Cuối tuần ghé trốn phố',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '☕',
    views: '128.3K',
    likes: '14.8K',
    comments: '685',
    shares: '1.2K',
    duration: '00:45',
    hook: 'Nếu bạn cần một góc yên tĩnh với tone màu be ấm áp để làm việc cuối tuần...',
    description: 'Video review quán cafe phong cách Hàn Quốc tối giản với tone màu Be mộng mơ. Nhạc nền lofi nhẹ nhàng, màu phim màu latte ấm cúng, review chân thật menu bánh và đồ uống mát lạnh.',
    aspectRatio: '9:16',
    capcutTemplate: 'Cozy Weekend Vlog',
    tags: ['#LaCaMotChut', '#CafeSaigon', '#QuanCafeToneBe', '#FoodReview', '#AestheticVibes'],
    gradient: 'from-amber-700 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM',
    highlights: ['Bảng màu be & cafe latte ngọt ngào', 'Voiceover truyền cảm, gần gũi', 'Tỷ lệ lưu video đạt 8.2%'],
  },
  {
    id: 'mh-2',
    title: 'Bọc đệm Sofa & Kỹ thuật sơn tay 2K bóng mịn',
    category: 'furniture',
    channel: 'Minh Huy Furniture',
    channelHandle: '@minhhuyfurniture',
    avatar: '🛋️',
    views: '62.1K',
    likes: '4.8K',
    comments: '315',
    shares: '190',
    duration: '00:42',
    hook: 'Đổi đệm mới giữ nguyên khung ghế: Tiết kiệm 60% chi phí decor cho chủ quán cafe!',
    description: 'Giải pháp cải tạo nội thất thông minh cho các cơ sở kinh doanh F&B. Trực quan hóa từng bước bọc nệm may viền lưng cong và sơn tĩnh điện bảo vệ bề mặt thép không gỉ.',
    aspectRatio: '9:16',
    capcutTemplate: 'Product Showcase Beat',
    tags: ['#MinhHuyFurniture', '#SofaCaoCap', '#BocDemGhe', '#DecorTietKiem', '#NoiThatCafe'],
    gradient: 'from-stone-800 to-amber-950',
    driveLink: 'https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V',
    highlights: ['Trải nghiệm giải pháp trước & sau', 'Tư vấn tận tâm từ thợ tay nghề cao', 'Gợi ý phối màu nệm theo tone quán'],
  },
  {
    id: 'lcca-2',
    title: 'Food Tour chiều thu: Bánh sừng bò nướng bơ tỏi & Trà sữa olong nướng',
    category: 'fnb',
    channel: 'La Cà Một Chút',
    channelHandle: '@la.camotchut',
    avatar: '🥐',
    views: '95.4K',
    likes: '11.2K',
    comments: '530',
    shares: '840',
    duration: '00:36',
    hook: 'Mùi bánh nướng thơm lừng cả con phố này có gì mà ai đi qua cũng phải ngoái lại?',
    description: 'Thước phim ASMR xé bánh sừng bò giòn rụm kết hợp cùng vị béo ngậy của sốt bơ tỏi phô mai kéo sợi. Video kích thích vị giác mạnh mẽ với góc quay macro sắc nét chuẩn phong cách La Cà.',
    aspectRatio: '9:16',
    capcutTemplate: 'Foodie Macro Cut',
    tags: ['#LaCaMotChut', '#MonNgonSaigon', '#Croissant', '#BanhNgon', '#ASMRFood'],
    gradient: 'from-orange-800 to-amber-950',
    tiktokUrl: 'https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9Biac1XtvMY',
    highlights: ['Âm thanh ASMR giòn tan', 'Ánh sáng tự nhiên ấm áp', 'Hơn 400 bình luận xin địa chỉ quán'],
  },
  {
    id: 'mh-3',
    title: 'Kiểm tra độ chịu tải 300kg tại xưởng & Đóng gói đi dự án',
    category: 'furniture',
    channel: 'Minh Huy Furniture',
    channelHandle: '@minhhuyfurniture',
    avatar: '📦',
    views: '115.0K',
    likes: '9.3K',
    comments: '720',
    shares: '640',
    duration: '00:35',
    hook: 'Thử thách dập thử khung ghế chịu tải 300kg: Kết quả khiến khách hàng sỉ bất ngờ!',
    description: 'Minh chứng chất lượng gia công cơ khí chính xác. Video trực tiếp chứng minh độ bền vững của bộ bàn ghế inox bọc nệm lưng cong trước khi bọc màng PE chống xước giao cho chuỗi dự án CR.',
    aspectRatio: '9:16',
    capcutTemplate: 'Viral Challenge Stunt',
    tags: ['#MinhHuyFurniture', '#KiemDinhChatLuong', '#BanGheInox', '#XamXuongTrucTiep'],
    gradient: 'from-amber-900 to-zinc-900',
    driveLink: 'https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V',
    highlights: ['Minh bạch độ bền vật lý', 'Đóng gói tiêu chuẩn xuất xưởng', 'Tạo lòng tin tuyệt đối cho khách mua sỉ'],
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'minh-huy-furniture',
    title: 'Minh Huy Furniture — Chiếm Lĩnh Thị Trường B2B Bằng Nội Dung Short-Form Xưởng Sản Xuất',
    subtitle: 'Chiến dịch TikTok Marketing chuyển đổi số cho cơ sở sản xuất gia công nội thất kim khí & sofa',
    category: 'TikTok Content & Video Production',
    client: 'Minh Huy Furniture',
    role: 'Creative Planner, Kịch bản & Dựng video CapCut',
    timeline: '10/2026 - 11/2026',
    badge: 'Dự án trọng điểm',
    metrics: [
      { value: '20+ Videos', label: 'Sản xuất hoàn thiện' },
      { value: '85K+', label: 'Lượt xem trung bình' },
      { value: '4.8x', label: 'Tăng lead nhắn tin hỏi giá sỉ' },
      { value: '100% Thực tế', label: 'Quay tại xưởng gia công' },
    ],
    overview: 'Minh Huy Furniture là xưởng sản xuất nội thất cơ khí inox, uốn sắt mỹ thuật và bọc sofa lớn tại TP.HCM. Doanh nghiệp trước đây chủ yếu phụ thuộc vào kênh truyền miệng truyền thống. Mục tiêu chiến dịch là xây dựng kênh TikTok bài bản để chứng minh năng lực gia công trực tiếp tại xưởng, thu hút các kiến trúc sư, chủ chuỗi cafe/nhà hàng và đại lý bán sỉ toàn quốc.',
    challenge: 'Nội thất kim khí vốn là ngành hàng kỹ thuật khô khan, khó thu hút tệp người xem thông thường. Nếu chỉ đăng ảnh chụp thành phẩm thông thường sẽ rất khó tạo viral trên thuật toán đề xuất của TikTok.',
    solution: 'Áp dụng định dạng "Behind The Scenes" (Phía sau hậu trường thợ lành nghề). Tận dụng âm thanh máy uốn sắt, tia lửa hàn laser, chuyển động mềm mại của mút đệm và sơn tĩnh điện để tạo hiệu ứng ASMR công nghiệp lôi cuốn. Đồng thời lồng ghép thông điệp "Chỉ bán sỉ không bán lẻ" và "Tự sản xuất tận gốc giá xưởng" để định vị rõ đối tượng mục tiêu.',
    contentPillars: [
      {
        title: 'Quy Trình Gia Công Thô (Industrial BTS)',
        desc: 'Cận cảnh máy uốn sắt CNC, cắt laser, hàn 2 dây bù tạo khung xương chắc chắn.',
        icon: 'Hammer'
      },
      {
        title: 'Bí Mật Hoàn Thiện (Craftsmanship Detail)',
        desc: 'Quy trình sơn tay 2K, bọc nệm mút kháng xẹp, may viền ghế công thái học.',
        icon: 'Layers'
      },
      {
        title: 'Tour Xưởng & Test Tải Trọng',
        desc: 'Khách hàng ghé thăm trực tiếp xưởng, kiểm tra thử thách tải trọng thực tế 300kg.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Đóng Gói & Xuất Xưởng Dự Án',
        desc: 'Ghi lại các xe tải nhận hàng đi tỉnh, giao các chuỗi F&B lớn tạo cảm giác uy tín đông khách.',
        icon: 'Truck'
      }
    ],
    deliverables: [
      'Bộ hơn 20 kịch bản video TikTok chi tiết (Hook 3s, thân bài, Call-to-action)',
      'Hậu kỳ cắt dựng hoàn chỉnh trên CapCut (Chỉnh màu, hiệu ứng chuyển cảnh, chèn âm thanh công nghiệp, phụ đề động)',
      'Bộ từ khóa hashtag SEO TikTok ngành nội thất (#MinhHuyFurniture, #xuongnoithat, #bangheinox)',
      'Báo cáo hiệu suất từng nhóm nội dung theo lượt xem, tỷ lệ giữ chân và tin nhắn chuyển đổi',
    ],
    driveUrl: 'https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V',
    featuredVideos: featuredVideos.filter(v => v.category === 'furniture')
  },
  {
    id: 'la-ca-mot-chut',
    title: 'Kênh TikTok F&B: La Cà Một Chút — Không Gian Ấm Áp Cùng Tone Màu Be Nhẹ Nhàng',
    subtitle: 'Xây dựng thương hiệu cá nhân & Kênh review trải nghiệm cafe, ẩm thực phong cách thẩm mỹ',
    category: 'Brand Identity & Short-form Storytelling',
    client: 'Kênh La Cà Một Chút',
    role: 'Channel Owner, Creative Director & Content Strategist',
    timeline: '2025 - Nay',
    badge: 'Kênh TikTok F&B',
    metrics: [
      { value: '150K+', label: 'Lượt xem video viral cao nhất' },
      { value: '92% Nữ', label: 'Tệp khán giả mục tiêu đúng tệp' },
      { value: '12%', label: 'Tỷ lệ lưu video (Save rate)' },
      { value: 'Tone Beige', label: 'Nhận diện thị giác đồng bộ' },
    ],
    overview: 'La Cà Một Chút là kênh TikTok định hướng phong cách sống, review các quán cafe đẹp, tiệm bánh thủ công và những món ngon Sài Gòn. Toàn bộ hình ảnh kênh được thiết kế nhất quán với bảng màu Be, kem sữa ấm cúng, voiceover trầm ấm tâm sự giúp mang lại cảm giác thư thái cho người xem sau những giờ làm việc căng thẳng.',
    challenge: 'Mảng Food & Cafe Review trên TikTok có độ cạnh tranh cực kỳ gay gắt với hàng ngàn tài khoản reviewer náo nhiệt, ồn ào. Để tạo sự khác biệt bền vững, kênh cần một phong cách riêng biệt, không giật tít câu view rẻ tiền.',
    solution: 'Chọn hướng đi "Slow Content" & "Aesthetic Comfort". Tập trung vào trải nghiệm cảm xúc, góc quay tỉ mỉ với ánh sáng tự nhiên dịu nhẹ, âm thanh môi trường ASMR dễ chịu và ngôn từ chia sẻ chân thành như một người bạn thân giới thiệu chỗ đi trốn.',
    contentPillars: [
      {
        title: 'Cafe Hidden Gems',
        desc: 'Tìm kiếm những quán cafe phong cách mộc mạc, nhiều cây xanh hoặc tone be vintage thích hợp đọc sách, làm việc.',
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
    slideImage: '/images/slides/slide_3.png',
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
      'Bộ slide thuyết trình pitching visual ấn tượng thiết kế chuyên nghiệp (Slide 3 & 4)',
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
    slideImage: '/images/slides/slide_6.png',
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
    slideImage: '/images/slides/slide_8.png',
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
