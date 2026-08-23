import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig, staffDirectory } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Server Staff',
  description: `Meet the team that runs ${siteConfig.name} — leadership, moderation, events, and development.`,
}

// Memphis accent cycle — palette capped at 4 accents plus pink as a
// sparing 5th (see memphis-redesign-instructions.md §1). Avatar and
// role pill share the same accent per person by indexing off the same
// array, independent of each staff member's own `accentColor` field
// (which stays as-is for the /staff/[id] detail page).
const MEMPHIS_ACCENTS = ['var(--m-mustard)', 'var(--m-coral)', 'var(--m-violet)', 'var(--m-teal)', 'var(--m-pink)']

export default function StaffPage() {
  const teams = Array.from(new Set(staffDirectory.map((s) => s.team)))

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Staff' }]} />

          <div className="text-center mb-16">
            <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
              The team
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary mb-4">
              People behind
              <br />
              <span className="text-[var(--m-violet-dark)] dark:text-[var(--m-violet)]">the server.</span>
            </h1>
            <p className="text-secondary text-base max-w-xl mx-auto leading-relaxed">
              {staffDirectory.length} people keep {siteConfig.name} running — moderating, building,
              and planning what happens next. Click a profile to see what they work on.
            </p>
          </div>

          {teams.map((team) => (
            <div key={team} className="mb-14 last:mb-0">
              <h2 className="kicker text-xs text-secondary mb-5">
                {team}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffDirectory
                  .filter((s) => s.team === team)
                  .map((member, i) => {
                    const accent = MEMPHIS_ACCENTS[i % MEMPHIS_ACCENTS.length]
                    return (
                      <Link
                        key={member.id}
                        href={`/staff/${member.id}`}
                        className="group rounded-2xl p-5 transition-colors duration-300 ease-out"
                        style={{ background: 'var(--m-paper-2)', transitionDelay: `${(i % 3) * 60}ms` }}
                      >
                        <div
                          className="w-16 h-16 rounded-2xl border-[3px] flex items-center justify-center text-2xl mb-3.5"
                          style={{ background: accent, borderColor: 'var(--m-outline)' }}
                        >
                          {member.avatar}
                        </div>
                        <div className="font-display text-lg font-semibold text-primary mb-0.5">
                          {member.name}
                        </div>
                        <span
                          className="kicker text-[10px] px-2.5 py-[3px] rounded-full border-2 inline-block mb-2.5"
                          style={{ background: accent, borderColor: 'var(--m-outline)', color: 'var(--m-on-color-ink)' }}
                        >
                          {member.role}
                        </span>
                        <p className="text-secondary text-sm leading-relaxed">{member.bio}</p>
                      </Link>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
