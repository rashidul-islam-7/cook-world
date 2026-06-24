"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow ">
      <div className="relative overflow-hidden">
        <Image
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          height={250}
          width={300}
          className=" h-48 w-full object-cover transition duration-500 group-hover:scale-110 rounded-t-2xl "
        />

        <span className="absolute top-2 right-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {recipe.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between  gap-2">
          <h2 className=" text-xl font-bold line-clamp-1">
            {recipe.recipeName}
          </h2>
          {/* <p className="flex gap-1 justify-center items-center">
            <FaClock className="text-orange-500 text-sm " />
            {recipe.preparationTime} Min
          </p> */}
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <p className="text-gray-500 ">{recipe.cuisineType} Cuisine</p>
        </div>

        {/* <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-500">Recipe By</p>
          <h4 className="text-sm font-semibold">{recipe.authorName}</h4>
        </div> */}

        <div className="flex justify-between items-center mt-2">
          <div className=" flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow">
            <AiFillLike className="text-black" />
            <span className="text-sm font-medium">{recipe.likesCount}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow">
            <FaHeart className="text-black" />
            <span className="text-sm font-medium">{recipe.likesCount}</span>
          </div>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="mt-5 flex items-center justify-center rounded-xl bg-orange-500 py-2 font-medium text-white transition hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
