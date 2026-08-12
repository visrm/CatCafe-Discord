const features = [
  {
    emoji: '🎙️',
    title: 'Live Every Week',
    description: 'AMAs, listening parties, late-night gaming — pick a night, any night, something\'s on. Set one reminder and never plan an evening again.',
    tag: 'Events',
    tagColor: '#FF5F57',
  },
  {
    emoji: '🏆',
    title: 'Level Up As You Show Up',
    description: 'Every message and event you join adds up. Hit a milestone and a channel unlocks — no waitlist, no application.',
    tag: 'Rewards',
    tagColor: '#FFD166',
  },
  {
    emoji: '🤖',
    title: 'Bots Handle The Boring Stuff',
    description: 'Music queues itself, spam gets caught before you see it, polls run themselves. You just show up and talk.',
    tag: 'Bots',
    tagColor: '#06D6A0',
  },
  {
    emoji: '💬',
    title: 'A Channel For Your Thing',
    description: 'Anime at 1am, career advice at noon, recipe swaps on a Sunday. 50+ channels means you\'re never the only one into it.',
    tag: 'Channels',
    tagColor: '#118AB2',
  },
  {
    emoji: '🎨',
    title: 'Post It Before You Overthink It',
    description: 'Half-finished painting, rough demo, first draft — post it anyway. People here clap for effort, not just polish.',
    tag: 'Creative',
    tagColor: '#FF5F57',
  },
  {
    emoji: '🛡️',
    title: 'Someone\'s Always On Duty',
    description: 'Moderators cover every timezone. Flag something once and it\'s handled — not just noted for later.',
    tag: 'Safety',
    tagColor: '#06D6A0',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-[#0D1224] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#06D6A0]/10 text-[#06D6A0] text-sm font-bold uppercase tracking-widest mb-2">
            What We Offer
          </span>
          <h2 className="font-display font-medium text-5xl md:text-6xl text-white mb-4">
            Six reasons people<br />
            <span className="text-[#06D6A0]">stop lurking.</span>
          </h2>
          <p className="text-[#8892B0] text-md max-w-xl mx-auto">
            Here's what's actually inside. No fluff.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-[#1E2540] rounded-2xl p-7 card-glow transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{f.emoji}</span>
                <span
                  className="px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide"
                  style={{
                    backgroundColor: `${f.tagColor}18`,
                    color: f.tagColor,
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="font-display font-medium text-xl text-white mb-2">{f.title}</h3>
              <p className="text-[#8892B0] text-sm leading-relaxed">{f.description}</p>

              {/* Hover underline accent */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: f.tagColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
