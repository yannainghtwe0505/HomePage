import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeNewsTeaser() {
  const { m } = useI18n()
  const n = m.home.news

  return (
    <section className="border-y border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-slate-800 dark:bg-slate-950" aria-labelledby="news-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{n.eyebrow}</p>
          <h2 id="news-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {n.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{n.note}</p>
        </FadeIn>
        <ul className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {n.items.map((item, i) => (
            <FadeIn key={`${item.dateIso}-${i}`} delay={0.04 * i}>
              <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8 sm:py-5">
                <time className="shrink-0 font-mono text-sm font-semibold text-teal-800 dark:text-teal-400" dateTime={item.dateIso}>
                  {item.date}
                </time>
                <span className="text-base font-medium text-slate-900 dark:text-slate-100">{item.title}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
