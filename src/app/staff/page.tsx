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

export default function StaffPage() {
  const teams = Array.from(new Set(staffDirectory.map((s) => s.team)))

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Staff' }]} />

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              The Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">
              People behind
              <br />
              <span className="text-brand-sky">the server.</span>
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              {staffDirectory.length} people keep {siteConfig.name} running — moderating, building,
              and planning what happens next. Click a profile to see what they work on.
            </p>
          </div>

          {teams.map((team) => (
            <div key={team} className="mb-14 last:mb-0">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-5">
                {team}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffDirectory
                  .filter((s) => s.team === team)
                  .map((member) => (
                    <Link
                      key={member.id}
                      href={`/staff/${member.id}`}
                      className="group bg-surface rounded-2xl p-6 card-glow transition-all duration-300 hover:bg-surface-hover"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border border-subtle"
                          style={{ backgroundColor: `${member.accentColor}1A` }}
                        >
                          {member.avatar}
                        </div>
                        <div>
                          <div className="font-display text-lg text-primary group-hover:text-brand-yellow transition-colors">
                            {member.name}
                          </div>
                          <div className="text-muted text-sm">{member.role}</div>
                        </div>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mb-4">{member.bio}</p>
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky group-hover:translate-x-1 inline-block transition-transform">
                        View profile →
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
