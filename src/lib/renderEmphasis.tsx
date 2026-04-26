import type { ReactNode } from 'react'

/** Renders `**highlight**` spans as emphasized inline nodes. */
export function renderWithEmphasis(text: string, keyPrefix: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*)/g)
  return segments.map((seg, i) => {
    if (seg.startsWith('**') && seg.endsWith('**')) {
      const inner = seg.slice(2, -2)
      return (
        <span
          key={`${keyPrefix}-${i}`}
          className="rounded-md bg-gradient-to-r from-blue-800/20 to-teal-600/18 px-1.5 py-0.5 font-semibold text-blue-900 dark:from-teal-400/22 dark:to-blue-400/20 dark:text-teal-100"
        >
          {inner}
        </span>
      )
    }
    return <span key={`${keyPrefix}-${i}`}>{seg}</span>
  })
}
