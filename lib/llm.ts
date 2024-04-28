import { CompletionService } from "langxlang";
import { log } from "@logtail/next";
import { Day } from "@/app/models/day";
import { Location } from "@/app/models/location";

const llm = new CompletionService({ gemini: process.env.GOOGLE_GEMINI_API_KEY!, openai: "" });

export async function ConstructTrip(destination: string, duration: number, travelMode?: string): Promise<Day[]> {

  const response = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    "You are a helpful travel assisant\nYou will be asked to give an itinerary for a trip, containing a destination and trip duration\nReturn it in the following format:\n***Day 1***\n**Morning**\n- Activity 1 name (lat, long)\n**Afternoon**\n- Activity 2 name (lat, long)\n**Evening**\n- Activity 3 name (lat, long)\nSuggest a maximum of 4 activities per day. For each activity, include the coordinates of the location (lat, long).", //  System prompt 
    `Generate an itinerary for a trip to ${destination} for ${duration} days`,  //  User prompt
    null,
    {
      maxTokens: 400,
    }
  )
  log.info("[LLM] llm response", { response: response });

  const days: Day[] = [];

  const cr = response[0];

  cr.text.split('\n').forEach((line) => {
    console.log("[LLM] completion response", { line: line });

    if (line.startsWith("***")) {
      days.push({
        number: parseFloat(line.match(/\d+/)![0]),
        activities: []
      });
    }
    else if (line != "") {

      // Skip day-part annotation (for now)
      if (!line.startsWith("**")) {

        const activity = line.substring(2);
        let location: Location | undefined = undefined;

        // Extract the coords of the location (if present).
        const coordsRegex = /\(([-+]?\d*\.?\d+), ([-+]?\d*\.?\d+)\)/;
        const coords = activity.match(coordsRegex);
        if (coords?.length == 2) {
          location = {
            lat: parseFloat(coords[1]),
            long: parseFloat(coords[2])
          }
        }

        days[days.length - 1].activities.push({
          id: cr.text.indexOf(line),
          name: activity,
          location: location
        })
      }
    }
  });

  log.info("[LLM] objectified", { days: days });
  console.log(days);

  return days;
}