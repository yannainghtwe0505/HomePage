import { FadeIn } from './FadeIn'
import { useI18n } from '../i18n/useI18n'
import { CONTACT_EMAIL, ENGAGE_RECRUIT_URL } from '../lib/constants'

export function HomeJobListings() {
  const { m } = useI18n()
  const j = m.home.jobs

  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-950"
      aria-labelledby="home-jobs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{j.eyebrow}</p>
          <h2
            id="home-jobs-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {j.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{j.description}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {j.cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.07 * i}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-blue-800/15 to-teal-600/15 px-3 py-1 text-xs font-bold text-blue-900 dark:text-teal-200">
                  {card.badge}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{card.meta}</p>
                <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200">{card.salary}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-teal-800 dark:text-teal-300">
                  {card.tags}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.body}</p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href={ENGAGE_RECRUIT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                  >
                    {j.applyEngage}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(card.mailSubject)}`}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                  >
                    {j.quickApply}
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between" delay={0.12}>
          <a
            href={ENGAGE_RECRUIT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            {j.viewAllEngage}
            <span aria-hidden>→</span>
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-500">{j.featuredNote}</p>
        </FadeIn>
      </div>
    </section>
  )
}
