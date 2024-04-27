import { CompletionService } from "langxlang";

const llm = new CompletionService({ gemini: process.env.GOOGLE_GEMINI_API_KEY!, openai: "" });

export async function ConstructTrip(destination: string, duration: number): Promise<string> {

  const response = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    'You are a helpful travel assisant\nYou will be asked to give an itinerary for a trip, containing a destination and trip duration\nReturn a bullet list for each day, and for each day a bullet list with activities that can be done there.', //  System prompt 
    `Generate an itinerary for a trip to ${destination} for ${duration} days`  //  User prompt
  )
  const result = response.map(o => o.text).join(', ');

  console.log(result);

  return result;
}