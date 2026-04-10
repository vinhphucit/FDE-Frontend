import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Navbar } from "@/components/layout/Navbar";
import { createTranslator, isLocale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = createTranslator(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        locale={locale}
        labels={{
          home: t("nav.home"),
          products: t("nav.products"),
          about: t("nav.about"),
          contact: t("nav.contact")
        }}
      />
      <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-10 sm:px-6 lg:px-10">{children}</main>
      <Footer t={t} />
      <FloatingContact
        phoneNumber={t("contact.hanoiHotline")}
        email={t("contact.hanoiEmail")}
        labels={{
          button: t("floatingContact.button"),
          panelTitle: t("floatingContact.panelTitle"),
          panelDescription: t("floatingContact.panelDescription"),
          contactName: t("floatingContact.contactName"),
          contactRole: t("floatingContact.contactRole"),
          sendRequest: t("floatingContact.sendRequest"),
          callPrefix: t("floatingContact.callPrefix"),
          close: t("floatingContact.close")
        }}
      />
    </div>
  );
}
