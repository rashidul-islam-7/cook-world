export const metadata = {
  title: "All Recipe | CookWorld",
};

import BrowseRecipeClient from "@/components/BrowseRecipes/BrowseRecipes";
import { getAllRecipes } from "@/lib/data";

export default async function BrowseRecipesPage() {
  const recipes = await getAllRecipes();
  return (
    <section
      className="py-16 mt-15 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 bg-gray-100/50
dark:bg-gray-900"
    >
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Explore Recipes
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold">
            Browse All Recipes
          </h1>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover delicious recipes shared by food lovers from around the
            world.
          </p>
        </div>
        <BrowseRecipeClient recipes={recipes} />
      </div>
    </section>
  );
}
