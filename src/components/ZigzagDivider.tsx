/**
 * Zigzag section divider — Memphis redesign.
 *
 * Fill should match the section *below* the divider, not above, so the
 * color transition reads as "entering" the next block (see
 * memphis-redesign-instructions.md §6).
 */
export default function ZigzagDivider({
  fill = 'var(--m-mustard)',
  flip = false,
}: {
  fill?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      className={`w-full h-[34px] ${flip ? '-scale-y-100' : ''}`}
      aria-hidden="true"
    >
      <polygon
        points="0,34 0,10 30,30 60,4 90,28 120,6 150,32 180,8 210,30 240,4 270,28 300,6 330,32 360,8 390,30 420,4 450,28 480,6 510,32 540,8 570,30 600,4 630,28 660,6 690,32 720,8 750,30 780,4 810,28 840,6 870,32 900,8 930,30 960,4 990,28 1020,6 1050,32 1080,8 1110,30 1140,4 1170,28 1200,10 1200,34"
        fill={fill}
      />
    </svg>
  )
}
