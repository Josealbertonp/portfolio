import { useI18n } from '../contexts/I18nContext'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-zinc-200 px-4 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <p>{t('footer.built')}</p>
      <p className="mt-1">© {new Date().getFullYear()} José Alberto</p>
    </footer>
  )
}
