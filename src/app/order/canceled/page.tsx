import { CircleXIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Canceled = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center space-y-6">
          <CircleXIcon className="w-16 h-16 text-red-500 animate-pulse" />
          <h1 className="text-3xl font-bold text-red-500 animate-fade-in-up">
            Order Canceled
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center animate-fade-in-up delay-100">
            Your order has been successfully canceled. We apologize for any
            inconvenience.
          </p>
          <Link
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 animate-fade-in-up delay-200"
            href="#"
          >
            Create New Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
