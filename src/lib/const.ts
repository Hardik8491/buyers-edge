import {
  BadgeHelp,
  CreditCard,
  HeartIcon,
  LayoutDashboard,
  ListOrdered,
  Package2,
  Settings2,
  ShoppingCart,
  User2,
  UserRound,
  UsersRound,
} from "lucide-react";
import dark from "../../public/dark.svg";
import light from '../../public/light.svg'
export const menuLinks = [
  // {
  //   title: "",
  //   url: "/",
  //   icon: light, // Or your icon component
  //   className: "text-foreground h-8 w-8 transition-colors hover:text-foreground",
  // },
  {
    title: "Home",
    url: "/",
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Shop",
    url: "/categories",
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Blog",
    url: "/blog",
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Contact",
    url: "/contact",
    className: "text-muted-foreground  h-6 w-6 transition-colors hover:text-foreground",
  },
];

export const sideBarLinks = [
  
  // {
  //   title: "Buyer's Edge",
  //   url: "/",
  //   icon: dark, 
  //   className: "text-muted-foreground h-12 w-12 transition-colors hover:text-foreground",
  // },

  {
    title: "Dashboard",
    url: "/account/dashboard",
    icon: LayoutDashboard,
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Orders",
    url: "/account/orders",
    icon: ListOrdered, // Add icon if desired
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Products",
    url: "/account/products",
    icon: Package2, // Add icon if desired
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Customers",
    url: "/account/customers",
    icon: UsersRound, // Add icon if desired
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
    className: "text-muted-foreground h-6 w-6 transition-colors hover:text-foreground",
  },
];

export const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/account/dashboard",
  },
  {
    key: "profile",
    label: "Profile",
    icon: UserRound,
    href: "/account/",
  },

  {
    key: "cart",
    label: "My Cart",
    icon: ShoppingCart,
    href: "/account/cart",
  },
  {
    key: "wishlist",
    label: "Wishlist",
    icon: HeartIcon,
    href: "/account/wishlist",
  },

  {
    key: "orders",
    label: "My Orders",
    icon: ListOrdered,
    href: "/account/orders",
  },
  {
    key: "cards",
    label: "Cards",
    icon: CreditCard,
    href: "/account/cards",
  },
  {
    key: "help",
    label: "Help & Support",
    icon: BadgeHelp,
    href: "/account/helps",
  },
];
