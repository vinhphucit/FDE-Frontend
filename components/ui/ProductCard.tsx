import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { Product } from "@/lib/products";

type ProductCardProps = {
  locale: Locale;
  product: Product;
  t: (key: string) => string;
};

export function ProductCard({ locale, product, t }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/${locale}/products/${product.slug}`} className="block">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={500}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <Link
          href={`/${locale}/products/${product.slug}`}
          className="inline-flex text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          {t("products.card.viewDetails")}
        </Link>
      </div>
    </article>
  );
}
