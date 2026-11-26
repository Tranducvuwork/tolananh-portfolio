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
    <main className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#14110F]">
      <Navbar />

      <section className="pt-8 pb-4">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C5A3C] hover:text-[#14110F] transition-colors"
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
