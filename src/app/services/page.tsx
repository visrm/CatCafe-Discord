import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig, servicesDirectory } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Services',
  description: `Advertise your product or promote your Discord server to ${siteConfig.name}'s ${siteConfig.memberCount} members.`,
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              For Advertisers & Server Owners
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Reach {siteConfig.memberCount}
              <br />
              <span className="text-brand-coral">people who are already here.</span>
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re promoting a product or growing your own Discord server,
              pick a service below to see plans and pricing.
            </p>
          </div>

          {/* Medium service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesDirectory.map((service) => (
              <div
                key={service.id}
                className="bg-surface rounded-2xl p-8 card-glow transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border border-subtle mb-6"
                  style={{ backgroundColor: `${service.accentColor}1A` }}
                >
                  {service.icon}
                </div>

                <h2 className="font-display text-2xl text-primary mb-2">{service.name}</h2>
                <p className="text-sm font-medium mb-4" style={{ color: service.accentColor }}>
                  {service.tagline}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{service.summary}</p>

                <div className="flex items-center justify-between text-xs text-muted mb-6">
                  <span>{service.plans.length} plans available</span>
                  <span>
                    From {service.plans[0]?.price} {service.plans[0]?.unit}
                  </span>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-coral text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Plans →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
