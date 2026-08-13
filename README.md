# ✦ CatCafe India — Discord Community Site

A premium, editorial Next.js 14 site for a Discord community. Multi-page, dark/light theming, live server stats, and a scalable staff directory. Built for SEO, scalability, and easy customisation.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Discord Bot Token and Guild ID

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts (Balthazar + Inter), theme provider
│   ├── page.tsx                # Condensed home page — hero, live stats strip, explore grid
│   ├── globals.css             # Design tokens (dark/light), premium background treatment
│   ├── not-found.tsx           # Custom 404 page
│   ├── sitemap.ts              # Auto-generated sitemap.xml (includes staff routes)
│   ├── robots.ts               # robots.txt
│   ├── about/page.tsx          # About page
│   ├── features/page.tsx       # Features page
│   ├── stats/page.tsx          # Full server stats page (live data)
│   ├── members/page.tsx        # Member testimonials page
│   ├── faq/page.tsx            # FAQ page
│   ├── rules/page.tsx          # Community Rules page
│   ├── staff/page.tsx          # Staff directory, grouped by team
│   ├── staff/[id]/page.tsx     # Individual staff portfolio page (breadcrumbed)
│   ├── services/page.tsx       # Services index — medium cards per service
│   ├── services/[id]/page.tsx  # Plans for one service + shared CTA
│   ├── services/[id]/inquire/page.tsx  # Inquiry form for that service
│   ├── privacy/page.tsx        # Privacy Policy page
│   ├── terms/page.tsx          # Terms of Service page
│   └── api/
│       ├── discord-stats/
│       │   └── route.ts        # Live member count from Discord API
│       └── services/
│           └── inquire/
│               └── route.ts    # Posts inquiry form submissions to a Discord webhook
├── components/
│   ├── Navbar.tsx              # Sticky nav, mobile menu, theme toggle
│   ├── ThemeProvider.tsx       # next-themes wrapper (class-based dark/light)
│   ├── ThemeToggle.tsx         # Dark/light toggle button
│   ├── Breadcrumbs.tsx         # Shared breadcrumb trail
│   ├── Hero.tsx                # Hero section with CTA
│   ├── About.tsx               # About / community pillars
│   ├── Features.tsx            # Feature highlights grid
│   ├── Stats.tsx                # Stat counters — fetches /api/discord-stats client-side
│   ├── Testimonials.tsx        # Member testimonials
│   ├── ServiceInquireForm.tsx  # Client form used by /services/[id]/inquire
│   ├── JoinCTA.tsx             # Bottom CTA banner
│   ├── FAQ.tsx                 # Accordion FAQ
│   └── Footer.tsx              # Footer with links
└── lib/
    ├── config.ts               # ⭐ Single source of truth for branding + staff + services
    └── discord.ts              # Shared Discord API fetch logic (used by the API route)
