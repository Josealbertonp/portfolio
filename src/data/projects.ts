/**
 * Adicione seus projetos aqui. Campos opcionais: demoUrl, tags.
 * Exemplo:
 * {
 *   title: 'Meu app',
 *   description: { pt: '...', en: '...' },
 *   repoUrl: 'https://github.com/Josealbertonp/meu-repo',
 *   demoUrl: 'https://exemplo.com',
 *   tags: ['React', 'Node'],
 * },
 */
import type { Localized } from '../content/profile'

export type Project = {
  title: string
  description: Localized
  repoUrl: string
  demoUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    title: 'Projeto em destaque',
    description: {
      pt: 'Substitua este card pelos seus repositórios reais em projetos.ts.',
      en: 'Replace this card with your real repositories in projects.ts.',
    },
    repoUrl: 'https://github.com/Josealbertonp',
    tags: ['GitHub'],
  },
  {
    title: 'Próximos projetos',
    description: {
      pt: 'Você pode listar vários cards com link para repo e, se houver, demo.',
      en: 'You can list multiple cards with repo links and optional demo URLs.',
    },
    repoUrl: 'https://github.com/Josealbertonp?tab=repositories',
    tags: ['Portfolio'],
  },
]
