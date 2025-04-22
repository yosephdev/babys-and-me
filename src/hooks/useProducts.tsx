
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, AdtractionProduct } from "@/services/adtractionApi";

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
  
  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["products", category, currentPage, pageSize],
    queryFn: () => fetchProducts(category, currentPage, pageSize),
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
