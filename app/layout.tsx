import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'

const CursorParticles = dynamic(() => import('@/components/CursorParticles'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Bella Beauty - Premium Cosmetics',
  description: 'Discover premium cosmetics and beauty products for the modern woman',
  keywords: 'cosmetics, beauty, makeup, skincare, premium',
  authors: [{ name: 'Bella Beauty' }],
  openGraph: {
    title: 'Bella Beauty - Premium Cosmetics',
    description: 'Discover premium cosmetics and beauty products for the modern woman',
    type: 'website',
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
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className="antialiased">
        <div id="root">
          {children}
        </div>
        <CursorParticles />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}