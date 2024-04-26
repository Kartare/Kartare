import { CompletionService } from "langxlang";

const llm = new CompletionService({ gemini: process.env.GOOGLE_GEMINI_API_KEY!, openai: "" });

export async function ConstructTrip(destination: string, duration: number): Promise<string> {

  const response = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    '',                       //  System prompt (optional)
    'Tell me about yourself'  //  User prompt
  )
  const result = response.map(o => o.text).join(', ');

  console.log(result);

  return result;
}