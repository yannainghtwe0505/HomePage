import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { FadeIn } from '../components/FadeIn'
import { useI18n } from '../i18n/useI18n'

export function PrivacyPage() {
  const { m } = useI18n()
  const p = m.privacyPage.page
  const sections = m.privacyPage.sections

  useEffect(() => {
    document.title = m.meta.privacy
  }, [m.meta.privacy])

  return (
    <main className="bg-white pb-24 dark:bg-slate-950">
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
      <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
        {sections.map((section, i) => (
          <FadeIn key={section.title} delay={0.04 * i}>
            <section aria-labelledby={`privacy-section-${i}`}>
              <h2 id={`privacy-section-${i}`} className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {section.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
        <FadeIn delay={0.12}>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            {m.privacyPage.contactCta}
          </Link>
        </FadeIn>
      </div>
    </main>
  )
}
