import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="m-confetti hidden sm:block" aria-hidden="true">
        <div
          className="m-shape m-shape--dot absolute border-0"
          style={{ width: 24, height: 24, background: 'var(--m-teal)', top: '18%', left: '14%' }}
        />
        <div
          className="m-shape absolute"
          style={{ width: 36, height: 36, background: 'var(--m-mustard)', top: '70%', left: '10%', transform: 'rotate(14deg)' }}
        />
        <div
          className="m-shape absolute"
          style={{ width: 30, height: 30, background: 'var(--m-violet)', top: '20%', right: '12%', transform: 'rotate(-10deg)' }}
        />
        <div className="m-plus absolute" style={{ width: 28, height: 28, top: '68%', right: '16%' }} />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <div className="font-display font-bold text-8xl leading-none text-primary select-none mb-4">
          404
        </div>
        <h1 className="relative inline-block font-display font-semibold text-3xl md:text-4xl text-primary mb-4">
          Lost in the void?
          <svg className="absolute left-[6%] right-[6%] -bottom-2 h-3 w-[88%]" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 10 Q 15 0, 28 10 T 54 10 T 80 10 T 106 10 T 132 10 T 158 10 T 184 10" stroke="var(--m-coral)" strokeWidth="5" fill="none" strokeLinecap="round" />
          </svg>
        </h1>
        <p className="text-secondary text-lg mb-10 mt-4 leading-relaxed">
          This page doesn&apos;t exist — but our Discord community definitely does.
          Come hang out instead!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="m-neu inline-flex items-center justify-center px-6 py-3 rounded-xl text-primary font-semibold"
          >
            ← Back to home
          </Link>
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="m-sticker inline-flex items-center justify-center px-6 py-3 font-body font-semibold"
            style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
          >
            Join Discord instead
          </a>
        </div>
      </div>
    </div>
  )
}
