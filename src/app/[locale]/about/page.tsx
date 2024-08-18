"use client";
import { exit } from "@/app/[locale]/about/action";

interface Props {}

const App = () => {
    const loginOut = async () => {
        exit();
        console.log(`🚀🚀🚀🚀🚀-> in page.tsx on 5`);
    };
    return (
        <div>
            <button className={"w-[100px] bg-primary-color"} onClick={loginOut}>
                layout
            </button>

            {Array(100)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>{i}</div>
                ))}
        </div>
    );
};

export default App;
