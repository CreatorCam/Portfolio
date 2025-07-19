'use client'

import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgkpdkr' // <-- replace with YOUR endpoint

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function validate(v) {
    const e = {}
    if (!v.name.trim()) e.name = 'Name required'
    if (!v.email.trim()) e.email = 'Email required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Invalid email'
    if (!v.message.trim()) e.message = 'Message required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const eObj = validate(form)
    setErrors(eObj)
    if (Object.keys(eObj).length) return

    try {
      setStatus('sending')

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setErrors({})
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        console.error('Formspree error', data)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-2xl bg-[#1b2229] border border-accent-soft p-10 rounded-2xl shadow-lg space-y-7 mx-auto"
    >
      <div>
        <label className="block text-sm font-semibold mb-1">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={`w-full rounded-md bg-[#12181d] border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent transition
            ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#2b353d] focus:border-accent'}`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={`w-full rounded-md bg-[#12181d] border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent transition
            ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#2b353d] focus:border-accent'}`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Message</label>
        <textarea
          rows={7}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`w-full rounded-md bg-[#12181d] border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent resize-y transition
            ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#2b353d] focus:border-accent'}`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <button
          disabled={status === 'sending'}
          className="w-full px-6 py-3 rounded-md bg-accent text-black font-semibold hover:shadow-neon disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {status === 'sending'
            ? 'Sending…'
            : status === 'sent'
            ? 'Message Sent ✓'
            : status === 'error'
            ? 'Try Again'
            : 'Send Message'}
        </button>
      </div>

      {status === 'sent' && (
        <p className="text-center text-green-400 text-sm">
          Thanks! Your message was sent.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-400 text-sm">
          There was a problem. Please retry.
        </p>
      )}
    </form>
  )
}

