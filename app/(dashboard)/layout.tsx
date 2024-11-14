"use client";
import React, { useState } from "react";
import Sidebar from "@/app/ui/sideBar";
import Header from "@/app/ui/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-col overflow-y-hidden">
      <Header
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSideOpen={isSidebarOpen}
      />
      <div className="flex grow overflow-y-hidden relative mt-[125px] sm:mt-[76px]">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-grow p-8 overflow-y-auto flex flex-col lg:flex-row gap-8 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
