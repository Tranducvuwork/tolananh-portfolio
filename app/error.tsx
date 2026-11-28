'use client';

import { useEffect } from 'react';

export default function GlobalPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[App Error Boundary]:', error);
    // Auto-reload once if a deployment invalidated old JS chunks while tab was open
    if (
      typeof window !== 'undefined' &&
      /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module/i.test(
        error?.message || ''
      )
    ) {
      const reloaded = sessionStorage.getItem('tolananh_chunk_reload');
      if (!reloaded) {
        sessionStorage.setItem('tolananh_chunk_reload', '1');
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F1] text-[#14110F] p-6">
      <div className="max-w-md w-full bg-white border border-[#DECFC0] rounded-2xl p-6 shadow-sm space-y-4 text-center">
        <h2 className="text-lg font-extrabold text-[#14110F]">
          Đang đồng bộ phiên bản mới của trang
        </h2>
        <p className="text-xs text-[#635952] leading-relaxed">
          Trình duyệt vừa gặp xung đột dữ liệu tạm thời hoặc bản cập nhật mới vừa được triển khai. Bấm nút bên dưới để tải lại trang an toàn.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem('tolananh_chunk_reload');
              reset();
              window.location.reload();
            }}
            className="btn btn-primary btn-sm cursor-pointer"
          >
            Tải lại trang ngay
          </button>
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.removeItem('tolananh_site_data');
              } catch {
                // ignore
              }
              window.location.reload();
            }}
            className="btn btn-secondary btn-sm cursor-pointer"
          >
            Xoá bộ nhớ đệm cục bộ &amp; Tải lại
          </button>
        </div>
      </div>
    </div>
  );
}
