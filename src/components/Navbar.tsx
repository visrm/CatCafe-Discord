'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Stats',    href: '#stats' },
  { label: 'Members',  href: '#testimonials' },
  { label: 'FAQ',      href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1E]/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5F57] to-[#FFD166] flex items-center justify-center text-white font-display text-lg shadow-lg group-hover:scale-110 transition-transform">
            ✦
          </span>
          <span className="font-display text-xl text-white tracking-wide">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#8892B0] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-[#FF5F57] text-white text-sm font-bold hover:bg-[#ff4038] transition-colors shadow-lg hover:shadow-[#FF5F57]/30"
          >
            Join Server
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1F35] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-[#8892B0] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full bg-[#FF5F57] text-white text-sm font-bold text-center"
          >
            Join Server →
          </a>
        </div>
      )}
    </header>
  )
}
