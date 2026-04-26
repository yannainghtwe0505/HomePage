import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeStoryVision() {
  const { m } = useI18n()
  const s = m.home.storyVision

  return (
    <section
      className="border-y border-slate-200/80 bg-gradient-to-br from-blue-50/90 via-white to-teal-50/70 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-teal-950/20"
      aria-labelledby="story-vision-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{s.eyebrow}</p>
          <h2 id="story-vision-heading" className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {s.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">{s.body}</p>
        </FadeIn>
        <FadeIn className="mt-10 flex flex-wrap gap-3" delay={0.06}>
          <Link
            to="/recruit#recruit-vision"
            className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            {s.ctaVision}
          </Link>
          <Link
            to="/recruit#our-future-path"
            className="inline-flex rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-600 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-900"
          >
            {s.ctaFuture}
          </Link>
          <Link
            to="/recruit#openings"
            className="inline-flex rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-600 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-900"
          >
            {s.ctaJobs}
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
