import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import FeaturedRecipesCard from "./FeaturedRecipesCard";
import { getAllRecipes } from "@/lib/data";

const featuredRecipes = [
  {
    id: 1,
    name: "Creamy Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    category: "Dinner",
    cuisine: "Italian",
    time: "30 Min",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1200",
    category: "Lunch",
    cuisine: "Bangladeshi",
    time: "45 Min",
  },
  {
    id: 3,
    name: "Veggie Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
    category: "Fast Food",
    cuisine: "American",
    time: "25 Min",
  },
];

const FeaturedRecipes = async () => {
  const recipesData = await getAllRecipes();

  const topRecipes = recipesData
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 bg-gray-100/50
dark:bg-gray-900">
      <div
        className=""
      >
        {/* Heading */}
        <div className="text-center mb-14 ">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            <FaStar />
            Featured Recipes
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Hand Picked Recipes For You
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-default-500">
            Discover our most loved and featured recipes curated by food
            enthusiasts and professional chefs.
          </p>
        </div>

        {/* Cards */}
        <FeaturedRecipesCard topRecipes={topRecipes} />

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/recipes"
            className="inline-flex rounded-xl border border-orange-500 px-8 py-3 font-medium text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
