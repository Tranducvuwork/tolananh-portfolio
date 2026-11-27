'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, ExternalLink, Save, RotateCcw, Eye, EyeOff, 
  Move, ChevronUp, ChevronDown, Upload, CheckCircle2, Sparkles,
  Coffee, Compass, Bike, Sofa, Award, Layers, GraduationCap, Briefcase
} from 'lucide-react';
import { profileData, featuredVideos, caseStudies, certificates } from '@/app/data';

interface BlockState {
  id: string;
  title: string;
  visible: boolean;
  order: number;
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
  const [activePage, setActivePage] = useState<'home' | 'work' | 'experience' | 'skills'>('home');
  const [message, setMessage] = useState<string | null>(null);

  // Home Page Editable Data
  const [homeData, setHomeData] = useState({
    eyebrow: 'Tô Lan Anh · PR Đại Học Văn Lang',
    heading: 'Sáng tạo nội dung short-form &\nKế hoạch truyền thông đa kênh',
    lead: 'Xin chào, mình là Tô Lan Anh. Mình chuyên lên ý tưởng kịch bản, quay dựng short-form video và phát triển các kênh TikTok đa dạng chủ đề: từ trào lưu giới trẻ @toadogenz, phong cách cafe & ẩm thực tone Be ấm áp @la.camotchut, nhà hàng Rooftop Q.1 @bupskycuisine (132.9K views), đến xe máy điện thông minh @datbikehongphuong và lập kế hoạch truyền thông tích hợp (IMC).',
    portraitSrc: profileData.portrait,
    studentPhotoSrc: profileData.studentPhoto || '/images/lananh_vanlang_aodai.jpg',
    stat1Val: '3+',
    stat1Label: 'Kênh TikTok chủ lực',
    stat2Val: '100K+',
    stat2Label: 'Lượt tiếp cận người xem',
    stat3Val: '100%',
    stat3Label: 'Tự lên kịch bản & dựng',
    stat4Val: 'Văn Lang',
    stat4Label: 'Cử nhân PR chuyên nghiệp',
  });

  // Home blocks order & visibility
  const [homeBlocks, setHomeBlocks] = useState<BlockState[]>([
    { id: 'hero', title: '1. Hero Banner & Chân Dung', visible: true, order: 0 },
    { id: 'nav-tabs', title: '2. Thanh Điều Hướng 4 Hạng Mục', visible: true, order: 1 },
    { id: 'channels', title: '3. Các Kênh TikTok Chủ Lực', visible: true, order: 2 },
    { id: 'contact', title: '4. Khối Kêu Gọi Hợp Tác (CTA)', visible: true, order: 3 },
  ]);

  // Work blocks order & visibility
  const [workBlocks, setWorkBlocks] = useState<BlockState[]>([
    { id: 'work-header', title: '1. Banner Giới Thiệu Dự Án', visible: true, order: 0 },
    { id: 'work-genz', title: '2. Kênh Toạ Độ Gen Z (@toadogenz)', visible: true, order: 1 },
    { id: 'work-laca', title: '3. Kênh La Cà Một Chút (Tone Be & Mockup)', visible: true, order: 2 },
    { id: 'work-bupsky', title: '4. Dự Án Búp Sky Cuisine Rooftop Q.1', visible: true, order: 3 },
    { id: 'work-datbike', title: '5. Kênh Datbike Hồng Phương', visible: true, order: 4 },
    { id: 'work-furniture', title: '6. Dự Án Xưởng Minh Huy & Slides', visible: true, order: 5 },
  ]);

  // Experience blocks order & visibility
  const [expBlocks, setExpBlocks] = useState<BlockState[]>([
    { id: 'exp-hero', title: '1. Banner Học Vấn & Profile Snapshot', visible: true, order: 0 },
    { id: 'exp-timeline', title: '2. Dòng Thời Gian Kinh Nghiệm Thực Tế', visible: true, order: 1 },
    { id: 'exp-education', title: '3. Nền Tảng Học Vấn & Ảnh Áo Dài Văn Lang', visible: true, order: 2 },
    { id: 'exp-certificates', title: '4. Chứng Chỉ Marketing & Kỹ Năng Số (QCC & ColorME)', visible: true, order: 3 },
    { id: 'exp-tools', title: '5. Hệ Thống Công Cụ Chuyên Sâu', visible: true, order: 4 },
  ]);

  // Positions (movable offsets)
  const [moves, setMoves] = useState<Record<string, MoveOffset>>({});
  // Resizes
  const [resizes, setResizes] = useState<Record<string, ResizeState>>({});

