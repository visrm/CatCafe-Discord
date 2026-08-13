import { NextResponse } from 'next/server'
import { getDiscordStats } from '@/lib/discord'

// Store DISCORD_BOT_TOKEN / DISCORD_GUILD_ID in .env.local — see .env.example
export const revalidate = 60 // Cache for 60 seconds (ISR)

export async function GET() {
  const stats = await getDiscordStats()
  return NextResponse.json(stats)
}
