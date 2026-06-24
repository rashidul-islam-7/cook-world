"use client";

import { AiFillLike } from "react-icons/ai";
import {
  FaHeart,
  FaStar,
  FaShoppingCart,
  FaFlag,
} from "react-icons/fa";

const RecipeActions = () => {
  return (
    <div className="mt-6 space-y-3">
      <button className="btn w-full bg-red-500 hover:bg-red-700 text-white">
        <AiFillLike />
        Like Recipe
      </button>

      <button className="btn w-full bg-yellow-500 hover:bg-yellow-600 text-white ">
        <FaStar className="mb-0.5" />
        Add Favorite
      </button>

      <button className="btn w-full bg-green-600 hover:bg-green-700 text-white">
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