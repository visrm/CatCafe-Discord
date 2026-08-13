import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Community Rules',
  description: `The community guidelines that keep ${siteConfig.name} welcoming for everyone.`,
}

const rules = [
  {
    title: '1. Be respectful',
    content: 'No hate speech, harassment, or personal attacks — disagreement is fine, disrespect isn\'t. This applies in every channel and in DMs between members.',
  },
  {
    title: '2. Keep it appropriate',
    content: 'NSFW content stays in age-gated, designated channels only. Anything involving minors is never tolerated, anywhere.',
  },
  {
    title: '3. No spam or self-promo without permission',
    content: 'Unsolicited advertising, invite links, or repeated posting will get your message removed. Ask a staff member before promoting your own project.',
  },
  {
    title: '4. Follow Discord\'s Terms of Service',
    content: 'You must be 13 or older to use Discord. Impersonation, doxxing, and platform manipulation are grounds for an immediate ban.',
  },
  {
    title: '5. Listen to staff',
    content: 'Moderators and admins are here to keep things running smoothly. If a staff member asks you to stop something, stop — you can always appeal in a report ticket.',
  },
  {
    title: '6. Report, don\'t retaliate',
    content: 'See something that breaks the rules? Ping @Moderator or DM a staff member. Don\'t escalate it yourself.',
  },
]

export default function RulesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Community Rules' }]} />

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-subtle text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              Community
            </span>
            <h1 className="font-display font-medium text-4xl md:text-5xl text-primary mb-4">
              Community Rules
            </h1>
            <p className="text-muted leading-relaxed">
              Short version: be kind, keep it appropriate, and listen to staff. Long version below.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {rules.map((rule) => (
              <div key={rule.title} className="bg-surface rounded-2xl p-6 border border-subtle card-glow">
                <h2 className="font-display text-lg text-primary mb-2">{rule.title}</h2>
                <p className="text-muted text-sm leading-relaxed">{rule.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
