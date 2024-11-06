// import { AccountForm } from "@/components/account-form";
// import { Separator } from "@/components/ui/separator";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// export default function AccountPage() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/account">Account</BreadcrumbLink>
//             </BreadcrumbItem>

//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>Profile</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//       <Separator />
//       <AccountForm />
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import { UploadIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { AccountForm } from "@/components/account-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import withAuth from "@/hoc/withAuth";

const Account = () => {
  const { data: session } = useSession();
  return (
    <div className="flex border rounded-lg mx-4 my-2 flex-col sm:gap-4 sm:py-4 ">
      <header className=" flex h-14 gap-4 flex-col border-b mb-10  bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Account</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="flex h-14 gap-4 flex-col border-b mb-10  bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        {/* <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6"> */}
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              alt="Profile Image"
              src={session?.user?.image || "/placeholder-avatar.jpg"}
            />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>

          <div className="text-muted-foreground">
            <small className="flex my-4 flex-col items-start  gap-1 text-xs font-normal leading-none">
              This is your public display image. It can be your real image or a
              random photo.
            </small>
            <Button variant="outline">
              <UploadIcon className="mr-2 h-4 w-4" />
              Update Profile Image
            </Button>
          </div>
        </div>
        {/* <Separator /> */}
        <AccountForm />
      </main>
    </div>
  );
};

export default withAuth(Account);
