'use client'

/**
 * DottedMap — world map rendered as a uniform dot grid (density, not
 * jitter, gives the continents their shape), with marked locations
 * snapped onto real dots and colored with the Memphis accent cycle.
 * Adapted from magicui.design's "Dotted Map" for this codebase — SVG
 * output, no external map-data dependency, sized for the community's
 * actual member locations.
 */
import { useEffect, useRef } from 'react'

const W = 900
const H = 460
const SPACING = 8

const project = (lat: number, lon: number): [number, number] => [
  ((lon + 180) / 360) * W,
  ((90 - lat) / 180) * H,
]

// Simplified continent/country outlines — good enough at this dot
// density for a decorative "where our members are" map, not for
// geographic accuracy.
const CONTINENTS: Record<string, [number, number][]> = {
  northAmerica: [[71,-156],[70,-95],[62,-80],[49,-65],[45,-60],[32,-80],[25,-82],[19,-96],[16,-93],
                 [20,-106],[23,-110],[32,-117],[41,-124],[49,-125],[55,-133],[60,-141],[71,-156]],
  southAmerica: [[12,-72],[11,-66],[5,-60],[-2,-44],[-8,-35],[-20,-40],[-23,-43],[-34,-54],
                 [-38,-62],[-52,-69],[-55,-68],[-50,-74],[-33,-71],[-18,-70],[-5,-81],[2,-79],[12,-72]],
  africa: [[37,10],[33,20],[32,32],[22,38],[12,43],[2,45],[-5,40],[-15,40],[-26,33],[-34,20],
           [-33,18],[-22,14],[-17,12],[-4,9],[4,8],[6,3],[5,-6],[9,-14],[15,-17],[21,-17],
           [28,-11],[32,-9],[37,-6],[37,10]],
  europe: [[71,25],[68,33],[60,30],[59,40],[52,40],[48,38],[45,28],[41,20],[37,23],[36,-9],
           [40,-9],[44,-1],[48,-2],[49,2],[51,3],[53,7],[55,8],[57,10],[59,11],[63,10],
           [66,13],[69,18],[71,25]],
  asia: [[77,104],[76,140],[68,161],[60,163],[52,160],[46,142],[43,132],[35,130],[31,121],
         [23,120],[18,109],[10,105],[6,101],[1,104],[6,80],[9,79],[16,73],[24,68],[30,66],
         [37,49],[41,48],[43,41],[45,36],[47,42],[52,54],[55,61],[58,68],[62,73],[67,86],
         [70,95],[74,100],[77,104]],
  australia: [[-11,131],[-12,137],[-12,142],[-16,145],[-24,153],[-33,151],[-38,147],[-38,141],
              [-35,136],[-32,115],[-25,113],[-20,113],[-14,126],[-11,131]],
  uk: [[59,-3],[57,-6],[54,-6],[51,-6],[50,-5],[51,1],[53,0],[55,-2],[59,-3]],
  japan: [[45,141],[43,144],[38,141],[34,132],[31,130],[35,136],[40,140],[45,141]],
  nz: [[-35,174],[-38,178],[-41,175],[-46,167],[-44,171],[-40,174],[-35,174]],
  maldives: [[7,72.8],[6.5,73.4],[5.5,73.2],[3,73],[1,73.1],[4,72.9],[7,72.8]],
}

function toXY(poly: [number, number][]) {
  return poly.map(([lat, lon]) => project(lat, lon))
}

function pointInPoly(x: number, y: number, poly: [number, number][]) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

export type MapMarker = { lat: number; lon: number; pulse?: boolean }

const ACCENTS = ['var(--m-coral)', 'var(--m-teal)', 'var(--m-mustard)', 'var(--m-violet)', 'var(--m-pink)']

type DottedMapProps = {
  markers?: MapMarker[]
  /** Enables the pulse-ring animation on every marker. A marker can
   *  still opt out individually with `pulse: false`. Mirrors magicui's
   *  DottedMap `pulse` prop / per-marker `Marker.pulse` override. */
  pulse?: boolean
}

