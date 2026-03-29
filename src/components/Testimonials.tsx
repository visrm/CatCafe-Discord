const testimonials = [
  {
    quote: "I joined on a whim and now I can't imagine my week without checking in here. The people are just genuinely good.",
    name: 'Sakura M.',
    handle: '@sakura_hops',
    avatar: '🌸',
    color: '#FF5F57',
  },
  {
    quote: "Best moderated server I've ever been in. The staff actually care and the community follows their lead.",
    name: 'Jordan T.',
    handle: '@jtvibes',
    avatar: '🎸',
    color: '#FFD166',
  },
  {
    quote: "I shared my first digital art here and the response was so encouraging. Still here two years later.",
    name: 'Alex R.',
    handle: '@alex.renders',
    avatar: '🎨',
    color: '#06D6A0',
  },
  {
    quote: "Found my best friend here. We met in a random voice chat and now we talk every day.",
    name: 'Priya K.',
    handle: '@priya_creates',
    avatar: '✨',
    color: '#118AB2',
  },
  {
    quote: "The weekly events are something I genuinely look forward to. It's rare to find that online anymore.",
    name: 'Marcus L.',
    handle: '@marcuslive',
    avatar: '🎮',
    color: '#FF5F57',
  },
  {
    quote: "No drama, no toxicity. Just chill people who want to have fun. It's refreshing honestly.",
    name: 'Yuki N.',
    handle: '@yuki_nxt',
    avatar: '🦊',
    color: '#FFD166',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#0D1224] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#118AB2]/15 text-[#118AB2] text-sm font-bold uppercase tracking-widest mb-2">
            Member Voices
          </span>
          <h2 className="font-display font-semibold text-5xl md:text-6xl text-white mb-4">
            Don't take our word,<br />
            <span className="text-[#118AB2]">see theirs.</span>
          </h2>
          <p className="text-[#8892B0] text-md max-w-xl mx-auto">
            Real words from real members who call this place home.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 columns-1 sm:grid-cols-2 sm:columns-2 lg:grid-cols-3 lg:columns-3 p-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.handle}
              className="break-inside-avoid h-full bg-[#1E2540] rounded-2xl p-6 card-glow transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#FFD166] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${t.color}20` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-[#8892B0] text-xs">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
