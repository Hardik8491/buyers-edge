import React from 'react'

const ProductsPage = () => {
  return (
    <section className="py-16  w-full">
      <div className="container mx-auto  sm:px-4 md:px-6">
        <header className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore Our Products
            </h2>
            <p className="text-sm text-muted-foreground">
              Browse through our wide selection of products.
            </p>
          </div>
        </header>
        <section className="py-12 md:py-16">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  )
}

export default ProductsPage
