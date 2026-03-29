import { NextResponse } from 'next/server'

// Replace GUILD_ID and BOT_TOKEN with your actual values
// Store BOT_TOKEN in .env.local as DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

export const revalidate = 60 // Cache for 60 seconds (ISR)

export async function GET() {
  // Return mock data if env vars are not configured
  if (!GUILD_ID || !BOT_TOKEN) {
    return NextResponse.json({
      memberCount: 12400,
      onlineCount: 1200,
      source: 'mock',
    })
  }

  try {
    const [guildRes, presenceRes] = await Promise.all([
      fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}`, {
        headers: { Authorization: `Bot ${BOT_TOKEN}` },
        next: { revalidate: 60 },
      }),
      fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}?with_counts=true`, {
        headers: { Authorization: `Bot ${BOT_TOKEN}` },
        next: { revalidate: 60 },
      }),
    ])

    if (!presenceRes.ok) {
      throw new Error(`Discord API error: ${presenceRes.status}`)
    }

    const guild = await presenceRes.json()

    return NextResponse.json({
      memberCount: guild.approximate_member_count ?? 0,
      onlineCount:  guild.approximate_presence_count ?? 0,
      source: 'live',
    })
  } catch (error) {
    console.error('Discord API fetch error:', error)
    // Graceful fallback
    return NextResponse.json(
      { memberCount: 12400, onlineCount: 1200, source: 'fallback' },
      { status: 200 }
    )
  }
}
