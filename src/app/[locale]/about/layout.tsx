import Layout from "@/components/Layout";
import { ReactNode } from "react";
export default async function PageLayout({
    top,
    children,
}: {
    top: ReactNode;
    children: ReactNode;
}) {
    return (
        <div>
            <Layout>
                {top}
                {children}
            </Layout>
        </div>
    );
}
