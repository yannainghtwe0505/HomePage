import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { useI18n } from '../i18n/useI18n'

export function About() {
  const { m, locale } = useI18n()
  const a = m.home.about

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{a.eyebrow}</p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {a.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{a.body}</p>
          <Link
            to="/company"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            {a.link}
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=75"
              srcSet="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=75 640w, https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=75 1200w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={1200}
              height={900}
              alt={locale === 'ja' ? 'オフィスで協働するチーム' : 'Team collaborating in a modern office'}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/18 to-teal-500/12" aria-hidden />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
