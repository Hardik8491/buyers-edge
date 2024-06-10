"use client";

import { useState, useMemo, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
interface SelectedFilters {
  category: string[];
  price: number[]; // Assuming price is a string, modify as per your requirement
  brand: string[];
  color: string[];
  size: string[];
}

// Define the type for the filter change handler arguments
type FilterType = "category" | "price" | "brand" | "color" | "size";

export default function Products() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    price: [0, 1000],
    brand: [],
    color: [],
    size: [],
  });
  const [darkMode, setDarkMode] = useState(false);
  const handleFilterChange = (type: FilterType, value: string) => {
    if (type === "category") {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        category: prevFilters.category.includes(value)
          ? prevFilters.category.filter((item) => item !== value)
          : [...prevFilters.category, value],
      }));
    } else if (type === "price") {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        price: [Number(value)], // Convert value to number and put it in an array
      }));
    } else if (type === "brand") {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        brand: prevFilters.brand.includes(value)
          ? prevFilters.brand.filter((item) => item !== value)
          : [...prevFilters.brand, value],
      }));
    } else if (type === "color") {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        color: prevFilters.color.includes(value)
          ? prevFilters.color.filter((item) => item !== value)
          : [...prevFilters.color, value],
      }));
    } else if (type === "size") {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        size: prevFilters.size.includes(value)
          ? prevFilters.size.filter((item) => item !== value)
          : [...prevFilters.size, value],
      }));
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  const products = [
    {
      id: 1,
      name: "Beach Bliss Flip-Flops",
      description: "Comfortable Footwear",
      price: 19.99,
      brand: "Acme",
      category: "Shoes",
      color: ["blue", "green"],
      size: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "Sunset Shades Sunglasses",
      description: "UV Protection Eyewear",
      price: 29.99,
      brand: "Sunglare",
      category: "Accessories",
      color: ["black", "tortoiseshell"],
      size: ["one size"],
    },
    {
      id: 3,
      name: "Cool Breeze Portable Fan",
      description: "On-the-Go Cooling",
      price: 14.99,
      brand: "Breeze",
      category: "Accessories",
      color: ["white", "gray"],
      size: ["one size"],
    },
    {
      id: 4,
      name: "Summer Breeze T-Shirt",
      description: "Lightweight Cotton Shirt",
      price: 24.99,
      brand: "Breezy",
      category: "Tops",
      color: ["white", "navy", "olive"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      name: "Sunset Beach Shorts",
      description: "Quick-Dry Swim Shorts",
      price: 34.99,
      brand: "Beachside",
      category: "Shorts",
      color: ["blue", "khaki"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Sunset Beach Pants",
      description: "Lightweight Cotton Pants",
      price: 299.99,
      brand: "Beachside",
      category: "Pants",
      color: ["beige", "olive"],
      size: ["28", "30", "32", "34", "36"],
    },
    {
      id: 7,
      name: "Sunset Beach Towel",
      description: "Absorbent Cotton Towel",
      price: 19.99,
      brand: "Beachside",
      category: "Accessories",
      color: ["blue", "white", "yellow"],
      size: ["one size"],
    },
  ];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.includes(product.category)
      ) {
        return false;
      }
      if (
        selectedFilters.brand.length > 0 &&
        !selectedFilters.brand.includes(product.brand)
      ) {
        return false;
      }
      if (
        selectedFilters.color.length > 0 &&
        selectedFilters.color.every((color) => !product.color.includes(color))
      ) {
        return false;
      }
      if (
        selectedFilters.size.length > 0 &&
        selectedFilters.size.every((size) => !product.size.includes(size))
      ) {
        return false;
      }
      if (
        product.price < selectedFilters.price[0] ||
        product.price > selectedFilters.price[1]
      ) {
        return false;
      }
      return true;
    });
  }, [selectedFilters]);
  const [sort, setSort] = useState("featured");
  const handleSort = (key: SetStateAction<string>) => {
    setSort(key);
  };
  const sortedProducts = useMemo(() => {
    switch (sort) {
      case "featured":
        return filteredProducts;
      case "newest":
        return [...filteredProducts].sort((a, b) => b.id - a.id);
      case "low":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "high":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  }, [filteredProducts, sort]);

  return (
    // <div
    //   className={`flex flex-col md:flex-row gap-8 p-4 md:p-6 ${
    //     darkMode ? "dark" : ""
    //   }`}
    // >
    //   <div className="w-full md:w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
    //     <h2 className="text-lg font-bold mb-4">Filters</h2>
    //     <nav className="grid gap-4">
    //       <Button
    //         variant={
    //           selectedFilters.category.includes("Shoes") ? "primary" : "outline"
    //         }
    //         onClick={() => handleFilterChange("category", "Shoes")}
    //         className="justify-start gap-2"
    //       >
    //         <FootprintsIcon className="w-5 h-5" />
    //         Shoes
    //       </Button>
    //       <Button
    //         variant={
    //           selectedFilters.category.includes("Tops") ? "primary" : "outline"
    //         }
    //         onClick={() => handleFilterChange("category", "Tops")}
    //         className="justify-start gap-2"
    //       >
    //         <ShirtIcon className="w-5 h-5" />
    //         Tops & T-Shirts
    //       </Button>
    //       <Button
    //         variant={
    //           selectedFilters.category.includes("Shorts")
    //             ? "primary"
    //             : "outline"
    //         }
    //         onClick={() => handleFilterChange("category", "Shorts")}
    //         className="justify-start gap-2"
    //       >
    //         <SubscriptIcon className="w-5 h-5" />
    //         Shorts
    //       </Button>
    //       <Button
    //         variant={
    //           selectedFilters.category.includes("Pants") ? "primary" : "outline"
    //         }
    //         onClick={() => handleFilterChange("category", "Pants")}
    //         className="justify-start gap-2"
    //       >
    //         <PenIcon className="w-5 h-5" />
    //         Pants & Tights
    //       </Button>
    //       <Button
    //         variant={
    //           selectedFilters.category.includes("Accessories")
    //             ? "primary"
    //             : "outline"
    //         }
    //         onClick={() => handleFilterChange("category", "Accessories")}
    //         className="justify-start gap-2"
    //       >
    //         <ActivityIcon className="w-5 h-5" />
    //         Accessories & Equipment
    //       </Button>
    //     </nav>
    //     <Accordion type="single" collapsible className="mt-4">
    //       <AccordionItem value="price">
    //         <AccordionTrigger className="text-base">Price</AccordionTrigger>
    //         <AccordionContent>
    //           <Slider
    //             min={0}
    //             max={500}
    //             step={10}
    //             value={[Number(selectedFilters.price)]}
    //             onValueChange={(value) => handleFilterChange("price", value)}
    //             className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-primary [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
    //           />
    //           <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
    //             <span>${selectedFilters.price[0]}</span>
    //             <span>${selectedFilters.price[1]}</span>
    //           </div>
    //         </AccordionContent>
    //       </AccordionItem>
    //       <AccordionItem value="brand">
    //         <AccordionTrigger className="text-base">Brand</AccordionTrigger>
    //         <AccordionContent>
    //           <nav className="grid gap-2">
    //             <Button
    //               variant={
    //                 selectedFilters.brand.includes("Acme")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("brand", "Acme")}
    //               className="justify-start gap-2"
    //             >
    //               <StoreIcon className="w-5 h-5" />
    //               Acme
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.brand.includes("Sunglare")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("brand", "Sunglare")}
    //               className="justify-start gap-2"
    //             >
    //               <StoreIcon className="w-5 h-5" />
    //               Sunglare
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.brand.includes("Breeze")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("brand", "Breeze")}
    //               className="justify-start gap-2"
    //             >
    //               <StoreIcon className="w-5 h-5" />
    //               Breeze
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.brand.includes("Breezy")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("brand", "Breezy")}
    //               className="justify-start gap-2"
    //             >
    //               <StoreIcon className="w-5 h-5" />
    //               Breezy
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.brand.includes("Beachside")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("brand", "Beachside")}
    //               className="justify-start gap-2"
    //             >
    //               <StoreIcon className="w-5 h-5" />
    //               Beachside
    //             </Button>
    //           </nav>
    //         </AccordionContent>
    //       </AccordionItem>
    //       <AccordionItem value="color">
    //         <AccordionTrigger className="text-base">Color</AccordionTrigger>
    //         <AccordionContent>
    //           <nav className="grid grid-cols-3 gap-2">
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("blue")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "blue")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-blue-500" />
    //               Blue
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("green")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "green")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-green-500" />
    //               Green
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("black")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "black")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-black" />
    //               Black
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("white")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "white")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-white border" />
    //               White
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("gray")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "gray")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-gray-500" />
    //               Gray
    //             </Button>
    //             <Button
    //               variant={
    //                 selectedFilters.color.includes("beige")
    //                   ? "primary"
    //                   : "outline"
    //               }
    //               onClick={() => handleFilterChange("color", "beige")}
    //               className="justify-start gap-2 px-2 py-1 rounded-full"
    //             >
    //               <div className="w-5 h-5 rounded-full bg-beige-500" />
    //               Beige
    //             </Button>
    //           </nav>
    //         </AccordionContent>
    //       </AccordionItem>
    //       <AccordionItem value="size">
    //         <AccordionTrigger className="text-base">Size</AccordionTrigger>
    //         <AccordionContent>
    //           <nav className="grid grid-cols-3 gap-2">
    //             {["S", "M", "L", "XL", "28", "30", "32", "34", "36"].map(
    //               (size) => (
    //                 <Button
    //                   key={size}
    //                   variant={
    //                     selectedFilters.size.includes(size)
    //                       ? "primary"
    //                       : "outline"
    //                   }
    //                   onClick={() => handleFilterChange("size", size)}
    //                   className="justify-start gap-2 px-2 py-1 rounded-full"
    //                 >
    //                   {size}
    //                 </Button>
    //               )
    //             )}
    //           </nav>
    //         </AccordionContent>
    //       </AccordionItem>
    //     </Accordion>
    //   </div>
    //   <div className="w-full">
    //     <header className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-4 py-3 mb-4">
    //       <div className="flex items-center justify-between">
    //         <h1 className="text-lg font-bold">Products Collection</h1>
    //         <div className="flex items-center gap-4">
    //           <nav className="flex items-center gap-4">
    //             <Button
    //               variant={sort === "featured" ? "primary" : "outline"}
    //               onClick={() => handleSort("featured")}
    //               className="flex items-center gap-2"
    //             >
    //               <StarIcon className="w-5 h-5" />
    //               Featured
    //             </Button>
    //             <Button
    //               variant={sort === "newest" ? "primary" : "outline"}
    //               onClick={() => handleSort("newest")}
    //               className="flex items-center gap-2"
    //             >
    //               <ClockIcon className="w-5 h-5" />
    //               Newest
    //             </Button>
    //             <Button
    //               variant={sort === "low" ? "primary" : "outline"}
    //               onClick={() => handleSort("low")}
    //               className="flex items-center gap-2"
    //             >
    //               <ArrowUpIcon className="w-5 h-5" />
    //               Price: Low to High
    //             </Button>
    //             <Button
    //               variant={sort === "high" ? "primary" : "outline"}
    //               onClick={() => handleSort("high")}
    //               className="flex items-center gap-2"
    //             >
    //               <ArrowDownIcon className="w-5 h-5" />
    //               Price: High to Low
    //             </Button>
    //           </nav>

    //         </div>
    //       </div>
    //     </header>

    //     <div className="grid grid-cols-3 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    //       {filteredProducts.map((product) => (
    //         <div
    //           key={product.id}
    //           className="bg-white rounded-lg border overflow-hidden shadow-lg dark:bg-gray-950"
    //         >
    //           <Link href="#" className="block" prefetch={false}>
    //             <Image
    //               src="/placeholder.svg"
    //               alt="Product 1"
    //               // width={400}
    //               // height={300}
    //               // className="w-full h-52 md:h-60 object-cover"
    //               className="object-cover border aspect-square object-center w-full h-full"
    //               // className="w-[200px] sm:w-[250px]  md:w-[10rem] lg:w-[250px] h-40 sm:h-64   md:h-40 lg:h-56 object-cover"
    //               width={250}
    //               height={250}
    //             />
    //           </Link>
    //           <div className="p-4">
    //             <h3 className="font-medium md:font-semibold line-clamp-2 sm:line-clamp-1 text-base md:text-lg mb-2">
    //               <Link
    //                 href="#"
    //                 className="hover:text-primary transition-colors"
    //                 prefetch={false}
    //               >
    //                 {product?.name}
    //               </Link>
    //             </h3>
    //             <div className="flex items-center mb-2">
    //               <div className="flex text-xs lg:text-base  items-center gap-0.5 text-primary">
    //                 <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
    //                 <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
    //                 <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />

    //                 <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-muted stroke-muted-foreground" />
    //                 <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-muted stroke-muted-foreground" />
    //               </div>
    //               <span className="text-[0.5rem]  md:text-xs text-gray-500 ml-2">
    //                 (23)
    //               </span>
    //             </div>
    //             <div className="flex justify-between items-center">
    //               <span className=" text-sm font-medium sm:text-base md:text-lg sm:font-semibold lg:text-2xl md:font-bold">
    //                 ${product?.price}
    //               </span>
    //               <Button
    //                 className=" hidden sm:block text-[0.5rem] p-2  h-6 md:h-6 lg:h-9 lg:text-sm"
    //                 size="sm"
    //               >
    //                 Add to Cart
    //               </Button>
    //               <Button
    //                 className="sm:hidden w-5 h-6  items-center flex justify-center  rounded-full "
    //                 size="icon"
    //               >
    //                 <ShoppingBag className="h-4 w-4" />
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <main>
      <header className="px-4 md:px-6 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-black">
              <BreadcrumbPage>products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div
        className={`flex flex-col md:flex-row gap-8 px-4 md:px-6 ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="w-full md:w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <nav className="grid gap-4">
            <Button
              variant={
                selectedFilters.category.includes("Shoes")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilterChange("category", "Shoes")}
              className="justify-start gap-2"
            >
              <FootprintsIcon className="w-5 h-5" />
              Shoes
            </Button>
            <Button
              variant={
                selectedFilters.category.includes("Tops")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilterChange("category", "Tops")}
              className="justify-start gap-2"
            >
              <ShirtIcon className="w-5 h-5" />
              Tops & T-Shirts
            </Button>
            <Button
              variant={
                selectedFilters.category.includes("Shorts")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilterChange("category", "Shorts")}
              className="justify-start gap-2"
            >
              <SubscriptIcon className="w-5 h-5" />
              Shorts
            </Button>
            <Button
              variant={
                selectedFilters.category.includes("Pants")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilterChange("category", "Pants")}
              className="justify-start gap-2"
            >
              <PenIcon className="w-5 h-5" />
              Pants & Tights
            </Button>
            <Button
              variant={
                selectedFilters.category.includes("Accessories")
                  ? "primary"
                  : "outline"
              }
              onClick={() => handleFilterChange("category", "Accessories")}
              className="justify-start gap-2"
            >
              <ActivityIcon className="w-5 h-5" />
              Accessories & Equipment
            </Button>
          </nav>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="price">
              <AccordionTrigger className="text-base">Price</AccordionTrigger>
              <AccordionContent>
                <Slider
                  min={0}
                  max={500}
                  step={10}
                  value={[Number(selectedFilters.price)]}
                  onValueChange={(value) => handleFilterChange("price", value)}
                  className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-primary [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>${selectedFilters.price[0]}</span>
                  <span>${selectedFilters.price[1]}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand">
              <AccordionTrigger className="text-base">Brand</AccordionTrigger>
              <AccordionContent>
                <nav className="grid gap-2">
                  <Button
                    variant={
                      selectedFilters.brand.includes("Acme")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("brand", "Acme")}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    Acme
                  </Button>
                  <Button
                    variant={
                      selectedFilters.brand.includes("Sunglare")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("brand", "Sunglare")}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    Sunglare
                  </Button>
                  <Button
                    variant={
                      selectedFilters.brand.includes("Breeze")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("brand", "Breeze")}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    Breeze
                  </Button>
                  <Button
                    variant={
                      selectedFilters.brand.includes("Breezy")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("brand", "Breezy")}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    Breezy
                  </Button>
                  <Button
                    variant={
                      selectedFilters.brand.includes("Beachside")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("brand", "Beachside")}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    Beachside
                  </Button>
                </nav>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="color">
              <AccordionTrigger className="text-base">Color</AccordionTrigger>
              <AccordionContent>
                <nav className="grid grid-cols-3 gap-2">
                  <Button
                    variant={
                      selectedFilters.color.includes("blue")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "blue")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500" />
                    Blue
                  </Button>
                  <Button
                    variant={
                      selectedFilters.color.includes("green")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "green")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500" />
                    Green
                  </Button>
                  <Button
                    variant={
                      selectedFilters.color.includes("black")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "black")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-black" />
                    Black
                  </Button>
                  <Button
                    variant={
                      selectedFilters.color.includes("white")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "white")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-white border" />
                    White
                  </Button>
                  <Button
                    variant={
                      selectedFilters.color.includes("gray")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "gray")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-gray-500" />
                    Gray
                  </Button>
                  <Button
                    variant={
                      selectedFilters.color.includes("beige")
                        ? "primary"
                        : "outline"
                    }
                    onClick={() => handleFilterChange("color", "beige")}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-beige-500" />
                    Beige
                  </Button>
                </nav>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger className="text-base">Size</AccordionTrigger>
              <AccordionContent>
                <nav className="grid grid-cols-3 gap-2">
                  {["S", "M", "L", "XL", "28", "30", "32", "34", "36"].map(
                    (size) => (
                      <Button
                        key={size}
                        variant={
                          selectedFilters.size.includes(size)
                            ? "primary"
                            : "outline"
                        }
                        onClick={() => handleFilterChange("size", size)}
                        className="justify-start gap-2 px-2 py-1 rounded-full"
                      >
                        {size}
                      </Button>
                    )
                  )}
                </nav>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <header className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-4 py-3 mb-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">Products Collection</h1>
              <div className="flex items-center gap-4">
                <nav className="flex items-center gap-4">
                  <Button
                    variant={sort === "featured" ? "primary" : "outline"}
                    onClick={() => handleSort("featured")}
                    className="flex items-center gap-2"
                  >
                    <StarIcon className="w-5 h-5" />
                    Featured
                  </Button>
                  <Button
                    variant={sort === "newest" ? "primary" : "outline"}
                    onClick={() => handleSort("newest")}
                    className="flex items-center gap-2"
                  >
                    <ClockIcon className="w-5 h-5" />
                    Newest
                  </Button>
                  <Button
                    variant={sort === "low" ? "primary" : "outline"}
                    onClick={() => handleSort("low")}
                    className="flex items-center gap-2"
                  >
                    <ArrowUpIcon className="w-5 h-5" />
                    Price: Low to High
                  </Button>
                  <Button
                    variant={sort === "high" ? "primary" : "outline"}
                    onClick={() => handleSort("high")}
                    className="flex items-center gap-2"
                  >
                    <ArrowDownIcon className="w-5 h-5" />
                    Price: High to Low
                  </Button>
                </nav>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border overflow-hidden shadow-lg dark:bg-gray-950"
              >
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="/placeholder.svg"
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
                      href="#"
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
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ActivityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function ArrowDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FootprintsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function PenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function StoreIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function SubscriptIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
      <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
    </svg>
  );
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
