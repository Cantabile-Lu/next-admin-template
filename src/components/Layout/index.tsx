import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { FC, PropsWithChildren } from "react";

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = (props) => {
    const { children } = props;
    return (
        <div style={{ transform: "translateX(200px)" }}>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
