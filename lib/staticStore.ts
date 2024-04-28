import { Day } from "../app/models/day";

interface Store {
    days: Day[]
}

export const staticStore: Store = {
    days: []
}
