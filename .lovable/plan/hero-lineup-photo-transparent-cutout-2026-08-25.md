# Hero lineup photo: transparent cutout

## What you're approving

A preview cutout of the lineup shot is attached in chat (`lineup-transparent-preview.png`). It shows the intended look: the tubs, bags, shaker and props floating with no marble surface behind them, so the photo blends into the page background instead of sitting inside a visible dark rectangle.

Important caveat on that preview: it was produced generatively, so some label text is re-drawn and slightly garbled. It is a look-and-feel reference only, not the file that ships.

## What ships

For production the cutout is done as a pixel-preserving background removal on your original photo — every label, edge and highlight stays exactly as photographed, only the marble surface and its reflections are removed. Result is a transparent PNG cropped tight to the products.

## Layout fix (the "doesn't sit properly" part)

With a transparent subject the current framed treatment stops making sense, so the hero image also gets:

- No card frame, border, inner padding or background fill around it — it floats directly on the page.
- Object-fit switched to `contain` with a tuned aspect ratio so nothing crops and the group is never stretched.
- Baseline alignment so the tubs sit on the same optical line as the headline block, with a soft contact shadow under the group to keep it grounded rather than floating in space.
- Responsive: full-width above the copy on mobile, side-by-side on desktop at the current column ratio.

## Technical notes

- New asset uploaded and pointed at from `src/content/media.ts` (`lineup`), with corrected `width`/`height`.
- Old `Product_Lineup.png` pointer removed once the new one is live.
- Hero markup in `src/routes/index.tsx` and the wrapper in `src/components/site/ImageFrame.tsx` adjusted for the transparent variant (frameless mode), leaving the framed treatment intact for product cards.
- Same transparent lineup reused in the About section, which shares the asset.
