import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following",
};

const History = () => {
  return (
    <>
      {/* Center Section - Stories */}
      <div className="lg:w-2/3 flex-grow bg-slate-200">
        <h2 className="text-2xl font-bold mb-4">Center Container</h2>
      </div>

      {/* Right Section - Spotlights */}
      <div className="lg:1/4 bg-slate-300">
        <h2 className="text-2xl font-bold mb-4">Right Container</h2>
      </div>
    </>
  );
};

export default History;
