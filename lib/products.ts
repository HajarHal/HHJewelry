export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  category: string;
  colors: string[];
  material: string;
  stock: number;
  featured?: boolean;
};

// Prices are in Moroccan Dirham (MAD).
// Images live in /public/products as self-contained SVGs so the site
// looks complete with zero external dependencies. Swap in real photos
// later by replacing the files (keep the same names) or pointing
// imageUrl to a hosted URL (Cloudinary, etc).
export const products: Product[] = [
  {
    id: 1,
    name: "Lina Silk Scarf",
    slug: "lina-silk-scarf",
    description:
      "A weightless square of pure mulberry silk, hand-rolled at the edges. Drapes like water and finishes any look with quiet confidence.",
    price: 290,
    oldPrice: 360,
    imageUrl: "/products/lina-silk-scarf.svg",
    category: "Scarves",
    colors: ["Champagne", "Ivory", "Noir"],
    material: "100% Mulberry Silk",
    stock: 24,
    featured: true,
  },
  {
    id: 2,
    name: "Yasmine Pearl Earrings",
    slug: "yasmine-pearl-earrings",
    description:
      "Freshwater pearls set on 18k gold-plated drops. Understated by daylight, luminous by candlelight.",
    price: 340,
    imageUrl: "/products/yasmine-pearl-earrings.svg",
    category: "Jewelry",
    colors: ["Gold", "Rose Gold"],
    material: "Freshwater Pearl · 18k Gold Plate",
    stock: 18,
    featured: true,
  },
  {
    id: 3,
    name: "Selma Leather Clutch",
    slug: "selma-leather-clutch",
    description:
      "A structured evening clutch in full-grain leather with a magnetic clasp and a slim detachable chain. Holds the essentials, nothing more.",
    price: 540,
    oldPrice: 620,
    imageUrl: "/products/selma-leather-clutch.svg",
    category: "Bags",
    colors: ["Camel", "Noir", "Bordeaux"],
    material: "Full-grain Leather",
    stock: 12,
    featured: true,
  },
  {
    id: 4,
    name: "Nour Gold Bangle",
    slug: "nour-gold-bangle",
    description:
      "A clean, sculptural bangle with a brushed champagne finish. Wear one, or stack a few — it was made for both.",
    price: 220,
    imageUrl: "/products/nour-gold-bangle.svg",
    category: "Jewelry",
    colors: ["Champagne Gold"],
    material: "18k Gold Plate over Brass",
    stock: 30,
    featured: true,
  },
  {
    id: 5,
    name: "Amal Cashmere Wrap",
    slug: "amal-cashmere-wrap",
    description:
      "An oversized wrap in feather-soft cashmere blend. Light enough for summer evenings, warm enough for winter mornings.",
    price: 480,
    imageUrl: "/products/amal-cashmere-wrap.svg",
    category: "Scarves",
    colors: ["Beige", "Dove Grey", "Ivory"],
    material: "Cashmere Blend",
    stock: 15,
  },
  {
    id: 6,
    name: "Rim Silk Hair Bow",
    slug: "rim-silk-hair-bow",
    description:
      "A generous silk bow on a secure clip. The smallest detail that makes a whole look feel intentional.",
    price: 130,
    oldPrice: 160,
    imageUrl: "/products/rim-silk-hair-bow.svg",
    category: "Accessories",
    colors: ["Champagne", "Noir", "Ivory"],
    material: "Silk Satin",
    stock: 40,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatMAD(value: number): string {
  return `${value.toLocaleString("en-US")} MAD`;
}
