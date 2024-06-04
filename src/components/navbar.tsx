import { Metadata } from "next";
import Image from "next/image";
import { MainNav } from "./main-nav";
import { Search } from "./search";
import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";
import SideNav from "./side-nav";
import { CartNav } from "./cart-nav";

// export const metadata: Metadata = {
//   title: "",
//   description: "Example dashboard app built using the components.",
// };

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <MainNav />

      <SideNav />

      <div className="flex   w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Search />
        <UserNav />
        <CartNav />
        <ModeToggle />
      </div>
    </header>
  );
}
