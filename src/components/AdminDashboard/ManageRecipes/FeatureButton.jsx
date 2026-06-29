"use client";

import { useState } from "react";
import { featureRecipe } from "@/lib/data";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function FeatureRecipeButton({ recipeId, initialFeatured }) {
  const router = useRouter();

  const [isFeatured, setIsFeatured] = useState(initialFeatured);

  const handleFeature = async () => {
    const result = await featureRecipe(recipeId);

    if (result.success) {
      setIsFeatured(result.featured);
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <button
      onClick={handleFeature}
      className={`btn btn-sm text-white ${
        isFeatured
          ? "bg-red-500 hover:bg-red-600"
          : "bg-yellow-500 hover:bg-yellow-600"
      }`}
    >
      <FaStar />

      {isFeatured ? "Remove Feature" : "Feature"}
    </button>
  );
}
