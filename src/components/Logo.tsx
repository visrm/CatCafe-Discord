import Image from 'next/image'
import { siteConfig } from '@/lib/config'

type LogoProps = {
  /** Pixel size of the square mark. Defaults to 36 (matches the old ✦ badge). */
  size?: number
  className?: string
}

/**
 * Brand mark, sourced from /public/logo.webp.
 *
 * Used wherever the site previously rendered the inline "✦" gradient
 * badge (Navbar, Footer) and as the basis for the site icon set in
 * app/layout.tsx metadata.
 */
export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <Image
      src="/logo.webp"
      alt={`${siteConfig.name} logo`}
      width={size}
      height={size}
      className={`rounded-xl object-contain ${className}`}
      priority
    />
  )
}
