'use client'

/**
 * ScrollBasedVelocity — infinite marquee text whose scroll speed
 * reacts to how fast the user scrolls the page (rows speed up/slow
 * down and briefly reverse-lean with scroll velocity). Adapted from
 * magicui.design's "Scroll Based Velocity" for this codebase (no
 * external motion dependency).
 */
import { useEffect, useRef } from 'react'

type ScrollVelocityRowProps = {
  text: string
  baseVelocity: number
}

function VelocityRow({ text, baseVelocity }: ScrollVelocityRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const lastScrollY = useRef(0)
  const velocity = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY
    let raf: number

    const onScroll = () => {
      const y = window.scrollY
      velocity.current = y - lastScrollY.current
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const tick = () => {
      // Base drift + a speed boost proportional to how fast the user
      // just scrolled. The boost only ever adds magnitude — direction
      // is locked to this row's own baseVelocity sign, so speeding up
      // never flips row A and row B onto the same heading.
      const dir = baseVelocity < 0 ? -1 : 1
      const boost = Math.max(0, Math.min(8, Math.abs(velocity.current) * 0.5))
      offset.current += dir * (Math.abs(baseVelocity) + boost)
      velocity.current *= 0.9 // decay toward the base speed each frame

      if (rowRef.current) {
        const width = rowRef.current.scrollWidth / 2
        if (offset.current <= -width) offset.current += width
        if (offset.current > 0) offset.current -= width
        rowRef.current.style.transform = `translateX(${offset.current}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [baseVelocity])

  return (
    <div className="m-velocity-row" ref={rowRef}>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  )
}

export default function ScrollBasedVelocity({ text }: { text: string }) {
  return (
    <div className="m-velocity-band" aria-hidden="true">
      <VelocityRow text={text} baseVelocity={-1.1} />
      <VelocityRow text={text} baseVelocity={0.9} />
    </div>
  )
}
