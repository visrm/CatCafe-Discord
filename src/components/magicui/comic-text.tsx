/**
 * ComicText — bold outlined display type with a halftone-dot backdrop
 * and a slight rotation, matching the Memphis mockup's comic-book
 * headline treatment. Adapted from magicui.design's "Comic Text" for
 * this codebase's token system (--m-outline / --m-coral etc).
 *
 * Kept deliberately rare — per instruction #1, only for a couple of
 * "hero moment" words, not every heading.
 */
type ComicTextProps = {
  children: React.ReactNode
  className?: string
  color?: string
  rotate?: number
}

export default function ComicText({
  children,
  className = '',
  color = 'var(--m-coral)',
  rotate = -3,
}: ComicTextProps) {
  return (
    <span
      className={`m-comic-text ${className}`}
      style={{ color, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
