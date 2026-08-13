import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceInquireForm from '@/components/ServiceInquireForm'
import { servicesDirectory } from '@/lib/config'

type Props = {
  params: { id: string }
  searchParams: { plan?: string }
}

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
    title: `Inquire — ${service.name}`,
    description: `Submit a request for ${service.name}.`,
  }
}

export default function ServiceInquirePage({ params, searchParams }: Props) {
  const service = getService(params.id)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name, href: `/services/${service.id}` },
              { label: 'Inquire' },
            ]}
          />

          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              {service.name}
            </span>
            <h1 className="font-display text-3xl md:text-4xl text-primary mb-3">
              Submit an inquiry
            </h1>
            <p className="text-muted text-sm leading-relaxed">
              Fill in the details below — our team reviews every request and replies at the
              contact info you provide, usually within 24 hours.
            </p>
          </div>

          <ServiceInquireForm
            services={servicesDirectory}
            defaultServiceId={service.id}
            defaultPlanId={searchParams.plan}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
