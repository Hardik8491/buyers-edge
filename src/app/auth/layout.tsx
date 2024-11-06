import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import Dark from "../../../public/dark.svg";
import Light from "../../../public/light.svg";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-[#060301] to-[#1e0f04] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060301] to-[#1e0f04] opacity-80"></div>
        <div className="relative z-10">{children}</div>
      </div>

      <div className="flex  py-12 bg-gradient-to-br from-[#060301] to-[#1e0f04] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060301] to-[#1e0f04] opacity-80"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/bg-login.jpg')" }}></div>
        <div className="relative z-10 flex flex-col items-start gap-6 px-8">
          <Link className="flex items-center justify-start p-4 gap-2" href="#">
            <Dark className="h-12 w-12 hidden dark:block text-primary" />
            <Light className="h-8 w-8 dark:hidden text-primary" />
            <span className="text-xl left-0 font-bold">
              Buyer`s <span className="text-primary">Edge</span>
            </span>
          </Link>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500  dark:text-gray-400">
              Discover the best deals and products at Buyer`s Edge, your
              one-stop shop for all your shopping needs.
            </p>
          </div>
          <p className="text-center text-lg  text-gray-500 dark:text-gray-400">
            Unlock the power of data-driven procurement with our innovative
            platform. Streamline your buying process and make informed decisions
            that drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default layout;
