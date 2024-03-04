import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es", "de"] as const;
export const localeLabels = {
  en: "English",
  es: "Español",
  de: "Deutsch",
};
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
