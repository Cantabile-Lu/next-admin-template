"use server";

import { redirect } from "@/i18n";
import { cookies } from "next/headers";

export const exit = async () => {
    cookies().delete("Token");
    redirect("/login");
};
