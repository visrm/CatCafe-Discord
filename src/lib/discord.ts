export type DiscordStats = {
  memberCount: number
  onlineCount: number
  source: 'live' | 'mock' | 'fallback'
}

const GUILD_ID = process.env.DISCORD_GUILD_ID
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

/**
 * Fetches live member / online counts from the Discord API.
 * Falls back to sample values when credentials aren't configured,
 * or when the Discord API request fails for any reason.
 */
export async function getDiscordStats(): Promise<DiscordStats> {
  if (!GUILD_ID || !BOT_TOKEN) {
    return { memberCount: 53400, onlineCount: 2200, source: 'mock' }
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}?with_counts=true`,
      {
        headers: { Authorization: `Bot ${BOT_TOKEN}` },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`)
    }

    const guild = await response.json()

    return {
      memberCount: guild.approximate_member_count ?? 0,
      onlineCount: guild.approximate_presence_count ?? 0,
      source: 'live',
    }
  } catch (error) {
    console.error('Discord API fetch error:', error)
    return { memberCount: 53400, onlineCount: 2200, source: 'fallback' }
  }
}
