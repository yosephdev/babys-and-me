import React from "react";
import { useAdvertiserProducts } from "@/hooks/useAdvertiserProducts";
import { ProductCard } from "@/components/products/ProductCard";
import { Loader2 } from "lucide-react";

const advertisers = [
  { id: "axkid-se", name: "Axkid SE" },
  { id: "baby-v", name: "Baby V" },
  { id: "babyland", name: "Babyland" },
  { id: "babyworld-se", name: "BabyWorld SE" },
  { id: "berg-se", name: "BERG SE" },
  { id: "bugaboo-se", name: "Bugaboo SE" },
  { id: "litenleker", name: "Litenleker" },
  { id: "polarn-o-pyret", name: "Polarn O. Pyret" },
  { id: "stor-liten", name: "Stor&Liten" },
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {advertisers.map(({ id, name }) => {
        const { products, isLoading, error } = useAdvertiserProducts({ advertiserId: id, pageSize: 6 });

        return (
          <section key={id} className="py-8">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            {isLoading && <Loader2 className="mx-auto animate-spin text-pink-500" />}
            {error && <p className="text-red-500 text-center">Error: {error.message}</p>}
            {!isLoading && products.length === 0 && <p className="text-center">No products found.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HomePage;