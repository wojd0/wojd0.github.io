# AGENTS.md

## Stack

Angular 21 single-page portfolio app. TypeScript 5.9, Tailwind CSS v4 (PostCSS), SASS/SCSS component styles, Biome linter/formatter. No routing (empty `routes.ts`).

## Package manager

**Bun** — use `bun install`, never npm/yarn/pnpm. Lockfile is `bun.lock`.

## Commands

| Task | Command |
|------|---------|
| Dev server | `bun start` (runs `ng serve --hmr`) |
| Build | `bun run build` |
| Lint | `bun run lint` (`biome check .`) |
| Lint fix | `bun run lint:fix` (`biome check --write .`) |
| Test | `bun run test` (Karma/Jasmine, Chrome) |
| Deploy GH Pages | `ng deploy` (angular-cli-ghpages → `dist/browser`) |

Run `bun run lint` before committing. There are no pre-commit hooks or CI workflows enforcing this.

## Formatting (Biome)

- **Indent width: 3** (not 2 or 4 — this is non-default)
- Single quotes for JS/TS
- `useImportType: error` — always use `import type` for type-only imports
- `noUnusedImports: warn` with safe auto-fix
- Biome ignores `dist/`, `*.html`, `.angular/`
- Organize imports via Biome assist

## i18n

- Library: `@ngx-translate/core` + `@ngx-translate/http-loader`
- Source of truth: `src/assets/i18n/en.json`, target: `pl.json`
- After adding/removing translation keys in `en.json`, sync `pl.json` using the `sync-i18n` skill (`.agents/skills/sync-i18n/SKILL.md`). Missing keys get a `[TRANSLATE]` prefix.
- Array-valued `description` fields may intentionally differ in element count between locales.

## Project structure

```
src/
  main.ts              # Bootstrap entry
  index.html           # SEO meta, JSON-LD, font preloads
  styles.scss          # Tailwind v4 theme (primary=emerald, secondary=blue), dark mode via .dark class
  routes.ts            # Empty — SPA with no client routing
  worker.js            # Cloudflare Workers SPA fallback
  app/
    app.component.*    # Root: dark mode toggle, language switch, section layout
    about/             # Hero section
    education/         # Horizontal timeline with highlight tooltips
    experience/        # Vertical experience timeline
    hr/                # Decorative SVG wave divider
    projectList/       # Project grid + individual project cards
    shared/            # Reusable components (buttons-bar, heading, tag-bar), directives, types
    projects.service.ts  # Loads projects.json + work.json from assets
  assets/
    i18n/              # en.json, pl.json
    *.json             # projects.json, work.json, experience.json (data files)
    *.svg, *.png       # Tech logos, project screenshots, flags
  environments/        # environment.ts, environment.prod.ts
```

## Dark mode

Toggled by adding/removing `.dark` class on `<html>`. Custom variant in Tailwind: `@custom-variant dark (&:where(.dark, .dark *))`. Theme colors defined in `src/styles.scss` — use `primary-*` (emerald) and `secondary-*` (blue) aliases, `page`, `page-foreground`, `card`, `page-border` semantic tokens.

## Hosting

Dual deployment: GitHub Pages (`angular-cli-ghpages`) and Cloudflare Workers (`wrangler.toml`, site bucket `./dist/browser`). `src/404.html` handles SPA redirect for GitHub Pages.

## Commit conventions

Conventional commits with lowercase type prefix: `feat:`, `fix:`, `build:`, `style:`, `refactor:`, `ci:`. No scope used. Keep messages short (under ~60 chars). Older history has unstructured messages — follow the newer pattern.

## Testing

Minimal test coverage — only `education-highlight` and `education-timeline` have spec files. Karma + Jasmine with Chrome launcher. Tests are not blocking for deployment.
