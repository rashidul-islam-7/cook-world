"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { toast } from "react-toastify";
import { toggleLike, getLikeStatus } from "@/lib/data";

const LikeButton = ({ recipe, children, className = "" }) => {
  const { data } = useSession();
  const user = data?.user;

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(recipe.likesCount);

  useEffect(() => {
    const loadLike = async () => {
      if (!user) return;

      const res = await getLikeStatus(recipe._id, user.email);
      setLiked(res.liked);
    };

    loadLike();
  }, [user, recipe._id]);

  const handleLike = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      const res = await toggleLike(recipe._id, user.email);

      if (res.liked) {
        setLiked(true);
        setCount((prev) => prev + 1);
      } else {
        setLiked(false);
        setCount((prev) => prev - 1);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 shadow rounded-full px-3 dark:px-0 py-0.5  cursor-pointer ${className} `}
    >
      <span className="">
        {" "}
        {liked ? (
          <AiFillLike size={18} className="text-blue-600" />
        ) : (
          <AiOutlineLike size={18} className="text-gray-500" />
        )}
      </span>
      {children}
      <span>{count}</span>
    </button>
  );
};

export default LikeButton;
