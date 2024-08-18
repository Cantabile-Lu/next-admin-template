import Layout from "@/components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import "../globals.css";

export const metadata = {
    title: "next - learn",
};
export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();
    return (
        <html>
            <body>
                <div id="app">
                    <NextIntlClientProvider messages={messages}>
                        <Layout>{children}</Layout>
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}
