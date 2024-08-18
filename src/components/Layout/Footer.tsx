import { FC } from "react";

import { Link } from "@/i18n";

interface Props {}

const data = [
    { key: "/about", label: "中间件路由拦截" },
    { key: "/", label: "拦截路由" },
    { key: "/cache", label: "缓存" },
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
