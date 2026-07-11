# Abdul Basit - Portfolio

Immersive, cinematic portfolio built with Next.js 15 - scroll-driven chapters, WebGL hero atmosphere, and case-study-first project pages.

## Live

[abdul-basit-portfolio-website.vercel.app](https://abdul-basit-portfolio-website.vercel.app/)

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Motion:** GSAP ScrollTrigger, Lenis smooth scroll
- **3D:** React Three Fiber (hero scene only)
- **Contact:** EmailJS

## Structure

```
src/
  app/              # Routes: /, /work, /work/[slug]
  components/       # Chapters, layout, canvas, work cards
  content/          # Site copy, projects, experience (slug-based)
  lib/              # Motion utilities, email validation
```

## Getting started

```bash
npm install
cp .env.example .env.local
# Add EmailJS keys to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Scripts

| Command         | Description        |
| --------------- | ------------------ |
| `npm run dev`   | Development server |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint`  | ESLint             |

## Routes

| Path           | Description                      |
| -------------- | -------------------------------- |
| `/`            | Immersive home (scroll chapters) |
| `/work`        | Full project archive             |
| `/work/[slug]` | Individual case study            |

Legacy `/projects` URLs redirect to `/work`.

## Contact

[rajaabdulbasit@gmail.com](mailto:rajaabdulbasit@gmail.com)
