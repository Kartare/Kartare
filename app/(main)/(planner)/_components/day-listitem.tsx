import { Day } from "@/app/models/day";
import { Separator } from "@/components/ui/separator";
import Activities from "./activities";

const DayListItem = ({ day }: { day: Day }) => {

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl">Day {day.number.toString()}</h1>
            <Activities activities={day.activities} />
            <p className="text-gray-400 text-sm mt-2">Distance traveled: {day.distance}km</p>
            <Separator className="mt-2 mb-4" />
        </div>
    )
}

export default DayListItem;
