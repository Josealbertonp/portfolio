import { experience } from '../content/profile'
import { useI18n } from '../contexts/I18nContext'
import { pick } from '../lib/locale'

export function Experience() {
  const { t, locale } = useI18n()

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-zinc-200 px-4 py-14 sm:px-6 dark:border-zinc-800"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="experience-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('experience.title')}
        </h2>
        <ol className="mt-8 space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${pick(job.period, locale)}`}
              className="relative border-l-2 border-violet-200 pl-6 dark:border-violet-900"
            >
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-violet-500 bg-white dark:border-violet-400 dark:bg-zinc-950" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {job.company}
                </h3>
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {pick(job.period, locale)}
                </time>
              </div>
              <p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-400">
                {pick(job.role, locale)}
              </p>
              <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                {job.location}
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.highlights.map((h) => (
                  <li key={pick(h, locale)}>{pick(h, locale)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
