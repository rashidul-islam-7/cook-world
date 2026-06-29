"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { toggleFavorite, getFavoriteStatus } from "@/lib/data";

const FavoriteButton = ({ recipe, children, className = "" }) => {
  const { data } = useSession();
  const user = data?.user;

  const [favorite, setFavorite] = useState(false);
  const [count, setCount] = useState(recipe.favoriteCount || 0);

  useEffect(() => {
    const loadFavorite = async () => {
      if (!user) return;

      try {
        const res = await getFavoriteStatus(recipe._id, user.email);
        setFavorite(res.isFavorite);
      } catch (err) {
        console.log(err);
      }
    };

    loadFavorite();
  }, [user, recipe._id]);

  const handleFavorite = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      const res = await toggleFavorite(recipe._id, user.email);

      setFavorite(res.isFavorite);
      setCount(res.favoriteCount);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className={`flex items-center gap-2 shadow rounded-full px-3 dark:px-0 py-0.5 cursor-pointer ${className} `}
    >
      {favorite ? (
        <FaHeart size={18} className="text-red-500" />
      ) : (
        <FaRegHeart size={18} />
      )}

      {children}

      <span>{count}</span>
    </button>
  );
};

export default FavoriteButton;
