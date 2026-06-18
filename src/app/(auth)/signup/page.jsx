"use client";

import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
  Radio,
  RadioGroup,
} from "@heroui/react";
import GoogleSignUpButton from "@/components/GoogleSignUpBtn";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // client side validation
    if (!user.name?.trim()) {
      setIsLoading(false);
      return setError("Name is required!");
    }

    if (!user.email?.trim()) {
      setIsLoading(false);
      return setError("Email is required!");
    }

    if (user.password.length < 6) {
      setIsLoading(false);
      return setError("Password must be at least 8 characters!");
    }

    try {
      setIsLoading(true);

      const { data, error } = await signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data) {
        router.push("/");
      }

      setSuccess("Account created successfully!");
    } catch (err) {
      setError(err?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[550px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="mt-2 text-sm text-gray-400">
            Join us and start your journey today
          </p>
        </div>

        {/* Google Sign Up */}
        <GoogleSignUpButton>Sign up with Google</GoogleSignUpButton>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className=" px-3 text-gray-400">Or</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
            {success}
          </div>
        )}

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField isRequired name="name" type="text">
            <Label>Username</Label>
            <Input
              className="w-full"
              aria-label="Name"
              placeholder="John Doe"
            />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input className="w-full" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
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
                placeholder="e.g Rashed$134"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
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
            <Description>At least 8 characters</Description>
            <FieldError />
          </TextField>

          <button
            type="submit"
            className="cursor-pointer mt-2 h-12 w-full rounded-xl bg-blue-600 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            {isLoading ? "Creating account..." : "Create an account"}
          </button>
        </Form>

        {/* Footer */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-blue-400 transition hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
