'use client';

import { useState } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, 
  ExternalLink, Sparkles, FolderDown, Video, Music, Flame, Check
} from 'lucide-react';
import { featuredVideos, VideoItem } from '@/app/data';

interface TiktokShowcaseProps {
  onSelectVideo?: (video: VideoItem) => void;
}

export default function TiktokShowcase({ onSelectVideo }: TiktokShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'furniture' | 'fnb'>('all');
  const [activeVideo, setActiveVideo] = useState<VideoItem>(featuredVideos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(6240);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [showHearts, setShowHearts] = useState<boolean>(false);

  const filteredVideos = activeCategory === 'all' 
    ? featuredVideos 
    : featuredVideos.filter(v => v.category === activeCategory);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    setHasLiked(false);
    const numeric = parseFloat(video.likes.replace('K', '')) * 1000;
    setLikeCount(Math.round(numeric));
  };

  const toggleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1);
      setHasLiked(true);
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 1200);
    } else {
      setLikeCount(prev => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <section id="tiktok-showcase" className="py-20 bg-[#F7F2EA] relative border-y border-[#E8DEC8]/80 overflow-hidden">
      
      {/* Background aesthetic blobs */}
      <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-[#EAE0D2]/70 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#F2E8DC]/80 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D2] text-[#84674C] text-xs font-semibold tracking-wide uppercase">
            <Video className="w-3.5 h-3.5" />
            <span>TikTok Short-Form Video Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D231C] tracking-tight">
            Trải Nghiệm Trực Tiếp <br />
            <span className="font-serif italic text-[#8A6748] font-normal">Định Dạng Video TikTok</span>
          </h2>

          <p className="text-sm sm:text-base text-[#655243] leading-relaxed">
            Mỗi khung hình đều được tính toán từ <strong className="text-[#2D231C]">Hook 3 giây đầu</strong>, âm thanh bắt tai, 
            kỹ thuật dựng <strong className="text-[#2D231C]">CapCut</strong> nhịp điệu cao đến bảng màu be ấm cúng mang lại tỷ lệ giữ chân khán giả vượt trội.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#84674C] text-white shadow-sm'
                  : 'bg-white/90 text-[#655243] hover:bg-white'
              }`}
            >
              Tất cả video ({featuredVideos.length})
            </button>
            <button
              onClick={() => setActiveCategory('furniture')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeCategory === 'furniture'
                  ? 'bg-[#84674C] text-white shadow-sm'
                  : 'bg-white/90 text-[#655243] hover:bg-white'
              }`}
            >
              <span>🛋️ Minh Huy Furniture</span>
            </button>
            <button
              onClick={() => setActiveCategory('fnb')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeCategory === 'fnb'
                  ? 'bg-[#84674C] text-white shadow-sm'
                  : 'bg-white/90 text-[#655243] hover:bg-white'
              }`}
            >
              <span>☕ La Cà Một Chút (Tone Be)</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive TikTok Phone (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="phone-mockup relative select-none">
              
              {/* Dynamic Island */}
              <div className="phone-island flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#181818] mr-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#14202c]" />
              </div>

              {/* TikTok Video Screen Content */}
              <div 
                className={`w-full h-full bg-gradient-to-br ${activeVideo.gradient} relative flex flex-col justify-between p-4 pt-12 text-white overflow-hidden`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {/* Background Ambient Visual Effect */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Floating Hearts Animation */}
                {showHearts && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                    <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-ping opacity-90" />
                  </div>
                )}

                {/* Top Bar: Following / For You */}
                <div className="relative z-10 flex items-center justify-between text-xs font-semibold px-2 text-white/80 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-white/60">Đang theo dõi</span>
                    <span className="text-white border-b-2 border-white pb-0.5">Dành cho bạn</span>
                  </div>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Central Play/Pause State Indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-20 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Right Action Sidebar (Like, Comment, Share, Sound disc) */}
                <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 z-20 font-sans">
                  
                  {/* Channel Avatar with Follow Plus */}
                  <div className="relative group">
                    <div className="w-11 h-11 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-lg shadow-md">
                      {activeVideo.avatar}
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FE2C55] text-white flex items-center justify-center text-[10px] font-bold shadow">
                      +
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike();
                    }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-125 ${
                      hasLiked ? 'text-[#FE2C55]' : 'text-white/90'
                    }`}>
                      <Heart className={`w-7 h-7 ${hasLiked ? 'fill-[#FE2C55]' : 'fill-white/20'}`} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-tight">
                      {hasLiked ? `${(likeCount / 1000).toFixed(1)}K` : activeVideo.likes}
                    </span>
                  </button>

                  {/* Comment Button */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/90">
                      <MessageCircle className="w-7 h-7 fill-white/20" />
                    </div>
                    <span className="text-[11px] font-semibold">{activeVideo.comments}</span>
                  </div>

                  {/* Share Button */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/90">
                      <Share2 className="w-7 h-7 fill-white/20" />
                    </div>
                    <span className="text-[11px] font-semibold">{activeVideo.shares}</span>
                  </div>

                  {/* Rotating Sound Disc */}
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-tr from-stone-900 to-amber-700 p-1 border border-white/40 flex items-center justify-center shadow-lg ${
                    isPlaying ? 'animate-spin [animation-duration:5s]' : ''
                  }`}>
                    <Music className="w-4 h-4 text-amber-200" />
                  </div>
                </div>

                {/* Bottom Video Metadata */}
                <div className="relative z-10 pr-14 space-y-2 mt-auto font-sans">
                  {/* CapCut Badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-[10px] text-amber-300 font-semibold border border-amber-300/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>CapCut • {activeVideo.capcutTemplate}</span>
                  </div>

                  {/* Creator handle */}
                  <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight">
                    <span>{activeVideo.channelHandle}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 font-medium">
                      Tác giả
                    </span>
                  </div>

                  {/* Hook & description */}
                  <p className="text-xs text-white/90 font-normal leading-relaxed line-clamp-3">
                    <strong className="text-amber-200 block text-xs mb-0.5 font-semibold">{activeVideo.hook}</strong>
                    {activeVideo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 text-[10px] text-amber-200/90 font-medium">
                    {activeVideo.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>

                  {/* Music Track Marquee */}
                  <div className="flex items-center gap-1.5 text-[11px] text-white/80 pt-1">
                    <Music className="w-3 h-3 flex-shrink-0 animate-bounce" />
                    <span className="truncate">Âm thanh gốc - Tô Lan Anh x {activeVideo.channel}</span>
                  </div>
                </div>

                {/* Simulated Progress Bar */}
                <div className="relative z-10 w-full bg-white/30 h-1 rounded-full mt-3 overflow-hidden">
                  <div className={`h-full bg-white rounded-full ${isPlaying ? 'w-2/3 transition-all duration-1000' : 'w-1/3'}`} />
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Playlist & Video Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#84674C] font-sans">
                  Đang phát trên mô phỏng:
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EAE0D2] font-semibold text-[#644D38]">
                  {activeVideo.category === 'furniture' ? 'Nội thất Minh Huy' : 'F&B La Cà'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D231C]">
                {activeVideo.title}
              </h3>
            </div>

            {/* Video Script Analysis Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5D6C3] shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#84674C] flex items-center gap-1.5 font-sans">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Chiến Lược Kịch Bản & Điểm Sáng Video (Hook 3s)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF6F0] border-l-4 border-[#84674C] text-sm text-[#3E3027] font-medium leading-relaxed font-sans">
                &ldquo;{activeVideo.hook}&rdquo;
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-[#655243] font-sans">Các yếu tố giữ chân người xem:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideo.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4A3B30] font-sans">
                      <div className="w-4 h-4 rounded-full bg-[#EFE6DA] flex items-center justify-center text-[#84674C] flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {activeVideo.driveLink && (
                  <a
                    href={activeVideo.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF2E8] border border-[#D5BEA4] text-xs font-semibold text-[#84674C] hover:bg-[#F2E8DC] transition-colors"
                  >
                    <FolderDown className="w-3.5 h-3.5" />
                    <span>Mở thư mục Google Drive (Minh Huy)</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}

                {activeVideo.tiktokUrl && (
                  <a
                    href={activeVideo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF2E8] border border-[#D5BEA4] text-xs font-semibold text-[#84674C] hover:bg-[#F2E8DC] transition-colors"
                  >
                    <span>Xem trên TikTok @la.camotchut</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Video List Carousel / Selector */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#655243] uppercase tracking-wider flex items-center justify-between font-sans">
                <span>Chọn video để xem thử ({filteredVideos.length}):</span>
                <span className="text-[11px] text-[#A38466] font-normal italic">
                  Nhấp để chuyển kênh trên điện thoại
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[290px] overflow-y-auto pr-1">
                {filteredVideos.map((video) => {
                  const isSelected = activeVideo.id === video.id;
                  return (
                    <button
                      key={video.id}
                      onClick={() => handleSelectVideo(video)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 group font-sans ${
                        isSelected
                          ? 'bg-[#F2E8DC] border-[#84674C] shadow-sm ring-1 ring-[#84674C]/30'
                          : 'bg-white/90 border-[#E8DEC8] hover:bg-white hover:border-[#C4AF9A]'
                      }`}
                    >
                      <div className={`w-10 h-14 rounded-xl bg-gradient-to-br ${video.gradient} flex-shrink-0 flex items-center justify-center text-white text-xs shadow-xs`}>
                        <Play className={`w-4 h-4 fill-current ${isSelected ? 'text-amber-300' : 'text-white/80'}`} />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="text-xs font-bold text-[#2D231C] line-clamp-1 group-hover:text-[#84674C]">
                          {video.title}
                        </div>
                        <div className="text-[11px] text-[#7A6453] truncate">
                          {video.channel} • {video.duration}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-semibold text-[#84674C]">
                          <span>👁️ {video.views}</span>
                          <span>❤️ {video.likes}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
