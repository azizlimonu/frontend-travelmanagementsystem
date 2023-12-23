import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/lib/Providers';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'leaflet/dist/leaflet.css';
import "react-day-picker/dist/style.css";

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Travel app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>
  )
}
