// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// ────────────────────────────────────────────────────────────────
//  Hosting note
//  ----------------------------------------------------------------
//  `site` / `base` are filled in once you pick where the book lives:
//    • Subdomain (docs.hex816.com): site: "https://docs.hex816.com"
//    • Subdirectory (hex816.com/book): site: "https://hex816.com",
//                                       base: "/book"
//    • GitHub Pages project site:      site: "https://hex816.github.io",
//                                       base: "/hex816-book"
//  Leaving them as-is works for local dev and a root-domain deploy.
// ────────────────────────────────────────────────────────────────

export default defineConfig({
  site: "https://hex816.github.io/hex816-book/",
  integrations: [
    starlight({
      title: "The HEX-816 Book",
      description:
        "The authoritative reference for the HEX-816 homebrew 65C816 computer. Hardware in Part 1, programming in Part 2, plus appendices.",
      tagline: "Rev 2.1 · v0.1 of the book",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "HEX-816",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hex816",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/hex816/hex816-book/edit/main/",
      },
      customCss: ["./src/styles/theme.css"],
      lastUpdated: true,
      // Stubs are listed but badged "soon" and currently point at a
      // shared placeholder. Replace each `link` with its real slug
      // (and drop the badge) as chapters are written.
      sidebar: [
        {
          label: "Part 1 · The Computer",
          items: [
            { label: "01 · Introduction", link: "/part-1/introduction/", badge: { text: "soon", variant: "note" } },
            { label: "02 · System architecture", link: "/part-1/system-architecture/" },
            { label: "03 · Memory and storage", link: "/part-1/memory-and-storage/", badge: { text: "soon", variant: "note" } },
            { label: "04 · PRISM video", link: "/part-1/prism-video/", badge: { text: "soon", variant: "note" } },
            { label: "05 · Sound and audio", link: "/part-1/sound-and-audio/", badge: { text: "soon", variant: "note" } },
            { label: "06 · I/O and peripherals", link: "/part-1/io-and-peripherals/", badge: { text: "soon", variant: "note" } },
            { label: "07 · Development and emulation", link: "/part-1/development-and-emulation/", badge: { text: "soon", variant: "note" } },
          ],
        },
        {
          label: "Part 2 · Programming",
          items: [
            { label: "08 · Intro to 65C816 assembly", link: "/part-2/intro-assembly/", badge: { text: "soon", variant: "note" } },
            { label: "09 · Setting up the toolchain", link: "/part-2/toolchain/", badge: { text: "soon", variant: "note" } },
            { label: "10 · Memory management", link: "/part-2/memory-management/", badge: { text: "soon", variant: "note" } },
            { label: "11 · Drawing with PRISM", link: "/part-2/drawing-with-prism/", badge: { text: "soon", variant: "note" } },
            { label: "12 · Sound and music", link: "/part-2/sound-and-music/", badge: { text: "soon", variant: "note" } },
            { label: "13 · I/O programming", link: "/part-2/io-programming/", badge: { text: "soon", variant: "note" } },
            { label: "14 · Inside HEX/OS", link: "/part-2/inside-hexos/", badge: { text: "soon", variant: "note" } },
            { label: "15 · Advanced topics", link: "/part-2/advanced-topics/", badge: { text: "soon", variant: "note" } },
            { label: "16 · Example projects", link: "/part-2/example-projects/", badge: { text: "soon", variant: "note" } },
            { label: "17 · Afterword", link: "/part-2/afterword/", badge: { text: "soon", variant: "note" } },
          ],
        },
        {
          label: "Appendices",
          items: [
            { label: "A · Memory map", link: "/appendices/memory-map/", badge: { text: "soon", variant: "note" } },
            { label: "B · Glossary", link: "/appendices/glossary/", badge: { text: "soon", variant: "note" } },
            { label: "C · 6502 → 65C816", link: "/appendices/6502-to-65c816/", badge: { text: "soon", variant: "note" } },
            { label: "D · vs classic 8-bits", link: "/appendices/vs-classic-8bits/", badge: { text: "soon", variant: "note" } },
            { label: "E · Cheat sheet", link: "/appendices/cheat-sheet/", badge: { text: "soon", variant: "note" } },
            { label: "F · .COM / .816 formats", link: "/appendices/file-formats/", badge: { text: "soon", variant: "note" } },
          ],
        },
      ],
    }),
  ],
});
