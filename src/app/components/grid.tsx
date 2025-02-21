"use client";

import React, { useState, useEffect } from "react";
import GridBox from "./gridbox";

interface GridProps {
  color: string;
  rows: number;
}

const Grid: React.FC<GridProps> = ({ color, rows }) => {
  const [rangeLow, setRangeLow] = useState(4);
  const [rangeHigh, setRangeHigh] = useState(8);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth >= 1280) {
        setRangeLow(2);
        setRangeHigh(10);
      } else if (window.innerWidth >= 1024) {
        setRangeLow(3);
        setRangeHigh(9);
      } else {
        setRangeLow(4);
        setRangeHigh(8);
      }
    };

    updateRanges(); // Run on mount
    window.addEventListener("resize", updateRanges);

    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  // Is this the best way to do this? ^

  const columns = rangeHigh - rangeLow + 1;

  return (
    <div className={`grid grid-cols-${columns} gap-y-[1vw] gap-x-[1vw] mt-[3vw]`}>
      {Array.from({ length: rows * columns }).map((_, index) => (
        <GridBox key={index} color={`bg-${color}-${((index % columns) + rangeLow - 1) * 100}`} size="w-[9vw] h-[9vw]" />
      ))}
    </div>
  );
};

export default Grid;
