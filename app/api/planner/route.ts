import { ConstructTrip } from "@/lib/llm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { log } from "@logtail/next";

export async function POST(req: Request) {

    const { isAuthenticated } = await getKindeServerSession();
    if (!(await isAuthenticated())) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {

        const { destination, duration, type } = await req.json();

        const route = await ConstructTrip(destination, duration, type || "citytrip");
        console.log(route)
        log.info("[PLANNER] [end]", { route: route });
        return NextResponse.json(route);
    }
    catch (e) {
        console.error(e);
        log.error("[PLANNER] [error]", { error: e });
        return new NextResponse("Something went wrong while calculating the trip", { status: 500 })
    }
}
