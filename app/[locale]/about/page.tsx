import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createTranslator, isLocale } from "@/lib/i18n";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = createTranslator(locale);
  return {
    title: t("about.metaTitle")
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = createTranslator(locale);

  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-16 text-center sm:px-10 sm:py-20 md:min-h-[540px] md:py-24">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {t("about.slogan")}
          </h1>
          <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">{t("about.title")}</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100 sm:text-lg">{t("about.description")}</p>
        </div>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-xl font-bold text-slate-900">{t("about.leaderSectionTitle")}</h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt={t("about.leaderName")}
              width={900}
              height={900}
              className="h-72 w-full object-cover md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold text-slate-900">{t("about.leaderName")}</p>
            <p className="mt-1 text-base font-medium text-brand-600">{t("about.leaderRole")}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{t("about.leaderBio")}</p>
          </div>
        </div>
      </article>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900">{t("about.visionTitle")}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{t("about.visionText")}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900">{t("about.targetTitle")}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{t("about.targetText")}</p>
        </article>
      </div>
    </section>
  );
}
