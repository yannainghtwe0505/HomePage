import { useEffect, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import type { JobDetail } from '../../data/careers/types'
import { ENGAGE_RECRUIT_URL, CONTACT_EMAIL } from '../../lib/constants'
import type { Messages } from '../../i18n/messages'

type Props = {
  job: JobDetail
  locale: 'ja' | 'en'
  labels: Messages['recruit']['careers']
  onClose: () => void
}

export function JobDetailModal({ job, locale, labels, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (typeof document === 'undefined') return null

  function submit(ev: FormEvent) {
    ev.preventDefault()
    const e: { name?: string; email?: string } = {}
    if (name.trim().length < 2) e.name = labels.validationName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = labels.validationEmail
    setErrors(e)
    if (Object.keys(e).length > 0) return

    const title = locale === 'ja' ? job.titleJa : job.title
    const subject = encodeURIComponent(`Application: ${title}`)
    const body = encodeURIComponent(
      `Job ID: ${job.id}\nName: ${name.trim()}\nEmail: ${email.trim()}\n\n${note.trim()}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center" role="presentation">
      <button
        type="button"
        aria-label={labels.modalClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative z-[101] mb-0 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950 sm:mx-4 sm:mb-0 sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div>
            {job.hot ? (
              <span className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2 py-0.5 text-xs font-bold text-white">
                {labels.hot}
              </span>
            ) : null}
            <h2 id="job-modal-title" className={`font-display text-xl font-bold text-slate-900 dark:text-white ${job.hot ? 'mt-2' : ''}`}>
              {locale === 'ja' ? job.titleJa : job.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {labels.departments[job.department]} · {labels.locations[job.location]} · {labels.levels[job.level]}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="sr-only">{labels.modalClose}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">{labels.responsibilities}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {(locale === 'ja' ? job.responsibilitiesJa : job.responsibilities).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">{labels.required}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {(locale === 'ja' ? job.requiredSkillsJa : job.requiredSkills).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">{labels.preferred}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {(locale === 'ja' ? job.preferredSkillsJa : job.preferredSkills).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">{labels.techStack}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {job.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {job.salaryRange || job.salaryRangeJa ? (
            <section className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">{labels.salary}</h3>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {locale === 'ja' ? job.salaryRangeJa : job.salaryRange}
              </p>
            </section>
          ) : null}

          <section className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">{labels.growth}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {locale === 'ja' ? job.growthPathJa : job.growthPath}
            </p>
          </section>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/50">
            <p className="text-xs text-slate-500 dark:text-slate-500">{labels.applyNote}</p>
            <form onSubmit={submit} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200" htmlFor="apply-name">
                  {labels.formName}
                </label>
                <input
                  id="apply-name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200" htmlFor="apply-email">
                  {labels.formEmail}
                </label>
                <input
                  id="apply-email"
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200" htmlFor="apply-note">
                  {labels.formMessage}
                </label>
                <textarea
                  id="apply-note"
                  rows={3}
                  value={note}
                  onChange={(ev) => setNote(ev.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110"
                >
                  {labels.formSubmit}
                </button>
                <a
                  href={ENGAGE_RECRUIT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-white dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
                >
                  {labels.formEngage}
                </a>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  )
}
