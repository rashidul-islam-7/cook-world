"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const RecipeForm = () => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const recipeData = Object.fromEntries(formData.entries());

    console.log(recipeData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
      {/* Form */}
      <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Recipe Name */}
          {/* <fieldset>
            <legend>Personal Information</legend>
            <label>Name:</label>
            <input type="text" />
          </fieldset> */}

          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Recipe Name</label>
            <input
              name="recipeName"
              type="text"
              placeholder="Chicken Biryani"
              className="w-full rounded border px-4 py-1.5 outline-none focus:border-orange-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-1 block font-medium">Category</label>

            <select
              name="category"
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            >
              <option>Rice</option>
              <option>Fast Food</option>
              <option>Dessert</option>
              <option>Pizza</option>
              <option>Seafood</option>
            </select>
          </div>

          {/* Cuisine */}
          <div>
            <label className="mb-2 block font-medium">Cuisine Type</label>

            <input
              name="cuisineType"
              type="text"
              placeholder="Bangladeshi"
              className="w-full rounded border px-4 py-1.5 outline-none focus:border-orange-500"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="mb-1 block font-medium">Difficulty</label>

            <select
              name="difficultyLevel"
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Preparation */}
          <div>
            <label className="mb-1 block font-medium">Preparation Time</label>

            <input
              name="preparationTime"
              type="number"
              placeholder="30 Min"
              className="w-full rounded border px-4 
              py-1.5 outline-none focus:border-orange-500"
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Recipe Image</label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-1 text-center hover:border-orange-500">
              <FaCloudUploadAlt className="text-2xl text-orange-500" />

              <p>Click to upload image</p>

              <input
                name="recipeImage"
                type="file"
                accept="image/*"
                hidden
                onChange={handleImage}
              />
            </label>
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Ingredients</label>

            <textarea
              name="ingredients"
              rows="2"
              placeholder="Chicken, Rice, Onion..."
              className="w-full rounded-xl border 
              px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Instructions</label>

            <textarea
              name="instructions"
              rows="3"
              placeholder="Step by step cooking instructions..."
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer mt-5 w-full rounded-xl bg-orange-500 py-2 font-semibold text-white transition hover:bg-orange-600"
        >
          Create Recipe
        </button>
      </div>

      {/* Preview Card */}
      <div className="rounded-2xl border h-fit border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-xl font-bold">Recipe Preview</h3>

        <div className="mt-2 overflow-hidden rounded-2xl border">
          <img
            src={
              imagePreview ||
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000"
            }
            alt="preview"
            className="h-48 w-full object-cover"
          />
        </div>

        <div className="mt-5 rounded-2xl bg-orange-50 p-4">
          <h4 className="font-semibold text-orange-600">Tips</h4>

          <ul className="mt-1 space-y-1 text-sm text-gray-600 list-disc px-4">
            <li>Use a high quality image</li>
            <li>Add clear instructions</li>
            <li>Include all ingredients</li>
            <li>Mention preparation time</li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;
