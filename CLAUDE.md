# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

User-facing documentation site for Witivio's Microsoft Teams apps, built with **VuePress 1.x**. Deployed as an Azure Static Web App via GitHub Actions (`.github/workflows/azure-static-web-apps-black-moss-035f67f03.yml`).

## Commands

Run from the repo root unless noted. Yarn is the expected package manager (`yarn.lock` is committed), but `package.json` scripts use `npm`/`vuepress` directly.

- `yarn install` — install deps (Node 10+).
- `yarn dev` — local dev server (`vuepress dev src`).
- `yarn build` — full production build: compiles SCSS via `build:css` (sass → cleancss into `src/.vuepress/public/vendor.min.css`) then `vuepress build src`.
- `yarn build:azure` — what CI runs; **skips the CSS pipeline** and only does `vuepress build src`. The committed `vendor.min.css` in `src/.vuepress/public/` is what ships to prod, so if you change SCSS under `src/.vuepress/styles/`, run `yarn build:css` locally and commit the regenerated `vendor.min.css`.

There are no tests or linters configured.

## Architecture

### Content layout
- `src/solutions/<app-name>/` — one directory per Teams app (calendar-pro, gpt-pro, manager-insight-pro, etc.). By convention each app has the six top-level pages: `get-started.md`, `fundamentals.md`, `whats-new.md`, `tutorials.md`, `limits.md`, `changelog.md`, plus an `overview.md` that links to them. Sub-topics live in subdirectories.
- `src/architecture-security/`, `src/trust-center/`, `src/translator/`, `src/academy/` — non-app sections reachable from the header nav.
- `src/readme.md` — homepage; new apps must be added here as a tile (title, itemImage, itemDescription, link) so they show up on the landing page.

### VuePress configuration — `src/.vuepress/config.js`
This is the single source of truth for navigation. Two things must be edited when adding/changing content:
1. **`themeConfig.locales./.nav`** — header links.
2. **`themeConfig.sidebar`** — sidebar tree, keyed by URL prefix (e.g. `/solutions/`). Each entry is either `["/relative/path", "Display Name"]` or a nested `{ title, collapsable, path, children }` group. A page that exists on disk but isn't listed here will not appear in the sidebar.

### Theme customization
This repo uses a **local theme** at `src/.vuepress/theme/` (not the default theme). Edit there, not in `node_modules`.
- `src/.vuepress/theme/components/*.vue` — custom Vue components (Home, Overview, Translator, analytics widgets, etc.).
- `src/.vuepress/enhanceApp.js` — components must be globally registered here with `Vue.component("Name", Component)` before they can be used as `<Name />` inside markdown.
- `src/.vuepress/styles/index.styl` — overrides for the header/sidebar. Because rules from the VuePress template already exist, overrides usually need `!important` to win the cascade. You cannot add new HTML tags or classes to template-rendered chrome; only restyle what's already there.
- `src/.vuepress/styles/main.scss` — source for the bundled `vendor.min.css` (see Commands above).

### Naming convention
Directory names lowercase, spaces replaced with `-`. Markdown and asset filenames lowercase, spaces and non-alphanumerics replaced with `-`. Sidebar paths in `config.js` must match exactly.

## Adding a new app (checklist)

1. Create `src/solutions/<app-name>/` with the six standard topic files plus `overview.md`.
2. Add a tile for it in `src/readme.md`.
3. Register every page (and any nested groups) under `themeConfig.sidebar["/solutions/"]` in `src/.vuepress/config.js`.

## Rules

Must-follow rules when editing this repo. Most are load-bearing because there is no linter, no test suite, and merges to `main` auto-deploy to production.

### Content & navigation
- **A page only exists if it's registered in `src/.vuepress/config.js`.** Creating a `.md` file is not enough — add it to `themeConfig.sidebar` under the right URL prefix or it won't appear anywhere.
- **Sidebar paths must match the on-disk path exactly** (lowercase, `-` for spaces and non-alphanumerics). Typos silently break the link.
- **Every app under `src/solutions/<app>/` must ship the full skeleton:** `get-started.md`, `fundamentals.md`, `whats-new.md`, `tutorials.md`, `limits.md`, `changelog.md`, plus `overview.md`. Don't ship an app missing one.
- **A new app must also be tiled on the homepage** (`src/readme.md`) — otherwise it's unreachable from the landing page.
- **Header nav lives only in `themeConfig.locales./.nav`** in `config.js`. Don't edit it anywhere else.

### Naming
- Directories: lowercase, spaces → `-`.
- Markdown and asset filenames: lowercase, spaces and every non-alphanumeric → `-`.
- These rules are load-bearing because sidebar entries reference paths literally.

### Theme & styling
- **Edit the local theme at `src/.vuepress/theme/`, never `node_modules`.** This repo ships its own theme; the default VuePress theme is not in use.
- **Register new Vue components globally** in `src/.vuepress/enhanceApp.js` with `Vue.component("Name", Component)` before using `<Name />` in markdown.
- **Do not add new HTML tags or CSS classes to template-rendered chrome** (header, sidebar). You can only restyle what the VuePress template already emits.
- **Header/sidebar overrides in `src/.vuepress/styles/index.styl` usually need `!important`** to beat the template's own rules.
- **SCSS changes are not picked up by CI.** CI runs `build:azure`, which skips the CSS pipeline. After touching `src/.vuepress/styles/main.scss`, run `yarn build:css` locally and commit the regenerated `src/.vuepress/public/vendor.min.css`, or your styles won't ship.

### Build & deploy
- **Node 10+ and Yarn** are the expected toolchain (`yarn.lock` is committed).
- **No tests, no linter** — verification is manual via `yarn dev`.
- **Merges to `main` auto-deploy** via the Azure Static Web Apps GitHub Action. There is no manual deploy step, so a bad merge ships immediately. Verify locally before merging.
