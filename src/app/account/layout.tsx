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
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import withAuth from "@/hoc/withAuth";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutQuery } from "../../../redux/features/authApi";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });
  const handleLogOut = async () => {
    try {
      setLogout(true);
      router.push("/")
      toast.success("Logout Successful!");
    
    } catch (error) {
      console.log(error);
      toast.error("error is occur");
    }
  };

  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Avatar>
              <AvatarImage
                src={
                  user?.avatar ||
                  session?.user?.image ||
                  "https://github.com/shadcn.png"
                }
              />
              <AvatarFallback>
                {user?.firstName + user?.lastName}
              </AvatarFallback>
            </Avatar>

            <small className=" flex flex-col items-start ml-3 gap-1 text-sm font-medium leading-none">
              <div className="text-sm font-medium capitalize"> Welcome</div>
              {user?.firstName + " " + user?.lastName}
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
  );
};

export default Layout;
