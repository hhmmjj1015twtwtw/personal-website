# J傑 — Photography

A single-page portfolio built with Next.js and shadcn/ui.

```bash
pnpm install
pnpm dev        # http://localhost:3000 — press "d" to toggle dark mode
pnpm build
```

Sections, in order: Introduction → Work → About → Pricing → Contact. The email
address sits in the header on every scroll position, in the Contact section
(with a copy button) and in the footer.

## Editing content

All copy, prices and photos live in `lib/site.ts`. Nothing else needs to change
for routine updates.

## Replace the placeholder photos

Every photo is currently a stand-in from [picsum.photos](https://picsum.photos)
and is marked `placeholder: true` in `lib/site.ts`. For each one: put your file
in `public/photos/`, set `src` to `/photos/<file>`, update `width`, `height` and
`alt` (describe what is in the picture), and delete `placeholder: true`.

| Slot             | Where it appears                      | Orientation   |
| ---------------- | ------------------------------------- | ------------- |
| `hero`           | Full-width photo under the intro      | Landscape 8:5 |
| `work-01`        | Work, row 1 left                      | Landscape 3:2 |
| `work-02`        | Work, row 1 right                     | Portrait 2:3  |
| `work-03`        | Work, row 2 left                      | Portrait 2:3  |
| `work-04`        | Work, row 2 right                     | Landscape 3:2 |
| `work-05`        | Work, row 3 left                      | Landscape 3:2 |
| `work-06`        | Work, row 3 right                     | Portrait 2:3  |
| `work-07`        | Work, row 4 left                      | Portrait 2:3  |
| `work-08`        | Work, row 4 right                     | Landscape 3:2 |
| `about-portrait` | About — a photo of you (shown in b&w) | Portrait 4:5  |

The titles, places and years under each work photo are placeholders too.

Once no photo uses picsum, remove `images.remotePatterns` from
`next.config.ts`.

## Other placeholders

- `site.email` — currently `hello@example.com`
- `site.instagram` — currently the Instagram home page
- `pricing` — all prices (NT$), inclusions and notes
- The intro and About text in `app/page.tsx`

## Design notes

- Fonts: Cormorant Garamond (headings), Geist (text), Geist Mono (captions and
  labels), all via `next/font`.
- Colours: warm off-white paper and near-black ink, with a matching dark mode.
  Square corners and hairline rules keep the frame around the photographs
  quiet. Theme tokens are in `app/globals.css`.
