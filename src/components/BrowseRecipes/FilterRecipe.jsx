"use client";

const FilterRecipe = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer
            ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-orange-100"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterRecipe;
