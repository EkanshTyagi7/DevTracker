import React from "react";
import Card from "./Card";

const ConsistencyCard = () => {
  return (
    <Card title="Consistency Snapshot">
      <p>Learning streak: 3 days</p>
      <p className="text-xs text-zinc-500">(Will be dynamic in Phase 3)</p>
    </Card>
  );
};

export default ConsistencyCard;
