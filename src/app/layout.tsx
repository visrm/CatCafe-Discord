import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CatCafe India — 42,000 People, One Discord, Always Online',
    template: '%s | CatCafe India',
  },
  description:
    '2,500+ people online right now. Join India\'s biggest Discord hangout — free, instant, and there\'s always someone around to talk to.',
  keywords: ['discord', 'community', 'server', 'chat', 'friends', 'hangout'],
  authors: [{ name: 'CatCafe India Team' }],
  verification: {
    google: "w6NUiZO5uyHHC7uKJOp4nGC1Tq3a8Zm7yf8cjt1foMo"
  },
  openGraph: {
    title: 'CatCafe India — 42,000 People, One Discord, Always Online',
    description: '2,500+ people online right now. Free to join, takes about 10 seconds.',
    url: 'https://discord.gg/catcafe',
    siteName: 'Cat Cafe India',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cat Cafe India Discord Server',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
