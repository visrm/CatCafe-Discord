import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { servicesDirectory } from '@/lib/config'

type Props = {
  params: { id: string }
}

// Pre-render a page for every service at build time — add a new entry
// to `servicesDirectory` in src/lib/config.ts and its page appears
// automatically, no route code to touch.
export function generateStaticParams() {
  return servicesDirectory.map((service) => ({ id: service.id }))
}

function getService(id: string) {
  return servicesDirectory.find((s) => s.id === id)
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.name,
    description: service.summary,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.id)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border border-subtle flex-shrink-0"
              style={{ backgroundColor: `${service.accentColor}1A` }}
            >
              {service.icon}
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-primary">{service.name}</h1>
              <p className="text-base mt-1" style={{ color: service.accentColor }}>{service.tagline}</p>
            </div>
          </div>

          <p className="text-muted leading-relaxed max-w-2xl mb-14">{service.summary}</p>

          {/* How it works */}
          <div className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-5">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.howItWorks.map((step, i) => (
                <div key={step} className="bg-surface rounded-2xl p-5 border border-subtle card-glow">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mb-3"
                    style={{ backgroundColor: `${service.accentColor}1A`, color: service.accentColor }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-primary/90 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-5">Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-surface rounded-2xl p-7 card-glow flex flex-col ${
                    plan.popular ? 'border-2' : 'border border-subtle'
                  }`}
                  style={plan.popular ? { borderColor: service.accentColor } : undefined}
                >
                  {plan.popular && (
                    <span
                      className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide text-white"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg text-primary mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="font-display text-3xl text-primary">{plan.price}</span>
                    <span className="text-muted text-sm ml-1">{plan.unit}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-5">{plan.description}</p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-primary/90">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accentColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            {service.addOns && service.addOns.length > 0 && (
              <div className="mt-6 flex flex-col gap-3">
                {service.addOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className="bg-surface-2 border border-subtle rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap"
                  >
                    <div>
                      <span className="text-primary font-semibold text-sm">{addOn.name}</span>
                      <p className="text-muted text-sm mt-0.5">{addOn.description}</p>
                    </div>
                    <span className="font-display text-lg text-primary flex-shrink-0">{addOn.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Eligibility / notes */}
          <div className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-5">Good to know</h2>
            <div className="bg-surface rounded-2xl p-7 border border-subtle card-glow">
              <ul className="flex flex-col gap-3">
                {service.notes.map((note) => (
                  <li key={note} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-subtle flex-shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Shared CTA */}
          <div className="bg-surface border border-subtle rounded-3xl p-10 text-center card-glow mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-3">
              Ready to get started?
            </h2>
            <p className="text-muted text-sm mb-7 max-w-md mx-auto">
              Fill out a quick form with what you need — our team reviews every request
              and gets back to you.
            </p>
            <Link
              href={`/services/${service.id}/inquire`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base shadow-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              style={{ backgroundColor: service.accentColor }}
            >
              Submit an Inquiry →
            </Link>
          </div>

          <Link href="/services" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            ← Back to all services
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
