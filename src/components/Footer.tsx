import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1224] border-t border-white/5 px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5F57] to-[#FFD166] flex items-center justify-center text-white font-display text-lg">
                ✦
              </span>
              <span className="font-display text-xl text-white">{siteConfig.name}</span>
            </div>
            <p className="text-[#8892B0] text-sm leading-relaxed max-w-xs">
              A vibrant Discord community where real connections happen. Always welcoming, always growing.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#FF5F57] text-white text-sm font-bold hover:bg-[#ff4038] transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'About Us',     href: '#about' },
                { label: 'Services',  href: '#features' },
                { label: 'Testimonials',   href: '#testimonials' },
                { label: 'FAQ',       href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#8892B0] text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/privacy" className="text-[#8892B0] text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#8892B0] text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-[#8892B0] text-sm hover:text-white transition-colors">
                  Community Rules
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-[#8892B0] text-sm hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8892B0] text-xs">
            © {year} {siteConfig.name}. Made with ❤️ by the community.
          </p>
          <p className="text-[#8892B0] text-xs">
            Not affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
