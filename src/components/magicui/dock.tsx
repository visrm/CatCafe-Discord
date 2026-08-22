'use client'

/**
 * Dock — macOS-style magnifying icon dock. Adapted from
 * magicui.design's "Dock" for this codebase (no external dependency);
 * used on the staff pages to surface each team lead's external links.
 */
import { useRef } from 'react'

export type DockItem = {
  label: string
  href: string
  icon: React.ReactNode
}

export default function Dock({ items }: { items: DockItem[] }) {
  const dockRef = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const dock = dockRef.current
    if (!dock) return
    const rect = dock.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    Array.from(dock.querySelectorAll<HTMLElement>('[data-dock-item]')).forEach((item) => {
      const iRect = item.getBoundingClientRect()
      const iCenter = iRect.left - rect.left + iRect.width / 2
      const dist = Math.abs(mouseX - iCenter)
      const scale = Math.max(1, 1.6 - dist / 90)
      item.style.transform = `scale(${scale}) translateY(${(scale - 1) * -10}px)`
    })
  }

  const onMouseLeave = () => {
    const dock = dockRef.current
    if (!dock) return
    Array.from(dock.querySelectorAll<HTMLElement>('[data-dock-item]')).forEach((item) => {
      item.style.transform = 'scale(1)'
    })
  }

  if (items.length === 0) return null

  return (
    <div
      ref={dockRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="m-dock inline-flex items-end gap-3.5 px-5 py-4 rounded-[24px]"
      style={{ background: 'var(--m-shelf)', border: '3px solid var(--m-outline)', boxShadow: '5px 5px 0 var(--m-outline)' }}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          data-dock-item
          title={item.label}
          className="m-dock-item flex items-center justify-center rounded-2xl border-[3px] text-xl transition-transform duration-150 ease-out"
          style={{ width: 52, height: 52, borderColor: 'var(--m-outline)', background: 'var(--m-paper)' }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
