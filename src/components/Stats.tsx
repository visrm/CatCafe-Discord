'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/config'

type LiveStats = {
  memberCount: number
  onlineCount: number
  source: 'live' | 'mock' | 'fallback'
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    let raf: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return count
}

function StatCard({
  value,
  suffix = '',
  label,
  icon,
  color,
  loading,
}: {
  value: number
  suffix?: string
  label: string
  icon: string
  color: string
  loading?: boolean
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 1800, inView && !loading)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="m-neu rounded-2xl p-8 text-center">
      <div
        className="w-11 h-11 mx-auto mb-4 rounded-full flex items-center justify-center text-xl border-[3px]"
        style={{ background: color, borderColor: 'var(--m-outline)' }}
      >
        {icon}
      </div>
      <div className="font-display font-bold text-3xl md:text-5xl mb-2 text-primary">
        {loading ? (
          <span className="inline-block w-20 h-9 bg-surface-2 rounded-lg animate-pulse align-middle" />
        ) : (
          <>
            {count.toLocaleString()}
            {suffix}
          </>
        )}
      </div>
      <div className="kicker text-[11px] text-secondary">{label}</div>
    </div>
  )
}

/**
 * Fetches live counts from /api/discord-stats (which itself calls the
 * Discord API, or falls back to sample values when unconfigured) and
 * merges them with the static config values used for channel count.
 */
export default function Stats({ compact = false }: { compact?: boolean }) {
  const [live, setLive] = useState<LiveStats | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/discord-stats')
      .then((res) => res.json())
      .then((data: LiveStats) => {
        if (!cancelled) setLive(data)
      })
      .catch(() => {
        if (!cancelled) setLive(null)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const loading = live === null
  const memberCount = live?.memberCount ?? 0
  const onlineCount = live?.onlineCount ?? 0

  const stats = [
    { value: memberCount, suffix: '', label: 'Total Members', icon: '👥', color: 'var(--m-mustard)' },
    { value: onlineCount, suffix: '', label: 'Online Right Now', icon: '🟢', color: 'var(--m-teal)' },
    { value: 50, suffix: '+', label: 'Active Channels', icon: '💬', color: 'var(--m-violet)' },
    { value: 97, suffix: '%', label: 'Satisfaction Rate', icon: '❤️', color: 'var(--m-pink)' },
  ]

  return (
    <section id="stats" className={compact ? 'px-6' : 'py-24 px-6 relative overflow-hidden'}>
      <div className="max-w-6xl mx-auto relative z-10">
        {!compact && (
          <div className="text-center mb-16">
            <span className="kicker text-xs inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--m-paper-2)', border: '2px solid var(--m-outline)' }}>
              By the numbers
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">
              Not vibes.
              <br />
              <span className="text-[var(--m-coral-dark)] dark:text-[var(--m-coral)]">Just numbers.</span>
            </h2>
            <p className="text-secondary text-sm mt-4">
              {live?.source === 'live'
                ? 'Live counts, pulled straight from Discord.'
                : 'Sample counts shown — connect a bot token for live data.'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} loading={loading} />
          ))}
        </div>
      </div>
    </section>
  )
}
