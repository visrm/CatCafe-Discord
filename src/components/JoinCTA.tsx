import { siteConfig } from '@/lib/config'
import DiscordIcon from '@/components/DiscordIcon'

export default function JoinCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-surface border border-subtle rounded-3xl p-10 md:p-14 text-center relative overflow-hidden card-glow">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-primary mb-4 leading-tight">
            {siteConfig.memberCount} people are in.
            <br />
            <span className="italic text-brand-coral">You&apos;re still outside.</span>
          </h2>

          <p className="text-muted text-base mb-10 max-w-md mx-auto leading-relaxed">
            Click below, pick a couple of interests, and you&apos;re in —
            before your coffee gets cold. No sign-up form, no catch.
          </p>

          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-brand-coral text-white font-semibold text-lg shadow-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            <DiscordIcon className="w-6 h-6" />
            Join {siteConfig.name} — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  )
}
