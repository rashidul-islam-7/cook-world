import { FaShoppingBag } from "react-icons/fa";

const EmptyPurchasedRecipes = () => {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-dashed">
      <FaShoppingBag className="text-6xl text-orange-400" />

      <h2 className="mt-5 text-2xl font-bold">
        No Purchased Recipes
      </h2>

      <p className="mt-2 text-gray-500">
        You haven't purchased any recipes yet.
      </p>
    </div>
  );
};

export default EmptyPurchasedRecipes;