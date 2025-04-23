
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Get user's JWT (for guest, use default email)
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  const { amount, name, email, message } = await req.json();
  let userEmail = email || "guest@example.com";

  try {
    let stripeCustomerId: string | undefined;
    if (req.headers.get("Authorization")) {
      const authHeader = req.headers.get("Authorization")!;
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabase.auth.getUser(token);
      if (data?.user?.email) userEmail = data.user.email;
      // In real world: lookup or create Stripe customer with metadata.
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
              description: message
                ? `Donor: ${name || "Anonymous"} | Message: ${message}`
                : `Donor: ${name || "Anonymous"}`,
            },
            unit_amount: Number(amount) * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: Deno.env.get("DONATION_SUCCESS_URL") || "https://babysandme.lovable.app/donate?success=1",
      cancel_url: Deno.env.get("DONATION_CANCEL_URL") || "https://babysandme.lovable.app/donate?canceled=1",
      metadata: {
        name: name || "",
        message: message || "",
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
