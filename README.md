# The HEX-816 Book

Documentation for the **HEX-816** homebrew 65C816 computer, built with
[Astro Starlight](https://starlight.astro.build/). Source is Markdown/MDX;
the site builds to static HTML and deploys to GitHub Pages via Actions.

The main project site (hex816.com) is WordPress; this book is intentionally
kept separate as static docs in Git — diffable, PR-reviewable, and versionable
per board revision.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview  # serve the built site locally
```

Node 18+ required (CI uses Node 20).

## Authoring

Chapters live under `src/content/docs/`:

```
src/content/docs/
  index.mdx                 ← Preface (home)
  part-1/                   ← The Computer
  part-2/                   ← Programming
  appendices/
```

Each page is Markdown/MDX with frontmatter:

```mdx
---
title: "Chapter 3 · Memory and storage"
description: One-line summary for SEO and social cards.
sidebar:
  label: 03 · Memory and storage
---

Body in Markdown…
```

House-style conventions carried over from the original hand-built site:

- Addresses, opcodes, signal names in `` `backtick mono` `` — e.g. `$CF00`.
- Callouts use Starlight asides: `:::note[Note · bring-up] … :::`
  (also `:::tip`, `:::caution`, `:::danger`).
- Tables, code blocks, and headings are styled in `src/styles/theme.css`
  to match the amber-on-dark Fraunces / Newsreader / JetBrains Mono look.

### The sidebar is config, not copy-paste

Navigation lives in **one place**: the `sidebar` array in `astro.config.mjs`.
There is no per-page nav to keep in sync. To turn a stub into a real chapter:

1. Write the page body in its `.mdx` file.
2. In `astro.config.mjs`, remove that entry's `badge: { text: "soon", … }`.

Prev/next pager, the on-this-page rail, scrollspy, heading anchors, and
search are all provided by Starlight automatically.

## Hosting

`site`/`base` in `astro.config.mjs` are currently set for a `docs.hex816.com`
subdomain. Pick one when you decide:

| Option | astro.config.mjs | DNS / host |
| --- | --- | --- |
| Subdomain | `site: "https://docs.hex816.com"` | `CNAME docs → <user>.github.io` + add a `public/CNAME` file containing `docs.hex816.com` |
| Subdirectory | `site: "https://hex816.com", base: "/book"` | reverse-proxy `/book` from WordPress host to Pages |
| Pages project URL | `site: "https://hex816.github.io", base: "/hex816-book"` | none |

Then enable **Settings → Pages → Source: GitHub Actions** on the repo. The
workflow in `.github/workflows/deploy.yml` builds and publishes on push to
`main`.

## License

Documentation © 2026 Vyacheslav Golovanov and the HEX-816 contributors.
