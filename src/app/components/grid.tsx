"use client";

import React, { useEffect, useState } from "react";
import GridBox from "./gridbox";

interface GridProps{
  color: string;
  rangeLow : number;
  rangeHigh : number;
  rows : number;
}


const Grid: React.FC<GridProps> = ({ color, rangeLow, rangeHigh, rows }) => {
  const columns = rangeHigh-rangeLow + 1; 
  return (
<div className={`grid grid-cols-${columns} gap-y-[1vw] gap-x-[1vw] mt-[3vw]`}>
        {Array.from({ length: rows*columns }).map((_, index) => (
          <GridBox key={index} color={`bg-${color}-${((index % columns) + rangeLow-1) * 100}`} size="w-[9vw] h-[9vw]" />
        ))}
      </div>
  );
};

export default Grid;
