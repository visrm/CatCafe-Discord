export const siteConfig = {
  name: 'CatCafe India',
  tagline: '58,000 people. One Discord. Always something happening.',
  description:
    'No follower count to build, no profile to perform. Just a Discord server where someone is always online to talk about whatever you\'re into. Drop in for five minutes — see if you stay for five hours.',
  discordInvite: 'https://discord.gg/hk639u8FDg',
  memberCount: '58,000+',
  onlineCount: '4,500+',
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
    id: 'keisam',
    name: 'Keisam',
    role: 'Founder',
    team: 'Leadership',
    avatar: "🦊",
    accentColor: '#C94C4C',
    location: 'IND',
    joined: '2021',
    bio: 'The visionary behind the community, Ning turned a six-person private server into a public Indian Discord community after seeing the lack of a wholesome space for Indians on Discord. Still active and always coming up with the next idea, they continue to push the server toward bigger goals while giving its current leadership room to carry the vision forward.',
    portfolio: {
      summary:
        'Sets the long-term vision and direction of the community, driving its growth, new initiatives, and efforts to build a sustainable future for the server.',
      highlights: [
        'Turned a six-person private server into a 54,000+ member community',
        'Founded the community around the idea of creating a wholesome Indian Discord space',
        'Continues to drive expansion, new goals, and community monetization efforts',
      ],
      links: [],
    },
  },

  {
    id: 'pakomii',
    name: 'Pakomii',
    role: 'Server Owner',
    avatar: "🐧",
    team: 'Leadership',
    accentColor: '#A83246',
    location: 'IND',
    joined: '2022',
    bio: 'A reserved but steady presence, Pakomii gradually became the person trusted to keep the server moving whenever Ning was away. She turned that trust into a lasting role at the heart of the community, helping transform Ning’s ideas into reality and keeping the staff together through the inevitable conflicts, dramas, and mishaps.',
    portfolio: {
      summary:
        'Turns the server’s long-term vision into day-to-day execution, overseeing administrators, guiding staff, handling serious issues, and helping keep the community moving forward.',
      highlights: [
        'Became a central part of the server’s leadership after earning Ning’s trust',
        'Successfully handled staff conflicts, server dramas, and difficult situations',
        'Leads the server’s promotional efforts and works with Ning on future plans',
      ],
      links: [],
    },
  },

  {
    id: 'vince',
    name: 'Vince',
    role: 'Administrator',
    team: 'Management',
    avatar: "🐼",
    accentColor: '#B83B4B',
    location: 'IND',
    joined: '2021',
    bio: 'One of the server’s longest-standing members, Vince has been around for practically every era of the community. Active, laid-back, and deeply familiar with how the server works, he has become the veteran administrator people turn to when something goes wrong, a difficult member issue needs handling, or a decision could use some historical context.',
    portfolio: {
      summary:
        'An all-round administrator who connects members, staff, and leadership through years of experience with the community. He handles member issues, guides staff, provides technical support, and serves as a trusted aide to Pakomii.',
      highlights: [
        'Trained multiple generations of staff',
        'Resolved countless member, staff, and server issues',
        'Hosted and contributed to numerous community events throughout his time in the server',
      ],
      links: [],
    },
  },

