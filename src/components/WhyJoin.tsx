import { siteConfig } from '@/lib/config'

/**
 * Memphis "why join" section — homepage only.
 *
 * This is deliberately separate from `Features.tsx` (the 6-card list on
 * the dedicated /features page): the mockup's teal-blocked section is a
 * punchier, 4-card homepage teaser, not a repurposed version of that
 * page. Keeping the two apart means the standalone /features page keeps
 * its existing content untouched.
 */
const reasons = [
  {
    icon: '💬',
    color: 'var(--m-mustard)',
    title: 'Always someone online',
    description: `${siteConfig.onlineCount} people talking at any given hour — no dead chats, no waiting around.`,
  },
  {
    icon: '🐾',
    color: 'var(--m-coral)',
    title: 'Real, low-key community',
    description: 'No follower count to build, no persona to keep up. Just conversation.',
  },
  {
    icon: '🎮',
    color: 'var(--m-violet)',
    title: `${siteConfig.channels} channels`,
    description: "Gaming, music, art, late-night rambles — a channel for whatever mood you're in.",
  },
  {
    icon: '⚡',
    color: 'var(--m-pink)',
    title: '10-second join',
    description: 'Free, instant, no application. Drop in and see if you stay.',
  },
]

export default function WhyJoin() {
  return (
    <section className="relative overflow-hidden py-[90px] px-6" style={{ background: 'var(--m-teal)' }}>
      {/* Confetti — margins/negative space only, never behind copy or a card. */}
      <div className="m-confetti" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 20, height: 20, background: 'var(--m-mustard)', top: '8%', left: '6%' }}
        />
        <div className="m-plus absolute" style={{ width: 26, height: 26, top: '80%', left: '12%' }} />
        <div
          className="m-shape absolute"
          style={{ width: 34, height: 34, background: 'var(--m-coral)', top: '70%', right: '8%', transform: 'rotate(20deg)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto" style={{ color: 'var(--m-on-color-ink)' }}>
        <div className="kicker text-xs mb-2.5 opacity-75">Why join</div>
        <h2 className="font-display font-bold text-[32px] md:text-[42px] leading-[1.1] mb-11 max-w-[560px]">
          Everything a good hangout needs, none of the performance.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="m-sticker p-6"
              style={{ background: 'var(--m-paper)' }}
            >
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl border-[3px] mb-4"
                style={{ background: reason.color, borderColor: 'var(--m-outline)' }}
              >
                {reason.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {reason.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
