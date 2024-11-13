import React from "react";
import { stories, spotlights } from "@/app/lib/data";
import Card from "@/app/ui/dashboard/Card";

export default function Main() {
  return (
    <>
      {/* Center Section - Stories */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Card story={story} key={story.id} showImage={true} />
          ))}
        </div>
      </div>
      {/* Right Section - Spotlights */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Spotlights</h2>
        <div className="space-y-4">
          {spotlights.map((spotlight) => (
            <Card story={spotlight} key={spotlight.id} />
          ))}
        </div>
      </div>
    </>
  );
}
