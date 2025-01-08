import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/Navbar';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: 'SecurePort | Cybersecurity Solutions',
    template: '%s | SecurePort'
  },
  description: 'Leading provider of comprehensive cybersecurity solutions. Protect your digital assets with SecurePort\'s advanced security services and expert consulting.',
  keywords: [
    'cybersecurity',
    'information security',
    'network security',
    'security consulting',
    'cyber protection',
    'SecurePort',
    'digital security',
    'IT security',
    'data protection',
    'security solutions'
  ],
  authors: [{ name: 'SecurePort Team' }],
  creator: 'SecurePort',
  publisher: 'SecurePort',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' }, // emerald-500
    { media: '(prefers-color-scheme: dark)', color: '#059669' },  // emerald-600
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
