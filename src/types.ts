export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  sizes: string[];
  images: string[];
  category: 'Ethnic' | 'Western' | 'Formal' | 'Casual';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
