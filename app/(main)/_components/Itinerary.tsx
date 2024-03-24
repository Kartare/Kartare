import { Separator } from "@/components/ui/separator";

const Itinerary = () => {

    return (
        <div className="flex flex-col z-10 bg-white">
            <div>
                <h1 className="text-3xl">Day 1</h1>
                <Separator className="my-4" />
            </div>
            <div>
                <h1 className="text-3xl">Day 2</h1>
                <Separator className="my-4" />
            </div>
            <div>
                <h1 className="text-3xl">Day 3</h1>
                <Separator className="my-4" />
            </div>
        </div>
    )
}

export default Itinerary;