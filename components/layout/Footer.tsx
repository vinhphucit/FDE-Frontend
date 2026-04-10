type FooterProps = {
  t: (key: string) => string;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/90">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-10 text-center text-base text-slate-600 sm:px-6 lg:px-10">
        <p>{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}
