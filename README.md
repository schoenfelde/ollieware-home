# Ollieware Consultancy Portfolio

## Highlights

- Multi-page Next.js App Router experience (`src/app`) covering the home page, case studies, blog, about, and contact flows.
- Modular marketing sections in `src/components/sections` feed the landing page with reusable hero, metrics, services, testimonials, and CTA blocks.
- All marketing copy, case studies, testimonials, and blog posts are powered by TypeScript data in `src/data/content.ts`.
- The discovery call form (`src/components/discovery-call-request-form.tsx`) validates inputs and opens a Cal.com scheduling link with visitor answers pre-filled.
- Theme switching is handled by `ThemeProvider` + `ThemeToggle`, while global layout metadata lives in `src/app/layout.tsx`.

## Tech Stack

- Next.js 15 (App Router) on React 19 and TypeScript
- Tailwind CSS with shadcn-inspired UI primitives
- Radix UI components, lucide-react icons, and next-themes
- Turbopack-backed dev/build scripts (`pnpm dev`, `pnpm build`)

## Running Locally

```bash
pnpm install
pnpm dev
```

- Requires Node.js ≥ 18.17 (Next.js 15 minimum).
- Visit `http://localhost:3000` to inspect the site.

## Project Structure

- `src/app/layout.tsx` – Root layout, SEO metadata, Geist fonts, theme provider, shared header/footer.
- `src/app/page.tsx` – Home page composition of section components.
- `src/app/{about,case-studies,blog,contact}` – Long-form pages with supporting metadata.
- `src/components/layout` – Site header/footer with responsive navigation and contact details.
- `src/components/sections` – Reusable marketing sections used across the home page.
- `src/components/discovery-call-request-form.tsx` – Cal.com-prefill form with client-side validation.
- `src/components/ui` – Local copies of shadcn UI primitives (button, card, select, etc.).
- `src/data/content.ts` – Typed content source for metrics, services, case studies, testimonials, and blog posts.

## Customizing Content

- Update marketing copy, case studies, testimonials, and blog posts in `src/data/content.ts`.
- Adjust the Cal.com scheduling destination via `CAL_BASE_URL` inside `src/components/discovery-call-request-form.tsx`.
- Navigation items and anchor links are defined in `src/components/layout/site-header.tsx`.
- Footer specialties and contact details live in `src/components/layout/site-footer.tsx`.

## Deployment Notes

- Build with `pnpm build` (Turbopack) and serve using `pnpm start`.
- Designed for static hosting on platforms like Vercel; no runtime environment variables are required.
- Review `Agents.md` for a companion overview of the agents powering the marketing experience.
