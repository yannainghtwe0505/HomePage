import { useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

export function PartnerPage() {
  const { m } = useI18n()
  const p = m.partner.page
  const user = m.partner.user
  const supplier = m.partner.supplier
  const bottom = m.partner.bottom

  useEffect(() => {
    document.title = m.meta.partner
  }, [m.meta.partner])

  return (
    <main className="bg-white pb-20 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{m.partner.intro}</p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/80 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {user.label}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{user.title}</h2>
              <p className="mt-4 flex-1 text-slate-600 dark:text-slate-400">{user.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400" aria-hidden>
                    ✓
                  </span>
                  {user.b1}
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400" aria-hidden>
                    ✓
                  </span>
                  {user.b2}
                </li>
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/80 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                {supplier.label}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{supplier.title}</h2>
              <p className="mt-4 flex-1 text-slate-600 dark:text-slate-400">{supplier.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <span className="text-teal-700 dark:text-teal-400" aria-hidden>
                    ✓
                  </span>
                  {supplier.b1}
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-700 dark:text-teal-400" aria-hidden>
                    ✓
                  </span>
                  {supplier.b2}
                </li>
              </ul>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <section className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-teal-50/90 p-8 text-center dark:border-blue-900/40 dark:from-slate-900 dark:to-slate-900 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{bottom.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{bottom.sub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {bottom.contact}
              </Link>
              <Link
                to="/business"
                className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              >
                {bottom.services}
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  )
}
