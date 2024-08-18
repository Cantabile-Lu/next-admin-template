import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { FC, PropsWithChildren } from "react";

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = (props) => {
    const { children } = props;
    return (
        <div>
            <Header></Header>
            <main className={"scrollbar-hide"}>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
