import Link from "next/link";
import React from "react";
const navItems = ["Home", "For you", "Following", "News Showcase"];

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="mr-4 block min-[901px]:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/" className="text-xl font-bold text-blue-600">
            Google News
          </Link>
        </div>
        <nav className="hidden min-[901px]:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="relative">
          <input
            type="search"
            placeholder="Search news"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
