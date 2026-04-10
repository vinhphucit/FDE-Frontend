import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactEmailForm } from "@/components/sections/ContactEmailForm";
import { createTranslator, isLocale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = createTranslator(locale);
  return {
    title: t("contact.metaTitle")
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = createTranslator(locale);

  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <h1 className="text-4xl font-bold text-white">{t("contact.title")}</h1>
          <p className="mt-4 max-w-4xl text-xl leading-7 text-slate-100">{t("contact.description")}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t("contact.companyNameLabel")}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{t("contact.companyName")}</p>

            <div className="mt-8 space-y-2">
              <h2 className="text-xl font-bold text-slate-900">{t("contact.hanoiOfficeTitle")}</h2>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.addressLabel")}:</span> {t("contact.hanoiAddress")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.telLabel")}:</span> {t("contact.hanoiTel")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.faxLabel")}:</span> {t("contact.hanoiFax")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.hotlineLabel")}:</span> {t("contact.hanoiHotline")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.emailLabel")}:</span> {t("contact.hanoiEmail")}
              </p>
            </div>

            <div className="mt-8 space-y-2">
              <h2 className="text-xl font-bold text-slate-900">{t("contact.hqOfficeTitle")}</h2>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.addressLabel")}:</span> {t("contact.hqAddress")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.telLabel")}:</span> {t("contact.hqTel")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.faxLabel")}:</span> {t("contact.hqFax")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.hotlineLabel")}:</span> {t("contact.hqHotline")}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{t("contact.emailLabel")}:</span> {t("contact.hqEmail")}
              </p>
            </div>
          </article>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h2 className="border-b border-slate-200 px-6 py-4 text-lg font-semibold text-slate-900">{t("contact.mapTitle")}</h2>
            <iframe
              title={t("contact.mapTitle")}
              src="https://maps.google.com/maps?q=Duong%20O%20Hamlet%2C%20Phong%20Khe%20Commune%2C%20Bac%20Ninh%20City%2C%20Bac%20Ninh%20Province%2C%20Vietnam&z=14&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>

        <ContactEmailForm
          labels={{
            formTitle: t("contact.formTitle"),
            nameLabel: t("contact.nameLabel"),
            emailInputLabel: t("contact.emailInputLabel"),
            subjectLabel: t("contact.subjectLabel"),
            messageLabel: t("contact.messageLabel"),
            sendButton: t("contact.sendButton"),
            defaultSubject: t("contact.defaultSubject"),
            defaultMessage: t("contact.defaultMessage"),
            toEmail: t("contact.hanoiEmail")
          }}
        />
      </div>
    </section>
  );
}
