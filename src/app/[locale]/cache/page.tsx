import config from "@config";
import Image from "next/image";
export const metadata = {
    title: "缓存",
};
interface Props {}
const getData = async (): Promise<{ id: number; url: string }[]> => {
    const res = await fetch(`${config.base_url}/v1/images/search`, {});
    return res.json();
};

const CardImage = async () => {
    const data = await getData();
    return (
        <>
            <p>{data[0].id}</p>
            <Image height={200} width={200} src={data[0].url} alt={"dark"} />
        </>
    );
};
const CachePage = async (props: Props) => {
    return (
        <div>
            <CardImage />
            <CardImage />
        </div>
    );
};

export default CachePage;
