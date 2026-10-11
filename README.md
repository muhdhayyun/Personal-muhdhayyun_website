# Personal Website

Portfolio site for Muhammad Hayyun Bin Azhar. React + TypeScript + Vite + Tailwind CSS v4, deployed on Vercel.

## Develop

```
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint
```

## Editing content

- `src/data/profile.ts`: name, links, about, education, experience, skills
- `src/data/projects.ts`: project cards. Set `status: "live"` and add `liveUrl` once a demo is deployed; `"wip"` cards render dimmed with a WIP badge.
- `src/index.css`: lilac accent colours (`--color-accent`, `--color-accent-text`)
- `public/assets/placeholder-*.svg`: project card images; replace with real screenshots later
