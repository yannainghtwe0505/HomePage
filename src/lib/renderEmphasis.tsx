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
          className="rounded-md bg-gradient-to-r from-blue-600/18 to-violet-600/18 px-1.5 py-0.5 font-semibold text-blue-800 dark:from-blue-400/22 dark:to-violet-400/22 dark:text-blue-200"
        >
          {inner}
        </span>
      )
    }
    return <span key={`${keyPrefix}-${i}`}>{seg}</span>
  })
}
