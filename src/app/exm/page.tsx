import Link from "next/link";
import React from "react";
import Dark from "../../../public/dark.svg";
import Light from "../../../public/light.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 text-sm">
        <div className="grid gap-2">
          <Link className="flex items-center gap-2" href="#">
            <Dark className="h-8 w-8 hidden dark:block text-primary" />
            <Light className="h-8 w-8 dark:hidden text-primary" />
            <span className="text-xl font-bold">
              Buyer`s <span className="text-primary">Edge</span>
            </span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Discover the best deals and products at Buyer`s Edge, your
            one-stop shop for all your shopping needs.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Company</h3>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            About Us
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Our Team
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Careers
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            News
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Products</h3>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Outdoor
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Apparel
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Accessories
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Gear
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Blog
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Community
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Support
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            FAQs
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Terms of Service
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Support
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Sales
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Press
          </Link>
          <Link href="#" prefetch={false} className="hover:text-primary transition">
            Partnerships
          </Link>
        </div>
      </div>
      <hr className="mt-8 dark:bg-gray-800" />
      <div className="container mx-auto px-4 md:px-6 py-4 text-center">
        <p className="text-gray-500 text-sm dark:text-gray-400">
          © 2024 Buyer`s Edge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
