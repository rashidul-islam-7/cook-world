"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccessPage = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-lg text-center">
        <FaCheckCircle className="mx-auto text-7xl text-green-500" />

        <h1 className="mt-6 text-4xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for purchasing Premium Membership.
          Your account has been upgraded successfully.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-sm bg-gray-300 px-6 py-2  "
        >
          Go To Dashboard
        </Link>
      </div>
    </section>
  );
};

export default PaymentSuccessPage;