import type { Locale } from '../contexts/I18nContext'
import type { Localized } from '../content/profile'

export function pick(loc: Localized, locale: Locale): string {
  return locale === 'pt' ? loc.pt : loc.en
}
