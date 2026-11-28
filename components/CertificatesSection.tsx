'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, ExternalLink, Maximize2, X, Sparkles, ShieldCheck } from 'lucide-react';
import { certificates as defaultCertificates, Certificate } from '@/app/data';
import { useSiteData } from '@/components/SiteDataProvider';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { persisted } = useSiteData();

  const savedCerts = persisted?.siteData?.experience?.certificates;
  const certificates: Certificate[] =
    savedCerts && Array.isArray(savedCerts) && savedCerts.length > 0
      ? defaultCertificates.map((base, idx) => {
          const override = savedCerts[idx];
          if (!override) return base;
          return {
            ...base,
            name: override.name || base.name,
            organization: override.org || base.organization,
            date: override.date || base.date,
            rank: override.rank || base.rank,
            description: override.desc || base.description,
            imageUrl: override.imageSrc || base.imageUrl,
          };
        })
      : defaultCertificates;

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#ECE4D8]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E6B47] uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#9E6B47]" />
            <span>Chứng Chỉ Đào Tạo Chuyên Môn &amp; Marketing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1611] mt-1">
            Chứng Chỉ Đào Tạo Đã Đạt Được
          </h2>
        </div>
        <span className="text-xs font-mono text-[#5C4D43]">
          QCC Mastery Hub (Rank Excellent) • ColorME Photoshop (ID 146641)
        </span>
      </div>

      {/* Grid of 2 certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="editorial-card p-6 bg-white space-y-5 flex flex-col justify-between hover:shadow-luxury transition-all border border-[#DECFC0]"
          >
            <div className="space-y-4">
              {/* Badge & Organization */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133] font-bold">
                  {cert.badge}
                </span>
                <span className="text-[#5C4D43] font-medium">{cert.date}</span>
              </div>

              {/* Certificate Image Preview with click to zoom */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#DECFC0] bg-[#FAF7F2] cursor-pointer group shadow-xs"
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.name}
                  fill
                  unoptimized={cert.imageUrl.startsWith('data:')}
                  className="object-contain group-hover:scale-102 transition-transform duration-300 p-2"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-bold text-[#1E1611] flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#9E6B47]" />
                    <span>Bấm để phóng to xem chứng chỉ</span>
                  </div>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="space-y-1">
                <h3 className="font-sans text-xl font-bold text-[#1E1611]">{cert.name}</h3>
                <div className="text-xs font-mono text-[#9E6B47] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{cert.organization}</span>
                  {cert.rank && (
                    <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Xếp loại: {cert.rank}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-[#5C4D43] leading-relaxed pt-2 border-t border-[#ECE4D8]">
                {cert.description}
              </p>

              <div className="text-[11px] font-mono text-[#7D5133] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#ECE4D8]">
                Người ký duyệt: <strong>{cert.signatory}</strong>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#ECE4D8]">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E1611] text-white text-xs font-semibold hover:bg-[#382C24] transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Xem Bản Gốc Chi Tiết</span>
              </button>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133] text-xs font-semibold hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#9E6B47]" />
                  <span>Tra Cứu Online (#{cert.verifyId})</span>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-white/20 space-y-4 max-h-[95vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE4D8]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E6B47] font-bold">
                  {selectedCert.organization} • {selectedCert.date}
                </span>
                <h3 className="text-xl font-sans font-bold text-[#1E1611]">
                  {selectedCert.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#ECE4D8] text-[#1E1611] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large High-Res Certificate Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-[#ECE4D8]">
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.name}
                fill
                unoptimized={selectedCert.imageUrl.startsWith('data:')}
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C4D43] pt-2">
              <div className="space-y-0.5">
                <div>Người ký: <strong>{selectedCert.signatory}</strong></div>
                {selectedCert.rank && <div>Xếp loại hoàn thành: <strong className="text-emerald-700">{selectedCert.rank}</strong></div>}
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DECFC0] text-[#7D5133] font-semibold hover:bg-white"
                  >
                    <span>Kiểm tra mã #{selectedCert.verifyId}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9E6B47]" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full bg-[#1E1611] text-white font-semibold hover:bg-[#382C24]"
                >
                  Đóng
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
