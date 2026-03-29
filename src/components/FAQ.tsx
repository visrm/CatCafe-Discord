'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

const faqs = [
  {
    q: 'Is the server free to join?',
    a: 'Yes! Joining is completely free. Just click the invite link and you\'re in. No subscription, no gatekeeping.',
  },
  {
    q: 'Is there an age requirement?',
    a: 'You must be 13 or older to use Discord (per Discord\'s Terms of Service). Some channels may have additional age restrictions, which are clearly marked.',
  },
  {
    q: 'How do I get started once I join?',
    a: 'Read the #rules channel, introduce yourself in #introductions, and pick your roles in #role-select. After that — just jump in! Everyone is friendly.',
  },
  {
    q: 'What kind of content is allowed?',
    a: 'We\'re a general community so most topics are welcome. We do have clear guidelines against hate speech, NSFW content in non-designated channels, spam, and harassment. The full rules are pinned in the server.',
  },
  {
    q: 'How do I report someone?',
    a: 'Use the @Moderator ping in any channel or DM a mod directly. We take reports seriously and respond quickly.',
  },
  {
    q: 'Can I invite my friends?',
    a: 'Absolutely! You can share the invite link on this page or generate a new one from within the server. The more the merrier.',
  },
  {
    q: 'Are there ways to get special roles or perks?',
    a: 'Yes! Stay active, participate in events, and show community spirit to earn XP and level-based roles. There are also special roles for contributors and event winners.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`bg-[#1E2540] rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'ring-1 ring-[#D3D3D3]/30' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-white text-base group-hover:text-[#FFD166] transition-colors">{q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#8892B0] transition-all duration-300 ${open ? 'rotate-45 bg-[#FFD166] text-white border-white' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-[#8892B0] text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD166]/4 blur-3xl rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-sm font-bold uppercase tracking-widest mb-2">
            FAQ
          </span>
          <h2 className="font-display font-medium text-5xl md:text-6xl text-white mb-4">
            Got questions?<br />
            <span className="text-[#FFD166]">We got answers.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <p className="text-center text-[#8892B0] mt-10 text-sm">
          Still have questions?{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[#FFD166] font-semibold hover:underline"
          >
            Drop us an email →
          </a>
        </p>
      </div>
    </section>
  )
}
