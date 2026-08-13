import { NextRequest, NextResponse } from 'next/server'
import { servicesDirectory } from '@/lib/config'

// Store DISCORD_INQUIRY_WEBHOOK_URL in .env.local — see .env.example.
// This route is the only place the webhook URL is ever used; it never
// reaches the browser.
const WEBHOOK_URL = process.env.DISCORD_INQUIRY_WEBHOOK_URL

type InquiryPayload = {
  email: string
  discordId: string
  serviceId: string
  planId?: string
  description: string
  budget: string
  // Ad campaign specific
  promoLink?: string
  wantsCustomCopy?: boolean
  preferredTiming?: string
  // Server promotion specific
  serverInvite?: string
  eventDateTime?: string
  agreedToRules: boolean
  // Honeypot — real users never fill this in
  company?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  let body: InquiryPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Honeypot check — silently pretend success so bots don't learn anything
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  // Server-side validation — never trust the client
  if (!body.email || !isValidEmail(body.email)) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
  }
  if (!body.discordId || body.discordId.trim().length < 2) {
    return NextResponse.json({ error: 'Discord User ID is required' }, { status: 400 })
  }
  if (!body.description || body.description.trim().length < 10) {
    return NextResponse.json({ error: 'Please add a bit more detail to your description' }, { status: 400 })
  }
  if (!body.budget || body.budget.trim().length === 0) {
    return NextResponse.json({ error: 'Budget is required' }, { status: 400 })
  }
  if (!body.agreedToRules) {
    return NextResponse.json({ error: 'You must agree to the service terms' }, { status: 400 })
  }

  const service = servicesDirectory.find((s) => s.id === body.serviceId)
  if (!service) {
    return NextResponse.json({ error: 'Unknown service category' }, { status: 400 })
  }
  const plan = service.plans.find((p) => p.id === body.planId)

  if (!WEBHOOK_URL) {
    console.error('DISCORD_INQUIRY_WEBHOOK_URL is not configured')
    return NextResponse.json(
      { error: 'Inquiries are temporarily unavailable. Please try again later.' },
      { status: 503 }
    )
  }

  const fields: { name: string; value: string; inline?: boolean }[] = [
    { name: 'Service', value: service.name, inline: true },
    { name: 'Plan', value: plan ? `${plan.name} (${plan.price} ${plan.unit})` : 'Not specified', inline: true },
    { name: 'Budget', value: body.budget, inline: true },
    { name: 'Contact Email', value: body.email, inline: true },
    { name: 'Discord User ID', value: body.discordId, inline: true },
  ]

  if (service.id === 'member-advertising') {
    if (body.promoLink) fields.push({ name: 'Link / Copy to Promote', value: body.promoLink })
    fields.push({ name: 'Wants Staff-Written Copy', value: body.wantsCustomCopy ? 'Yes' : 'No', inline: true })
    if (body.preferredTiming) fields.push({ name: 'Preferred Timing', value: body.preferredTiming, inline: true })
  }

  if (service.id === 'server-promotion') {
    if (body.serverInvite) fields.push({ name: 'Server Invite Link', value: body.serverInvite })
    if (body.eventDateTime) fields.push({ name: 'Event Date & Time', value: body.eventDateTime, inline: true })
  }

  fields.push({ name: 'Description', value: body.description.slice(0, 1024) })

  try {
    const discordResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: `New Inquiry — ${service.name}`,
            color: parseInt(service.accentColor.replace('#', ''), 16),
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    })

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook responded with ${discordResponse.status}`)
    }
  } catch (error) {
    console.error('Failed to post inquiry to Discord webhook:', error)
    return NextResponse.json(
      { error: 'Something went wrong submitting your inquiry. Please try again.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
