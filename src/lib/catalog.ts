export type Category = "iphone" | "samsung" | "playstation" | "gadgets";

export type Product = {
  id: string;
  name: string;
  category: Category;
  blurb: string;
  image: string;
  note: string;
};

export const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "iphone", label: "iPhone" },
  { id: "samsung", label: "Samsung" },
  { id: "playstation", label: "PlayStation" },
  { id: "gadgets", label: "Gadgets" },
];

export const PRODUCTS: Product[] = [
  {
    id: "iphone-17",
    name: "iPhone 17",
    category: "iphone",
    blurb: "The new everyday iPhone, in stock at the shop.",
    image: "/catalog/iphone.jpg",
    note: "New arrival",
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iphone",
    blurb: "Pro camera and a brighter display. Ask us which storage we have.",
    image: "/catalog/iphone-pro.jpg",
    note: "Pro",
  },
  {
    id: "galaxy-s26",
    name: "Galaxy S26",
    category: "samsung",
    blurb: "The current Galaxy S series. Original and sealed.",
    image: "/catalog/galaxy-s.jpg",
    note: "Samsung",
  },
  {
    id: "galaxy-s26-ultra",
    name: "Galaxy S26 Ultra",
    category: "samsung",
    blurb: "Large display, S Pen, and a full camera set.",
    image: "/catalog/galaxy.jpg",
    note: "Ultra",
  },
  {
    id: "ps5",
    name: "PlayStation 5",
    category: "playstation",
    blurb: "Disc and digital consoles, plus extra controllers.",
    image: "/catalog/console.jpg",
    note: "Console",
  },
  {
    id: "ps-games",
    name: "PS5 games",
    category: "playstation",
    blurb: "New and popular titles. Tell us the game you want.",
    image: "/catalog/games.jpg",
    note: "Games",
  },
  {
    id: "earbuds",
    name: "Wireless earbuds",
    category: "gadgets",
    blurb: "Everyday buds for calls, music, and commuting.",
    image: "/catalog/earbuds.jpg",
    note: "Audio",
  },
  {
    id: "accessories",
    name: "Cases, cables & power",
    category: "gadgets",
    blurb: "Cases, braided cables, and power banks for iPhone and Galaxy.",
    image: "/catalog/accessories.jpg",
    note: "Accessories",
  },
];

export const WHATSAPP = "2349132083551";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const ADDRESS = {
  shop: "Shop 3, City View Mall",
  street: "Nnebisi Road, directly opposite Konwea Plaza",
  city: "Asaba, Delta State",
};
