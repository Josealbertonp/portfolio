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

Abra **http://localhost:5173/portfolio/** (o `base` do Vite está configurado para deploy em GitHub Pages em `/portfolio/`).

## Scripts

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run dev`  | Servidor de desenvolvimento        |
| `npm run build`| Build de produção (`dist/`)        |
| `npm run preview` | Preview local do build          |
| `npm run lint` | ESLint                             |

## Deploy (GitHub Pages)

O repositório inclui [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). No GitHub: **Settings → Pages → Source: GitHub Actions**.

O arquivo [`vite.config.ts`](vite.config.ts) define `base: '/portfolio/'`. Se o nome do repositório for outro, ajuste `base` para `'/nome-do-repo/'`.

## Onde editar conteúdo

- Dados pessoais e experiências: [`src/content/profile.ts`](src/content/profile.ts)
- Projetos (links, textos, capas): [`src/data/projects.ts`](src/data/projects.ts)
- Rótulos da interface (PT/EN): [`src/locales/pt.json`](src/locales/pt.json) e [`src/locales/en.json`](src/locales/en.json)
- Foto do hero e assets estáticos: pasta [`public/`](public/)

## Licença

Este projeto está sob a licença [MIT](LICENSE).
