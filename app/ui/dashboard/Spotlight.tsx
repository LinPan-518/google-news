import React from "react";

interface SpotlightProps {
  title: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ title }) => (
  <div className="border p-4 mb-4 rounded shadow-lg bg-white">
    <h3 className="font-bold">{title}</h3>
  </div>
);
const spotlightData = [
  { title: "Spotlight 1: Important Update" },
  { title: "Spotlight 2: Trending Topic" },
  { title: "Spotlight 3: Must Read" },
  { title: "Spotlight 4: Exclusive News" },
];

const Spotlights: React.FC = () => (
  <div className="flex flex-col">
    {spotlightData.map((spotlight, index) => (
      <Spotlight key={index} title={spotlight.title} />
    ))}
  </div>
);

export default Spotlights;
