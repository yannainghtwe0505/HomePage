import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LOCALE_STORAGE_KEY, type Locale } from './types'
import { messages } from './messages'
import { I18nContext, type I18nContextValue } from './i18n-context'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ja'
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (saved === 'ja' || saved === 'en') return saved
  return 'ja'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === 'ja' ? 'ja' : 'en'
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'en'
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      m: messages[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
