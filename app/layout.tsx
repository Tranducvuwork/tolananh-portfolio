import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tô Lan Anh · Social Media & Creative Planner',
  description: 'Portfolio của Tô Lan Anh: Creative Planner & Social Media. Xây dựng short-form video TikTok xưởng nội thất Minh Huy Furniture, kênh F&B La Cà Một Chút và hoạch định chiến dịch truyền thông.',
  authors: [{ name: 'Tô Lan Anh' }],
  icons: {
    icon: '/images/avatar.jpg',
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
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8F6F1] text-[#14110F] antialiased">
        {children}
      </body>
    </html>
  );
}
