import { auth } from "@/lib/auth";
import { getPurchasedRecipes } from "@/lib/data";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const PurchasedRecipesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <section className="pt-20 text-center">
        <h2 className="text-2xl font-bold">Please sign in first.</h2>
      </section>
    );
  }

  const purchasedRecipes = await getPurchasedRecipes(user.id);

  return (
    <section className="pt-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Purchased Recipes</h1>

        <p className="mt-2 text-gray-500">
          View all recipes you've purchased and access them anytime.
        </p>
      </div>

      {/* Empty State */}
      {purchasedRecipes.length === 0 ? (
        <div className="flex min-h-[450px] flex-col items-center justify-center">
          <FaShoppingBag className="text-5xl text-gray-400" />

          <h2 className="mt-4 text-2xl font-bold">No Purchased Recipes</h2>

          <p className="mt-2 text-gray-500">
            You haven't purchased any recipes yet.
          </p>

          <Link
            href="/recipes"
            className="mt-5 rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
          >
            Browse Recipes
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop */}
          <div className="hidden overflow-x-auto rounded-xl  bg-white shadow md:block">
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
                {purchasedRecipes.map((recipe) => (
                  <tr key={recipe._id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <Image
                          src={recipe.recipeImage}
                          alt={recipe.recipeName}
                          width={60}
                          height={60}
                          className="h-14 w-14 rounded-xl object-cover"
                        />

                        <h3 className="font-semibold">{recipe.recipeName}</h3>
                      </div>
                    </td>

                    <td>{recipe.authorName}</td>

                    <td>${recipe.price}</td>

                    <td>{new Date(recipe.createdAt).toLocaleDateString()}</td>

                    <td>
                      <div className="flex justify-center">
                        <Link
                          href={`/recipes/${recipe.recipeId}`}
                          className="rounded bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-600"
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

          {/* Mobile */}
          <div className="grid gap-4 md:hidden">
            {purchasedRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="rounded-xl bg-white p-4 shadow"
              >
                <div className="flex gap-4">
                  <Image
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{recipe.recipeName}</h3>

                    <p className="mt-1 text-sm text-gray-500">
                      By {recipe.authorName}
                    </p>

                    <p className="mt-1 text-sm font-medium">${recipe.price}</p>

                    <p className="mt-1 text-xs text-gray-400">
                      Purchased:{" "}
                      {new Date(recipe.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/recipes/${recipe.recipeId}`}
                  className="mt-4 block rounded-lg bg-orange-500 py-2 text-center text-white hover:bg-orange-600"
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
