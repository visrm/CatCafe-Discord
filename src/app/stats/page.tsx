import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Server Stats',
  description: `Live member and activity stats for ${siteConfig.name}, pulled from the Discord API.`,
}

export default function StatsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Stats' }]} />
        </div>
        <Stats />
      </main>
      <Footer />
    </>
  )
}
