import Banner from "@/components/banner";
import Categories from "@/components/categories";
import Popup from "@/components/popup";
import ProductList from "@/components/product-list";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Example Ecommarce app using the components.",
};
export default function Home() {
  return (
    <main className="flex smo min-h-screen flex-col items-center  ">
      <Banner />
      <Categories />
      <ProductList />
      <Popup />
    </main>
  );
}
