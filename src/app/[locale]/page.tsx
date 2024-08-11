import Layout from "@/components/Layout";
import { Link } from "@/i18n";

interface Props {}

const getData = async () => {
    const data = await fetch("http://localhost:3000/en_US/api");
    // console.log(`🚀🚀🚀🚀🚀-> in page.tsx on 8`, data.json());
};
const App = async () => {
    getData();
    const handler = () => {
        console.log(`🚀🚀🚀🚀🚀-> in page.tsx on 7`);
    };
    return (
        <Layout>
            <div className={"grid grid-cols-3 gap-[20px]"}>
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <Link key={i} href={`/photos/${i}`} passHref>
                            <div
                                key={i}
                                className={`border-1 flex h-[70px] items-center justify-center bg-amber-800`}
                            >
                                {i}
                            </div>
                        </Link>
                    ))}
            </div>
        </Layout>
    );
};

export default App;
