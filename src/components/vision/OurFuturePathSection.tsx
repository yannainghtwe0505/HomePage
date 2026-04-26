import { motion } from 'framer-motion'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'
import { renderWithEmphasis } from '../../lib/renderEmphasis'

const bulletIconClass = 'h-6 w-6'

const BULLET_ICONS = [
  <svg key="i0" className={bulletIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
  <svg key="i1" className={bulletIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="i2" className={bulletIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  <svg key="i3" className={bulletIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="i4" className={bulletIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
] as const

type Props = {
  /** Anchor for in-page / cross-page links */
  id?: string
}

export function OurFuturePathSection({ id = 'our-future-path' }: Props) {
  const { m } = useI18n()
  const fp = m.ourFuturePath

  return (
    <section
      id={id}
      className="scroll-mt-24 border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">{fp.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {fp.title}
              </h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                {renderWithEmphasis(fp.tagline, 'fp-tag')}
              </p>
            </FadeIn>
            <FadeIn delay={0.06} className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {fp.paragraphs.map((p, i) => (
                <p key={i}>{renderWithEmphasis(p, `fp-p-${i}`)}</p>
              ))}
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.08}>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">{fp.directionsLabel}</p>
            </FadeIn>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {fp.bullets.map((b, i) => (
                <FadeIn key={b.title} delay={0.05 + i * 0.04}>
                  <motion.li
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="group h-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow hover:border-violet-300/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-violet-500/35"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/12 to-blue-600/12 text-violet-700 transition group-hover:from-violet-600/20 group-hover:to-blue-600/20 dark:text-violet-300">
                      {BULLET_ICONS[i] ?? BULLET_ICONS[0]}
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-slate-900 dark:text-white">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{renderWithEmphasis(b.body, `fp-b-${i}`)}</p>
                  </motion.li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
