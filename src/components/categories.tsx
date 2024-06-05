import React from "react";
import Link from "next/link";
import { ShirtIcon, PenIcon, FootprintsIcon, ShoppingBagIcon, GemIcon, FlowerIcon, CircuitBoardIcon, HomeIcon, FanIcon, SunSnowIcon, BabyIcon } from "lucide-react";

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
      <div className="container mx-auto sm:px-4 md:px-6">
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
        <main className="my-4 w-full py-4">
          <div className="grid border-gray-900 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4 overflow-x-auto scrollbar-hide">
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
        </main>
      </div>
    </section>
  );
};

export default Categories;

function AccessibilityIcon(props:any) {
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
