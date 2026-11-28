'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, ArrowRight, Download, Phone, Mail, 
  ExternalLink, Quote, Play, CheckCircle2, Star, Layers
} from 'lucide-react';

export interface CustomBlockContent {
  type: 'rich-text' | 'cta-banner' | 'stats-grid' | 'media-gallery' | 'testimonial' | 'video-embed' | 'quick-contact';
  heading?: string;
  subheading?: string;
  body?: string;
  btnText?: string;
  btnUrl?: string;
  bgColor?: 'white' | 'cream' | 'dark' | 'amber';
  align?: 'left' | 'center';
  items?: Array<{
    title?: string;
    value?: string;
    desc?: string;
    image?: string;
    url?: string;
  }>;
  quoteAuthor?: string;
  quoteRole?: string;
  quoteAvatar?: string;
}

interface CustomBlockRendererProps {
  content: CustomBlockContent;
  isEditable?: boolean;
  onUpdate?: (updatedContent: CustomBlockContent) => void;
}

export default function CustomBlockRenderer({
  content,
  isEditable = false,
  onUpdate,
}: CustomBlockRendererProps) {
  const bgStyles = {
    white: 'bg-white text-[#14110F] border border-[#DECFC0]',
    cream: 'bg-[#F8F6F1] text-[#14110F] border border-[#DECFC0]',
    dark: 'bg-[#14110F] text-white border border-white/10',
    amber: 'bg-[#FFF9F2] text-[#14110F] border border-[#E8D7C3]',
  };

  const currentBg = bgStyles[content.bgColor || 'white'];
  const alignClass = content.align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  const updateField = (field: keyof CustomBlockContent, val: any) => {
    if (onUpdate) {
      onUpdate({ ...content, [field]: val });
    }
  };

  // 1. RICH TEXT BLOCK
  if (content.type === 'rich-text') {
    return (
      <div className={`p-8 md:p-12 rounded-2xl shadow-xs transition-all ${currentBg}`}>
        <div className={`max-w-3xl flex flex-col gap-4 ${alignClass}`}>
          {content.subheading && (
            <div
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => updateField('subheading', e.currentTarget.textContent || '')}
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit ${
                content.bgColor === 'dark' ? 'bg-white/10 text-[#C7B198]' : 'bg-[#FAF7F2] text-[#8C5A3C] border border-[#DECFC0]'
              }`}
            >
              {content.subheading}
            </div>
          )}

          <h2
            contentEditable={isEditable}
            suppressContentEditableWarning
            onBlur={(e) => updateField('heading', e.currentTarget.textContent || '')}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug"
          >
            {content.heading || 'Tiêu đề khối nội dung mới'}
          </h2>

          <div
            contentEditable={isEditable}
            suppressContentEditableWarning
            onBlur={(e) => updateField('body', e.currentTarget.textContent || '')}
            className={`text-sm md:text-base leading-relaxed ${content.bgColor === 'dark' ? 'text-zinc-300' : 'text-[#635952]'}`}
          >
            {content.body || 'Nhấp vào đây để soạn thảo nội dung mô tả chi tiết cho khối này.'}
          </div>

          {content.btnText && (
            <div className="pt-2">
              <a
                href={content.btnUrl || '#'}
                target={content.btnUrl?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                  content.bgColor === 'dark'
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-[#14110F] text-white hover:bg-[#8C5A3C]'
                }`}
              >
                <span>{content.btnText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. CTA BANNER
  if (content.type === 'cta-banner') {
    return (
      <div className={`p-8 md:p-14 rounded-3xl shadow-sm text-center relative overflow-hidden ${currentBg}`}>
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5A3C] bg-white/80 px-3.5 py-1 rounded-full border border-black/5">
            {content.subheading || 'Hợp Tác & Truyền Thông'}
          </span>
          <h2
            contentEditable={isEditable}
            suppressContentEditableWarning
            onBlur={(e) => updateField('heading', e.currentTarget.textContent || '')}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
          >
            {content.heading || 'Sẵn sàng khởi động chiến dịch truyền thông bùng nổ?'}
          </h2>
          <p
            contentEditable={isEditable}
            suppressContentEditableWarning
            onBlur={(e) => updateField('body', e.currentTarget.textContent || '')}
            className={`text-sm sm:text-base ${content.bgColor === 'dark' ? 'text-zinc-300' : 'text-[#635952]'}`}
          >
            {content.body || 'Liên hệ ngay cùng Tô Lan Anh để cùng lên ý tưởng kịch bản và sản xuất video TikTok triệu view.'}
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={content.btnUrl || 'tel:0942077335'}
              className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#8C5A3C] text-white hover:bg-[#72452B] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{content.btnText || 'Gọi 0942 077 335'}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 3. STATS GRID BLOCK
  if (content.type === 'stats-grid') {
    const items = content.items && content.items.length > 0 ? content.items : [
      { value: '100K+', title: 'Tổng lượt xem', desc: 'Trên các nền tảng video ngắn' },
      { value: '4+', title: 'Kênh TikTok', desc: 'Đã xây dựng & phát triển' },
      { value: '100%', title: 'Tự sản xuất', desc: 'Lên kịch bản, quay & hậu kỳ' },
      { value: 'Văn Lang', title: 'Cử nhân PR', desc: 'Chuyên nghiệp & bài bản' },
    ];

    return (
      <div className={`p-8 rounded-2xl shadow-xs ${currentBg}`}>
        {content.heading && (
          <div className="mb-6 text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{content.heading}</h3>
            {content.body && <p className="text-xs text-[#635952] mt-1">{content.body}</p>}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white/70 border border-[#DECFC0]/60 text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#8C5A3C] tracking-tight">{item.value}</div>
              <div className="text-xs font-bold text-[#14110F]">{item.title}</div>
              {item.desc && <div className="text-[11px] text-[#7A6E65]">{item.desc}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. MEDIA GALLERY BLOCK
  if (content.type === 'media-gallery') {
    const items = content.items && content.items.length > 0 ? content.items : [
      { image: '/images/lananh_vanlang_aodai.jpg', title: 'Tô Lan Anh · PR Văn Lang' },
      { image: '/images/channels/toadogenz_channel.jpg', title: 'Kênh Toạ Độ Gen Z' },
      { image: '/images/channels/bupsky_channel.jpg', title: 'Búp Sky Cuisine' },
    ];

    return (
      <div className={`p-8 rounded-2xl shadow-xs ${currentBg}`}>
        {content.heading && (
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{content.heading}</h3>
            {content.body && <p className="text-xs text-[#635952] mt-1">{content.body}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(items.length, 3)} gap-4`}>
          {items.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-[#DECFC0] bg-white group">
              <div className="relative aspect-4/3 w-full bg-zinc-100 overflow-hidden">
                <Image
                  src={item.image || '/images/lananh_vanlang_aodai.jpg'}
                  alt={item.title || 'Gallery image'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {item.title && (
                <div className="p-3 text-xs font-semibold text-[#14110F] text-center bg-white border-t border-[#DECFC0]">
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. TESTIMONIAL BLOCK
  if (content.type === 'testimonial') {
    return (
      <div className={`p-8 md:p-10 rounded-2xl shadow-xs relative ${currentBg}`}>
        <Quote className="w-10 h-10 text-[#8C5A3C]/20 mb-4" />
        <blockquote
          contentEditable={isEditable}
          suppressContentEditableWarning
          onBlur={(e) => updateField('body', e.currentTarget.textContent || '')}
          className="text-lg sm:text-xl font-medium italic leading-relaxed mb-6"
        >
          &ldquo;{content.body || 'Tô Lan Anh là một bạn trẻ rất năng động, nắm bắt xu hướng nhanh nhạy và có tư duy hình ảnh, kịch bản video ngắn cực kỳ chỉn chu.'}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 relative border border-[#DECFC0]">
            <Image
              src={content.quoteAvatar || '/images/lananh_vanlang_aodai.jpg'}
              alt={content.quoteAuthor || 'Author'}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => updateField('quoteAuthor', e.currentTarget.textContent || '')}
              className="text-sm font-bold text-[#14110F]"
            >
              {content.quoteAuthor || 'Mentor / Giảng Viên PR Văn Lang'}
            </div>
            <div
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => updateField('quoteRole', e.currentTarget.textContent || '')}
              className="text-xs text-[#7A6E65]"
            >
              {content.quoteRole || 'Khoa Quan hệ Công chúng — Truyền thông'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. VIDEO EMBED / TIKTOK CARD
  if (content.type === 'video-embed') {
    return (
      <div className={`p-8 rounded-2xl shadow-xs ${currentBg}`}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 aspect-video bg-black/90 rounded-xl relative overflow-hidden flex items-center justify-center text-white">
            <Play className="w-12 h-12 text-white/80" />
            <span className="absolute bottom-3 left-3 text-xs bg-black/60 px-2 py-1 rounded font-mono">
              TikTok Video Player
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A3C] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#DECFC0]">
              {content.subheading || 'TikTok Video Nổi Bật'}
            </span>
            <h3
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => updateField('heading', e.currentTarget.textContent || '')}
              className="text-xl sm:text-2xl font-extrabold tracking-tight"
            >
              {content.heading || 'Chiến dịch video viral TikTok'}
            </h3>
            <p
              contentEditable={isEditable}
              suppressContentEditableWarning
              onBlur={(e) => updateField('body', e.currentTarget.textContent || '')}
              className="text-xs sm:text-sm text-[#635952]"
            >
              {content.body || 'Video ngắn sáng tạo bắt kịp trào lưu, tỷ lệ giữ chân người xem cao và tương tác tự nhiên.'}
            </p>
            <div className="pt-2">
              <a
                href={content.btnUrl || 'https://www.tiktok.com/@toadogenz'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-xs uppercase bg-[#14110F] text-white hover:bg-[#8C5A3C] transition-colors"
              >
                <span>Xem trên TikTok</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. QUICK CONTACT
  return (
    <div className={`p-8 md:p-10 rounded-2xl shadow-xs text-center ${currentBg}`}>
      <h3 className="text-2xl font-extrabold tracking-tight mb-2">
        {content.heading || 'Liên Hệ & Kết Nối Trực Tiếp'}
      </h3>
      <p className="text-xs sm:text-sm text-[#635952] max-w-md mx-auto mb-6">
        {content.body || 'Kết nối nhanh cùng Tô Lan Anh cho các cơ hội thực tập, hợp tác dự án truyền thông và sản xuất video.'}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="tel:0942077335"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-[#8C5A3C] text-white hover:bg-[#72452B] transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Hotline: 0942 077 335</span>
        </a>
        <a
          href="mailto:tolananh204@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-white text-[#14110F] border border-[#DECFC0] hover:bg-zinc-50 transition-all"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>tolananh204@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
