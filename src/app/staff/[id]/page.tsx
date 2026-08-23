import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Dock from '@/components/magicui/dock'
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

          {/* Header — member.accentColor stays as each person's own
              individual hex (unrelated to the Memphis palette), per
              staff/page.tsx's directory cards; only the surrounding
              chrome (outline weight, radius) picks up the Memphis
              sticker treatment. */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border-[3px] flex-shrink-0"
              style={{ backgroundColor: `${member.accentColor}1A`, borderColor: 'var(--m-outline)' }}
            >
              {member.avatar}
            </div>
            <div>
              <span
                className="kicker text-[10px] inline-block px-3 py-1 rounded-full border-2 mb-2"
                style={{ backgroundColor: `${member.accentColor}1A`, color: member.accentColor, borderColor: 'var(--m-outline)' }}
              >
                {member.team}
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-primary">{member.name}</h1>
              <p className="text-secondary text-base mt-1">{member.role}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm font-mono text-secondary">
            <span>📍 {member.location}</span>
            <span>🗓️ Joined staff in {member.joined}</span>
          </div>

          <p className="text-secondary leading-relaxed mb-10">{member.bio}</p>

          {/* Portfolio */}
          <div className="m-sticker p-7 mb-8" style={{ background: 'var(--m-paper)' }}>
            <h2 className="font-display font-semibold text-xl text-primary mb-3">What they work on</h2>
            <p className="text-secondary text-sm leading-relaxed mb-6">{member.portfolio.summary}</p>

            <ul className="flex flex-col gap-3">
              {member.portfolio.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-primary/90">
                  <span
                    className="mt-1 w-2 h-2 rounded-full border flex-shrink-0"
                    style={{ background: 'var(--m-mustard)', borderColor: 'var(--m-outline)' }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Links — Memphis dock instead of flat pills, magnifying on
              hover. Falls back to nothing when a member has none. */}
          {member.portfolio.links.length > 0 && (
            <div className="mb-10">
              <Dock
                items={member.portfolio.links.map((link) => ({
                  label: link.label,
                  href: link.url,
                  icon: <span className="font-display font-semibold text-sm">{link.label.slice(0, 2).toUpperCase()}</span>,
                }))}
              />
            </div>
          )}

          <Link
            href="/staff"
            className="kicker text-xs text-secondary hover:text-primary transition-colors"
          >
            ← Back to all staff
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