//   {
//     id: 'aizen',
//     name: 'Aizen',
//     role: 'Senior Support Staff',
//     team: 'Management',
//     avatar: "🐨",
//     accentColor: '#D14A4A',
//     location: 'IND',
//     joined: '',
//     bio: 'Smart, attentive, and exceptionally quick on the support front, Aizen has become one of the server’s most capable hands when members need help. Working closely with Vince, he can handle a large volume of tickets and complicated issues without losing sight of the people behind them.',
//     portfolio: {
//       summary:
//         'A high-performing senior support member who handles member issues, moderation, reports, and complicated cases while also helping guide and support other staff.',
//       highlights: [
//         'Handles large volumes of member tickets swiftly and attentively',
//         'Acts as a close aide to Vince in member and staff matters',
//         'Helps train and support other staff while handling difficult member issues',
//       ],
//       links: [],
//     },
//   },

  {
    id: 'gabii',
    name: 'Gabii',
    role: 'Senior Support Staff',
    team: 'Management',
    avatar: "🐯",
    accentColor: '#B93D50',
    location: 'IND',
    joined: '',
    bio: 'A supportive presence within the server’s support team, Gabii helps members navigate their problems while providing a familiar point of contact for the community’s female members. Her work combines everyday member support with the patience needed to keep difficult situations from becoming bigger ones.',
    portfolio: {
      summary:
        'Supports members through tickets, reports, moderation issues, and disputes while helping maintain a welcoming support environment for the community.',
      highlights: [
        'Handles member concerns, reports, and support issues',
        'Helps resolve disputes and complicated member situations',
        'Provides a supportive point of contact for female members of the community',
      ],
      links: [],
    },
  },

  {
    id: 'prii',
    name: 'Prii',
    role: 'Senior Support Staff',
    team: 'Management',
    avatar: "🐰",
    accentColor: '#C44255',
    location: 'IND',
    joined: '',
    bio: 'A dependable member of the server’s senior support team, Prii helps members through their everyday issues while contributing to the moderation and support operation behind the scenes. She is also part of the staff members who provide a familiar and supportive presence for female members of the community.',
    portfolio: {
      summary:
        'Works across member support, moderation, reports, and dispute resolution while helping maintain a supportive environment for the community.',
      highlights: [
        'Handles member questions, support tickets, and reports',
        'Helps resolve member disputes and moderation issues',
        'Supports female members as part of the server’s senior support team',
      ],
      links: [],
    },
  },

  {
    id: 'bibo',
    name: 'Bibo',
    role: 'Senior Support Staff',
    team: 'Management',
    avatar: "🦉",
    accentColor: '#A93649',
    location: 'IND',
    joined: '',
    bio: 'A reliable member of the senior support team, Bibo works directly with members to solve problems, handle reports, and keep everyday issues from becoming bigger ones. She also provides support to female members of the community and contributes to the wider staff operation.',
    portfolio: {
      summary:
        'Handles member support and moderation while helping resolve complicated issues, support disputes, and reports within the server.',
      highlights: [
        'Handles member concerns and support tickets',
        'Helps resolve reports, disputes, and moderation issues',
        'Provides a supportive point of contact for female members',
      ],
      links: [],
    },
  },

  {
    id: 'luffy',
    name: 'Luffy',
    role: 'Lead Staff',
    team: 'Management',
    avatar: "🐺",
    accentColor: '#C63F4F',
    location: 'IND',
    joined: '',
    bio: 'Vocal, opinionated, and never shy about bringing an idea to the table, Luffy is one of the newer Lead Staff members helping turn community ideas into actual activities. With a strong voice of his own and a talent for karaoke, he has made the server’s vocal activities one of his specialties.',
    portfolio: {
      summary:
        'Leads activity staff with a focus on karaoke and community engagement, helping turn ideas into events and overseeing the staff responsible for keeping them running.',
      highlights: [
        'Leads the server’s karaoke activity staff',
        'Organised and oversaw several successful karaoke night events',
        'Helped increase member participation and vocal engagement through karaoke activities',
      ],
      links: [],
    },
  },

  {
    id: 'zohaib',
    name: 'Zohaib',
    role: 'Lead Staff',
    team: 'Management',
    avatar: "🐸",
    accentColor: '#D04747',
    location: 'IND',
    joined: '',
    bio: 'Vocal, opinionated, and highly involved, Zohaibs is the kind of Lead Staff member who is rarely short of an idea. His general-purpose approach, strong gaming focus, and ability to bring members into the community have helped turn passive members into people who actually invest their time in the server.',
    portfolio: {
      summary:
        'Helps lead activity staff across the server, combining a broad operational role with a particular focus on gaming and community engagement.',
      highlights: [
        'Leads activity staff and helps higher staff implement new ideas',
        'Has encouraged members to invest more time and energy into the community',
        'Helped increase overall community engagement while maintaining activity quality',
      ],
      links: [],
    },
  },

