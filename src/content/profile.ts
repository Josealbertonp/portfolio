export type Localized = { pt: string; en: string }

export const profile = {
  shortName: 'José Alberto',
  fullName: 'José Alberto Nascimento de Paula',
  headline: {
    pt: 'Engenheiro de Software',
    en: 'Software Engineer',
  },
  tagline: {
    pt: 'iOS (Swift) · React · Node.js · PHP · Laravel · TypeScript · Angular · Vue',
    en: 'iOS (Swift) · React · Node.js · PHP · Laravel · TypeScript · Angular · Vue',
  },
  location: 'Campo Mourão, Paraná, Brasil',
  about: {
    pt: 'Engenheiro de Software com experiência em aplicações web escaláveis, integração de APIs e sistemas corporativos. Combino frameworks modernos no front-end (Angular, React, Vue) com backends sólidos (Java, Node.js, PHP, Laravel). Código limpo, ambientes ágeis (Scrum/Kanban) e CI/CD.',
    en: 'Software Engineer experienced in scalable web applications, API integration, and enterprise systems. I combine modern front-end frameworks (Angular, React, Vue) with solid backends (Java, Node.js, PHP, Laravel). Clean code, agile environments (Scrum/Kanban), and CI/CD.',
  },
  aboutExtra: {
    pt: 'Interesse contínuo em performance, manutenibilidade e boas práticas de engenharia.',
    en: 'Ongoing focus on performance, maintainability, and engineering best practices.',
  },
} as const

export type ExperienceItem = {
  company: string
  role: Localized
  period: Localized
  location: string
  highlights: Localized[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'DevSquad',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    period: {
      pt: 'mar. de 2026 – o momento · 1 mês',
      en: 'Mar 2026 – present · 1 mo',
    },
    location: 'Murray, Utah, Estados Unidos · Tempo integral · Remota',
    highlights: [
      {
        pt: 'Full stack: novas features, manutenção e melhoria de performance e escalabilidade.',
        en: 'Full stack: new features, maintenance, and performance/scalability improvements.',
      },
      {
        pt: 'Web, mobile, APIs REST e integrações; code reviews e boas práticas.',
        en: 'Web, mobile, REST APIs and integrations; code reviews and best practices.',
      },
      {
        pt: 'Stack: React, Node.js, TypeScript, Laravel, Python, iOS (Swift).',
        en: 'Stack: React, Node.js, TypeScript, Laravel, Python, iOS (Swift).',
      },
    ],
  },
  {
    company: 'OnSafety',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: {
      pt: 'abr. de 2025 – o momento · 1 ano',
      en: 'Apr 2025 – present · 1 yr',
    },
    location: 'Maringá, Paraná, Brasil · Tempo integral · Remota',
    highlights: [
      {
        pt: 'Sistemas corporativos de segurança e saúde do trabalho com Java, JSF, Angular, JavaScript e PHP.',
        en: 'Corporate occupational health & safety systems using Java, JSF, Angular, JavaScript, and PHP.',
      },
      {
        pt: 'Integrações com eSocial e APIs externas (EPIs, auditorias, conformidade).',
        en: 'Integrations with eSocial and external APIs (PPE, audits, compliance).',
      },
      {
        pt: 'UI com Angular; otimização de performance e uso em tempo real.',
        en: 'Angular UI; performance optimization and real-time usage.',
      },
    ],
  },
  {
    company: 'Like Sistemas',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: {
      pt: 'fev. de 2024 – o momento · 2 anos 2 meses',
      en: 'Feb 2024 – present · 2 yrs 2 mo',
    },
    location: 'Campo Mourão, Paraná, Brasil · Tempo integral · Remota',
    highlights: [
      {
        pt: 'PHP, Java, JavaScript, React, Angular, Livewire e Tailwind CSS.',
        en: 'PHP, Java, JavaScript, React, Angular, Livewire, and Tailwind CSS.',
      },
      {
        pt: 'Integração API iFood e pagamentos (Clover/Sicredi, PicPay).',
        en: 'iFood API integration and payments (Clover/Sicredi, PicPay).',
      },
      {
        pt: 'Componentes reutilizáveis (Element UI, Livewire); evolução de sistemas em produção.',
        en: 'Reusable components (Element UI, Livewire); production system evolution.',
      },
    ],
  },
  {
    company: 'Apoema Desenvolvimento e Tecnologia',
    role: {
      pt: 'Desenvolvedor de front-end',
      en: 'Front-end Developer',
    },
    period: {
      pt: 'jun. de 2023 – fev. de 2024 · 9 meses',
      en: 'Jun 2023 – Feb 2024 · 9 mo',
    },
    location: 'Paraná, Brasil · Tempo integral · Remota',
    highlights: [
      {
        pt: 'Sistema de gestão de propriedades rurais com dados geoespaciais.',
        en: 'Rural property management system with geospatial data.',
      },
      {
        pt: 'Vue.js e Nuxt 2/3; Element Plus e Tailwind CSS; mapas com Leaflet.',
        en: 'Vue.js and Nuxt 2/3; Element Plus and Tailwind CSS; Leaflet maps.',
      },
    ],
  },
  {
    company: 'Like Sistemas',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: {
      pt: 'dez. de 2021 – mai. de 2023 · 1 ano 6 meses',
      en: 'Dec 2021 – May 2023 · 1 yr 6 mo',
    },
    location: 'Campo Mourão, Paraná, Brasil · Tempo integral · Híbrida',
    highlights: [
      {
        pt: 'PHP, Java, React e Angular; APIs e automação de processos.',
        en: 'PHP, Java, React, and Angular; APIs and process automation.',
      },
      {
        pt: 'Manutenção e evolução de sistemas em produção.',
        en: 'Maintenance and evolution of production systems.',
      },
    ],
  },
  {
    company: 'Haken — Empresa Júnior de Ciência da Computação',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: {
      pt: 'ago. de 2019 – ago. de 2022 · 3 anos 1 mês',
      en: 'Aug 2019 – Aug 2022 · 3 yrs 1 mo',
    },
    location: 'Campo Mourão, PR, Brasil · UTFPR · Meio período',
    highlights: [
      {
        pt: 'Sites e apps para construtoras, rádios, prefeituras e eventos.',
        en: 'Websites and apps for construction, radio, municipalities, and events.',
      },
      {
        pt: 'React no front-end e Node.js no back-end; Tailwind CSS.',
        en: 'React front-end and Node.js back-end; Tailwind CSS.',
      },
    ],
  },
]

