import { Separator } from "@/components/ui/separator";
import DayListItem from "./day-listitem";
import { Day } from "@/app/models/day";

const Itinerary = () => {

    const days: Day[] = [
        {
            number: 1,
            startLocation: { lat: 52.21485365, long: 5.47814632396509 },
            endLocation: { lat: 57.046707, long: 9.935932 },
            distance: 200,
            activities: [
                {
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

    return (
        <div className="flex flex-col z-10 bg-white ml-2 mt-4">
            {days.map((day) => {
                return (
                    <DayListItem key={day.number.toString()} day={day} />
                )
            })}
        </div>
    )
}

export default Itinerary;