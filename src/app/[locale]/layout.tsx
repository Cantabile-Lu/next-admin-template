import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import localezh_cn from "antd/locale/zh_CN";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
};

const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(50% - 8px)",
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
                <ConfigProvider locale={localezh_cn}>
                    <NextIntlClientProvider messages={messages}>
                        <AntdRegistry>
                            {/*<Layout style={layoutStyle}>*/}
                            {/*    <Sider width="25%" style={siderStyle}>*/}
                            {/*        Sider*/}
                            {/*    </Sider>*/}
                            {/*    <Layout>*/}
                            {/*        <Header style={headerStyle}>Header</Header>*/}
                            {/*        <Content style={contentStyle}>*/}
                            {/*            Content*/}
                            {/*        </Content>*/}
                            {/*        <Footer style={footerStyle}>Footer</Footer>*/}
                            {/*    </Layout>*/}
                            {/*</Layout>*/}
                            <div className="border-4"></div>
                            {children}
                        </AntdRegistry>
                    </NextIntlClientProvider>
                </ConfigProvider>
            </body>
        </html>
    );
}
