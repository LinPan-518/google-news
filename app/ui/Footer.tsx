import React from "react";
import Link from "next/link";

const footerLinks = [
  { title: "About", href: "#" },
  { title: "Help", href: "#" },
  { title: "Terms", href: "#" },
  { title: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Google News
            </Link>
            <p className="mt-2 text-sm text-gray-400">© 2024 News LLC</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
