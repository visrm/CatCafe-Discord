/**
 * Real member reviews, pulled by hand from the server's DISBOARD
 * listing: https://disboard.org/server/858432719238201394
 *
 * DISBOARD doesn't expose a public API for review data and blocks
 * direct scraping, so these were copied from the listing page itself
 * (5-star reviews only, picked for variety). Titles and quotes are
 * verbatim aside from very minor trims on the two longest ones, marked
 * inline below — update this list by hand if you pull more later.
 */
const reviews = [
  {
    title: 'Great Server Overall',
    quote:
      "Really fun and welcoming server! The community is active, friendly, and respectful. Staff are helpful, events are well-organized, and there's always something interesting going on — from casual chats to gaming sessions. Perfect place to meet new people, chill, and have a good time.",
    author: 'brute._',
  },
  {
    title: 'Fun n Chill Server',
    quote: "Chill n friendly people here. They host fun events as well, really love spending quality time with the people. - crg",
    author: 'crg_ryuzaki',
  },
  {
    title: 'One of the best Indian cafe Server out there.',
    quote: 'I really love the people in this server and the events are fun too. Definitely top 3 IndianCafe Server.',
    author: 'kemisiost',
  },
  {
    title: 'vibrant & welcoming',
    // Trimmed after "keep things fun." — original continues with a
    // second sentence about moderation and atmosphere.
    quote:
      "honestly one of the most engaging and well-managed servers I've been part of. the community is super active, there's always someone to talk to, and the events and activities keep things fun.",
    author: 'rudra_1116',
  },
  {
    title: 'One of the best event hosting servers.',
    quote:
      "The CatCafe server is honestly one of the best servers that host events. They are legit, they don't scam. I am really happy to be a part of this and I also won an event.",
    author: 'he_is_shivaay',
  },
  {
    title: 'This server can be your second home.',
    // Trimmed after "fun and engaging." — original continues with a
    // sentence about the moderation team and closes on "second home."
    quote:
      'One of the best Indian Discord servers out there! The community is super chill and welcoming, with active members and regular events that keep things fun and engaging.',
    author: 'whoisyhwachh',
  },
  {
    title: 'Amazing community',
    quote:
      "This server has been such a fun and welcoming place to be part of! The community is friendly, active, and always supportive. I really like how the staff members are attentive and keep everything organized while still making it feel chill.",
    author: 'cosmicerth',
  },
  {
    title: 'BEST SERVER I HAVE EVER JOINED!',
    quote:
      "I am extremely introverted in real life, but I am a textrovert. I have only 2-3 friends whom I talk to. Sometimes, I do feel lonely. So I turned to Discord and searching for a new online friends... now I can say that I am not lonely anymore... :)",
    author: 'abhismitamzinnia',
  },
  {
    title: 'Great server for finding new people',
    quote:
      "This group is one of the friendliest and most active communities I've been part of! There's always something happening — whether it's fun conversations, interesting activities, or just people checking in to share their day. Everyone is welcoming, supportive, and makes you feel right at home.",
    author: 'cattywumpus_flibbertigibbet',
  },
]

const accents = ['var(--m-mustard)', 'var(--m-coral)', 'var(--m-teal)', 'var(--m-violet)', 'var(--m-pink)']

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
          <h2 className="font-display font-bold text-4xl md:text-6xl text-primary mb-4">
            Ask them,
            <br />
            <span className="text-[var(--m-violet-dark)] dark:text-[var(--m-violet)]">not us.</span>
          </h2>
          <p className="text-secondary text-base max-w-xl mx-auto mb-3">
            Real reviews from our DISBOARD listing — nobody was paid or prompted.
          </p>
          <a
            href="https://disboard.org/server/858432719238201394"
            target="_blank"
            rel="noopener noreferrer"
            className="kicker inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)', color: 'var(--text-secondary)' }}
          >
            <span style={{ color: 'var(--m-mustard-dark)' }}>★</span>
            4.5 rating · 82 reviews on DISBOARD ↗
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className="m-sticker p-6 flex flex-col"
              style={{ background: 'var(--m-paper)' }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[var(--m-mustard-dark)] dark:text-[var(--m-mustard)] text-sm">★</span>
                ))}
              </div>

              <div className="text-primary font-semibold text-sm mb-1.5">{r.title}</div>
              <p className="text-primary/90 text-sm leading-relaxed mb-6 italic flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] flex-shrink-0"
                  style={{ background: accents[i % accents.length], borderColor: 'var(--m-outline)' }}
                >
                  {/* Default avatar glyph — reviewers only give us a
                      username, not a picture, so every card gets the
                      same flat person icon on an accent-colored disc
                      rather than a per-person portrait. */}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style={{ fill: 'var(--m-on-color-ink)' }}>
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-primary font-semibold text-sm">@{r.author}</div>
                  <div className="text-secondary text-xs">via DISBOARD</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
