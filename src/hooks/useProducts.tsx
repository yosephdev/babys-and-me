import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, AdtractionProduct } from "@/services/adtractionApi";
import { Product } from "@/data/products";

interface UseProductsProps {
  category?: string;
  initialPage?: number;
  pageSize?: number;
  useRealApi?: boolean;
}

export const useProducts = ({
  category,
  initialPage = 0,
  pageSize = 10,
  useRealApi = true
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
    queryKey: ["products", category, currentPage, pageSize, useRealApi],
    queryFn: () => {
      // Use the real Adtraction API
      return fetchProducts(
        category !== "All" ? category : undefined, 
        currentPage, 
        pageSize
      );
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
