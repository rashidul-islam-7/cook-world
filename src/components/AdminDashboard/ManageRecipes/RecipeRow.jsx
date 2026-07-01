import Image from "next/image";
import EditRecipeButton from "./EditButton";
import DeleteRecipeButton from "./DeleteButton";
import FeatureRecipeButton from "./FeatureButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const RecipeRow = async({ recipe, index }) => {

  const {token} = await auth.api.getToken({
    headers: await headers(),
  });


  return (
    <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-800">
      {/* Serial */}
      <td className="whitespace-nowrap font-semibold">{index + 1}</td>

      {/* Recipe */}
      <td className="min-w-[220px]">
        <div className="flex items-center gap-3">
          <Image
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            width={60}
            height={60}
            className="h-14 w-14 flex-shrink-0 rounded-xl border object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold">{recipe.recipeName}</h3>

            <p className="truncate text-sm text-gray-500">
              {recipe.cuisineType}
            </p>
          </div>
        </div>
      </td>

      {/* Author */}
      <td className="min-w-[220px]">
        <h4 className="truncate font-medium">{recipe.authorName}</h4>

        <p className="truncate text-xs text-gray-500">{recipe.authorEmail}</p>
      </td>

      {/* Category */}
      <td className="whitespace-nowrap">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {recipe.category}
        </span>
      </td>

      {/* Price */}
      <td className="whitespace-nowrap font-semibold text-green-600">
        ${recipe.price}
      </td>

      {/* Actions */}
      <td className="min-w-[180px]">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <EditRecipeButton recipe={recipe} />

          <DeleteRecipeButton recipeId={recipe._id} token={token} />

          <FeatureRecipeButton
            recipeId={recipe._id}
            featured={recipe.featured}
            token={token}
          />
        </div>
      </td>
    </tr>
  );
};

export default RecipeRow;
