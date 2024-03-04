export interface LocaleProps {
  params: { locale: string };
}

interface MetaTags {
  title: string;
  desc: string;
  url: string;
  locale: string;
  img?: string;
  alt?: string;
  type?: string;
  includeBrandName?: boolean;
}

export const generateMetaTags = ({
  title,
  desc,
  url,
  locale,
  img = "/images/home/opengraph-image.png",
  alt = "Invoice Generator",
  type = "website",
  includeBrandName = true,
}: MetaTags) => {
  title = `${title} ${includeBrandName ? "- Invoice Generator" : ""}`;
  return {
    title: title,
    description: desc,
    openGraph: {
      type: type,
      url: `${locale}${url}`,
      locale: locale,
      title: title,
      description: desc,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: alt,
        },
      ],
    },
    alternates: {
      canonical: url !== "/" ? `${locale}${url}` : `${locale}`,
      languages: {
        de: url !== "/" ? `/de${url}` : "/de",
        en: url !== "/" ? `/en${url}` : "/en",
        es: url !== "/" ? `/es${url}` : "/es",
        "x-default": url !== "/de" ? `/de${url}` : `/`,
      },
    },
  };
};
