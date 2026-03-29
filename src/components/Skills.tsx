import { skillCategories } from '../content/profile'
import { useI18n } from '../contexts/I18nContext'
import { pick } from '../lib/locale'

export function Skills() {
  const { t, locale } = useI18n()

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-zinc-200 px-4 py-14 sm:px-6 dark:border-zinc-800"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="skills-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('skills.title')}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={pick(cat.title, locale)}>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {pick(cat.title, locale)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
