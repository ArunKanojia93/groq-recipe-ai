import { createOpenAI } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { recipeSchema } from "./schema";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

// type Recipe = z.infer<typeof recipeSchema>;

async function generateRecipe(recipeName: string) {
  try {
    const result = await streamObject({
      model: groq(process.env.GROQ_MODEL || "llama3-8b-8192"),
      schema: recipeSchema,
      prompt: `Generate a ${recipeName} recipe. Also include a special note about ${recipeName} and place it in the note field and preparation time in the time field.`,
      system: "You are a friendly recipe databse that outputs detailed recipes in JSON.",
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error(error);
  }
}

export async function POST(request: Request) {
  const prompt = await request.json();
  const result = await generateRecipe(prompt);

  return result;
}
