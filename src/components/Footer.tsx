import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import Logo from '@/components/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-2 border-t border-subtle px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex overflow-hidden">
                <Logo size={36} className="!rounded-none" />
              </span>
              <span className="font-display text-xl text-primary">{siteConfig.name}</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {siteConfig.memberCount} people, one Discord server, zero corporate speak.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="m-sticker inline-flex px-4 py-2 font-body text-sm font-semibold"
                style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Navigation */}
          {/* h2 here (not h3/h4) is deliberate: axe's heading-order
              rule only flags an *increase* of more than one level, never
              a decrease, and the Footer's last-heading-before-it varies
              by page (h1 on some, h2 or h3 on others). h2 is safe no
              matter what precedes it — h3/h4 broke on pages like /faq
              and /members whose only prior heading is an h2. */}
          <div>
            <h2 className="kicker text-xs text-primary mb-4">Navigate</h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'About Us',    href: '/about' },
                { label: 'Features',    href: '/features' },
                { label: 'Services',    href: '/services' },
                { label: 'Members',     href: '/members' },
                { label: 'Staff',       href: '/staff' },
                { label: 'FAQ',         href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h2 className="kicker text-xs text-primary mb-4">Legal</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/privacy" className="text-muted text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-muted text-sm hover:text-primary transition-colors">
                  Community Rules
                </Link>
              </li>
              <li>
                <a
                  href="https://dyno.gg/form/c8732af1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm hover:text-primary transition-colors"
                >
                  Ban / Mute Appeal
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-muted text-sm hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {year} {siteConfig.name}. Made with care by the community.
          </p>
          <p className="text-muted text-xs">
            Not affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
