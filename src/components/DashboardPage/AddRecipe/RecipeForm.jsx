"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const RecipeForm = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!imageFile) {
        alert("Please select an image");
        return;
      }

      // Upload image to ImgBB
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);
      console.log(process.env.NEXT_PUBLIC_IMGBB_API_KEY);

      const imageRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageFormData,
        },
      );

      const imageData = await imageRes.json();

      const imageUrl = imageData.data.display_url;

      const form = e.target;

      const recipeData = {
        recipeName: form.recipeName.value,
        recipeImage: imageUrl,

        category: form.category.value,
        cuisineType: form.cuisineType.value,

        difficultyLevel: form.difficultyLevel.value,

        preparationTime: Number(form.preparationTime.value),

        ingredients: form.ingredients.value
          .split(",")
          .map((item) => item.trim()),

        instructions: form.instructions.value,

        // User info
        authorId: user?.id,
        authorName: user?.name,
        authorEmail: user?.email,

        likesCount: 0,
        isFeatured: false,
        status: "pending",

        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const res = await fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast("Recipe added successfully!");

        form.reset();
        setImagePreview("");
        setImageFile(null);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
      {/* Form */}
      <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Recipe Name */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Recipe Name</label>

            <input
              name="recipeName"
              required
              type="text"
              placeholder="Chicken Biryani"
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-1 block font-medium">Category</label>

            <select
              name="category"
              required
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            >
              <option value="">Select Category</option>
              <option>Rice</option>
              <option>Fast Food</option>
              <option>Dessert</option>
              <option>Pizza</option>
              <option>Seafood</option>
            </select>
          </div>

          {/* Cuisine */}
          <div>
            <label className="mb-1 block font-medium">Cuisine Type</label>

            <input
              name="cuisineType"
              required
              type="text"
              placeholder="Bangladeshi"
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="mb-1 block font-medium">Difficulty</label>

            <select
              name="difficultyLevel"
              required
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="mb-1 block font-medium">
              Preparation Time (Min)
            </label>

            <input
              name="preparationTime"
              required
              type="number"
              placeholder="30"
              className="w-full rounded border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Recipe Image</label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-5 text-center hover:border-orange-500">
              <FaCloudUploadAlt className="text-4xl text-orange-500" />

              <p className="mt-2">Click to upload recipe image</p>

              <input
                type="file"
                accept="image/*"
                hidden
                required
                onChange={handleImage}
              />
            </label>
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Ingredients</label>

            <textarea
              name="ingredients"
              required
              rows={3}
              placeholder="Chicken, Rice, Onion, Garlic"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <label className="mb-1 block font-medium">Instructions</label>

            <textarea
              name="instructions"
              required
              rows={5}
              placeholder="Write cooking instructions..."
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="mt-5 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Adding Recipe..." : "Create Recipe"}
        </button>
      </div>

      {/* Preview */}
      <div className="h-fit rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-xl font-bold">Recipe Preview</h3>

        <div className="mt-4 overflow-hidden rounded-2xl border">
          <img
            src={
              imagePreview ||
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000"
            }
            alt="preview"
            className="h-56 w-full object-cover"
          />
        </div>

        <div className="mt-5 rounded-2xl bg-orange-50 p-4">
          <h4 className="font-semibold text-orange-600">Tips</h4>

          <ul className="mt-2 list-disc space-y-1 px-4 text-sm text-gray-600">
            <li>Use high quality image</li>
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
