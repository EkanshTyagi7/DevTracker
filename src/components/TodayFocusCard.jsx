import React from "react";
import Card from "./Card";

const TodayFocusCard = ({ topics }) => {
  if (topics.length === 0) {
    return <Card title="Today’s Focus">No active topics. Great job!</Card>;
  }

  return (
    <Card title="Today's Focus">
      <ul className="flex flex-col gap-4">
        {topics.slice(0, 5).map((topic) => (
          <li key={topic.id} className="flex justify-between">
            <span>{topic.title}</span>
            <span className="text-xs text-zinc-500">
              Confidence {topic.confidence}/5
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodayFocusCard;
