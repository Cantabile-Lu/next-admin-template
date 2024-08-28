import Layout from "@/components/Layout";
import { FC, PropsWithChildren } from "react";
interface Props {}

const ExpanmLayout: FC<PropsWithChildren<Props>> = (props) => {
    const { children } = props;
    return <Layout>{children}</Layout>;
};

export default ExpanmLayout;
