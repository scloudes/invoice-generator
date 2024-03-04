import { locales, localePrefix } from "@/navigation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", `/(${locales.join('|')})/:path*`],
};
