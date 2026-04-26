import { createContext } from 'react'
import type { Locale } from './types'
import type { Messages } from './messages'

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  m: Messages
}

export const I18nContext = createContext<I18nContextValue | null>(null)
