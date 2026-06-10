# WRITING_ORDER.md — proposed order for the HEX-816 Book stub chapters

**What this is:** a proposed sequence for writing the unwritten chapters/appendices
of **the HEX-816 Book** (`hex816-book`, Astro Starlight). Order only — no chapters
are written here, and a human picks the final order.

**Where this lives:** here in the book repo, kept outside `src/content/docs/` so
it is not rendered as a public page. It was authored in the firmware repo (where
its source of truth, `IO_MAP.md`, lives) and relocated here, its proper home.
The order content below is unchanged from the original.

## Inputs

- **Chapter inventory + numbering:** `hex816-book/astro.config.mjs` sidebar.
- **Already written (real prose):** the Preface (`index.mdx`) and **Chapter 2 ·
  System architecture** (`part-1/system-architecture.mdx`). Everything else is a
  `:::note` stub — **21 chapter/appendix stubs** (22 if the Afterword is counted
  as authored work rather than a closing note).
- **Chapter 2's forward references** (pulled forward in priority): **Ch 6**
  (pinout/GPIO map), **Appendix A** (full memory + register map), **Ch 15** (debug
  protocol), **Ch 11** (raster effects / VSYNC-NMI).
- **Settled vs. in-flux:** the memory map, the `$CF00` I/O page (now verified in
  `IO_MAP.md`), the chip set, and the GPIO assignments are settled. Clock speed,
  the reset-race workaround, and overclocking remain Rev 2.1 bring-up flux.

## Ordering principles

1. **Reference scaffolding first.** The pages Ch 2 forward-references and that
   every later chapter cites for addresses/pins are settled fact — capturing them
   early unblocks cross-references everywhere else.
2. **Toolchain before runnable examples; assembly before Part 2 programming.**
3. **Subsystem hardware chapters before the programming chapters that use them.**
4. **Defer the most bring-up-flux-dependent chapters** (dev/emulation, advanced
   overclocking) and the **synthesis chapters** (example projects, afterword,
   glossary) to the end.

## Proposed order

| # | Chapter / Appendix | Rationale |
|---|---|---|
| 1 | **Appendix A · Memory map** | Ch 2 forward-references it; bank-0 + `$CF00` facts are settled (`IO_MAP.md` verified), so it's pure reference capture and unblocks every address citation. |
| 2 | **Ch 6 · I/O and peripherals** | Ch 2 forward-references the pinout here; GPIO assignments are fixed in hardware — settled, and many later chapters point here. |
| 3 | **Ch 1 · Introduction** | High-level framing/voice; near-zero hardware dependency; sets scope and can confidently point at the two reference anchors above. |
| 4 | **Ch 3 · Memory and storage** | Extends Ch 2's memory-org section + Appendix A; SRAM/bank/SD facts are settled. |
| 5 | **Appendix C · 6502 → 65C816** | Settled ISA-difference reference; supports the assembly chapter that follows. |
| 6 | **Ch 9 · Setting up the toolchain** | Must precede every chapter with runnable examples; HEX-Asm/cross-tools are settled. |
| 7 | **Ch 8 · Intro to 65C816 assembly** | Foundation for all Part 2 programming; depends on Ch 9 (buildable snippets) and Appendix C. |
| 8 | **Appendix E · Cheat sheet** | Settled opcode/addressing quick-reference; falls out naturally while writing Ch 8. |
| 9 | **Ch 4 · PRISM video** | Subsystem hardware chapter; HSTX/PRISM pipeline is documented; prerequisite for the PRISM programming chapter. |
| 10 | **Ch 5 · Sound and audio** | Subsystem hardware chapter; PSG/PCM mixer documented (`4ch_pcm_mixer.md`); prerequisite for the music chapter. |
| 11 | **Ch 13 · I/O programming** | Needs Appendix A + Ch 6; `$CF00` register semantics verified in `IO_MAP.md` (mind the SD WRITE128 / SD_STATUS caveats flagged there). |
| 12 | **Ch 10 · Memory management** | Needs Ch 8 (assembly) + Ch 3 + Appendix A; far-addressing and bank discipline. |
| 13 | **Ch 11 · Drawing with PRISM** | Ch 2 forward-references it (raster/NMI); needs Ch 4 (PRISM hw) + Ch 8. |
| 14 | **Ch 12 · Sound and music** | Needs Ch 5 (SND hw) + Ch 8. |
| 15 | **Ch 14 · Inside HEX/OS** | Needs the memory-map/I-O/BIOS-BDOS picture (Ch 2/3/13); HEX/OS internals. |
| 16 | **Ch 15 · Advanced topics** | Ch 2 forward-references it for the full BRK/debug protocol (settled in `brk_handshake.md`); also overclocking/bring-up — partly in flux, so write once hw stabilizes. |
| 17 | **Appendix F · .COM / .816 formats** | Reference; supports Ch 9/14/16; settled enough to slot in mid-stream. |
| 18 | **Ch 7 · Development and emulation** | Needs Ch 9 + the emulator; carries Rev 2.1 bring-up flux, so not early. |
| 19 | **Appendix D · vs classic 8-bits** | Low-dependency comparative essay; flexible — best once the architecture chapters exist to cite. |
| 20 | **Ch 16 · Example projects** | Depends on nearly every programming chapter; write late so examples lean on settled chapters. |
| 21 | **Appendix B · Glossary** | Accumulate terms while writing; finalize near the end for completeness. |
| 22 | **Ch 17 · Afterword** | Closing reflection; written last by nature. |

## Note for the book-audit task (cross-reference)

Chapter 2's `$CF00` sub-region table (`system-architecture.mdx:80–91`) lists
**gamepad `$CF30–$CF34`**, **USB mouse `$CF40–$CF47`**, and a **PHI2 cycle counter
`$CF68–$CF6C`** that the firmware decode does **not** implement (`$CF30–$CF34` is
`FAT_FATTR`/`FSIZE` per `sys_fat.h`; `$CF40–$CF47` and `$CF68–$CF6C` are unmapped →
read `$FF`). Reconciling that table is the book-audit task's job (it commits to the
book's `main`); `IO_MAP.md` is the verified reference to reconcile against.
