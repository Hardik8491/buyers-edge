"use client";
import { SearchIcon } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
}

export function Search() {
  const products: Product[] = [
    { id: 1, name: "Wireless Headphones", image: "/placeholder.svg" },
    { id: 2, name: "Leather Backpack", image: "/placeholder.svg" },
    { id: 3, name: "Smartwatch", image: "/placeholder.svg" },
    { id: 4, name: "Portable Bluetooth Speaker", image: "/placeholder.svg" },
    { id: 5, name: "Noise-Cancelling Earbuds", image: "/placeholder.svg" },
    { id: 6, name: "Fitness Tracker", image: "/placeholder.svg" },
    { id: 7, name: "Wireless Charging Pad", image: "/placeholder.svg" },
    { id: 8, name: "Portable Power Bank", image: "/placeholder.svg" },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsDropdownVisible(false);
    // router.push(`/products/${product.id}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <div>
    //   <Input
    //     type="search"
    //     placeholder="Search..."
    //     className="md:w-[100px] lg:w-[300px]"
    //   />
    // </div>

    <form className="ml-auto flex-1 sm:flex-initial">
      <div className="relative" ref={searchRef}>
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownVisible(true);
          }}
          onClick={() => setIsDropdownVisible(true)}
          type="search"
          placeholder="Search products..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[400px] xl:w-[600px]"
        />
      </div>
      {isDropdownVisible && filteredProducts.length > 0 && (
        <div
          className="absolute z-10 mt-2 sm:w-[300px] md:w-[200px] lg:w-[400px] xl:w-[600px] rounded-lg border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-950"
          ref={searchRef}
        >
          <ul className="max-h-[300px] overflow-auto">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="flex cursor-pointer items-center gap-3 border-b border-gray-200 px-4 py-3 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                onClick={() => router.push("/product")}
                 
              >
                <img
                  src={product.image}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-sm font-medium dark:text-gray-50">
                  {product.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
