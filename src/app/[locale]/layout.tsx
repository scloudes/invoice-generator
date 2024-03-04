import { LocaleProps } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { Outfit } from "next/font/google";

const font = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: LocaleProps) {
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("Meta.title"),
    description: t("Meta.desc"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <head>
        <meta name="author" content="Wastics" />
        <meta name="copyright" content="Wastics" />
        <meta httpEquiv="content-language" content={locale} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta lang={locale} />
      </head>
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
