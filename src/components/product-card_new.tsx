//@ts-nocheck
"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heading from "./ui/heading";

import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../slices/productSlices";
import { addToCart } from "@/redux/features/cartSlice";
import Currency from "./currency";

const placeholder = process.env.NEXT_PUBLIC_IMAGE_PLACEHOLDER;

export default function NewPRoduct() {
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
    <section className="container mx-auto sm:px-4 md:px-6 py-4">
      <header>
        <Heading
          title="Discover Our Latest Arrivals"
          text="Latest Trends, Best Quality, Curated For You."
        />
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  bg-muted/40 py-4 md:gap-8 ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-red-500 border-t-transparent h-8 w-8" />
            </div>
          )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 md:p-6">
      
        {products &&
          products.length > 0 &&
          products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950"
            >
              <Link href="#" className="block" prefetch={false}>
                <Image
                  src={product.images[0].url || placeholder}
                  alt="Product 1"
                  width={400}
                  height={300}
                  className="w-full h-52 md:h-60 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="font-semibold line-clamp-1 text-lg mb-2">
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    {product?.name}
                  </Link>
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center gap-0.5 text-primary">
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(23)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">
                  ${product?.price}
                  </span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
       
      </div>
      </main>
    </section>
    
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
