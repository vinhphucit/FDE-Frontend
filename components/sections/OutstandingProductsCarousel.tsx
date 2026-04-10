"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Locale } from "@/lib/i18n";
import { Product } from "@/lib/products";

type OutstandingProductsCarouselProps = {
  locale: Locale;
  products: Product[];
  labels: {
    title: string;
    previous: string;
    next: string;
    viewDetails: string;
  };
};

export function OutstandingProductsCarousel({
  locale,
  products,
  labels
}: OutstandingProductsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionTick, setInteractionTick] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerView(3);
        return;
      }
      if (window.innerWidth >= 1024) {
        setItemsPerView(2);
        return;
      }
      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const maxStartIndex = Math.max(0, products.length - itemsPerView);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [interactionTick, maxStartIndex]);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxStartIndex));
  }, [maxStartIndex]);

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1));
    setInteractionTick((prev) => prev + 1);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    setInteractionTick((prev) => prev + 1);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">{labels.title}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrevious}
            aria-label={labels.previous}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 hover:border-brand-500 hover:text-brand-600"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={labels.next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-200 hover:border-brand-500 hover:text-brand-600"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${(activeIndex * 100) / itemsPerView}%)` }}
        >
          {products.map((product) => (
            <article key={product.slug} className="w-full shrink-0 px-0.5 sm:px-1" style={{ flexBasis: `${100 / itemsPerView}%` }}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <Link href={`/${locale}/products/${product.slug}`} className="block overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={700}
                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-[1.02] xl:h-64"
                  />
                </Link>
                <div className="mt-4 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{product.description}</p>
                  <div className="mt-6">
                    <Link
                      href={`/${locale}/products/${product.slug}`}
                      className="inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
                    >
                      {labels.viewDetails}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
