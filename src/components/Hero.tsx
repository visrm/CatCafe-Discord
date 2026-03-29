'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/config'

const floatingEmojis = ['🎉', '✨', '🚀', '💬', '🎮', '🎨', '🌈', '🦄', '🎵', '🔥']

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid pt-24 pb-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FF5F57]/10 blur-3xl" />
        <div className="blob absolute top-1/2 -right-48 w-[400px] h-[400px] bg-[#06D6A0]/10 blur-3xl" style={{ animationDelay: '3s' }} />
        <div className="blob absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-[#FFD166]/8 blur-3xl" style={{ animationDelay: '6s' }} />
      </div>

      {/* Floating emoji decorations */}
      {floatingEmojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl select-none pointer-events-none opacity-30"
          style={{
            left: `${8 + (i * 9) % 88}%`,
            top: `${10 + (i * 17) % 75}%`,
            animation: `float ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2540] border border-[#FF5F57]/30 text-sm font-semibold text-[#FF5F57] mb-8"
          style={{ animation: 'fadeUp 0.6s ease forwards' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-pulse" />
          {siteConfig.onlineCount} members online right now
        </div>

        {/* Headline */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-6"
          style={{ animation: 'fadeUp 0.7s 0.1s ease forwards', opacity: 0 }}
        >
          <span className="text-white">Your new</span>
          <br />
          <span className="bg-gradient-to-r from-[#FF5F57] via-[#FFD166] to-[#06D6A0] bg-clip-text text-transparent glow-coral">
            favourite place
          </span>
          <br />
          <span className="text-white">on the internet.</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg md:text-xl text-[#8892B0] max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          style={{ animation: 'fadeUp 0.7s 0.2s ease forwards', opacity: 0 }}
        >
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.7s 0.3s ease forwards', opacity: 0 }}
        >
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-[#FF5F57] text-white font-bold text-lg shadow-xl hover:shadow-[#FF5F57]/40 hover:scale-105 transition-all duration-200 flex items-center gap-3"
          >
            <DiscordIcon className="w-6 h-6" />
            Join the Community
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-2xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          style={{ animation: 'fadeUp 0.7s 0.45s ease forwards', opacity: 0 }}
        >
          {[
            { value: siteConfig.memberCount, label: 'Members' },
            { value: siteConfig.onlineCount, label: 'Online Now' },
            { value: siteConfig.channels,    label: 'Channels' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-white">{stat.value}</div>
              <div className="text-sm text-[#8892B0] font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892B0] text-xs font-semibold animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
    </svg>
  )
}
