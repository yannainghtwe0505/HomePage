import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { useI18n } from '../i18n/useI18n'

const items = [
  { to: '/business' as const, cardIndex: 0 as const },
  { to: '/recruit' as const, cardIndex: 1 as const },
  { to: '/recruit' as const, cardIndex: 2 as const },
]

const icons = [
  <svg key="i0" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>,
  <svg key="i1" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>,
  <svg key="i2" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
]

export function HomeHighlights() {
  const { m } = useI18n()
  const hi = m.home.highlights

  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:border-slate-800 dark:bg-slate-900/40"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            {hi.eyebrow}
          </p>
          <h2
            id="highlights-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {hi.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{hi.sub}</p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const card = hi.cards[item.cardIndex]
            return (
              <FadeIn key={item.to + item.cardIndex} delay={0.06 * i}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:hover:border-violet-500/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 text-blue-700 dark:text-blue-300">
                    {icons[i]}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {card.subtitle}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{card.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {hi.learnMore}
                    <span aria-hidden className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
