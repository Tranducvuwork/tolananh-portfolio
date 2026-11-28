'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, Plus, Trash2, ChevronUp, ChevronDown, 
  CheckCircle2, Download, ArrowUp, Coffee, Globe
} from 'lucide-react';

export interface FooterSocialLink {
  id: string;
  name: string;
  href: string;
}

export interface FooterConfigState {
  brandName: string;
  slogan: string;
  phone: string;
  email: string;
  copyright: string;
  socialLinks: FooterSocialLink[];
}

interface FooterLayoutEditorProps {
  config: FooterConfigState;
  onChange: (updated: FooterConfigState) => void;
  onSave: () => void;
}

export default function FooterLayoutEditor({ config, onChange, onSave }: FooterLayoutEditorProps) {
  const updateConfig = (key: keyof FooterConfigState, val: any) => {
    onChange({ ...config, [key]: val });
  };

  const moveSocial = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= config.socialLinks.length) return;
    const newLinks = [...config.socialLinks];
    const temp = newLinks[idx];
    newLinks[idx] = newLinks[targetIdx];
    newLinks[targetIdx] = temp;
    updateConfig('socialLinks', newLinks);
  };

  const deleteSocial = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xoá liên kết chân trang này?')) {
      const newLinks = config.socialLinks.filter((s) => s.id !== id);
      updateConfig('socialLinks', newLinks);
    }
  };

  const updateSocialField = (id: string, field: 'name' | 'href', val: string) => {
    const newLinks = config.socialLinks.map((s) =>
      s.id === id ? { ...s, [field]: val } : s
    );
    updateConfig('socialLinks', newLinks);
  };

  const addSocialLink = () => {
    const newLink: FooterSocialLink = {
      id: `soc-${Date.now()}`,
      name: 'Kênh Mới / Mạng Xã Hội',
      href: 'https://www.tiktok.com/@toadogenz',
    };
    updateConfig('socialLinks', [...config.socialLinks, newLink]);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Intro Banner */}
      <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#14110F] text-white">
              <Globe className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-extrabold text-[#14110F]">
              Trình Chỉnh Sửa Footer &amp; Mạng Xã Hội (WordPress Style)
            </h2>
          </div>
          <p className="text-xs text-[#635952] mt-1.5 leading-relaxed">
            Chỉnh sửa tiêu đề, mô tả chân trang, số hotline, email liên hệ, bản quyền tác giả và quản lý danh sách kênh TikTok / mạng xã hội liên kết.
          </p>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="btn btn-primary btn-sm flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Lưu Cấu Hình Footer</span>
        </button>
      </div>

      {/* LIVE PREVIEW OF FOOTER */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#8C5A3C] uppercase tracking-wider">
          <span>Xem Trước Footer Trực Tiếp (Live Preview)</span>
          <span className="text-[11px] text-[#7A6E65] font-normal">Tự động cập nhật tức thì</span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#DECFC0] shadow-sm">
          <footer className="py-10 px-8 bg-[#14110F] text-[#D5CEBE]">
            <div className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/10">
                {/* Brand Info */}
                <div className="md:col-span-5 space-y-2">
                  <div className="text-xl font-extrabold text-white">{config.brandName}</div>
                  <p className="text-xs text-[#A68C72] leading-relaxed max-w-sm">
                    {config.slogan}
                  </p>
                  <div className="text-[11px] text-[#D5CEBE] pt-1">
                    Hotline: <strong className="text-white">{config.phone}</strong> · Email: <strong className="text-white">{config.email}</strong>
                  </div>
                </div>

                {/* Navigation Links: Pages */}
                <div className="md:col-span-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C7B198]">
                    Danh Mục Trang
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-zinc-300">
                    <span>Trang Chủ (Giới thiệu)</span>
                    <span>Dự Án Đã Làm (Work)</span>
                    <span>Học Vấn &amp; Kinh Nghiệm</span>
                    <span>Kỹ Năng &amp; Hệ Thống Tools</span>
                    <span>Liên Hệ Trực Tiếp</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="md:col-span-3 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C7B198]">
                    Các Kênh TikTok
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-zinc-300">
                    {config.socialLinks.map((s) => (
                      <div key={s.id} className="hover:text-white transition-colors">
                        {s.name}
                      </div>
                    ))}
                    <div className="text-[#8C5A3C] flex items-center gap-1 pt-1 font-semibold">
                      <Download className="w-3 h-3" />
                      <span>Tải Hồ Sơ CV PDF</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C5A3C]">
                <div>{config.copyright}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px]">
                  <span>Lên đầu trang</span>
                  <ArrowUp className="w-3 h-3" />
                </div>
              </div>

            </div>
          </footer>
        </div>
      </div>

      {/* FOOTER CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Brand & Contact Info (6 cols) */}
        <div className="md:col-span-6 space-y-6">
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
              1. Thông Tin &amp; Giới Thiệu Chân Trang
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-[#14110F] block mb-1">Tên thương hiệu trong Footer:</label>
                <input
                  type="text"
                  value={config.brandName}
                  onChange={(e) => updateConfig('brandName', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2] font-semibold text-[#14110F]"
                />
              </div>

              <div>
                <label className="font-bold text-[#14110F] block mb-1">Mô tả / Slogan chân trang:</label>
                <textarea
                  rows={3}
                  value={config.slogan}
                  onChange={(e) => updateConfig('slogan', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Số điện thoại hotline:</label>
                  <input
                    type="text"
                    value={config.phone}
                    onChange={(e) => updateConfig('phone', e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#14110F] block mb-1">Email liên hệ:</label>
                  <input
                    type="email"
                    value={config.email}
                    onChange={(e) => updateConfig('email', e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#14110F] block mb-1">Dòng chữ bản quyền (Copyright):</label>
                <input
                  type="text"
                  value={config.copyright}
                  onChange={(e) => updateConfig('copyright', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2] font-mono text-[11px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Social & Channel Links (6 cols) */}
        <div className="md:col-span-6 space-y-6">
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C]">
                  2. Kênh TikTok &amp; Mạng Xã Hội
                </h3>
                <p className="text-xs text-[#7A6E65] mt-0.5">
                  Quản lý danh sách các kênh và đường link xuất hiện tại cột thứ 3 của Footer.
                </p>
              </div>
              <button
                type="button"
                onClick={addSocialLink}
                className="px-3 py-1.5 bg-[#8C5A3C] hover:bg-[#72452B] text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Thêm Kênh</span>
              </button>
            </div>

            {/* List of social links */}
            <div className="space-y-3">
              {config.socialLinks.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl border border-[#DECFC0] bg-[#FAF7F2] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8C5A3C]">
                      #{idx + 1}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => moveSocial(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 rounded hover:bg-black/10 disabled:opacity-30"
                        title="Di chuyển lên"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveSocial(idx, 'down')}
                        disabled={idx === config.socialLinks.length - 1}
                        className="p-1 rounded hover:bg-black/10 disabled:opacity-30"
                        title="Di chuyển xuống"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteSocial(item.id)}
                        className="p-1 rounded hover:bg-red-50 text-red-600"
                        title="Xoá liên kết này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-[11px] text-[#7A6E65] block mb-1">Tên kênh:</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateSocialField(item.id, 'name', e.target.value)}
                        className="w-full p-2 rounded-lg border border-[#DECFC0] bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#7A6E65] block mb-1">Đường dẫn liên kết (URL):</label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => updateSocialField(item.id, 'href', e.target.value)}
                        className="w-full p-2 rounded-lg border border-[#DECFC0] bg-white font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#ECE4D8] flex items-center justify-between">
              <span className="text-xs text-[#7A6E65]">
                Tổng cộng {config.socialLinks.length} kênh trong Footer.
              </span>
              <button
                type="button"
                onClick={onSave}
                className="btn btn-primary btn-sm flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Lưu Cấu Hình</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
