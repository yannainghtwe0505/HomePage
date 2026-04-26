import { useEffect, useState, type FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { CONTACT_EMAIL } from '../lib/constants'
import { useI18n } from '../i18n/useI18n'
import type { Messages } from '../i18n/messages'

type InquiryKey = keyof Messages['contact']['inquiryOptions']
type Errors = Partial<Record<'name' | 'email' | 'message' | 'inquiryType', string>>

function validate(
  name: string,
  email: string,
  message: string,
  inquiryType: string,
  inquiryOptions: Messages['contact']['inquiryOptions'],
  v: Messages['contact']['validation'],
): Errors {
  const e: Errors = {}
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (trimmedName.length < 2) e.name = v.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) e.email = v.email
  if (trimmedMessage.length < 10) e.message = v.message
  if (!(inquiryType in inquiryOptions)) e.inquiryType = v.inquiryType

  return e
}

export function ContactPage() {
  const { m } = useI18n()
  const p = m.contact.page
  const inquiryKeys = Object.keys(m.contact.inquiryOptions) as InquiryKey[]
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState<'' | InquiryKey>('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = m.meta.contact
  }, [m.meta.contact])

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const next = validate(name, email, message, inquiryType, m.contact.inquiryOptions, m.contact.validation)
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const typeLabel =
      inquiryType && inquiryType in m.contact.inquiryOptions
        ? m.contact.inquiryOptions[inquiryType]
        : inquiryType

    const lines = [
      `${m.contact.labels.inquiryType}: ${typeLabel}`,
      `${m.contact.labels.company}: ${company.trim() || '—'}`,
      `${m.contact.labels.phone}: ${phone.trim() || '—'}`,
      `${m.contact.labels.name}: ${name.trim()}`,
      `${m.contact.labels.email}: ${email.trim()}`,
      '',
      message.trim(),
    ]
    const subject = encodeURIComponent(m.contact.subject)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="bg-white pb-24 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <FadeIn>
            <p className="text-slate-600 dark:text-slate-400">
              {m.contact.preferEmail}{' '}
              <a className="font-semibold text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            {m.contact.demoNote ? (
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">{m.contact.demoNote}</p>
            ) : null}
            <p className="mt-5 text-sm font-semibold text-slate-800 dark:text-slate-200">{m.contact.processTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.contact.processAfter}</p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:p-8"
              noValidate
            >
              <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.contact.formIntro}</p>
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.company}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(ev) => setCompany(ev.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.phone}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-inquiry" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.inquiryType}
                  </label>
                  <select
                    id="contact-inquiry"
                    name="inquiryType"
                    value={inquiryType}
                    onChange={(ev) => setInquiryType(ev.target.value as '' | InquiryKey)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    aria-invalid={errors.inquiryType ? true : undefined}
                    aria-describedby={errors.inquiryType ? 'contact-inquiry-error' : undefined}
                  >
                    <option value="">{m.contact.labels.inquiryPlaceholder}</option>
                    {inquiryKeys.map((key) => (
                      <option key={key} value={key}>
                        {m.contact.inquiryOptions[key]}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType ? (
                    <p id="contact-inquiry-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.inquiryType}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {m.contact.labels.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                    className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message ? (
                    <p id="contact-message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-brand-gradient py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 sm:w-auto sm:px-10"
              >
                {m.contact.submit}
              </button>

              {submitted ? (
                <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-400" role="status">
                  {m.contact.success}
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
