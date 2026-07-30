/**
 * All site copy, verbatim from the supplied brand text and hierarchy.
 * Presentation code must not paraphrase or extend these strings.
 */

export const brand = {
  name: "Voltrage",
  tagline: "Built for the Next Generation of Performance",
  instagram: "@testuser",
  instagramUrl: "https://instagram.com/testuser",
  phone: "00962792466866",
  email: "testuser@voltrage.com",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Our Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const home = {
  headline: "Built for the Next Generation of Performance",
  subheadline:
    "High-performance sports nutrition engineered for modern athletes, fitness enthusiasts, and anyone relentless about their goals",
  cta: "Explore Products",
  pillars: [
    "Clean, premium-grade ingredients",
    "Bold, contemporary design",
    "No fillers. No hype. Just elite fuel",
  ],
  featured: ["100% Whey Protein", "Pure Whey Isolate", "Pre-Workout & Creatine"],
} as const;

export type Product = {
  name: string;
  description: string;
  imageAlt: string;
};

export type Category = {
  id: string;
  title: string;
  intro: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "whey-protein",
    title: "100% Whey Protein (5 lbs)",
    intro:
      "Fuel your recovery with fast-absorbing, high-protein formulas crafted for muscle growth and everyday repair.",
    products: [
      {
        name: "Decadent Chocolate (5 lbs)",
        description:
          "Rich, smooth, and endlessly satisfying. Delivers 24g of ultra-pure protein per scoop with a deep cocoa taste that satisfies your sweet tooth without the guilt.",
        imageAlt: "Voltrage Decadent Chocolate 100% Whey Protein, 5 lbs tub",
      },
      {
        name: "Fresh Strawberry (5 lbs)",
        description:
          "Refreshingly sweet and clean. Blends effortlessly into a silky, fruit-packed shake that tastes like summer in a cup.",
        imageAlt: "Voltrage Fresh Strawberry 100% Whey Protein, 5 lbs tub",
      },
      {
        name: "Classic Vanilla (5 lbs)",
        description:
          "Smooth, versatile, and ridiculously delicious. Perfect on its own or as a protein-rich base for your favorite smoothie bowls.",
        imageAlt: "Voltrage Classic Vanilla 100% Whey Protein, 5 lbs tub",
      },
    ],
  },
  {
    id: "whey-isolate",
    title: "Pure Whey Isolate",
    intro:
      "Ultra-filtered, low-carb, and low-fat protein designed for rapid absorption and maximum lean muscle gains.",
    products: [
      {
        name: "Chocolate Fudge",
        description:
          "An intensely rich chocolate flavor with near-zero fat and carbs. Premium fuel for fast muscle recovery right after a brutal session.",
        imageAlt: "Voltrage Chocolate Fudge Pure Whey Isolate tub",
      },
      {
        name: "Sweet Strawberry",
        description:
          "Light, refreshing, and lightning-fast to digest. Get all the muscle-building power of pure isolate with zero heavy feeling.",
        imageAlt: "Voltrage Sweet Strawberry Pure Whey Isolate tub",
      },
    ],
  },
  {
    id: "pre-workout-creatine",
    title: "Pre-Workout & Creatine",
    intro:
      "Unlock high-voltage energy, laser focus, and raw power when you hit the gym floor.",
    products: [
      {
        name: "Voltrage Pre-Workout",
        description:
          "Formulated for intense pumps, sustained endurance, and zero-crash focus. Turn up the dial and crush every repetition.",
        imageAlt: "Voltrage Pre-Workout tub",
      },
      {
        name: "Pure Micronized Creatine",
        description:
          "Ultra-fine powder for optimal absorption. Increases muscle strength, power output, and cell hydration for maximum performance gains.",
        imageAlt: "Voltrage Pure Micronized Creatine tub",
      },
    ],
  },
];

export const about = {
  header: "Built for the Next Generation of Performance.",
  paragraphs: [
    "At Voltrage, we don't do outdated formulas or compromise on quality. We create high-performance sports nutrition engineered for modern athletes, fitness enthusiasts, and anyone relentless about their goals.",
    "We blend clean, premium-grade ingredients with bold, contemporary design—giving you clean energy, maximum recovery, and honest results. No fillers. No hype. Just elite fuel tailored for your peak performance.",
  ],
  standards: [
    {
      label: "Philosophy",
      lines: [
        "Rejecting outdated formulas and quality compromises",
        "Engineering high-performance sports nutrition for modern athletes and fitness enthusiasts",
      ],
    },
    {
      label: "Formulation Standard",
      lines: [
        "Combining clean, premium-grade ingredients with bold, contemporary design",
        "Engineered for clean energy, maximum recovery, and honest results",
      ],
    },
    {
      label: "Quality Guarantee",
      lines: ["No fillers. No hype. Just elite fuel tailored for peak performance"],
    },
  ],
} as const;

export const contact = {
  header: "Get in Touch",
  intro:
    "Have questions about our products, your order, or wholesale opportunities? Drop us a line—our team is here to help you power up.",
  subjects: ["Product Query", "Order", "Wholesale"],
} as const;
