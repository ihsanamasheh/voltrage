import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { brand, nav } from "@/content/voltrage";
import { logo } from "@/content/media";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[110rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={`${brand.name} logo`}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto sm:h-11"
            />

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Direct Support</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${brand.phone}`}
                  className="link-underline inline-flex min-h-11 items-center transition-colors hover:text-foreground"
                >
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="link-underline inline-flex min-h-11 items-center transition-colors hover:text-foreground"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-accent"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                  {brand.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-hairline pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
