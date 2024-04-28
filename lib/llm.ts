import { CompletionService } from "langxlang";
import { log } from "@logtail/next";
import { Day } from "@/app/models/day";

const llm = new CompletionService({ gemini: process.env.GOOGLE_GEMINI_API_KEY!, openai: "" });

export async function ConstructTrip(destination: string, duration: number, travelMode?: string): Promise<Day[]> {

  const response = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    'You are a helpful travel assisant\nYou will be asked to give an itinerary for a trip, containing a destination and trip duration\nReturn a bullet list for each day, and for each day a bullet list with activities that can be done there.\nFor each activity, include the coordinates of the location (lat, long).', //  System prompt 
    `Generate an itinerary for a trip to ${destination} for ${duration} days`  //  User prompt
  )
  log.info("[LLM] llm response", { response: response });

  const days: Day[] = [];

  const cr = response[0];

  cr.text.split('\n').forEach((line) => {
    console.log("[LLM] completion response", { line: line });

    if (line.startsWith("**")) {
      days.push({
        number: parseFloat(line.match(/\d+/)![0]),
        activities: []
      });
    }
    else if (line != "") {
      const activity = line.substring(2);
      days[days.length - 1].activities.push({
        id: cr.text.indexOf(line),
        name: activity
      })
    }
  });

  log.info("[LLM] objectified", { days: days });
  console.log(days);

  return days;
}