import { projects } from '../data/projects'
import { useI18n } from '../contexts/I18nContext'
import { pick } from '../lib/locale'

export function Projects() {
  const { t, locale } = useI18n()

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-zinc-200 px-4 py-14 sm:px-6 dark:border-zinc-800"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="projects-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('projects.title')}
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
          {t('projects.intro')}
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.repoUrl}
              className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/80 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {p.imageUrl ? (
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <img
                    src={p.imageUrl}
                    alt={p.imageAlt ? pick(p.imageAlt, locale) : ''}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pick(p.description, locale)}
                </p>
                {p.tags && p.tags.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-400"
                  >
                    {t('projects.viewRepo')} →
                  </a>
                  {p.demoUrl ? (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
                    >
                      {t('projects.viewDemo')} →
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
