import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeCapabilities() {
  const { m } = useI18n()
  const c = m.home.capabilities

  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50/80 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:border-slate-800 dark:bg-slate-900/35"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{c.eyebrow}</p>
          <h2
            id="capabilities-heading"
            className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {c.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{c.sub}</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
            {c.serviceBullets.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl border-l-2 border-teal-600/50 pl-4 text-sm font-medium leading-relaxed text-slate-700 dark:border-teal-500/50 dark:text-slate-300">
            {c.serviceLead}
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {c.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.05 * i}>
              <article className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10" delay={0.06}>
          <Link
            to="/business"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-800 transition hover:gap-2 dark:text-teal-400"
          >
            {c.serviceCta}
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
