import { NextResponse } from "next/server";

export function GET() {
    console.log(`🚀🚀🚀🚀🚀-> in route.ts on 4`, "get 触发");
    return NextResponse.json({ data: ["1", "2"], message: "success" });
}
