"use client";

import { useState } from "react";
import { FaApple, FaLock, FaPaypal } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const PaymentPage = () => {
  const [currency, setCurrency] = useState("BDT");

  return (
    <section className="min-h-screen bg-[#f7f7f7] py-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="border-r border-gray-200 bg-[#fafafa] p-8 lg:p-16">
            <h3 className="mb-3 text-xl font-semibold">Choose a currency:</h3>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrency("BDT")}
                className={`flex-1 rounded-lg border px-4 py-3 text-left ${
                  currency === "BDT" ? "border-black bg-white" : "bg-white"
                }`}
              >
                <span className="text-green-600 font-bold  ">BD-</span>1,277.61
                TK
              </button>

              <button
                onClick={() => setCurrency("USD")}
                className={`flex-1 rounded-lg border px-4 py-3 text-left ${
                  currency === "USD" ? "border-black bg-white" : "bg-white"
                }`}
              >
                US- $9.99
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500">1 USD = 127.88 BDT</p>

            <div className="mt-16 flex justify-between">
              <div>
                <h4 className="font-medium">CookWorld Premium Membership</h4>

                <p className="text-sm text-gray-500">
                  Unlimited recipe uploads + premium badge
                </p>
              </div>

              <h3 className="text-xl font-semibold">
                {currency === "BDT" ? "৳1,277.61" : "$9.99"}
              </h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-8 lg:p-16">
            {/* Apple Pay / Link */}
            <div className="grid grid-cols-2 gap-3">
              <button className=" flex justify-center items-center gap-2 rounded-lg bg-black py-3 text-lg font-semibold text-white">
                <FaApple /> Pay
              </button>

              <button className=" flex justify-center items-center gap-2 rounded-lg bg-green-500 py-3 text-lg font-semibold text-white">
                <span>
                  <MdPayment />
                </span>{" "}
                Link
              </button>
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Contact Information
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>

            <div className="mt-8">
              <h3 className="mb-1 font-semibold">Payment Method</h3>

              <span className="flex items-center gap-1 mb-3 font-bold">
                {" "}
                <MdPayment className="text-2xl" /> Card
              </span>

              <div className="rounded-xl border p-4">
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="w-full border-b pb-3 outline-none"
                />

                <div className="grid grid-cols-2">
                  <input
                    type="text"
                    placeholder="04 / 44"
                    className="border-r p-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="444"
                    className="p-3 outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Cardholder name"
                  className="mt-3 w-full rounded-lg border px-4 py-3"
                />

                <select className="mt-3 w-full rounded-lg border px-4 py-3">
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-xl border p-4">
              <label className="flex gap-3">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">
                  Save my information for faster checkout
                </span>
              </label>
            </div>

            <button className="mt-8 cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 text-lg font-semibold text-white hover:bg-blue-600">
              <FaLock />
              Pay {currency === "BDT" ? "৳1,277.61" : "$9.99"}
            </button>

            <div className="mt-6 text-center text-sm text-gray-500">
              Powered by Stripe · Terms · Privacy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
