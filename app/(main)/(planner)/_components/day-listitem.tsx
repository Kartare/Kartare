import { Day } from "@/app/models/day";
import { Separator } from "@/components/ui/separator";
import Activities from "./activities";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const DayListItem = ({ day }: { day: Day }) => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <h1 className="text-3xl flex-grow">Day {day.number.toString()}</h1>
                <div className="pr-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"ghost"}>
                                <EllipsisVertical width={16} height={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="end">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Delete
                                    <DropdownMenuShortcut>D</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <Activities activities={day.activities} />
            <p className="text-gray-400 text-sm mt-2">Distance traveled: {day.distance}km</p>
            <Separator className="mt-2 mb-4" />
        </div >
    )
}

export default DayListItem;
