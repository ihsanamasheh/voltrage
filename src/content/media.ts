/**
 * Brand photography, served from CDN asset pointers.
 * Keyed by the product names in `src/content/voltrage.ts`.
 */
import logoAsset from "@/assets/Voltrage_Logo_mark.png.asset.json";
import lineupAsset from "@/assets/Product_Lineup.jpeg.asset.json";
import chocolateWheyAsset from "@/assets/Chocolate_Whey_Protein_framed.jpg.asset.json";
import cookiesAndCreamAsset from "@/assets/Cookies_and_cream_whey_protein.jpeg.asset.json";
import chocolateIsolateAsset from "@/assets/Chocolate_Whey_Protein_Isolate-2.jpeg.asset.json";
import chocolateIsolateTranslucentAsset from "@/assets/Chocolate_Whey_Protein_Isolate_translucent_option.jpeg.asset.json";
import strawberryIsolateAsset from "@/assets/Strawberry_Whey_Protein_Isolate-2.jpeg.asset.json";
import strawberryWheyAsset from "@/assets/Strawberry_Whey_Protein-2.jpeg.asset.json";
import vanillaWheyAsset from "@/assets/Vanilla_Whey_Protein-2.jpeg.asset.json";
import preWorkoutAsset from "@/assets/Preworkout_crop.jpg.asset.json";
import creatineAsset from "@/assets/Creatine_crop.jpg.asset.json";

export type Media = { src: string; width: number; height: number };

export const logo: Media = { src: logoAsset.url, width: 1091, height: 351 };
export const lineup: Media = { src: lineupAsset.url, width: 912, height: 663 };

export const productMedia: Record<string, Media> = {
  "Decadent Chocolate (5 lbs)": { src: chocolateWheyAsset.url, width: 1102, height: 1378 },
  "Cookies & Cream (5 lbs)": { src: cookiesAndCreamAsset.url, width: 844, height: 1231 },
  "Fresh Strawberry (5 lbs)": { src: strawberryWheyAsset.url, width: 844, height: 1234 },
  "Classic Vanilla (5 lbs)": { src: vanillaWheyAsset.url, width: 844, height: 1233 },
  "Chocolate Fudge": { src: chocolateIsolateAsset.url, width: 844, height: 1234 },
  "Sweet Strawberry": { src: strawberryIsolateAsset.url, width: 844, height: 1233 },
  "Voltrage Pre-Workout": { src: preWorkoutAsset.url, width: 456, height: 484 },
  "Pure Micronized Creatine": { src: creatineAsset.url, width: 443, height: 491 },
};

/** Secondary detail shots shown beneath a product card. */
export const productDetailMedia: Record<string, Media & { caption: string; alt: string }> = {
  "Chocolate Fudge": {
    src: chocolateIsolateTranslucentAsset.url,
    width: 450,
    height: 576,
    caption: "Alternate finish — translucent clear tub",
    alt: "Voltrage Chocolate Fudge Pure Whey Isolate in the translucent clear tub option",
  },
};

/** Representative shot for each category preview on the home page. */
export const categoryMedia: Record<string, Media> = {
  "whey-protein": { src: vanillaWheyAsset.url, width: 844, height: 1233 },
  "whey-isolate": { src: chocolateIsolateAsset.url, width: 844, height: 1234 },
  "pre-workout-creatine": { src: preWorkoutAsset.url, width: 456, height: 484 },
};
