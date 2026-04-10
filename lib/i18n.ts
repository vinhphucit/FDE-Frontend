import enMessages from "@/messages/en.json";
import viMessages from "@/messages/vi.json";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

type MessageTree = Record<string, string | MessageTree>;

const dictionaries: Record<Locale, MessageTree> = {
  en: enMessages,
  vi: viMessages
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): MessageTree {
  return dictionaries[locale];
}

export function createTranslator(locale: Locale) {
  const dictionary = getDictionary(locale);

  return (key: string): string => {
    const value = key.split(".").reduce<string | MessageTree | undefined>((acc, segment) => {
      if (!acc || typeof acc === "string") {
        return undefined;
      }
      return acc[segment];
    }, dictionary);

    return typeof value === "string" ? value : key;
  };
}
