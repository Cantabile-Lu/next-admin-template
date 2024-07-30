import { FC } from "react";

import { Link } from "@/i18n";

interface Props {}

const data = [
    { key: "/about", label: "关于我们" },
    { key: "/", label: "首页" },
];
const Footer: FC<Props> = (props) => {
    return (
        <>
            <footer className={"h-[0.6rem] w-[4rem] bg-[red]"}>
                {data.map((item) => {
                    return (
                        <Link href={item.key} key={item.key}>
                            {item.label}
                        </Link>
                    );
                })}
            </footer>
        </>
    );
};

export default Footer;
