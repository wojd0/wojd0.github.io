---
name: Wojciech Duda Portfolio
description: A calm single-page portfolio where emerald type floats over quiet slate on a hard blue undertow.
colors:
  tide-emerald: "#00bc7d"
  tide-emerald-bright: "#00d492"
  tide-emerald-pale: "#5ee9b5"
  tide-emerald-mid: "#009966"
  tide-emerald-deep: "#007a55"
  deep-water-blue: "#1d4ed8"
  deep-water-blue-dark: "#1e40af"
  open-water-blue: "#2b7fff"
  channel-blue: "#193cb8"
  channel-blue-bright: "#155dfc"
  sea-foam: "#f8fafc"
  night-sea-slate: "#0f172b"
  night-sea-surface: "#1d293d"
  foam-text: "#f1f5f9"
  surf-white: "#ffffff"
  wave-crest: "#00d084"
  wave-spray: "#7bdcb5"
  wave-crest-dark: "#059669"
  wave-spray-dark: "#10b981"
typography:
  display:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1
  headline:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
  title-sm:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.375
  tagline:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.025em"
  body-lead:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.556
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body-sm:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: "0.1em"
  button:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.556
rounded:
  xl: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "40px"
  xl: "56px"
  section: "112px"
  section-lg: "144px"
components:
  button-contact:
    backgroundColor: "{colors.tide-emerald-deep}"
    textColor: "{colors.surf-white}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "8px 20px 8px 8px"
  button-contact-hover:
    backgroundColor: "{colors.tide-emerald-mid}"
  button-toolbar:
    backgroundColor: "{colors.tide-emerald}"
    textColor: "{colors.surf-white}"
    rounded: "{rounded.xl}"
    size: "44px"
    padding: "8px"
  button-toolbar-dark:
    backgroundColor: "{colors.tide-emerald-deep}"
  heading-section:
    textColor: "{colors.tide-emerald}"
    typography: "{typography.headline}"
  heading-section-dark:
    textColor: "{colors.tide-emerald-bright}"
  card-experience:
    backgroundColor: "{colors.surf-white}"
    textColor: "{colors.night-sea-slate}"
    rounded: "{rounded.xl}"
    padding: "16px"
  card-experience-dark:
    backgroundColor: "{colors.night-sea-surface}"
    textColor: "{colors.foam-text}"
  label-meta:
    textColor: "{colors.tide-emerald-deep}"
    typography: "{typography.label}"
  label-meta-dark:
    textColor: "{colors.tide-emerald-pale}"
  timeline-dot:
    backgroundColor: "{colors.tide-emerald-bright}"
    rounded: "{rounded.full}"
    size: "24px"
---

# Design System: Wojciech Duda Portfolio

## Overview

**Creative North Star: "The Emerald Tide"**

The page is a calm sea of slate. Bright emerald type floats on it, and a hard blue undertow sits below each important word and button. Animated waves divide the page into three tides: projects, history, and contact. Each section has a lot of open space, and every block sits on one center axis.

The mood is calm and clean. Color stays in a small set of roles: emerald for type and action, blue for the undertow, slate for everything else. Secondary text uses opacity steps of the foreground color, not new grays. Motion is slow and ambient, or it answers a direct action. Content does not animate into view.

Light and dark themes have equal rank. The system preference selects the theme, and a toolbar toggle changes it. Each color role has one value for each theme.

**Key Characteristics:**

- Josefin Sans display type in emerald, on a hard blue offset with zero blur.
- One center axis for all text, headings, cards, and tags.
- Three animated emerald wave dividers: one under the hero, and one between each pair of section groups.
- Depth comes from hard offsets. Soft blurred shadows are legacy.
- Two corner radii only: 12px and full.
- Timelines with emerald spines, dots, and triangle arrowheads.

## Colors

The palette has one emerald family for type and action, one blue family that stays under or behind the emerald, and a slate base.

### Primary

- **Tide Emerald** (`tide-emerald`): the name and section headings in the light theme, project titles, and the toolbar buttons in the light theme.
- **Tide Emerald Bright** (`tide-emerald-bright`): the name and section headings in the dark theme, and the timeline dots in both themes.
- **Tide Emerald Pale** (`tide-emerald-pale`): meta labels, such as dates, in the dark theme.
- **Tide Emerald Mid** (`tide-emerald-mid`): the hover state of the contact pills.
- **Tide Emerald Deep** (`tide-emerald-deep`): the contact pill fill, the toolbar buttons in the dark theme, and meta labels in the light theme.

### Secondary

- **Deep Water Blue** (`deep-water-blue`): the hard offset under the name, the project titles, and the contact pills.
- **Deep Water Blue Dark** (`deep-water-blue-dark`): the hard offset under the section headings.
- **Channel Blue** (`channel-blue`, `channel-blue-bright`): the 1px rule under each section heading, in the light and the dark theme.
- **Open Water Blue** (`open-water-blue`): the job bar on the education timeline. It is the only blue fill on the page.

### Neutral

