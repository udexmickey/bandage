"use client";
import { useState } from "react";
import HomeHero from "@/components/HeroSections/home-Hero";
import TopMenu from "@/components/Menu/TopHeader.menu";
import PromotionMenu from "@/components/Menu/promotion.menu";
import ProductCard from "@/components/ProductCard/ProductCard";
// import ProductList from "@/components/Product/ProductList";
import dynamic from "next/dynamic";

const DynamicProductList = dynamic(
  () => import("@/components/Product/ProductList"),
  { ssr: false } // Set ssr to false to disable server-side rendering for this component
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any>([]);

  const apiUrl = "https://dummyjson.com/products";

  const mutateFunction = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network error occurred");
    }
    const data = await response.json();

    setProducts((prevProducts: any) => [...prevProducts, ...data]);

    return data;
  };

  return (
    <div
      style={{ position: "relative" }}
      className="flex min-h-screen flex-col"
    >
      {/* Promotion Menu */}
      <div
        style={{ position: "absolute", width: "100%", zIndex: 1 }}
        className="hidden md:block w-full"
      >
        <PromotionMenu />
      </div>
      <div
        style={{ position: "relative", width: "100%", zIndex: 2 }}
        className="sm:top-0 md:top-[56px] w-full"
      >
        {/* Top Menu */}
        <TopMenu />
      </div>

      <main className="w-full p-8 flex flex-col items-center justify-center mt-14 gap-y-32">
        {/* Hero section */}
        <section className="w-full mx-auto max-w-7xl">
          <HomeHero />
        </section>

        {/* Featured product */}
        <section className="w-full mx-auto max-w-7xl flex flex-wrap gap-6">
          {/* <ProductCard
            image="/images/furniture-3.png"
            title="Product Title"
            department="Product Department"
            currentPrice={29.99}
            oldPrice={39.99}
          />
          <ProductCard
            image="/images/furniture-3.png"
            title="Product Title"
            department="Product Department"
            currentPrice={29.99}
            oldPrice={39.99}
          />
          <ProductCard
            image="/images/furniture-3.png"
            title="Product Title"
            department="Product Department"
            currentPrice={29.99}
            oldPrice={39.99}
          />
          <ProductCard
            image="/images/furniture-3.png"
            title="Product Title"
            department="Product Department"
            currentPrice={29.99}
            oldPrice={39.99}
          />
          <ProductCard
            image="/images/furniture-3.png"
            title="Product Title"
            department="Product Department"
            currentPrice={29.99}
            oldPrice={39.99}
          /> */}
          <DynamicProductList
            // products={products}
            // nextPage={currentPage}
            // fetchUrl={apiUrl}
            // mutate={mutateFunction}
            itemsToFetch={10} // The desired number of prod to fetch
            url={apiUrl}
          />
        </section>
      </main>
    </div>
  );
}
