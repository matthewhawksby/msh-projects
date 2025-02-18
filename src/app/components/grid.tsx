"use client";

import React, { useEffect, useState } from "react";
import GridBox from "./gridbox";

interface GridProps{
  color: string;
}

const Grid: React.FC<GridProps> = ({ color }) => {
  return (
      <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-y-[1vw] gap-x-[1vw] mt-[3vw] w-full h-full">
        {Array.from({ length: 36 }).map((_, index) => (
          <GridBox key={index} color={`bg-${color}-${(index % 9 + 1) * 100}`} size="w-[9vw] h-[9vw]" />
        ))}
      </div>
  );
};

export default Grid;
