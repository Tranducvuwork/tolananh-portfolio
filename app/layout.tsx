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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF6F0] text-[#2D231C] selection:bg-[#E5D6C3] selection:text-[#2D231C] antialiased">
        {children}
      </body>
    </html>
  );
}
