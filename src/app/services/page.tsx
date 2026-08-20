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
            <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
              For advertisers & server owners
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Reach {siteConfig.memberCount}
              <br />
              <span className="text-[var(--m-coral-dark)] dark:text-[var(--m-coral)]">people who are already here.</span>
            </h1>
            <p className="text-secondary text-base max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re promoting a product or growing your own Discord server,
              pick a service below to see plans and pricing.
            </p>
          </div>

          {/* Medium service cards — service.accentColor stays each
              service's own hex (unrelated to the Memphis palette),
              matching the same rule applied on the staff detail page. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesDirectory.map((service) => (
              <div
                key={service.id}
                className="m-sticker p-8 flex flex-col"
                style={{ background: 'var(--m-paper)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border-[3px] mb-6"
                  style={{ backgroundColor: `${service.accentColor}1A`, borderColor: 'var(--m-outline)' }}
                >
                  {service.icon}
                </div>

                <h2 className="font-display font-semibold text-2xl text-primary mb-2">{service.name}</h2>
                <p className="text-sm font-medium mb-4" style={{ color: service.accentColor }}>
                  {service.tagline}
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{service.summary}</p>

                <div className="flex items-center justify-between text-xs font-mono text-secondary mb-6">
                  <span>{service.plans.length} plans available</span>
                  <span>
                    From {service.plans[0]?.price} {service.plans[0]?.unit}
                  </span>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="m-sticker inline-flex items-center justify-center gap-2 px-6 py-3 font-body text-sm font-semibold"
                  style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
                >
                  View plans →
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
