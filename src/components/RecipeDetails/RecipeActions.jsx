"use client";

import { AiFillLike } from "react-icons/ai";
import { FaHeart, FaStar, FaShoppingCart, FaFlag } from "react-icons/fa";
import LikeButton from "../BrowseRecipes/LikeButton";
import { useEffect } from "react";
import FavoriteButton from "../BrowseRecipes/FavoriteButton";

const RecipeActions = ({ recipe }) => {
  return (
    <div className="mt-6 space-y-3">
      <LikeButton
        recipe={recipe}
        className={"btn w-full bg-red-500 hover:bg-red-700 text-white"}
      >
        {" "}
        Like Recipe
      </LikeButton>

      <FavoriteButton
        recipe={recipe}
        className={"btn w-full bg-yellow-500 hover:bg-yellow-600 text-white "}
      >
        {" "}
        Add Favorite
      </FavoriteButton>

      <button className="btn w-full bg-green-600 rounded-full hover:bg-green-700 text-white">
        <FaShoppingCart />
        Purchase Recipe
      </button>

      <button className="btn w-full btn-outline rounded-full">
        <FaFlag />
        Report Recipe
      </button>
    </div>
  );
};

export default RecipeActions;
