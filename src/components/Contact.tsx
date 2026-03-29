import { contact, profile } from '../content/profile'
import { useI18n } from '../contexts/I18nContext'

export function Contact() {
  const { t } = useI18n()

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-14 sm:px-6"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="contact-title"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('contact.title')}
        </h2>
        <ul className="mt-6 space-y-3 text-sm">
          <li>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </span>
            <br />
            <a
              href={`mailto:${contact.email}`}
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {t('contact.location')}
            </span>
            <br />
            <span className="text-zinc-600 dark:text-zinc-400">
              {profile.location}
            </span>
          </li>
          <li>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              WhatsApp / phone
            </span>
            <br />
            <a
              href={`https://wa.me/${contact.phoneTel.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              {contact.phoneDisplay}
            </a>
          </li>
          <li>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              LinkedIn
            </span>
            <br />
            <a
              href={contact.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              linkedin.com/in/josealbertonp
            </a>
          </li>
          <li>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              GitHub
            </span>
            <br />
            <a
              href={contact.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              github.com/Josealbertonp
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
