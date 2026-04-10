import products from "@/data/products.json";

export type Product = {
  name: string;
  description: string;
  image: string;
  images?: string[];
  slug: string;
};

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductGallery(product: Product): string[] {
  if (product.images && product.images.length > 0) {
    return product.images;
  }

  return [
    product.image,
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80"
  ];
}
