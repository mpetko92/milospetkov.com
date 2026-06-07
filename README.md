# Miloš Petkov — Portfolio / Interactive CV

A modern, minimalist, single-page portfolio with dedicated case-study pages.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion,
lucide-react, and next-themes (dark/light with system preference).

---

## ✏️ Where to edit your content

**All text lives in one file:** [`data/content.ts`](./data/content.ts)

You can change everything — name, bio, skills, jobs, projects, achievements,
links — without touching any component code. Open it and edit the values.
Anything marked `[PLACEHOLDER]` is a guess or wasn't on your LinkedIn — replace it.

Sections in `content.ts`:

| Block          | What it controls                                            |
| -------------- | ----------------------------------------------------------- |
| `site`         | Name, role, SEO description, and your live URL              |
| `contact`      | Email, location, LinkedIn, GitHub, CV path                  |
| `hero`         | The top of the page (eyebrow, headline, subline)            |
| `about`        | About paragraphs + personal note                            |
| `skillGroups`  | Grouped skill tags (add/remove groups or skills freely)     |
| `experience`   | The work timeline                                           |
| `projects`     | Case studies — each becomes a page at `/work/<slug>`        |
| `achievements` | Achievement cards                                           |
| `recommendations` | Quotes from recommendation letters (shown once placeholders removed) |
| `navItems`     | Navbar links                                                |

### A few specific to-dos

- **Email:** set your real address in `contact.email`.
- **Live URL:** set `site.url` to your real domain (used for SEO + sitemap).
- **CV PDF:** the **Download CV** button serves [`public/Milos Petkov.pdf`](./public/Milos%20Petkov.pdf).
  Replace that file to update the download (keep the same filename, or update `contact.cv` in `data/content.ts`).
- **Metrics:** the case studies have `[PLACEHOLDER]` spots for real numbers —
  fill them in to make the impact concrete.

### Re-theme the accent color

There is exactly **one** accent color. Change it in
[`app/globals.css`](./app/globals.css) — edit `--accent` (and `--accent-soft`)
inside both `:root` (light) and `.dark` (dark). Everything updates automatically.

---

## 🧑‍💻 Run locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> Requires Node.js 18+ (this project was set up with Node 24 + npm).

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto-detects Next.js — just click **Deploy** (no settings needed).
4. After the first deploy, copy your Vercel URL into `site.url` in
   `data/content.ts`, commit, and push (this fixes SEO/sitemap absolute URLs).

Alternatively, via CLI:

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```

---

## 🧱 Tech & structure

```
app/
  layout.tsx          # fonts, theme provider, navbar/footer, SEO metadata
  page.tsx            # single-page: assembles all sections
  opengraph-image.tsx # auto-generated social share image
  sitemap.ts          # /sitemap.xml
  robots.ts           # /robots.txt
  work/[slug]/page.tsx# case-study pages (Problem→Discovery→Solution→Impact→Learnings)
components/
  navbar, footer, theme-toggle, theme-provider, section
  sections/           # hero, about, skills, experience, projects, achievements, recommendations, contact
  ui/                 # button, card, badge (shadcn-style primitives)
  motion/reveal.tsx   # scroll-reveal animation (respects reduced-motion)
  icons/brand.tsx     # GitHub / LinkedIn SVG marks
data/content.ts       # ← YOUR CONTENT (edit here)
public/Milos Petkov.pdf  # CV download (path set in data/content.ts)
scripts/generate-cv.ts# CV builder (reads data/content.ts)
```

### Notes on the requested stack

- **shadcn/ui:** the UI primitives (`button`, `card`, `badge`) are the standard
  shadcn components, generated directly into `components/ui` with `cva` +
  `tailwind-merge`, so you fully own the code (no external runtime).
- **Accessibility:** semantic landmarks, skip-to-content link, `aria-label`s,
  keyboard-focusable controls, and `prefers-reduced-motion` support.
- **SEO:** per-page metadata, Open Graph + Twitter cards, dynamic OG image,
  sitemap, and robots.
```
