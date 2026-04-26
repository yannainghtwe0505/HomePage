import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeIn } from './FadeIn'
import { ENGAGE_RECRUIT_URL } from '../lib/constants'
import { useI18n } from '../i18n/useI18n'

export function CareersCta() {
  const { m } = useI18n()
  const c = m.home.cta

  return (
    <section
      id="careers"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="careers-heading"
    >
      <FadeIn className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 px-6 py-14 text-center shadow-2xl shadow-blue-900/30 sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2
              id="careers-heading"
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              {c.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">{c.body}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={ENGAGE_RECRUIT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-slate-50"
              >
                {c.engage}
              </a>
              <Link
                to="/recruit"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {c.recruitPage}
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {c.companyPage}
              </Link>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  )
}
