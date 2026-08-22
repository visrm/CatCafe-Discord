'use client'

/**
 * AnimatedThemeToggler — sun/moon icon morph + a View Transitions
 * circular reveal when supported, falling back to a plain toggle
 * where it isn't. Adapted from magicui.design's "Animated Theme
 * Toggler" for this codebase's next-themes setup — drop-in
 * replacement for the old ThemeToggle.
 */
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

// Minimal ambient type for the (still-unstable) View Transitions API.
type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> }
}

export default function AnimatedThemeToggler({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className={`w-9 h-9 rounded-full ${className}`} aria-hidden />
  }

  const isDark = theme === 'dark'

  const toggle = async () => {
    const next = isDark ? 'light' : 'dark'
    const doc = document as DocumentWithViewTransition

    if (!doc.startViewTransition || !btnRef.current) {
      setTheme(next)
      return
    }

    const { top, left, width, height } = btnRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => setTheme(next))
    try {
      await transition.ready
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        { duration: 550, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      )
    } catch {
      // View Transitions unsupported/aborted — theme already switched above.
    }
  }

  return (
    <button
      ref={btnRef}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`theme-toggle w-9 h-9 rounded-full border-[2px] flex items-center justify-center text-primary transition-colors overflow-hidden ${className}`}
      style={{ borderColor: 'var(--m-outline, var(--border-subtle))' }}
    >
      <svg
        className="w-4 h-4 absolute transition-all duration-500"
        style={{
          transform: isDark ? 'rotate(-90deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity: isDark ? 0 : 1,
        }}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
      </svg>
      <svg
        className="w-4 h-4 absolute transition-all duration-500"
        style={{
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
          opacity: isDark ? 1 : 0,
        }}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="4.2" />
        <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </svg>
    </button>
  )
}
