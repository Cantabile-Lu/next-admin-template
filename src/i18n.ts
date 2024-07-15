import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const modulesFiles = require.context("../messages", true, /\.json$/);

// const fileReg = /(?<=\.\/)[^.]+(?=\.json)/g;
export const locales = modulesFiles.keys().map((modulePath: string) => {
    return modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
});

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) notFound();
    const file = (await import(`../messages/${locale}.json`)).default;
    return {
        messages: file,
    };
});
