import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { lusitana } from "@/app/ui/Font";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black mr-2`}
    >
      <IoGlobeOutline className="h-6 w-6 rotate-[15deg]" />
    </div>
  );
}
