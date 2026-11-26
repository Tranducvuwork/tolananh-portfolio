import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kỹ Năng & Công Cụ (Skills & Tools) | Tô Lan Anh',
  description: 'Năng lực chuyên môn và hệ thống công cụ làm việc: CapCut, Photoshop, Canva, Meta Business Suite, TikTok Studio, Google Workspace.',
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      <section className="pt-32 pb-4 md:pt-40 md:pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#7D5133] hover:text-[#1E1611] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Trang Chủ</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#1E1611] hover:text-[#9E6B47] transition-colors"
          >
            <span>Xem Các Dự Án Thực Tế</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Render the Skills section as a standalone page */}
      <Skills />

      <Footer />
    </main>
  );
}
