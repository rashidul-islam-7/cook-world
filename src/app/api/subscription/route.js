import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const userSession = await auth.api.getSession({
      headers: await headers(),
    });

    const user = userSession?.user;

    const PRICE_ID = "price_1Tmv7EATbcDXIrj48oE41wFh";
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        priceId: PRICE_ID,
        userId: user?.id || "",
        userEmail: user?.email || "",
      },
      mode: "subscription",

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
    });

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// // আপনার সেই সেন্ট্রাল স্ট্রাইপ অবজেক্টটি এখানে ইম্পোর্ট করুন
// import { stripe } from "@/lib/stripe";
// import { headers } from "next/headers";

// export async function POST(req) {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get("origin")
//     const { recipe } = await req.json();

//     const PRICE_ID = "price_1Tmv7EATbcDXIrj48oE41wFh"

//     const session = await stripe.checkout.sessions.create({
//       ui_mode: "embedded",
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: recipe.recipeName,
//               images: [recipe.recipeImage],
//             },
//             unit_amount: 500, // $5.00
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       return_url: `${req.headers.get("origin")}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
//     });

//     return NextResponse.json({ clientSecret: session.client_secret });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
