type FooterProps = {
  t: (key: string) => string;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 text-center text-lg text-slate-600 sm:px-6 lg:px-10">
        <p>{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}