export default function DottedMap({ markers = [] as MapMarker[], pulse = false }: DottedMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    svg.innerHTML = '' // idempotent on re-render/theme change

    const svgNS = 'http://www.w3.org/2000/svg'
    const polys = Object.values(CONTINENTS).map(toXY)
    const dotSet = new Set<string>()
    const dotsGroup = document.createElementNS(svgNS, 'g')
    svg.appendChild(dotsGroup)

    for (let gx = 0; gx * SPACING <= W; gx++) {
      for (let gy = 0; gy * SPACING <= H; gy++) {
        const x = gx * SPACING
        const y = gy * SPACING
        if (!polys.some((p) => pointInPoly(x, y, p))) continue
        dotSet.add(`${gx},${gy}`)
        const c = document.createElementNS(svgNS, 'circle')
        c.setAttribute('cx', String(x))
        c.setAttribute('cy', String(y))
        c.setAttribute('r', '1.6')
        c.setAttribute('class', 'm-map-dot')
        dotsGroup.appendChild(c)
      }
    }

    const snapToDot = (lat: number, lon: number): [number, number] => {
      const [x, y] = project(lat, lon)
      const gx0 = Math.round(x / SPACING)
      const gy0 = Math.round(y / SPACING)
      for (let r = 0; r < 12; r++) {
        for (let dx = -r; dx <= r; dx++) {
          for (let dy = -r; dy <= r; dy++) {
            if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue
            const key = `${gx0 + dx},${gy0 + dy}`
            if (dotSet.has(key)) return [(gx0 + dx) * SPACING, (gy0 + dy) * SPACING]
          }
        }
      }
      return [x, y]
    }

    const markersGroup = document.createElementNS(svgNS, 'g')
    svg.appendChild(markersGroup)

    markers.forEach((marker, i) => {
      const { lat, lon } = marker
      const [x, y] = snapToDot(lat, lon)
      const color = ACCENTS[i % ACCENTS.length]
      // Per-marker override wins; otherwise falls back to the
      // component-level `pulse` prop — same precedence as magicui's
      // DottedMap (`marker.pulse` overrides the shared `pulse` prop).
      const shouldPulse = marker.pulse ?? pulse

      if (shouldPulse) {
        // PulseMarker — an expanding, fading ring behind the dot,
        // each one desynced with a random negative animation-delay so
        // the map doesn't pulse in lockstep.
        const ring = document.createElementNS(svgNS, 'circle')
        ring.setAttribute('cx', String(x))
        ring.setAttribute('cy', String(y))
        ring.setAttribute('r', '3.4')
        ring.setAttribute('fill', color)
        ring.setAttribute('class', 'm-map-pulse-ring')
        ring.style.animationDelay = `${-(Math.random() * 2).toFixed(2)}s`
        markersGroup.appendChild(ring)
      }

      const c = document.createElementNS(svgNS, 'circle')
      c.setAttribute('cx', String(x))
      c.setAttribute('cy', String(y))
      c.setAttribute('r', '3.4')
      c.setAttribute('fill', color)
      c.setAttribute('stroke', 'var(--m-outline)')
      c.setAttribute('stroke-width', '1.2')
      c.setAttribute('class', 'm-map-dot m-map-dot--marked')
      markersGroup.appendChild(c)
    })
  }, [markers, pulse])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Map of countries our members join from"
    />
  )
}

// Default marker set for the community's stated reach — India gets a
// denser cluster (without ever printing a number) so density alone
// reads as "mostly India, but genuinely global."
export const communityMarkers: MapMarker[] = [
  { lat: 28.6, lon: 77.2 }, { lat: 19.0, lon: 72.8 }, { lat: 12.9, lon: 77.6 },
  { lat: 22.6, lon: 88.4 }, { lat: 13.1, lon: 80.3 }, { lat: 26.9, lon: 75.8 },
  { lat: 17.4, lon: 78.5 }, { lat: 23.0, lon: 72.6 }, // India
  { lat: 51.5, lon: -0.1 }, { lat: 53.5, lon: -2.2 }, // UK
  { lat: 40.7, lon: -74.0 }, { lat: 34.0, lon: -118.2 }, { lat: 41.9, lon: -87.6 }, // USA
  { lat: 25.2, lon: 55.3 }, { lat: 24.45, lon: 54.37 }, // UAE / Abu Dhabi
  { lat: -33.9, lon: 151.2 }, { lat: -37.8, lon: 145.0 }, // Australia
  { lat: 11.5, lon: 104.9 }, // Cambodia
  { lat: 43.7, lon: -79.4 }, { lat: 49.3, lon: -123.1 }, // Canada
  { lat: 33.7, lon: 73.1 }, { lat: 24.9, lon: 67.0 }, // Pakistan
  { lat: 52.5, lon: 13.4 }, { lat: 48.1, lon: 11.6 }, // Germany
  { lat: 25.3, lon: 51.5 }, // Qatar
  { lat: 4.2, lon: 73.5 }, // Maldives
  { lat: 39.9, lon: 116.4 }, { lat: 31.2, lon: 121.5 }, // China
]
