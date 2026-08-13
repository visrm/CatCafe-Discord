import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-2 border-t border-subtle px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-coral flex items-center justify-center text-white font-display text-lg">
                ✦
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
                className="px-4 py-2 rounded-xl bg-brand-coral text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary font-semibold text-sm tracking-wide mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'About Us',    href: '/about' },
                { label: 'Features',    href: '/features' },
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
            <h4 className="text-primary font-semibold text-sm tracking-wide mb-4">Legal</h4>
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
