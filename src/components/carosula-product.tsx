//@ts-nocheck
"use client";
import React, { useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Heading from "./ui/heading";
import { useGetProductsQuery } from "../../slices/productSlices";
import ProductCard from "./products-card";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import Loading from "@/app/loading";
import { Product } from "@/lib/types";
import NewPRoduct from "./product-card_new";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";

const CarouselProduct: React.FC = () => {
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
    <section className="py-4 relative w-full">
      <div className="  mx-auto sm:px-4 md:px-6">
        <div className="py-2 pb-4">
        <Heading
          title="Caroulas For You"
          text="Top picks for you. Updated daily."
        />

        </div>
        <Separator className="mb-4"/>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.02))]  flex-1 flex-col gap-4 py-4 bg-muted/40 p-4 md:gap-8 ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8" />
            </div>
          )}

  
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
             opts={{
              align: "start",
              loop: true,
            }}
          >
            <div className="absolute -top-10  z-10 right-10">
              <CarouselPrevious className="  z-10  transform -translate-y-1/2" />
           
              <CarouselNext className=" z-10  transform -translate-y-1/2" />
            </div>
            <CarouselContent>
              {products &&
                products.length > 0 &&
                products.map((product: any) => (
                  <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 gap-4 ">
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border overflow-hidden shadow-lg dark:bg-gray-950"
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
                          <span className="text-sm text-gray-500 ml-2">
                            (23)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold">
                            ${product?.price}
                          </span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </main>
      </div>
    </section>
  );
};

export default CarouselProduct;
