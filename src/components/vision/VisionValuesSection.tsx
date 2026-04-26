import { motion } from 'framer-motion'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'
import { VALUE_ICONS } from './ValueIcons'

type Props = {
  /** Anchor for in-page / cross-page links */
  id?: string
}

export function VisionValuesSection({ id = 'vision-values' }: Props) {
  const { m, locale } = useI18n()
  const v = m.visionValues

  return (
    <section id={id} className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{v.eyebrow}</p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {v.visionTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{v.visionBody}</p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-8 dark:border-slate-800 dark:from-slate-900/60 dark:to-blue-950/20 sm:p-10">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{v.missionTitle}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">{v.missionBody}</p>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.08}>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{v.coreTitle}</h3>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {v.items.map((item, i) => (
              <FadeIn key={item.title} delay={0.04 * i}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:border-blue-200/80 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-violet-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-violet-600/15 text-blue-700 transition group-hover:from-blue-600/25 group-hover:to-violet-600/25 dark:text-blue-300">
                    {VALUE_ICONS[i]}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                    {item.title}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {locale === 'ja' ? item.titleJa : item.title}
                  </h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
