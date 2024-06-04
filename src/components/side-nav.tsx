import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { sideBarLinks } from "@/lib/const";

// Define sidebar links as a constant array of objects

const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          {sideBarLinks.map((link) => (
            <Link
              key={link.title} // Unique key for React's reconciliation process
              href={link.url}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
             {link.icon && <link.icon className={`${link.className} mr-2`} />}  {/* Render icon if provided */}
              {link.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
