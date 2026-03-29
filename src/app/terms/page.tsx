import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name} Discord community website.`,
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using this website (yourcommunity.gg), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. These terms apply to all visitors and users of the site.`,
  },
  {
    title: '2. Use of This Website',
    content: `This website is provided for informational purposes and to facilitate access to our Discord community. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site.`,
  },
  {
    title: '3. Discord Server Rules',
    content: `Joining our Discord server is subject to our Community Rules (available at /rules) and Discord's Terms of Service (discord.com/terms). Violation of our community rules may result in removal from the server. This website's Terms of Service are separate from our Discord server rules.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content on this website — including text, design, graphics, logos, and code — is owned by or licensed to ${siteConfig.name} unless otherwise noted. You may not reproduce, distribute, or create derivative works without explicit written permission.`,
  },
  {
    title: '5. Disclaimer of Warranties',
    content: `This website is provided "as is" without any warranties of any kind, express or implied. We do not warrant that the site will be available at all times, free of errors, or that defects will be corrected. Your use of the site is at your sole risk.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `To the fullest extent permitted by law, ${siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or our Discord server.`,
  },
  {
    title: '7. External Links',
    content: `This website may contain links to third-party websites, including Discord. These links are provided for convenience only. We do not endorse or take responsibility for the content or practices of any linked sites.`,
  },
  {
    title: '8. Modifications',
    content: `We reserve the right to modify these Terms at any time. Changes will be posted on this page. Your continued use of the website following changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms or your use of this website shall be resolved through good-faith negotiation.`,
  },
  {
    title: '10. Contact',
    content: `Questions about these Terms? Contact us at ${siteConfig.email}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0F1E] pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8892B0] text-sm hover:text-white transition-colors mb-10"
          >
            ← Back to Home
          </Link>

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-sm font-bold uppercase tracking-widest mb-4">
              Legal
            </span>
            <h1 className="font-display text-5xl text-white mb-4">Terms of Service</h1>
            <p className="text-[#8892B0] text-sm">
              Last updated: <span className="text-white font-semibold">January 1, 2025</span>
            </p>
            <p className="text-[#8892B0] mt-4 leading-relaxed">
              Please read these Terms of Service carefully before using{' '}
              <strong className="text-white">{siteConfig.name}</strong>. By using this site, you agree to these terms.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-[#1E2540] rounded-2xl p-7 border border-white/5">
                <h2 className="font-display text-xl text-white mb-3">{section.title}</h2>
                <p className="text-[#8892B0] text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
