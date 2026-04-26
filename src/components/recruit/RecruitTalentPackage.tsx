import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function RecruitTalentPackage() {
  const { m } = useI18n()
  const b = m.recruit.benefits
  const w = m.recruit.workStyle
  const h = m.recruit.hiringSteps

  return (
    <div className="bg-white dark:bg-slate-950">
      <section
        className="mx-auto max-w-6xl border-b border-slate-200/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-slate-800"
        aria-labelledby="benefits-heading"
      >
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{b.eyebrow}</p>
          <h2 id="benefits-heading" className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {b.title}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{b.sub}</p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {b.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.04 * i}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="workstyle-heading">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{w.eyebrow}</p>
          <h2 id="workstyle-heading" className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {w.title}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{w.sub}</p>
        </FadeIn>
        <ul className="mt-8 space-y-4">
          {w.bullets.map((line, i) => (
            <FadeIn key={line} delay={0.05 * i}>
              <li className="flex gap-3 rounded-xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" aria-hidden />
                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{line}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section
        className="border-t border-slate-200/80 bg-slate-50/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-slate-800 dark:bg-slate-900/30"
        aria-labelledby="steps-heading"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{h.eyebrow}</p>
            <h2 id="steps-heading" className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {h.title}
            </h2>
          </FadeIn>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {h.steps.map((step, i) => (
              <FadeIn key={step.title} delay={0.05 * i}>
                <li className="relative flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.body}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
