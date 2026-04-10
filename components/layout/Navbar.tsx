"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Locale } from "@/lib/i18n";

type NavbarProps = {
  locale: Locale;
  labels: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
};

export function Navbar({ locale, labels }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const baseLinkClass =
    "text-base font-medium transition-all duration-200";
  const inactiveLinkClass = "text-slate-700 hover:text-brand-600";
  const activeLinkClass = "text-brand-600";
  const otherLocale: Locale = locale === "en" ? "vi" : "en";
  const otherLocaleFlag = otherLocale === "en" ? "🇺🇸" : "🇻🇳";
  const localizedPath = pathname && pathname.startsWith("/") ? pathname : `/${locale}`;
  const switchedPath = localizedPath.replace(/^\/(en|vi)(?=\/|$)/, `/${otherLocale}`);
  const homePath = `/${locale}`;
  const productsPath = `/${locale}/products`;
  const aboutPath = `/${locale}/about`;
  const contactPath = `/${locale}/contact`;

  const isActive = (href: string): boolean => {
    if (href === homePath) {
      return localizedPath === homePath;
    }
    return localizedPath === href || localizedPath.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between md:hidden">
          <Link href={`/${locale}`} className="inline-flex items-center">
            <Image src="/logo.svg" alt="LOCTITE Vietnam" width={160} height={40} priority />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-all duration-200 hover:border-brand-500 hover:text-brand-600"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-white p-4 md:hidden">
            <Link
              href={homePath}
              onClick={() => setMobileOpen(false)}
              className={`block ${baseLinkClass} ${isActive(homePath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.home}
            </Link>
            <Link
              href={productsPath}
              onClick={() => setMobileOpen(false)}
              className={`block ${baseLinkClass} ${isActive(productsPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.products}
            </Link>
            <Link
              href={aboutPath}
              onClick={() => setMobileOpen(false)}
              className={`block ${baseLinkClass} ${isActive(aboutPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.about}
            </Link>
            <Link
              href={contactPath}
              onClick={() => setMobileOpen(false)}
              className={`block ${baseLinkClass} ${isActive(contactPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.contact}
            </Link>
            <Link
              href={switchedPath}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-brand-500 hover:text-brand-600"
            >
              <span aria-hidden="true">{otherLocaleFlag}</span>
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        ) : null}

        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Link href={`/${locale}`} className="inline-flex items-center">
            <Image src="/logo.svg" alt="LOCTITE Vietnam" width={180} height={44} priority />
          </Link>
          <div className="flex items-center justify-center gap-8">
            <Link
              href={homePath}
              className={`${baseLinkClass} ${isActive(homePath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.home}
            </Link>
            <Link
              href={productsPath}
              className={`${baseLinkClass} ${isActive(productsPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.products}
            </Link>
            <Link
              href={aboutPath}
              className={`${baseLinkClass} ${isActive(aboutPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.about}
            </Link>
            <Link
              href={contactPath}
              className={`${baseLinkClass} ${isActive(contactPath) ? activeLinkClass : inactiveLinkClass}`}
            >
              {labels.contact}
            </Link>
          </div>
          <div className="flex justify-end">
            <Link
              href={switchedPath}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-brand-500 hover:text-brand-600"
            >
              <span aria-hidden="true">{otherLocaleFlag}</span>
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
