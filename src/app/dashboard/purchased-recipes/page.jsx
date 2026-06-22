"use client";

import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const purchasedRecipes = [
  {
    _id: "1",
    recipeName: "Chicken Biryani",
    recipeImage:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
    authorName: "Rashid Islam",
    amount: 6,
    purchaseDate: "20 Jun 2026",
  },
  {
    _id: "2",
    recipeName: "Creamy Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    authorName: "Sarah Wilson",
    amount: 2,
    purchaseDate: "18 Jun 2026",
  },
  {
    _id: "3",
    recipeName: "Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
    authorName: "John Smith",
    amount: 4,
    purchaseDate: "15 Jun 2026",
  },
  {
    _id: "4",
    recipeName: "Thai Noodles",
    recipeImage:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200",
    authorName: "Emily Brown",
    amount: 4.45,
    purchaseDate: "12 Jun 2026",
  },
];

const PurchasedRecipesPage = () => {
  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Purchased Recipes</h1>

        <p className="mt-2 text-gray-500">
          View all recipes you've purchased and access them anytime.
        </p>
      </div>

      {/* Empty State */}
      {purchasedRecipes?.length === 0 ? (
        <div className="flex min-h-[450px] flex-col items-center justify-center border-gray-300">
          <FaShoppingBag className="text-5xl text-gray-500" />

          <h2 className="mt-4 text-2xl font-bold">No Purchased Recipes</h2>

          <p className=" text-gray-500">
            You haven't purchased any recipes yet.
          </p>

          <Link
            href="/recipes"
            className="mt-3 rounded bg-orange-500 px-4 
            py-2 text-white transition
             hover:bg-orange-600"
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
                  <th>Amount</th>
                  <th>Purchase Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {purchasedRecipes?.map((recipe) => (
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
                    <td>$-{recipe.amount}</td>
                    <td>{recipe.purchaseDate}</td>

                    <td>
                      <div className="flex justify-center">
                        <Link
                          href={`/recipes/${recipe._id}`}
                          className="rounded-sm bg-gray-400 px-3 py-1 text-sm font-medium text-white transition hover:bg-gray-500"
                        >
                          View Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid gap-4 md:hidden">
            {purchasedRecipes.map((recipe) => (
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
                      Purchased: {recipe.purchaseDate}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/recipes/${recipe._id}`}
                  className="mt-4 block rounded-lg bg-orange-500 py-2 text-center text-sm font-medium text-white transition hover:bg-orange-600"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default PurchasedRecipesPage;
