import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { createTranslator, isLocale } from "@/lib/i18n";
import { getProducts } from "@/lib/products";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

function buildPagination(currentPage: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = createTranslator(locale);
  return {
    title: t("products.list.metaTitle")
  };
}

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const { locale } = await params;
  const { page } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = createTranslator(locale);
  const products = getProducts();
  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));
  const rawPage = Number(page ?? "1");
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? Math.min(rawPage, totalPages) : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const paginationItems = buildPagination(currentPage, totalPages);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">{t("products.list.title")}</h1>
        <p className="max-w-4xl text-base leading-7 text-slate-600">{t("products.list.description")}</p>
      </div>
      <ProductGrid locale={locale} products={pageProducts} t={t} />
      <div className="flex items-center justify-center gap-2 px-4 py-4">
        <Link
          href={`/${locale}/products?page=${Math.max(1, currentPage - 1)}`}
          aria-label={t("products.list.previousPage")}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold transition-all duration-200 ${
            currentPage === 1
              ? "pointer-events-none cursor-not-allowed text-slate-400"
              : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
          }`}
        >
          ←
        </Link>
        {paginationItems.map((item, index) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-1 text-sm text-slate-500">
              ...
            </span>
          ) : (
            <Link
              key={`page-${item}`}
              href={`/${locale}/products?page=${item}`}
              className={`inline-flex h-9 min-w-9 items-center justify-center border-b-2 px-2 text-sm font-semibold transition-all duration-200 ${
                item === currentPage
                  ? "border-brand-600 text-brand-700"
                  : "border-transparent text-slate-500 hover:text-brand-700"
              }`}
            >
              {item}
            </Link>
          )
        )}
        <Link
          href={`/${locale}/products?page=${Math.min(totalPages, currentPage + 1)}`}
          aria-label={t("products.list.nextPage")}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold transition-all duration-200 ${
            currentPage === totalPages
              ? "pointer-events-none cursor-not-allowed text-slate-400"
              : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
          }`}
        >
          →
        </Link>
      </div>
    </section>
  );
}
