// hooks/useAdvertiserProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, AdtractionProduct } from "@/services/adtractionApi";

interface UseAdvertiserProductsProps {
  advertiserId?: string;
  pageSize?: number;
}

export const useAdvertiserProducts = ({
  advertiserId,
  pageSize = 10,
}: UseAdvertiserProductsProps = {}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["advertiserProducts", advertiserId, pageSize],
    queryFn: async () => {
      const response = await fetchProducts(undefined, 0, pageSize);
      if (!advertiserId) return response.products;

      const filtered = response.products.filter(
        (p) => p.advertiserId === advertiserId
      );

      const featured = filtered.filter(
        (p) => p.isBestSeller || p.isEditorsPick
      );

      return [
        ...featured,
        ...filtered.filter((p) => !p.isBestSeller && !p.isEditorsPick),
      ].slice(0, pageSize);
    },
  });

  return {
    products: data || [],
    isLoading,
    error,
  };
};