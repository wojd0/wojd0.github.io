# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers.** They fill frontend developer roles. They scan the current role, the skills, the experience, and the projects, then decide to make contact or not.
- **Secondary: possible freelance clients.** They look for proof of finished work before they ask about a contract.

Both groups read the site in English or in Polish.

## Product Purpose

The site is the personal portfolio of Wojciech Duda, a software developer. One page shows personal projects, commercial work, experience, and education. A successful visit ends with a contact through email, LinkedIn, or GitHub.

## Positioning

Wojciech Duda works full time as a professional developer and studies Computer Science at the same time. Few portfolios can show both tracks as current facts:

- Frontend Web Developer at Hyland on an enterprise process automation SaaS product (July 2023 to now).
- Bachelor's degree in Computer Science at WSB Merito Chorzów (2024 to now).
- Own projects that continue next to the job and the study: a native macOS app (2026) and an AI receipt app (2025).

## Operating Context

- The site is one prerendered page at `https://wojciech-duda.com/`. The section order is hero, my projects, work projects, experience, education, contact.
- Visitors arrive through shared links. The page has Open Graph and Twitter card metadata with `src/assets/meta-preview.png`.
- The language comes from the stored choice or the browser language. English is the default.
- The theme comes from the stored choice or the system preference.

## Capabilities and Constraints

Binding constraints:

- **English and Polish.** Both languages stay, with a language switch. `src/assets/i18n/en.json` is the source of truth. The `sync-i18n` skill keeps `pl.json` in sync.
- **Performance and SEO.** The page stays prerendered, with high PageSpeed scores, self-hosted fonts, SEO metadata, and JSON-LD `ProfilePage` data.
- **Light and dark mode.** Both themes stay. The system preference is the default, and a manual toggle stores the choice.

Current implementation, not binding:

- Angular 22, zoneless, with Tailwind CSS v4. `AGENTS.md` holds the full stack and commands.
- Hosting on GitHub Pages and Cloudflare Workers.
- Projects, work projects, and experience come from JSON files in `src/assets/`. The text for each entry comes from the i18n files.
- Project images open in a lightbox.

Known gaps: none.

## Brand Commitments

- Name: Wojciech Duda. Role label: "Software Developer".
- Domain: `wojciech-duda.com`. Email: `contact@wojciech-duda.com`.
- Profiles: `https://www.linkedin.com/in/wojciechduda3/` and `https://github.com/wojd0`.
- No logo exists.

## Evidence on Hand

Personal projects, each with a year, a stack list, and real screenshots in `src/assets/`:

| Project | Year | Stack |
|---|---|---|
| Handy Menu Dashboard (macOS menu bar app) | 2026 | Swift, SwiftUI, macOS |
| Paragony (receipt app with Google Gemini) | 2025 | TypeScript, Next.js, React, Tailwind CSS, Gemini |
| Webflow repository | 2023 | TypeScript, Angular, Firebase |
| Github Timeline | 2023 | TypeScript, React, RxJS |
| PolyForms | 2022 | TypeScript, Angular, Beer CSS, NestJS, Ngx Charts |
| Derry Virtual Guide (Erasmus project) | 2021 | WordPress, Leaflet |

Work projects, without screenshots:

- No-code components library (2023): React and RxJS extensions for Webflow, Bubble.io, and Figma.
- Admin panel for the same service (2023): Angular and Apache ECharts.

Experience:

- Hyland, Frontend Web Developer, full time, July 2023 to now.
- The Eternals, Freelance Software Developer, March 2023 to July 2023.
- Self-employed, Freelance Web Developer, May 2021 to May 2022.

Education:

- Technical high school, IT specialist qualification, 2019 to 2023.
- Bachelor's degree in Computer Science, WSB Merito Chorzów, 2024 to now.

Absences. Do not invent these:

- No testimonials, client names, or client logos.
- No metrics or numbers about the effect of the work.
- No links to live project sites or project source code. The project tags link to the technology websites only.
- No CV file to download.
- The Derry acclaim is a general statement only, with no quote and no source.

## Product Principles

1. **Make contact easy.** Every part of the page leads to email, LinkedIn, or GitHub.
2. **Serve recruiters first.** A recruiter must find the current role, the skills, and the experience in seconds. Freelance clients get the same proof through the projects.
3. **Show work and study together.** Keep the dates clear, so that the parallel professional and academic tracks are easy to see.
4. **Show proof, not claims.** Each entry carries real dates, a real stack, and real screenshots where the work allows them.
5. **Treat both languages as equal.** A Polish visitor gets the same content and quality as an English visitor.
