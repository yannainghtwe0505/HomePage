import { useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

export function CompanyPage() {
  const { m } = useI18n()
  const p = m.company.page
  const profile = m.company.profile
  const history = m.company.history
  const cta = m.company.cta
  const teaser = m.company.visionTeaser

  useEffect(() => {
    document.title = m.meta.company
  }, [m.meta.company])

  return (
    <main className="bg-white pb-20 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />

      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <section className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50/90 to-violet-50/60 p-8 dark:border-blue-900/40 dark:from-slate-900 dark:to-slate-900/80 sm:p-10">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">{teaser.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">{teaser.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/recruit#recruit-vision"
                className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {teaser.linkVision}
              </Link>
              <Link
                to="/recruit#our-future-path"
                className="inline-flex rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-600 dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-800"
              >
                {teaser.linkFuture}
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.05}>
          <section aria-labelledby="profile-heading">
            <h2 id="profile-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {profile.title}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{profile.hint}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {profile.rows.map((row) => (
                    <tr key={row.label} className="bg-white dark:bg-slate-950">
                      <th className="w-36 shrink-0 px-4 py-3 font-semibold text-slate-900 sm:w-44 dark:text-white">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.08}>
          <section aria-labelledby="history-heading">
            <h2 id="history-heading" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {history.title}
            </h2>
            <ol className="mt-8 space-y-4">
              {history.items.map((h) => (
                <li
                  key={h.year + h.text}
                  className="flex gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/30"
                >
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">{h.year}</span>
                  <span className="text-slate-600 dark:text-slate-400">{h.text}</span>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/business"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
            >
              {cta.services}
            </Link>
            <Link
              to="/recruit#openings"
              className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              {cta.careers}
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
