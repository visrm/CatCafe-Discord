const features = [
  {
    icon: '🎙️',
    title: 'Live Every Week',
    description: 'AMAs, listening parties, late-night gaming — pick a night, any night, something\'s on. Set one reminder and never plan an evening again.',
    tag: 'Events',
  },
  {
    icon: '🏆',
    title: 'Level Up As You Show Up',
    description: 'Every message and event you join adds up. Hit a milestone and a channel unlocks — no waitlist, no application.',
    tag: 'Rewards',
  },
  {
    icon: '🤖',
    title: 'Bots Handle The Boring Stuff',
    description: 'Music queues itself, spam gets caught before you see it, polls run themselves. You just show up and talk.',
    tag: 'Bots',
  },
  {
    icon: '💬',
    title: 'A Channel For Your Thing',
    description: 'Anime at 1am, career advice at noon, recipe swaps on a Sunday. 50+ channels means you\'re never the only one into it.',
    tag: 'Channels',
  },
  {
    icon: '🎨',
    title: 'Post It Before You Overthink It',
    description: 'Half-finished painting, rough demo, first draft — post it anyway. People here clap for effort, not just polish.',
    tag: 'Creative',
  },
  {
    icon: '🛡️',
    title: 'Someone\'s Always On Duty',
    description: 'Moderators cover every timezone. Flag something once and it\'s handled — not just noted for later.',
    tag: 'Safety',
  },
]

const accents = ['var(--m-mustard)', 'var(--m-coral)', 'var(--m-teal)', 'var(--m-violet)', 'var(--m-pink)', 'var(--m-mustard)']

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="m-confetti" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 18, height: 18, background: 'var(--m-teal)', top: '8%', left: '5%' }}
        />
        <div
          className="m-shape absolute"
          style={{ width: 26, height: 26, background: 'var(--m-violet)', top: '85%', right: '6%', transform: 'rotate(16deg)' }}
        />
        <div className="m-plus absolute" style={{ width: 22, height: 22, top: '4%', right: '10%' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
            What we offer
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Six reasons people
            <br />
            <span className="text-[var(--m-teal-dark)] dark:text-[var(--m-teal)]">stop lurking.</span>
          </h2>
          <p className="text-secondary text-base max-w-xl mx-auto">
            Here&apos;s what&apos;s actually inside. No fluff.
          </p>
        </div>

        {/* Feature grid — flat sticker cards, accent cycling per card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="m-sticker p-7"
              style={{ background: 'var(--m-paper)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-[3px]"
                  style={{ background: accents[i % accents.length], borderColor: 'var(--m-outline)' }}
                >
                  {f.icon}
                </span>
                <span className="kicker text-[10px] px-3 py-1 rounded-full" style={{ border: '2px solid var(--m-outline)' }}>
                  {f.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-primary mb-2">{f.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
