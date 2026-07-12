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
  title: 'Putera Buana Gani — Web Developer & SEO Consultant',
  description:
    'Freelance web developer & SEO consultant. I build websites and make them rank — with an AI-augmented workflow that also covers content, product imagery, and design.',
  keywords: [
    'freelance web developer',
    'SEO consultant',
    'technical SEO',
    'AI-assisted web development',
    'content writing',
    'Putera Buana Gani',
  ],
  authors: [{ name: 'Putera Buana Gani' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Putera Buana Gani — Web Developer & SEO Consultant',
    description: 'I build websites and make them rank. AI-augmented, end-to-end.',
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
