import { Metadata } from "next";
import { stories, spotlights } from "@/app/lib/data";
import Card from "@/app/ui/card";

export const metadata: Metadata = {
  title: "Following",
};

const Following: React.FC = () => {
  return (
    <>
      <div className="lg:w-2/3 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card story={story} key={story.id} showImage={true} />
          ))}
        </div>
      </div>
      <div className="lg:1/4">
        <h2 className="text-2xl font-bold mb-4">Spotlights</h2>
        <div className="space-y-4">
          {spotlights.map((spotlight) => (
            <Card story={spotlight} key={spotlight.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Following;
