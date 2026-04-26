import { useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { MAPS_EMBED_SRC, OFFICE } from '../lib/constants'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

export function AccessPage() {
  const { m, locale } = useI18n()
  const p = m.access.page
  const a = m.access

  useEffect(() => {
    document.title = m.meta.access
  }, [m.meta.access])

  const mapTitle = locale === 'ja' ? 'CMC オフィス周辺の地図' : 'Map of CMC office area'

  return (
    <main className="bg-white pb-20 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />

      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg ring-1 ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:ring-white/10">
            <div className="aspect-[16/10] w-full sm:aspect-[21/9]">
              <iframe
                title={mapTitle}
                src={MAPS_EMBED_SRC}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <section className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{a.addressTitle}</h2>
              <address className="mt-4 not-italic text-slate-600 dark:text-slate-400">
                <p className="font-medium text-slate-900 dark:text-white">{OFFICE.postal}</p>
                {OFFICE.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{OFFICE.jaLines.join(' · ')}</p>
              </address>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">{a.tel}</dt>
                  <dd>
                    <a className="text-blue-600 hover:underline dark:text-blue-400" href="tel:+81335440644">
                      {OFFICE.tel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">{a.fax}</dt>
                  <dd>{OFFICE.fax}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">{a.dialIn}</dt>
                  <dd>{OFFICE.telFree}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">{a.hours}</dt>
                  <dd>{a.hoursValue}</dd>
                </div>
              </dl>
            </section>
          </FadeIn>

          <FadeIn delay={0.08}>
            <section className="rounded-2xl border border-slate-200/80 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{a.transitTitle}</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600 dark:text-slate-400">
                {a.transit.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {a.contactBtn}
              </Link>
            </section>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
