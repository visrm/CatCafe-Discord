import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: `The story behind ${siteConfig.name} and what makes the community different.`,
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        </div>
        <About />
      </main>
      <Footer />
    </>
  )
}
