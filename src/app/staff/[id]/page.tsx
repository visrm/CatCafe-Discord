import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { staffDirectory } from '@/lib/config'

type Props = {
  params: { id: string }
}

// Pre-render a page for every staff member at build time — add a new
// entry to `staffDirectory` in src/lib/config.ts and its page appears
// automatically, no route code to touch.
export function generateStaticParams() {
  return staffDirectory.map((member) => ({ id: member.id }))
}

function getMember(id: string) {
  return staffDirectory.find((m) => m.id === id)
}

export function generateMetadata({ params }: Props): Metadata {
  const member = getMember(params.id)
  if (!member) return { title: 'Staff Member Not Found' }
  return {
    title: `${member.name} — ${member.role}`,
    description: member.portfolio.summary,
  }
}

export default function StaffMemberPage({ params }: Props) {
  const member = getMember(params.id)
  if (!member) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Staff', href: '/staff' },
              { label: member.name },
            ]}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border border-subtle flex-shrink-0"
              style={{ backgroundColor: `${member.accentColor}1A` }}
            >
              {member.avatar}
            </div>
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ backgroundColor: `${member.accentColor}1A`, color: member.accentColor }}
              >
                {member.team}
              </span>
              <h1 className="font-display text-3xl md:text-4xl text-primary">{member.name}</h1>
              <p className="text-muted text-base mt-1">{member.role}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm text-muted">
            <span>📍 {member.location}</span>
            <span>🗓️ Joined staff in {member.joined}</span>
          </div>

          <p className="text-muted leading-relaxed mb-10">{member.bio}</p>

          {/* Portfolio */}
          <div className="bg-surface rounded-2xl p-7 border border-subtle card-glow mb-8">
            <h2 className="font-display text-xl text-primary mb-3">What they work on</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">{member.portfolio.summary}</p>

            <ul className="flex flex-col gap-3">
              {member.portfolio.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-primary/90">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {member.portfolio.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
              {member.portfolio.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-subtle text-sm font-medium text-primary hover:bg-surface-hover transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          <Link
            href="/staff"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            ← Back to all staff
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
