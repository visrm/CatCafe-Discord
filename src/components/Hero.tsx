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

      {/* Memphis confetti shape layer — decorative, hidden from screen
          readers and on small screens where it would crowd the copy.
          Sits above the veil (z-1 via .m-confetti) but below the text
          column (z-10). ~9 shapes, per the density the mockup uses for
          a hero-sized section. */}
      <div className="hidden md:block" aria-hidden="true">
        <div className="m-confetti">
          <div
            className="m-shape m-shape--dot absolute"
            style={{ width: 380, height: 380, background: 'var(--m-teal)', borderWidth: 4, top: '-140px', left: '-120px' }}
          />
          <div
            className="absolute border-[4px]"
            style={{
              width: 240,
              height: 200,
              background: 'var(--m-coral)',
              borderColor: 'var(--m-outline)',
              borderRadius: '58% 42% 61% 39% / 45% 55% 45% 55%',
              top: '4%',
              right: '-70px',
            }}
          />
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '100px solid transparent',
              borderRight: '100px solid transparent',
              borderBottom: '170px solid var(--m-violet)',
              bottom: '20px',
              right: '8%',
              filter: 'drop-shadow(4px 4px 0 var(--m-outline))',
            }}
          />
          <div
            className="m-shape absolute"
            style={{ width: 90, height: 90, background: 'var(--m-mustard)', top: '46%', left: '3%', transform: 'rotate(18deg)' }}
          />
          <div
            className="m-shape absolute"
            style={{ width: 46, height: 46, background: 'var(--m-pink)', borderWidth: 3, top: '20%', left: '16%', transform: 'rotate(-12deg)' }}
          />
          <div
            className="m-shape m-shape--dot absolute border-0"
            style={{ width: 30, height: 30, background: 'var(--m-teal)', top: '66%', left: '22%' }}
          />
          <div
            className="m-shape m-shape--dot absolute border-0"
            style={{ width: 18, height: 18, background: 'var(--m-mustard)', top: '12%', left: '8%' }}
          />
          <div className="m-plus absolute" style={{ width: 34, height: 34, top: '72%', right: '20%' }} />
          <div className="m-plus absolute" style={{ width: 24, height: 24, top: '8%', right: '30%' }} />
        </div>

        {/* Chibi cats — reused polygon-ear/ellipse-body shape from the
            mockup, recolored to two of the accent colors. */}
        <svg className="absolute z-[4]" width="70" height="60" viewBox="0 0 70 60" style={{ top: '9%', right: '9%' }}>
          <polygon points="10,18 20,2 28,20" fill="var(--m-mustard)" stroke="var(--m-outline)" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="60,18 50,2 42,20" fill="var(--m-mustard)" stroke="var(--m-outline)" strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="35" cy="34" rx="26" ry="22" fill="var(--m-mustard)" stroke="var(--m-outline)" strokeWidth="3" />
          <circle cx="26" cy="30" r="2.6" fill="var(--m-outline)" />
          <circle cx="44" cy="30" r="2.6" fill="var(--m-outline)" />
          <path d="M30 40 Q35 44 40 40" stroke="var(--m-outline)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </svg>
        <svg
          className="absolute z-[4]"
          width="46"
          height="40"
          viewBox="0 0 70 60"
          style={{ top: '58%', right: '4%', transform: 'rotate(-8deg)' }}
        >
          <polygon points="10,18 20,2 28,20" fill="var(--m-coral)" stroke="var(--m-outline)" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="60,18 50,2 42,20" fill="var(--m-coral)" stroke="var(--m-outline)" strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="35" cy="34" rx="26" ry="22" fill="var(--m-coral)" stroke="var(--m-outline)" strokeWidth="3" />
          <circle cx="26" cy="30" r="2.6" fill="var(--m-outline)" />
          <circle cx="44" cy="30" r="2.6" fill="var(--m-outline)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge — glass only reads as glass with something busy behind
            it, which is why this sits directly over the confetti/shape
            cluster (see globals.css .m-glass). */}
        <div className="m-glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8">
          <span
            className="w-2 h-2 rounded-full border-[1.5px]"
            style={{ background: 'var(--m-teal)', borderColor: 'var(--m-outline)' }}
          />
          <span className="kicker text-xs">
            {siteConfig.onlineCount} online, talking right now
          </span>
        </div>

        {/* Headline — type scale per memphis-redesign-instructions.md §2 */}
        <h1 className="mb-5">
          <span className="block font-body font-medium text-2xl sm:text-3xl md:text-4xl text-secondary mb-1.5">
            {siteConfig.memberCount} people
          </span>
          <span className="relative inline-block font-display font-bold text-[50px] md:text-[84px] leading-[1.05] text-primary">
            already found it.
            <svg
              className="absolute left-[4%] right-[4%] -bottom-2 h-4 w-[92%]"
              viewBox="0 0 300 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 10 Q 20 0, 38 10 T 74 10 T 110 10 T 146 10 T 182 10 T 218 10 T 254 10 T 290 10"
                stroke="var(--m-mustard)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="block font-display font-semibold text-[28px] md:text-[40px] leading-[1.15] text-primary mt-2.5">
            Have you?
          </span>
        </h1>

        {/* Sub */}
        <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTAs — flat sticker primary (load-bearing action stays full
            contrast), neumorphic secondary, both inside a flat shelf. */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-[24px] px-[22px] py-[18px]" style={{ background: 'var(--m-shelf)' }}>
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="m-sticker inline-flex items-center gap-2.5 px-[26px] py-[15px] font-body font-semibold text-base"
            style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
          >
            <DiscordIcon className="w-5 h-5" />
            Join Free — 10 Seconds
          </a>
          <Link
            href="/about"
            className="m-neu inline-flex items-center px-6 py-[15px] rounded-2xl font-body font-semibold text-base text-primary"
          >
            See What&apos;s Inside
          </Link>
        </div>

        {/* Stat island — neumorphic chips on a flat panel, replacing
            the old bare stats grid with the Memphis pattern. */}
        <div
          className="mt-8 inline-flex flex-wrap items-center justify-center gap-3.5 rounded-[20px] px-6 py-4"
          style={{ background: 'var(--m-paper-2)' }}
        >
          {[
            { value: siteConfig.memberCount, label: 'Members' },
            { value: siteConfig.onlineCount, label: 'Online now' },
            { value: siteConfig.channels, label: 'Channels' },
          ].map((stat) => (
            <div key={stat.label} className="m-neu flex flex-col items-start rounded-[14px] px-4 py-3 min-w-[100px]">
              <b className="font-display text-xl text-primary">{stat.value}</b>
              <span className="kicker text-[10px] text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
