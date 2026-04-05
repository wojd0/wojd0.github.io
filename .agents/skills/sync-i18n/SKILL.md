---
name: sync-i18n
description: 'Synchronize i18n translation JSON files across locales. Use when: adding new translatable keys, checking for missing translations, finding orphan keys, keeping locale files in sync with the source language. Triggers on: i18n, localization, translation, locale, sync translations, missing keys, translate, add translation.'
argument-hint: 'What to do — e.g. "add missing keys", "check all locales", "add key projects.foo.title"'
---

# Sync i18n Translation Files

## Overview

Keeps all locale files in `src/assets/i18n/` structurally identical to the source (`en.json`). Run after adding new keys, merging branches, or whenever translations may have drifted.

**Source of truth**: `src/assets/i18n/en.json`  
**Target locales**: all other `*.json` files in the same folder (e.g. `pl.json`)

---

## When to Use

- Adding a new translatable string to the codebase
- Checking whether all locales are in sync with `en.json`
- Finding missing or orphaned translation keys
- After merging branches that added or removed keys

---

## Procedure

### 1. Read all locale files

Read `src/assets/i18n/en.json` and every sibling `*.json` file. Build a mental key tree for each.

### 2. Compare key structures recursively

For each target locale, walk the source key tree and flag:

| Status | Meaning | Action |
|--------|---------|--------|
| **Missing key** | In `en.json`, absent in target | Add with `[TRANSLATE]` marker |
| **Orphan key** | In target, absent in `en.json` | Confirm with user before removing |
| **In sync** | Present in both | No action needed |

Use dot-notation when reporting: `projects.polyform.description`, `a11y.toggleDarkMode`.

### 3. Add missing keys

For each missing key, copy its path into the target locale:

- **String value** → `"[TRANSLATE] <source value>"`
- **Array of strings** → each element prefixed with `"[TRANSLATE] "`
- **Nested object** → recurse; mark only leaf strings

Preserve ordering: insert the new key in the same position as in `en.json`.

**Preserve special characters** found in the source file:
- Non-breaking spaces: `\u00a0`
- Non-breaking hyphens: `\u2011`
- Non-breaking narrow spaces: `\u202f`

### 4. Handle orphan keys

Do **not** delete orphan keys automatically. Report them and ask the user whether to remove them — they may be intentional or in-progress work.

### 5. Validate

After making changes, re-read all locale files and verify:

- [ ] Every key in `en.json` (recursively flattened to dot-notation) exists in every target locale
- [ ] No unexpected orphan keys remain in any target locale
- [ ] Key ordering in each target matches the ordering in `en.json`
- [ ] JSON is valid (no trailing commas, correct quoting)
- [ ] No `[TRANSLATE]` markers remain if the user provided actual translations

---

## Reporting Format

Summarize findings before making changes:

```
pl.json — 2 missing, 0 orphans
  Missing: skills.oci, experience.new-company
```

Then apply fixes and list what was changed.

---

## Real Examples (this project)

### Example 1 — missing key (`skills.oci`)

`en.json` had:
```json
"gcp": "GCP",
"oci": "OCI",
"bootstrap": "Bootstrap"
```
`pl.json` was missing `oci`. Fix: insert it at the same position with the same value (proper noun, no translation needed):
```json
"gcp": "GCP",
"oci": "OCI",
"bootstrap": "Bootstrap"
```

### Example 2 — reporting format

Running the diff script against this project produced:
```
pl.json — ✗ drift
  Missing (1):
    + skills.oci

Total: 1 missing, 0 orphan keys
```

### Example 3 — `[TRANSLATE]` marker for a new project entry

After adding `projects.timeline` to `en.json`:
```json
"timeline": {
  "title": "Github Timeline",
  "imageAlt": "Screenshot of the Github Timeline project",
  "description": ["A simple tool for visualizing a Github repository's activity."]
}
```
The scaffolded entry in `pl.json` would be:
```json
"timeline": {
  "title": "[TRANSLATE] Github Timeline",
  "imageAlt": "[TRANSLATE] Screenshot of the Github Timeline project",
  "description": ["[TRANSLATE] A simple tool for visualizing a Github repository's activity."]
}
```

---

## Notes

- `en.json` uses a mix of plain strings and arrays for `description` fields — match the type exactly
- Array entries in `pl.json` can differ in count from `en.json` (translated text may need more/fewer sentences) — this is intentional and not a sync error
- The skill does **not** perform machine translation; it only scaffolds missing keys for a human translator
