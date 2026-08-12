import { siteConfig } from '@/lib/config'

const pillars = [
  {
    emoji: '🤝',
    title: 'Everyone Gets A Seat',
    description: 'Your first message here doesn\'t sit unanswered. Someone usually replies within minutes — always within the hour.',
    color: '#FF5F57',
  },
  {
    emoji: '💡',
    title: 'No Question Too Small',
    description: 'Ask the thing you\'re too embarrassed to Google. Post the thing you made at 2am. We\'ve all been the new person asking obvious questions.',
    color: '#FFD166',
  },
  {
    emoji: '🎉',
    title: 'Something\'s Always On',
    description: 'Trivia on Tuesdays, movie nights on Fridays, a meme thread that never really ends. You\'ll run out of time before you run out of things to do.',
    color: '#06D6A0',
  },
  {
    emoji: '🛡️',
    title: 'Mods Who Actually Show Up',
    description: 'Report something and a real person handles it — usually inside the hour, not the week. Zero tolerance means zero tolerance.',
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
          <span className="inline-block px-4 py-2 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-sm font-bold uppercase tracking-widest mb-2">
            About Us
          </span>
          <h2 className="font-display font-medium text-5xl md:text-6xl text-white mb-6">
            We started with 12 people<br />
            <span className="text-[#FFD166]">in a voice channel.</span>
          </h2>
          <p className="text-[#8892B0] text-md max-w-2xl mx-auto leading-relaxed">
            That was a few years ago. {siteConfig.name} is now one of India's largest Discord
            communities, at {siteConfig.memberCount} members — but the rule hasn't changed:
            come as you are, leave when you're tired of laughing.
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
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2"
                style={{ backgroundColor: `${pillar.color}20` }}
              >
                {pillar.emoji}
              </div>
              <h3 className="font-display font-medium text-xl text-white mb-2">{pillar.title}</h3>
              <p className="text-[#8892B0] text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
