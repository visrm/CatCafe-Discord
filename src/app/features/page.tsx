import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Features',
  description: `Everything ${siteConfig.name} members get access to — events, bots, channels, and more.`,
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Features' }]} />
        </div>
        <Features />
      </main>
      <Footer />
    </>
  )
}
