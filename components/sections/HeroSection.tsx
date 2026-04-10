import Link from "next/link";
import { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl shadow-sm">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative mx-auto max-w-3xl px-6 py-12 text-center sm:px-10 sm:py-16">
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          {t("home.hero.title")}
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{t("home.hero.description")}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-700"
          >
            {t("home.hero.primaryCta")}
          </Link>
          <Link
            href={`/${locale}/products`}
            className="inline-flex rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
          >
            {t("home.hero.secondaryCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
