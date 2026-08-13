import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Members',
  description: `What real ${siteConfig.name} members have to say about the community.`,
}

export default function MembersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Members' }]} />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
