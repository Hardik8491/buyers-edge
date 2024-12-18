//@ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  MoreVertical,
  Package,
  Package2,
  PackageOpen,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { calculateGrandTotal } from "@/utils/calculateTotalQuatity";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { RootState } from "../../../../redux/store";

const Cart = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  let email = user?.email;

  const { cart } = useSelector((state) => state?.cart);
  console.log(cart);
  const Subtotal = calculateGrandTotal(cart);
  const total = Subtotal + 5 + 25;
  const onCheckout = async () => {
    try {
      const response = await fetch(
        `
        ${process.env.NEXT_PUBLIC_API_URL}
        /checkout/public`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            productIds: cart.map((item: any) => item.id),
            items: cart,
            email: email,
          }),
        }
      );

      const data = await response.json();
      if (response?.status === 200) {
        window.location.href = data.url;
      } else {
        console.error("Unexpected response status:", response?.status);
      }
    } catch (error: any) {
      console.error("Fetch network error:", error);
    }
  };

  const dispatch = useDispatch();
  const placeholder = "/images/placeholder.jpg";

  return (
    <div className="flex  border rounded-lg mx-4 my-2 flex-col sm:gap-4 sm:py-4 ">
      <header className=" flex flex-col h-14  mb-10 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <h2 className="scroll-m-20  pb-2 text-lg font-semibold tracking-tight first:mt-0">
          Your Cart
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage your cart products and view their details.
        </p>
      </header>
      {cart.length !== 0 ? (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Tabs defaultValue="week">
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ProductImage</TableHead>

                          <TableHead className="hidden md:table-cell">
                            Product Name
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Size
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Color
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody className="">
                        {cart.map((product: any, index) => (
                          <TableRow key={product.id}>
                            <TableCell>
                              <div>
                                <Image
                                  alt="Product Image"
                                  className="rounded-md"
                                  height={40}
                                  src={product?.images[0]?.url || placeholder}
                                  style={{
                                    aspectRatio: "40/40",
                                    objectFit: "contain",
                                  }}
                                  width={40}
                                />
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {product?.name}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                XL
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              Blue
                            </TableCell>
                            <TableCell className="text-right">
                              ${product?.price}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              {/* <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Order Oe31b70H
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: November 23, 2023</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader> */}
              <CardContent
                className={`${
                  cart.length > 0 ? "block" : "hidden"
                } p-6 text-sm`}
              >
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    {cart.map((product: any, index) => (
                      <li
                        className="flex items-center justify-between"
                        key={index}
                      >
                        <span className="text-muted-foreground">
                          {product?.name} x <span>{product?.quantity}</span>
                        </span>
                        <span>${product?.price}</span>
                      </li>
                    ))}
                    {/* <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li> */}
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${Subtotal || 299.0}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>${total || 329.0}</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                {/* <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">liam@acme.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div> */}
                <Button
                  size="default"
                  variant="default"
                  className="w-full"
                  disabled={cart.length === 0}
                  onClick={user ? onCheckout : () => toast.error("login first")}
                >
                  Checkout
                </Button>
              </CardContent>
              {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter> */}
            </Card>
          </div>
        </main>
      ) : (
        <main className="flex  w-full h-full flex-1 items-center justify-center  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
          <div className="flex w-full h-72  items-center justify-center  border rounded-lg mx-4 my-2 flex-col sm:gap-4 sm:py-4 ">
            <span>
              <PackageOpen height={50} width={50} className="text-xl font-semibold text-secondary"/>
             
            </span>
            <p className="text-xl font-semibold text-secondary">
              Your cart is empty
            </p>
          </div>
        </main>
      )}
    </div>
  );
};

export default Cart;
