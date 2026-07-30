import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";

import { brand, nav } from "@/content/voltrage";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-hairline bg-background/90 backdrop-blur-none supports-[backdrop-filter]:bg-background/95"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-[110rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="min-w-0 font-display text-lg font-extrabold tracking-[0.2em] uppercase"
          aria-label={`${brand.name} — home`}
        >
          {brand.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Voltrage on Instagram, ${brand.instagram}`}
            className="grid size-11 place-items-center text-muted-foreground transition-colors hover:text-accent"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center md:hidden"
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-background px-5 pt-8 pb-10 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-hairline py-5 font-display text-3xl font-bold"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center gap-3 text-sm text-muted-foreground"
          >
            <Instagram className="size-5" aria-hidden="true" />
            {brand.instagram}
          </a>
        </div>
      )}
    </header>
  );
}
