import { Link } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { useI18n } from '../../i18n/useI18n'

export function HomeCredibilityStrip() {
  const { m } = useI18n()
  const c = m.home.credibility

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950" aria-labelledby="credibility-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{c.eyebrow}</p>
          <h2 id="credibility-heading" className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {c.title}
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{c.sub}</p>
          <p className="mt-4 max-w-3xl rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3 text-sm font-medium leading-relaxed text-slate-800 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200">
            {c.licenseSummary}
          </p>
        </FadeIn>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {c.rows.map((row) => (
                <tr key={row.label} className="bg-slate-50/50 dark:bg-slate-900/30">
                  <th className="w-32 shrink-0 px-4 py-3 font-semibold text-slate-900 sm:w-40 dark:text-white">{row.label}</th>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FadeIn className="mt-8 flex flex-wrap gap-4" delay={0.08}>
          <Link
            to="/company"
            className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            {c.linkCompany}
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-900"
          >
            {c.linkContact}
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
