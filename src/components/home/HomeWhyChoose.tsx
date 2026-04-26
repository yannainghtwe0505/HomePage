import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeWhyChoose() {
  const { m } = useI18n()
  const w = m.home.whyChoose

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{w.eyebrow}</p>
          <h2 id="why-choose-heading" className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {w.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{w.sub}</p>
        </FadeIn>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {w.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.05 * i}>
              <li className="flex gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
