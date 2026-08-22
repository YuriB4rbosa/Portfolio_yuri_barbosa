# Portfólio — Yuri Barbosa

Versão em React + TypeScript do portfólio, construída com Vite.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  data.ts              # conteúdo (projetos, skills, sobre, terminal)
  types.ts             # tipos TypeScript compartilhados
  hooks/useReveal.ts    # hook de scroll-reveal (IntersectionObserver)
  components/
    Nav.tsx
    Hero.tsx
    Terminal.tsx        # terminal animado do hero
    About.tsx
    Projects.tsx
    ProjectCard.tsx
    Focus.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  App.css               # estilos (mesma identidade visual da versão HTML)
```

Para editar o conteúdo (projetos, skills, links de contato), basta alterar `src/data.ts` —
os componentes são só a estrutura, os dados ficam centralizados nesse arquivo.
