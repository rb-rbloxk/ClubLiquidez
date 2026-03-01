import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ClubLiquidez - Professional Forex & Gold Trading Academy',
  description: 'Master the markets with structured trading education. Professional training in price action, risk management, and trading psychology — online and offline. Education center in Kanchipuram, Tamil Nadu.',
  keywords: 'trading academy, forex education, gold trading course, trading psychology, risk management, ClubLiquidez, market education, Kanchipuram, mentorship',
  authors: [{ name: 'ClubLiquidez Team' }],
  icons: {
    icon: '/LC.png',
    shortcut: '/LC.png',
    apple: '/LC.png',
  },
  openGraph: {
    title: 'ClubLiquidez - Professional Forex & Gold Trading Academy',
    description: 'Structured trading education in price action, risk management, and psychology. Online and offline batches. Market Educational Services.',
    url: 'https://clubliquidez.com',
    siteName: 'ClubLiquidez',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClubLiquidez Trading Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClubLiquidez - Professional Forex & Gold Trading Academy',
    description: 'Structured trading education in price action, risk management, and psychology. Online and offline batches.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-950 text-white antialiased`}>
        <AuthProvider>
          <p className="sr-only">We provide educational services only. We do not provide investment advice or manage funds.</p>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
} 