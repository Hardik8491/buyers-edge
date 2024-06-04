//@ts-nocheck
"use client";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming cn is a utility for class name concatenation

import { menuLinks } from "@/lib/const";
import { usePathname } from "next/navigation";
import Dark from "../../public/dark.svg";
import Light from "../../public/light.svg";
interface MainNavProps {
  title: string;
  url: string;
  className?: string; // Optional className for the link
  icon?: React.ComponentType; // Type for the icon component
}

export function MainNav() {
  const currentPath = usePathname(); // Use useRouter hook to get current path

  return (
    <nav className="hidden   flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex text-nowrap  mr-2 items-center gap-2 text-foreground transition-colors hover:text-foreground "
      >
        <Dark className="h-10 w-10 text-black cursor-pointer hidden dark:block" color="" />
        <Light className="h-8 w-8 text-black cursor-pointer dark:hidden" color="" />
        <span className="text-xl font-bold">
          Buyer`s <span className="text-primary">Edge</span>
        </span>
      </Link>

      {menuLinks.map((link: MainNavProps) => {
        const isActive = currentPath === link.url; // Check if current path matches link URL

        const linkClassName = cn(
          "flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
          isActive && "text-foreground" // Add "bg-foreground" for active link
        );

        return (
          <Link key={link.title} href={link.url} className={linkClassName}>
            {link.icon && <link.icon className={`${link.className} mr-2`} />}{" "}
            {/* Render icon if provided */}
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
