import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export const metadata: Metadata = {
  title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
  description: 'Professional water damage restoration services. Fast response, licensed technicians, free inspections. Call (888) 510-9436 for emergency service.',
  keywords: 'water damage restoration, water extraction, flood damage repair, mold remediation, emergency water damage',
  openGraph: {
    title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
    description: 'Professional water damage restoration services. Fast response, licensed technicians, free inspections.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
