import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeTechStrip() {
  const { m } = useI18n()
  const t = m.home.techStrip

  return (
    <section
      className="border-y border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 dark:border-slate-800"
      aria-labelledby="tech-strip-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300/90">{t.eyebrow}</p>
          <h2 id="tech-strip-heading" className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{t.sub}</p>
        </FadeIn>
        <FadeIn className="mt-10 flex flex-wrap gap-2" delay={0.06}>
          {t.items.map((name) => (
            <span
              key={name}
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm"
            >
              {name}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
