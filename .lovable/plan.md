# Voltrage — Premium Sports Nutrition Site

A four-page marketing site built from the supplied hierarchy and finalized copy. No content is invented or rewritten; the plan covers presentation, structure, and the contact backend only.

## Visual direction

Editorial, high-contrast minimalism — closer to Apple/Transparent Labs than a typical supplement store.

- Near-black canvas with off-white type, one restrained electric accent used sparingly (links, focus rings, small labels). No gradients, no glass, no heavy shadows.
- Large display headline type paired with a clean grotesque for body copy; tight tracking on headlines, generous line height on paragraphs.
- Wide 12-column grid, deep vertical rhythm, hairline dividers instead of cards-with-shadows.
- Micro-interactions only: subtle image scale on hover, underline reveals on links, quiet fade/rise on section entry, respecting `prefers-reduced-motion`.

## Pages

**Global navbar** — brand wordmark to Home, links Home / Our Products / About Us / Contact Us, Instagram icon button. Sticky, thin, transparent over the hero and solid once scrolled. Full-screen mobile menu.

**Home** — hero (headline, subheadline, "Explore Products" CTA, hero image frame), three value pillars in a hairline-divided row, featured products preview linking into the three product categories, social callout for @testuser.

**Our Products** — three category blocks (100% Whey Protein, Pure Whey Isolate, Pre-Workout & Creatine), each with its section intro and a responsive grid of product tiles carrying the exact supplied names and descriptions.

**About Us** — header, philosophy, formulation standard, and quality guarantee laid out as an editorial long-form column with a supporting lifestyle image.

**Contact Us** — header and intro, direct channels (tel/email/Instagram as real links), and a working contact form: Full Name, Email, Subject (Product Query / Order / Wholesale), Message.

**Global footer** — quick links, direct support (phone, email), Instagram.

## Imagery

Every image slot ships as a correctly sized, aspect-ratio-locked placeholder frame with a neutral treatment, so layouts hold their exact final proportions. When you upload the logo, product shots, and lifestyle photos I drop them in with no layout changes. Images get width/height attributes, lazy loading below the fold, and descriptive alt text.

## Contact form backend

Enable Lovable Cloud and add a `contact_messages` table (name, email, subject, message, created_at) with row-level security: public insert only, no public reads. Submissions are validated with Zod on the client and again server-side, then written through a server function. Success and error states surface as inline feedback.

## Quality bar

- Semantic HTML: one `h1` per page, `header`/`nav`/`main`/`section`/`footer` landmarks, ordered heading levels.
- Accessibility: labeled inputs, visible focus states, `aria-label` on icon-only controls, 44px minimum tap targets, AA contrast.
- Responsive from 360px to ultrawide with fluid type and spacing; grids collapse cleanly at tablet.
- Per-route SEO metadata (title, description, og/twitter tags) unique to each page.

## Technical notes

Routes: `src/routes/index.tsx`, `products.tsx`, `about.tsx`, `contact.tsx`, with navbar and footer in `__root.tsx`. Design tokens (colors, fonts, radii, spacing) defined in `src/styles.css`; no hardcoded color utilities in components. Copy lives in a single typed content module so the supplied text stays verbatim and in one place. Contact submission via `createServerFn` writing to Lovable Cloud.
