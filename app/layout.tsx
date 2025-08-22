import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AegCreative - Modern Yazılım Ajansı',
  description: 'Yapay zeka teknolojileri ve modern yazılım çözümleri ile işinizi dijital çağın zirvesine taşıyoruz.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
