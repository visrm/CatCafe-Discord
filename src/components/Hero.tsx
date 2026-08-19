'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import DiscordIcon from '@/components/DiscordIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid pt-24 pb-16">
      {/* Contrast veil — sits behind the copy (z-0), above the page's
          grain/glow layers, so headline and body text stay legible
          without flattening the background texture entirely. */}
      <div className="hero-veil" aria-hidden="true" />

      {/* Decorative cat cutouts — purely cosmetic, hidden from
          screen readers and on small screens where they'd crowd the
          copy. Sit above the dot grid/veil (z-[1]) but below the
          text column (z-10). */}
      <div className="hidden md:block absolute inset-0 z-[1] pointer-events-none select-none" aria-hidden="true">
        <span className="absolute top-[14%] right-[10%] text-6xl motion-safe:animate-[float_6s_ease-in-out_infinite]">
          🐱
        </span>
        <span className="absolute top-[46%] right-[6%] text-4xl -rotate-6 motion-safe:animate-[float_7s_ease-in-out_infinite] [animation-delay:1s]">
          🐈
        </span>
        <span className="absolute top-[64%] right-[16%] text-3xl rotate-3 motion-safe:animate-[float_5s_ease-in-out_infinite] [animation-delay:0.5s]">
          🐱
        </span>
        <span className="absolute top-[76%] right-[4%] text-2xl -rotate-12 motion-safe:animate-[float_6s_ease-in-out_infinite] [animation-delay:1.5s]">
          🐾
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-strong text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
          <span className="kicker text-xs">
            {siteConfig.onlineCount} online, talking right now
          </span>
        </div>

        {/* Headline — sized/weighted hierarchy across the three lines
            instead of one uniform display size for all of them. */}
        <h1 className="leading-[1.05] mb-6">
          <span className="block font-body font-medium text-2xl sm:text-3xl md:text-4xl text-secondary mb-2">
            {siteConfig.memberCount} people
          </span>
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl text-brand-yellow">
            already found it.
          </span>
          <span className="block font-display text-4xl sm:text-5xl md:text-6xl text-primary mt-2">
            Have you?
          </span>
        </h1>

        {/* Sub */}
        <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-brand-coral text-white font-semibold text-lg shadow-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 flex items-center gap-3"
          >
            <DiscordIcon className="w-6 h-6" />
            Join Free — Takes 10 Seconds
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <Link
            href="/about"
            className="px-8 py-4 rounded-2xl border border-subtle text-primary font-semibold text-lg hover:bg-surface-hover transition-all duration-200"
          >
            See What's Inside
          </Link>
        </div>
      </div>
    </section>
  )
}
