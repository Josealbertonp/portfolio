# Portfolio — José Alberto

Site pessoal com experiência profissional, projetos e contato. Inclui tema claro/escuro e textos em português e inglês.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (`@tailwindcss/vite`)

## Como rodar

```bash
npm install
npm run dev
```

Abra **http://localhost:5173/Portfolio/** (o `base` do Vite segue o nome do repositório no GitHub Pages, ex.: `/Portfolio/`).

## Scripts

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run dev`  | Servidor de desenvolvimento        |
| `npm run build`| Build de produção (`dist/`)        |
| `npm run preview` | Preview local do build          |
| `npm run lint` | ESLint                             |

## Deploy (GitHub Pages)

O repositório inclui [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). No GitHub: **Settings → Pages → Source: GitHub Actions**.

O arquivo [`vite.config.ts`](vite.config.ts) define `base: '/Portfolio/'` (mesmo nome do repo `Josealbertonp/Portfolio`). Se criar o repo com outro nome, ajuste `base` para `'/nome-exato-do-repo/'`.

## Onde editar conteúdo

- Dados pessoais e experiências: [`src/content/profile.ts`](src/content/profile.ts)
- Projetos (links, textos, capas): [`src/data/projects.ts`](src/data/projects.ts)
- Rótulos da interface (PT/EN): [`src/locales/pt.json`](src/locales/pt.json) e [`src/locales/en.json`](src/locales/en.json)
- Foto do hero, currículos (PDF) e outros assets estáticos: pasta [`public/`](public/) (`cv-jose-alberto-pt.pdf`, `cv-jose-alberto-en.pdf`)

## Licença

Este projeto está sob a licença [MIT](LICENSE).
