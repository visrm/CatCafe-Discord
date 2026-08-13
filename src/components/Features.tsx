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

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-surface-2 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-primary mb-4">
            Six reasons people
            <br />
            <span className="italic text-brand-mint">stop lurking.</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Here&apos;s what&apos;s actually inside. No fluff.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-surface rounded-2xl p-7 card-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{f.icon}</span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-surface-2 border border-subtle text-muted">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-display font-medium text-lg text-primary mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.description}</p>

              <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-brand-yellow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
