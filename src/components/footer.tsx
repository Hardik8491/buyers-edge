import Link from "next/link";
import Dark from "../../public/dark.svg";
import Light from "../../public/light.svg";
export default function Footer() {
  return (
    <footer className="bg-white py-12 dark:bg-gray-950 border-t  mt-2">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2" href="#">
            <Dark className="h-12 w-12 hidden dark:block text-primary" />
            <Light className="h-8 w-8 dark:hidden text-primary" />
            <span className="text-xl font-bold">
              Buyer`s <span className="text-primary">Edge</span>
            </span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Discover the best deals and products at Buyer`s Edge, your one-stop
            shop for all your shopping needs.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="grid gap-1">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Shop
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Customer Service</h4>
          <nav className="grid gap-1">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              FAQs
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Returns
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Shipping
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Legal</h3>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Cookie Policy
          </Link>
        </div>
        {/* <div className="grid gap-2">
          <h3 className="font-semibold">Contact</h3>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Support
          </Link>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Sales
          </Link>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Press
          </Link>
          <Link
            href="#"
            prefetch={false}
            className="hover:text-primary transition"
          >
            Partnerships
          </Link>
        </div> */}
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <nav className="flex items-center gap-3">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>

      <hr className="mt-8 dark:bg-gray-800" />
      <div className="container mx-auto px-4 md:px-6  py-2  mt-0 text-center ">
        <p className="text-gray-500 dark:text-gray-400">
          © 2024 Buyer`s Edge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// import Link from "next/link";

// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full  text-black dark:border border-gray-800 dark:bg-gray-950 dark:text-gray-50 pt-12">
//       <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-6 gap-6 px-4 md:px-6">
//         {/* Company Info */}
//         <div className="space-y-3 md:space-y-2 lg:space-y-3">
//           <h4 className="text-lg font-semibold">Company Info</h4>
//           <ul className="space-y-1.5">
//             <FooterLink href="#" text="About Us" />
//             <FooterLink href="#" text="Contact Us" />
//             <FooterLink href="#" text="Privacy Policy" />
//             <FooterLink href="#" text="Terms of Service" />
//           </ul>
//         </div>

//         {/* Shop */}
//         <div className="space-y-3 md:space-y-2 lg:space-y-3">
//           <h4 className="text-lg font-semibold">Shop</h4>
//           <ul className="space-y-1.5">
//             <FooterLink href="#" text="Products" />
//             <FooterLink href="#" text="Categories" />
//             <FooterLink href="#" text="Deals" />
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="space-y-3 text-gray-500 md:space-y-2 lg:space-y-3">
//           <h4 className="text-lg text-white font-semibold">Contact</h4>

//           <ul className="space-y-1.5">
//             <FooterLink
//               href="#"
//               text="849 north canso New York City, United State."
//             />

//             <FooterLink href="#" text="  buyersedge@hdk.com" />

//             <FooterLink href="#" text="+88015-88888-9999" />
//           </ul>
//         </div>

//         {/* Customer Service */}
//         <div className="space-y-3 md:space-y-2 lg:space-y-3">
//           <h4 className="text-lg font-semibold">Customer Service</h4>
//           <ul className="space-y-1.5">
//             <FooterLink href="#" text="FAQs" />
//             <FooterLink href="#" text="Shipping" />
//             <FooterLink href="#" text="Returns" />
//           </ul>
//         </div>

//         {/* Account */}
//         <div className="space-y-3 md:space-y-2 lg:space-y-3">
//           <h4 className="text-lg font-semibold">Account</h4>
//           <ul className="space-y-1.5">
//             <FooterLink href="#" text="My Account" />
//             <FooterLink href="#" text="Login/Register" />
//             <FooterLink href="#" text="Cart" />
//             <FooterLink href="#" text="Wishlist" />
//           </ul>
//         </div>
//         <div className="flex flex-col gap-2">
//           <h2 className="text-xl font-semibold  hover:text-gray-300">
//             Download App
//           </h2>

//           <div className="text-gray-500">
//             <div className="text-xs hover:text-gray-300">
//               Save $3 with App New User Only
//             </div>

//             <div className="py-1 gap-2 items-center flex  flex-row  ">
//               <div className="h-12 w-12">
//                 <img src="qr.png " alt="" />
//               </div>

//               <div className="flex flex-col  border   ">
//                 <img src="gl.png" height={50} width={80} alt="" />

//                 <img src="al.png" height={50} width={80} alt="" />
//               </div>
//             </div>

//             <div className="flex items-center gap-4 py-2">
//               <span>
//                 <Facebook className="w-6 h-6" />
//               </span>

//               <span>
//                 <Twitter className="w-6 h-6" />
//               </span>

//               <span>
//                 <Instagram className="w-6 h-6" />
//               </span>

//               <span>
//                 <Linkedin className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Newsletter */}
//       <div className=" hidden   py-2 items-center flex-col  ">
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           Subscribe to our newsletter for updates, deals, and more.
//         </p>
//         <div className="flex py-2 w-full max-w-md gap-1">
//           <Input
//             placeholder="Enter your email"
//             className="placeholder:text-xs dark:bg-white dark:border-gray-500 dark:ring-offset-0 dark:text-gray-500"
//             type="email"
//           />
//           <Button size="sm" className="text-gray-500 border ">
//             Subscribe
//           </Button>
//         </div>
//       </div>

//       {/* Secondary Content */}
//       <div className="sm:px-4 mt-2 py-2 text-gray-500 border-gray-800 border-t">
//         {/* Secondary Links */}
//         <ul className="flex items-center justify-center gap-8">
//           {/* <SecondaryLink imageSrc="/sell-image-9de8ef.svg" text="Become a Seller" />
//           <SecondaryLink imageSrc="/advertise-image-866c0b.svg" text="Advertise" />
//           <SecondaryLink imageSrc="/gift-cards-image-d7ff24.svg" text="Gift Cards" />
//           <SecondaryLink imageSrc="/help-centre-image-c4ace8.svg" text="Help Center" /> */}
//           <li>© 2007-2024 BayersEdge.com</li>
//           {/* <li><img src="/payment-method.svg" alt="Payment Methods" /></li> */}
//         </ul>
//       </div>
//     </footer>
//   );
// }

// // Footer Link component
// function FooterLink({ href, text }: { href: any; text: any }) {
//   return (
//     <li>
//       <Link href={href}>
//         <span className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text:gray-400 dark:hover:text-gray-50">
//           {text}
//         </span>
//       </Link>
//     </li>
//   );
// }

// // Secondary Link component
// function SecondaryLink({ imageSrc, text }: { imageSrc: any; text: any }) {
//   return (
//     <li className="flex items-center gap-2">
//       <img src={imageSrc} alt={text} />
//       <span>{text}</span>
//     </li>
//   );
// }
