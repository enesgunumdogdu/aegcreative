import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3nes - Modern Software Agency',
  description: 'Elevating your business to the pinnacle of the digital era with artificial intelligence technologies and modern software solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
