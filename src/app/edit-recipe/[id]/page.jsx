import RecipeForm from "@/components/DashboardPage/AddRecipe/RecipeForm";
import { getRecipeById } from "@/lib/data";
import React from "react";

const EditRecipe = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const recipe = await getRecipeById(id);


  return (
    <div className="pt-20">
      <RecipeForm recipe={recipe} />
    </div>
  );
};

export default EditRecipe;
