"use client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { User } from "lucide-react";
import { menuItems } from "@/lib/const";

interface user {
  data: any;
  status: any;
}
export function UserNav() {
  const router = useRouter();
  const { data: session, status }: user = useSession();

  const HandleLogout = async () => {
    try {
      await signOut();
      router.push("/");
      toast.success("Logout Successful !");
    } catch (error) {}
  };

  return (
    <>
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={session?.data?.user?.image || "/avatars/01.png"}
                  alt="@shadcn"
                />
                <AvatarFallback className="uppercase">
                  {session?.user?.firstName[0] + session?.user?.lastName[0]}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.user?.firstName + session?.user?.lastName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {menuItems.map((item:any, index:any) => (
                <Link key={index} href={item?.href}>
                  <DropdownMenuItem className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"> 
               {<item.icon  className='h-4 w-4'/>}
                    {item?.label}
                    {item?.shortcut && (
                      <DropdownMenuShortcut>{item?.shortcut}</DropdownMenuShortcut>
                    )}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={HandleLogout}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/auth/login">
          <Button className="rounded-full " size="icon" variant="outline">
            <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </Link>
      )}
    </>
  );
}
