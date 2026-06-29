"use client";

import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const EditRecipeButton = ({ recipe }) => {
  return (
    <Link
      href={`/edit-recipe/${recipe._id}`}
      className="flex items-center gap-2 rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-200"
    >
      <FaEdit />
      Edit
    </Link>
  );
};

export default EditRecipeButton;