//   {
//     id: 'airo',
//     name: 'Airo',
//     role: 'Lead Staff',
//     team: 'Management',
//     avatar: "🐵",
//     accentColor: '#9F3044',
//     location: 'IND',
//     joined: '',
//     bio: 'More reserved than his fellow Lead Staff, Airo lets his consistency do most of the talking. Focused almost entirely on gaming, he has steadily built a reputation for actually making gaming activities happen and encouraging members to spend more time playing together.',
//     portfolio: {
//       summary:
//         'A gaming-focused Lead Staff member who guides gaming activity staff and consistently turns ideas into organised events for the community.',
//       highlights: [
//         'Consistently conducted multiple gaming events',
//         'Helps guide gaming activity staff under the server’s activity administration',
//         'Encouraged a stronger gaming-oriented environment within the community',
//       ],
//       links: [],
//     },
//   },

  {
    id: 'manish',
    name: 'Manish',
    role: 'Assistant Staff',
    team: 'Events',
    avatar: "🦄",
    accentColor: '#C43E4E',
    location: 'IND',
    joined: '',
    bio: 'A veteran and highly vocal member of the community, Manish brings the kind of energy that makes an activity feel alive. Between streaming, gaming, talking, and the occasional skit, he has proven himself as both a performer and an entertainer in front of members and fellow staff alike.',
    portfolio: {
      summary:
        'An experienced Assistant Staff who directly hosts and participates in community activities, using his personality and performance skills to bring members into the action.',
      highlights: [
        'Established himself as a veteran performer within the community',
        'Uses gaming, streaming, conversations, and skits to entertain members',
        'Directly engages with members to increase participation and activity',
      ],
      links: [],
    },
  },

  {
    id: 'akii',
    name: 'Akii',
    role: 'Assistant Staff',
    team: 'Events',
    avatar: "🦄",
    accentColor: '#B83A4B',
    location: 'IND',
    joined: '',
    bio: 'An Assistant Staff who helps bring the server’s activities directly to its members. A veteran and highly vocal member of the community, Akii brings the calm energy, pacing through conversations, and other activities that keeps members engaged and participating.',
    portfolio: {
      summary:
        'Works directly with members through the server’s activities and events.',
      highlights: [
        'Established himself as a veteran performer within the community',
        'Uses events and conversations to entertain members',
        'Directly engages with members to increase participation and activity',
      ],
      links: [],
    },
  },

  {
    id: 'nashedi',
    name: 'Nashedi',
    role: 'Assistant Staff',
    team: 'Events',
    avatar: "🦄",
    accentColor: '#CF4850',
    location: 'IND',
    joined: '',
    bio: 'A newer face among Assistant Staffs, Nashedi has already shown that he can hold his own in front of a crowd. Like the veteran entertainers around him, he brings games, conversation, and personality into activities to keep members engaged.',
    portfolio: {
      summary:
        'A relatively new but proven Assistant Staff who directly hosts and participates in activities, helping turn events into engaging experiences for members.',
      highlights: [
        'Established himself as a performer despite being relatively new to the community',
        'Uses gaming and conversation to engage members during activities',
        'Works directly with the community to increase participation and server activity',
      ],
      links: [],
    },
  },

    {
    id: 'sylus',
    name: 'Sylus',
    role: 'Assistant Staff',
    team: 'Events',
    avatar: "🦄",
    accentColor: '#CF4850',
    location: 'IND',
    joined: '',
    bio: 'Another new face among the server’s performers, Sylus is competent and enthusiastic, spreading his influence within the server through games, karaokes and engaging conversations.',
    portfolio: {
      summary:
        'A relatively new but proven Assistant Staff who directly hosts and participates in activities, helping turn events into engaging experiences for members.',
      highlights: [
        'Established himself as a performer despite being relatively new to the community',
        'Uses gaming, karaokes and conversation to engage members during activities',
        'Works directly with the community to increase participation and server activity',
      ],
      links: [],
    },
  },
]

/**
 * Services directory — single source of truth for /services pages.
 *
 * Edit the entries below to change offerings — every page that renders
 * services reads from this array, so nothing else needs to change.
 */
