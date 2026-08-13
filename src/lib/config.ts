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
