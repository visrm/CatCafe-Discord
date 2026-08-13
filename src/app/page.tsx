import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import JoinCTA from '@/components/JoinCTA'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'

const explore = [
  {
    href: '/about',
    icon: '🤝',
    title: 'About Us',
    description: "How a 12-person voice channel grew into one of India's largest Discord communities.",
  },
  {
    href: '/features',
    icon: '🎙️',
    title: 'Features',
    description: 'Weekly events, a leveling system, custom bots, and 50+ channels for whatever you\'re into.',
  },
  {
    href: '/members',
    icon: '💬',
    title: 'Members',
    description: 'Real quotes from real members — nobody was paid or prompted.',
  },
  {
    href: '/staff',
    icon: '🛡️',
    title: 'Server Staff',
    description: 'Meet the leadership, moderation, events, and dev team keeping things running.',
  },
  {
    href: '/faq',
    icon: '❓',
    title: 'FAQ',
    description: 'Everything you need to know before you join — age limits, rules, and getting started.',
  },
  {
    href: '/stats',
    icon: '📊',
    title: 'Server Stats',
    description: 'Live member and activity numbers, pulled straight from Discord.',
  },
]

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />

        {/* Condensed live stats strip */}
        <div className="py-16">
          <Stats compact />
        </div>

        {/* Explore section — links out to dedicated pages instead of
            cramming every section onto the homepage */}
        <section className="py-24 px-6 bg-surface-2">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                Explore {siteConfig.name}
              </span>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-primary">
                Everything, in
                <br />
                <span className="italic text-brand-yellow">its own place.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {explore.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-surface rounded-2xl p-7 card-glow transition-all duration-300 hover:bg-surface-hover"
                >
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-medium text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky group-hover:translate-x-1 inline-block transition-transform">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <JoinCTA />
        <Footer />
      </main>
    </>
  )
}
