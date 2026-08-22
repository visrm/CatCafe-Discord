import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Standard shadcn/magicui helper — merges Tailwind class lists,
// letting later classes win over earlier conflicting ones. Required
// by components pulled from the magicui registry (e.g. DottedMap).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
