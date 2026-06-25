import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";
import { getAllRecipes } from "@/lib/data";


const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const recipesData = await getAllRecipes();

  const recipe = recipesData.find((item) => item._id === id);

  return (
    <div>
      <RecipeDetails recipe={recipe} />
    </div>
  );
};

export default RecipeDetailsPage;
