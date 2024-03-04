import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProps } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: LocaleProps) {
  const t = await getTranslations({ locale, namespace: "Home.Meta" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="author" content="scloudes" />
        <meta name="copyright" content="scloudes" />
        <meta httpEquiv="content-language" content={locale} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta lang={locale} />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
