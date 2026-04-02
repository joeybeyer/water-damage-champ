import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

const GTM_ID = 'GTM-NKNCMHRL';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.waterdamagechamp.com'),
  alternates: {
    canonical: './',
  },
  title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
  description: 'Professional water damage restoration services. Fast response, licensed technicians, free inspections. Call (888) 510-9436 for emergency service.',
  keywords: 'water damage restoration, water extraction, flood damage repair, mold remediation, emergency water damage',
  openGraph: {
    title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
    description: 'Professional water damage restoration services. Fast response, licensed technicians, free inspections.',
    type: 'website',
    siteName: 'Water Damage Champ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Water Damage Champ - 24/7 Emergency Restoration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
    description: 'Professional water damage restoration services. Fast response, licensed technicians, free inspections.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
