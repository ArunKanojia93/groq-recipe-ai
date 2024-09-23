"use client";

import { experimental_useObject as useObject } from "ai/react";
import { useState } from "react";
import { z } from "zod";
import { recipeSchema } from "../api/use-object/schema";
import Background from "./Background";
import { RecipeCard } from "./RecipeCard";

const Suggestions = ["Apple Pie", "Chicken Tikka Masala", "Caesar Salad", "Cupcakes"];
export default function ChatBox() {
  const [recipeName, setRecipeName] = useState("");

  const { object, submit, isLoading } = useObject({
    api: "/api/use-object",
    schema: recipeSchema,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recipeName) {
      window.alert("Please enter a recipe name");
      return;
    }
    submit(recipeName);
    setRecipeName("");
  };
  return (
    <>
      {isLoading || !object ? (
        <Background />
      ) : (
        <div className="px-4 py-5 md:px-8">
          <RecipeCard recipeObject={object as z.infer<typeof recipeSchema>} />
        </div>
      )}
      <div className="flex flex-col gap-8 w-full max-w-lg px-6 md:px-0 mt-8">
        <div className="flex gap-4 flex-wrap justify-end md:justify-between">
          <span className="text-foreground font-bold w-full">Suggestions: </span>
          {Suggestions.map((suggestion) => (
            <button onClick={() => submit(suggestion)} key={suggestion} className="rounded-lg bg-indigo-700 px-3 py-1.5 text-white text-sm font-bold shadow-[0_0_4px_1px] hover:shadow-gray-400 transition-shadow duration-300">
              {suggestion}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-8">
          <div className="relative flex flex-col gap-4 bg-background shadow-[0_0_4px_1px] shadow-indigo-300 dark:shadow-none rounded-xl w-full overflow-hidden">
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="Enter a recipe name..."
              className={`${isLoading ? "cursor-not-allowed opacity-50" : ""} text-lg px-6 py-3 focus-visible:outline-indigo-700 text-black placeholder:text-gray-400 rounded-xl`}
            />
          </div>
          <button disabled={isLoading || !recipeName} type="submit" className="flex items-center justify-center relative rounded-lg bg-orange-600 px-3 py-1.5 text-white text-xl font-medium disabled:cursor-not-allowed disabled:opacity-50">
            {isLoading && (
              <svg className="absolute animate-spin -ml-1 mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
    </>
  );
}
