import createMiddleware from "next-intl/middleware";
import type { NextFetchEvent } from "next/dist/server/web/spec-extension/fetch-event";
import { NextRequest, NextResponse } from "next/server";
import { locales } from "./i18n";

export function stackMiddleware(functions: any[] = [], index = 0) {
    const current = functions[index];
    if (current) {
        const next = stackMiddleware(functions, index + 1);
        return current(next);
    }
    return () => NextResponse.next();
}

function localMiddleware() {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const handleI18nRouting = createMiddleware({
            locales: locales,
            defaultLocale: locales[0],
        });
        return handleI18nRouting(request);
    };
}
const whiteRouter = ["about"];
function routeMiddleware(next) {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const [, locale, ...segments] = request.nextUrl.pathname.split("/");
        const flag = whiteRouter.includes(segments[0]);
        // 有token 则 可以跳转， 否则跳转登录页
        const isLogin = request.cookies.get("Token")?.value;
        if (flag && !isLogin) {
            request.nextUrl.pathname = `/${locale}/login`;
        }
        return next(request, _next);
    };
}

export default stackMiddleware([routeMiddleware, localMiddleware]);

export const config = {
    // todo use this to match the path
    matcher: ["/", "/(zh_CN|en_US)/:path*"],
};
