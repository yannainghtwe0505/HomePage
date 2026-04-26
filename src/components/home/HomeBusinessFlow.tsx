import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeBusinessFlow() {
  const { m } = useI18n()
  const f = m.home.businessFlow

  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50/80 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 dark:border-slate-800 dark:bg-slate-900/35"
      aria-labelledby="business-flow-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{f.eyebrow}</p>
          <h2 id="business-flow-heading" className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            {f.title}
          </h2>
        </FadeIn>
        <ol className="mt-8 grid list-none gap-6 p-0 sm:grid-cols-3">
          {f.steps.map((step, i) => (
            <li key={step.title} className="min-w-0">
              <FadeIn delay={0.06 * i}>
                <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-5 dark:border-slate-800 dark:bg-slate-950 sm:p-6">
                  <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
