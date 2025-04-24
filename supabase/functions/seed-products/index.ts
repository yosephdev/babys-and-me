
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Define constants
const SUPABASE_URL = "https://xdttfosbledjbiqrutsd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdHRmb3NibGVkamJpcXJ1dHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjkwNTQsImV4cCI6MjA1Mjk0NTA1NH0.fSSi3WQkL2GtzteSKiBjKlkKGpO7IKHavZ6YVnb7TP4";

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Change in production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Define sample products
const sampleProducts = [
  {
    name: "Cozy Winter Jacket for Kids",
    description: "Durable, waterproof, and stylish—perfect for outdoor adventures.",
    price: 499,
    currency: "SEK",
    image_url: "https://03.cdn37.se/gl/images/2.680004/isbjorn-helicopter-winter-jacket-kids-mint.jpeg",
    affiliate_link: "https://example.com/winter-jacket",
    category: "Clothing & Accessories",
    advertiser_name: "Polarn O. Pyret",
    advertiser_id: "polarn_o_pyret",
    advertiser_logo_url: "https://placehold.co/100/baby-yellow/white?text=POP",
    commission: "8%",
    is_best_seller: true,
    rating: 5,
    reviews: 124
  },
  {
    name: "Organic Cotton Bodysuits (Pack of 5)",
    description: "Soft, breathable, and eco-friendly—ideal for newborns.",
    price: 299,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-pink/white?text=Cotton+Bodysuits",
    affiliate_link: "https://example.com/cotton-bodysuits",
    category: "Clothing & Accessories",
    advertiser_name: "Baby V",
    advertiser_id: "baby_v",
    advertiser_logo_url: "https://placehold.co/100/soft-pink/white?text=BV",
    commission: "7%",
    rating: 4,
    reviews: 87
  },
  {
    name: "Silicone Baby Bib with Catcher",
    description: "Easy to clean and prevents food spills—perfect for messy eaters.",
    price: 89,
    currency: "SEK",
    image_url: "https://cdn.pricenet.se/319863-home_default/canpol-babies---pastels-silicone-bib---silikonov-brynd-k-s-kapsou-10ks.jpg",
    affiliate_link: "https://example.com/baby-bib",
    category: "Feeding Supplies",
    advertiser_name: "Jollyroom SE",
    advertiser_id: "jollyroom_se",
    advertiser_logo_url: "https://placehold.co/100/baby-blue/white?text=Jolly",
    commission: "5%",
    is_editors_pick: true,
    rating: 4.5,
    reviews: 203
  },
  {
    name: "Leak-Proof Sippy Cup Set (Pack of 3)",
    description: "Spill-proof and BPA-free—great for toddlers learning to drink.",
    price: 149,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-peach/white?text=Sippy+Cup+Set",
    affiliate_link: "https://example.com/sippy-cup-set",
    category: "Feeding Supplies",
    advertiser_name: "BabyWorld SE",
    advertiser_id: "babyworld_se",
    advertiser_logo_url: "https://placehold.co/100/baby-pink/white?text=BW",
    commission: "8%",
    rating: 4,
    reviews: 156
  },
  {
    name: "Wooden Building Blocks Set",
    description: "Encourages creativity and fine motor skills—made from sustainable wood.",
    price: 199,
    currency: "SEK",
    image_url: "https://www.proshop.se/Images/600x800/3207470_1fc72b5d6455.jpg",
    affiliate_link: "https://example.com/wooden-blocks",
    category: "Toys & Educational Items",
    advertiser_name: "Kid's Concept",
    advertiser_id: "kids_concept",
    advertiser_logo_url: "https://placehold.co/100/baby-pink/white?text=KC",
    commission: "10%",
    is_best_seller: true,
    rating: 5,
    reviews: 89
  },
  {
    name: "Zcooly Learning Game Subscription",
    description: "Fun, interactive games that teach kids math and problem-solving.",
    price: 195,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-pink/white?text=Learning+Game",
    affiliate_link: "https://example.com/learning-game",
    category: "Toys & Educational Items",
    advertiser_name: "Zcooly",
    advertiser_id: "zcooly",
    advertiser_logo_url: "https://placehold.co/100/baby-blue/white?text=Zcooly",
    commission: "195 SEK",
    rating: 4.5,
    reviews: 67
  },
  {
    name: "Bugaboo Fox 5 Stroller",
    description: "Lightweight, durable, and stylish—perfect for urban parents.",
    price: 8999,
    currency: "SEK",
    image_url: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw9e888cbd/images/PV007571/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-heritage-black-fabrics-heritage-black-sun-canopy-x-PV007571-01.png?sw=800",
    affiliate_link: "https://example.com/stroller",
    category: "Nursery Essentials",
    advertiser_name: "Bugaboo SE",
    advertiser_id: "bugaboo_se",
    advertiser_logo_url: "https://placehold.co/100/soft-blue/white?text=BB",
    commission: "6%",
    is_editors_pick: true,
    rating: 4.5,
    reviews: 42
  },
  {
    name: "Convertible Crib & Toddler Bed Set",
    description: "Grows with your child—from crib to toddler bed.",
    price: 1499,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-yellow/white?text=Crib+Set",
    affiliate_link: "https://example.com/crib-set",
    category: "Nursery Essentials",
    advertiser_name: "Babyland",
    advertiser_id: "babyland",
    advertiser_logo_url: "https://placehold.co/100/soft-yellow/white?text=BL",
    commission: "4%",
    rating: 4,
    reviews: 113
  },
  {
    name: "Axkid Minikid 2 Car Seat",
    description: "Rear-facing for maximum safety—suitable for newborns up to 7 years.",
    price: 2499,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-pink/white?text=Car+Seat",
    affiliate_link: "https://example.com/car-seat",
    category: "Health & Safety",
    advertiser_name: "Axkid SE",
    advertiser_id: "axkid_se",
    advertiser_logo_url: "https://placehold.co/100/baby-blue/white?text=AX",
    commission: "5%",
    is_best_seller: true,
    rating: 5,
    reviews: 214
  },
  {
    name: "Safekid GPS Watch for Kids",
    description: "Track your child's location in real-time with SOS alerts.",
    price: 799,
    currency: "SEK",
    image_url: "https://placehold.co/400x400/soft-peach/white?text=GPS+Watch",
    affiliate_link: "https://example.com/gps-watch",
    category: "Health & Safety",
    advertiser_name: "Safekid SE",
    advertiser_id: "safekid_se",
    advertiser_logo_url: "https://placehold.co/100/baby-pink/white?text=SK",
    commission: "10%",
    rating: 4,
    reviews: 76
  }
];

// Handle API requests
Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if products already exist
    const { count, error: countError } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      throw countError;
    }

    // Only seed if there are no products
    if (count === 0) {
      // Insert products
      const { error } = await supabase
        .from('products')
        .insert(sampleProducts);
      
      if (error) {
        throw error;
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Seeded ${sampleProducts.length} products successfully.` 
        }),
        {
          status: 200,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          }
        }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Database already has ${count} products. Skipping seed.` 
        }),
        {
          status: 200,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          }
        }
      );
    }
  } catch (error) {
    console.error('Error seeding products:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to seed products.', 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        }
      }
    );
  }
});
