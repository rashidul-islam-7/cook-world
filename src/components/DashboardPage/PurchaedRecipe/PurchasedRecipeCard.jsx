
"use client";

import Link from "next/link";
import { FaClock, FaUser, FaEye } from "react-icons/fa";

const PurchasedRecipeCard = ({ recipe }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex gap-2 flex-wrap">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
            {recipe.category}
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            {recipe.cuisineType}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold line-clamp-1">
          {recipe.recipeName}
        </h2>

        <div className="mt-4 space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{recipe.authorName}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <span>Purchased: {recipe.purchaseDate}</span>
          </div>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          <FaEye />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PurchasedRecipeCard;