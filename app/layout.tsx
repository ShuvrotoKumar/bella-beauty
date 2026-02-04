import type { Metadata } from 'next'
import './globals.css'
import CursorParticles from '@/components/CursorParticles'

export const metadata: Metadata = {
  title: 'Bella Beauty - Premium Cosmetics',
  description: 'Discover premium cosmetics and beauty products for the modern woman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CursorParticles />
        {children}
      </body>
    </html>
  )
}