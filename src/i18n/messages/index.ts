import type { Locale } from '../types'
import { ja } from './ja'
import { en } from './en'

export type Messages = typeof ja

export const messages: Record<Locale, Messages> = {
  ja,
  en,
}
