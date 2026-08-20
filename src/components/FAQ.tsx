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
      className="rounded-2xl overflow-hidden border-[2.5px] transition-colors duration-200"
      style={{ background: 'var(--m-paper)', borderColor: 'var(--m-outline)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="font-body font-semibold text-primary text-base">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border-[2.5px] flex items-center justify-center transition-transform duration-200"
          style={{
            borderColor: 'var(--m-outline)',
            background: open ? 'var(--m-mustard)' : 'transparent',
            color: open ? 'var(--m-on-color-ink)' : 'var(--text-secondary)',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-secondary text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="m-confetti" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 16, height: 16, background: 'var(--m-coral)', top: '6%', left: '8%' }}
        />
        <div className="m-plus absolute" style={{ width: 22, height: 22, top: '90%', right: '10%' }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
            FAQ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Got questions?
            <br />
            <span className="text-[var(--m-mustard-dark)] dark:text-[var(--m-mustard)]">We got answers.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <p className="text-center text-secondary mt-10 text-sm">
          Still have questions?{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold hover:underline text-[var(--m-mustard-dark)] dark:text-[var(--m-mustard)]"
          >
            Drop us an email →
          </a>
        </p>
      </div>
    </section>
  )
}
