"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

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

const FeaturedRecipes = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-content1 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {/* <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={500}
                  height={350}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  width={500}
                  height={350}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{recipe.name}</h3>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-default-500">
                  <div className="flex items-center gap-2">
                    <BiDish className="text-orange-500" />
                    {recipe.category}
                  </div>

                  <div className="flex items-center gap-2">
                    🍽️ {recipe.cuisine}
                  </div>

                  <div className="flex items-center gap-2">
                    <MdOutlineAccessTime className="text-orange-500" />
                    {recipe.time}
                  </div>
                </div>

                <Link
                  href={`/recipes/${recipe.id}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

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
