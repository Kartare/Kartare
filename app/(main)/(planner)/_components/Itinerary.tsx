import DayListItem from "./day-listitem";
import { Day } from "@/app/models/day";

const Itinerary = ({ days }: { days: Day[] }) => {

    return (
        <div className="flex flex-col z-10 bg-white ml-2 pt-4 overflow-y-auto h-full">
            {days.map((day) => {
                return (
                    <DayListItem key={day.number.toString()} day={day} />
                )
            })}
        </div>
    )
}

export default Itinerary;