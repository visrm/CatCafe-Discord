import type { Marker } from '@/components/magicui/dotted-map'

// Community's stated reach — India gets a denser cluster (without
// ever printing a number) so density alone reads as "mostly India,
// but genuinely global." Every marker pulses via the DottedMap's
// `pulse` prop on the homepage; nothing here opts out.
export const communityMarkers: Marker[] = [
  { lat: 28.6, lng: 77.2 }, { lat: 19.0, lng: 72.8 }, { lat: 12.9, lng: 77.6 },
  { lat: 22.6, lng: 88.4 }, { lat: 13.1, lng: 80.3 }, { lat: 26.9, lng: 75.8 },
  { lat: 17.4, lng: 78.5 }, { lat: 23.0, lng: 72.6 }, // India
  { lat: 51.5, lng: -0.1 }, { lat: 53.5, lng: -2.2 }, // UK
  { lat: 40.7, lng: -74.0 }, { lat: 34.0, lng: -118.2 }, { lat: 41.9, lng: -87.6 }, // USA
  { lat: 25.2, lng: 55.3 }, { lat: 24.45, lng: 54.37 }, // UAE / Abu Dhabi
  { lat: -33.9, lng: 151.2 }, { lat: -37.8, lng: 145.0 }, // Australia
  { lat: 11.5, lng: 104.9 }, // Cambodia
  { lat: 43.7, lng: -79.4 }, { lat: 49.3, lng: -123.1 }, // Canada
  { lat: 33.7, lng: 73.1 }, { lat: 24.9, lng: 67.0 }, // Pakistan
  { lat: 52.5, lng: 13.4 }, { lat: 48.1, lng: 11.6 }, // Germany
  { lat: 25.3, lng: 51.5 }, // Qatar
  { lat: 4.2, lng: 73.5 }, // Maldives
  { lat: 39.9, lng: 116.4 }, { lat: 31.2, lng: 121.5 }, // China
]
