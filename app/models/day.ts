import { Activity } from "./activity";
import { Location } from "./location";

export interface Day {
    number: Number;
    activities: Activity[]
    startLocation?: Location;
    endLocation?: Location;
    distance?: number;
}