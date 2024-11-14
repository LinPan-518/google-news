import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavItemProps {
  link: {
    name: string;
    href: string;
    icon: IconType;
  };
}

const NavItem: React.FC<NavItemProps> = ({ link }) => {
  const LinkIcon = link.icon;
  return (
    <Link
      key={link.name}
      href={link.href}
      className={
        "flex h-[48px] grow gap-4 rounded-md items-center text-lg font-medium hover:bg-sky-100 py-2 px-3"
      }
    >
      <LinkIcon size={24} />
      <p>{link.name}</p>
    </Link>
  );
};

export default NavItem;
