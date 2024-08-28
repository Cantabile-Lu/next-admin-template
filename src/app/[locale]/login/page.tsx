"use client";
import { loginAction } from "@/app/[locale]/login/action";
import { usePathname } from "@/i18n";

interface Props {}

const Login = (props) => {
    const pathname = usePathname();
    // const [state, formaction] = useActionState(loginAction, null);
    const submit = async (formData: FormData) => {
        const res = await loginAction(formData, pathname);
        console.log(`🚀🚀🚀🚀🚀-> in page.tsx on 12`, res);
        // if (!res?.success) {
        //     alert(res.message);
        // }
        return res;
    };
    return (
        <div className={"flex h-[100%] items-center justify-center"}>
            <form action={submit} className={"w-[400px]"}>
                <div
                    className={
                        "flex w-full rounded-[20px] p-[20px] transition-all duration-1000" +
                        " focus-within:bg-primary-color"
                    }
                >
                    <label
                        htmlFor="userName"
                        className={"inline-block w-[60px] text-right" + " mr-[10px]"}
                    >
                        用户名
                    </label>
                    <input id={"userName"} name={"userName"} className={"flex-1 text-[#000]"} />
                </div>
                <div
                    className={
                        "mt-[20px] flex w-full rounded-[20px] p-[20px] transition-all " +
                        " duration-1000 focus-within:bg-primary-color"
                    }
                >
                    <label
                        htmlFor="password"
                        className={"inline-block w-[60px] text-right" + " mr-[10px]"}
                    >
                        密码
                    </label>
                    <input
                        type={"password"}
                        id={"password"}
                        className={"flex-1 text-[#000]"}
                        name={"password"}
                    />
                </div>
                <div className={"flex justify-center"}>
                    <button
                        type={"submit"}
                        className={"mt-[10px] bg-primary-color p-[5px]" + " rounded-[5px]"}
                    >
                        click me
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
