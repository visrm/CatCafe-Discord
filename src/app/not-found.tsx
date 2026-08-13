import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="font-display text-8xl leading-none text-muted select-none mb-4">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-primary mb-4">
          Lost in the void?
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          This page doesn&apos;t exist — but our Discord community definitely does.
          Come hang out instead!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-subtle text-primary font-semibold hover:bg-surface-hover transition-colors"
          >
            ← Back to Home
          </Link>
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-brand-coral text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Join Discord Instead
          </a>
        </div>
      </div>
    </div>
  )
}
