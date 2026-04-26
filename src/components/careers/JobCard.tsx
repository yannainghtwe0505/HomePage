import type { JobDetail } from '../../data/careers/types'
import type { Messages } from '../../i18n/messages'

type Props = {
  job: JobDetail
  locale: 'ja' | 'en'
  labels: Messages['recruit']['careers']
  onSelect: () => void
}

export function JobCard({ job, locale, labels, onSelect }: Props) {
  const title = locale === 'ja' ? job.titleJa : job.title
  const summary = locale === 'ja' ? job.summaryJa : job.summary
  const emp =
    locale === 'ja'
      ? job.employmentTypeJa
      : job.employmentType === 'Full-time'
        ? labels.employment.Fulltime
        : labels.employment.Contract

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-500/30">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          {job.hot ? (
            <span className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
              {labels.hot}
            </span>
          ) : null}
          <h3 className={`mt-2 font-display text-lg font-bold text-slate-900 dark:text-white ${job.hot ? '' : 'mt-0'}`}>
            {title}
          </h3>
        </div>
      </div>
      <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        <div>
          <dt className="sr-only">{labels.filterRole}</dt>
          <dd className="font-medium text-slate-700 dark:text-slate-300">
            {labels.departments[job.department]}
          </dd>
        </div>
        <div>
          <dt className="sr-only">{labels.filterLocation}</dt>
          <dd>{labels.locations[job.location]}</dd>
        </div>
        <div>
          <dt className="sr-only">{labels.filterLevel}</dt>
          <dd>{labels.levels[job.level]}</dd>
        </div>
        <div>
          <dt className="sr-only">Type</dt>
          <dd>{emp}</dd>
        </div>
      </dl>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={onSelect}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-blue-300 dark:hover:bg-slate-900 sm:w-auto sm:px-6"
      >
        {labels.viewDetails}
      </button>
    </article>
  )
}