  // Dragging state
  const draggingRef = useRef<{ id: string; startX: number; startY: number; initX: number; initY: number } | null>(null);
  const resizingRef = useRef<{ id: string; startX: number; startY: number; initW: number; initH: number; axis: 'x' | 'both' } | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tolananh_layout_editor');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.homeData) setHomeData(parsed.homeData);
        if (parsed.homeBlocks) setHomeBlocks(parsed.homeBlocks);
        if (parsed.workBlocks) setWorkBlocks(parsed.workBlocks);
        if (parsed.expBlocks) setExpBlocks(parsed.expBlocks);
        if (parsed.moves) setMoves(parsed.moves);
        if (parsed.resizes) setResizes(parsed.resizes);
        setMessage('Đã nạp bố cục tùy chỉnh từ trình duyệt của bạn.');
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
        homeData,
        homeBlocks,
        workBlocks,
        expBlocks,
        moves,
        resizes,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('tolananh_layout_editor', JSON.stringify(dataToSave));
      setMessage('✅ Đã lưu bố cục thành công! Bạn có thể xem trang trực tiếp ngay bây giờ.');
      setTimeout(() => setMessage(null), 4000);
    } catch (e) {
      console.error(e);
      setMessage('Lỗi khi lưu dữ liệu vào trình duyệt.');
    }
  };

  // Reset to default
  const handleReset = () => {
    if (confirm('Bạn có chắc chắn muốn khôi phục lại bố cục mặc định?')) {
      localStorage.removeItem('tolananh_layout_editor');
      setMoves({});
      setResizes({});
      setMessage('Đã khôi phục lại bố cục mặc định.');
      setTimeout(() => setMessage(null), 3000);
      window.location.reload();
    }
  };

  // Reordering helpers
  const moveBlock = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= blocks.length) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[idx];
    newBlocks[idx] = newBlocks[targetIdx];
    newBlocks[targetIdx] = temp;
    // update order
    newBlocks.forEach((b, i) => { b.order = i; });
    setBlocks(newBlocks);
  };

  const toggleVisibility = (blocks: BlockState[], setBlocks: React.Dispatch<React.SetStateAction<BlockState[]>>, id: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, visible: !b.visible } : b));
  };

  // Mouse drag listeners
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

  // Mouse resize listeners
  const startResize = (id: string, axis: 'x' | 'both', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const targetEl = (e.currentTarget.parentElement as HTMLElement);
    const rect = targetEl.getBoundingClientRect();
    const curr = resizes[id] || {};
    resizingRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      initW: curr.w || rect.width,
      initH: curr.h || rect.height,
      axis,
    };

    const handleMouseMove = (moveEvt: MouseEvent) => {
      if (!resizingRef.current) return;
      const dw = moveEvt.clientX - resizingRef.current.startX;
      const dh = moveEvt.clientY - resizingRef.current.startY;
      setResizes(prev => ({
        ...prev,
        [resizingRef.current!.id]: {
          w: Math.max(260, Math.round(resizingRef.current!.initW + dw)),
          h: resizingRef.current!.axis === 'both' ? Math.max(120, Math.round(resizingRef.current!.initH + dh)) : prev[resizingRef.current!.id]?.h,
        }
      }));
    };

    const handleMouseUp = () => {
      resizingRef.current = null;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Image replacement handler
  const handleImageUpload = (key: 'portraitSrc' | 'studentPhotoSrc', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHomeData(prev => ({ ...prev, [key]: reader.result as string }));
        setMessage('Đã tải ảnh lên xem trước thành công! Nhớ bấm "Save" để lưu lại.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="layout-editor">
      {/* Top Sticky Control Bar */}
      <header className="layout-editor-bar">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <strong className="text-base font-extrabold tracking-tight">
              WordPress Style Layout Editor
            </strong>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#D5CEBE] border border-white/15">
              Live Interactive Mode
            </span>
          </div>

          <p>
            Giữ nút <strong>Move</strong> để dời ô, kéo nút mép phải/dưới để giãn kích thước, nhấp trực tiếp vào chữ để sửa nội dung và bấm <strong>Đổi ảnh</strong> để tải ảnh mới lên.
          </p>

          {/* Page Switcher */}
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
              Dự Án (Work &amp; TikTok)
            </button>
            <button
              type="button"
              onClick={() => setActivePage('experience')}
              className={activePage === 'experience' ? 'is-active' : ''}
            >
              Học Vấn &amp; Kinh Nghiệm
            </button>
            <button
              type="button"
              onClick={() => setActivePage('skills')}
              className={activePage === 'skills' ? 'is-active' : ''}
            >
              Kỹ Năng &amp; Tools
            </button>
          </div>
        </div>

        {/* Global Actions */}
        <div className="layout-editor-actions">
          <Link
            href={activePage === 'home' ? '/' : activePage === 'work' ? '/work' : activePage === 'experience' ? '/working-experience' : '/skills'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Xem Trang Live</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8C5A3C]" />
          </Link>

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
            
            {homeBlocks.map((block, idx) => {
              const moveKey = `home-${block.id}`;
              const offset = moves[moveKey] || { x: 0, y: 0 };
              const resize = resizes[moveKey] || {};

              return (
                <div
                  key={block.id}
                  className={`layout-block ${!block.visible ? 'is-hidden' : ''}`}
                >
                  {/* Block Control Header Bar */}
                  <div className="layout-block-bar">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-200">#{idx + 1}</span>
                      <span>{block.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => moveBlock(homeBlocks, setHomeBlocks, idx, 'up')}
                        disabled={idx === 0}
                        title="Di chuyển lên trên"
                        className="disabled:opacity-40"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(homeBlocks, setHomeBlocks, idx, 'down')}
                        disabled={idx === homeBlocks.length - 1}
                        title="Di chuyển xuống dưới"
                        className="disabled:opacity-40"
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
                            <EyeOff className="w-3 h-3 text-red-600" />
                            <span>Ẩn</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 text-emerald-600" />
                            <span>Hiện</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* BLOCK CONTENT RENDERER */}
                  {block.id === 'hero' && (
                    <section
                      className="p-8 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                      style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        width: resize.w ? `${resize.w}px` : undefined,
                        minHeight: resize.h ? `${resize.h}px` : undefined,
                      }}
                    >
                      <div className="movable is-editing relative">
                        {/* Drag Handle */}
                        <button
                          type="button"
                          onMouseDown={(e) => startDrag(moveKey, e)}
                          className="move-handle"
                          title="Giữ chuột và kéo để dời vị trí ô này"
                        >
                          <Move className="w-3 h-3" />
                          <span>Move</span>
                        </button>

                        {/* Resize Handle */}
                        <button
                          type="button"
                          onMouseDown={(e) => startResize(moveKey, 'both', e)}
                          className="resize-handle axis-both"
                          title="Kéo góc để co giãn kích thước"
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                          {/* Text Left (7 cols) */}
                          <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0]">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => setHomeData({ ...homeData, eyebrow: e.currentTarget.textContent || '' })}
                                className="layout-editable text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]"
                              >
                                {homeData.eyebrow}
                              </span>
                            </div>

                            <h1
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => setHomeData({ ...homeData, heading: e.currentTarget.textContent || '' })}
                              className="layout-editable text-3xl sm:text-4xl font-extrabold text-[#14110F] tracking-tight leading-[1.2]"
                            >
                              {homeData.heading}
                            </h1>

                            <p
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => setHomeData({ ...homeData, lead: e.currentTarget.textContent || '' })}
                              className="layout-editable text-sm text-[#635952] leading-relaxed"
                            >
                              {homeData.lead}
                            </p>

                            {/* Stat Bar */}
                            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-[#ECE4D8] text-center">
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setHomeData({ ...homeData, stat1Val: e.currentTarget.textContent || '' })}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {homeData.stat1Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{homeData.stat1Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setHomeData({ ...homeData, stat2Val: e.currentTarget.textContent || '' })}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {homeData.stat2Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{homeData.stat2Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setHomeData({ ...homeData, stat3Val: e.currentTarget.textContent || '' })}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {homeData.stat3Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{homeData.stat3Label}</div>
                              </div>
                              <div>
                                <div
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={(e) => setHomeData({ ...homeData, stat4Val: e.currentTarget.textContent || '' })}
                                  className="layout-editable font-bold text-xl text-[#14110F]"
                                >
                                  {homeData.stat4Val}
                                </div>
                                <div className="text-[10px] text-[#635952] font-semibold">{homeData.stat4Label}</div>
                              </div>
                            </div>

                          </div>

                          {/* Image Right (5 cols) */}
                          <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden border border-[#DECFC0] shadow-luxury group">
                              <Image
                                src={homeData.portraitSrc}
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
                                  onChange={(e) => handleImageUpload('portraitSrc', e)}
                                />
                              </label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                  )}

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
                            <div className="font-bold text-sm text-[#14110F]">Toạ Độ Gen Z</div>
                            <p className="text-xs text-[#635952]">Xu hướng và đời sống sinh viên Văn Lang.</p>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                            <span className="text-[10px] font-bold text-[#8C5A3C]">@la.camotchut</span>
                            <div className="font-bold text-sm text-[#14110F]">La Cà Một Chút</div>
                            <p className="text-xs text-[#635952]">Cafe, tiệm bánh &amp; phong cách tone Be ấm áp.</p>
                          </div>
                          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] space-y-1">
                            <span className="text-[10px] font-bold text-teal-800">@datbikehongphuong</span>
                            <div className="font-bold text-sm text-[#14110F]">Datbike Hồng Phương</div>
                            <p className="text-xs text-[#635952]">Xe máy điện thông minh &amp; công nghệ xanh.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

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
                          <h3 className="text-xl font-bold text-[#14110F]">Liên Hệ &amp; Hợp Tác Sáng Tạo Nội Dung</h3>
                          <p className="text-xs text-[#635952]">Hotline: 0942.077.335 • Email: lananhto2402@gmail.com</p>
                        </div>
                      </div>
                    </section>
                  )}

                </div>
              );
            })}

          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW 2: WORK / PROJECTS PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'work' && (
          <div className="space-y-6">
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
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => moveBlock(workBlocks, setWorkBlocks, idx, 'up')}
                        disabled={idx === 0}
                        className="disabled:opacity-40"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(workBlocks, setWorkBlocks, idx, 'down')}
                        disabled={idx === workBlocks.length - 1}
                        className="disabled:opacity-40"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleVisibility(workBlocks, setWorkBlocks, block.id)}
                        className="inline-flex items-center gap-1 text-xs"
                      >
                        {block.visible ? <span>Ẩn</span> : <span>Hiện</span>}
                      </button>
                    </div>
                  </div>

                  <div
                    className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                    style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
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

                      <div className="pt-2">
                        <h4 className="font-bold text-base text-[#14110F]">{block.title}</h4>
                        <p className="text-xs text-[#635952] mt-1">
                          Khối này đang được hiển thị trong trang /work. Bạn có thể kéo dời vị trí, thay đổi thứ tự hiển thị bằng các nút mũi tên hoặc bấm "Ẩn" để tạm thời ẩn khỏi trang.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

                  <div
                    className="p-6 bg-white border border-[#DECFC0] rounded-b-2xl shadow-xs"
                    style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
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

                      {block.id === 'exp-education' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                          <div className="sm:col-span-4 relative aspect-[3/4] rounded-xl overflow-hidden border border-[#DECFC0]">
                            <Image
                              src={homeData.studentPhotoSrc}
                              alt="Ảnh Áo Dài Văn Lang"
                              fill
                              className="object-cover object-top"
                            />
                            <label className="image-replace">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Đổi ảnh áo dài</span>
                              <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) => handleImageUpload('studentPhotoSrc', e)}
                              />
                            </label>
                          </div>
                          <div className="sm:col-span-8 space-y-2">
                            <h4 className="font-bold text-lg text-[#14110F]">Đại Học Văn Lang (2022 - 2026)</h4>
                            <p className="text-xs text-[#8C5A3C] font-semibold">Cử nhân Quan Hệ Công Chúng - Truyền Thông (PR Chính Quy)</p>
                            <p className="text-xs text-[#635952] leading-relaxed">
                              Được đào tạo bài bản về nghiên cứu công chúng, định vị thương hiệu, lập kế hoạch truyền thông tích hợp (IMC), quan hệ báo chí và kỹ năng thuyết trình pitching chuyên nghiệp.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-2">
                          <h4 className="font-bold text-base text-[#14110F]">{block.title}</h4>
                          <p className="text-xs text-[#635952] mt-1">
                            Khối nội dung trong trang Học vấn &amp; Kinh nghiệm. Dễ dàng đổi thứ tự khối, dời vị trí hoặc ẩn/hiện.
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW 4: SKILLS PAGE LAYOUT EDITOR */}
        {/* ===================================================================== */}
        {activePage === 'skills' && (
          <div className="p-8 bg-white border border-[#DECFC0] rounded-2xl shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#14110F]">Chỉnh Sửa Khối Kỹ Năng &amp; Hệ Thống Tools</h3>
            <p className="text-sm text-[#635952] leading-relaxed">
              Các kỹ năng chuyên môn (Sản xuất Short-form, Storytelling, Thiết kế Đồ họa, Chiến lược IMC) và bộ công cụ (CapCut Pro, Photoshop, Canva, Meta Suite, TikTok Studio).
            </p>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECFC0] text-xs font-mono text-[#8C5A3C]">
              Bố cục các công cụ và danh mục kỹ năng tuân theo quy chuẩn responsive tự động co giãn.
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
