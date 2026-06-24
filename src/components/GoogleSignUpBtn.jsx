import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const GoogleSignUpButton = () => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <button onClick={handleGoogleSignUp} className="mt-8 flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
      <FcGoogle className="text-2xl" />

      {googleLoading ? (
        <>
          <span>Creating account...</span>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </>
      ) : (
        "Continue with Google"
      )}
    </button>
  );
};

export default GoogleSignUpButton;
