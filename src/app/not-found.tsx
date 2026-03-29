import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="font-display text-[9rem] leading-none text-[#1E2540] select-none mb-4">
            404
          </div>
          <div className="text-6xl mb-6 animate-float inline-block">🔍</div>
          <h1 className="font-display text-4xl text-white mb-4">
            Lost in the void?
          </h1>
          <p className="text-[#8892B0] text-lg mb-10 leading-relaxed">
            This page doesn't exist — but our Discord community definitely does.
            Come hang out instead!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
            >
              ← Back to Home
            </Link>
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#FF5F57] text-white font-bold hover:bg-[#ff4038] transition-colors"
            >
              Join Discord Instead
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
