import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { HomeJobListings } from '../components/HomeJobListings'
import { HomeHighlights } from '../components/HomeHighlights'
import { CareersCta } from '../components/CareersCta'
import { useI18n } from '../i18n/useI18n'

export function HomePage() {
  const { m } = useI18n()

  useEffect(() => {
    document.title = m.meta.home
  }, [m.meta.home])

  return (
    <main>
      <Hero />
      <About />
      <HomeJobListings />
      <HomeHighlights />
      <CareersCta />
    </main>
  )
}
