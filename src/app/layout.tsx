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
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.memberCount} People, One Discord, Always Online`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "CatCafe India is one of India's largest active Discord communities — a social Discord server where you can make friends, chat, and hang out with 2,500+ Indians online right now. Free and instant to join.",
  keywords: [
    'catcafe',
    'catcafe india',
    'india',
    'indian discord server',
    'india discord server',
    'indian social server',
    'discord server',
    'social discord server',
    'make friends',
    'make friends online',
    'discord community',
    'indian discord community',
    'discord server india',
    'community',
    'server',
    'chat',
    'friends',
    'hangout',
  ],
  authors: [{ name: `${siteConfig.name} Team` }],
  verification: {
    google: "w6NUiZO5uyHHC7uKJOp4nGC1Tq3a8Zm7yf8cjt1foMo"
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} — One of India's Biggest Active Discord Communities`,
    description:
      "A social Discord server for India — make friends, chat, and hang out. 2,500+ online right now. Free to join, takes about 10 seconds.",
    url: siteConfig.siteUrl,
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
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — One of India's Biggest Active Discord Communities`,
    description:
      "A social Discord server for India — make friends, chat, and hang out. 2,500+ online right now.",
    images: ['/og-image.png'],
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
    // Full icon set generated from /public/logo.webp.
    // `favicon.ico` (multi-res 16/32/48, dark-backed) covers legacy
    // browsers and Google Search's favicon crawler; the PNGs cover
    // modern browsers/PWA install prompts at their native sizes.
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    // Apple requires a fully opaque icon — iOS applies its own rounded
    // mask, so this is square with a solid backing, not transparent.
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization/WebSite structured data — helps search engines
  // understand the entity behind the site (name, url, logo, socials)
  // independent of on-page copy.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.webp`,
    description:
      "CatCafe India is one of India's biggest active Discord communities — a social Discord server to make friends, chat, and hang out.",
    sameAs: [siteConfig.discordInvite],
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${balthazar.variable} ${inter.variable} ${plexMono.variable} antialiased font-body`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="premium-bg min-h-screen">
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
