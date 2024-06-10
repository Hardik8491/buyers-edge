import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

export default function Component() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: [0, 100],
    brand: [],
    color: [],
    size: [],
  });
  const [darkMode, setDarkMode] = useState(false);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (type === "price") {
        newFilters[type] = value;
      } else {
        newFilters[type] = prevFilters[type].includes(value)
          ? prevFilters[type].filter((item) => item !== value)
          : [...prevFilters[type], value];
      }
      return newFilters;
    });
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
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
        selectedFilters.category.length &&
        !selectedFilters.category.includes(product.category)
      ) {
        return false;
      }
      if (
        selectedFilters.brand.length &&
        !selectedFilters.brand.includes(product.brand)
      ) {
        return false;
      }
      if (
        selectedFilters.color.length &&
        !selectedFilters.color.some((color) => product.color.includes(color))
      ) {
        return false;
      }
      if (
        selectedFilters.size.length &&
        !selectedFilters.size.some((size) => product.size.includes(size))
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

  const handleSort = (key) => {
    setSort(key);
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sort === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    } else if (sort === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredProducts, sort]);

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 p-4 md:p-6 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="w-full md:w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <nav className="grid gap-4">
          {["Shoes", "Tops", "Shorts", "Pants", "Accessories"].map((category) => (
            <Button
              key={category}
              variant={
                selectedFilters.category.includes(category) ? "primary" : "outline"
              }
              onClick={() => handleFilterChange("category", category)}
              className="justify-start gap-2"
            >
              <IconForCategory category={category} className="w-5 h-5" />
              {category}
            </Button>
          ))}
        </nav>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="price">
            <AccordionTrigger className="text-base">Price</AccordionTrigger>
            <AccordionContent>
              <Slider
                min={0}
                max={500}
                step={10}
                value={selectedFilters.price}
                onValueChange={(value) => handleFilterChange("price", value)}
                className="w-full"
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
                {["Acme", "Sunglare", "Breeze", "Breezy", "Beachside"].map((brand) => (
                  <Button
                    key={brand}
                    variant={
                      selectedFilters.brand.includes(brand) ? "primary" : "outline"
                    }
                    onClick={() => handleFilterChange("brand", brand)}
                    className="justify-start gap-2"
                  >
                    <StoreIcon className="w-5 h-5" />
                    {brand}
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="text-base">Color</AccordionTrigger>
            <AccordionContent>
              <nav className="grid grid-cols-3 gap-2">
                {["blue", "green", "black", "white", "gray", "beige"].map((color) => (
                  <Button
                    key={color}
                    variant={
                      selectedFilters.color.includes(color) ? "primary" : "outline"
                    }
                    onClick={() => handleFilterChange("color", color)}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    <div className={`w-5 h-5 rounded-full bg-${color}-500`} />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="size">
            <AccordionTrigger className="text-base">Size</AccordionTrigger>
            <AccordionContent>
              <nav className="grid grid-cols-3 gap-2">
                {["S", "M", "L", "XL", "28", "30", "32", "34", "36"].map((size) => (
                  <Button
                    key={size}
                    variant={
                      selectedFilters.size.includes(size) ? "primary" : "outline"
                    }
                    onClick={() => handleFilterChange("size", size)}
                    className="justify-start gap-2 px-2 py-1 rounded-full"
                  >
                    {size}
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full">
        <header className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-4 py-3 mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Summer Products</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleDarkModeToggle}>
                {darkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </Button>
              <select
                value={sort}
                onChange={(e) => handleSort(e.target.value)}
                className="border rounded px-2 py-1 text-gray-700 dark:text-gray-300 dark:bg-gray-800"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col"
            >
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {product.description}
              </p>
              <span className="text-lg font-bold mb-2">${product.price.toFixed(2)}</span>
              <Button variant="primary" className="mt-auto">
                Add to Cart
              </Button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

function IconForCategory({ category, ...props }) {
  switch (category) {
    case "Shoes":
      return <ShoeIcon {...props} />;
    case "Tops":
      return <ShirtIcon {...props} />;
    case "Shorts":
      return <ShortsIcon {...props} />;
    case "Pants":
      return <PantsIcon {...props} />;
    case "Accessories":
      return <AccessoriesIcon {...props} />;
    default:
      return null;
  }
}

function ShoeIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for ShoeIcon */}
    </svg>
  );
}

function ShirtIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for ShirtIcon */}
    </svg>
  );
}

function ShortsIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for ShortsIcon */}
    </svg>
  );
}

function PantsIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for PantsIcon */}
    </svg>
  );
}

function AccessoriesIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for AccessoriesIcon */}
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for SunIcon */}
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for MoonIcon */}
    </svg>
  );
}

function StoreIcon(props) {
  return (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* SVG path for StoreIcon */}
    </svg>
  );
}
