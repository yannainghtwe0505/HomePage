import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeCorporateQuickLinks() {
  const { m } = useI18n()
  const q = m.home.quickLinks

  return (
    <section
      className="border-b border-slate-200/80 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 dark:border-slate-800 dark:bg-slate-950"
      aria-labelledby="quick-links-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{q.eyebrow}</p>
          <h2 id="quick-links-heading" className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {q.title}
          </h2>
        </FadeIn>
        <nav className="mt-6 flex flex-wrap gap-3" aria-label={q.title}>
          {q.items.map((item, i) => (
            <FadeIn key={item.to} delay={0.04 * i}>
              <Link
                to={item.to}
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-teal-600/40 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500/40"
              >
                {item.label}
              </Link>
            </FadeIn>
          ))}
        </nav>
      </div>
    </section>
  )
}
