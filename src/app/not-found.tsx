import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

const notFound = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="container h-full
       mx-auto px-4 md:px-6"
      >
        {/* <div className="px-2 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>404 Not Found</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div> */}
        <div className="space-y-6 h-full  flex flex-col items-center justify-center ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
            <p className="text-gray-500 text-lg pb-4 ">
              The page you`re looking for doesn`t exist or has been moved.
            </p>
            {/* <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/"
            >
              Go to Home
            </Link> */}
            <Link href="/" >
              <Button variant="secondary" > Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
