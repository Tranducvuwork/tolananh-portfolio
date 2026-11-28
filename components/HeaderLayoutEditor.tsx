'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { 
  Layout, Menu, Plus, Trash2, ChevronUp, ChevronDown, 
  Eye, EyeOff, Upload, Download, Phone, CheckCircle2, 
  Sparkles, ExternalLink, Sliders, Globe
} from 'lucide-react';

export interface HeaderNavLink {
  id: string;
  name: string;
  href: string;
  visible: boolean;
}

export interface HeaderConfigState {
  style: 'standard' | 'centered' | 'pill';
  brandName: string;
  avatarSrc: string;
  navLinks: HeaderNavLink[];
  showPhone: boolean;
  phone: string;
  showCv: boolean;
  cvPdf: string;
}

interface HeaderLayoutEditorProps {
  config: HeaderConfigState;
  onChange: (updated: HeaderConfigState) => void;
  onSave: () => void;
}

export default function HeaderLayoutEditor({ config, onChange, onSave }: HeaderLayoutEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateConfig = (key: keyof HeaderConfigState, val: any) => {
    onChange({ ...config, [key]: val });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateConfig('avatarSrc', event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const moveLink = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= config.navLinks.length) return;
    const newLinks = [...config.navLinks];
    const temp = newLinks[idx];
    newLinks[idx] = newLinks[targetIdx];
    newLinks[targetIdx] = temp;
    updateConfig('navLinks', newLinks);
  };

  const toggleLinkVisibility = (id: string) => {
    const newLinks = config.navLinks.map((l) =>
      l.id === id ? { ...l, visible: !l.visible } : l
    );
    updateConfig('navLinks', newLinks);
  };

  const deleteLink = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xoá liên kết menu này?')) {
      const newLinks = config.navLinks.filter((l) => l.id !== id);
      updateConfig('navLinks', newLinks);
    }
  };

  const updateLinkField = (id: string, field: 'name' | 'href', val: string) => {
    const newLinks = config.navLinks.map((l) =>
      l.id === id ? { ...l, [field]: val } : l
    );
    updateConfig('navLinks', newLinks);
  };

  const addNavLink = () => {
    const newLink: HeaderNavLink = {
      id: `nav-${Date.now()}`,
      name: 'Mục Menu Mới',
      href: '/#',
      visible: true,
    };
    updateConfig('navLinks', [...config.navLinks, newLink]);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Intro Banner */}
      <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#8C5A3C] text-white">
              <Layout className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-extrabold text-[#14110F]">
              Trình Chỉnh Sửa Header &amp; Menu Điều Hướng (WordPress Style)
            </h2>
          </div>
          <p className="text-xs text-[#635952] mt-1.5 leading-relaxed">
            Tự do tùy biến phong cách hiển thị Header (Chuẩn / Căn giữa / Con nhộng), chỉnh sửa logo, tên thương hiệu cá nhân và quản lý danh sách menu liên kết.
          </p>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="btn btn-primary btn-sm flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Lưu Cấu Hình Header</span>
        </button>
      </div>

      {/* LIVE PREVIEW OF HEADER */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#8C5A3C] uppercase tracking-wider">
          <span>Xem Trước Header Trực Tiếp (Live Preview)</span>
          <span className="text-[11px] text-[#7A6E65] font-normal">Phong cách hiện tại: <strong>{config.style}</strong></span>
        </div>

        <div className="p-6 rounded-2xl border-2 border-dashed border-[#DECFC0] bg-[#FAF7F2] overflow-x-auto">
          {/* Simulated Header container */}
          <header className="bg-white/95 backdrop-blur-md rounded-xl border border-[rgba(20,17,15,0.08)] px-5 py-3.5 shadow-sm min-w-[650px]">
            <div className={`flex items-center ${config.style === 'centered' ? 'justify-between' : 'justify-between'}`}>
              
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-zinc-200 relative border border-[#DECFC0]">
                  <Image
                    src={config.avatarSrc || '/images/lananh_vanlang_aodai.jpg'}
                    alt={config.brandName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-extrabold text-[#14110F] text-base tracking-tight">
                  {config.brandName}
                </span>
              </div>

              {/* Menu Items */}
              <nav className={`flex items-center gap-1 ${
                config.style === 'pill'
                  ? 'bg-[#F8F6F1] px-4 py-1.5 rounded-full border border-[rgba(20,17,15,0.08)]'
                  : ''
              }`}>
                {config.navLinks
                  .filter((l) => l.visible)
                  .map((link) => (
                    <span
                      key={link.id}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg text-[#635952] hover:text-[#14110F] transition-colors cursor-default"
                    >
                      {link.name}
                    </span>
                  ))}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {config.showCv && (
                  <span className="btn btn-secondary btn-sm !py-1 !px-2.5 text-xs flex items-center gap-1">
                    <Download className="w-3 h-3 text-[#8C5A3C]" />
                    <span>CV PDF</span>
                  </span>
                )}
                {config.showPhone && (
                  <span className="btn btn-primary btn-sm !py-1 !px-3 text-xs flex items-center gap-1">
                    <span>{config.phone}</span>
                  </span>
                )}
              </div>

            </div>
          </header>
        </div>
      </div>

      {/* CONFIGURATION CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Style & Brand (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          
          {/* Header Style Selector */}
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
              1. Bố Cục Giao Diện Header
            </h3>
            
            <div className="space-y-2.5">
              {[
                {
                  id: 'standard',
                  title: 'Bố cục Chuẩn (Standard)',
                  desc: 'Logo góc trái, thanh menu bên phải và các nút liên hệ nổi bật.',
                },
                {
                  id: 'pill',
                  title: 'Phong cách Viên Thuốc (Floating Pill)',
                  desc: 'Menu con nhộng bo tròn hiện đại dạng nổi với hiệu ứng kính mờ.',
                },
                {
                  id: 'centered',
                  title: 'Bố cục Rộng Rãi (Centered Spread)',
                  desc: 'Logo nổi bật kết hợp menu và nút trải rộng cân đối.',
                },
              ].map((styleOption) => (
                <label
                  key={styleOption.id}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                    config.style === styleOption.id
                      ? 'border-[#8C5A3C] bg-[#FAF7F2] shadow-xs'
                      : 'border-[#DECFC0] bg-white hover:bg-zinc-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="headerStyle"
                    value={styleOption.id}
                    checked={config.style === styleOption.id}
                    onChange={() => updateConfig('style', styleOption.id)}
                    className="mt-1 text-[#8C5A3C] focus:ring-[#8C5A3C]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#14110F]">{styleOption.title}</div>
                    <div className="text-[11px] text-[#7A6E65] mt-0.5">{styleOption.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Logo & Name */}
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
              2. Tên &amp; Logo Thương Hiệu
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-[#14110F] block mb-1">Tên hiển thị trên Header:</label>
                <input
                  type="text"
                  value={config.brandName}
                  onChange={(e) => updateConfig('brandName', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2] font-semibold text-[#14110F]"
                />
              </div>

              <div>
                <label className="font-bold text-[#14110F] block mb-1">Ảnh Avatar / Logo:</label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 relative border border-[#DECFC0] flex-shrink-0">
                    <Image
                      src={config.avatarSrc || '/images/lananh_vanlang_aodai.jpg'}
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 bg-[#FAF7F2] border border-[#DECFC0] hover:bg-[#F3ECE0] rounded-lg text-xs font-bold text-[#8C5A3C] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Tải ảnh mới từ máy</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleAvatarUpload}
                    />
                    <div className="text-[11px] text-[#7A6E65]">Khuyến nghị ảnh vuông, rõ nét mặt hoặc logo.</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="font-bold text-[#14110F] block mb-1">Hoặc đường dẫn URL ảnh:</label>
                <input
                  type="text"
                  value={config.avatarSrc}
                  onChange={(e) => updateConfig('avatarSrc', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#DECFC0] bg-[#FAF7F2] text-[11px]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons CTAs */}
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C] pb-2 border-b border-[#ECE4D8]">
              3. Nút Hành Động Phải (CTAs)
            </h3>

            <div className="space-y-4 text-xs">
              {/* CV Button */}
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#14110F] flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Nút Tải CV PDF</span>
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showCv}
                      onChange={(e) => updateConfig('showCv', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#8C5A3C]"></div>
                  </label>
                </div>
                {config.showCv && (
                  <div>
                    <label className="text-[11px] text-[#7A6E65] block mb-1">Đường dẫn file CV:</label>
                    <input
                      type="text"
                      value={config.cvPdf}
                      onChange={(e) => updateConfig('cvPdf', e.target.value)}
                      className="w-full p-2 rounded border border-[#DECFC0] bg-white text-[11px]"
                    />
                  </div>
                )}
              </div>

              {/* Phone Button */}
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#14110F] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8C5A3C]" />
                    <span>Nút Hotline Gọi Điện</span>
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showPhone}
                      onChange={(e) => updateConfig('showPhone', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#8C5A3C]"></div>
                  </label>
                </div>
                {config.showPhone && (
                  <div>
                    <label className="text-[11px] text-[#7A6E65] block mb-1">Số điện thoại hotline:</label>
                    <input
                      type="text"
                      value={config.phone}
                      onChange={(e) => updateConfig('phone', e.target.value)}
                      className="w-full p-2 rounded border border-[#DECFC0] bg-white text-[11px]"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Menu Manager (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-6 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#8C5A3C]">
                  4. Quản Lý Menu Điều Hướng (Navigation Links)
                </h3>
                <p className="text-xs text-[#7A6E65] mt-0.5">
                  Thêm, xoá, đổi tên, thay đổi liên kết hoặc sắp xếp thứ tự hiển thị của các mục menu.
                </p>
              </div>
              <button
                type="button"
                onClick={addNavLink}
                className="px-3.5 py-1.5 bg-[#8C5A3C] hover:bg-[#72452B] text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Thêm Menu</span>
              </button>
            </div>

            {/* Menu List */}
            <div className="space-y-3">
              {config.navLinks.map((link, idx) => (
                <div
                  key={link.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    link.visible ? 'border-[#DECFC0] bg-[#FAF7F2]' : 'border-zinc-200 bg-zinc-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#8C5A3C]">
                        #{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#14110F]">
                        {link.name || 'Chưa đặt tên'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => moveLink(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 rounded-md hover:bg-black/10 disabled:opacity-30 transition-colors"
                        title="Di chuyển lên"
                      >
                        <ChevronUp className="w-4 h-4 text-zinc-700" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveLink(idx, 'down')}
                        disabled={idx === config.navLinks.length - 1}
                        className="p-1 rounded-md hover:bg-black/10 disabled:opacity-30 transition-colors"
                        title="Di chuyển xuống"
                      >
                        <ChevronDown className="w-4 h-4 text-zinc-700" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleLinkVisibility(link.id)}
                        className="p-1 rounded-md hover:bg-black/10 transition-colors"
                        title={link.visible ? 'Ẩn mục này' : 'Hiện mục này'}
                      >
                        {link.visible ? (
                          <Eye className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-red-500" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteLink(link.id)}
                        className="p-1 rounded-md hover:bg-red-50 text-red-600 transition-colors"
                        title="Xoá mục menu này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-[11px] text-[#7A6E65] block mb-1">Tên nhãn (Label):</label>
                      <input
                        type="text"
                        value={link.name}
                        onChange={(e) => updateLinkField(link.id, 'name', e.target.value)}
                        className="w-full p-2 rounded-lg border border-[#DECFC0] bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#7A6E65] block mb-1">Đường dẫn (URL / Href):</label>
                      <input
                        type="text"
                        value={link.href}
                        onChange={(e) => updateLinkField(link.id, 'href', e.target.value)}
                        className="w-full p-2 rounded-lg border border-[#DECFC0] bg-white font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#ECE4D8] flex items-center justify-between">
              <span className="text-xs text-[#7A6E65]">
                Tổng cộng {config.navLinks.length} mục menu. Bấm &quot;Lưu Cấu Hình Header&quot; để áp dụng.
              </span>
              <button
                type="button"
                onClick={onSave}
                className="btn btn-primary btn-sm flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Lưu Thay Đổi</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
