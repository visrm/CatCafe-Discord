import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Community Rules',
  description: `The community guidelines that keep ${siteConfig.name} welcoming for everyone.`,
}

type Rule = {
  title: string
  content: string
  links?: { label: string; href: string }[]
}

const rules: Rule[] = [
  {
    title: '1. Be polite',
    content: 'Treat every member with courtesy and respect. Publicly starting conflicts or expressing hatred toward another person isn\'t allowed.',
  },
  {
    title: '2. Watch your language',
    content: 'Keep profanity to a minimum, and never use it to put another user down. Speaking negatively about someone isn\'t tolerated, foul language or not.',
  },
  {
    title: '3. No impersonation',
    content: 'Don\'t pretend to be a staff member or a bot. Doing so leads to strict action against the account responsible.',
  },
  {
    title: '4. No spamming',
    content: 'Flooding text channels with messages or mic-spamming in voice chat isn\'t tolerated and will get you muted. Encouraging others to spam is treated the same way.',
  },
  {
    title: '5. Mute & warning system',
    content: 'Warnings build up: your 3rd warning is a 15-minute mute, your 6th is 45 minutes. Past 9 warnings, expect stricter and more permanent action — week-long mutes, kicks, or bans.',
  },
  {
    title: '6. Respect every community here',
    content: 'We\'re an anime, gaming, and K-culture space. Respect each other\'s interests — insulting or demeaning someone\'s fandom can lead to a server silence or ban.',
  },
  {
    title: '7. Zero tolerance for discrimination',
    content: 'Racism, sexism, xenophobia, transphobia, homophobia, misogyny, and discrimination based on religion, sexual orientation, gender identity, race, ethnicity, disability, or disease are never allowed, to any degree, and result in immediate action.',
  },
  {
    title: '8. No NSFW content',
    content: 'Pornographic, adult, or otherwise NSFW material — including controversial content — has no place here. Expect a forced name change and formal warnings.',
  },
  {
    title: '9. Privacy & doxxing',
    content: 'Threats of DDoS, death threats, doxxing (sharing anyone\'s personal identifying info), abuse, or other malicious threats are absolutely prohibited.',
  },
  {
    title: '10. No begging',
    content: 'Don\'t beg staff or other members for roles, permissions, or special treatment.',
  },
  {
    title: '11. No unapproved advertising',
    content: 'Free advertising isn\'t allowed without staff permission. If your content is relevant, adds real value, and is SFW, submit it in #social-medias instead.',
  },
  {
    title: '12. Keep outside conflicts outside',
    content: 'Personal disputes aren\'t the server\'s business. Bringing them here — or publicizing them — only disrupts everyone else, and any chaos that follows is on you. DM-related issues won\'t be handled here unless staff decide they affect the server directly.',
  },
  {
    title: '13. Mental health',
    content: 'Discord isn\'t a substitute for professional help, and we\'re not equipped or trained to handle a mental health crisis. If you\'re in crisis or considering self-harm, please contact your local emergency services immediately.',
  },
  {
    title: '14. Discord\'s own policies apply too',
    content: 'On top of everything above, this server follows Discord\'s own platform-wide rules in full.',
    links: [
      { label: 'Terms of Service', href: 'https://discord.com/terms' },
      { label: 'Community Guidelines', href: 'https://discord.com/guidelines' },
    ],
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
            <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
              Community
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary mb-4">
              Community Rules
            </h1>
            <p className="text-secondary leading-relaxed">
              Short version: be kind, respect each other's interests, keep it SFW, and listen to staff. Long version below.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {rules.map((rule) => (
              <div key={rule.title} className="rounded-2xl p-6 border-2" style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}>
                <h2 className="font-display font-semibold text-lg text-primary mb-2">{rule.title}</h2>
                <p className="text-secondary text-sm leading-relaxed">{rule.content}</p>
                {rule.links && (
                  <div className="flex flex-wrap gap-4 mt-3">
                    {rule.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline text-[var(--m-teal-dark)] dark:text-[var(--m-teal)]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
