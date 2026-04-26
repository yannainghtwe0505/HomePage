import { useCallback, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FadeIn } from '../FadeIn'
import { MOCK_JOBS } from '../../data/careers/jobs'
import type { Department, ExperienceLevel, JobDetail, JobLocation } from '../../data/careers/types'
import { useI18n } from '../../i18n/useI18n'
import { JobCard } from './JobCard'
import { JobDetailModal } from './JobDetailModal'

const PAGE_SIZE = 4

const DEPTS: Array<Department | 'all'> = ['all', 'Backend', 'Frontend', 'Mobile', 'DevOps', 'Data', 'Platform']
const LOCS: Array<JobLocation | 'all'> = ['all', 'Tokyo', 'Remote', 'Hybrid']
const LEVELS: Array<ExperienceLevel | 'all'> = ['all', 'Junior', 'Mid', 'Senior']

export function CareersJobBoard() {
  const { m, locale } = useI18n()
  const L = m.recruit.careers
  const [searchParams, setSearchParams] = useSearchParams()

  const [dept, setDept] = useState<(typeof DEPTS)[number]>('all')
  const [loc, setLoc] = useState<(typeof LOCS)[number]>('all')
  const [lvl, setLvl] = useState<(typeof LEVELS)[number]>('all')
  const [page, setPage] = useState(1)

  const jobIdParam = searchParams.get('job')
  const selected = useMemo(() => MOCK_JOBS.find((x) => x.id === jobIdParam) ?? null, [jobIdParam])

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((j) => {
      if (dept !== 'all' && j.department !== dept) return false
      if (loc !== 'all' && j.location !== loc) return false
      if (lvl !== 'all' && j.level !== lvl) return false
      return true
    })
  }, [dept, loc, lvl])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageClamped = Math.min(page, totalPages)
  const slice = filtered.slice((pageClamped - 1) * PAGE_SIZE, pageClamped * PAGE_SIZE)

  const openJob = useCallback(
    (job: JobDetail) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev)
        next.set('job', job.id)
        return next
      })
    },
    [setSearchParams],
  )

  const closeJob = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.delete('job')
      return next
    })
  }, [setSearchParams])

  return (
    <section id="openings" className="scroll-mt-24 border-y border-slate-200/80 bg-slate-50 px-4 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{L.sectionEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{L.sectionTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{L.sectionSub}</p>
        </FadeIn>

        <FadeIn className="mt-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-end" delay={0.04}>
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">{L.filterRole}</label>
            <select
              value={dept}
              onChange={(e) => {
                setDept(e.target.value as (typeof DEPTS)[number])
                setPage(1)
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {DEPTS.map((d) => (
                <option key={d} value={d}>
                  {d === 'all' ? L.filterAll : L.departments[d]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">{L.filterLocation}</label>
            <select
              value={loc}
              onChange={(e) => {
                setLoc(e.target.value as (typeof LOCS)[number])
                setPage(1)
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {LOCS.map((l) => (
                <option key={l} value={l}>
                  {l === 'all' ? L.filterAll : L.locations[l]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">{L.filterLevel}</label>
            <select
              value={lvl}
              onChange={(e) => {
                setLvl(e.target.value as (typeof LEVELS)[number])
                setPage(1)
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {LEVELS.map((x) => (
                <option key={x} value={x}>
                  {x === 'all' ? L.filterAll : L.levels[x]}
                </option>
              ))}
            </select>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 lg:ml-auto lg:self-end">
            {L.results.replace('{count}', String(filtered.length))}
          </p>
        </FadeIn>

        {slice.length === 0 ? (
          <p className="mt-12 text-center text-slate-600 dark:text-slate-400">{L.empty}</p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {slice.map((job) => (
              <JobCard key={job.id} job={job} locale={locale} labels={L} onSelect={() => openJob(job)} />
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-8 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              {L.page.replace('{current}', String(pageClamped)).replace('{total}', String(totalPages))}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={pageClamped <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 disabled:opacity-40 dark:border-slate-600 dark:text-white"
              >
                {L.prev}
              </button>
              <button
                type="button"
                disabled={pageClamped >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 disabled:opacity-40 dark:border-slate-600 dark:text-white"
              >
                {L.next}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {selected ? (
        <JobDetailModal key={selected.id} job={selected} locale={locale} labels={L} onClose={closeJob} />
      ) : null}
    </section>
  )
}
