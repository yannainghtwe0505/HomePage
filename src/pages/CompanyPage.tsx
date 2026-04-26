import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import { CONTACT_EMAIL, OFFICE } from '../lib/constants'

function ProfileValueCell({
  row,
}: {
  row: { label: string; value: string; href?: string }
}) {
  if (row.href) {
    const external = row.href.startsWith('http')
    return (
      <a
        href={row.href}
        className="font-medium text-blue-800 underline decoration-blue-800/30 underline-offset-2 transition hover:decoration-blue-800 dark:text-teal-300 dark:decoration-teal-300/30 dark:hover:decoration-teal-200"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {row.value}
      </a>
    )
  }
  return <span className="text-slate-600 dark:text-slate-400">{row.value}</span>
}

export function CompanyPage() {
  const { m } = useI18n()
  const p = m.company.page
  const profile = m.company.profile
  const history = m.company.history
  const cta = m.company.cta
  const teaser = m.company.visionTeaser
  const message = m.company.message
  const pillars = m.company.trustPillars
  const biz = m.company.businessCtas

  useEffect(() => {
    document.title = m.meta.company
  }, [m.meta.company])

  return (
    <main className="bg-white pb-24 dark:bg-slate-950">
      <div className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-teal-950/25">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--color-accent-from)_0%,transparent_65%)] opacity-[0.12] dark:opacity-[0.18]"
          aria-hidden
        />
        <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <section
            aria-labelledby="company-message-heading"
            className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-teal-500/[0.06] to-transparent dark:from-teal-400/[0.07]"
              aria-hidden
            />
            <h2 id="company-message-heading" className="sr-only">
              {message.tagline}
            </h2>
            <p className="max-w-4xl font-display text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              {message.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{message.body}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.04}>
          <section aria-labelledby="trust-pillars-heading">
            <h2 id="trust-pillars-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {pillars.title}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {pillars.items.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={false}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.06}>
          <section
            aria-labelledby="quick-contact-heading"
            className="flex flex-col gap-6 rounded-3xl border border-teal-200/50 bg-gradient-to-br from-teal-50/90 to-slate-50 p-8 dark:border-teal-900/30 dark:from-teal-950/30 dark:to-slate-900/60 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <h2 id="quick-contact-heading" className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {m.company.quickContactTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                TEL{' '}
                <a className="font-semibold text-blue-900 hover:underline dark:text-teal-300" href="tel:+81335440644">
                  {OFFICE.tel}
                </a>
                {' · '}
                FAX <span className="font-medium text-slate-800 dark:text-slate-200">{OFFICE.fax}</span>
                {' · '}
                {OFFICE.hours}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {m.company.emailLabel}:{' '}
                <a className="font-semibold text-blue-900 hover:underline dark:text-teal-300" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/access"
                className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              >
                {m.nav.access}
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {m.nav.contact}
              </a>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.07}>
          <section className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/80 to-teal-50/50 p-8 dark:border-blue-900/35 dark:from-slate-900 dark:to-teal-950/25 sm:p-10">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{teaser.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">{teaser.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/recruit#recruit-vision"
                className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {teaser.linkVision}
              </Link>
              <Link
                to="/recruit#our-future-path"
                className="inline-flex rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-600 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800"
              >
                {teaser.linkFuture}
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.08}>
          <section aria-labelledby="profile-heading">
            <h2 id="profile-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {profile.title}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{profile.hint}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {profile.rows.map((row) => (
                    <tr key={row.label} className="bg-white dark:bg-slate-950">
                      <th className="w-36 shrink-0 px-4 py-3 font-semibold text-slate-900 sm:w-44 dark:text-white">
                        {row.label}
                      </th>
                      <td className="px-4 py-3">
                        <ProfileValueCell row={row} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.09}>
          <section aria-labelledby="history-heading">
            <h2 id="history-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {history.title}
            </h2>
            <ol className="mt-8 space-y-4">
              {history.items.map((h) => (
                <li
                  key={h.year + h.text}
                  className="flex gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/30"
                >
                  <span className="font-mono text-sm font-bold text-teal-700 dark:text-teal-400">{h.year}</span>
                  <span className="text-slate-600 dark:text-slate-400">{h.text}</span>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section aria-labelledby="biz-cta-heading">
            <h2 id="biz-cta-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {biz.title}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">{biz.sub}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {biz.cards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-teal-300/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-600/40"
                >
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:underline dark:text-teal-400">
                    {card.cta}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.11}>
          <div className="flex flex-wrap gap-4 border-t border-slate-200/80 pt-10 dark:border-slate-800">
            <Link
              to="/business"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
            >
              {cta.services}
            </Link>
            <Link
              to="/recruit#openings"
              className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              {cta.careers}
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
