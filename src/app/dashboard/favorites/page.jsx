"use client";

import Link from "next/link";
import { FaHeart, FaEye, FaTrashAlt } from "react-icons/fa";

const favoriteRecipes = [
  {
    _id: "1",
    recipeName: "Chicken Biryani",
    recipeImage:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
    authorName: "Rashid Islam",
    addedAt: "20 Jun 2026",
  },
  {
    _id: "2",
    recipeName: "Creamy Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    authorName: "Sarah Wilson",
    addedAt: "18 Jun 2026",
  },
  {
    _id: "3",
    recipeName: "Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
    authorName: "John Smith",
    addedAt: "15 Jun 2026",
  },
];

const FavoritesPage = () => {
  const handleRemove = (id) => {
    console.log("Remove Favorite:", id);
  };

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorite Recipes</h1>

        <p className="mt-2 text-gray-500">Recipes you've saved for later.</p>
      </div>

      {/* Empty State */}
      {favoriteRecipes.length === 0 ? (
        <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300">
          <FaHeart className="text-6xl text-red-500" />

          <h2 className="mt-4 text-2xl font-bold">No Favorite Recipes</h2>

          <p className="mt-2 text-gray-500">Start saving recipes you love.</p>

          <Link
            href="/recipes"
            className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
          >
            Browse Recipes
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
            <table className="table">
              <thead>
                <tr>
                  <th>Recipe</th>
                  <th>Author</th>
                  <th>Added Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {favoriteRecipes.map((recipe) => (
                  <tr key={recipe._id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={recipe.recipeImage}
                          alt={recipe.recipeName}
                          className="h-14 w-14 rounded-xl object-cover"
                        />

                        <h3 className="font-semibold">{recipe.recipeName}</h3>
                      </div>
                    </td>

                    <td>{recipe.authorName}</td>

                    <td>{recipe.addedAt}</td>

                    <td>
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/recipes/${recipe._id}`}
                          className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition hover:bg-orange-600"
                        >
                          <FaEye />
                          View
                        </Link>

                        <button
                          onClick={() => handleRemove(recipe._id)}
                          className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
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

          {/* Mobile Cards */}
          <div className="grid gap-4 md:hidden">
            {favoriteRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{recipe.recipeName}</h3>

                    <p className="mt-1 text-sm text-gray-500">
                      By {recipe.authorName}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Added: {recipe.addedAt}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/recipes/${recipe._id}`}
                    className="flex-1 rounded-lg bg-orange-500 py-2 text-center text-sm font-medium text-white"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleRemove(recipe._id)}
                    className="flex-1 rounded-lg bg-red-500 py-2 text-center text-sm font-medium text-white"
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

export default FavoritesPage;
