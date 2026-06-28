import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { FaCheckCircle } from "react-icons/fa";
import { getSubscription } from "@/lib/data";

export default async function Success({ searchParams }) {
  const params = await searchParams;
  const sessionId = params?.session_id;

  if (!sessionId) {
    throw new Error("Something went wrong. Session ID missing.");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    });

    const status = session?.status;
    const metadata = session?.metadata;
    const customerEmail = session?.customer_details?.email;

    await getSubscription({ ...metadata, sessionId });

    if (status === "open") {
      redirect("/");
    }

    if (status === "complete") {
      console.log(metadata);
      return (
        <section className="min-h-screen flex items-center justify-center p-4 ">
          <div className=" text-center">
            {/* Success Icon */}
            <div className="flex justify-center items-center text-5xl text-green-500">
              <FaCheckCircle />
            </div>

            {/* Content */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Payment Success!
            </h2>
            <p className="text-gray-500 mb-6">
              Thank you for purchasing premium. Your subscription is now active!
            </p>

            {/* Email & User Info Box */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-left space-y-2 mb-6">
              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Customer Email
                </span>
                <strong className="text-gray-700 font-medium break-all">
                  {customerEmail}
                </strong>
              </div>
              {metadata?.userId && (
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    User ID
                  </span>
                  <code className="text-xs bg-gray-200 text-gray-800 px-1.5 py-0.5 rounded break-all">
                    {metadata.userId}
                  </code>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              <a
                href="/"
                className="cursor-pointer bg-gray-400 text-gray-700 rounded-xl font-semibold py-3 px-4 rtext-center"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      );
    }
  } catch (error) {
    console.error("Stripe retrieve error:", error);
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-2xl font-bold">
            !
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Verification Failed
          </h2>
          <p className="text-gray-500 mb-4">
            We couldn't verify this payment session. Please check your stripe
            dashboard.
          </p>
          <a href="/" className="text-orange-600 font-semibold hover:underline">
            Return Home
          </a>
        </div>
      </section>
    );
  }
}
