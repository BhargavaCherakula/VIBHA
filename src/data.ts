import { Product, Review } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: "LW001",
    name: "Golden Bloom Anarkali",
    price: "₹3,499",
    originalPrice: "₹4,999",
    description: "A stunning golden-yellow Anarkali suit with intricate hand-embroidered floral motifs. Perfect for festive occasions.",
    sizes: ["S", "M", "L", "XL"],
    category: "Ethnic",
    images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800"]
  },
  {
    id: "LW002",
    name: "Midnight Silk Saree",
    price: "₹5,200",
    originalPrice: "₹6,500",
    description: "Deep midnight blue silk saree with silver zari border. Includes a matching unstitched blouse piece.",
    sizes: ["One Size"],
    category: "Ethnic",
    images: ["https://images.unsplash.com/photo-1610030469668-93530c17bc4d?q=80&w=800"]
  },
  {
    id: "LW003",
    name: "Pastel Meadow Kurti",
    price: "₹1,299",
    description: "Lightweight cotton kurti in a soft pastel green with delicate mirror work on the neckline.",
    sizes: ["S", "M", "L"],
    category: "Casual",
    images: ["https://images.unsplash.com/photo-1609144077382-7ea96ab84001?q=80&w=800"]
  },
  {
    id: "LW004",
    name: "Ruby Velvet Gown",
    price: "₹7,999",
    originalPrice: "₹9,999",
    description: "Floor-length ruby red velvet gown with a sweetheart neckline and subtle sequin detailing.",
    sizes: ["M", "L", "XL"],
    category: "Formal",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800"]
  },
  {
    id: "LW005",
    name: "Ivory Lace Wrap Dress",
    price: "₹2,800",
    description: "An elegant ivory wrap dress with delicate lace sleeves and a flattering silhouette for summer brunches.",
    sizes: ["S", "M", "L"],
    category: "Western",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800"]
  },
  {
    id: "LW006",
    name: "Emerald Chiffon Set",
    price: "₹4,100",
    originalPrice: "₹4,500",
    description: "Three-piece suit set in emerald green chiffon. Includes kurta, palazzo, and a matching dupatta.",
    sizes: ["S", "M", "L", "XL"],
    category: "Ethnic",
    images: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "R1",
    author: "Ananya Sharma",
    rating: 5,
    comment: "The Anarkali suite is even more beautiful in person! The fabric quality is exceptional.",
    date: "2024-03-15"
  },
  {
    id: "R2",
    author: "Priya V.",
    rating: 4,
    comment: "Perfect fit and very fast WhatsApp support. Highly recommended for festive wear.",
    date: "2024-03-10"
  },
  {
    id: "R3",
    author: "Meera Iyer",
    rating: 5,
    comment: "Lumina Boutique has the best collection of elegant ethnic wear. My go-to shop now!",
    date: "2024-02-28"
  }
];
