import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'
import { CompanyPage } from './pages/CompanyPage'
import { BusinessPage } from './pages/BusinessPage'
import { RecruitPage } from './pages/RecruitPage'
import { AccessPage } from './pages/AccessPage'
import { PartnerPage } from './pages/PartnerPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  )
}
