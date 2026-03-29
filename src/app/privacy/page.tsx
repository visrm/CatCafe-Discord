import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name} Discord community website.`,
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect minimal information necessary to operate this website. This may include your IP address (for security purposes), browser type, pages visited, and any information you voluntarily provide through contact forms or email. We do not collect personal data beyond what is necessary to respond to your inquiries.`,
  },
  {
    title: '2. Discord Integration',
    content: `This website links to our Discord server managed by Discord Inc. When you click "Join Server," you are redirected to Discord's platform. Any data collected by Discord is governed by Discord's own Privacy Policy (discord.com/privacy). We are not responsible for Discord's data practices.`,
  },
  {
    title: '3. Cookies & Analytics',
    content: `We may use cookies or similar technologies to improve your browsing experience and collect anonymous usage statistics. We use privacy-respecting analytics tools that do not share your data with third parties. You may disable cookies in your browser settings at any time.`,
  },
  {
    title: '4. How We Use Your Information',
    content: `Information collected is used solely to: (a) maintain and improve this website, (b) respond to your inquiries, and (c) understand how visitors use our site. We do not sell, trade, or rent your personal information to any third parties.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain minimal logs for up to 30 days for security purposes. Contact form submissions may be retained for up to 1 year. You may request deletion of any personal data by contacting us at the email below.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to external sites including Discord, Twitter/X, and GitHub. We are not responsible for the privacy practices of these sites and encourage you to review their respective privacy policies.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `This website is not directed at children under 13. We do not knowingly collect personal information from children under 13. Discord's minimum age requirement applies to the server itself. If you believe we have inadvertently collected information from a minor, please contact us immediately.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of this website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at: ${siteConfig.email}`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0F1E] pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8892B0] text-sm hover:text-white transition-colors mb-10"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5F57]/10 text-[#FF5F57] text-sm font-bold uppercase tracking-widest mb-4">
              Legal
            </span>
            <h1 className="font-display text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="text-[#8892B0] text-sm">
              Last updated: <span className="text-white font-semibold">January 1, 2025</span>
            </p>
            <p className="text-[#8892B0] mt-4 leading-relaxed">
              At <strong className="text-white">{siteConfig.name}</strong>, we take your privacy seriously.
              This policy explains what data we collect, how we use it, and your rights regarding that data.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {sections.map(section => (
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
