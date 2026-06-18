"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import GoogleSignUpButton from "@/components/GoogleSignUpBtn";
import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // Validation
    if (!user.email?.trim()) {
      setIsLoading(false);
      return setError("Email is required!");
    }

    if (!user.password?.trim()) {
      setIsLoading(false);
      return setError("Password is required!");
    }

    if (user.password.length < 8) {
      setIsLoading(false);
      return setError("Password must be at least 8 characters!");
    }

    try {
      const { data, error } = await signIn.email({
        email: user.email,
        password: user.password,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Invalid email or password");
        return;
      }

      setSuccess("Sign in successful!");
      router.push("/");
    } catch (err) {
      console.error(err);

      setError(err?.message || "Unable to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[550px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Sign In</h1>

          <p className="mt-2 text-sm text-gray-400">
            Welcome back to your account
          </p>
        </div>

        {/* Google Login */}
        <GoogleSignUpButton>Sign in with Google</GoogleSignUpButton>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-3 text-gray-400">Or</span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mb-4 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
            {success}
          </div>
        )}

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>

            <Input className="w-full" placeholder="john@example.com" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                name="password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />

              <InputGroup.Suffix className="pr-0">
                <Button
                  type="button"
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <IoMdEye className="size-4" />
                  ) : (
                    <IoMdEyeOff className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <Description>Minimum 8 characters</Description>

            <FieldError />
          </TextField>

          <Button
            type="submit"
            isLoading={isLoading}
            className="mt-2 h-12 w-full bg-blue-600 text-white"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </Form>

        {/* Footer */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
