'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import DiscordIcon from '@/components/DiscordIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid pt-24 pb-16">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-subtle text-sm font-medium text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
          {siteConfig.onlineCount} people online, talking, right now
        </div>

        {/* Headline */}
        <h1
          className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-6 text-primary"
        >
          {siteConfig.memberCount} people
          <br />
          <span className="italic text-brand-yellow">already found it.</span>
          <br />
          Have you?
        </h1>

        {/* Sub */}
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
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

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: siteConfig.memberCount, label: 'Members' },
            { value: siteConfig.onlineCount, label: 'Online Now' },
            { value: siteConfig.channels,    label: 'Channels' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-primary">{stat.value}</div>
              <div className="text-sm text-muted font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
