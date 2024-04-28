import { Day } from "../app/models/day";

interface Store {
    days: Day[]
}

export const staticStore: Store = {
    days: [
        {
            number: 1,
            startLocation: { lat: 52.21485365, long: 5.47814632396509 },
            endLocation: { lat: 57.046707, long: 9.935932 },
            distance: 200,
            activities: [
                {
                    id: 1,
                    name: "Legoland Billund",
                    location: { lat: 55.44479, long: 9.072040 },
                    price: 250
                }
            ]
        },
        {
            number: 2,
            startLocation: { lat: 57.046707, long: 9.935932 },
            endLocation: { lat: 58.084816, long: 7.594416 },
            distance: 400,
            activities: []
        },
        {
            number: 3,
            startLocation: { lat: 58.084816, long: 7.594416 },
            endLocation: { lat: 58.51878, long: 5.44676 },
            distance: 300,
            activities: []
        },
        {
            number: 4,
            startLocation: { lat: 58.084816, long: 7.594416 },
            endLocation: { lat: 58.51878, long: 5.44676 },
            distance: 400,
            activities: []
        }
    ]

}
