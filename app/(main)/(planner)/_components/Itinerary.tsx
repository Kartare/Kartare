import { Separator } from "@/components/ui/separator";
import DayListItem from "./day-listitem";
import { Day } from "@/app/models/day";

const Itinerary = ({ days }: { days: Day[] }) => {

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