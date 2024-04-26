import { Day } from "../app/models/day";

interface Store {
    days: Day[]
}

export const store: Store = {
    days: []
}
