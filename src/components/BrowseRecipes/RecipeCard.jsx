"use client";

import Link from "next/link";
import { FaHeart, FaClock } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow">
          <FaHeart className="text-red-500" />
          <span className="text-sm font-medium">{recipe.likesCount}</span>
        </div>
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {recipe.category}
        </span>

        <h2 className="mt-3 text-xl font-bold line-clamp-1">
          {recipe.recipeName}
        </h2>

        <p className="mt-2 text-gray-500 text-sm">
          {recipe.cuisineType} Cuisine
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <FaClock className="text-orange-500" />
          {recipe.preparationTime} Minutes
        </div>

        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-500">Recipe By</p>
          <h4 className="font-semibold">{recipe.authorName}</h4>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="mt-5 flex items-center justify-center rounded-xl bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
