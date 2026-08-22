'use client'

/**
 * CoolMode — click-triggered particle burst.
 * Adapted from magicui.design's "Cool Mode" for this codebase (no
 * external dependency): wraps a single child and, on click, spawns a
 * handful of emoji/shape particles that fly outward and fade.
 *
 * Usage:
 *   <CoolMode particles={['🐈', '✦', '★']}>
 *     <a className="m-sticker">Join Free</a>
 *   </CoolMode>
 */
import { useRef, cloneElement, isValidElement, type ReactElement } from 'react'

type CoolModeProps = {
  children: ReactElement
  particles?: string[]
  particleCount?: number
}

export default function CoolMode({
  children,
  particles = ['🐾', '✦', '★', '●'],
  particleCount = 14,
}: CoolModeProps) {
  const ref = useRef<HTMLElement | null>(null)

  const burst = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2

    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement('span')
      span.textContent = particles[Math.floor(Math.random() * particles.length)]
      span.style.position = 'fixed'
      span.style.left = `${originX}px`
      span.style.top = `${originY}px`
      span.style.fontSize = `${14 + Math.random() * 10}px`
      span.style.pointerEvents = 'none'
      span.style.zIndex = '999'
      span.style.willChange = 'transform, opacity'
      document.body.appendChild(span)

      const angle = Math.random() * Math.PI * 2
      const dist = 70 + Math.random() * 110
      const dx = Math.cos(angle) * dist
      const dy = Math.sin(angle) * dist - 30

      const anim = span.animate(
        [
          { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
          {
            transform: `translate(${dx}px, ${dy}px) scale(0.35) rotate(${Math.random() * 360}deg)`,
            opacity: 0,
          },
        ],
        { duration: 650 + Math.random() * 400, easing: 'cubic-bezier(.2,.8,.3,1)' }
      )
      anim.onfinish = () => span.remove()
    }
  }

  if (!isValidElement(children)) return children

  const childProps = children.props as Record<string, unknown>

  return cloneElement(children, {
    ref: (node: HTMLElement) => {
      ref.current = node
      const { ref: childRef } = children as unknown as { ref?: unknown }
      if (typeof childRef === 'function') childRef(node)
    },
    onClick: (e: React.MouseEvent) => {
      burst(e)
      const onClick = childProps.onClick as ((e: React.MouseEvent) => void) | undefined
      onClick?.(e)
    },
  } as Partial<unknown>)
}
