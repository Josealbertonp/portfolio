/**
 * Projetos do portfolio. Campos opcionais: demoUrl, tags, imageUrl, imageAlt.
 * Capas: URLs do Unsplash (uso permitido pela licença Unsplash).
 */
import type { Localized } from '../content/profile'

export type Project = {
  title: string
  description: Localized
  repoUrl: string
  demoUrl?: string
  tags?: string[]
  /** URL de imagem de capa (ex.: Unsplash) */
  imageUrl?: string
  /** Texto alternativo da capa (acessibilidade), bilíngue */
  imageAlt?: Localized
}

export const projects: Project[] = [
  {
    title: 'iFood Clone',
    description: {
      pt: 'Aplicativo inspirado em delivery de alimentos: navegação, busca, pedidos, rastreamento e fluxo de pagamento. Stack Next.js, Tailwind CSS, Prisma e TypeScript.',
      en: 'Food delivery–inspired app: navigation, search, orders, tracking, and payment flow. Built with Next.js, Tailwind CSS, Prisma, and TypeScript.',
    },
    repoUrl: 'https://github.com/Josealbertonp/ifood-clone',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'TypeScript'],
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80',
    imageAlt: {
      pt: 'Mesa com hambúrgueres e acompanhamentos — ilustra tema de delivery de comida',
      en: 'Table with burgers and sides — illustrates food delivery theme',
    },
  },
  {
    title: 'Seleção de período e matérias (UTFPR)',
    description: {
      pt: 'Sistema web para visualizar matérias por semestre, pré-requisitos, fluxograma e planejamento de carga horária. Desenvolvido em parceria com professores e alunos da UTFPR.',
      en: 'Web app to browse courses by semester, prerequisites, flowchart, and weekly workload planning. Built in partnership with UTFPR faculty and students.',
    },
    repoUrl: 'https://github.com/Josealbertonp/selecao-periodo-materias',
    demoUrl: 'https://seletoracademico.netlify.app/',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'React Flow'],
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80',
    imageAlt: {
      pt: 'Estudantes em ambiente acadêmico',
      en: 'Students in an academic setting',
    },
  },
  {
    title: 'Pokédex (PokedexTS)',
    description: {
      pt: 'Pokédex com Next.js e TypeScript consumindo a PokeAPI: busca por nome e exibição dos dados do Pokémon.',
      en: 'Pokédex built with Next.js and TypeScript using the PokeAPI: search by name and view Pokémon details.',
    },
    repoUrl: 'https://github.com/Josealbertonp/PokedexTS',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl:
      'https://images.unsplash.com/photo-1612287230202-1ff1e85c2edb?w=900&auto=format&fit=crop&q=80',
    imageAlt: {
      pt: 'Cena colorida estilo jogos — sugere tema de entretenimento digital',
      en: 'Colorful gaming-style scene — suggests digital entertainment',
    },
  },
  {
    title: 'Planeta 3D (Three.js)',
    description: {
      pt: 'Cena 3D com Three.js: geometrias texturizadas, galáxia de partículas e iluminação ambiente + direcional. Controle de câmera com o mouse.',
      en: 'Three.js scene with textured geometry, a particle galaxy, and ambient + directional lighting. Mouse camera controls.',
    },
    repoUrl: 'https://github.com/Josealbertonp/planeta',
    tags: ['Three.js', 'JavaScript', 'WebGL'],
    imageUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&auto=format&fit=crop&q=80',
    imageAlt: {
      pt: 'Vista noturna do céu com estrelas — sugere ambiente espacial 3D',
      en: 'Night sky with stars — suggests a 3D space environment',
    },
  },
]
