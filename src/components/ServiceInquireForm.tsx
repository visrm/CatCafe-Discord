'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ServiceCategory } from '@/lib/config'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ServiceInquireForm({
  services,
  defaultServiceId,
  defaultPlanId,
}: {
  services: ServiceCategory[]
  defaultServiceId: string
  defaultPlanId?: string
}) {
  const [serviceId, setServiceId] = useState(defaultServiceId)
  const [planId, setPlanId] = useState(defaultPlanId ?? services.find((s) => s.id === defaultServiceId)?.plans[0]?.id ?? '')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const service = services.find((s) => s.id === serviceId) ?? services[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      email: String(data.get('email') ?? ''),
      discordId: String(data.get('discordId') ?? ''),
      serviceId,
      planId,
      description: String(data.get('description') ?? ''),
      budget: String(data.get('budget') ?? ''),
      promoLink: String(data.get('promoLink') ?? ''),
      wantsCustomCopy: data.get('wantsCustomCopy') === 'on',
      preferredTiming: String(data.get('preferredTiming') ?? ''),
      serverInvite: String(data.get('serverInvite') ?? ''),
      eventDateTime: String(data.get('eventDateTime') ?? ''),
      agreedToRules: data.get('agreedToRules') === 'on',
      // Honeypot — left blank by real users, hidden via CSS below
      company: String(data.get('company') ?? ''),
    }

    try {
      const res = await fetch('/api/services/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (!res.ok) {
        setErrorMessage(result.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMessage('Something went wrong. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="m-sticker p-10 text-center" style={{ background: 'var(--m-paper)' }}>
        <div className="text-4xl mb-4">✅</div>
        <h2 className="font-display font-bold text-2xl text-primary mb-3">Inquiry sent</h2>
        <p className="text-secondary text-sm leading-relaxed max-w-sm mx-auto mb-6">
          Thanks — our team has received your request and will reach out at the email
          or Discord ID you provided, usually within 24 hours.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-[2.5px] text-primary text-sm font-semibold transition-colors"
          style={{ borderColor: 'var(--m-outline)', background: 'var(--m-paper-2)' }}
        >
          ← Back to services
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl p-7 sm:p-10 border-[2.5px]"
      style={{ background: 'var(--m-paper)', borderColor: 'var(--m-outline)' }}
    >
      {/* Honeypot field — hidden from real users, bots tend to fill every field */}
      <div className="absolute w-0 h-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Contact email <span style={{ color: 'var(--m-coral)' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
            style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
          />
        </div>
        <div>
          <label htmlFor="discordId" className="block text-sm font-medium text-primary mb-2">
            Discord user ID <span style={{ color: 'var(--m-coral)' }}>*</span>
          </label>
          <input
            id="discordId"
            name="discordId"
            type="text"
            required
            placeholder="e.g. yourname or 123456789012345678"
            className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
            style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="serviceId" className="block text-sm font-medium text-primary mb-2">
            Service category <span style={{ color: 'var(--m-coral)' }}>*</span>
          </label>
          <select
            id="serviceId"
            name="serviceId"
            value={serviceId}
            onChange={(e) => {
              const nextService = services.find((s) => s.id === e.target.value)
              setServiceId(e.target.value)
              setPlanId(nextService?.plans[0]?.id ?? '')
            }}
            className="w-full px-4 py-3 rounded-xl text-primary text-sm focus:outline-none transition-colors border-2"
            style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="planId" className="block text-sm font-medium text-primary mb-2">
            Plan / tier
          </label>
          <select
            id="planId"
            name="planId"
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-primary text-sm focus:outline-none transition-colors border-2"
            style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
          >
            {service?.plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.price} {p.unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conditional fields per service */}
      {service?.id === 'member-advertising' && (
        <div className="mb-5 flex flex-col gap-5">
          <div>
            <label htmlFor="promoLink" className="block text-sm font-medium text-primary mb-2">
              Link / copy to promote
            </label>
            <input
              id="promoLink"
              name="promoLink"
              type="text"
              placeholder="Product link, or paste your ad copy"
              className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
              style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="preferredTiming" className="block text-sm font-medium text-primary mb-2">
                Preferred date / time
              </label>
              <input
                id="preferredTiming"
                name="preferredTiming"
                type="text"
                placeholder="e.g. Sat evening IST"
                className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
                style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
              />
            </div>
            <label
              htmlFor="wantsCustomCopy"
              className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer mt-auto border-2"
              style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
            >
              <input id="wantsCustomCopy" name="wantsCustomCopy" type="checkbox" className="w-4 h-4" style={{ accentColor: 'var(--m-coral)' }} />
              <span className="text-sm text-primary">Add staff-written copy (extra charge)</span>
            </label>
          </div>
        </div>
      )}

      {service?.id === 'server-promotion' && (
        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="serverInvite" className="block text-sm font-medium text-primary mb-2">
              Your Discord server invite link
            </label>
            <input
              id="serverInvite"
              name="serverInvite"
              type="text"
              placeholder="discord.gg/yourserver"
              className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
              style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
            />
          </div>
          <div>
            <label htmlFor="eventDateTime" className="block text-sm font-medium text-primary mb-2">
              Event date & time
            </label>
            <input
              id="eventDateTime"
              name="eventDateTime"
              type="text"
              placeholder="e.g. 20 Sept, 8pm IST"
              className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
              style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
            />
          </div>
        </div>
      )}

      <div className="mb-5">
        <label htmlFor="description" className="block text-sm font-medium text-primary mb-2">
          Text / description <span style={{ color: 'var(--m-coral)' }}>*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          placeholder="Tell us what you'd like to promote and any specific requirements"
          className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors resize-none border-2"
          style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
          Budget constraints <span style={{ color: 'var(--m-coral)' }}>*</span>
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          required
          placeholder="e.g. up to ₹3,000"
          className="w-full px-4 py-3 rounded-xl text-primary text-sm placeholder:text-muted focus:outline-none transition-colors border-2"
          style={{ background: 'var(--m-paper-2)', borderColor: 'var(--m-outline)' }}
        />
      </div>

      <label htmlFor="agreedToRules" className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          id="agreedToRules"
          name="agreedToRules"
          type="checkbox"
          required
          className="w-4 h-4 mt-0.5"
          style={{ accentColor: 'var(--m-coral)' }}
        />
        <span className="text-sm text-secondary">
          I agree that submitted content is subject to staff review and the{' '}
          <Link href="/rules" className="hover:underline text-[var(--m-teal-dark)] dark:text-[var(--m-teal)]">
            community rules
          </Link>
          . <span style={{ color: 'var(--m-coral)' }}>*</span>
        </span>
      </label>

      {status === 'error' && (
        <div
          className="mb-6 px-4 py-3 rounded-xl text-sm border-2"
          style={{ background: 'color-mix(in srgb, var(--m-coral) 12%, var(--m-paper))', borderColor: 'var(--m-coral)', color: 'var(--m-coral-dark)' }}
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="m-sticker w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'var(--m-coral)', color: 'var(--m-on-color-ink)' }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit inquiry →'}
      </button>
    </form>
  )
}
