# Larger header logo

The wordmark in the sticky header currently sits at 24px tall on mobile and 28px on desktop, which reads small against the nav links and the generous page spacing.

## Change

- Increase the header logo to roughly 32px tall on mobile and 40px on desktop, keeping its aspect ratio (no distortion, same asset).
- Nudge the header bar height slightly (64px to 72px mobile, 80px to 88px desktop) so the larger mark keeps comfortable breathing room and doesn't crowd the hairline border.
- Keep the footer logo proportionally in step so the two marks still feel like one system.

Nothing else changes: same links, same behaviour, same colors.

## Technical notes

`src/components/site/Navbar.tsx` — logo `className` from `h-6 sm:h-7` to `h-8 sm:h-10`; container height `h-16 sm:h-20` to `h-18 sm:h-22` (arbitrary values as needed). Mobile menu top offset updated to match the new header height. `src/components/site/Footer.tsx` — logo from `h-9 sm:h-11` to `h-11 sm:h-14`.