export const skillCategories: {
  title: Localized
  items: string[]
}[] = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    items: [
      'Java',
      'PHP',
      'JavaScript',
      'TypeScript',
      'Python',
      'Swift',
      'HTML',
      'CSS',
      'SQL',
    ],
  },
  {
    title: { pt: 'Front-end', en: 'Front-end' },
    items: ['Angular', 'React', 'Vue.js', 'Nuxt', 'Livewire', 'Tailwind CSS'],
  },
  {
    title: { pt: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Laravel', 'JSF', 'Spring Boot'],
  },
  {
    title: { pt: 'Dados e ferramentas', en: 'Data & tools' },
    items: [
      'MySQL',
      'PostgreSQL',
      'Git',
      'Docker',
      'Postman',
      'REST APIs',
      'Agile (Scrum/Kanban)',
    ],
  },
]

export const education: { school: string; detail: Localized }[] = [
  {
    school: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    detail: {
      pt: 'Bacharelado em Ciência da Computação — Campo Mourão, PR',
      en: 'B.Sc. Computer Science — Campo Mourão, PR',
    },
  },
  {
    school: 'Universidade Cruzeiro do Sul',
    detail: {
      pt: 'Bacharelado em Ciência da Computação (cursando)',
      en: 'B.Sc. Computer Science (in progress)',
    },
  },
]

export const contact = {
  email: 'albertoj0988@gmail.com',
  phoneDisplay: '+55 (44) 9 9724-1687',
  /** Dígitos para wa.me (55 + DDD + número) */
  phoneTel: '5544997241687',
  linkedInUrl: 'https://www.linkedin.com/in/josealbertonp',
  gitHubUrl: 'https://github.com/Josealbertonp',
} as const

export const languages: Localized[] = [
  { pt: 'Português — nativo', en: 'Portuguese — native' },
  { pt: 'Inglês — intermediário', en: 'English — intermediate' },
]
