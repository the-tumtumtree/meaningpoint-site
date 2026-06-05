# Meaning Point — website

Static one-page site built with [Astro](https://astro.build).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Edit content

| Section | Folder |
|---------|--------|
| Testimonials (3 cards) | `src/content/testimonials/` |
| Cases | `src/content/cases/` |
| About + 4 audiences | `src/content/audiences/` |
| Services | `src/content/services/` |
| Team | `src/content/team/` |

Add images to `public/images/`.

## Build & deploy

```bash
npm run build
```

Deploy the `dist/` folder to Cloudflare Pages, Netlify, or Vercel. Point GoDaddy DNS to your host.

## Fonts

**Forma DJR Text** (`.otf`) lives in `public/fonts/`. Weights 200–700 are wired in `src/styles/global.css`. Body copy in testimonials and case paragraphs uses Georgia (`--font-body`).
