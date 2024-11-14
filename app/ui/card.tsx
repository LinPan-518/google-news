import React from "react";
import Image from "next/image";
import { Story } from "@/app/lib/types";
interface StoryProps {
  story: Story;
  showImage?: boolean;
}

const Card: React.FC<StoryProps> = ({ story, showImage = false }) => (
  <div
    key={story.id}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer hover:shadow-lg"
  >
    {showImage && (
      <Image
        src={story.image || "/placeholder.jpg"}
        alt="Card image"
        className="w-full h-48 object-cover"
        priority={false}
      />
    )}
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
      <p className="text-sm text-gray-600">
        {story.source} • {story.time}
      </p>
    </div>
  </div>
);

export default Card;
