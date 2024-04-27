import { Location } from "./location";

export interface Activity {
    id: number;
    name: string;
    price?: number
    location?: Location
}