- **Sea Foam** (`sea-foam`): the page background in the light theme.
- **Night Sea Slate** (`night-sea-slate`): the page background in the dark theme, and the text color in the light theme.
- **Night Sea Surface** (`night-sea-surface`): the card surface in the dark theme.
- **Foam Text** (`foam-text`): the text color in the dark theme.
- **Surf White** (`surf-white`): the card surface in the light theme, and the text and icons on emerald fills.
- **Wave colors** (`wave-crest` to `wave-spray` in the light theme, `wave-crest-dark` to `wave-spray-dark` in the dark theme): the horizontal gradient of the wave dividers only.

Secondary text uses the foreground color at 80% (body), 70% (project meta), or 60% (company, location, and labels).

### Named Rules

**The Undertow Rule.** Blue never leads. It sits under emerald as an offset, under a heading as a 1px rule, or as the one job bar on the education timeline.

**The Semantic Surface Rule.** Use the `page`, `page-foreground`, and `card` tokens for neutrals. They change value with the theme, so a new surface needs no `dark:` override.

## Typography

**Display Font:** Josefin Sans (with sans-serif). Self-hosted, weights 400 to 600.
**Body Font:** the system UI sans (`ui-sans-serif, system-ui, sans-serif`).
**Label/Button Font:** Barlow (with sans-serif). Self-hosted, weights 400 and 600.

**Character:** Josefin Sans gives the geometric, slightly vintage voice for names and titles. The system sans keeps body text neutral and fast. Barlow gives the buttons a compact, firm label.

### Hierarchy

- **Display** (600, 4.5rem, 6rem at 768px and up, line height 1): the name in the hero only. It has a 3px 3px Deep Water Blue offset.
- **Headline** (600, 3.4rem, 4.5rem at 1024px and up, line height 1): section headings. They have a 3px 3px Deep Water Blue Dark offset and a 1px Channel Blue rule below.
- **Title** (600, 2.25rem, line height 1.11): project titles in Tide Emerald, with a 1px 1px Deep Water Blue offset.
- **Title Small** (600, 1.5rem, line height 1.375): job titles in the experience cards, in the foreground color.
- **Tagline** (600, 1.25rem, 1.5rem at 768px and up, letter spacing 0.025em): the role line under the name, in the foreground color, with no offset.
- **Body Lead** (600, 1.125rem, line height 1.556): the hero introduction. Its width is 80% of the column, and 40% at 1280px and up.
- **Body** (400, 1rem, 1.125rem at 1024px and up, line height 1.25, letter spacing -0.025em): project descriptions, centered, at 80% opacity.
- **Body Small** (400, 0.875rem, line height 1.625): experience descriptions at 80% opacity.
- **Label** (600, 0.75rem, letter spacing 0.1em, uppercase): dates, location, and job type in the experience cards. The pipe character separates the items.
- **Button** (Barlow 600, 1.125rem): contact pill labels. The footer uses Barlow 400.

### Named Rules

**The Josefin Ceiling Rule.** The Josefin Sans file stops at weight 600. `font-bold` and `font-black` render as 600, so use `font-semibold` for new Josefin text.

## Layout

The page is one long column on one center axis. Every heading, paragraph, card text, and tag line is centered. There is no max-width container. Viewport-relative margins set the horizontal limits:

- The hero fills the viewport height and centers its content.
- The timelines use a 16px side margin below 768px, and 15vw on each side at 768px and up.
- The project grid has 12 columns. It shows one card for each row below 1024px, and two cards with a 40px gap at 1024px and up. A last odd card is centered in columns 4 to 9.

Wave dividers split the page into three groups: projects and work projects, experience and education, and contact. A heading that follows a wave has a 32px top margin. A heading that follows a section in the same group has a 112px top margin (144px at 1024px and up). Each heading has a 56px gap to its content. The contact section has the most space: 208px above and 224px below, and 296px and 320px at 1024px and up.

The breakpoints are the Tailwind defaults: 640px, 768px, 1024px, and 1280px.

### Named Rules

**The Center Axis Rule.** Center new content on the page axis. Do not add left-aligned columns or sidebars.

## Elevation & Depth

The depth language is the hard offset: a solid Deep Water Blue copy of the shape, moved 1px to 3px, with zero blur. It appears on the name, the section headings, the project titles, and the contact pills. The pill offsets fan out from the center of the row: the first pill moves left, the middle pills move down, and the last pill moves right.

The cards, the project halo, and the toolbar still use soft blurred shadows. These are legacy. Replace them with hard offsets or tonal surfaces over time, and do not copy them into new work.

### Shadow Vocabulary

- **Display offset** (`text-shadow: 3px 3px #1d4ed8`): the hero name.
- **Heading offset** (`text-shadow: 3px 3px #1e40af`): section headings.
- **Title offset** (`text-shadow: 1px 1px #1d4ed8`): project titles.
- **Pill offset** (`box-shadow: 0 3px #1d4ed8`; `-3px 3px` on the first pill; `3px 3px` on the last pill): contact pills.
- **Legacy card shadow** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)`): experience cards and education cards. Do not use in new work.
- **Legacy project halo** (`box-shadow: 0 0 40px -25px #000`, and `rgb(255 255 255 / 0.1)` in the dark theme): project cards. Do not use in new work.

