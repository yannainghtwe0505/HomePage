import { FadeIn } from './FadeIn'
import { useI18n } from '../i18n/useI18n'

export function WhyJoinUs() {
  const { m } = useI18n()
  const w = m.whyJoin

  return (
    <section
      id="why"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-950"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{w.eyebrow}</p>
          <h2
            id="why-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {w.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{w.sub}</p>
        </FadeIn>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {w.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.05 * i}>
              <li className="flex gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600"
                  aria-hidden
                >
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