```

---

## ⚙️ Configuration

All branding, links, and copy live in **one file**:

```ts
// src/lib/config.ts
export const siteConfig = {
  name: 'CatCafe India',
  tagline: '...',
  description: '...',
  discordInvite: 'https://discord.gg/your-invite-code', // 🔁 Change this!
  memberCount: '53,000+',
  onlineCount: '2,500+',
  channels: '50+',
  email: '',
  siteUrl: 'https://cat-cafe-discord.vercel.app',
}
```

### Key things to update before launch:
- [ ] `discordInvite` — your actual Discord server invite link
- [ ] `name`, `tagline`, `description` — your community's identity
- [ ] `memberCount`, `onlineCount`, `channels` — real stats (or use the live API)
- [ ] `siteUrl`, `email` — your real domain and contact email
- [ ] `DISCORD_BOT_TOKEN` + `DISCORD_GUILD_ID` in `.env.local` for live stats
- [ ] `DISCORD_INQUIRY_WEBHOOK_URL` in `.env.local` for the services inquiry form
- [ ] `staffDirectory` — replace the sample staff with your real team
- [ ] `servicesDirectory` — replace sample plans/pricing with your real offerings
- [ ] `/public/og-image.png` — 1200×630px Open Graph image
- [ ] `/public/favicon.ico` — your favicon

---

## 🔌 Live Discord Stats

The `/api/discord-stats` route (backed by `src/lib/discord.ts`) fetches real member and online counts from the Discord API, refreshed every 60 seconds. The `Stats` component fetches this route client-side and animates the counters once the data loads — used both in the compact homepage strip and the full `/stats` page.

**Setup:**
1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Create a Bot and copy the token → `DISCORD_BOT_TOKEN`
3. Enable **Server Members Intent** in the Bot settings
4. Invite the bot to your server with `guilds` scope
5. Copy your Server ID (right-click server → Copy ID) → `DISCORD_GUILD_ID`

If not configured, the API gracefully falls back to sample values.

---

## 🎨 Theming

The site ships with a full **dark / light** theme (toggle in the navbar, powered by `next-themes`), a premium background treatment (soft radial glows + fine film grain, no more cartoon blobs), and an editorial type pairing: **Balthazar** for display headings, **Inter** for body text — loaded via `next/font/google` in `layout.tsx`.

Design tokens live as CSS variables in `globals.css` (one block for `.dark`, one for `.light`) and are exposed as semantic Tailwind classes in `tailwind.config.js`:

| Token           | Usage                              |
|-----------------|-------------------------------------|
| `bg-page`       | Page background                     |
| `bg-surface`    | Card / panel background             |
| `bg-surface-2`  | Alternating section background      |
| `text-primary`  | Primary text                        |
| `text-muted`    | Secondary / label text              |
| `border-subtle` | Hairline borders                    |
| `brand-coral` / `brand-yellow` / `brand-mint` / `brand-sky` | Accent colors, used sparingly |

Because everything reads from these tokens, adding a new theme or retuning the palette is a `globals.css` change — no component edits needed.

---

## 👥 Staff & Portfolio Pages

`/staff` lists the team grouped by department, and `/staff/[id]` renders an individual breadcrumbed portfolio page for each person. Both pages read entirely from `staffDirectory` in `src/lib/config.ts` — to add, remove, or edit a staff member, edit that array; the routes (including static params for pre-rendering) update automatically. Swap the sample entries for a CMS or database call later without touching the page components, as long as the shape matches `StaffMember`.

---

## 💼 Services & Inquiry Form

`/services` lists each offering as a medium card ("View Plans"), `/services/[id]` shows that service's plans/pricing behind one shared CTA ("Submit an Inquiry"), and `/services/[id]/inquire` renders the request form. All copy, plans, add-ons, and pricing come from `servicesDirectory` in `src/lib/config.ts` — add a service there and its pages appear automatically, same pattern as staff.

On submit, the form `POST`s to `/api/services/inquire` (never directly to Discord), which validates the payload server-side and posts a formatted embed — service, plan, budget, contact email, Discord ID, and category-specific details (promo copy / server invite, etc.) — to a single Discord webhook. A hidden honeypot field silently discards obvious bot submissions.

**Setup:**
1. In your Discord server, go to a channel → **Edit Channel → Integrations → Webhooks → New Webhook**
2. Copy the webhook URL → `DISCORD_INQUIRY_WEBHOOK_URL` in `.env.local`
3. All inquiries (both services) currently post to this one channel/webhook — split by service later by adding a second webhook URL and branching in `src/app/api/services/inquire/route.ts`

If the webhook isn't configured, the API returns a clear error instead of failing silently.

---

## 📄 Pages

| Route             | Description                          |
|--------------------|---------------------------------------|
| `/`                | Condensed landing page                |
| `/about`           | About / community pillars             |
| `/features`        | Feature highlights                    |
| `/stats`           | Full live server stats                |
| `/members`         | Member testimonials                   |
| `/staff`           | Staff directory                       |
| `/staff/[id]`      | Individual staff portfolio            |
| `/services`        | Services index                        |
| `/services/[id]`   | Plans for one service + inquiry CTA   |
| `/services/[id]/inquire` | Inquiry form for that service   |
| `/faq`             | Frequently asked questions            |
| `/rules`           | Community Rules                       |
| `/privacy`         | Privacy Policy                        |
| `/terms`           | Terms of Service                      |
| `/sitemap.xml`     | Auto-generated by Next.js             |
| `/robots.txt`      | Auto-generated by Next.js             |

---

## 🚢 Deployment (Vercel — Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables on Vercel dashboard or:
vercel env add DISCORD_BOT_TOKEN
vercel env add DISCORD_GUILD_ID
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

---

## 📦 Tech Stack

| Tool              | Purpose                              |
|-------------------|--------------------------------------|
| Next.js 14        | Framework (App Router, SSR/SSG)      |
| TypeScript        | Type safety                          |
| Tailwind CSS      | Utility-first styling, token-based theming |
| next-themes       | Dark / light mode                    |
| Framer Motion     | Animations (ready to use)            |
| next-seo          | Extended SEO metadata helpers        |
| Discord REST API  | Live member/online count             |
| Vercel            | Hosting + Edge CDN                   |

---

## 🔮 Extending the Site

Ideas for future additions:
- **Blog / Announcements** — Add `src/app/blog` with MDX support via `next-mdx-remote`
- **Events page** — Pull from a CMS (Sanity, Contentful) or static MDX files
- **Real staff data source** — Swap `staffDirectory` for a CMS or database query
- **Localisation** — Add `next-intl` for multiple languages
- **CMS integration** — Replace static copy with Sanity Studio

---

## 📝 License

MIT — use freely, credit appreciated.
