# Ollieware Agents

This guide documents the key “agents” that shape the Ollieware marketing experience. Each agent combines a React component with typed content so you can adjust copy, data, or CTAs without touching unrelated parts of the codebase.

## Navigation & Framing

- **Navigation agent** — `src/components/layout/site-header.tsx`  
  Keeps the primary funnel visible (Case Studies → About → Insights → Contact) while exposing anchor links (`/#services`, `/#approach`, `/#testimonials`) for the home page sections. Update link labels or destinations directly in this file.
- **Brand footer agent** — `src/components/layout/site-footer.tsx`  
  Reinforces credibility with specialties, contact channels, and social proof snippets. Edit specialties/contact details inline; the copyright year updates automatically.
- **Metadata agent** — `src/app/layout.tsx`  
  Central place for SEO defaults, social previews, and Geist font configuration. Adjust `metadata` or theme defaults here.

## Homepage Experience

| Agent | Purpose | Component | Backing data |
| --- | --- | --- | --- |
| Hero agent | Introductory pitch, primary CTA to `/contact`, links to case studies | `src/components/sections/hero.tsx` | Hard-coded copy in component |
| Metrics agent | Shares quantified wins to anchor credibility | `src/components/sections/metrics.tsx` | `metrics` array in `src/data/content.ts` |
| Services agent | Articulates the four main offers with highlights | `src/components/sections/services.tsx` | `services` array in `src/data/content.ts` |
| Case study preview agent | Teaser of recent outcomes + link to full page | `src/components/sections/case-studies-preview.tsx` | `caseStudies` array in `src/data/content.ts` |
| Approach agent | Explains delivery rhythm / philosophy, anchors `#approach` | `src/components/sections/approach.tsx` | Local `steps` array in component |
| Testimonials agent | Social proof quotes from past partners | `src/components/sections/testimonials.tsx` | `testimonials` array in `src/data/content.ts` |
| Blog preview agent | Highlights most recent insights to extend trust | `src/components/sections/blog-preview.tsx` | `blogPosts` array in `src/data/content.ts` |
| CTA agent | Secondary reminder to book the discovery call | `src/components/sections/cta.tsx` | Copy configured inline |

## Deep-Dive Agents

- **Case studies agent** — `src/app/case-studies/page.tsx` renders every entry in the `caseStudies` list with outcomes, role notes, and stack highlights.
- **Blog agent** — `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` pair to list posts and render rich text blocks from `blogPosts`.
- **About agent** — `src/app/about/page.tsx` maps over timeline, values, and quick facts to tell Elliot’s story.
- **Contact agent** — `src/app/contact/page.tsx` combines explanatory cards with the discovery call form outlined below.

## Scheduling Agent

- **Discovery call form agent** — `src/components/discovery-call-request-form.tsx`  
  Validates user input, supports optional guest emails, and opens `https://cal.com/ollieware/discovery-call` with all answers pre-filled. To change the destination, update the `CAL_BASE_URL` constant. All field definitions live in `FIELD_CONFIG`; adjust labels, placeholders, and validation requirements there.

## How to Update Agents

1. **Edit content centrally**: Most marketing copy lives in `src/data/content.ts`. The file exports typed arrays (`metrics`, `services`, `caseStudies`, `testimonials`, `blogPosts`) consumed by multiple agents.
2. **Tune component scaffolding**: For layout or styling changes, modify the corresponding component in `src/components/sections` or the page file in `src/app`.
3. **Extend with confidence**: Because the content arrays are typed, TypeScript will flag missing properties if you add new objects or fields.

Keeping these agents aligned ensures every page tells the same story and funnels visitors toward the discovery call without extra orchestration.
