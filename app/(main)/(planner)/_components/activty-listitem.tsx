import { Activity } from "@/app/models/activity";
import { Separator } from "@/components/ui/separator";

const ActivityListItem = ({ activity }: { activity: Activity }) => {

    return (
        <div className="flex flex-col">
            <span className="text-xl">{activity.name}</span>
            <span className="text-sm">&euro; {activity.price}</span>
            <Separator className="mt-2 mb-4" />
        </div>
    )
}

export default ActivityListItem;
