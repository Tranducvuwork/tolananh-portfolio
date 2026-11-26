'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, 
  ExternalLink, Sparkles, FolderDown, Video, Music, Check, Star, 
  Flame, Film, Coffee, Sofa, Eye, ArrowUpRight
} from 'lucide-react';
import { featuredVideos, VideoItem } from '@/app/data';

export default function TiktokShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'furniture' | 'fnb'>('all');
  const [activeVideo, setActiveVideo] = useState<VideoItem>(featuredVideos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(6240);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [showHearts, setShowHearts] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

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

  const handleShare = () => {
    navigator.clipboard?.writeText(activeVideo.tiktokUrl || window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="tiktok-showcase" className="py-24 bg-[#F4EFE6] relative border-y border-[#ECE4D8] overflow-hidden">
      
      {/* Background radial ambiance */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#EAE1D5]/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#FAF7F2]/80 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE1D5] shadow-xs">
            <Film className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#7D5133] uppercase">
              TikTok & Short-Form Video Hub
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1611] tracking-tight">
            Trải Nghiệm Thực Tế <br />
            <span className="font-serif italic text-[#9E6B47] font-normal">
              Định Dạng Video TikTok
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed max-w-2xl mx-auto">
            Mỗi thước phim đều được tính toán từ <strong className="text-[#1E1611]">Hook 3 giây đầu</strong> giữ chân người xem, 
            kỹ thuật dựng CapCut nhịp điệu cao đến bảng màu be ấm áp đem lại tỷ lệ chuyển đổi vượt trội.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              Tất cả video ({featuredVideos.length})
            </button>
            <button
              onClick={() => setActiveCategory('furniture')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'furniture'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Sofa className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>Minh Huy Furniture (B2B)</span>
            </button>
            <button
              onClick={() => setActiveCategory('fnb')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'fnb'
                  ? 'bg-[#1E1611] text-white shadow-sm'
                  : 'bg-white text-[#5C4D43] border border-[#DECFC0] hover:bg-[#FAF7F2]'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-[#9E6B47]" />
              <span>La Cà Một Chút (Tone Be)</span>
            </button>
          </div>
        </div>

        {/* Channel Analytics Strip (Inspired by Wix Studio reference) */}
        <div className="editorial-card p-6 sm:p-8 mb-12 bg-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-[#ECE4D8]">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-full bg-[#1E1611] text-[#FAF7F2] flex items-center justify-center font-serif text-xl font-bold border-2 border-[#DECFC0]">
                {activeVideo.category === 'furniture' ? 'MH' : 'LC'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#1E1611]">
                    {activeVideo.category === 'furniture' ? 'Minh Huy Furniture Official' : 'La Cà Một Chút (Tone Be)'}
                  </h3>
                  <span className="w-4 h-4 rounded-full bg-[#9E6B47] text-white flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                </div>
                <p className="text-xs font-mono text-[#7D5133] mt-0.5">
                  {activeVideo.category === 'furniture' ? '@minhhuyfurniture • 20+ Video Xưởng B2B' : '@la.camotchut • F&B Lifestyle & Cafe Review'}
                </p>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/drive/folders/1rNL3_Asy9z306dMLTe0G2PAtys_-QW0V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono font-medium bg-[#FAF7F2] border border-[#DECFC0] text-[#1E1611] hover:bg-[#ECE4D8] transition-all"
              >
                <FolderDown className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>Mở Google Drive Xưởng (20+ Video)</span>
              </a>
              <a
                href="https://www.tiktok.com/@la.camotchut?_r=1&_t=ZS-9AlGxP5d7HM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] transition-all"
              >
                <span>Khám Phá Kênh @la.camotchut</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DECFC0]" />
              </a>
            </div>
          </div>

          {/* Key Metrics Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 text-center sm:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">58K+</div>
              <div className="text-xs text-[#5C4D43] font-mono mt-0.5">Followers Kênh</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">3.9M+</div>
              <div className="text-xs text-[#5C4D43] font-mono mt-0.5">Tổng Lượt Thích</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1611]">5.3M+</div>
              <div className="text-xs text-[#5C4D43] font-mono mt-0.5">Lượt Xem / Tháng</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#9E6B47]">14.8%</div>
              <div className="text-xs text-[#5C4D43] font-mono mt-0.5">Tỷ Lệ Tương Tác (Cao Hơn 80%)</div>
            </div>
          </div>
        </div>

        {/* Interactive Showcase: Phone Mockup on Left + Video Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Ultra-Realistic Phone Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="phone-mockup-pro select-none relative group">
              
              {/* Dynamic Island */}
              <div className="phone-dynamic-island flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-zinc-400">9:16</span>
                </div>
              </div>

              {/* Phone Screen Viewport */}
              <div 
                onClick={() => setIsPlaying(!isPlaying)}
                className="phone-screen cursor-pointer relative bg-zinc-950 flex flex-col justify-between"
              >
                {/* Simulated High-Res Video Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeVideo.gradient} opacity-90 transition-all duration-700`} />

                {/* Animated video content representation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  {/* Subtle video ambient effect */}
                  <div className="w-32 h-32 rounded-full bg-white/10 blur-2xl animate-pulse" />
                  <div className="relative z-10 space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono text-amber-200 border border-white/15">
                      {activeVideo.category === 'furniture' ? 'MINH HUY WORKSHOP BTS' : 'LA CÀ MỘT CHÚT • CAFE VLOG'}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white leading-tight px-2 drop-shadow-md">
                      {activeVideo.title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-sans italic line-clamp-3 px-3 drop-shadow">
                      "{activeVideo.hook}"
                    </p>
                  </div>
                </div>

                {/* Play/Pause Center Indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Floating Heart Particle on Like */}
                {showHearts && (
                  <div className="absolute right-4 bottom-32 pointer-events-none z-40 animate-float-heart">
                    <Heart className="w-12 h-12 text-rose-500 fill-rose-500 drop-shadow-lg" />
                  </div>
                )}

                {/* Top Video Status Overlay */}
                <div className="relative z-20 pt-12 px-4 flex items-center justify-between text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white">
                      LIVE FEED
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300">{activeVideo.duration}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Right Action Icons (Like, Comment, Share, Sound disk) */}
                <div className="relative z-20 self-end mr-3 mb-6 flex flex-col items-center gap-4 text-white">
                  
                  {/* Creator Avatar with Follow Button */}
                  <div className="relative mb-1">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden shadow-lg">
                      {activeVideo.category === 'furniture' ? 'MH' : 'LC'}
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-bold">
                      +
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike();
                    }}
                    className="flex flex-col items-center gap-1 group/btn"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      hasLiked ? 'text-rose-500 scale-110' : 'text-white hover:scale-105'
                    }`}>
                      <Heart className={`w-7 h-7 drop-shadow ${hasLiked ? 'fill-rose-500' : 'fill-black/30'}`} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow">
                      {(likeCount / 1000).toFixed(1)}K
                    </span>
                  </button>

                  {/* Comment Button */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                      <MessageCircle className="w-7 h-7 fill-black/30 drop-shadow" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow">{activeVideo.comments}</span>
                  </div>

                  {/* Share Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare();
                    }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                      <Share2 className="w-7 h-7 fill-black/30 drop-shadow" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold drop-shadow">
                      {copiedLink ? 'Copied' : activeVideo.shares}
                    </span>
                  </button>

                  {/* Spinning Audio Disk */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-amber-200 mt-2 animate-spin-slow">
                    <Music className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Video Meta Overlay */}
                <div className="relative z-20 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold">{activeVideo.channelHandle}</span>
                    <span className="text-[10px] text-amber-300 font-mono">Tô Lan Anh (Planner)</span>
                  </div>
                  <p className="text-xs text-zinc-200 line-clamp-2 leading-snug">
                    {activeVideo.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeVideo.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-amber-200/90">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Video Progress Scrubber */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                    <div className={`h-full bg-white transition-all duration-300 ${isPlaying ? 'w-2/3' : 'w-1/3'}`} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown & Playlist (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Active Video Intelligence Card */}
            <div className="editorial-card p-6 bg-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-xs font-mono font-semibold text-[#7D5133]">
                    {activeVideo.category === 'furniture' ? 'Nội thất Minh Huy' : 'Kênh F&B La Cà'}
                  </span>
                  <span className="text-xs font-mono text-[#5C4D43]">
                    CapCut: {activeVideo.capcutTemplate}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-[#9E6B47]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{activeVideo.views} views</span>
                </div>
              </div>

              {/* Hook Analysis */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9E6B47] font-semibold">
                  Hook 3 giây đầu giữ chân khán giả:
                </div>
                <blockquote className="p-3.5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#9E6B47] text-sm text-[#1E1611] font-serif italic">
                  "{activeVideo.hook}"
                </blockquote>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#7D5133] font-semibold">
                  Kỹ thuật sản xuất & Giá trị chuyển đổi:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeVideo.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#ECE4D8] text-xs text-[#4A3A2C]">
                      <span className="text-[#9E6B47] font-bold mr-1">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* External Direct Links */}
              <div className="pt-2 flex flex-wrap gap-3">
                {activeVideo.driveLink && (
                  <a
                    href={activeVideo.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium bg-[#1E1611] text-white hover:bg-[#9E6B47] transition-all"
                  >
                    <FolderDown className="w-3.5 h-3.5" />
                    <span>Mở Folder Google Drive Dự Án</span>
                  </a>
                )}
                {activeVideo.tiktokUrl && (
                  <a
                    href={activeVideo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium border border-[#DECFC0] bg-white text-[#1E1611] hover:bg-[#FAF7F2] transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#9E6B47]" />
                    <span>Xem Trên Ứng Dụng TikTok</span>
                  </a>
                )}
              </div>
            </div>

            {/* Video Playlist Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#7D5133]">
                <span className="uppercase tracking-wider font-semibold">Danh Sách Video ({filteredVideos.length})</span>
                <span>Bấm vào thẻ để phát trên điện thoại</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredVideos.map((video) => {
                  const isSelected = activeVideo.id === video.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(video)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border text-left ${
                        isSelected
                          ? 'bg-white border-[#9E6B47] shadow-md ring-1 ring-[#9E6B47]'
                          : 'bg-white/80 border-[#ECE4D8] hover:bg-white hover:border-[#DECFC0]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${video.gradient} flex items-center justify-center text-white shadow-xs relative overflow-hidden`}>
                          <Play className="w-4 h-4 fill-current drop-shadow" />
                          <span className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/60 px-1 rounded text-white">
                            {video.duration}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[#9E6B47] uppercase font-semibold">
                              {video.category === 'furniture' ? 'Nội Thất' : 'F&B Cafe'}
                            </span>
                            <span className="text-[10px] font-mono text-[#7D5133]">
                              {video.views}
                            </span>
                          </div>
                          <h5 className="text-xs font-serif font-bold text-[#1E1611] line-clamp-1">
                            {video.title}
                          </h5>
                          <p className="text-[11px] text-[#5C4D43] line-clamp-2 leading-snug">
                            {video.hook}
                          </p>
                        </div>
                      </div>
                    </div>
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
