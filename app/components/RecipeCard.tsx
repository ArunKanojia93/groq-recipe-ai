import { z } from "zod";
import { recipeSchema } from "../api/use-object/schema";

export const RecipeCard = ({ recipeObject }: { recipeObject: z.infer<typeof recipeSchema> }) => {
  return (
    <div className="flex flex-col text-white w-full h-full max-h-[calc(100vh-300px)] overflow-y-auto border rounded-lg p-4 max-w-screen-lg bg-gray-900">
      <div className="text-3xl font-bold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">{recipeObject.recipe?.name}</div>
      <br />
      <div className="text-lg">
        <span className="font-bold">Special Note:</span>
        {"\n"}
        {recipeObject.recipe?.note}
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-[repeat(1,minmax(200px,320px)_minmax(420px,1fr))] gap-4 justify-between">
        <div className="flex flex-col border rounded-md px-4 py-2 h-fit">
          <span className="text-xl font-bold">Ingredients:</span>{" "}
          {recipeObject.recipe?.ingredients?.map(
            (i, idx) =>
              i && (
                <li className="flex text-sm font-medium" key={idx}>
                  {i.name} <strong>: </strong> <span className="ml-auto">{i.amount}</span>
                </li>
              )
          )}
        </div>
        <div className="flex flex-col bg-slate-800 px-4 py-2 rounded-md">
          <span className="text-xl font-bold">Instructions:</span>{" "}
          {recipeObject.recipe?.steps?.map((i, idx) => (
            <li className="list-decimal font-medium" key={idx}>
              {i}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
