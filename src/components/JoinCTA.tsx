import { siteConfig } from '@/lib/config'
import DiscordIcon from '@/components/DiscordIcon'

export default function JoinCTA() {
  return (
    <section className="dot-grid py-24 px-6 relative overflow-hidden" style={{ background: 'var(--m-violet)' }}>
      {/* Confetti — margins only, never behind the card. Halftone dot
          texture comes from the shared .dot-grid class (same one Hero
          uses), not a new pattern. */}
      <div className="m-confetti" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 22, height: 22, background: 'var(--m-mustard)', top: '12%', left: '8%' }}
        />
        <div
          className="m-shape absolute"
          style={{ width: 30, height: 30, background: 'var(--m-pink)', bottom: '14%', right: '10%', transform: 'rotate(14deg)' }}
        />
        <div className="m-plus absolute" style={{ width: 26, height: 26, top: '18%', right: '14%' }} />
        <div
          className="absolute"
          style={{ left: '7%', top: '38%', width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '34px solid var(--m-mustard)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ right: '12%', bottom: '-40px', width: 120, height: 120, border: '3px dashed var(--m-outline)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="m-sticker p-10 md:p-14 text-center" style={{ background: 'var(--m-paper)' }}>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4 leading-[1.1]">
            {siteConfig.memberCount} people are in.
            <br />
            <span className="text-[var(--m-coral-dark)] dark:text-[var(--m-coral)]">You&apos;re still outside.</span>
          </h2>

          <p className="text-secondary text-base mb-10 max-w-md mx-auto leading-relaxed">
            Click below, pick a couple of interests, and you&apos;re in —
            before your coffee gets cold. No sign-up form, no catch.
          </p>

          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="m-sticker inline-flex items-center gap-3 px-9 py-4 font-body font-semibold text-lg"
            style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
          >
            <DiscordIcon className="w-6 h-6" />
            Join {siteConfig.name} — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  )
}
