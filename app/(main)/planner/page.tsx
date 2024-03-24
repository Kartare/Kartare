"use client";

import { useMemo } from "react";
import Itinerary from "../_components/Itinerary";
import dynamic from "next/dynamic";


const PlannerPage = () => {

    const Map = useMemo(() => dynamic(() =>
        import("../_components/map"),
        {
            loading: () => <p>Map is loading</p>,
            ssr: false
        }), []);

    return (
        <div className="grid grid-cols-2 gap-0 h-full">
            <Itinerary/>
            <div className="z-0 h-[calc(100vh-4rem-1px)]">
                <Map />
            </div>
        </div>
    )
}

export default PlannerPage;