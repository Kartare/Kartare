import { Day } from "@/app/models/day";
import { Separator } from "@/components/ui/separator";
import Activities from "./activities";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DayListItem = ({ day }: { day: Day }) => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <h1 className="text-3xl flex-grow">Day {day.number.toString()}</h1>
                <div className="pr-4">
                    <Button variant={"default"} className="py-2 px-3">
                        <Trash2 width={16} height={16} />
                    </Button>
                </div>
            </div>
            <Activities activities={day.activities} />
            <p className="text-gray-400 text-sm mt-2">Distance traveled: {day.distance}km</p>
            <Separator className="mt-2 mb-4" />
        </div >
    )
}

export default DayListItem;
