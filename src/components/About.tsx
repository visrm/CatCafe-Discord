import { siteConfig } from '@/lib/config'

const pillars = [
  {
    emoji: '🤝',
    title: 'Inclusive & Welcoming',
    description: 'We believe great communities start with respect. Everyone gets a warm welcome, no matter their background.',
    color: '#FF5F57',
  },
  {
    emoji: '💡',
    title: 'Curious & Creative',
    description: 'A place to share ideas, show your work, ask dumb questions, and celebrate each other\'s curiosity.',
    color: '#FFD166',
  },
  {
    emoji: '🎉',
    title: 'Fun First',
    description: 'Events, games, memes, music — we know how to have a good time. Serious sometimes, silly always.',
    color: '#06D6A0',
  },
  {
    emoji: '🛡️',
    title: 'Safe & Moderated',
    description: 'A dedicated mod team keeps things chill. Clear rules, quick action, zero tolerance for toxicity.',
    color: '#118AB2',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD166]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-sm font-bold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            More than a server —<br />
            <span className="text-[#FFD166]">it's a home.</span>
          </h2>
          <p className="text-[#8892B0] text-lg max-w-2xl mx-auto leading-relaxed">
            {siteConfig.name} started as a small hangout and grew into a thriving community
            of {siteConfig.memberCount} members. We're proof that genuine connections still happen online.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-[#1E2540] rounded-2xl p-6 card-glow transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: `${pillar.color}20` }}
              >
                {pillar.emoji}
              </div>
              <h3 className="font-display text-xl text-white mb-2">{pillar.title}</h3>
              <p className="text-[#8892B0] text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Visual divider / tagline */}
        <div className="mt-20 bg-gradient-to-r from-[#FF5F57]/10 via-[#FFD166]/10 to-[#06D6A0]/10 rounded-3xl p-10 text-center border border-white/5">
          <p className="font-display text-3xl md:text-4xl text-white">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="text-[#8892B0] mt-3 font-semibold">— {siteConfig.name} Community</p>
        </div>
      </div>
    </section>
  )
}
