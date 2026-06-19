// "use client";

// import Link from "next/link";
// import {
//   FaCrown,
//   FaUsers,
//   FaGift,
//   FaCheckCircle,
//   FaArrowRight,
// } from "react-icons/fa";

// export default function PremiumGiftOffer() {
//   return (
//     <section className="py-20 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* মেইন ব্যানার গ্রিড */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
//           {/* বাম পাশের বড় কার্ড (২ কলাম জুড়ে থাকবে): মূল অফার */}
//           <div className="relative overflow-hidden lg:col-span-2 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-2xl border border-indigo-500/10">
//             {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
//             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
//             <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

//             <div className="relative z-10">
//               {/* অফার ব্যাজ */}
//               <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 tracking-wide uppercase">
//                 <FaCrown className="text-amber-400" />
//                 Special Premium Offer
//               </div>

//               {/* মেইন হেডিং */}
//               <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
//                 Upgrade to Premium. <br />
//                 <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
//                   Gift 3 Friends Free Access.
//                 </span>
//               </h2>

//               <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
//                 Unlock ultimate culinary freedom for yourself and instantly
//                 share the love by gifting 3 of your friends a full month of
//                 Premium features—at no extra cost.
//               </p>

//               {/* ফিচার লিস্ট (২ কলাম গ্রিড মোবাইল ও বড় স্ক্রিনের জন্য) */}
//               <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
//                 {[
//                   "Unlimited recipe uploads",
//                   "Exclusive premium profile badge",
//                   "3 Friend invites (1-Month Free)",
//                   "Priority expert support",
//                 ].map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-3 text-sm sm:text-base font-medium"
//                   >
//                     <FaCheckCircle className="text-emerald-400 shrink-0 text-lg" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* কল-টু-অ্যাকশন বাটন */}
//             <div className="mt-10 relative z-10">
//               <Link
//                 href="/payment"
//                 className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:opacity-95 active:scale-[0.98] transition-all group"
//               >
//                 <FaGift className="text-lg" />
//                 <span>Claim Offer & Gift Friends</span>
//                 <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>

//           {/* ডান পাশের ছোট কার্ড (১ কলাম): রিওয়ার্ড সিস্টেম ট্র্যাকার */}
//           <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-8 flex flex-col justify-between shadow-xl">
//             <div>
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl text-amber-600 dark:text-amber-400">
//                   <FaUsers className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold tracking-tight">
//                     Sharing Rewards
//                   </h3>
//                   <p className="text-xs text-zinc-500 dark:text-zinc-400">
//                     How the system works
//                   </p>
//                 </div>
//               </div>

//               {/* স্টেপ বাই স্টেপ প্রিভিউ (UX ইম্প্রুভমেন্ট) */}
//               <div className="mt-8 space-y-4">
//                 {[
//                   {
//                     label: "1. Buy Premium",
//                     status: "Active instantly",
//                     active: true,
//                   },
//                   {
//                     label: "2. Invite 1 Friend",
//                     status: "They get 1 month free",
//                     active: false,
//                   },
//                   {
//                     label: "3. Invite 3 Friends",
//                     status: "All unlocked!",
//                     special: true,
//                   },
//                 ].map((step, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 rounded-xl border flex flex-col gap-1 transition-all ${
//                       step.active
//                         ? "bg-indigo-50/50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50"
//                         : step.special
//                           ? "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30"
//                           : "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-100 dark:border-zinc-800"
//                     }`}
//                   >
//                     <span
//                       className={`text-sm font-semibold ${step.special ? "text-amber-600 dark:text-amber-400" : ""}`}
//                     >
//                       {step.label}
//                     </span>
//                     <span className="text-xs text-zinc-500 dark:text-zinc-400">
//                       {step.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <Link
//               href="/dashboard"
//               className="mt-8 block text-center bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold py-3.5 rounded-xl text-sm transition-all shadow-sm"
//             >
//               Go to Dashboard
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { FaCrown, FaUsers, FaGift, FaCheckCircle } from "react-icons/fa";

const  PremiumGiftOffer = ()=> {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ">
          {/* TOP COLOR BAR */}
          <div className="h-2 w-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <FaCrown className="text-yellow-500" />
                <span className="text-sm font-medium bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  Premium Special Offer
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Buy Premium & Gift 3 Friends 1 Month Free Access
              </h2>

              {/* Description */}
              <p className="mt-4 text-gray-600">
                Upgrade your account and unlock premium features for yourself,
                plus share 1-month free premium access with 3 friends.
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Unlimited recipe uploads
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Premium badge on profile
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />3 friends get 1
                  month free premium
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Priority support & visibility
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                >
                  <FaGift />
                  Upgrade Now
                </Link>

                <Link
                  href="/dashboard"
                  className="flex items-center justify-center px-6 py-3 rounded-xl border font-medium hover:bg-gray-100 transition"
                >
                  Start Sharing
                </Link>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-gray-50 p-8 md:p-12 flex items-center">
              <div className="w-full bg-white rounded-2xl shadow-md p-8">
                {/* Header */}
                <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  <FaUsers className="text-indigo-600" />
                  Referral Rewards
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Invite friends & unlock benefits together
                </p>

                {/* STEPS */}
                <div className="mt-8 space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Buy Premium</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Invite 1 Friend</span>
                    <span className="text-indigo-600 font-medium">
                      Reward +
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Invite 3 Friends</span>
                    <span className="text-purple-600 font-bold">
                      1 Month Free
                    </span>
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-1/3" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Progress: 1 / 3 invites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PremiumGiftOffer;