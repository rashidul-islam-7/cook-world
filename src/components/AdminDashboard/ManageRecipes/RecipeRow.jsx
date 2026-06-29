import Image from "next/image";
import EditRecipeButton from "./EditButton";
import DeleteRecipeButton from "./DeleteButton";
import FeatureRecipeButton from "./FeatureButton";


const RecipeRow = ({ recipe, index }) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <td className="font-semibold whitespace-nowrap">{index + 1}</td>
      <td>
        <div className="flex items-center gap-3 min-w-[220px]">
          <Image
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            width={60}
            height={60}
            className="h-14 w-14 rounded-xl object-cover border"
          />

          <div>
            <h3 className="font-semibold line-clamp-1">{recipe.recipeName}</h3>

            <p className="text-sm text-gray-500">{recipe.cuisineType}</p>
          </div>
        </div>
      </td>

      <td className="min-w-[180px]">
        <h4 className="font-medium">{recipe.authorName}</h4>

        <p className="text-xs text-gray-500 break-all">{recipe.authorEmail}</p>
      </td>

      <td>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {recipe.category}
        </span>
      </td>

      <td className="font-semibold text-green-600 whitespace-nowrap">
        ${recipe.price}
      </td>

      <td>
        <div className="flex flex-wrap justify-center gap-2">
          <EditRecipeButton recipe={recipe} />

          <DeleteRecipeButton recipeId={recipe._id} />

          <FeatureRecipeButton
            recipeId={recipe._id}
            featured={recipe.featured}
          />
        </div>
      </td>
    </tr>
  );
};

export default RecipeRow;
