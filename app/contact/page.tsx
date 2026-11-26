import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liên Hệ & Kết Nối | Tô Lan Anh Portfolio',
  description: 'Thông tin liên hệ trực tiếp Tô Lan Anh: Phone 0942.077.335, Email lananhto2402@gmail.com, Tải CV PDF chi tiết.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1611]">
      <Navbar />

      <section className="pt-32 pb-6 md:pt-40 md:pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#7D5133] hover:text-[#1E1611] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Trang Chủ</span>
          </Link>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
