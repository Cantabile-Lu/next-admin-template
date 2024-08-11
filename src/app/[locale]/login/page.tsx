import { Link } from "@/i18n";
import { FC } from "react";

interface Props {}

const Login: FC<Props> = (props) => {
    return (
      <div className={"flex h-[100%] flex-col items-center justify-center"}>
        <form action={"submittHandler"} method={"post"} className={"border-2 w-[100%] p-[20px]" +
          " flex" +
          " justify-center" +
          "  "}>
          <div>
            <div className={""}>
              <label htmlFor="userName" className={"w-[60px]  inline-block"} >用户名</label>
              <input id={"userName"} />
            </div>
            <div className={"mt-[20px]"}>
              <label htmlFor="password"  className={"w-[60px] inline-block"}>密码</label>
              <input id={"password"} />
            </div>
            <button type={"submit"} className={"border-[1px] mt-[10px] "}>click me</button>
          </div>

        </form>
      </div>

      // <div className={"flex h-[100%] flex-col items-center justify-center"}>
      //     <div className={"mb-3"}>login</div>
        //     <Link href={"/"}>return </Link>
        // </div>
    );
};

export default Login;
