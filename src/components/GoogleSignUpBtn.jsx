
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignUpButton = ({ onClick , children}) => {
  return (
    <button
      onClick={onClick}
      className="mt-8 flex items-center justify-center gap-3 w-full px-4 py-3 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
    >
      <FcGoogle className="text-2xl" />
      <span>{children}</span>
    </button>
  );
};

export default GoogleSignUpButton;