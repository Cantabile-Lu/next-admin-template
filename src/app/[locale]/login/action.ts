"use server";
import { redirect } from "@/i18n";
import { cookies } from "next/headers";

export const loginAction = async (formData: FormData, path: string) => {
    const username = formData.get("userName");
    const password = formData.get("password");
    if (username === "admin" && password === "111111") {
        cookies().set("Token", "next-learn");
        redirect(path === "/login" ? "/" : path);
        return {
            success: true,
            message: "登录成功",
        };
    } else {
        return {
            success: false,
            message: "用户名或密码错误",
        };
    }
    return undefined;
};
