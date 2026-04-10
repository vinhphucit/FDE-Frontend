"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Locale } from "@/lib/i18n";
import { Product } from "@/lib/products";

type ProductDetailViewerProps = {
  locale: Locale;
  product: Product;
  gallery: string[];
  labels: {
    cta: string;
  };
};

export function ProductDetailViewer({ locale, product, gallery, labels }: ProductDetailViewerProps) {
  const normalizedGallery = useMemo(() => {
    const unique = Array.from(new Set(gallery));
    return unique.length > 0 ? unique : [product.image];
  }, [gallery, product.image]);

  const [selectedImage, setSelectedImage] = useState(normalizedGallery[0]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-slate-900">{product.name}</h1>
          <p className="text-base leading-7 text-slate-600">{product.description}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            {labels.cta}
          </Link>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              src={selectedImage}
              alt={product.name}
              width={1200}
              height={900}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {normalizedGallery.map((imageUrl, index) => {
              const isSelected = selectedImage === imageUrl;
              return (
                <button
                  key={`${imageUrl}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(imageUrl)}
                  className={`overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    isSelected ? "border-brand-600 ring-2 ring-brand-100" : "border-slate-200 hover:border-brand-300 hover:shadow-sm"
                  }`}
                >
                  <Image
                    src={imageUrl}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={240}
                    height={160}
                    className="h-16 w-full object-cover sm:h-20"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
