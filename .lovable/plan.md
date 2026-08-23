# Swap in the new product photography + add Cookies & Cream

Replace the current whey/isolate product shots with the six new uploads and add one new flavor. No other copy or layout changes.

## Image mapping

All six uploads are pushed to CDN storage as new asset pointers (assets are immutable, so replacements are new files, not overwrites):

```text
Chocolate_Whey_Protein-2 ... 844x1264 -> "Decadent Chocolate (5 lbs)"  [fills today's placeholder]
Cookies_and_cream ......... 844x1231 -> "Cookies & Cream (5 lbs)"      [NEW flavor]
Vanilla_Whey_Protein-2 .... 844x1233 -> "Classic Vanilla (5 lbs)"
Strawberry_Whey_Protein-2 . 844x1234 -> "Fresh Strawberry (5 lbs)"
Chocolate_Isolate-2 ....... 844x1234 -> "Chocolate Fudge" (isolate)
Strawberry_Isolate-2 ...... 844x1233 -> "Sweet Strawberry" (isolate)
```

Pre-Workout, Creatine, the logo, and the lineup group shot stay untouched. The translucent-tub detail shot under Chocolate Fudge also stays.

## New product

Added to the **100% Whey Protein** category in `src/content/voltrage.ts`, after Decadent Chocolate:

- Name: `Cookies & Cream (5 lbs)`
- Description (verbatim): "The ultimate cheat-day flavor, made guilt-free. Packed with real cookie crumbles and a creamy, velvety finish that makes hitting your macros feel like a treat."
- Alt text: "Voltrage Cookies & Cream 100% Whey Protein, 5 lbs tub"

The category grid (`sm:2-col / lg:3-col`) simply flows to 4 cards; no component changes needed.

## Where updates land

- `src/content/media.ts` — point the six `productMedia` entries at the new asset URLs with their intrinsic 844px-wide dimensions; update the home-page `categoryMedia` shots for "whey-protein" (vanilla) and "whey-isolate" (chocolate isolate) to the new files.
- `src/content/voltrage.ts` — add the Cookies & Cream product entry (name, description, imageAlt only).
- Cleanup: delete the four now-unused old asset pointers (old chocolate isolate, strawberry isolate, strawberry whey, vanilla whey) via `lovable-assets delete` so the repo doesn't keep dead references.

## Presentation details

- Frames keep their existing 4/5 aspect lock, so the slightly taller new shots crop cleanly with no layout shift; intrinsic width/height are updated to the new dimensions.
- Home "The Range" cards and product cards all pick up the new photography automatically through the media map.
- Decadent Chocolate loses its hatched placeholder frame and gets the real photo.

## Technical notes

- Uploads become new `.asset.json` pointers under `src/assets/` via `lovable-assets create`; components read them through `src/content/media.ts`, so no component code changes.
- Verify with a build + preview check of `/products` and the home page after the swap.