### Named Rules

**The Hard Offset Rule.** Depth has zero blur. If a shape must lift, give it a solid blue offset of 1px to 3px.

## Shapes

The form language has two radii and a few hard geometric accents:

- **12px corners** (`rounded.xl`): cards, toolbar buttons, and education cards.
- **Full rounding** (`rounded.full`): contact pills, timeline dots, and the lightbox spinner.
- **Triangle arrowheads** (CSS `clip-path` polygons, 16px): the top of the experience spine and the right end of the education line. They show the direction of time.
- **Waves**: the free-form SVG curves of the dividers. They are the only organic shapes.

Cards have no borders. The only lines are the 1px rule under the section headings and the 2px timeline lines.

## Components

### Buttons

Calm and tactile: round pills that sit on a hard offset, with gentle hover changes.

- **Contact pill:** full rounding, Tide Emerald Deep fill, white 30px icon in a 64px slot, Barlow 600 label in white. It has the Pill offset. The hero and the contact section show the pills in one centered row, with a 4px gap.
- **Contact pill hover:** the fill changes to Tide Emerald Mid. The label width can animate over 200ms, only with `motion-safe`.
- **Toolbar button:** 44px square, 12px corners, Tide Emerald fill (Tide Emerald Deep in the dark theme), white 20px icon or a flag image. On hover, it grows to 110% scale.

### Cards / Containers

- **Experience card:** `card` surface, 12px corners, 16px padding, Legacy card shadow. The content order is a Label meta row, a Title Small job title, the company at 60%, Body Small paragraphs, and a centered comma-separated skills line.
- **Project card:** no surface fill and no border. The Legacy project halo marks its area. The content order is a 256px image area with the screenshot contained and centered, a Title in Tide Emerald, Body paragraphs, and a meta line. The meta line has a clock icon, the year, a pipe, and the comma-separated stack.
- **Education card:** a floating `card` box with 12px corners and 12px padding, 192px minimum width (240px at 768px and up). It has an uppercase label at 60%, a Barlow title, and a description at 60%.

### Navigation

There is no navigation bar. The toolbar sits at the top-right corner of the hero (20px inset) and scrolls away with the page. It holds the theme toggle and the language switch. A large emerald arrow below the hero links to the projects, with a slow 8s pulse.

### Section Heading

The signature heading. Josefin Sans Headline in Tide Emerald (Tide Emerald Bright in the dark theme), with the Heading offset. A 1px Channel Blue rule runs under the full width of the text. The heading does not wrap.

### Wave Divider

Two stacked SVG wave bands, each 10rem high, filled with a horizontal gradient from `wave-crest` to `wave-spray` (`wave-crest-dark` to `wave-spray-dark` in the dark theme). Each band has two layers: a back layer at 53% opacity and a front layer at 100%. The paths morph slowly in a 40s linear loop.

### Timelines

- **Experience timeline:** a vertical 2px emerald spine at 40% opacity, with a triangle arrowhead at the top. Each entry has a 24px Tide Emerald Bright dot at the left of its card. The newest entry is at the top.
- **Education timeline:** a horizontal 2px emerald line with small year ticks and an arrowhead at the right end. 24px dots connect to floating education cards through a 2px stem. One Open Water Blue bar shows the job period below the line.

### Lightbox

A full-screen overlay at 80% black with a small backdrop blur. The image is contained to 90% of the viewport. White controls show at 60% to 70% opacity and go to 100% on hover or focus. The overlay fades over 120ms. The image grows from 95% to 100% scale over 150ms when it loads.

## Do's and Don'ts

### Do:

- **Do** set new display and heading text in Josefin Sans 600, in Tide Emerald (Tide Emerald Bright in the dark theme), on a hard Deep Water Blue offset.
- **Do** give depth with a solid blue offset of 1px to 3px and zero blur (The Hard Offset Rule).
- **Do** center new content on the page axis (The Center Axis Rule).
- **Do** use the `page`, `page-foreground`, and `card` tokens, and step secondary text down to 80%, 70%, or 60% opacity.
- **Do** give every new color role a value for the light theme and for the dark theme.
- **Do** keep theme changes to a 300ms color transition.
- **Do** put ambient motion behind `motion-safe`, as the contact pills do.

### Don't:

- **Don't** add entrance fade-ins or slide-ins on page load. Content shows at once.
- **Don't** blur project images or their previews. Show them sharp and centered.
- **Don't** add new soft, blurred drop shadows. The existing card shadows are legacy.
- **Don't** use blue as a text color or a large fill (The Undertow Rule).
- **Don't** use `font-bold` or `font-black` on Josefin Sans (The Josefin Ceiling Rule).
- **Don't** use the `font-lato` utility. No Lato font loads, so the class has no effect.
- **Don't** add a third corner radius. Use 12px or full rounding.