export type ServicePlan = {
  /** URL-safe id, used as the plan value submitted on the inquiry form */
  id: string
  name: string
  price: string
  /** Short unit label shown next to the price, e.g. "per 12 hours" */
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
    id: 'product-advertising',
    name: 'Product Advertising',
    tagline: 'Put your product or link in front of 58,000+ engaged members.',
    icon: '📣',
    accentColor: '#C9694F',
    summary:
      'Choose a 12-hour, 24-hour or 30-day promo plan with a role-based or @everyone ping — using your own copy or ours. A giveaway is optional.',
    howItWorks: [
      'Pick the 12h, 24h or 30d promo plan from the plans below',
      'Submit the inquiry form with your product link, copy, and preferred timing',
      'Our team reviews the copy and confirms availability, usually within 24 hours',
      'Your ad goes live in the agreed channel at the scheduled slot',
    ],
    notes: [
      'All ad copy is subject to staff approval before it goes live',
      'No NSFW content, competing communities, or high-risk financial products',
      'Listed prices are starting prices — the final charge may go up based on any additional requirements',
      'A giveaway is optional for advertisements; any additional giveaway cost is charged to the client',
      'Want us to write the copy instead? Add staff copywriting for a small extra charge',
    ],
    plans: [
      {
        id: '12h',
        name: '12h Promo Plan',
        price: 'From ₹1,499',
        unit: 'per 12 hours',
        description: 'A 12-hour ad placement with a role-based or @everyone ping.',
        features: [
          '12 hour display',
          'Role-based or @everyone ping',
          'Advertiser-provided copy',
          'Giveaway optional (extra cost billed to client)',
        ],
      },
      {
        id: '24h',
        name: '24h Promo Plan',
        price: 'From ₹1,899',
        unit: 'per 24 hours',
        description: 'A full-day ad placement with a role-based or @everyone ping.',
        features: [
          '24 hour display',
          'Role-based or @everyone ping',
          'Advertiser-provided copy',
          'Giveaway optional (extra cost billed to client)',
        ],
        popular: true,
      },
      {
        id: '30d',
        name: '30d Promo Plan',
        price: '₹3,999',
        unit: 'for 30 days',
        description:
          'A month-long presence with your own dedicated channel, plus a giveaway to drive attention.',
        features: [
          'Valid for 30 days',
          'Short ad copy provided by you, posted in a separate channel',
          'Channel named after your product/service',
          'Separate giveaway in the giveaway channel',
        ],
      },
    ],
    addOns: [
      {
        id: 'custom-copy',
        name: 'Staff-Written Copy',
        price: '+₹100',
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
      'Promote your Discord server or event to our members with a 12-hour, 24-hour or 30-day promo plan, backed by a giveaway that drives real signups.',
    howItWorks: [
      'Pick the 12h, 24h or 30d promo plan — a giveaway is included with every plan',
      'Submit your server invite and event details in the inquiry form',
      'We schedule the promo with a ping and the giveaway alongside it',
      'Winners are drawn and announced live in the community',
    ],
    notes: [
      'The giveaway is mandatory and included with every plan; the standard reward is ₹500 via UPI',
      'Listed prices are starting prices — the final charge may go up based on any additional requirements',
      'Promoted servers must comply with Discord ToS — no ban-evasion or raid servers',
      'Event promotions require a public invite link and a confirmed date/time',
    ],
    plans: [
      {
        id: '12h',
        name: '12h Promo Plan',
        price: 'From ₹1,499',
        unit: 'per 12 hours',
        description: 'A 12-hour server or event promo with a ping and a giveaway.',
        features: [
          '12 hour display',
          'Role-based or @everyone ping',
          'Giveaway included',
        ],
      },
      {
        id: '24h',
        name: '24h Promo Plan',
        price: 'From ₹1,899',
        unit: 'per 24 hours',
        description: 'A full-day server or event promo with a ping and a giveaway.',
        features: [
          '24 hour display',
          'Role-based or @everyone ping',
          'Giveaway included',
        ],
        popular: true,
      },
      {
        id: '30d',
        name: '30d Promo Plan',
        price: '₹3,999',
        unit: 'for 30 days',
        description:
          'A month-long presence with your own dedicated channel, plus a giveaway to drive signups.',
        features: [
          'Valid for 30 days',
          'Short promo copy provided by you, posted in a separate channel',
          'Channel named after your server name',
          'Separate giveaway in the giveaway channel with a simple title & CTA',
        ],
      },
    ],
  },
]
