import React from "react";
import Card from "./Card";

const WeakAreasCard = ({ topics }) => {
  if (topics.length === 0) {
    return <Card title="Weak Areas">No weak topics detected</Card>;
  }
  return (
    <Card title="Weak Areas">
      <ul className="flex flex-col gap-4">
        {topics.map((topic) => (
          <li key={topic.id} className="flex justify-between">
            <span>{topic.title}</span>
            <span className="text-xs text-red-500">
              Confidence {topic.confidence}/5
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WeakAreasCard;
