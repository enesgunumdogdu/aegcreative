import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3nes - Modern Software Agency',
  description: 'Elevating your business to the pinnacle of the digital era with artificial intelligence technologies and modern software solutions.',
  keywords: ['software agency', 'AI solutions', 'web development', 'mobile apps', 'digital transformation', '3nes'],
  authors: [{ name: 'Enes Günümdoğdu', url: 'https://www.enesgunumdogdu.com.tr' }],
  creator: 'Enes Günümdoğdu',
  publisher: '3nes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💜</text></svg>',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegcreative.vercel.app',
    title: '3nes - Modern Software Agency',
    description: 'Elevating your business to the pinnacle of the digital era with artificial intelligence technologies and modern software solutions.',
    siteName: '3nes',
    images: [
      {
        url: 'https://aegcreative.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '3nes - Modern Software Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3nes - Modern Software Agency',
    description: 'AI-powered software solutions for digital transformation. Web development, mobile apps, and custom solutions.',
    creator: '@enesgunumdogdu',
    images: ['https://aegcreative.vercel.app/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
