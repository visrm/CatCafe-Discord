const testimonials = [
  {
    quote: "I joined on a whim and now I can't imagine my week without checking in here. The people are just genuinely good.",
    name: 'Sakura M.',
    handle: '@sakura_hops',
    avatar: '🌸',
  },
  {
    quote: "Best moderated server I've ever been in. The staff actually care and the community follows their lead.",
    name: 'Jordan T.',
    handle: '@jtvibes',
    avatar: '🎸',
  },
  {
    quote: "I shared my first digital art here and the response was so encouraging. Still here two years later.",
    name: 'Alex R.',
    handle: '@alex.renders',
    avatar: '🎨',
  },
  {
    quote: "Found my best friend here. We met in a random voice chat and now we talk every day.",
    name: 'Priya K.',
    handle: '@priya_creates',
    avatar: '✨',
  },
  {
    quote: "The weekly events are something I genuinely look forward to. It's rare to find that online anymore.",
    name: 'Marcus L.',
    handle: '@marcuslive',
    avatar: '🎮',
  },
  {
    quote: "No drama, no toxicity. Just chill people who want to have fun. It's refreshing honestly.",
    name: 'Yuki N.',
    handle: '@yuki_nxt',
    avatar: '🦊',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-surface-2 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
            Member Voices
          </span>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-primary mb-4">
            Ask them,
            <br />
            <span className="italic text-brand-sky">not us.</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Nobody was paid or prompted. This is just what people typed when we asked.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.handle}
              className="bg-surface rounded-2xl p-6 card-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-brand-yellow text-sm">★</span>
                ))}
              </div>

              <p className="text-primary/90 text-sm leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-surface-2 border border-subtle">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-primary font-semibold text-sm">{t.name}</div>
                  <div className="text-muted text-xs">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
