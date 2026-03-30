/**
 * Projetos do portfolio. Campos opcionais: demoUrl, tags, imageUrl, imageAlt.
 * Capas: Unsplash, URLs públicas ou arquivos em public/ (use import.meta.env.BASE_URL).
 */
import type { Localized } from '../content/profile'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

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
    title: 'Seleção de período e matérias — Eng. Eletrônica (UTFPR)',
    description: {
      pt: 'Sistema web voltado exclusivamente ao curso de Engenharia Eletrônica da UTFPR: matérias por semestre, pré-requisitos, fluxograma e planejamento de carga horária. Desenvolvido em parceria com professores e alunos.',
      en: 'Web app focused solely on the UTFPR Electronic Engineering program: courses by semester, prerequisites, flowchart, and weekly workload planning. Built in partnership with faculty and students.',
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
    // Arte oficial do repositório de sprites do PokeAPI (mesma fonte da API do app)
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    imageAlt: {
      pt: 'Pikachu — ilustração oficial usada pelo ecossistema PokeAPI',
      en: 'Pikachu — official-style artwork from the PokeAPI sprites repository',
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
    imageUrl: asset('planeta-cover.png'),
    imageAlt: {
      pt: 'Render 3D do projeto: planeta com anéis e nebulosa no espaço',
      en: '3D render from the project: ringed planet and nebula in space',
    },
  },
]
