import type { Metadata } from 'next'
import { Outfit, Spectral } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-spectral',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clubliquidez.com'),
  title: 'ClubLiquidez — Market Trading Education | Courses & Mentorship',
  description:
    'Specialist market trading education: structure, session playbook, risk sizing for metals, and psychology — taught in small batches with live mentorship. Classroom in Kanchipuram; online options. Educational services only.',
  keywords:
    'market trading course, market education, bullion trading training, futures education, trading psychology, risk management market, ClubLiquidez, Kanchipuram trading academy',
  authors: [{ name: 'ClubLiquidez' }],
  icons: {
    icon: '/LC.png',
    shortcut: '/LC.png',
    apple: '/LC.png',
  },
  openGraph: {
    title: 'ClubLiquidez — Market Trading Education',
    description:
      'Structured market curriculum: sessions, risk, and discipline — not signals. Small batches, live labs, and mentorship.',
    url: 'https://clubliquidez.com',
    siteName: 'ClubLiquidez',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClubLiquidez Market Trading Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClubLiquidez — Market Trading Education',
    description: 'Market-focused courses, live labs, and mentorship. Education only.',
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
    <html lang="en">
      <body
        className={`${outfit.variable} ${spectral.variable} font-sans bg-dark-950 text-slate-900 antialiased`}
      >
        <AuthProvider>
          <p className="sr-only">
            Educational services only. We do not provide investment advice, portfolio management, or trade
            signals.
          </p>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid #e8dfd0',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}
