import { FadeIn } from './FadeIn'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({ eyebrow, title, description, className = '' }: PageHeaderProps) {
  return (
    <FadeIn className={`mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400">{eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      ) : null}
    </FadeIn>
  )
}
