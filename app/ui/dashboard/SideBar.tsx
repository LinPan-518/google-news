import Link from "next/link";
import React, { useState, useEffect } from "react";

const navItems = ["Home", "For you", "Following", "News Showcase"];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 901);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`bg-gray-800 fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isLargeScreen
          ? "translate-x-0"
          : isOpen
            ? "translate-x-0"
            : "-translate-x-full"
      } min-[901px]:relative min-[901px]:translate-x-0`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6 min-[901px]:hidden">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Google News
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item} className="py-2 hover:bg-gray-700">
                <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  <span className="text-white">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
