# Clear active state in the navbar

Right now the current page's link only shifts from muted grey to off-white — too subtle to read as "you are here".

## Change

- The active link gets the electric accent color plus a permanent thin accent underline sitting under the word, so it stands apart from the muted inactive links at a glance.
- Inactive links keep their current muted look and hover underline; hovering an inactive link never mimics the active treatment.
- Add `aria-current="page"` on the active link so screen readers announce it too.
- Mobile menu: the active item keeps the accent color and gains the same accent underline accent bar, consistent with desktop.

## Technical notes

`src/components/site/Navbar.tsx` — replace `activeProps={{ className: "text-foreground" }}` with an accent + underline treatment. Since `link-underline` uses a hover-driven `::after`, the active state uses a separate always-visible underline (a bordered span or a dedicated `nav-active` utility in `src/styles.css`) to avoid fighting the hover transition. Keep `activeOptions={{ exact: item.to === "/" }}` so Home only highlights on `/`. Add `activeProps` `aria-current: "page"`.
