import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tô Lan Anh — Social Media & Creative Planner Portfolio',
  description: 'Portfolio của Tô Lan Anh: Chuyên gia sáng tạo nội dung mạng xã hội, short-form video TikTok xưởng sản xuất Minh Huy Furniture, kênh F&B La Cà Một Chút và hoạch định chiến dịch truyền thông.',
  keywords: ['Tô Lan Anh', 'Creative Planner', 'Social Media', 'Content Marketing', 'TikTok Creator', 'Minh Huy Furniture', 'La Ca Mot Chut', 'Portfolio'],
  authors: [{ name: 'Tô Lan Anh' }],
  openGraph: {
    title: 'Tô Lan Anh — Social Media & Creative Planner Portfolio',
    description: 'Chuyên gia sáng tạo nội dung & hoạch định chiến dịch truyền thông TikTok/F&B',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF6F0] text-[#3A2E26] selection:bg-[#E5D6C3] selection:text-[#3A2E26]">
        {children}
      </body>
    </html>
  );
}
