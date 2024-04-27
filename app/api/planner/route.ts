import { ConstructTrip } from "@/lib/llm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { isAuthenticated } = await getKindeServerSession();
    if (!(await isAuthenticated())) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {

        const { destination, duration } = await req.json();

        const route = ConstructTrip(destination, duration);
    }
    catch (e) {
        console.error(e);
        return new NextResponse("Something went wrong with calculation route", { status: 500 })
    }
}
