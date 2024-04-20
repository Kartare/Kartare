"use client";

import { useMemo } from "react";
import Itinerary from "../_components/Itinerary";
import dynamic from "next/dynamic";
import { Day } from "@/app/models/day";

const PlannerPage = () => {

    const days: Day[] = [
        {
            number: 1,
            startLocation: { lat: 52.21485365, long: 5.47814632396509 },
            endLocation: { lat: 57.046707, long: 9.935932 },
            distance: 200,
            activities: [
                {
                    id: 1,
                    name: "Legoland Billund",
                    location: { lat: 55.44479, long: 9.072040 },
                    price: 250
                }
            ]
        },
        {
            number: 2,
            startLocation: { lat: 57.046707, long: 9.935932 },
            endLocation: { lat: 58.084816, long: 7.594416 },
            distance: 400,
            activities: []
        },
        {
            number: 3,
            startLocation: { lat: 58.084816, long: 7.594416 },
            endLocation: { lat: 58.51878, long: 5.44676 },
            distance: 300,
            activities: []
        }
    ]


    const Map = useMemo(() => dynamic(() =>
        import("../_components/map"),
        {
            loading: () => <p>Map is loading</p>,
            ssr: false
        }), [days]);

    return (
        <div className="grid grid-cols-2 gap-0 h-full">
            <Itinerary days={days} />
            <div className="z-0 h-[calc(100vh-4rem-1px)]">
                <Map days={days} />
            </div>
        </div>
    )
}

export default PlannerPage;