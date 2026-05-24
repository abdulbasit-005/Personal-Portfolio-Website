# Abdul Basit — Portfolio

Minimal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

**Live:** [abdul-basit-portfolio-website.vercel.app](https://abdul-basit-portfolio-website.vercel.app/)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- EmailJS (contact form)
- PWA via `@ducanh2912/next-pwa`

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Project structure

```
src/
  app/              # Routes (/, /work, /work/[slug])
  components/       # Layout, sections, UI
  lib/content/      # Site copy and project data
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## License

MIT
