import { createFileRoute } from "@tanstack/react-router";

import { about } from "@/content/voltrage";
import { ImageFrame } from "@/components/site/ImageFrame";
import { Reveal } from "@/components/site/Reveal";

const title = "About Voltrage — Built for the Next Generation";
const description =
  "Voltrage blends clean, premium-grade ingredients with bold, contemporary design. No fillers. No hype. Just elite fuel.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[110rem] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:px-12">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h1 className="text-display mt-6 max-w-5xl font-display font-extrabold uppercase">
            {about.header}
          </h1>
        </Reveal>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto grid max-w-[110rem] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
          <Reveal>
            <ImageFrame
              ratio="3 / 4"
              label="Lifestyle image"
              alt="Voltrage athlete training in the gym"
            />
          </Reveal>
          <Reveal delay={100} className="max-w-2xl">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-8 text-lg leading-relaxed text-muted-foreground last:mb-0 sm:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="standards" className="border-t border-hairline">
        <div className="mx-auto max-w-[110rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <h2 id="standards" className="sr-only">
            Our standards
          </h2>
          <dl className="grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
            {about.standards.map((standard, i) => (
              <Reveal
                key={standard.label}
                delay={i * 90}
                className="py-10 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <dt className="eyebrow">{standard.label}</dt>
                <dd>
                  <ul className="mt-5 space-y-4">
                    {standard.lines.map((line) => (
                      <li key={line} className="font-display text-xl leading-snug font-bold sm:text-2xl">
                        {line}
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
