import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

const HERO_SRC =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=75'
const HERO_SRCSET = `${HERO_SRC}&w=640 640w, ${HERO_SRC}&w=1080 1080w, ${HERO_SRC}&w=1600 1600w, ${HERO_SRC}&w=1920 1920w`

export function Hero() {
  const { m, locale } = useI18n()
  const h = m.home.hero

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          src={`${HERO_SRC}&w=1920`}
          srcSet={HERO_SRCSET}
          sizes="100vw"
          width={1920}
          height={1080}
          alt=""
          className="h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.35),transparent)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90 sm:text-sm"
        >
          {h.kicker}
        </motion.p>
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className={`font-display font-extrabold leading-[1.08] tracking-tight text-white sm:leading-[1.06] lg:leading-[1.05] ${
            locale === 'ja' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}
        >
          {h.line1}
          <span className="mt-1 block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent sm:mt-2">
            {h.line2}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          {h.sub}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg"
        >
          {h.b2bOneLiner}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex max-w-2xl flex-col gap-5"
        >
          <Link
            to="/recruit"
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            {h.ctaPrimary}
          </Link>
          <p className="text-sm leading-relaxed text-slate-300/95 sm:text-[0.9375rem]">{h.trustLine}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <Link to="/contact" className="text-white/90 underline decoration-white/35 underline-offset-4 transition hover:text-white">
              {h.linkContact} →
            </Link>
            <Link to="/company" className="text-white/90 underline decoration-white/35 underline-offset-4 transition hover:text-white">
              {h.linkCompany} →
            </Link>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950"
        aria-hidden
      />
    </section>
  )
}
