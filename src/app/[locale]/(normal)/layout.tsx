import Header from "@/components/Layout/Header";
import { FC, PropsWithChildren } from "react";
interface Props {}

const NormalLayout: FC<PropsWithChildren<Props>> = (props) => {
    console.count("NormalLayout");
    const { children } = props;
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default NormalLayout;
