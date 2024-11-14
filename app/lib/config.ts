import { IoHomeOutline, IoStarOutline, IoAlbumsOutline } from "react-icons/io5";

const links = [
  { name: "Home", href: "/", icon: IoHomeOutline },
  {
    name: "Following",
    href: "/",
    icon: IoStarOutline,
  },
  { name: "Customers", href: "/", icon: IoAlbumsOutline },
];

const subLinks = [
  { name: "Customers 1", href: "/", icon: IoAlbumsOutline },
  { name: "Customers 3", href: "/", icon: IoAlbumsOutline },
];

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Following",
    href: "/following",
  },
  { name: "History", href: "/history" },
];

export { links, subLinks, navItems };
