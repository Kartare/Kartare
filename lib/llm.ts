import { ChatSession, CompletionService } from "langxlang";

const llm = new CompletionService({ gemini: process.env.GEMINI!, openai: "" });

export async function Talk() {
const [response] = await llm.requestCompletion(
    'gemini-1.0-pro',         //  Model name
    '',                       //  System prompt (optional)
    'Tell me about yourself'  //  User prompt
  )
  console.log(response.text);
}