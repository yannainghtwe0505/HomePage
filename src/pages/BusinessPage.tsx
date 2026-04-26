import { useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

const serviceIcons = [
  <path key="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  <path
    key="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  />,
  <path
    key="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  />,
]

export function BusinessPage() {
  const { m } = useI18n()
  const p = m.business.page
  const services = m.business.services
  const strengths = m.business.strengths
  const er = m.business.engineerRoom
  const cta = m.business.cta

  useEffect(() => {
    document.title = m.meta.business
  }, [m.meta.business])

  return (
    <main className="bg-white pb-20 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />

      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={0.06 * i}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 dark:border-slate-800 dark:bg-slate-900/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-diagonal text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    {serviceIcons[i]}
                  </svg>
                </div>
                <h2 className="mt-6 font-display text-xl font-bold text-slate-900 dark:text-white">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <section aria-labelledby="strengths-heading">
            <h2 id="strengths-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {m.business.strengthsTitle}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {strengths.map((b, i) => (
                <FadeIn key={b.title} delay={0.04 * i}>
                  <div className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient-diagonal"
                      aria-hidden
                    >
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{b.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.06}>
          <section className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50/80 to-teal-50/60 p-8 dark:border-blue-900/40 dark:from-slate-900 dark:to-slate-900/80 sm:p-10">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{er.title}</h2>
            <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">{er.body}</p>
            <a
              href="https://cmc-co.jp/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
            >
              {er.link}
            </a>
          </section>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/partner"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
            >
              {cta.partner}
            </Link>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              {cta.contact}
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
