import { ReactNode } from "react";

export const metadata = {
    title: "中间件拦截",
};
export default async function PageLayout({
    top,
    children,
}: {
    top: ReactNode;
    children: ReactNode;
}) {
    return (
        <div>
            {top}
            {children}
        </div>
    );
}
