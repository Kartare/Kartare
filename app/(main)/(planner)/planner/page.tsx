"use client";

import { useMemo } from "react";
import Itinerary from "../_components/Itinerary";
import dynamic from "next/dynamic";
import { Day } from "@/app/models/day";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { staticStore } from "@/lib/staticStore";

export default function PlannerPage() {

    const days = staticStore.days;

    const Map = useMemo(() => dynamic(() =>
        import("../_components/map"),
        {
            loading: () => <p>Map is loading</p>,
            ssr: false
        }), [days]);

    return (
        // <div className="grid grid-cols-2 lg:grid- gap-0 h-full">
        <div className="flex flex-wrap h-full">
            <div className="lg:w-1/3 w-1/2 overflow-hidden h-[calc(100vh-4rem-1px)]">
                <Itinerary days={days} />
            </div>
            <div className="z-0 h-[calc(100vh-4rem-1px)] lg:w-2/3 w-1/2">
                <Map days={days} />
            </div>
            <Button className="fixed bottom-6 right-6" variant={"rounded"}>
                <PlusIcon width={24} height={24} />
            </Button>
        </div>
    )
}
