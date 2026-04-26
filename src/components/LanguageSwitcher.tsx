import { useI18n } from '../i18n/useI18n'

function btnClass(inverted: boolean, on: boolean) {
  if (inverted) {
    return on
      ? 'rounded-lg bg-white px-2 py-1 text-xs font-semibold text-slate-900 ring-1 ring-white/25 transition sm:px-2.5 sm:text-sm'
      : 'rounded-lg px-2 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/25 transition hover:bg-white/10 sm:px-2.5 sm:text-sm'
  }
  return on
    ? 'rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white ring-1 ring-slate-200 transition dark:bg-white dark:text-slate-900 dark:ring-slate-700 sm:px-2.5 sm:text-sm'
    : 'rounded-lg px-2 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 transition hover:bg-slate-100 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800 sm:px-2.5 sm:text-sm'
}

export function LanguageSwitcher({ inverted = false }: { inverted?: boolean }) {
  const { locale, setLocale, m } = useI18n()

  return (
    <div className="flex items-center gap-1" role="group" aria-label={m.lang.switch}>
      <button
        type="button"
        aria-pressed={locale === 'ja'}
        className={btnClass(inverted, locale === 'ja')}
        onClick={() => setLocale('ja')}
      >
        {m.lang.ja}
      </button>
      <button
        type="button"
        aria-pressed={locale === 'en'}
        className={btnClass(inverted, locale === 'en')}
        onClick={() => setLocale('en')}
      >
        {m.lang.en}
      </button>
    </div>
  )
}
