import type { Metadata } from 'next'
import { Balthazar, Inter, IBM_Plex_Mono } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig } from '@/lib/config'
import './globals.css'

// Balthazar only ships a single 400 (regular) weight, no italic —
// used sparingly for display headings, paired with Inter for body text.
const balthazar = Balthazar({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// Third, distinct type family reserved for kickers, stat counters, and
// nav/eyebrow labels — gives copy a "data/editorial" accent instead of
// leaning on Inter for every weight in the hierarchy.
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — 53,000 People, One Discord, Always Online`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    '2,500+ people online right now. Join India\'s biggest Discord hangout — free, instant, and there\'s always someone around to talk to.',
  keywords: ['discord', 'community', 'server', 'chat', 'friends', 'hangout'],
  authors: [{ name: `${siteConfig.name} Team` }],
  verification: {
    google: "w6NUiZO5uyHHC7uKJOp4nGC1Tq3a8Zm7yf8cjt1foMo"
  },
  openGraph: {
    title: `${siteConfig.name} — 53,000 People, One Discord, Always Online`,
    description: '2,500+ people online right now. Free to join, takes about 10 seconds.',
    url: siteConfig.discordInvite,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Discord Server`,
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
    // Site icon — sourced from the brand logo in /public/logo.webp.
    icon: '/logo.webp',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${balthazar.variable} ${inter.variable} ${plexMono.variable} antialiased font-body`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="premium-bg min-h-screen">
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
