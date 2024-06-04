//@ts-nocheck
"use client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ShoppingCartIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "@/utils/calculateTotalQuatity";

export function CartNav() {
  const { cart } = useSelector((state) => state.cart);
  const totalQuantity = calculateTotalQuantity(cart);

  
  return (
    // <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="secondary" size="icon" className="rounded-full">
    //             <CircleUser className="h-5 w-5" />
    //             <span className="sr-only">Toggle user menu</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>Settings</DropdownMenuItem>
    //           <DropdownMenuItem>Support</DropdownMenuItem>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>Logout</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative rounded-full" size="icon" variant="outline">
          <ShoppingCartIcon className="h-5 w-5 text-black dark:text-gray-400" />
          <div className="  absolute -top-2 -right-1 bg-black border border-gray-800 text-white rounded-full px-2  items-center justify-center py-0.5 text-xs font-medium">
          {totalQuantity}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80  bg-white dark:text-gray-100 dark:bg-gray-950 text-black">
        <DropdownMenuLabel>Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <Image
                alt="Product Image"
                className="rounded-md"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">Stylish Sunglasses</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $19.99
                </p>
              </div>
              <div className="ml-auto">
                <Button
                  className="rounded-full border-none"
                  size="icon"
                  variant="outline"
                >
                  <XIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <Image
                alt="Product Image"
                className="rounded-md"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <h3 className="font-medium">Leather Crossbody Bag</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $29.99
                </p>
              </div>
              <div className="ml-auto">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <XIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <Link href="/account/cart">
          <DropdownMenuItem className="cursor-pointer  dark:hover:bg-gray-800 hover:bg-gray-100">
            View Cart
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>

        <Link href="/Checkout">
          <DropdownMenuItem className="cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100">
            Checkout
            <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
