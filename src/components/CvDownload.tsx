import { useI18n } from '../contexts/I18nContext'

const base = import.meta.env.BASE_URL
const hrefPt = `${base}cv-jose-alberto-pt.pdf`
const hrefEn = `${base}cv-jose-alberto-en.pdf`

export function CvDownload() {
  const { t } = useI18n()

  return (
    <section
      id="cv"
      className="scroll-mt-20 border-b border-zinc-200 px-4 py-14 sm:px-6 dark:border-zinc-800"
      aria-labelledby="cv-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="cv-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('cv.title')}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {t('cv.intro')}
        </p>
        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <li>
            <a
              href={hrefPt}
              download="Jose_Alberto_CV_PT.pdf"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {t('cv.downloadPt')}
            </a>
          </li>
          <li>
            <a
              href={hrefEn}
              download="Jose_Alberto_CV_EN.pdf"
              className="inline-flex items-center justify-center rounded-lg border border-violet-300 bg-violet-50 px-4 py-2.5 text-sm font-medium text-violet-900 shadow-sm hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/60 dark:text-violet-200 dark:hover:bg-violet-950"
            >
              {t('cv.downloadEn')}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
