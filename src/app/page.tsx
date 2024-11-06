
import Banner from "@/components/banner";
import Categories from "@/components/categories";
import Popup from "@/components/popup";
import ProductList from "@/components/product-list";
import { Metadata } from "next";
import NewPRoduct from "../components/product-card_new";
import CarouselProduct from "@/components/carosula-product";
import { Dialog } from "@radix-ui/react-dialog";
import DialogDemo from "@/components/login-dialog";

export const metadata: Metadata = {
  title: "Home",
  description: "Example Ecommarce app using the components.",
};
export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center  ">
      <Banner />
      <Categories />
      <CarouselProduct />
      <ProductList />

      <DialogDemo/>
    </main>
  );
}
