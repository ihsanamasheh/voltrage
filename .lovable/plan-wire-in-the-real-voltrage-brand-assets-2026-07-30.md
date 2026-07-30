# Wire in the real Voltrage brand assets

Replace the placeholder frames with the uploaded logo and product photography. No copy changes, no new pages.

## Assets

All nine uploads are pushed to CDN storage as asset pointers (no binaries added to the repo) and referenced by URL:

- Logo (VR mark + wordmark)
- Product lineup group shot
- Chocolate Whey Protein Isolate (gym scene) + the "Translucent Clear Option" variant
- Strawberry Whey Protein Isolate
- Strawberry Whey Protein
- Vanilla Whey Protein
- Pre-Workout (Crimson Fuel Series)
- Creatine Monohydrate (Sapphire Strength Series)

## Where each image lands

**Header / footer / mobile menu** — the logo replaces the typographic "VOLTRAGE" wordmark everywhere, sized for the 16px/20px header rows and kept crisp on retina. Since the supplied logo is white-on-black JPEG, it sits on the site's near-black canvas without a visible box; the link keeps its accessible "Voltrage — home" label.

**Home** — the lineup group shot becomes the hero image, filling the existing aspect-locked slot with eager loading and high fetch priority. The three "The Range" cards use one representative product shot each: Vanilla Whey Protein, Chocolate Isolate, and Pre-Workout.

**Products** — each product card gets its matching single shot:

```text
100% Whey Protein   Decadent Chocolate  -> placeholder (no photo yet)
                    Fresh Strawberry    -> Strawberry Whey Protein
                    Classic Vanilla     -> Vanilla Whey Protein
Pure Whey Isolate   Chocolate Fudge     -> Chocolate Isolate (gym scene)
                    Sweet Strawberry    -> Strawberry Isolate
Pre-Workout & Cr.   Pre-Workout         -> Crimson Fuel shot
                    Micronized Creatine -> Sapphire Strength shot
```

The Chocolate Fudge card additionally shows the translucent-option image as a secondary detail image directly beneath the card copy, labelled as an alternate finish.

**About** — the lineup shot fills the 3/4 lifestyle slot beside the brand paragraphs.

## Presentation details

- Every image keeps its current aspect-locked frame, so no layout shifts: portrait product shots use the existing 4/5 and 3/4 ratios, the lineup shot gets a wider ratio suited to its landscape framing.
- Intrinsic width/height are set on every image so the browser reserves space before load; everything below the hero stays lazy-loaded with async decoding.
- The subtle hover scale on product images stays; alt text comes from the existing `imageAlt` strings in the content file.
- Decadent Chocolate keeps the hatched placeholder frame so the grid stays even until you send that shot.

## Technical notes

- Uploads become `.asset.json` pointers under `src/assets/`, imported in components and passed to the existing `ImageFrame` `src` prop.
- Image URLs are added to `src/content/voltrage.ts` alongside each product entry so presentation code stays declarative; copy strings are untouched.
- `ImageFrame` gains an optional secondary-image slot for the translucent chocolate variant; no other component API changes.
- `Navbar.tsx` and `Footer.tsx` swap the text wordmark for an `<img>` with the same link targets and aria labels.
