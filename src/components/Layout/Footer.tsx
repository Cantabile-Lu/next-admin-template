import { FC } from "react";

import { Link } from "@/i18n";

interface Props {}

const data = [
    { key: "/about", label: "关于我们" },
    { key: "/", label: "首页" },
    { key: "/login", label: "登录" },
];
const Footer: FC<Props> = (props) => {
    return (
        <>
            <footer className={"grid h-[0.6rem] w-[4rem] grid-cols-3 bg-[#2b333e]"}>
                {data.map((item) => {
                    return (
                        <Link href={item.key} key={item.key} scroll={false}>
                            {item.label}
                        </Link>
                    );
                })}
            </footer>
        </>
    );
};

export default Footer;
