import { Activity } from "@/app/models/activity";
import { Dot } from "lucide-react";

const ActivityListItem = ({ activity }: { activity: Activity }) => {

    return (
        <div className="flex flex-row items-center">
            <Dot />
            <span className="text-xl">{activity.name}</span>
            <span className="text-sm ml-4">&euro; {activity.price}</span>
        </div>
    )
}

export default ActivityListItem;
