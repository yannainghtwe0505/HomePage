import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

export function RootLayout() {
  return (
    <div className="min-h-svh font-sans">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
