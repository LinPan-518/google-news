
"use client";
import React, { useState } from "react";
import Sidebar from "@/app/ui/dashboard/SideBar";
import MainContent from "@/app/ui/dashboard/Main";

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow">
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
