"use client";

import { FaCrown, FaCheckCircle } from "react-icons/fa";

const PremiumPage = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Upgrade To Premium
        </h1>

        <p className="mt-3 text-gray-500">
          Unlock unlimited recipe uploads and premium features.
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
            <FaCrown className="text-4xl text-yellow-500" />
          </div>

          <h2 className="mt-5 text-3xl font-bold">
            Premium Membership
          </h2>

          <p className="mt-2 text-gray-500">
            One time payment
          </p>

          <h3 className="mt-5 text-5xl font-bold text-orange-500">
            $9.99
          </h3>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border p-4">
            <FaCheckCircle className="text-green-500" />
            Unlimited Recipe Upload
          </div>

          <div className="flex items-center gap-3 rounded-xl border p-4">
            <FaCheckCircle className="text-green-500" />
            Premium Profile Badge
          </div>

          <div className="flex items-center gap-3 rounded-xl border p-4">
            <FaCheckCircle className="text-green-500" />
            Priority Features
          </div>

          <div className="flex items-center gap-3 rounded-xl border p-4">
            <FaCheckCircle className="text-green-500" />
            Premium Community Access
          </div>
        </div>

        <button
          className="mt-10 w-full rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white hover:bg-orange-600"
        >
          Continue To Payment
        </button>
      </div>
    </section>
  );
};

export default PremiumPage;