"use client";
import getProducts from "@/action/get-products";
import ProductCard from "@/components/products-card";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import React, { useCallback } from "react";
import getCategory from "@/action/get-category";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component
const Category = async () => {
  const categoryId = useParams().categoryId as string;
  const products = await getProducts({ categoryId });
  const category = await getCategory(categoryId);

  return (
    <section className="py-4 w-full">
      <div className=" mx-auto sm:px-4 md:px-6">
        <div className="border border-gray-800  rounded-xl m-4 bg-muted/40  dark:border-gray-400   relative w-full h-[200px] md:h-[250px] lg:h-[300px] xl:h-[250px] ">
          <Image
            src={category?.billboard?.imageUrl}
            className="w-full h-full  rounded-md object-cover"
            width={1920}
            height={1080}
            alt="billboard"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "contain",
            }}
          />
        </div>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.02))] flex-1 flex-col gap-4 mt-4 bg-muted/40 p-4  mt-10  mb-4 md:gap-8 ">
          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products &&
              products.length > 0 &&
              products.map((product: any) => (
                <ProductCard
                  height={140}
                  width={140}
                  key={product.id}
                  product={product}
                  handleAddToCart={() => {}}
                />
              ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Category;
