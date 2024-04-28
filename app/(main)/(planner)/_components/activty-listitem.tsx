import { Activity } from "@/app/models/activity";

const ActivityListItem = ({ activity }: { activity: Activity }) => {

    return (
        <div className="flex flex-row items-start">
            <ul className="list-disc pl-5">
                <li>
                    <div className="flex flex-row items-center">
                        <span className="text-xl">{activity.name}</span>
                        {activity.price && (
                            <span className="text-sm ml-4">&euro; {activity.price}</span>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ActivityListItem;
