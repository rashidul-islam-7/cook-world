"use client";

import { useState } from "react";

const BlockButton = ({ user }) => {
  const [loading, setLoading] = useState(false);

  async function handleBlock() {
    setLoading(true);

    await fetch(`/api/admin/users/${user._id}`, {
      method: "PATCH",
    });

    setLoading(false);

    location.reload();
  }

  return (
    <button
      onClick={handleBlock}
      disabled={loading}
      className={` cursor-pointer px-5 py-2 rounded-lg font-semibold transition

      ${
        user.isBlocked
          ? "bg-green-100 text-green-700 hover:bg-green-200"
          : "bg-red-100 text-red-700 hover:bg-red-200"
      }

      `}
    >
      {loading ? "Loading..." : user.isBlocked ? "Unblock" : "Block"}
    </button>
  );
};
export default BlockButton;
