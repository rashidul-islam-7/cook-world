"use client";

import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaEdit, FaTrash, FaHeart, FaPlusCircle } from "react-icons/fa";

const recipes = [
  {
    _id: "1",
    recipeName: "Chicken Biryani",
    recipeImage:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
    category: "Rice",
    likesCount: 245,
    status: "approved",
  },
  {
    _id: "2",
    recipeName: "Creamy Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    category: "Pasta",
    likesCount: 120,
    status: "pending",
  },
  {
    _id: "3",
    recipeName: "Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
    category: "Fast Food",
    likesCount: 180,
    status: "approved",
  },
];

const MyRecipesPage = () => {
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <section>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Recipes</h1>

          <p className="mt-1 text-gray-500">
            Manage all your recipes in one place.
          </p>
        </div>

        <Link
          href="/dashboard/add-recipe"
          className="flex items-center gap-2 rounded-sm bg-orange-500 px-5 py-1.5 text-white transition hover:bg-orange-600"
        >
          <FaPlusCircle />
          Add Recipe
        </Link>
      </div>

      {/* Empty UI */}
      {recipes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed">
          <h2 className="text-2xl font-bold">No Recipes Found</h2>

          <p className="mt-2 text-gray-500">Create your first recipe.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="hidden md:block overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Recipe</th>
                  <th>Category</th>
                  <th>Likes</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {recipes.map((recipe) => (
                  <tr key={recipe._id}>
                    {/* Recipe */}
                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={recipe.recipeImage}
                          alt={recipe.recipeName}
                          className="h-14 w-14 rounded-xl object-cover"
                        />

                        <div>
                          <h3 className="font-semibold">{recipe.recipeName}</h3>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td>{recipe.category}</td>

                    {/* Likes */}
                    <td>
                      <div className="flex items-center gap-2 text-red-500">
                        <FaHeart />
                        {recipe.likesCount}
                      </div>
                    </td>

                    {/* Status */}
                    <td>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          recipe.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {recipe.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex justify-center gap-2">
                        <button className="flex items-center gap-2 rounded-sm bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600">
                          <FaEdit />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(recipe._id)}
                          className="flex cursor-pointer items-center gap-2 rounded-sm bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
                        >
                          <FaTrash />
                          Delete
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
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="flex gap-3">
                  <img
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{recipe.recipeName}</h3>

                    <p className="text-sm text-gray-500">
                      Category: {recipe.category}
                    </p>

                    <div className=" flex items-center gap-3">
                      <div className="mt-2 flex items-center  gap-2 ">
                        <AiFillLike />
                        <span>{recipe.likesCount}</span>
                      </div>
                      <span
                        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs ${
                          recipe.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {recipe.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-blue-500 py-2 text-white">
                    <FaEdit className="inline mr-2" />
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="flex-1 rounded-lg bg-red-500 py-2 text-white"
                  >
                    <FaTrash className="inline mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyRecipesPage;
