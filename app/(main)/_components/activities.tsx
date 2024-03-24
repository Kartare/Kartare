import { Activity } from "@/app/models/activity";
import ActivityListItem from "./activty-listitem";

const Activities = ({ activities }: { activities: Activity[] }) => {

    return (
        <div className="flex flex-col mt-2">
            {activities.length === 0 && (
                <span>No activities planned</span>
            )}
            
            {activities.map((activity) => {
                return (
                    <ActivityListItem activity={activity} />
                )
            })}
        </div>
    )
}

export default Activities;
