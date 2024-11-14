"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Search from "@/app/ui/search";
import { navItems } from "@/app/lib/config";
interface HeaderProps {
  isSideOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSideOpen }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md text-black w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center mr-4">
          <button
            className="mr-4 block md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div
              className={isSideOpen ? "bg-slate-400 rounded-full p-2" : "p-2"}
            >
              <IoMenu size={24} />
            </div>
          </button>

          <Link href="/" className="text-2xl font-bold text-sky-700 italic">
            News
          </Link>
        </div>

        <nav className="flex space-x-8 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx("text-lg rounded-md p-2 hover:bg-sky-100", {
                "bg-sky-300 font-bold": pathname === item.href,
              })}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Search
          className={"relative hidden md:block md:max-w-[400px]"}
          onSearch={(searchTerm: string) => {
            console.log(searchTerm);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
