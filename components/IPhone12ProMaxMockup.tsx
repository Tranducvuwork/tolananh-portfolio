'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export interface TikTokProfileHeader {
  name: string;
  handle: string;
  avatarSrc: string;
  following: string;
  followers: string;
  likes: string;
  bioLines: string[];
  actionBtn1?: string;
  actionBtn2?: string;
}

interface IPhone12ProMaxMockupProps {
  channelName: string;
  handle: string;
  tiktokUrl: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  badgeText?: string;
  profileHeader?: TikTokProfileHeader;
}

export default function IPhone12ProMaxMockup({
  channelName,
  handle,
  tiktokUrl,
  imageSrc,
  imageAlt,
  imageWidth = 560,
  imageHeight = 1024,
  badgeText = '👆 Cuộn chuột hoặc Kéo vuốt để lướt màn hình ảo',
  profileHeader,
}: IPhone12ProMaxMockupProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  // Mouse Down to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!screenRef.current) return;
    setIsDragging(true);
    setStartY(e.pageY);
    setInitialScrollTop(screenRef.current.scrollTop);
  };

  // Window-level mouse move & up listeners while dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!screenRef.current) return;
      e.preventDefault();
      const deltaY = e.pageY - startY;
      screenRef.current.scrollTop = initialScrollTop - deltaY * 1.5;
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: false });
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isDragging, startY, initialScrollTop]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Outer Phone Wrapper (Constrained responsive sizing) */}
      <div className="relative w-full max-w-[335px] sm:max-w-[365px] md:max-w-[375px] mx-auto py-2">
        
        {/* iPhone 12 Pro Max Hardware Outer Frame */}
        <div className="iphone-12-pro-max group relative select-none">
          
          {/* Hardware Side Buttons */}
          <div className="iphone-btn mute-switch" title="Mute Switch" />
          <div className="iphone-btn volume-up" title="Volume Up" />
          <div className="iphone-btn volume-down" title="Volume Down" />
          <div className="iphone-btn power-button" title="Side Button" />

          {/* Stainless Steel Outer Rim Highlight */}
          <div className="absolute inset-0 rounded-[48px] sm:rounded-[52px] pointer-events-none ring-1 ring-white/20 z-30" />

          {/* iPhone 12 Pro Max Iconic Notch */}
          <div className="iphone-notch z-40">
            {/* Speaker Earpiece */}
            <div className="iphone-speaker" />
            {/* Front TrueDepth Camera Lens */}
            <div className="iphone-camera" />
          </div>

          {/* Top Status Bar (9:41, 5G, Battery) with dark gradient background */}
          <div className="iphone-status-bar z-30">
            <span className="text-[11px] font-semibold tracking-tight text-white/90 pl-3">9:41</span>
            <div className="flex items-center gap-1.5 pr-3 text-[10px] text-white/80 font-mono">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/15 text-white/90 font-medium">{handle}</span>
              <div className="w-4 h-2 rounded-[2px] border border-white/60 p-[1px] flex items-center">
                <div className="h-full w-full bg-emerald-400 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Scrollable Virtual Screen */}
          <div
            ref={screenRef}
            className={`iphone-screen ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            tabIndex={0}
            role="region"
            aria-label={`Màn hình ảo iPhone 12 Pro Max kênh ${channelName}`}
          >
            {/* Inner Content Feed */}
            <div className="relative w-full pt-8 pb-10 select-none">
              
              {/* Optional TikTok Profile Header (Profile info at top before video grid) */}
              {profileHeader && (
                <div className="w-full bg-black text-white px-4 pt-1 pb-2 flex flex-col items-center border-b border-zinc-900/60">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-800 my-1 bg-zinc-900 shadow-md">
                    <Image
                      src={profileHeader.avatarSrc}
                      alt={profileHeader.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name & Handle */}
                  <div className="flex items-center gap-1 mt-1">
                    <span className="font-bold text-sm text-white tracking-tight">{profileHeader.name}</span>
                    <span className="text-[10px] text-zinc-400">🔻</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5">{profileHeader.handle}</span>

                  {/* Metrics: Following / Followers / Likes */}
                  <div className="flex items-center justify-center gap-6 mt-3 text-center">
                    <div>
                      <div className="font-extrabold text-sm text-white tracking-tight">{profileHeader.following}</div>
                      <div className="text-[10px] text-zinc-400 font-medium">Đang follow</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-white tracking-tight">{profileHeader.followers}</div>
                      <div className="text-[10px] text-zinc-400 font-medium">Follower</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-white tracking-tight">{profileHeader.likes}</div>
                      <div className="text-[10px] text-zinc-400 font-medium">Thích</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-3 w-full max-w-[260px]">
                    <button className="flex-1 py-1.5 px-3 rounded-md bg-zinc-800 text-white text-[11px] font-semibold pointer-events-none">
                      {profileHeader.actionBtn1 || 'Sửa hồ sơ'}
                    </button>
                    <button className="flex-1 py-1.5 px-3 rounded-md bg-zinc-800 text-white text-[11px] font-semibold pointer-events-none">
                      {profileHeader.actionBtn2 || 'Chia sẻ hồ sơ'}
                    </button>
                  </div>

                  {/* Bio lines */}
                  <div className="mt-3 text-center text-[11px] text-zinc-300 leading-snug space-y-0.5">
                    {profileHeader.bioLines.map((line, idx) => (
                      <div key={idx} className="truncate max-w-[280px]">{line}</div>
                    ))}
                  </div>

                  {/* Tabs bar */}
                  <div className="w-full flex items-center justify-around border-t border-zinc-800/80 mt-3 pt-2 text-zinc-400">
                    <div className="flex flex-col items-center text-white pb-1 border-b-2 border-white px-3">
                      <span className="text-xs">⊞</span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                      <span className="text-xs">🔒</span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                      <span className="text-xs">⇄</span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                      <span className="text-xs">🔖</span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                      <span className="text-xs">♡</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Grid Image */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                priority
                className="w-full h-auto object-contain object-top block select-none pointer-events-none"
              />

              {/* TikTok Bottom Bar Mockup */}
              <div className="w-full bg-black/95 border-t border-zinc-800/80 py-2.5 px-4 flex items-center justify-around text-zinc-400 text-[10px]">
                <div className="flex flex-col items-center gap-0.5 text-white font-medium">
                  <span className="text-xs">🏠</span>
                  <span>Trang chủ</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-xs">👥</span>
                  <span>Bạn bè</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-7 h-5 rounded-md bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    +
                  </div>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-xs">💬</span>
                  <span>Hộp thư</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-white font-medium">
                  <span className="text-xs">👤</span>
                  <span className="text-white font-bold">Hồ sơ</span>
                </div>
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="iphone-home-indicator" />
          </div>
        </div>
      </div>

      {/* Interaction Hint Badge */}
      <div className="inline-flex items-center gap-1.5 text-xs text-[#8C5A3C] font-semibold mt-3 bg-white px-4 py-1.5 rounded-full border border-[rgba(20,17,15,0.08)] shadow-xs">
        <span className="animate-bounce text-sm">👆</span>
        <span>{badgeText}</span>
      </div>

      {/* Direct Open Button */}
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary btn-sm mt-2 text-xs"
      >
        <span>Mở Kênh TikTok {handle}</span>
        <ExternalLink className="w-3.5 h-3.5 text-[#8C5A3C]" />
      </a>
    </div>
  );
}
