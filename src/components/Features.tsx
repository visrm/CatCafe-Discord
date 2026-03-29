const features = [
  {
    emoji: '🎙️',
    title: 'Voice & Stage Events',
    description: 'Weekly AMAs, listening parties, gaming nights, and live community events you won\'t want to miss.',
    tag: 'Events',
    tagColor: '#FF5F57',
  },
  {
    emoji: '🏆',
    title: 'Roles & Ranks',
    description: 'Earn unique roles as you participate. Show off your loyalty and unlock exclusive perks & channels.',
    tag: 'Rewards',
    tagColor: '#FFD166',
  },
  {
    emoji: '🤖',
    title: 'Smart Bots',
    description: 'Music, moderation, leveling, games, polls and more — powered by custom bots built for our community.',
    tag: 'Bots',
    tagColor: '#06D6A0',
  },
  {
    emoji: '💬',
    title: '50+ Topic Channels',
    description: 'From memes to motivation, tech to travel — there\'s a channel for every interest. Jump in anywhere.',
    tag: 'Channels',
    tagColor: '#118AB2',
  },
  {
    emoji: '🎨',
    title: 'Creative Showcases',
    description: 'Share your art, music, writing, projects, or anything you\'re proud of. We hype each other up here.',
    tag: 'Creative',
    tagColor: '#FF5F57',
  },
  {
    emoji: '🛡️',
    title: 'Active Moderation',
    description: '24/7 moderation team keeping the space safe, friendly, and drama-free. Report once, handled fast.',
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#06D6A0]/10 text-[#06D6A0] text-sm font-bold uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            Everything you need,<br />
            <span className="text-[#06D6A0]">nothing you don't.</span>
          </h2>
          <p className="text-[#8892B0] text-lg max-w-xl mx-auto">
            Packed with features to make every visit feel worth it.
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
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{f.emoji}</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                  style={{
                    backgroundColor: `${f.tagColor}18`,
                    color: f.tagColor,
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="font-display text-xl text-white mb-2">{f.title}</h3>
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
