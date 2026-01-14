import React from "react";

const Card = ({title,children}) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-2 text-lg font-medium text-zinc-800">{title}</h2>
      <div className="text-sm text-zinc-600">{children}</div>
    </div>
  );
};

export default Card;
