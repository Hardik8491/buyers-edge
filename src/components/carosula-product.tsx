
"use client";
import React, { useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Heading from "./ui/heading";
import { useGetProductsQuery } from "../../slices/productSlices";
import ProductCard from "./products-card";
import { useDispatch } from "react-redux";
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
import { ShoppingBag, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { addToCart } from "../../redux/features/cartSlice";

const CarouselProduct: React.FC = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
    // Fetch products when component mounts
  }, [refetch]);

  const handleAddToCart = useCallback(
    ({ id, name, price, images }: Product) => {
      console.log(id,name,price,images);
      
      dispatch(addToCart({ id, name, price, images, quantity: 1 }));
    },
    [dispatch]
  );

  return (
    <section className="py-4 relative w-full">
      <div className="  mx-auto sm:px-4 md:px-6">
        <Heading title="Today Products " text="Daily Product For You. " />

        <Separator className="mb-4 my-2" />

        <main className="flex min-h-[calc(100vh_-_theme(spacing.02))]  flex-1 flex-col gap-4 py-4 bg-muted/40 p-4 md:gap-8 ">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8" />
            </div>
          )}

          <Carousel
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
          // opts={{
          //   align: "start",
          //   loop: true,
          // }}
          >
            <div className="absolute -top-14  z-10 right-10">
              <CarouselPrevious className="  z-10  transform -translate-y-1/2" />

              <CarouselNext className=" z-10  transform -translate-y-1/2" />
            </div>
            <CarouselContent>
              {products &&
                products.length > 0 &&
                products.map((product: any) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/3 sm:basis-1/4 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 gap-4 "
                  >
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border overflow-hidden shadow-lg dark:bg-gray-950"
                    >
                      <Link href={`product/${product.id}`} className="block" prefetch={false}>
                        <Image
                          src={product.images[0].url || placeholder}
                          alt="Product 1"
                          // width={400}
                          // height={300}
                          // className="w-full h-52 md:h-60 object-cover"
                          className="object-cover border aspect-square object-center w-full h-full"
                          // className="w-[200px] sm:w-[250px]  md:w-[10rem] lg:w-[250px] h-40 sm:h-64   md:h-40 lg:h-56 object-cover"
                          width={250}
                          height={250}
                        />
                      </Link>
                      <div className="p-4">
                        <h3 className="font-medium md:font-semibold line-clamp-2 sm:line-clamp-1 text-base md:text-lg mb-2">
                          <Link
                            href={`product/${product.id}`}
                            className="hover:text-primary transition-colors"
                            prefetch={false}
                          >
                            {product?.name}
                          </Link>
                        </h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-xs lg:text-base  items-center gap-0.5 text-primary">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />

                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-muted stroke-muted-foreground" />
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-muted stroke-muted-foreground" />
                          </div>
                          <span className="text-[0.5rem]  md:text-xs text-gray-500 ml-2">
                            (23)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className=" text-sm font-medium sm:text-base md:text-lg sm:font-semibold lg:text-2xl md:font-bold">
                            ${product?.price}
                          </span>
                          <Button
                            onClick={()=>handleAddToCart(product)}
                            className=" hidden sm:block text-[0.5rem] p-2  h-6 md:h-6 lg:h-9 lg:text-sm"
                            size="sm"
                          >
                            Add to Cart
                          </Button>
                          <Button
                            className="sm:hidden w-5 h-6  items-center flex justify-center  rounded-full "
                            size="icon"
                          >
                            <ShoppingBag className="h-4 w-4" />
                          </Button>
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
