"use client";
import React, {  } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import {
  ShirtIcon,
  PenIcon,
  FootprintsIcon,
  ShoppingBagIcon,
  GemIcon,
  FlowerIcon,
  CircuitBoardIcon,
  HomeIcon,
  FanIcon,
  SunSnowIcon,
  BabyIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Heading from "./ui/heading";

const categories = [
  { href: "#", icon: ShirtIcon, label: "Shirts" },
  { href: "#", icon: PenIcon, label: "Pants" },
  { href: "#", icon: FootprintsIcon, label: "Shoes" },
  { href: "#", icon: AccessibilityIcon, label: "Accessories" },
  { href: "#", icon: ShoppingBagIcon, label: "Bags" },
  { href: "#", icon: GemIcon, label: "Jewelry" },
  { href: "#", icon: FlowerIcon, label: "Beauty" },
  { href: "#", icon: CircuitBoardIcon, label: "Electronics" },
  { href: "#", icon: HomeIcon, label: "Home" },
  { href: "#", icon: FanIcon, label: "Sports" },
  { href: "#", icon: SunSnowIcon, label: "Outdoor" },
  { href: "#", icon: BabyIcon, label: "Kids" },
];

const Categories = () => {
  return (
    <section className="pt-4 w-full">
      <div className=" mx-auto sm:px-4 md:px-6">
       
        <Heading title="Explore Our Categories" text="Browse through our wide selection of categories."/>
      
        {/* <main className="my-4 w-full py-4">
          <div className="grid border-gray-900 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="flex flex-col items-center gap-2 group"
                prefetch={false}
              >
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800 group-hover:bg-primary">
                  <category.icon className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </main> */}

        <Separator className="mb-4 my-2"/>
       

        <main className="flex min-h-[calc(100vh_-_theme(spacing.02))]   flex-1 flex-col gap-4 p-4  md:gap-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <div className="absolute -top-16 md:block hidden  z-10 right-10">
              <CarouselPrevious className="    z-10  transform -translate-y-1/2" />

              <CarouselNext className=" z-10  transform -translate-y-1/2" />
            </div>
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className=" basis-1/6 sm:basis-1/12 md:basis-[10%] lg:basis-1/12 gap-4 "
                >
                  <Link
                    href={category.href}
                    className="flex flex-col items-center gap-2 group"
                    prefetch={false}
                  >
                    <div className="bg-gray-100 p-4 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-800 group-hover:bg-primary sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                      <category.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 dark:group-hover:text-white group-hover:text-gray-700 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-white sm:text-xs md:text-sm lg:text-base">
                      {category.label}
                    </span>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </main>
      </div>
    </section>
  );
};

export default Categories;

function AccessibilityIcon(props: any) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

// Define other icon components here, similar to AccessibilityIcon
// ...
