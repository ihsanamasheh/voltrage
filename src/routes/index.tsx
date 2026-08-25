import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";

import { brand, categories, home } from "@/content/voltrage";
import { categoryMedia, lineup, lineupLifestyle } from "@/content/media";
import { ImageFrame } from "@/components/site/ImageFrame";
import { Reveal } from "@/components/site/Reveal";

const title = "Voltrage — Premium Protein & Sports Nutrition";
const description =
  "High-performance sports nutrition engineered for modern athletes: whey protein, pure whey isolate, pre-workout and creatine.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Translucent product lineup background */}
        <div className="absolute inset-0 z-0">
          <img
            src={lineupLifestyle.src}
            alt="The full Voltrage product lineup: whey protein, isolate, pre-workout and creatine"
            width={lineupLifestyle.width}
            height={lineupLifestyle.height}
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-[0.35] lg:w-[80%]"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, var(--background) 0%, var(--background) 35%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--background) 0%, transparent 30%, transparent 70%, var(--background) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="eyebrow">Sports Nutrition</p>
              <h1 className="text-display mt-6 font-display font-extrabold uppercase">
                {home.headline}
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.subheadline}
              </p>
              <Link
                to="/products"
                className="mt-10 inline-flex min-h-12 items-center gap-3 bg-accent px-7 text-sm font-bold tracking-wide text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                {home.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section aria-labelledby="pillars" className="border-t border-hairline">
        <div className="mx-auto max-w-[110rem] px-5 sm:px-8 lg:px-12">
          <h2 id="pillars" className="sr-only">
            What defines Voltrage
          </h2>
          <ul className="grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
            {home.pillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar}
                delay={i * 90}
                className="py-10 md:px-10 md:py-16 md:first:pl-0 md:last:pr-0"
              >
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-5 font-display text-2xl leading-tight font-bold sm:text-3xl">
                  {pillar}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured products preview */}
      <section aria-labelledby="featured" className="border-t border-hairline">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <h2 id="featured" className="text-section font-display font-extrabold uppercase">
              The Range
            </h2>
            <Link
              to="/products"
              className="link-underline inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              View all products
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {home.featured.map((name, i) => {
              const category = categories[i];
              const media = categoryMedia[category.id];
              return (
                <Reveal as="li" key={name} delay={i * 90}>
                  <Link to="/products" hash={category.id} className="group block">
                    <ImageFrame
                      ratio="1 / 1"
                      label={name}
                      src={media?.src}
                      width={media?.width}
                      height={media?.height}
                      alt={`${name} by Voltrage`}
                    />

                    <h3 className="mt-6 font-display text-xl font-bold uppercase">{name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {category.intro}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Social callout */}
      <section aria-labelledby="social" className="border-t border-hairline">
        <div className="mx-auto flex max-w-[110rem] flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <h2 id="social" className="text-section font-display font-extrabold uppercase">
            Follow the voltage
          </h2>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 items-center gap-3 self-start border border-border px-6 text-sm font-bold tracking-wide uppercase transition-colors hover:border-accent hover:text-accent"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {brand.instagram}
          </a>
        </div>
      </section>
    </>
  );
}
