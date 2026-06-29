"use client";

import { useEffect, useMemo, useState } from "react";
import { FaSearchMinus } from "react-icons/fa";
import SearchRecipe from "@/components/BrowseRecipes/SearchRecipe";
import FilterRecipe from "@/components/BrowseRecipes/FilterRecipe";
import RecipeCard from "@/components/BrowseRecipes/RecipeCard";
import { getAllRecipes } from "@/lib/data";

const categories = [
  "All",
  "Rice",
  "Fast Food",
  "Pasta",
  "Pizza",
  "Noodles",
  "Seafood",
  "Salad",
  "Dessert",
  "Street Food",
];

export default function BrowseRecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.category === selectedCategory,
      );
    }

    if (searchText) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.recipeName.toLowerCase().includes(searchText.toLowerCase()) ||
          recipe.cuisineType.toLowerCase().includes(searchText.toLowerCase()) ||
          recipe.category.toLowerCase().includes(searchText.toLowerCase()) ||
          recipe.authorName.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    return filtered;
  }, [recipes, selectedCategory, searchText]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 bg-gray-100/50
dark:bg-gray-800">
      <div
        className=""
      >
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

        <SearchRecipe setSearchText={setSearchText} searchText={searchText} />

        {/* Categories */}

        <section>
          <FilterRecipe
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>
        {/* Recipe Grid OR Empty State */}
        {filteredRecipes?.length > 0 ? (
          <>
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-base text-gray-500">
                Found{" "}
                <span className="font-semibold text-orange-500">
                  {filteredRecipes?.length}
                </span>{" "}
                recipes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredRecipes?.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24">
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <FaSearchMinus className="text-3xl text-orange-500" />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              No Recipes Found
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-center text-gray-500">
              We couldn't find any recipes matching your search or selected
              category. Try another keyword or reset your filters.
            </p>

            {/* Button */}

            <button
              onClick={() => {
                setSearchText("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-xl bg-orange-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* <div className="flex justify-center gap-2 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`btn ${
                page === index + 1 ? "btn-primary" : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="btn"
          >
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
}
