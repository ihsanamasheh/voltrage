import { createFileRoute } from "@tanstack/react-router";

import { categories } from "@/content/voltrage";
import { productDetailMedia, productMedia } from "@/content/media";
import { ImageFrame } from "@/components/site/ImageFrame";
import { Reveal } from "@/components/site/Reveal";

const title = "Our Products — Voltrage Protein, Isolate & Pre-Workout";
const description =
  "Explore Voltrage: 100% Whey Protein, Pure Whey Isolate, and Pre-Workout & Creatine, built for recovery, lean gains, and raw power.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-[110rem] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:px-12">
        <Reveal>
          <p className="eyebrow">Our Products</p>
          <h1 className="text-display mt-6 max-w-4xl font-display font-extrabold uppercase">
            Elite fuel, three ways
          </h1>
        </Reveal>
      </section>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-title`}
          className="scroll-mt-24 border-t border-hairline"
        >
          <div className="mx-auto max-w-[110rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
            <Reveal className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <h2
                id={`${category.id}-title`}
                className="text-section font-display font-extrabold uppercase"
              >
                {category.title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {category.intro}
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product, i) => (
                <Reveal as="li" key={product.name} delay={i * 90} className="group">
                  <ImageFrame ratio="4 / 5" label={product.name} alt={product.imageAlt} />
                  <h3 className="mt-6 font-display text-xl leading-tight font-bold uppercase">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
