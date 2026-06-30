import { getAllRecipes } from "./data";

export const getRecipeDataById = async (id) => {
  const recipes = await getAllRecipes();
  return recipes.find((item) => item._id === id);
};
