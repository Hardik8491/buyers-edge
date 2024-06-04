"use client";
import Link from "next/link";
import {
  ClipboardSignature,
  HeartIcon,
  ListOrdered,
  LogOut,
  MessageCircle,
  ShoppingCart,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "@/helpers/protectRoute";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogOut = async () => {
    try {
      await signOut();
      router.push("/");
      toast.success("Logout Successful !");
    } catch (error) {}
  };
  return (
    <ProtectedRoute>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Avatar>
              <AvatarImage
                src={session?.user?.image || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <small className=" flex flex-col items-start ml-3 gap-1 text-sm font-medium leading-none">
              <div className="text-sm font-medium"> Welcome</div>
              Email address
            </small>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/account/"
                className="flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <User className="h-4 w-4" />
                My Profile
              </Link>
              <Link
                href="/account/cart"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Cart
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>

              <Link
                href="/account/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ListOrdered className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>

              <Link
                href="/account/wishlist"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HeartIcon className="h-4 w-4" />
                Wishlist
              </Link>
              <Link
                href="password/method"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ClipboardSignature className="h-4 w-4" />
                Payment Method
              </Link>

              <Link
                href="help/support"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Help/Support
              </Link>

              <Link
                onClick={handleLogOut}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                SignOut
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        
        </main> */}
        {children}
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Layout;
