import FavoritesRecipe from "@/components/DashboardPage/FavoritesRecipe/FavoritesRecipe";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const FavoritesPage = async () => {

  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorite Recipes</h1>

        <p className="mt-2 text-gray-500">
          Explore and manage the recipes you've marked as favorites. .
        </p>
      </div>

      <FavoritesRecipe token={token} />
    </section>
  );
};

export default FavoritesPage;
