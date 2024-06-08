//@ts-nocheck
"use client";
import React, { useCallback, useEffect } from "react";
import Heading from "./ui/heading";
import { useGetProductsQuery } from "../../slices/productSlices";
import ProductCard from "./products-card";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import Loading from "@/app/loading";
import { Product } from "@/lib/types";
import NewPRoduct from "./product-card_new";
import { Separator } from "./ui/separator";

const ProductList: React.FC = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    refetch();
    // Fetch products when component mounts
  }, [refetch]);

  const handleAddToCart = useCallback(
    ({ id, name, price, images }: Product) => {
      dispatch(addToCart({ id, name, price, images, quantity: 1 }));
    },
    [dispatch]
  );

  return (
    <section className="py-4 w-full">
      <div className=" mx-auto sm:px-4 md:px-6">
        <Heading
          title="Recommended For You"
          text="Top picks for you. Updated daily."
        />
        <Separator className="mb-4 my-2 " />
        <main className="flex min-h-[calc(100vh_-_theme(spacing.02))] flex-1 flex-col gap-4 mt-4 bg-muted/40 p-4   mb-4 md:gap-8 ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products &&
              products.length > 0 &&
              products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </main>

        <Heading
          title="Latest Products"
          text="Top picks for you. Updated daily."
        />
        <Separator className="mb-4 my-2 " />

        <main className="flex items-center min-h-[calc(100vh_-_theme(spacing.02))] flex-1 flex-col gap-4 mt-4 bg-muted/40 p-4 md:gap-8 ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-red-500 border-t-transparent h-8 w-8" />
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products &&
              products.length > 0 &&
              products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProductList;
