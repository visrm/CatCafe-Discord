import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about joining and using ${siteConfig.name}.`,
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
