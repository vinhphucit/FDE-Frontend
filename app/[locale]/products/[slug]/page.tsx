import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailViewer } from "@/components/sections/ProductDetailViewer";
import { createTranslator, isLocale } from "@/lib/i18n";
import { getProductBySlug, getProductGallery, getProducts } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const product = getProductBySlug(slug);
  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | LOCTITE Vietnam`,
    description: product.description
  };
}

export function generateStaticParams() {
  return getProducts().map((product) => ({
    slug: product.slug
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const t = createTranslator(locale);
  const gallery = getProductGallery(product);

  return (
    <article className="space-y-8">
      <Link
        href={`/${locale}/products`}
        className="inline-flex text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        {t("products.detail.back")}
      </Link>
      <ProductDetailViewer locale={locale} product={product} gallery={gallery} labels={{ cta: t("products.detail.cta") }} />
    </article>
  );
}
