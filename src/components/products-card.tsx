import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon, ShoppingBag, StarIcon } from "lucide-react";
import { RootState } from "@/redux/store"; // Adjust the import path according to your project structure
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { Card, CardContent, CardHeader } from "./ui/card-product";
import { Button } from "./ui/button";
import Currency from "./currency";
import { cn } from "@/lib/utils";

// Define the type for the product and component props
interface Product {
  id: string;
  name: string;
  price: number;
  images: { url: string }[];
}

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
}) => {
  const router = useRouter();
  const { cart } = useSelector((state: RootState) => state.cart);

  // const addedProduct = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden w-full max-w-sm">
      <div
        className="relative"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <Image
          src={product.images[0].url}
          alt="Product Image"
          width={400}
          height={400}
          className="w-full h-56 md:block hidden object-cover"
        />
        <Image
          src={product.images[0].url}
          alt="Product 1"
          // width={400}
          // height={300}
          // className="w-full h-52 md:h-60 object-cover"
          className=" md:hidden object-cover border aspect-square object-center w-full h-full"
          // className="w-[200px] sm:w-[250px]  md:w-[10rem] lg:w-[250px] h-40 sm:h-64   md:h-40 lg:h-56 object-cover"
          width={250}
          height={250}
        />

        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className=" bg-gray-900 dark:bg-gray-50  hover:text-gray-400 text-white dark:text-gray-900 px-3 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <HeartIcon className="w-5 h-5" />
            <span className="sr-only">Add to Wishlist</span>
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1 mb-2">
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1 text-yellow-500">
            <StarIcon className="  h-3 w-3 sm:w-4 sm:h-4  md:w-5 md:h-5" />
            <StarIcon className="  h-3 w-3 sm:w-4 sm:h-4  md:w-5 md:h-5" />
            <StarIcon className="  h-3 w-3 sm:w-4 sm:h-4  md:w-5 md:h-5" />
            <StarIcon className="  h-3 w-3 sm:w-4 sm:h-4  md:w-5 md:h-5" />
            {/* <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" /> */}
            <StarIcon className=" h-3 w-3 sm:w-4 sm:h-4  md:w-5 md:h-5 text-gray-300 dark:text-gray-600" />
          </div>
          <span className="ml-2 text-gray-500 dark:text-gray-400  text-[0.5rem] sm:text-xs md:text-sm">
            {/* (23 reviews) */}
            (23)
          </span>
        </div>
        <div className="flex justify-between items-center">
          {/* <span className=" text-xl font-semibold sm:text-xl md:text-2xl sm:font-bold"> */}
          <span className=" text-sm font-medium sm:text-base md:text-lg sm:font-semibold lg:text-2xl md:font-bold">
            ${product?.price}
          </span>
          <Button
            size="sm"
            onClick={() => handleAddToCart(product)}
            className="bg-gray-900 hidden sm:block dark:bg-gray-50 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Add to Cart
          </Button>
          <Button
            className="sm:hidden  w-5 h-6  items-center flex justify-center  rounded-full "
            size="icon"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
