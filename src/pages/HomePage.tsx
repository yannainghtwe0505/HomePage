import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { HomeCapabilities } from '../components/home/HomeCapabilities'
import { HomeWhyChoose } from '../components/home/HomeWhyChoose'
import { About } from '../components/About'
import { HomeTechStrip } from '../components/home/HomeTechStrip'
import { HomeCredibilityStrip } from '../components/home/HomeCredibilityStrip'
import { HomeNewsTeaser } from '../components/home/HomeNewsTeaser'
import { HomeJobListings } from '../components/HomeJobListings'
import { HomeHighlights } from '../components/HomeHighlights'
import { HomeStoryVision } from '../components/home/HomeStoryVision'
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
      <HomeCapabilities />
      <HomeWhyChoose />
      <About />
      <HomeTechStrip />
      <HomeCredibilityStrip />
      <HomeNewsTeaser />
      <HomeJobListings />
      <HomeHighlights />
      <HomeStoryVision />
      <CareersCta />
    </main>
  )
}
