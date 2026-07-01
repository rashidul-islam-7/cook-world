"use client";

import Link from "next/link";
import { FaHeart, FaEye, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { getMyFavorites, toggleFavorite } from "@/lib/data";
import { toast } from "react-toastify";
import Image from "next/image";

const FavoritesRecipe = () => {
  const { data } = useSession();
  const user = data?.user;

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    if (!user) return;

    const loadFavorites = async () => {

      const {data:tokenData} = await authClient.token();
      const token = tokenData?.token;

      const data = await getMyFavorites(user.email, token);
      setFavoriteRecipes(data);
    };

    loadFavorites();
  }, [user]);

  const handleRemove = async (recipeId) => {
    try {
      const res = await toggleFavorite(recipeId, user.email);

      if (!res.isFavorite) {
        setFavoriteRecipes((prev) =>
          prev.filter((recipe) => recipe._id !== recipeId),
        );

        toast.success("Removed from favorites");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      {favoriteRecipes.length === 0 ? (
        <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300">
          <FaHeart className="text-6xl text-red-500" />

          <h2 className="mt-4 text-2xl font-bold">No Favorite Recipes</h2>

          <p className="mt-2 text-gray-500">Start saving recipes you love.</p>

          <Link
            href="/recipes"
            className="mt-6 rounded-xl bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
          >
            Browse Recipes
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop */}
          <div className="hidden overflow-x-auto rounded-2xl border border-gray-200 dark:bg-gray-800  bg-white shadow-sm md:block">
            <table className="table">
              <thead>
                <tr className="bg-gray-400 text-white">
                  <th>Recipe</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {favoriteRecipes.map((recipe) => (
                  <tr key={recipe._id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <Image
                          src={recipe.recipeImage}
                          alt={recipe.recipeName}
                          width={20}
                          height={20}
                          className="h-14 w-14 rounded-xl object-cover"
                        />

                        <h3 className="font-semibold">{recipe.recipeName}</h3>
                      </div>
                    </td>

                    <td>{recipe.authorName}</td>

                    <td>{recipe.category}</td>

                    <td>
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/recipes/${recipe._id}`}
                          className="cursor-pointer flex items-center gap-2 rounded-lg bg-orange-300 px-4 py-2 text-sm text-white hover:bg-orange-400"
                        >
                          <FaEye />
                          View
                        </Link>

                        <button
                          onClick={() => handleRemove(recipe._id)}
                          className="cursor-pointer flex items-center gap-2 rounded-lg 
                          bg-red-300 px-4 py-2 text-sm text-white 
                          hover:bg-red-400"
                        >
                          <FaTrashAlt />
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="grid gap-4 md:hidden">
            {favoriteRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <Image
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    width={20}
                    height={20}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{recipe.recipeName}</h3>

                    <p className="mt-1 text-sm text-gray-500">
                      By {recipe.authorName}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {recipe.category}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/recipes/${recipe._id}`}
                    className="flex-1 rounded-lg bg-orange-300 py-1 text-center text-sm font-medium text-white"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleRemove(recipe._id)}
                    className="flex-1 rounded-lg bg-red-300 py-1 text-center text-sm font-medium text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FavoritesRecipe;
