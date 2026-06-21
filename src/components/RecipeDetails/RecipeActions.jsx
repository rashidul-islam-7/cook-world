"use client";

import {
  FaHeart,
  FaStar,
  FaShoppingCart,
  FaFlag,
} from "react-icons/fa";

const RecipeActions = () => {
  return (
    <div className="mt-6 space-y-3">
      <button className="btn w-full bg-red-500 text-white">
        <FaHeart />
        Like Recipe
      </button>

      <button className="btn w-full bg-yellow-500 text-white">
        <FaStar />
        Add Favorite
      </button>

      <button className="btn w-full bg-green-600 text-white">
        <FaShoppingCart />
        Purchase Recipe
      </button>

      <button className="btn w-full btn-outline">
        <FaFlag />
        Report Recipe
      </button>
    </div>
  );
};

export default RecipeActions;