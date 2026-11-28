'use client';

import React from 'react';
import { 
  X, Type, Megaphone, BarChart3, Image as ImageIcon, 
  Quote, Play, PhoneCall, Plus, Sparkles, Layers
} from 'lucide-react';
import { CustomBlockContent } from './CustomBlockRenderer';

interface AddBlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: CustomBlockContent['type']) => void;
}

export default function AddBlockModal({ isOpen, onClose, onSelectType }: AddBlockModalProps) {
  if (!isOpen) return null;

  const blockTypes: Array<{
    type: CustomBlockContent['type'];
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
  }> = [
    {
      type: 'rich-text',
      title: 'Khối Đoạn Văn & Nút Bấm (Rich Text & Button)',
      description: 'Tiêu đề lớn, văn bản mô tả tùy biến, và nút bấm hành động chuyển hướng.',
      icon: <Type className="w-6 h-6 text-amber-700" />,
      tag: 'Nội Dung',
    },
    {
      type: 'cta-banner',
      title: 'Khối Banner Kêu Gọi Hành Động (CTA Banner)',
      description: 'Banner nổi bật toàn chiều rộng với nền đổi màu và nút hotline hoặc tải tài liệu.',
      icon: <Megaphone className="w-6 h-6 text-rose-600" />,
      tag: 'Chuyển Đổi',
    },
    {
      type: 'stats-grid',
      title: 'Khối Số Liệu & Thành Tựu (Stats Grid)',
      description: 'Lưới hiển thị 4 con số ấn tượng (Views, Followers, Kênh) kèm chú thích.',
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      tag: 'Thống Kê',
    },
    {
      type: 'media-gallery',
      title: 'Khối Thư Viện Hình Ảnh (Media Gallery)',
      description: 'Bộ sưu tập 3-4 hình ảnh thực tế kèm chú thích và hiệu ứng phóng to.',
      icon: <ImageIcon className="w-6 h-6 text-blue-600" />,
      tag: 'Hình Ảnh',
    },
    {
      type: 'testimonial',
      title: 'Khối Trích Dẫn & Nhận Xét (Testimonial)',
      description: 'Lời khen từ giảng viên, đối tác hoặc quản lý kèm avatar và chức danh.',
      icon: <Quote className="w-6 h-6 text-purple-600" />,
      tag: 'Uy Tín',
    },
    {
      type: 'video-embed',
      title: 'Khối Giới Thiệu Video TikTok (Video Embed)',
      description: 'Thẻ video ngắn kèm mô tả, số liệu lượt xem và nút mở trực tiếp trên TikTok.',
      icon: <Play className="w-6 h-6 text-red-600" />,
      tag: 'Video',
    },
    {
      type: 'quick-contact',
      title: 'Khối Liên Hệ Nhanh (Quick Contact)',
      description: 'Khối liên hệ trực tiếp gồm hotline gọi điện, email và tải hồ sơ CV.',
      icon: <PhoneCall className="w-6 h-6 text-teal-600" />,
      tag: 'Liên Hệ',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#FAF7F2] border border-[#DECFC0] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#ECE4D8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8C5A3C] text-white flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#14110F]">
                Chọn Mẫu Khối Bố Cục (WordPress Block Inserter)
              </h3>
              <p className="text-xs text-[#635952]">
                Chọn một khối mẫu bên dưới để thêm vào trang. Bạn có thể sửa đổi toàn bộ chữ, hình ảnh và đổi màu nền sau khi chèn.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-zinc-500 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of Block Options */}
        <div className="p-5 overflow-y-auto space-y-3">
          {blockTypes.map((item) => (
            <button
              key={item.type}
              type="button"
              onClick={() => {
                onSelectType(item.type);
                onClose();
              }}
              className="w-full text-left p-4 rounded-xl bg-white border border-[#DECFC0] hover:border-[#8C5A3C] hover:shadow-md transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-[#FAF7F2] group-hover:bg-[#F3ECE0] transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#14110F] group-hover:text-[#8C5A3C] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#8C5A3C] border border-[#DECFC0]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#635952] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="self-center flex-shrink-0 text-zinc-400 group-hover:text-[#8C5A3C] transition-colors">
                <Plus className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#ECE4D8] flex items-center justify-between text-xs text-[#7A6E65]">
          <span>Mẹo: Bạn có thể di chuyển lên/xuống (▲/▼) hoặc kéo dời vị trí khối bất kỳ sau khi chèn.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#DECFC0] hover:bg-black/5 text-zinc-700 font-medium"
          >
            Huỷ Bỏ
          </button>
        </div>

      </div>
    </div>
  );
}
