import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyJoin from '@/components/WhyJoin'
import ZigzagDivider from '@/components/ZigzagDivider'
import Stats from '@/components/Stats'
import JoinCTA from '@/components/JoinCTA'
import Footer from '@/components/Footer'
import ScrollBasedVelocity from '@/components/magicui/scroll-based-velocity'
import { DottedMap } from '@/components/magicui/dotted-map'
import { communityMarkers } from '@/lib/map-markers'
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
    href: '/services',
    icon: '📣',
    title: 'Services',
    description: 'Advertise your product or promote your Discord server to our members.',
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
  }
]

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />

        {/* Scroll-reactive marquee — reads out the server's tagline
            in the same breath the badge/hero already uses it. Pulled
            up with a negative margin so it overlaps the bottom of the
            hero (cropping the corner triangle decoration) instead of
            sitting flush below it — z-20 keeps it above the hero's
            confetti layer (z-1) so the crop reads as intentional. */}
        <div className="relative z-20" style={{ marginTop: '-64px' }}>
          <ScrollBasedVelocity text={`${siteConfig.name}🌻Indian Discord Server・Make Friends・Hindi English・Asia Asian Gaming Kpop Chilling 🐈　`} />
        </div>

        {/* Divider fill matches the section below it (WhyJoin's teal),
            not the section above, so the color transition reads as
            "entering" the next block. */}
        <ZigzagDivider fill="var(--m-teal)" />
        <WhyJoin />
        <ZigzagDivider fill="var(--bg)" />

        {/* Condensed live stats strip */}
        <div className="py-16">
          <Stats compact />
        </div>

        {/* Explore section — links out to dedicated pages instead of
            cramming every section onto the homepage. Flat sticker cards,
            cycling through the 4-accent palette per card so the grid
            doesn't read as one flat wall of paper. */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="m-confetti" aria-hidden="true">
            <div
              className="m-shape m-shape--dot absolute border-0"
              style={{ width: 16, height: 16, background: 'var(--m-teal)', top: '6%', left: '10%' }}
            />
            <div className="m-plus absolute" style={{ width: 22, height: 22, top: '88%', right: '8%' }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
                Explore {siteConfig.name}
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">
                Everything, in
                <br />
                <span className="text-[var(--m-mustard-dark)] dark:text-[var(--m-mustard)]">its own place.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {explore.map((item, i) => {
                const accents = ['var(--m-mustard)', 'var(--m-coral)', 'var(--m-teal)', 'var(--m-violet)', 'var(--m-pink)', 'var(--m-mustard)']
                const accent = accents[i % accents.length]
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group m-sticker p-7 transition-transform duration-300 ease-out hover:-translate-y-0.5"
                    style={{ background: 'var(--m-paper)', transitionDelay: `${(i % 3) * 60}ms` }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xl border-[3px] mb-4 transition-transform duration-300 ease-out group-hover:scale-105"
                      style={{ background: accent, borderColor: 'var(--m-outline)', transitionDelay: '80ms' }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                    <span className="kicker text-[11px] group-hover:translate-x-1 inline-block transition-transform duration-300 ease-out" style={{ color: 'var(--m-teal)', transitionDelay: '120ms' }}>
                      Learn more →
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Where members join from — mostly India, genuinely global.
            Marker density does the talking; no counts printed on the map. */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
              From India, to everywhere
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">
              Mostly India.
              <br />
              <span className="text-[var(--m-teal-dark)] dark:text-[var(--m-teal)]">Genuinely global.</span>
            </h2>
            <div className="m-sticker p-4 md:p-6" style={{ background: 'var(--m-paper)' }}>
              {/* Real magicui.design DottedMap (via `svg-dotted-map`),
                  not the hand-rolled polygon version this used to be.
                  `pulse` turns on its built-in animated pulse ring for
                  every marker; color/dot styling is tuned to the
                  Memphis palette via CSS variables. */}
              <DottedMap
                markers={communityMarkers}
                pulse
                dotColor="var(--text-secondary)"
                markerColor="var(--m-coral)"
                dotRadius={0.35}
                mapSamples={3500}
                className="opacity-90"
              />
            </div>
          </div>
        </section>

        <JoinCTA />
        <Footer />
      </main>
    </>
  )
}
