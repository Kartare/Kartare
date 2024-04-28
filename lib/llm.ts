import { CompletionService } from "langxlang";
import { log } from "@logtail/next";
import { Day } from "@/app/models/day";
import { Location } from "@/app/models/location";

const llm = new CompletionService({ gemini: process.env.GOOGLE_GEMINI_API_KEY!, openai: "" });

export async function ConstructTrip(destination: string, duration: number, tripType?: string): Promise<Day[]> {

  const response = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    "You are a helpful travel assisant\nYou will be asked to give an itinerary for a trip, containing a destination and trip duration\nReturn it in the following format:\n***Day 1***\n**Morning**\n- Activity 1 name (41.9028, 12.4534)\n**Afternoon**\n- Activity 2 name (41.9028, 12.4534)\n**Evening**\n- Activity 3 name (41.9028, 12.4534)\nSuggest a maximum of 4 activities per day. For each activity, include the coordinates of the location (lat, long). When suggesting activities, take into account the distance between them should be reasonable.", //  System prompt 
    `Generate an itinerary for a ${tripType} to ${destination} for ${duration} days`,  //  User prompt
    null,
    {
      maxTokens: 450
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
        if (coords?.length == 3) {
          location = {
            lat: parseFloat(coords[1]),
            long: parseFloat(coords[2])
          }
        }

        // Add the activity to the last processed day.
        days[days.length - 1].activities.push({
          id: cr.text.indexOf(line),
          name: activity.replace(/\s?\(.*?\)/, "").trim(),
          location: location
        });
      }
    }
  });

  // Set start/end locations for each day.
  for (let dix = 0; dix < days.length; dix++) {
    let currentDay = days[dix];
    days[dix].startLocation = currentDay.activities[0].location;
    days[dix].endLocation = currentDay.activities[currentDay.activities.length - 1].location; days[dix].startLocation = currentDay.activities[0].location;
  }

  log.info("[LLM] objectified", { days: days });
  console.log(days);

  return days;
}