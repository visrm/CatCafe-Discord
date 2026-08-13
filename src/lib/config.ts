export const siteConfig = {
  name: 'CatCafe India',
  tagline: '53,000 people. One Discord. Always something happening.',
  description:
    'No follower count to build, no profile to perform. Just a Discord server where someone is always online to talk about whatever you\'re into. Drop in for five minutes — see if you stay for five hours.',
  discordInvite: 'https://discord.gg/hk639u8FDg',
  memberCount: '53,000+',
  onlineCount: '2,500+',
  channels: '50+',
  github: '',
  email: '',
  siteUrl: 'https://cat-cafe-discord.vercel.app',
} as const

/**
 * Staff directory — single source of truth for the /staff pages.
 *
 * This is sample data. To wire in real staff, replace the entries
 * below (or fetch them from a CMS / database and map them into this
 * same shape) — every page that renders staff reads from this array,
 * so nothing else needs to change.
 */
export type StaffTeam = 'Leadership' | 'Management' | 'Moderation' | 'Events'

export type StaffLink = { label: string, url: string }

export type StaffMember = {
  id: string /** URL-safe id, used as the /staff/[id] route param */
  name: string
  role: string
  team: StaffTeam
  avatar: string
  accentColor: string
  location: string
  joined: string
  bio: string
  portfolio: {
    summary: string
    highlights: string[]
    links: StaffLink[]
  }
}

export const staffDirectory: StaffMember[] = [
  {
    id: 'ning',
    name: 'Ning',
    role: 'Founder & Server Owner',
    team: 'Leadership',
    avatar: '🪐',
    accentColor: '#C9A66B',
    location: 'IND',
    joined: '2021',
    bio: 'Started the server in a six-person voice channel and has been stubborn about keeping it feeling small ever since.',
    portfolio: {
      summary:
        'Sets the tone and long-term direction for the community — culture, partnerships, and the occasional 2am bug fix.',
      highlights: [
        'Grew the server from 12 to 53,000+ members without paid ads',
        'Designed the original role and leveling system',
        'Runs the monthly town hall AMA',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'Portfolio', url: 'https://example.com' },
      ],
    },
  },
]

/**
 * Services directory — single source of truth for /services pages.
 *
 * This is sample data with placeholder pricing. To wire in real
 * offerings, replace the entries below — every page that renders
 * services reads from this array, so nothing else needs to change.
 */
export type ServicePlan = {
  /** URL-safe id, used as the plan value submitted on the inquiry form */
  id: string
  name: string
  price: string
  /** Short unit label shown next to the price, e.g. "per hour" */
  unit: string
  description: string
  features: string[]
  popular?: boolean
}

export type ServiceAddOn = {
  id: string
  name: string
  price: string
  description: string
}

export type ServiceCategory = {
  /** URL-safe id, used as the /services/[id] route param */
  id: string
  name: string
  tagline: string
  icon: string
  accentColor: string
  /** Shown on the /services index card */
  summary: string
  /** Shown as numbered steps on the service detail page */
  howItWorks: string[]
  /** Eligibility / restrictions, shown on the service detail page */
  notes: string[]
  plans: ServicePlan[]
  addOns?: ServiceAddOn[]
}

export const servicesDirectory: ServiceCategory[] = [
  {
    id: 'member-advertising',
    name: 'Member Advertising',
    tagline: 'Put your product or link in front of 53,000+ engaged members.',
    icon: '📣',
    accentColor: '#C9694F',
    summary:
      'Hourly and slot-based ad placements using your own copy — or ours — delivered with the right ping for your audience.',
    howItWorks: [
      'Pick a slot duration and ping tier from the plans below',
      'Submit the inquiry form with your product link, copy, and preferred timing',
      'Our team reviews the copy and confirms availability, usually within 24 hours',
      'Your ad goes live in the agreed channel at the scheduled slot',
    ],
    notes: [
      'All ad copy is subject to staff approval before it goes live',
      'No NSFW content, competing communities, or high-risk financial products',
      '@everyone pings are reserved for the top tier and limited per day',
      'Want us to write the copy instead? Add staff copywriting for an extra charge',
    ],
    plans: [
      {
        id: 'starter',
        name: 'Starter Slot',
        price: '₹499',
        unit: 'per hour',
        description: 'A single role-ping placement in one relevant channel.',
        features: ['1 hour visibility', 'Role-based ping', '1 channel', 'Advertiser-provided copy'],
      },
      {
        id: 'standard',
        name: 'Standard Slot',
        price: '₹1,999',
        unit: 'per 6 hours',
        description: 'Extended visibility across peak hours with a wider ping.',
        features: ['6 hour visibility', 'Multi-role ping', 'Up to 2 channels', 'Advertiser-provided copy'],
        popular: true,
      },
      {
        id: 'premium',
        name: 'Premium Slot',
        price: '₹4,999',
        unit: 'per 24 hours',
        description: 'Full-day placement with @everyone reach and a pinned post.',
        features: ['24 hour visibility', '@everyone ping', 'Pinned in channel', 'Priority scheduling'],
      },
    ],
    addOns: [
      {
        id: 'custom-copy',
        name: 'Staff-Written Copy',
        price: '+₹799',
        description: "Our team writes ad copy tailored to the community's tone and format.",
      },
    ],
  },
  {
    id: 'server-promotion',
    name: 'Server & Event Promotion',
    tagline: 'Grow your own Discord server or event with a giveaway-driven push.',
    icon: '🚀',
    accentColor: '#4C7A94',
    summary:
      'Promote your Discord server or event to our members, backed by a Nitro or Boost giveaway that drives real signups.',
    howItWorks: [
      "Choose a giveaway tier below — the price includes the Nitro/Boost prize",
      'Submit your server invite and event details in the inquiry form',
      'We schedule the giveaway alongside a dedicated promotional post',
      'Winners are drawn and announced live in the community',
    ],
    notes: [
      'The giveaway prize (Nitro/Boost) is purchased and gifted directly by our team',
      'Promoted servers must comply with Discord ToS — no ban-evasion or raid servers',
      'Event promotions require a public invite link and a confirmed date/time',
    ],
    plans: [
      {
        id: 'classic',
        name: 'Nitro Classic Push',
        price: '₹1,499',
        unit: 'per giveaway',
        description: '1-month Nitro Classic giveaway with a dedicated promo post.',
        features: ['1-month Nitro Classic prize included', 'Dedicated promo post', 'Pinned for 24 hours'],
      },
      {
        id: 'boost',
        name: 'Nitro Boost Push',
        price: '₹2,999',
        unit: 'per giveaway',
        description: '1-month Nitro Boost giveaway for higher-intent traffic.',
        features: [
          '1-month Nitro Boost prize included',
          'Dedicated promo post',
          'Pinned for 48 hours',
          'Featured in #announcements',
        ],
        popular: true,
      },
      {
        id: 'server-boost',
        name: 'Server Boost Bundle',
        price: '₹5,999',
        unit: 'per event',
        description: '2x Server Boosts as giveaway prizes for your own server, plus a full promo push.',
        features: [
          '2x Server Boost prizes included',
          'Dedicated promo post',
          'Pinned for 72 hours',
          'Shout-out during a voice event',
        ],
      },
    ],
  },
]
