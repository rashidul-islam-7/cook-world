"use client";

import { motion } from "framer-motion";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const popularRecipes = [
  {
    id: 1,
    recipeName: "Chicken Biryani",
    authorName: "John Smith",
    likesCount: 2450,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29c?w=800",
  },
  {
    id: 2,
    recipeName: "Creamy Pasta",
    authorName: "Sarah Wilson",
    likesCount: 1980,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
  },
  {
    id: 3,
    recipeName: "Veggie Pizza",
    authorName: "David Lee",
    likesCount: 1760,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 4,
    recipeName: "Beef Burger",
    authorName: "Emily Brown",
    likesCount: 1540,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },
  {
    id: 5,
    recipeName: "Chocolate Cake",
    authorName: "Sophia Martin",
    likesCount: 1320,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  },
];

const PopularRecipes = () => {
  return (
    <section className="pt-20 bg-linear-to-b from-yellow-50/50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              Popular Recipes
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Most Loved Recipes
            </h2>

            <p className="mt-3 text-gray-500 max-w-xl">
              Discover recipes that have received the highest number of likes
              from our food-loving community.
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex items-center gap-3">
            <button className="popular-prev w-12 h-12 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaArrowLeft />
            </button>

            <button
              className="popular-next w-12 h-12 rounded-full border 
           border-orange-500 text-orange-500 flex items-center hover:text-white justify-center hover:bg-orange-500  transition-all duration-300 cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".popular-prev",
            nextEl: ".popular-next",
          }}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={800}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {popularRecipes.map((recipe, index) => (
            <SwiperSlide key={recipe.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 mb-20"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.recipeName}
                    className="h-32 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold line-clamp-1">
                    {recipe.recipeName}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    By {recipe.authorName}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-500">
                      <FaHeart />
                      <span className="font-semibold">
                        {recipe.likesCount.toLocaleString()}
                      </span>
                    </div>

                    <button className="text-orange-500 font-medium hover:text-orange-600 transition">
                      View →
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularRecipes;
