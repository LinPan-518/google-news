import React, { useState, useEffect } from "react";
import NavItem from "@/app/ui/navLink";
import { IoHomeOutline, IoStarOutline, IoAlbumsOutline } from "react-icons/io5";
import Search from "@/app/ui/search";

interface SidebarProps {
  isOpen: boolean;
}

const links = [
  { name: "Home", href: "/dashboard", icon: IoHomeOutline },
  {
    name: "Following",
    href: "/dashboard/following",
    icon: IoStarOutline,
  },
  { name: "Customers", href: "/dashboard/customers", icon: IoAlbumsOutline },
];

const subLinks = [
  { name: "Customers 1", href: "/dashboard/customers", icon: IoAlbumsOutline },
  { name: "Customers 3", href: "/dashboard/customers", icon: IoAlbumsOutline },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`bg-gray-100 h-full fixed overflow-y-hidden top-[125px] sm:top-[76px] left-0 z-30 px-2 py-5 min-w-60 shadow-lg transition-transform duration-300 ease-in-out ${
        isLargeScreen
          ? "translate-x-0"
          : isOpen
            ? "translate-x-0"
            : "-translate-x-full"
      } md:relative md:inset-y-0 md:translate-x-0`}
    >
      <div className="flex grow justify-between flex-col">
        <Search
          className={"relative block my-4 md:hidden"}
          onSearch={(searchTerm: string) => {
            console.log(searchTerm);
          }}
        />

        {links.map((link) => (
          <NavItem key={link.name} link={link} />
        ))}
        <hr className="my-6 border-b-2" />
        {subLinks.map((link) => (
          <NavItem key={link.name} link={link} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
