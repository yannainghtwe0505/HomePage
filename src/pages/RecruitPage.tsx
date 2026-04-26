import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'
import { WhyJoinUs } from '../components/WhyJoinUs'
import { VisionValuesSection } from '../components/vision/VisionValuesSection'
import { OurFuturePathSection } from '../components/vision/OurFuturePathSection'
import { RecruitTalentPackage } from '../components/recruit/RecruitTalentPackage'
import { CareersJobBoard } from '../components/careers/CareersJobBoard'
import { ENGAGE_RECRUIT_URL, CONTACT_EMAIL } from '../lib/constants'
import { useI18n } from '../i18n/useI18n'

export function RecruitPage() {
  const { m } = useI18n()
  const hero = m.recruit.hero
  const culture = m.recruit.culture
  const stack = m.recruit.stack
  const apply = m.recruit.apply

  useEffect(() => {
    document.title = m.meta.recruit
  }, [m.meta.recruit])

  return (
    <main className="bg-white dark:bg-slate-950">
      <div className="relative overflow-hidden border-b border-slate-200/80 bg-slate-950 px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(59,130,246,0.35),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-wider text-blue-300"
          >
            {hero.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {hero.line1}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">{hero.line2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-slate-300"
          >
            {hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={ENGAGE_RECRUIT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              {hero.engage}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Careers%20inquiry`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold backdrop-blur-sm transition hover:bg-white/10"
            >
              {hero.email}
            </a>
            <a
              href="#openings"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold backdrop-blur-sm transition hover:bg-white/10"
            >
              {m.recruit.careers.sectionTitle}
            </a>
          </motion.div>
        </div>
      </div>

      <VisionValuesSection id="recruit-vision" />

      <OurFuturePathSection id="our-future-path" />

      <WhyJoinUs />

      <RecruitTalentPackage />

      <CareersJobBoard />

      <section className="border-y border-slate-200/80 bg-slate-50 px-4 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {culture.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {culture.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{culture.sub}</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {culture.items.map((c, i) => (
              <FadeIn key={c.title} delay={0.06 * i}>
                <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {stack.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{stack.title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{stack.sub}</p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {stack.items.map((t) => (
                <li key={t}>
                  <span className="inline-flex rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8" aria-labelledby="apply-heading">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-brand-hero px-6 py-14 text-center shadow-2xl shadow-teal-950/35 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" aria-hidden />
            <h2 id="apply-heading" className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {apply.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg text-blue-100">{apply.sub}</p>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={ENGAGE_RECRUIT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-slate-50"
              >
                {apply.engage}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Application%20question`}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {apply.ask}
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
