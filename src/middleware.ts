import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
export default createMiddleware({
    locales: locales,
    defaultLocale: locales[0],
});

export const config = {
    // todo use this to match the path
    matcher: ["/", "/(zh_CN|en_US)/:path*"],
};
