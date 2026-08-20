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

const accents = ['var(--m-mustard)', 'var(--m-coral)', 'var(--m-teal)', 'var(--m-violet)', 'var(--m-pink)', 'var(--m-mustard)']

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="m-confetti" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 18, height: 18, background: 'var(--m-violet)', top: '5%', right: '8%' }}
        />
        <div className="m-plus absolute" style={{ width: 22, height: 22, top: '92%', left: '10%' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
            Member voices
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Ask them,
            <br />
            <span className="text-[var(--m-violet-dark)] dark:text-[var(--m-violet)]">not us.</span>
          </h2>
          <p className="text-secondary text-base max-w-xl mx-auto">
            Nobody was paid or prompted. This is just what people typed when we asked.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.handle}
              className="m-sticker p-6 flex flex-col"
              style={{ background: 'var(--m-paper)' }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[var(--m-mustard-dark)] dark:text-[var(--m-mustard)] text-sm">★</span>
                ))}
              </div>

              <p className="text-primary/90 text-sm leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-[3px]"
                  style={{ background: accents[i % accents.length], borderColor: 'var(--m-outline)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-primary font-semibold text-sm">{t.name}</div>
                  <div className="text-secondary text-xs">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
