export interface Review {
  score: number;
  opinion: string;
}
export interface ProductInterface {
  brand: string;
  name: string;
  specifications: string;
  purpose: string;
  images: Array<string>;
  manufacturer: string;
  category: string;
  price: number;
  productCode: string;
  description: string;
  reviews: Array<Review>;
}
