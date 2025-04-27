import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import { fetchProducts, AdtractionProduct } from "@/services/adtractionApi";
import { products as hardcodedProducts, Product } from "@/data/products";

interface UseProductsProps {
  category?: string;
  initialPage?: number;
  pageSize?: number;
}

export const useProducts = ({
  category,
  initialPage = 0,
  pageSize = 10
}: UseProductsProps = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [category]);
  
  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["products", category, currentPage, pageSize],
    // TODO: Switch back to fetchProducts(category, currentPage, pageSize) when ready to use API
    queryFn: () => {
      // Filter and paginate hardcoded products
      let filtered = hardcodedProducts;
      if (category && category !== "All") {
        filtered = filtered.filter(p => p.category === category);
      }
      const start = currentPage * pageSize;
      const end = start + pageSize;
      return Promise.resolve({
        products: filtered.slice(start, end),
        count: filtered.length
      });
    },
  });
  
  const nextPage = () => {
    if (data && currentPage < Math.ceil(data.count / pageSize) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToPage = (page: number) => {
    if (data && page >= 0 && page < Math.ceil(data.count / pageSize)) {
      setCurrentPage(page);
    }
  };
  
  const totalPages = data ? Math.ceil(data.count / pageSize) : 0;
  
  return {
    products: data?.products || [],
    isLoading,
    error,
    refetch,
    pagination: {
      currentPage,
      totalPages,
      hasNextPage: data ? currentPage < Math.ceil(data.count / pageSize) - 1 : false,
      hasPrevPage: currentPage > 0,
      nextPage,
      prevPage,
      goToPage
    },
    count: data?.count || 0
  };
};
