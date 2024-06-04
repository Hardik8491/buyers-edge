"use client";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size";

import Confetti from "react-confetti";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const [width, height] = useWindowSize();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Confetti width={width} height={height} />
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center justify-center space-y-6">
          <CircleCheckIcon className="text-green-500 h-16 w-16" />
          <h1
            className="text-3xl font-bold text-gray-900 dark:text-gray-50"
           
          >
            Order Successful
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Thank you for your order! Your order has been placed successfully.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
            href="/account/orders"
          >
            Back to Order Page
          </Link>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props:any) {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
