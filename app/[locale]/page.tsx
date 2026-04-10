import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { OutstandingProductsCarousel } from "@/components/sections/OutstandingProductsCarousel";
import { createTranslator, isLocale } from "@/lib/i18n";
import { getProducts } from "@/lib/products";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = createTranslator(locale);
  return {
    title: `LOCTITE Vietnam | ${t("home.hero.title")}`
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = createTranslator(locale);
  const products = getProducts();

  return (
    <div className="space-y-8">
      <HeroSection locale={locale} t={t} />
      <OutstandingProductsCarousel
        locale={locale}
        products={products}
        labels={{
          title: t("home.outstandingProducts.title"),
          previous: t("home.outstandingProducts.previous"),
          next: t("home.outstandingProducts.next"),
          viewDetails: t("home.outstandingProducts.viewDetails")
        }}
      />
    </div>
  );
}
