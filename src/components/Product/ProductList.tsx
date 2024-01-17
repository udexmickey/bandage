"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ProductCard from "../ProductCard/ProductCard";

// Define your fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network error occurred");
  }
  return response.json();
};

const PAGE_SIZE = 10; // Adjust based on your pagination logic

interface Product {
  id: number;
  title: string;
  department: string;
  images: string[];
  price: number;

  description: string;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category: string;
  thumbnail?: string;
}

interface APIData {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
  // Add more properties if needed
}

interface ProductListProps {
  url: string;
  itemsToFetch?: number;
}

const ProductList: React.FC<ProductListProps> = ({ url, itemsToFetch = 5 }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: products,
    isValidating,
    error,
    mutate,
  } = useSWR(`${url}?page=${currentPage}&limit=${itemsToFetch}`, fetcher);

  const handleLoadMore = async () => {
    const updatedNextPage = currentPage + 1;

    console.log(
      "Before mutate. currentPage:",
      currentPage,
      "updatedNextPage:",
      updatedNextPage
    );

    try {
      await mutate(async (prevData: any) => {
        const newData = await fetcher(
          `${url}?page=${updatedNextPage}&limit=${itemsToFetch}`
        );
        return [...(prevData?.products || []), ...newData];
      });

      setCurrentPage(updatedNextPage);
      console.log("After mutate. Updated currentPage:", updatedNextPage);
    } catch (error: any) {
      console.error(
        "Error while fetching new products:",
        error.message as string
      );
    }
  };

  const hasMoreItems = Array.isArray(products) && products.length > 0;

  useEffect(() => {
    console.log("products", products);
    console.log("itemsToFetch", itemsToFetch);
  }, [products, itemsToFetch]);

  return (
    <div>
      {/* Display products */}
      <section className="w-full mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products &&
          products?.products?.map((product: Product) => (
            <ProductCard
              key={product.id}
              image={product?.images[0] ?? "/images/furniture-3.png"}
              title={product?.title}
              department={product?.department}
              price={product?.price}
              oldPrice={39.99}
              id={product?.id}
              description={product?.description}
              discountPercentage={product?.discountPercentage}
              category={product?.category}
            />
          ))}
      </section>

      {/* Load more button */}
      {!hasMoreItems && (
        <button
          onClick={handleLoadMore}
          disabled={isValidating}
          style={{
            cursor: isValidating ? "not-allowed" : "pointer",
          }}
        >
          {isValidating ? "Loading..." : "Load More Products"}
        </button>
      )}

      {/* Display error message if there's an error */}
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
};

export default ProductList;
