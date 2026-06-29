import RecipeRow from "./RecipeRow";
import Image from "next/image";
import EditRecipeButton from "./EditButton";
import DeleteRecipeButton from "./DeleteButton";
import FeatureRecipeButton from "./FeatureButton";

const RecipesTable = ({ recipes }) => {
  if (!recipes?.length) {
    return (
      <div className="rounded-xl border border-dashed py-20 text-center text-gray-500">
        No recipes found.
      </div>
    );
  }

  return (
    <>
      {/* ================= Desktop Table ================= */}
      <div className="hidden overflow-x-auto rounded-xl border bg-white dark:bg-gray-900 md:block">
        <table className="table">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th>#</th>
              <th>Recipe</th>
              <th>Author</th>
              <th>Category</th>
              <th>Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {recipes.map((recipe, index) => (
              <RecipeRow
                key={recipe._id}
                recipe={recipe}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}
      <div className="space-y-4 md:hidden">
        {recipes.map((recipe, index) => (
          <div
            key={recipe._id}
            className="rounded-2xl border bg-white p-4 shadow-sm dark:bg-gray-900"
          >
            <div className="flex gap-4">
              <Image
                src={recipe.recipeImage}
                alt={recipe.recipeName}
                width={80}
                height={80}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-bold">{recipe.recipeName}</h3>

                <p className="text-sm text-gray-500">
                  {recipe.cuisineType}
                </p>

                <p className="mt-2 text-sm">
                  <span className="font-medium">Author:</span>{" "}
                  {recipe.authorName}
                </p>

                <p className="text-sm">
                  <span className="font-medium">Category:</span>{" "}
                  {recipe.category}
                </p>

                <p className="text-sm font-semibold text-green-600">
                  ${recipe.price}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <EditRecipeButton recipe={recipe} />

              <DeleteRecipeButton recipeId={recipe._id} />

              <FeatureRecipeButton
                recipeId={recipe._id}
                featured={recipe.featured}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipesTable;