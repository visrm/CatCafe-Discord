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
export type StaffTeam = 'Leadership' | 'Moderation' | 'Events' | 'Development' | 'Design'

export type StaffLink = {
  label: string
  url: string
}

export type StaffMember = {
  /** URL-safe id, used as the /staff/[id] route param */
  id: string
  name: string
  role: string
  team: StaffTeam
  /** Emoji or image URL — sample data uses emoji avatars */
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
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Founder & Server Owner',
    team: 'Leadership',
    avatar: '🪐',
    accentColor: '#C9A66B',
    location: 'Bengaluru, IN',
    joined: '2021',
    bio: 'Started the server in a two-person voice channel and has been stubborn about keeping it feeling small ever since.',
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
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Head of Moderation',
    team: 'Moderation',
    avatar: '🛡️',
    accentColor: '#4E9B85',
    location: 'Kochi, IN',
    joined: '2021',
    bio: 'Built the moderation playbook the rest of the team still follows — calm under pressure, allergic to double standards.',
    portfolio: {
      summary:
        'Owns the moderation guidelines, trains new mods, and handles escalations across every timezone the server runs in.',
      highlights: [
        'Wrote the server\'s moderation and escalation guidelines',
        'Onboarded and trained 20+ moderators',
        'Maintains sub-hour response time on reports',
      ],
      links: [{ label: 'LinkedIn', url: 'https://linkedin.com' }],
    },
  },
  {
    id: 'devansh-rao',
    name: 'Devansh Rao',
    role: 'Lead Bot Developer',
    team: 'Development',
    avatar: '🧩',
    accentColor: '#4C7A94',
    location: 'Pune, IN',
    joined: '2022',
    bio: 'Writes most of the bots that quietly keep the server running — music queue, XP system, and the anti-spam filter.',
    portfolio: {
      summary:
        'Builds and maintains the server\'s custom Discord bots, including the leveling system and this very website.',
      highlights: [
        'Built the XP and role-unlock bot from scratch',
        'Maintains this site\'s live Discord stats integration',
        'Open-sources reusable bot modules for the community',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'Website', url: 'https://example.com' },
      ],
    },
  },
  {
    id: 'sana-iyer',
    name: 'Sana Iyer',
    role: 'Events Lead',
    team: 'Events',
    avatar: '🎟️',
    accentColor: '#C9694F',
    location: 'Mumbai, IN',
    joined: '2022',
    bio: 'Plans trivia nights, movie nights, and the seasonal community game jam. Rarely misses a Friday.',
    portfolio: {
      summary:
        'Plans and runs the weekly events calendar — from casual game nights to larger seasonal community events.',
      highlights: [
        'Runs weekly trivia and movie nights',
        'Organised the server\'s first community game jam',
        'Coordinates with partner communities for joint events',
      ],
      links: [{ label: 'Twitter', url: 'https://twitter.com' }],
    },
  },
  {
    id: 'kabir-singh',
    name: 'Kabir Singh',
    role: 'Senior Moderator',
    team: 'Moderation',
    avatar: '🧭',
    accentColor: '#4E9B85',
    location: 'Delhi, IN',
    joined: '2023',
    bio: 'Covers the late-night shift and has a knack for de-escalating arguments before they become reports.',
    portfolio: {
      summary:
        'Covers late-night and weekend moderation, and mentors newer moderators joining the team.',
      highlights: [
        'Covers the server\'s highest-traffic overnight shift',
        'Mentored 6 new moderators in the last year',
        'Maintains the #introductions welcome flow',
      ],
      links: [],
    },
  },
  {
    id: 'meera-krishnan',
    name: 'Meera Krishnan',
    role: 'Community Designer',
    team: 'Design',
    avatar: '🎨',
    accentColor: '#C9A66B',
    location: 'Chennai, IN',
    joined: '2023',
    bio: 'Designs the server\'s emojis, event banners, and — most recently — this website\'s visual refresh.',
    portfolio: {
      summary:
        'Owns the visual identity of the community — emoji packs, event graphics, and the site you\'re looking at.',
      highlights: [
        'Designed the server\'s full custom emoji set',
        'Led the visual redesign of the community website',
        'Creates monthly event banners and role icons',
      ],
      links: [{ label: 'Portfolio', url: 'https://example.com' }],
    },
  },
]
