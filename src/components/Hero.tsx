import { contact, profile } from '../content/profile'
import { useI18n } from '../contexts/I18nContext'
import { pick } from '../lib/locale'

export function Hero() {
  const { t, locale } = useI18n()

  return (
    <section
      className="border-b border-zinc-200 px-4 py-16 sm:px-6 dark:border-zinc-800"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
          {pick(profile.headline, locale)}
        </p>
        <h1
          id="hero-heading"
          className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          {profile.fullName}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.tagline[locale]}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
          >
            {t('hero.ctaContact')}
          </a>
          <a
            href={contact.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {t('hero.ctaLinkedIn')}
          </a>
          <a
            href={contact.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {t('hero.ctaGitHub')}
          </a>
        </div>
      </div>
    </section>
  )
}
