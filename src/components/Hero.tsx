'use client'

import { useRef } from 'react'
import { siteConfig } from '@/lib/config'
import DiscordIcon from '@/components/DiscordIcon'

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
        >
          <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-pulse" />
          {siteConfig.onlineCount} members online right now
        </div>

        {/* Headline */}
        <h1
          className="font-display font-semibold text-6xl sm:text-7xl md:text-8xl leading-none mb-6"
          style={{ lineHeight: 0.9 }}
        >
          <span className="text-white">Your new</span>
          <br />
          <span 
          className="bg-gradient-to-r from-[#FF5F57] via-[#FFD166] to-[#06D6A0] bg-clip-text text-transparent"
          style={{ lineHeight: 0.9 }}
          >
            favourite place
          </span>
          <br />
          <span className="text-white" style={{ lineHeight: 0.9 }}>on the internet.</span>
        </h1>

        {/* Sub */}
        <p
          className="text-md md:text-lg text-[#8892B0] max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-[#FF5F57] text-white font-bold text-lg shadow-xl hover:shadow-[#FF5F57]/20 hover:scale-105 transition-all duration-200 flex items-center gap-3"
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

    </section>
  )
}
