import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CatCafe India — Join the Fun on Discord',
    template: '%s | CatCafe India',
  },
  description:
    'A vibrant, welcoming Discord community where curious people hang out, share ideas, and have fun together. Join thousands of members today!',
  keywords: ['discord', 'community', 'server', 'chat', 'friends', 'hangout'],
  authors: [{ name: 'CatCafe India Team' }],
  openGraph: {
    title: 'CatCafe India — Join the Fun on Discord',
    description: 'A vibrant, welcoming Discord community where curious people hang out.',
    url: 'https://discord.gg/catcafe',
    siteName: 'CatCafe India',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CatCafe India Discord Server',
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
