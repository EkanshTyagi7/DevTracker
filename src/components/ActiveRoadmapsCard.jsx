import React from "react";
import Card from "./Card";
import { getRoadmapProgress } from "@/store/selectors";

const ActiveRoadmapsCard = ({roadmaps}) => {
  return (
    <Card title="Active Roadmaps">
      <ul className="flex flex-col gap-4">
        {roadmaps.map((roadmap) => {
          const progress = getRoadmapProgress(roadmap);

          return (
            <li key={roadmap.id}>
              <div className="flex justify-between text-sm">
                <span>{roadmap.title}</span>
                <span>{progress}%</span>
              </div>

              <div className="mt-1 h-2 w-full rounded bg-zinc-100">
                <div
                  className="h-2 rounded bg-indigo-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ActiveRoadmapsCard;
