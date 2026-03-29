import { education, languages, profile } from '../content/profile'
import { useI18n } from '../contexts/I18nContext'
import { pick } from '../lib/locale'

export function About() {
  const { t, locale } = useI18n()

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-zinc-200 px-4 py-14 sm:px-6 dark:border-zinc-800"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('about.title')}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{pick(profile.about, locale)}</p>
          <p>{pick(profile.aboutExtra, locale)}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            {locale === 'pt' ? 'Formação' : 'Education'}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {education.map((e) => (
              <li key={e.school}>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {e.school}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {' '}
                  — {pick(e.detail, locale)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            {locale === 'pt' ? 'Idiomas' : 'Languages'}
          </h3>
          <ul className="mt-2 list-inside list-disc text-sm text-zinc-700 dark:text-zinc-300">
            {languages.map((l) => (
              <li key={l.pt}>{pick(l, locale)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
