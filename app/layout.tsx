import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Putera Buana Gani — Digital Marketing Specialist & Designer',
  description:
    'Premium freelance Digital Marketing Specialist, Graphic Designer, and Data Entry Professional. Building brands that perform.',
  keywords: [
    'freelance digital marketing',
    'graphic designer',
    'landing page designer',
    'data entry specialist',
    'Putera Buana Gani',
  ],
  authors: [{ name: 'Putera Buana Gani' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Putera Buana Gani — Digital Marketing Specialist & Designer',
    description: 'Building brands that actually perform.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
