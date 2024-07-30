import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import "../globals.css";
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
                    <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}
