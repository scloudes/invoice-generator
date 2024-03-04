import { locales, localePrefix } from "@/navigation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  localePrefix,
  localeDetection: true,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|es|de)/:path*"],
};
