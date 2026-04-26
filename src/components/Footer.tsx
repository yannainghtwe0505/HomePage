import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

type NavKey = 'company' | 'business' | 'recruit' | 'access' | 'partner' | 'contact' | 'privacy'

const links: { to: string; key: NavKey }[] = [
  { to: '/company', key: 'company' },
  { to: '/business', key: 'business' },
  { to: '/recruit', key: 'recruit' },
  { to: '/access', key: 'access' },
  { to: '/partner', key: 'partner' },
  { to: '/contact', key: 'contact' },
  { to: '/privacy', key: 'privacy' },
]

export function Footer() {
  const { m } = useI18n()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient-diagonal text-sm font-extrabold text-white">
              C
            </span>
            CMC
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.footer.tagline}</p>
          <p className="mt-3 max-w-2xl text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300">{m.footer.trustBlock}</p>
          <div className="mt-6 max-w-xl rounded-xl border border-slate-200/90 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-950/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{m.footer.corporateBlock.heading}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{m.footer.corporateBlock.legalName}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.footer.corporateBlock.address}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{m.footer.corporateBlock.tel}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{m.footer.corporateBlock.email}</p>
            <p className="mt-3 text-sm">
              <Link to="/privacy" className="font-semibold text-teal-800 underline decoration-teal-800/30 underline-offset-4 hover:decoration-teal-800 dark:text-teal-400 dark:decoration-teal-400/30">
                {m.footer.corporateBlock.privacyLabel}
              </Link>
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            {m.footer.explore}
          </p>
          <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-slate-700 transition hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400"
              >
                {m.nav[l.key]}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div id="privacy" className="mx-auto mt-10 max-w-6xl border-t border-slate-200 pt-8 dark:border-slate-800">
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          {m.footer.privacyLine}
          <a className="underline hover:text-slate-700 dark:hover:text-slate-400" href="mailto:info@cmc-a.co.jp">
            info@cmc-a.co.jp
          </a>
        </p>
        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} CMC Inc. {m.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
