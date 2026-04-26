import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useI18n } from '../i18n/useI18n'

type NavKey = 'home' | 'company' | 'business' | 'recruit' | 'access' | 'partner' | 'contact'

const navKeys: { to: string; key: NavKey }[] = [
  { to: '/', key: 'home' },
  { to: '/company', key: 'company' },
  { to: '/business', key: 'business' },
  { to: '/recruit', key: 'recruit' },
  { to: '/access', key: 'access' },
  { to: '/partner', key: 'partner' },
  { to: '/contact', key: 'contact' },
]

function desktopNavClass(isActive: boolean, onHero: boolean) {
  if (onHero) {
    return [
      'rounded-lg px-3 py-2 text-sm font-medium transition',
      isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10 hover:text-white',
    ].join(' ')
  }
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white',
  ].join(' ')
}

export function Header() {
  const { m } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onHero = pathname === '/' && !scrolled
  const elevated = !onHero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter,border-color] duration-300 ${
        elevated
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`group flex shrink-0 items-center gap-2 font-display text-lg font-bold tracking-tight ${
            elevated ? 'text-slate-900 dark:text-white' : 'text-white drop-shadow-sm'
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient-diagonal text-sm font-extrabold text-white shadow-lg shadow-teal-900/20 transition group-hover:shadow-teal-900/35">
            C
          </span>
          <span className="hidden sm:inline">CMC</span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-2 lg:flex">
          <nav className="mr-1 flex items-center gap-0.5" aria-label="Primary">
            {navKeys.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => desktopNavClass(isActive, onHero)}>
                {m.nav[item.key]}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitcher inverted={onHero} />
          <NavLink
            to="/recruit"
            className="ml-1 inline-flex items-center rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-teal-900/15 transition hover:brightness-110"
          >
            {m.header.joinUs}
          </NavLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className={onHero ? '[&_button]:text-white/90 [&_button]:ring-white/30 [&_button:hover]:bg-white/10 [&_button[data-on=true]]:bg-white [&_button[data-on=true]]:text-slate-900' : ''}>
            <LanguageSwitcher inverted={onHero} />
          </div>
          <NavLink
            to="/recruit"
            onClick={() => setOpen(false)}
            className={`inline-flex rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:text-sm ${
              elevated ? '' : 'shadow-black/20'
            }`}
          >
            {m.header.careersShort}
          </NavLink>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
              elevated ? 'text-slate-700 dark:text-slate-200' : 'text-white drop-shadow'
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{m.header.menu}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <nav className="flex max-h-[70svh] flex-col gap-0.5 overflow-y-auto px-4 py-4" aria-label="Mobile">
              {navKeys.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  {m.nav[item.key]}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
