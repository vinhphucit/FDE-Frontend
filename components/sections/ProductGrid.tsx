import { Locale } from "@/lib/i18n";
import { Product } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

type ProductGridProps = {
  locale: Locale;
  products: Product[];
  t: (key: string) => string;
};

export function ProductGrid({ locale, products, t }: ProductGridProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} locale={locale} product={product} t={t} />
      ))}
    </section>
  );
}
