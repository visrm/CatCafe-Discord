import { siteConfig } from '@/lib/config'

const pillars = [
  {
    icon: '🤝',
    title: 'Everyone Gets A Seat',
    description: 'Your first message here doesn\'t sit unanswered. Someone usually replies within minutes — always within the hour.',
  },
  {
    icon: '💡',
    title: 'No Question Too Small',
    description: 'Ask the thing you\'re too embarrassed to Google. Post the thing you made at 2am. We\'ve all been the new person asking obvious questions.',
  },
  {
    icon: '🎉',
    title: 'Something\'s Always On',
    description: 'Trivia on Tuesdays, movie nights on Fridays, a meme thread that never really ends. You\'ll run out of time before you run out of things to do.',
  },
  {
    icon: '🛡️',
    title: 'Staff Who Actually Show Up',
    description: 'Report something and a real person handles it — usually inside the hour, not the week. Zero tolerance means zero tolerance.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            We started with 12 people
            <br />
            <span className="text-brand-yellow">in a voice channel.</span>
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            That was a few years ago. {siteConfig.name} is now one of India&apos;s largest Discord
            communities, at {siteConfig.memberCount} members — but the rule hasn&apos;t changed:
            come as you are, leave when you&apos;re tired of laughing.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface rounded-2xl p-6 card-glow transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 bg-surface-2 border border-subtle">
                {pillar.icon}
              </div>
              <h3 className="font-display text-lg text-primary mb-2">{pillar.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
