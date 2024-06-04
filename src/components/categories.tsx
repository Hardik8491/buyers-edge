//@ts-nocheck
import React from "react";

import { Card, CardContent } from "./ui/card";
import { Image } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/categories-carousel";
import Link from "next/link";
const Categories = () => {
  return (
    <section className="pt-4 w-full">
      <div className="container mx-auto  sm:px-4 md:px-6">
        <header className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore Our Categories
            </h2>
            <p className="text-sm text-muted-foreground">
              Browse through our wide selection of product categories.
            </p>
          </div>
        </header>
        <main className=" my-4   w-full py-4 ">
          {/* <Carousel className="overflow-x-auto  scrollbar-hide">
            <CarouselContent className="flex  gap-4">
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col  items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <ShirtIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Shirts
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <PenIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pants
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <FootprintsIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Shoes
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <AccessibilityIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Accessories
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <ShoppingBagIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Bags
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <GemIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Jewelry
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <FlowerIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Beauty
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <CircuitBoardIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Electronics
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <HomeIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Home
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <FanIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sports
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <SunSnowIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Outdoor
                  </span>
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                    <BabyIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Kids
                  </span>
                </Link>
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}
          <div className="grid   border-gray-900 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4  overflow-x-auto scrollbar-hide">
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <ShirtIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Shirts
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <PenIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Pants
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <FootprintsIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Shoes
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <AccessibilityIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Accessories
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <ShoppingBagIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Bags
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <GemIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Jewelry
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <FlowerIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Beauty
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <CircuitBoardIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Electronics
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <HomeIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Home
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <FanIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sports
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <SunSnowIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Outdoor
              </span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center dark:bg-gray-800">
                <BabyIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Kids
              </span>
            </Link>
         
          </div>
        </main>
      </div>
    </section>
  );
};

export default Categories;

function AccessibilityIcon(props) {
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

function BabyIcon(props) {
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircuitBoardIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

function FanIcon(props) {
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
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
    </svg>
  );
}

function FlowerIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  );
}

function FootprintsIcon(props) {
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
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}

function GemIcon(props) {
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
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PenIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function ShirtIcon(props) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function SunSnowIcon(props) {
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
      <path d="M10 9a3 3 0 1 0 0 6" />
      <path d="M2 12h1" />
      <path d="M14 21V3" />
      <path d="M10 4V3" />
      <path d="M10 21v-1" />
      <path d="m3.64 18.36.7-.7" />
      <path d="m4.34 6.34-.7-.7" />
      <path d="M14 12h8" />
      <path d="m17 4-3 3" />
      <path d="m14 17 3 3" />
      <path d="m21 15-3-3 3-3" />
    </svg>
  );
}
